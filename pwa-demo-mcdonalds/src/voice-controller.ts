/**
 * voice-controller.ts
 * -----------------------------------------------------------
 * Reconocimiento de voz para comandos del menú.
 * Usa Web Speech API (SpeechRecognition) — funciona en
 * Chrome/Edge desktop y Android. iOS Safari tiene soporte
 * parcial (requiere tap para iniciar).
 *
 * Comandos reconocidos:
 *   - "menú" / "menu" / "abrir menú"      → abre el menú
 *   - "cerrar" / "cerrar menú"             → cierra el menú
 *   - "abrir [producto]"                   → abre menú y salta al producto
 *       ej: "abrir Big Mac"
 *            "abrir papas"
 *            "abrir Coca-Cola"
 *   - "tour" / "presentación"              → inicia modo presentación
 *   - "parar tour" / "detener"             → detiene el tour
 *
 * El reconocimiento corre en modo continuo y se re-inicia
 * automáticamente si se cae. Muestra un indicador visual
 * (micrófono rojo/pulsante) cuando está escuchando.
 * -----------------------------------------------------------
 */

export interface VoiceCommand {
  type: 'open-menu' | 'close-menu' | 'goto-product' | 'start-tour' | 'stop-tour' | 'unknown';
  product?: string;   // nombre del producto normalizado (para goto-product)
  raw: string;        // texto reconocido crudo
}

export interface VoiceControllerOptions {
  onCommand: (cmd: VoiceCommand) => void;
  onListeningChange?: (listening: boolean) => void;
  onError?: (err: string) => void;
}

// Lista de productos conocidos para matching fonético aproximado.
// Cada entrada: [variantes de texto que puede decir el usuario, clave canónica]
const PRODUCT_KEYWORDS: Array<[string[], string]> = [
  [['big mac', 'bigmac', 'big mac'], 'Big Mac'],
  [['cuarto de libra', 'cuarto', 'quarter pounder'], 'Cuarto de Libra'],
  [['doble cuarto', 'doble cuarto de libra'], 'Doble Cuarto de Libra'],
  [['cheeseburger', 'chesburguer', 'cheese', 'chesborger'], 'Cheeseburger'],
  [['mcdouble', 'mac double', 'doble'], 'McDouble'],
  [['mcchicken', 'mac chicken', 'pollo'], 'McChicken'],
  [['filet o fish', 'filete o fish', 'filete', 'pescado'], 'Filete-O-Fish'],
  [['mcnuggets', 'mac nuggets', 'nuggets', 'nuguet'], 'McNuggets (6u)'],
  [['papas', 'papas fritas', 'fries'], 'Papas Fritas Medianas'],
  [['coca', 'coca cola', 'cola'], 'Coca-Cola'],
  [['sprite'], 'Sprite'],
  [['fanta'], 'Fanta Naranja'],
  [['agua'], 'Agua Mineral'],
  [['cafe', 'café', 'latte', 'latte cafe'], 'Café Americano'],
  [['capuchino', 'cappuccino'], 'Capuchino'],
  [['mocha'], 'McCafé Mocha'],
  [['helado', 'cono', 'vainilla'], 'Helado de Vainilla'],
  [['sundae', 'sunday', 'sundae de chocolate'], 'Sundae Chocolate'],
  [['tarta de manzana', 'apple pie', 'pay de manzana'], 'Tarta de Manzana'],
  [['mcflurry', 'mac flurry', 'flurry'], 'Brownie MCFlurry'],
  [['mcmuffin', 'mac muffin', 'muffin'], 'McMuffin de Huevo'],
  [['hotcakes', 'panqueques', 'panqueque'], 'Hotcakes'],
  [['medialuna', 'medialunas'], 'Medialuna'],
  [['combo big mac', 'combo'], 'Combo Big Mac']
];

export class VoiceController {
  private recognition: any = null;  // SpeechRecognition (vendor-prefixed)
  private listening = false;
  private shouldRestart = true;     // auto-restart al parar
  private opts: VoiceControllerOptions;
  private micIndicator: HTMLDivElement;

  constructor(opts: VoiceControllerOptions) {
    this.opts = opts;

    // Indicador visual de micrófono (esquina superior derecha)
    this.micIndicator = document.createElement('div');
    this.micIndicator.id = 'voice-mic';
    this.micIndicator.style.cssText = [
      'position: fixed',
      'top: 12px',
      'right: 12px',
      'width: 44px',
      'height: 44px',
      'border-radius: 50%',
      'background: rgba(0,0,0,0.6)',
      'border: 2px solid rgba(255,255,255,0.3)',
      'display: flex',
      'align-items: center',
      'justify-content: center',
      'font-size: 22px',
      'z-index: 950',
      'opacity: 0.4',
      'transition: opacity 0.2s ease, background 0.2s ease, border 0.2s ease',
      'cursor: pointer',
      'user-select: none'
    ].join(';');
    this.micIndicator.innerHTML = '🎤';
    this.micIndicator.title = 'Voz: click para activar/desactivar';

    this.micIndicator.addEventListener('click', () => {
      if (this.listening) {
        this.stop();
      } else {
        this.start();
      }
    });

    document.body.appendChild(this.micIndicator);
  }

  /** Inicializa el SpeechRecognition. Llamar una vez al arrancar la app. */
  public init(): boolean {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) {
      console.warn('⚠️ VoiceController: SpeechRecognition no soportado en este navegador');
      this.micIndicator.style.display = 'none';
      return false;
    }

    this.recognition = new SR();
    this.recognition.lang = 'es-ES';
    this.recognition.continuous = true;
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 3;

    this.recognition.onstart = () => {
      this.listening = true;
      this.micIndicator.style.opacity = '1';
      this.micIndicator.style.background = 'rgba(218,41,28,0.85)';
      this.micIndicator.style.border = '2px solid #FFC72C';
      this.opts.onListeningChange?.(true);
    };

    this.recognition.onend = () => {
      this.listening = false;
      this.micIndicator.style.opacity = '0.4';
      this.micIndicator.style.background = 'rgba(0,0,0,0.6)';
      this.micIndicator.style.border = '2px solid rgba(255,255,255,0.3)';
      this.opts.onListeningChange?.(false);
      // Auto-restart si no fue detenido manualmente
      if (this.shouldRestart) {
        setTimeout(() => {
          try { this.recognition?.start(); } catch { /* already running */ }
        }, 300);
      }
    };

    this.recognition.onerror = (e: any) => {
      const err = e?.error || 'unknown';
      // 'no-speech' y 'aborted' son normales en modo continuo, no reportar
      if (err !== 'no-speech' && err !== 'aborted') {
        this.opts.onError?.(err);
      }
    };

    this.recognition.onresult = (e: any) => {
      if (!e.results || e.results.length === 0) return;
      const last = e.results[e.results.length - 1];
      if (!last || !last[0]) return;
      const transcript = (last[0].transcript || '').trim().toLowerCase();
      if (!transcript) return;
      console.log('🎤 Voz:', transcript);
      const cmd = this.parseCommand(transcript);
      if (cmd.type !== 'unknown') {
        this.opts.onCommand(cmd);
      }
    };

    return true;
  }

  /** Arranca el reconocimiento. */
  public start(): void {
    if (!this.recognition || this.listening) return;
    this.shouldRestart = true;
    try {
      this.recognition.start();
    } catch (err) {
      // puede fallar si ya está corriendo — ignorar
    }
  }

  /** Detiene el reconocimiento (sin auto-restart). */
  public stop(): void {
    this.shouldRestart = false;
    try {
      this.recognition?.stop();
    } catch { /* noop */ }
  }

  /** Parsea el texto reconocido y devuelve el comando. */
  private parseCommand(text: string): VoiceCommand {
    // Normalizar: quitar acentos, puntuación
    const clean = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

    // Cerrar
    if (/\b(cerrar|cierra|cerrá|close|salir|ocultar)\b/.test(clean) ||
        /cerrar menu|cerrar el menu/.test(clean)) {
      return { type: 'close-menu', raw: text };
    }

    // Abrir menú (sin producto específico)
    if (/^(menu|menú|abrir menu|abrir el menu|open menu|ver menu)$/.test(clean) ||
        /\babrir\b\s*\b(menu|menú)\b/.test(clean)) {
      return { type: 'open-menu', raw: text };
    }

    // Tour / presentación
    if (/\b(tour|presentacion|presentación|recorrido|demo|autoplay)\b/.test(clean)) {
      return { type: 'start-tour', raw: text };
    }
    if (/\b(parar|detener|deten|stop|cancelar|salir)\b.*\b(tour|presentacion|recorrido)\b/.test(clean) ||
        /\b(parar tour|detener tour|parar presentacion|detener presentacion)\b/.test(clean)) {
      return { type: 'stop-tour', raw: text };
    }

    // Abrir [producto] — buscar el primer match de PRODUCT_KEYWORDS
    // Primero intentamos con "abrir X" / "ver X" / "buscar X"
    const openMatch = clean.match(/\b(abrir|ver|buscar|quiero|dame|mostrar)\b\s+(.+)/);
    const searchStr = openMatch ? openMatch[2] : clean;

    for (const [variants, canonical] of PRODUCT_KEYWORDS) {
      for (const v of variants) {
        const vNorm = v.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
        // Match exacto o como substring (palabra completa)
        const re = new RegExp(`\\b${vNorm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
        if (re.test(searchStr)) {
          return { type: 'goto-product', product: canonical, raw: text };
        }
      }
    }

    // Si no matcheó nada, pero menciona un producto sin "abrir", también contarlo
    for (const [variants, canonical] of PRODUCT_KEYWORDS) {
      for (const v of variants) {
        const vNorm = v.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
        const re = new RegExp(`\\b${vNorm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
        if (re.test(clean)) {
          return { type: 'goto-product', product: canonical, raw: text };
        }
      }
    }

    return { type: 'unknown', raw: text };
  }
}

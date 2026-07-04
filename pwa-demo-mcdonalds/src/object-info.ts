/**
 * object-info.ts
 * -----------------------------------------------------------
 * Catálogo de objetos interactuables del McDonald's.
 * Recibe un Object3D (resultado de un raycast) y trata de
 * clasificarlo por nombre del mesh o de sus ancestros.
 * Muestra un popup con emoji + título + descripción.
 *
 * El catálogo es tolerante: match case-insensitive por
 * palabras clave en español e inglés.
 * -----------------------------------------------------------
 */

import * as THREE from 'three';

interface ObjectCatalogEntry {
  emoji: string;
  title: string;
  description: string;
  /** Palabras clave a buscar en el nombre del mesh (case-insensitive). */
  keywords: string[];
}

const CATALOG: ObjectCatalogEntry[] = [
  {
    emoji: '💰',
    title: 'Mostrador',
    description: 'Hacé tu pedido aquí. Atención al cliente y cajas para pagar.',
    keywords: ['mostrador', 'counter', 'caja', 'cashier', 'tilde', 'checkout', 'register']
  },
  {
    emoji: '🖥️',
    title: 'Kiosk',
    description: 'Pedidos self-service. Tocá la pantalla para armar tu pedido.',
    keywords: ['kiosk', 'kiosco', 'pantalla', 'screen', 'touchscreen', 'totem', 'tótem']
  },
  {
    emoji: '🪑',
    title: 'Mesa',
    description: 'Comedor principal. Sentate y disfrutá tu pedido.',
    keywords: ['mesa', 'table', 'chair', 'silla', 'banqueta', 'asiento', 'seat', 'booth']
  },
  {
    emoji: '👨‍🍳',
    title: 'Cocina',
    description: 'Preparación de pedidos. Zona restringida al personal.',
    keywords: ['cocina', 'kitchen', 'grill', 'parrilla', 'freidora', 'fryer', 'horno', 'oven']
  },
  {
    emoji: '🚻',
    title: 'Baños',
    description: 'Zona de servicios. WC para clientes.',
    keywords: ['baño', 'bano', 'bathroom', 'toilet', 'wc', 'restroom', 'lavabo']
  },
  {
    emoji: '🚪',
    title: 'Puerta',
    description: 'Salida del local. Mirala para salir de la experiencia.',
    keywords: ['puerta', 'door', 'exit', 'salida', 'entrance', 'entrada']
  },
  {
    emoji: '🍔',
    title: 'Menú',
    description: 'Cartel con el menú del local. Burgers, papas, postres y más.',
    keywords: ['menu', 'menú', 'cartel', 'sign', 'board', 'carta', 'mccafe']
  },
  {
    emoji: '🚗',
    title: 'Drive-Thru',
    description: 'Pedidos desde el auto. Zona exterior.',
    keywords: ['drive', 'drivethru', 'auto', 'car']
  },
  {
    emoji: '🧒',
    title: 'Zona infantil',
    description: 'Espacio para los más chicos. Juegos y diversión.',
    keywords: ['play', 'playground', 'infantil', 'kids', 'niños', 'ninos', 'mccafe']
  }
];

/** Busca en el catálogo por nombre del objeto (case-insensitive). */
function classifyByName(name: string): ObjectCatalogEntry | null {
  const lower = name.toLowerCase();
  for (const entry of CATALOG) {
    for (const kw of entry.keywords) {
      if (lower.includes(kw)) return entry;
    }
  }
  return null;
}

/**
 * Recorre el árbol de ancestros del objeto hasta encontrar uno
 * cuyo nombre coincida con alguna entrada del catálogo.
 */
export function classifyObject(obj: THREE.Object3D): ObjectCatalogEntry | null {
  let current: THREE.Object3D | null = obj;
  let depth = 0;
  while (current && depth < 10) {
    if (current.name) {
      const match = classifyByName(current.name);
      if (match) return match;
    }
    current = current.parent;
    depth++;
  }
  return null;
}

export class ObjectInfoPopup {
  private overlay: HTMLDivElement;
  private card: HTMLDivElement;
  private onClose?: () => void;

  constructor() {
    this.overlay = document.createElement('div');
    this.overlay.id = 'object-info-popup';
    this.overlay.style.cssText = [
      'position: fixed',
      'inset: 0',
      'background: rgba(0,0,0,0.65)',
      'backdrop-filter: blur(6px)',
      '-webkit-backdrop-filter: blur(6px)',
      'display: flex',
      'align-items: center',
      'justify-content: center',
      'z-index: 960',
      'opacity: 0',
      'pointer-events: none',
      'transition: opacity 0.2s ease'
    ].join(';');

    this.card = document.createElement('div');
    this.card.style.cssText = [
      'background: linear-gradient(180deg, #1f1f1f 0%, #2a2a2a 100%)',
      'border: 1px solid rgba(255,199,44,0.4)',
      'border-radius: 18px',
      'padding: 1.6rem 1.4rem',
      'max-width: 340px',
      'width: 86%',
      'text-align: center',
      'box-shadow: 0 20px 60px rgba(0,0,0,0.6)',
      'transform: scale(0.9)',
      'transition: transform 0.2s ease',
      'font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
      'color: #fff'
    ].join(';');

    this.overlay.appendChild(this.card);

    // Cerrar al hacer click fuera del card
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) this.hide();
    });

    document.body.appendChild(this.overlay);
  }

  public show(emoji: string, title: string, description: string, meshName?: string): void {
    this.card.innerHTML = `
      <div style="font-size: 2.4rem; margin-bottom: 0.5rem;">${emoji}</div>
      <div style="font-size: 1.2rem; font-weight: 800; margin-bottom: 0.5rem; color: #FFC72C;">${title}</div>
      <div style="font-size: 0.88rem; color: #ccc; line-height: 1.5; margin-bottom: 1rem;">${description}</div>
      ${meshName ? `<div style="font-size: 0.7rem; color: #666; font-family: monospace; margin-bottom: 0.8rem;">${meshName}</div>` : ''}
      <button id="obj-info-close" style="
        background: linear-gradient(90deg, #DA291C, #FFC72C);
        color: #fff;
        font-weight: 700;
        font-size: 0.95rem;
        padding: 0.7rem 1.6rem;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        box-shadow: 0 4px 14px rgba(218,41,28,0.4);
      ">Cerrar</button>
    `;
    const closeBtn = this.card.querySelector('#obj-info-close');
    closeBtn?.addEventListener('click', () => this.hide());

    this.overlay.style.opacity = '1';
    this.overlay.style.pointerEvents = 'auto';
    this.card.style.transform = 'scale(1)';
  }

  public hide(): void {
    this.overlay.style.opacity = '0';
    this.overlay.style.pointerEvents = 'none';
    this.card.style.transform = 'scale(0.9)';
    this.onClose?.();
  }

  public isOpen(): boolean {
    return this.overlay.style.pointerEvents === 'auto';
  }

  public setOnClose(cb: () => void): void {
    this.onClose = cb;
  }
}

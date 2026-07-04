/**
 * menu-popup.ts
 * -----------------------------------------------------------
 * Menú desplegable que se abre al hacer el gesto OK con la mano
 * (índice + medio + pulgar extendidos).
 *
 * Contenido:
 *  - Fotos reales de cada producto (CDN público de McDonald's).
 *    Si la imagen falla al cargar, se reemplaza por un emoji.
 *  - Precios en pesos uruguayos ($U), referenciales 2024-2025.
 *  - Categorías colapsables: Hamburguesas, Pollo, Papas, Bebidas,
 *    Postres, Desayunos, Combos.
 *
 * Estilo McDonald's: rojo (#DA291C) + amarillo (#FFC72C) sobre
 * fondo oscuro. Mobile-first, todo legible sin zoom.
 * -----------------------------------------------------------
 */

interface MenuItem {
  emoji: string;
  name: string;
  description: string;
  price: string; // ya formateado en $U
  image?: string; // URL de la foto real (opcional)
}

interface MenuCategory {
  emoji: string;
  title: string;
  items: MenuItem[];
}

// Precios en pesos uruguayos ($U), referenciales 2024-2025.
// Imágenes: CDN público de McDonald's (mcdonalds.com / mcdonalds.com.uy).
// Si la URL no carga (CORS, offline, etc.), el <img> dispara onerror
// y dejamos un fallback con el emoji.
const MENU: MenuCategory[] = [
  {
    emoji: '🍔',
    title: 'Hamburguesas',
    items: [
      {
        emoji: '🍔',
        name: 'Big Mac',
        description: 'Doble carne, queso, lechuga, pepino, salsa Big Mac',
        price: '$U 590',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Big-Mac.jpg'
      },
      {
        emoji: '🍔',
        name: 'Cuarto de Libra',
        description: 'Carne 113g, queso cheddar, cebolla, pepinillos, ketchup',
        price: '$U 650',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Quarter-Pounder-with-Cheese.jpg'
      },
      {
        emoji: '🍔',
        name: 'Doble Cuarto de Libra',
        description: 'Doble carne 226g, doble queso, mostaza, cebolla, pepinillos',
        price: '$U 790',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Double-Quarter-Pounder-with-Cheese.jpg'
      },
      {
        emoji: '🍔',
        name: 'Cheeseburger',
        description: 'Carne, queso cheddar, cebolla, pepinillos, mostaza, ketchup',
        price: '$U 290',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Cheeseburger.jpg'
      },
      {
        emoji: '🍔',
        name: 'McDouble',
        description: 'Doble carne, queso, cebolla, pepinillos, mostaza, ketchup',
        price: '$U 390',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-McDouble.jpg'
      },
      {
        emoji: '🍔',
        name: 'Hamburguesa Simple',
        description: 'Carne, cebolla, pepinillos, mostaza, ketchup',
        price: '$U 240',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Hamburger.jpg'
      },
      {
        emoji: '🐷',
        name: 'McPork Deluxe',
        description: 'Cerdo grillado, queso, lechuga, mayonesa',
        price: '$U 590',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Quarter-Pounder-with-Cheese.jpg'
      }
    ]
  },
  {
    emoji: '🐔',
    title: 'Pollo',
    items: [
      {
        emoji: '🐔',
        name: 'McChicken',
        description: 'Pollo crujiente, lechuga, mayonesa',
        price: '$U 540',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-McChicken-Sandwich.jpg'
      },
      {
        emoji: '🐟',
        name: 'Filete-O-Fish',
        description: 'Pescado rebozado, queso, salsa tártara',
        price: '$U 520',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Filet-O-Fish.jpg'
      },
      {
        emoji: '🍗',
        name: 'McNuggets (6u)',
        description: '6 nuggets de pollo crujientes con salsa a elección',
        price: '$U 390',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Chicken-McNuggets-6-piece.jpg'
      },
      {
        emoji: '🍗',
        name: 'McNuggets (10u)',
        description: '10 nuggets de pollo crujientes con salsa a elección',
        price: '$U 590',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Chicken-McNuggets-10-piece.jpg'
      },
      {
        emoji: '🥪',
        name: 'Crispy Chicken Deluxe',
        description: 'Pollo crujiente, tomate, lechuga, queso, mayonesa',
        price: '$U 690',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Deluxe-Crispy-Chicken-Sandwich.jpg'
      }
    ]
  },
  {
    emoji: '🍟',
    title: 'Acompañamientos',
    items: [
      {
        emoji: '🍟',
        name: 'Papas Fritas Medianas',
        description: 'Las clásicas papas crujientes doradas',
        price: '$U 220',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Medium-French-Fries.jpg'
      },
      {
        emoji: '🍟',
        name: 'Papas Fritas Grandes',
        description: 'Porción grande de las clásicas papas crujientes',
        price: '$U 290',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Large-French-Fries.jpg'
      },
      {
        emoji: '🧀',
        name: 'Papas con Cheddar',
        description: 'Papas fritas con salsa de queso cheddar',
        price: '$U 320',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Medium-French-Fries.jpg'
      },
      {
        emoji: '🥗',
        name: 'Ensalada César',
        description: 'Lechuga, pollo grillado, croutones, parmesano, salsa césar',
        price: '$U 490',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Caesar-Salad-with-Grilled-Chicken.jpg'
      },
      {
        emoji: '🧅',
        name: 'Aros de Cebolla (6u)',
        description: '6 aros de cebolla rebozados, crujientes',
        price: '$U 290',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Medium-French-Fries.jpg'
      }
    ]
  },
  {
    emoji: '🥤',
    title: 'Bebidas',
    items: [
      {
        emoji: '🥤',
        name: 'Coca-Cola',
        description: 'Refresco de cola. Tamaños: chico / mediano / grande',
        price: '$U 220',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Medium-Coca-Cola.jpg'
      },
      {
        emoji: '🥤',
        name: 'Sprite',
        description: 'Refresco de limón-lima. Sin cafeína',
        price: '$U 220',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Medium-Sprite.jpg'
      },
      {
        emoji: '🥤',
        name: 'Fanta Naranja',
        description: 'Refresco de naranja. Sabor cítrico',
        price: '$U 220',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Medium-Fanta-Orange.jpg'
      },
      {
        emoji: '💧',
        name: 'Agua Mineral',
        description: 'Agua sin gas. Botella 500ml',
        price: '$U 180',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Dasani-Water.jpg'
      },
      {
        emoji: '🧊',
        name: 'Limonada Frozen',
        description: 'Limonada frappeada con hielo. Sabores: clásica / frutilla',
        price: '$U 320',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Minute-Maid-Slushie-Lemonade.jpg'
      }
    ]
  },
  {
    emoji: '☕',
    title: 'McCafé',
    items: [
      {
        emoji: '☕',
        name: 'Café Americano',
        description: 'Café caliente, intenso. Tamaño mediano',
        price: '$U 240',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Medium-Premium-Roast-Coffee.jpg'
      },
      {
        emoji: '🥛',
        name: 'McCafé Latte',
        description: 'Espresso con leche vaporizada. Varios sabores',
        price: '$U 380',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Latte.jpg'
      },
      {
        emoji: '🍫',
        name: 'McCafé Mocha',
        description: 'Espresso, leche, chocolate vaporizado. Crema de leche',
        price: '$U 410',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Mocha.jpg'
      },
      {
        emoji: '☕',
        name: 'Capuchino',
        description: 'Espresso con espuma de leche cremosa',
        price: '$U 360',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Cappuccino.jpg'
      }
    ]
  },
  {
    emoji: '🍦',
    title: 'Postres',
    items: [
      {
        emoji: '🍦',
        name: 'Helado de Vainilla',
        description: 'Cono de helado cremoso de vainilla',
        price: '$U 150',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Vanilla-Cone.jpg'
      },
      {
        emoji: '🍦',
        name: 'Sundae Chocolate',
        description: 'Helado de vainilla con salsa de chocolate',
        price: '$U 240',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Hot-Fudge-Sundae.jpg'
      },
      {
        emoji: '🍦',
        name: 'Sundae Fresa',
        description: 'Helado de vainilla con salsa de frutilla',
        price: '$U 240',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Strawberry-Sundae.jpg'
      },
      {
        emoji: '🥧',
        name: 'Tarta de Manzana',
        description: 'Tarta caliente de manzana con canela',
        price: '$U 190',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Apple-Pie.jpg'
      },
      {
        emoji: '🍫',
        name: 'Brownie MCFlurry',
        description: 'Helado de vainilla con trozos de brownie y salsa de chocolate',
        price: '$U 340',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-McFlurry-with-Oreo-Cookies.jpg'
      }
    ]
  },
  {
    emoji: '🍳',
    title: 'Desayunos',
    items: [
      {
        emoji: '🥚',
        name: 'McMuffin de Huevo',
        description: 'Huevo, queso cheddar, jamón, pan inglés tostado',
        price: '$U 320',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Egg-McMuffin.jpg'
      },
      {
        emoji: '🥞',
        name: 'Hotcakes',
        description: '3 panqueques con miel y manteca',
        price: '$U 290',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Hotcakes.jpg'
      },
      {
        emoji: '🥐',
        name: 'Medialuna',
        description: 'Medialuna de manteca caliente',
        price: '$U 120',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Egg-McMuffin.jpg'
      }
    ]
  },
  {
    emoji: '📦',
    title: 'Combos',
    items: [
      {
        emoji: '🍔',
        name: 'Combo Big Mac',
        description: 'Big Mac + papas medianas + bebida mediana',
        price: '$U 890',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Big-Mac.jpg'
      },
      {
        emoji: '🍔',
        name: 'Combo Cuarto de Libra',
        description: 'Cuarto de Libra + papas medianas + bebida mediana',
        price: '$U 950',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Quarter-Pounder-with-Cheese.jpg'
      },
      {
        emoji: '🐔',
        name: 'Combo McChicken',
        description: 'McChicken + papas medianas + bebida mediana',
        price: '$U 840',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-McChicken-Sandwich.jpg'
      },
      {
        emoji: '🍗',
        name: 'Combo McNuggets 6u',
        description: '6 McNuggets + papas medianas + bebida mediana',
        price: '$U 690',
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Chicken-McNuggets-6-piece.jpg'
      }
    ]
  }
];

export class MenuPopup {
  private overlay: HTMLDivElement;
  private card: HTMLDivElement;
  private onClose?: () => void;

  constructor() {
    this.overlay = document.createElement('div');
    this.overlay.id = 'menu-popup';
    this.overlay.style.cssText = [
      'position: fixed',
      'inset: 0',
      'background: rgba(0,0,0,0.78)',
      'backdrop-filter: blur(8px)',
      '-webkit-backdrop-filter: blur(8px)',
      'display: flex',
      'align-items: center',
      'justify-content: center',
      'z-index: 970',
      'opacity: 0',
      'pointer-events: none',
      'transition: opacity 0.25s ease',
      'font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
    ].join(';');

    this.card = document.createElement('div');
    this.card.style.cssText = [
      'background: linear-gradient(180deg, #1f1f1f 0%, #2a2a2a 100%)',
      'border: 1px solid rgba(255,199,44,0.5)',
      'border-radius: 18px',
      'padding: 1.2rem 1rem 1rem',
      'max-width: 460px',
      'width: 92%',
      'max-height: 85vh',
      'overflow-y: auto',
      'box-shadow: 0 20px 60px rgba(0,0,0,0.7)',
      'transform: scale(0.9) translateY(20px)',
      'transition: transform 0.25s ease',
      'color: #fff',
      '-webkit-overflow-scrolling: touch'
    ].join(';');

    this.overlay.appendChild(this.card);

    // Cerrar al hacer click fuera del card
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) this.hide();
    });

    document.body.appendChild(this.overlay);
  }

  public show(): void {
    this.render();
    this.overlay.style.opacity = '1';
    this.overlay.style.pointerEvents = 'auto';
    this.card.style.transform = 'scale(1) translateY(0)';
  }

  public hide(): void {
    this.overlay.style.opacity = '0';
    this.overlay.style.pointerEvents = 'none';
    this.card.style.transform = 'scale(0.9) translateY(20px)';
    this.onClose?.();
  }

  public isOpen(): boolean {
    return this.overlay.style.pointerEvents === 'auto';
  }

  public setOnClose(cb: () => void): void {
    this.onClose = cb;
  }

  /** Renderiza el contenido del menú. */
  private render(): void {
    // Cabecera
    const header = `
      <div style="
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 0.7rem;
        margin-bottom: 0.6rem;
        border-bottom: 1px solid rgba(255,199,44,0.3);
      ">
        <div style="display:flex; align-items:center; gap:0.5rem;">
          <span style="font-size: 1.6rem;">🍔</span>
          <div style="display:flex; flex-direction:column; line-height:1.1;">
            <span style="font-size: 1.1rem; font-weight: 800; color: #FFC72C;">Menú McDonald's</span>
            <span style="font-size: 0.65rem; color: #aaa; font-weight: 500;">Precios en pesos uruguayos ($U)</span>
          </div>
        </div>
        <button id="menu-close-btn" style="
          background: rgba(255,255,255,0.1);
          color: #fff;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50%;
          width: 32px; height: 32px;
          font-size: 1rem;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          padding: 0;
        ">×</button>
      </div>
    `;

    // Categorías — primera abierta por defecto
    const categoriesHtml = MENU.map((cat, idx) => {
      const itemsHtml = cat.items
        .map(
          (item) => `
        <div style="
          display: flex;
          align-items: flex-start;
          gap: 0.7rem;
          padding: 0.6rem 0.5rem;
          border-radius: 10px;
          background: rgba(255,255,255,0.04);
          margin-bottom: 0.4rem;
        ">
          <div class="menu-item-img-wrap" style="
            width: 56px; height: 56px;
            flex-shrink: 0;
            border-radius: 10px;
            overflow: hidden;
            background: rgba(255,199,44,0.12);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            border: 1px solid rgba(255,199,44,0.25);
            position: relative;
          ">
            ${item.image
              ? `<img src="${item.image}" alt="${item.name}" loading="lazy" style="
                  width: 100%; height: 100%; object-fit: cover;
                  display: block;
                  position: absolute; inset: 0;
                " onerror="this.style.display='none'; this.parentElement.setAttribute('data-fallback','1');" />`
              : ''}
            <span class="menu-item-emoji" style="font-size: 1.8rem; ${item.image ? 'display:none;' : ''}">${item.emoji}</span>
          </div>
          <div style="flex: 1; min-width: 0;">
            <div style="
              display: flex;
              align-items: baseline;
              justify-content: space-between;
              gap: 0.5rem;
            ">
              <span style="font-weight: 700; font-size: 0.92rem; color: #fff;">${item.name}</span>
              <span style="font-weight: 800; color: #FFC72C; font-size: 0.95rem; flex-shrink: 0;">${item.price}</span>
            </div>
            <div style="font-size: 0.74rem; color: #aaa; line-height: 1.4; margin-top: 0.15rem;">
              ${item.description}
            </div>
          </div>
        </div>
      `
        )
        .join('');

      return `
        <div class="menu-category" data-idx="${idx}" style="margin-bottom: 0.8rem;">
          <button class="menu-cat-header" data-idx="${idx}" style="
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.7rem 0.8rem;
            background: linear-gradient(90deg, rgba(218,41,28,0.85), rgba(255,199,44,0.7));
            border: none;
            border-radius: 10px;
            color: #fff;
            font-weight: 800;
            font-size: 0.95rem;
            cursor: pointer;
            text-shadow: 0 1px 2px rgba(0,0,0,0.4);
            margin-bottom: ${idx === 0 ? '0.5rem' : '0'};
          ">
            <span style="display:flex; align-items:center; gap:0.5rem;">
              <span style="font-size: 1.2rem;">${cat.emoji}</span>
              <span>${cat.title}</span>
              <span style="
                font-size: 0.7rem;
                background: rgba(0,0,0,0.35);
                padding: 0.1rem 0.5rem;
                border-radius: 8px;
                font-weight: 600;
              ">${cat.items.length}</span>
            </span>
            <span class="menu-cat-chevron" data-idx="${idx}" style="
              font-size: 0.9rem;
              transition: transform 0.2s ease;
              display: inline-block;
            ">▾</span>
          </button>
          <div class="menu-cat-body" data-idx="${idx}" style="
            padding-top: 0.4rem;
            max-height: ${idx === 0 ? '2000px' : '0'};
            overflow: hidden;
            transition: max-height 0.3s ease;
          ">
            ${itemsHtml}
          </div>
        </div>
      `;
    }).join('');

    // Footer
    const footer = `
      <div style="
        margin-top: 0.6rem;
        padding-top: 0.7rem;
        border-top: 1px solid rgba(255,255,255,0.1);
        font-size: 0.7rem;
        color: #666;
        text-align: center;
      ">
        Precios referenciales en pesos uruguayos ($U) · Demo para inversores<br/>
        Las imágenes son referenciales y pueden no coincidir con el producto real.
      </div>
    `;

    this.card.innerHTML = header + categoriesHtml + footer;

    // Listeners
    const closeBtn = this.card.querySelector('#menu-close-btn');
    closeBtn?.addEventListener('click', () => this.hide());

    const catHeaders = this.card.querySelectorAll('.menu-cat-header');
    catHeaders.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLElement;
        const idx = target.dataset.idx;
        if (idx === undefined) return;
        this.toggleCategory(parseInt(idx, 10));
      });
    });

    // === Imágenes: mostrar emoji como fallback si la imagen falla ===
    // Recorremos cada wrap y, si marcamos data-fallback, mostramos el emoji.
    const wraps = this.card.querySelectorAll<HTMLElement>('.menu-item-img-wrap');
    wraps.forEach((wrap) => {
      // El observer mutación es complejo; más simple: escuchar el error via
      // atributo data-fallback que el onerror inline ya puso.
      // Hacemos polling ligero: si data-fallback=1 → mostrar emoji.
      const checkFallback = () => {
        if (wrap.getAttribute('data-fallback') === '1') {
          const emoji = wrap.querySelector<HTMLElement>('.menu-item-emoji');
          if (emoji) emoji.style.display = 'block';
        }
      };
      // Comprobar en el próximo tick (la imagen ya disparó onerror sincrónico
      // en la mayoría de los navegadores cuando src está cacheado como 404).
      setTimeout(checkFallback, 50);
      setTimeout(checkFallback, 800); // re-intento para imágenes tardías
    });
  }

  /** Alterna expandir/contraer una categoría. */
  private toggleCategory(idx: number): void {
    const body = this.card.querySelector(
      `.menu-cat-body[data-idx="${idx}"]`
    ) as HTMLElement | null;
    const chevron = this.card.querySelector(
      `.menu-cat-chevron[data-idx="${idx}"]`
    ) as HTMLElement | null;
    if (!body) return;

    const isOpen = body.style.maxHeight !== '0px' && body.style.maxHeight !== '';
    if (isOpen) {
      body.style.maxHeight = '0px';
      if (chevron) chevron.style.transform = 'rotate(-90deg)';
    } else {
      body.style.maxHeight = '2000px';
      if (chevron) chevron.style.transform = 'rotate(0deg)';
    }
  }
}

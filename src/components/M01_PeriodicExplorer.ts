/**
 * M01 — Periodic Explorer
 * Virtual Chemistry Lab (VCL) — Vickora Labs
 *
 * Tabla periódica interactiva de los 118 elementos químicos
 * con filtrado, búsqueda en tiempo real y ficha técnica modal certificada.
 */

import { ALL_118_ELEMENTS, ELEMENTS_BY_SYMBOL } from '@vcl/chem-engine';
import { eventBus } from '@vcl/shared';
import type { ElementData, ElementCategory } from '@vcl/shared';

export class PeriodicExplorer {
  private container: HTMLElement;
  private onSelectElementForStudio?: (element: ElementData) => void;
  private selectedCategory: string = 'all';
  private searchQuery: string = '';

  constructor(container: HTMLElement, onSelectElementForStudio?: (element: ElementData) => void) {
    this.container = container;
    this.onSelectElementForStudio = onSelectElementForStudio;
    this.render();
  }

  public render(): void {
    const categoryColors: Record<ElementCategory, string> = {
      'alkali-metal': '#8b5cf6',
      'alkaline-earth': '#10b981',
      'transition-metal': '#f59e0b',
      'post-transition-metal': '#06b6d4',
      'metalloid': '#14b8a6',
      'reactive-nonmetal': '#3b82f6',
      'noble-gas': '#ec4899',
      'lanthanide': '#6366f1',
      'actinide': '#d946ef',
      'unknown': '#64748b',
    };

    const categoryNames: Record<string, string> = {
      'all': 'Todos los Elementos',
      'alkali-metal': 'Metales Alcalinos',
      'alkaline-earth': 'Alcalinotérreos',
      'transition-metal': 'Metales de Transición',
      'post-transition-metal': 'Metales Post-transición',
      'metalloid': 'Metaloides',
      'reactive-nonmetal': 'No Metales Reactivos',
      'noble-gas': 'Gases Nobles',
      'lanthanide': 'Lantánidos',
      'actinide': 'Actínidos',
    };

    this.container.innerHTML = `
      <div class="vcl-ptable-container">
        <!-- Controles y Filtros -->
        <div class="vcl-ptable-controls">
          <div style="display: flex; align-items: center; gap: 0.8rem; flex-wrap: wrap;">
            <input
              type="text"
              id="ptable-search-input"
              class="vcl-input-search"
              placeholder="Buscar por nombre, símbolo o número Z (ej. Carbono, C, 6)..."
              value="${this.searchQuery}"
            />
            <select id="ptable-category-filter" class="vcl-input-search" style="min-width: 200px;">
              ${Object.entries(categoryNames).map(
                ([k, v]) => `<option value="${k}" ${this.selectedCategory === k ? 'selected' : ''}>${v}</option>`
              ).join('')}
            </select>
          </div>

          <div style="display: flex; align-items: center; gap: 0.8rem;">
            <span class="vcl-badge" id="ptable-count-badge">${ALL_118_ELEMENTS.length} Elementos</span>
          </div>
        </div>

        <!-- Leyenda de Categorías -->
        <div style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-bottom: 0.5rem; font-size: 0.72rem;">
          ${Object.entries(categoryColors).map(([cat, color]) => `
            <div style="display: flex; align-items: center; gap: 0.35rem; color: var(--text-muted);">
              <span style="width: 10px; height: 10px; border-radius: 2px; background: ${color};"></span>
              <span>${categoryNames[cat] || cat}</span>
            </div>
          `).join('')}
        </div>

        <!-- Cuadrícula de la Tabla Periódica -->
        <div class="vcl-ptable-grid" id="ptable-grid">
          <!-- Renderizado de las 18 columnas x 7 periodos estándar + filas de Lantánidos y Actínidos -->
        </div>
      </div>
    `;

    this.renderGrid(categoryColors);
    this.setupEvents(categoryColors);
  }

  private renderGrid(categoryColors: Record<ElementCategory, string>): void {
    const gridEl = this.container.querySelector('#ptable-grid');
    if (!gridEl) return;

    // Mapa de posiciones canónicas de la tabla periódica (periodo, grupo)
    // Para lantánidos (57-71) periodo 8, para actínidos (89-103) periodo 9
    let html = '';

    const filteredElements = ALL_118_ELEMENTS.filter((el) => {
      const matchCat = this.selectedCategory === 'all' || el.category === this.selectedCategory;
      const q = this.searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        el.name.toLowerCase().includes(q) ||
        el.symbol.toLowerCase().includes(q) ||
        String(el.atomicNumber) === q;
      return matchCat && matchSearch;
    });

    // Actualizar badge
    const badge = this.container.querySelector('#ptable-count-badge');
    if (badge) badge.textContent = `${filteredElements.length} Elementos`;

    for (const el of ALL_118_ELEMENTS) {
      const isVisible = filteredElements.some((fe) => fe.atomicNumber === el.atomicNumber);
      const catColor = categoryColors[el.category] || '#64748b';

      let row = el.period;
      let col = el.group;

      // Ubicación especial en la rejilla de 18 columnas para lantánidos y actínidos
      if (el.category === 'lanthanide' && el.atomicNumber >= 57 && el.atomicNumber <= 71) {
        row = 8;
        col = el.atomicNumber - 57 + 3; // Ocupa columnas 3 a 17
      } else if (el.category === 'actinide' && el.atomicNumber >= 89 && el.atomicNumber <= 103) {
        row = 9;
        col = el.atomicNumber - 89 + 3;
      }

      const style = `
        grid-row: ${row};
        grid-column: ${col};
        border-left: 3px solid ${catColor};
        opacity: ${isVisible ? '1' : '0.15'};
        pointer-events: ${isVisible ? 'auto' : 'none'};
      `;

      html += `
        <div class="vcl-element-cell" style="${style}" data-symbol="${el.symbol}">
          <div class="vcl-cell-top">
            <span>${el.atomicNumber}</span>
            <span>${el.atomicMass.toFixed(1)}</span>
          </div>
          <div class="vcl-cell-symbol" style="color: ${catColor};">${el.symbol}</div>
          <div class="vcl-cell-name">${el.name}</div>
        </div>
      `;
    }

    gridEl.innerHTML = html;

    // Vincular clic en cada celda para abrir ficha modal
    gridEl.querySelectorAll('.vcl-element-cell').forEach((cell) => {
      cell.addEventListener('click', () => {
        const sym = cell.getAttribute('data-symbol');
        if (sym && ELEMENTS_BY_SYMBOL[sym]) {
          this.openElementModal(ELEMENTS_BY_SYMBOL[sym]);
        }
      });
    });
  }

  private setupEvents(categoryColors: Record<ElementCategory, string>): void {
    const searchInput = this.container.querySelector('#ptable-search-input') as HTMLInputElement;
    searchInput?.addEventListener('input', (e) => {
      this.searchQuery = (e.target as HTMLInputElement).value;
      this.renderGrid(categoryColors);
    });

    const categorySelect = this.container.querySelector('#ptable-category-filter') as HTMLSelectElement;
    categorySelect?.addEventListener('change', (e) => {
      this.selectedCategory = (e.target as HTMLSelectElement).value;
      this.renderGrid(categoryColors);
    });
  }

  public openElementModal(el: ElementData): void {
    const modalContainer = document.getElementById('vcl-modal-container');
    if (!modalContainer) return;

    modalContainer.classList.remove('hidden');
    modalContainer.innerHTML = `
      <div class="vcl-modal-content">
        <button id="modal-btn-close" style="position: absolute; top: 1.25rem; right: 1.25rem; background: transparent; border: none; color: var(--text-muted); font-size: 1.5rem; cursor: pointer;">✕</button>

        <div style="display: flex; align-items: center; gap: 1.25rem; margin-bottom: 1.5rem;">
          <div style="width: 72px; height: 72px; border-radius: var(--radius-md); background: rgba(15, 23, 42, 0.9); border: 2px solid ${el.colorHex}; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 0 20px ${el.colorHex}44;">
            <span style="font-size: 0.8rem; color: var(--text-dim);">${el.atomicNumber}</span>
            <span style="font-size: 1.8rem; font-weight: 800; color: #ffffff;">${el.symbol}</span>
          </div>
          <div>
            <h2 style="font-family: var(--font-display); font-size: 1.6rem; color: #ffffff; margin-bottom: 0.2rem;">${el.name}</h2>
            <div style="display: flex; gap: 0.5rem; align-items: center;">
              <span class="vcl-badge">${el.category}</span>
              <span class="vcl-badge" style="background: rgba(16, 185, 129, 0.15); color: #10b981; border-color: rgba(16, 185, 129, 0.3);">
                Estado: ${el.stateAt298K} (298 K)
              </span>
            </div>
          </div>
        </div>

        <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem;">
          ${el.summary}
        </p>

        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 1.8rem;">
          <div class="vcl-stat-box" style="text-align: left;">
            <div class="vcl-stat-lbl">Masa Atómica IUPAC</div>
            <div style="font-size: 1.1rem; font-weight: 700; color: #ffffff;">${el.atomicMass} u (g/mol)</div>
          </div>
          <div class="vcl-stat-box" style="text-align: left;">
            <div class="vcl-stat-lbl">Configuración Electrónica</div>
            <div style="font-size: 1.05rem; font-family: var(--font-mono); font-weight: 700; color: var(--accent-cyan);">${el.electronConfiguration}</div>
          </div>
          <div class="vcl-stat-box" style="text-align: left;">
            <div class="vcl-stat-lbl">Electronegatividad (Pauling)</div>
            <div style="font-size: 1.1rem; font-weight: 700; color: ${el.electronegativityPauling ? '#ffffff' : 'var(--text-dim)'};">
              ${el.electronegativityPauling ?? 'No aplica'}
            </div>
          </div>
          <div class="vcl-stat-box" style="text-align: left;">
            <div class="vcl-stat-lbl">1ª Energía de Ionización</div>
            <div style="font-size: 1.1rem; font-weight: 700; color: #ffffff;">
              ${el.ionizationEnergyFirst ? `${el.ionizationEnergyFirst} kJ/mol` : 'No documentada'}
            </div>
          </div>
          <div class="vcl-stat-box" style="text-align: left;">
            <div class="vcl-stat-lbl">Radio Covalente / Van der Waals</div>
            <div style="font-size: 1.1rem; font-weight: 700; color: #ffffff;">
              ${el.atomicRadiusCovalent ?? '-'} pm / ${el.atomicRadiusVanDerWaals ?? '-'} pm
            </div>
          </div>
          <div class="vcl-stat-box" style="text-align: left;">
            <div class="vcl-stat-lbl">Electrones de Valencia</div>
            <div style="font-size: 1.1rem; font-weight: 700; color: var(--accent-gold);">${el.valenceElectrons} e-</div>
          </div>
        </div>

        <div style="background: rgba(15, 23, 42, 0.6); padding: 0.85rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); margin-bottom: 1.5rem; font-size: 0.78rem; color: var(--text-dim);">
          <strong>Fuente Metrológica:</strong> ${el.source.name} (${el.source.database}) • Nivel de confianza: ${el.source.confidence}.
        </div>

        <div style="display: flex; gap: 0.8rem; justify-content: flex-end;">
          <button class="vcl-btn vcl-btn-secondary" id="modal-btn-open-atomic">
            <span>⚛️</span>
            <span>Ver en Atomic Studio</span>
          </button>
          <button class="vcl-btn vcl-btn-primary" id="modal-btn-add-builder">
            <span>🧪</span>
            <span>Añadir a Molecular Builder</span>
          </button>
        </div>
      </div>
    `;

    modalContainer.querySelector('#modal-btn-close')?.addEventListener('click', () => {
      modalContainer.classList.add('hidden');
    });

    modalContainer.addEventListener('click', (e) => {
      if (e.target === modalContainer) {
        modalContainer.classList.add('hidden');
      }
    });

    modalContainer.querySelector('#modal-btn-open-atomic')?.addEventListener('click', () => {
      modalContainer.classList.add('hidden');
      eventBus.emit('element:selected', el);
      if (this.onSelectElementForStudio) {
        this.onSelectElementForStudio(el);
      }
    });

    modalContainer.querySelector('#modal-btn-add-builder')?.addEventListener('click', () => {
      modalContainer.classList.add('hidden');
      eventBus.emit('element:selected', el);
      eventBus.emit('lab:notification', {
        title: 'Elemento Cargado',
        message: `${el.name} (${el.symbol}) listo para ser enlazado en el Molecular Builder.`,
        type: 'success',
      });
    });
  }
}

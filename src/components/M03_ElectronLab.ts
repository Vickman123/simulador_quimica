/**
 * M03 — Electron Lab
 * Virtual Chemistry Lab (VCL) — Vickora Labs
 *
 * Explorador cuántico de configuración electrónica, principio de Aufbau,
 * regla de Hund, principio de exclusión de Pauli y diagramas de orbitales.
 */

import { ElectronEngine, ALL_118_ELEMENTS, ELEMENTS_BY_SYMBOL } from '@vcl/chem-engine';
import type { FullElectronAnalysis } from '@vcl/chem-engine';

export class ElectronLab {
  private container: HTMLElement;
  private currentElementSymbol: string = 'O'; // Oxígeno por defecto (Z=8)

  constructor(container: HTMLElement, initialSymbol: string = 'O') {
    this.container = container;
    this.currentElementSymbol = initialSymbol;
    this.render();
  }

  public setElement(symbol: string): void {
    this.currentElementSymbol = symbol;
    this.render();
  }

  public render(): void {
    const el = ELEMENTS_BY_SYMBOL[this.currentElementSymbol] || ELEMENTS_BY_SYMBOL['O'];
    const analysis: FullElectronAnalysis = ElectronEngine.analyzeConfiguration(
      el.atomicNumber,
      el.atomicNumber
    );

    this.container.innerHTML = `
      <div style="display: grid; grid-template-columns: 320px 1fr; gap: 1.5rem; min-height: calc(100vh - 120px);">
        <!-- Panel Lateral: Selector y Resumen Cuántico -->
        <div class="vcl-card" style="display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div class="vcl-badge" style="margin-bottom: 0.8rem;">M03 // ELECTRON LAB</div>
            <h3 style="font-family: var(--font-display); font-size: 1.3rem; margin-bottom: 1.2rem; color: #ffffff;">Configuración Cuántica</h3>

            <!-- Selector de Elemento -->
            <div style="margin-bottom: 1.5rem;">
              <label style="font-size: 0.78rem; color: var(--text-muted); display: block; margin-bottom: 0.4rem;">Seleccionar Elemento</label>
              <select id="electron-element-picker" class="vcl-input-search" style="width: 100%;">
                ${ALL_118_ELEMENTS.slice(0, 36).map(
                  (e) => `<option value="${e.symbol}" ${e.symbol === this.currentElementSymbol ? 'selected' : ''}>
                    ${e.atomicNumber} - ${e.name} (${e.symbol})
                  </option>`
                ).join('')}
              </select>
            </div>

            <!-- Ficha de Notaciones -->
            <div class="vcl-stat-box" style="text-align: left; margin-bottom: 1rem;">
              <div class="vcl-stat-lbl">Notación Condensada (Gas Noble)</div>
              <div style="font-family: var(--font-mono); font-size: 1.15rem; font-weight: 700; color: var(--accent-cyan); margin-top: 0.2rem;">
                ${analysis.condensedNotation}
              </div>
            </div>

            <div class="vcl-stat-box" style="text-align: left; margin-bottom: 1.5rem;">
              <div class="vcl-stat-lbl">Notación Expandida Completa</div>
              <div style="font-family: var(--font-mono); font-size: 0.95rem; font-weight: 600; color: #ffffff; margin-top: 0.2rem; line-height: 1.4;">
                ${analysis.expandedNotation}
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; margin-bottom: 1.5rem;">
              <div class="vcl-stat-box">
                <div class="vcl-stat-lbl">Electrones de Valencia</div>
                <div class="vcl-stat-val" style="color: var(--accent-gold); font-size: 1.5rem;">${analysis.valenceElectrons} e⁻</div>
              </div>
              <div class="vcl-stat-box">
                <div class="vcl-stat-lbl">e⁻ Desapareados</div>
                <div class="vcl-stat-val" style="color: #ef4444; font-size: 1.5rem;">${analysis.unpairedElectrons}</div>
              </div>
            </div>

            <div class="vcl-stat-box" style="text-align: left;">
              <div class="vcl-stat-lbl">Comportamiento Magnético</div>
              <div style="font-size: 1rem; font-weight: 700; color: ${analysis.isParamagnetic ? '#f59e0b' : '#10b981'}; margin-top: 0.2rem;">
                ${analysis.isParamagnetic ? 'Paramagnético (Atraído por campos)' : 'Diamagnético (Ligeramente repelido)'}
              </div>
              <div style="font-size: 0.75rem; color: var(--text-dim); margin-top: 0.2rem;">
                Momento magnético de espín: ${analysis.magneticMomentBohrMagnetons} μB
              </div>
            </div>
          </div>

          <!-- Leyenda de Principios Cuánticos -->
          <div style="background: rgba(15, 23, 42, 0.6); padding: 0.8rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); font-size: 0.74rem; color: var(--text-muted);">
            <strong style="color: var(--accent-cyan);">Regla de Hund:</strong> Los electrones ocupan orbitales degenerados individualmente con espines paralelos (↑) antes de aparearse (↓).
          </div>
        </div>

        <!-- Panel Principal: Diagrama de Casillas de Orbitales de Aufbau -->
        <div class="vcl-card" style="display: flex; flex-direction: column;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
            <div>
              <h3 style="font-family: var(--font-display); font-size: 1.25rem; color: #ffffff;">Diagrama de Orbitales de Aufbau</h3>
              <p style="font-size: 0.82rem; color: var(--text-muted);">Distribución de los ${analysis.totalElectrons} electrones en subniveles de menor a mayor energía.</p>
            </div>
            <span class="vcl-badge">${el.name} (Z = ${el.atomicNumber})</span>
          </div>

          <div style="display: flex; flex-direction: column-reverse; gap: 0.8rem; flex: 1; overflow-y: auto; padding-right: 0.5rem;">
            ${analysis.subshells.filter((s) => s.electrons > 0).map((sub) => `
              <div style="display: flex; align-items: center; gap: 1.2rem; background: rgba(15, 23, 42, 0.6); padding: 0.75rem 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                <div style="width: 55px; font-family: var(--font-mono); font-weight: 700; font-size: 1.15rem; color: var(--accent-cyan);">
                  ${sub.label}
                </div>

                <div style="display: flex; gap: 0.6rem; flex: 1;">
                  ${sub.orbitals.map((orb) => `
                    <div style="width: 52px; height: 52px; background: rgba(7, 11, 20, 0.9); border: 2px solid ${orb.electrons > 0 ? 'var(--accent-cyan)' : 'var(--border-subtle)'}; border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; gap: 4px; box-shadow: ${orb.electrons > 0 ? '0 0 10px rgba(56, 189, 248, 0.2)' : 'none'};">
                      ${orb.spins.map((spin) => `
                        <span style="font-size: 1.3rem; font-weight: 800; color: ${spin === '+1/2' ? '#38bdf8' : '#f59e0b'};">
                          ${spin === '+1/2' ? '↑' : '↓'}
                        </span>
                      `).join('')}
                    </div>
                  `).join('')}
                </div>

                <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-dim);">
                  ${sub.electrons} / ${sub.maxCapacity} e⁻
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    const picker = this.container.querySelector('#electron-element-picker') as HTMLSelectElement;
    picker?.addEventListener('change', (e) => {
      this.setElement((e.target as HTMLSelectElement).value);
    });
  }
}

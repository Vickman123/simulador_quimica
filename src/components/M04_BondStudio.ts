/**
 * M04 — Bond Studio
 * Virtual Chemistry Lab (VCL) — Vickora Labs
 *
 * Simulador interactivo de enlaces químicos, escala de Pauling,
 * cargas parciales, estructuras de Lewis y fuerzas intermoleculares.
 */

import { BondEngine, ALL_118_ELEMENTS } from '@vcl/chem-engine';
import type { BondAnalysis } from '@vcl/chem-engine';

export class BondStudio {
  private container: HTMLElement;
  private symbolA: string = 'H';
  private symbolB: string = 'O';
  private bondOrder: 1 | 2 | 3 = 1;

  constructor(container: HTMLElement, initialA: string = 'H', initialB: string = 'O') {
    this.container = container;
    this.symbolA = initialA;
    this.symbolB = initialB;
    this.render();
  }

  public render(): void {
    const analysis: BondAnalysis = BondEngine.analyzeBond(this.symbolA, this.symbolB, this.bondOrder);
    const forces = BondEngine.classifyIntermolecularForces(
      `${this.symbolA}-${this.symbolB}`,
      analysis.bondType === 'covalent-polar',
      (this.symbolA === 'H' && ['O', 'N', 'F'].includes(this.symbolB)) ||
      (this.symbolB === 'H' && ['O', 'N', 'F'].includes(this.symbolA))
    );

    const typeBadges: Record<string, { label: string; color: string }> = {
      'covalent-nonpolar': { label: 'Covalente No Polar', color: '#10b981' },
      'covalent-polar': { label: 'Covalente Polar', color: '#38bdf8' },
      'ionic': { label: 'Enlace Iónico', color: '#f59e0b' },
      'metallic': { label: 'Enlace Metálico', color: '#a855f7' },
      'coordinate-covalent': { label: 'Covalente Coordinado (Dativo)', color: '#ec4899' },
    };

    const currentBadge = typeBadges[analysis.bondType] || { label: analysis.bondType, color: '#64748b' };

    this.container.innerHTML = `
      <div style="display: grid; grid-template-columns: 340px 1fr; gap: 1.5rem; min-height: calc(100vh - 120px);">
        <!-- Panel de Configuración de Enlace -->
        <div class="vcl-card" style="display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div class="vcl-badge" style="margin-bottom: 0.8rem;">M04 // BOND STUDIO</div>
            <h3 style="font-family: var(--font-display); font-size: 1.3rem; margin-bottom: 1.2rem; color: #ffffff;">Simulador de Enlaces</h3>

            <!-- Selector Átomo A -->
            <div style="margin-bottom: 1rem;">
              <label style="font-size: 0.78rem; color: var(--text-muted); display: block; margin-bottom: 0.4rem;">Átomo A</label>
              <select id="bond-select-a" class="vcl-input-search" style="width: 100%;">
                ${ALL_118_ELEMENTS.slice(0, 36).map(
                  (e) => `<option value="${e.symbol}" ${e.symbol === this.symbolA ? 'selected' : ''}>
                    ${e.name} (${e.symbol}) — χ = ${e.electronegativityPauling ?? 'N/A'}
                  </option>`
                ).join('')}
              </select>
            </div>

            <!-- Selector Átomo B -->
            <div style="margin-bottom: 1.5rem;">
              <label style="font-size: 0.78rem; color: var(--text-muted); display: block; margin-bottom: 0.4rem;">Átomo B</label>
              <select id="bond-select-b" class="vcl-input-search" style="width: 100%;">
                ${ALL_118_ELEMENTS.slice(0, 36).map(
                  (e) => `<option value="${e.symbol}" ${e.symbol === this.symbolB ? 'selected' : ''}>
                    ${e.name} (${e.symbol}) — χ = ${e.electronegativityPauling ?? 'N/A'}
                  </option>`
                ).join('')}
              </select>
            </div>

            <!-- Selector de Orden de Enlace -->
            <div style="margin-bottom: 1.5rem;">
              <label style="font-size: 0.78rem; color: var(--text-muted); display: block; margin-bottom: 0.4rem;">Orden de Enlace</label>
              <div style="display: flex; gap: 0.5rem;">
                ${([1, 2, 3] as const).map(
                  (ord) => `
                  <button class="vcl-btn ${this.bondOrder === ord ? 'vcl-btn-primary' : 'vcl-btn-secondary'}" data-order="${ord}" style="flex: 1;">
                    ${ord === 1 ? 'Simple (-)' : ord === 2 ? 'Doble (=)' : 'Triple (≡)'}
                  </button>
                `
                ).join('')}
              </div>
            </div>

            <!-- Métricas Físicas Estimadas -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; margin-bottom: 1rem;">
              <div class="vcl-stat-box">
                <div class="vcl-stat-lbl">Longitud Estimada</div>
                <div class="vcl-stat-val" style="font-size: 1.25rem;">${analysis.typicalBondLengthAngstroms} Å</div>
              </div>
              <div class="vcl-stat-box">
                <div class="vcl-stat-lbl">Energía de Disociación</div>
                <div class="vcl-stat-val" style="font-size: 1.25rem; color: var(--accent-gold);">${analysis.typicalDissociationEnergyKjMol} kJ/mol</div>
              </div>
            </div>
          </div>

          <!-- Presets de Enlaces Didácticos Comunes -->
          <div style="border-top: 1px solid var(--border-subtle); padding-top: 1rem;">
            <label style="font-size: 0.75rem; color: var(--text-dim); display: block; margin-bottom: 0.5rem;">Ejemplos Clásicos:</label>
            <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
              <button class="vcl-btn vcl-btn-secondary btn-preset" data-a="H" data-b="O" data-o="1" style="font-size: 0.75rem; padding: 0.3rem 0.6rem;">O-H (Agua)</button>
              <button class="vcl-btn vcl-btn-secondary btn-preset" data-a="C" data-b="O" data-o="2" style="font-size: 0.75rem; padding: 0.3rem 0.6rem;">C=O (CO2)</button>
              <button class="vcl-btn vcl-btn-secondary btn-preset" data-a="Na" data-b="Cl" data-o="1" style="font-size: 0.75rem; padding: 0.3rem 0.6rem;">NaCl (Iónico)</button>
              <button class="vcl-btn vcl-btn-secondary btn-preset" data-a="N" data-b="N" data-o="3" style="font-size: 0.75rem; padding: 0.3rem 0.6rem;">N≡N (Triple)</button>
              <button class="vcl-btn vcl-btn-secondary btn-preset" data-a="Fe" data-b="Fe" data-o="1" style="font-size: 0.75rem; padding: 0.3rem 0.6rem;">Fe-Fe (Metálico)</button>
            </div>
          </div>
        </div>

        <!-- Panel Principal: Análisis y Visualización de Polaridad -->
        <div style="display: flex; flex-direction: column; gap: 1.25rem;">
          <!-- Visualización Holográfica de Distribución de Carga -->
          <div class="vcl-card" style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 280px; position: relative;">
            <div class="vcl-badge" style="position: absolute; top: 1.25rem; left: 1.25rem; background: ${currentBadge.color}22; color: ${currentBadge.color}; border-color: ${currentBadge.color}55;">
              ${currentBadge.label}
            </div>

            <!-- Esquema Gráfico del Enlace -->
            <div style="display: flex; align-items: center; gap: 3rem; margin: 2rem 0;">
              <!-- Átomo A -->
              <div style="display: flex; flex-direction: column; align-items: center;">
                <div style="width: 80px; height: 80px; border-radius: 50%; background: ${analysis.elementA.colorHex}; border: 3px solid #ffffff; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 25px ${analysis.elementA.colorHex}66; color: #000000; font-weight: 800; font-size: 1.6rem;">
                  ${analysis.elementA.symbol}
                </div>
                <span style="font-size: 0.85rem; font-weight: 700; color: #ffffff; margin-top: 0.5rem;">${analysis.elementA.name}</span>
                <span style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-dim);">χ = ${analysis.electronegativityA}</span>
                <span style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: 700; color: ${analysis.partialChargeA < 0 ? '#ef4444' : '#38bdf8'}; margin-top: 0.2rem;">
                  ${analysis.partialChargeA > 0 ? `+${analysis.partialChargeA} δ` : analysis.partialChargeA < 0 ? `${analysis.partialChargeA} δ` : '0 δ'}
                </span>
              </div>

              <!-- Enlace Gráfico (Cilindros / Conexión) -->
              <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
                ${new Array(this.bondOrder).fill(0).map(() => `
                  <div style="width: 140px; height: 10px; border-radius: 5px; background: linear-gradient(to right, ${analysis.elementA.colorHex}, ${analysis.elementB.colorHex}); box-shadow: 0 0 10px rgba(56, 189, 248, 0.4);"></div>
                `).join('')}
                <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.5rem;">
                  Δχ = <strong>${analysis.deltaChi}</strong> (${analysis.percentIonicCharacter}% carácter iónico)
                </div>
              </div>

              <!-- Átomo B -->
              <div style="display: flex; flex-direction: column; align-items: center;">
                <div style="width: 80px; height: 80px; border-radius: 50%; background: ${analysis.elementB.colorHex}; border: 3px solid #ffffff; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 25px ${analysis.elementB.colorHex}66; color: #000000; font-weight: 800; font-size: 1.6rem;">
                  ${analysis.elementB.symbol}
                </div>
                <span style="font-size: 0.85rem; font-weight: 700; color: #ffffff; margin-top: 0.5rem;">${analysis.elementB.name}</span>
                <span style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-dim);">χ = ${analysis.electronegativityB}</span>
                <span style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: 700; color: ${analysis.partialChargeB < 0 ? '#ef4444' : '#38bdf8'}; margin-top: 0.2rem;">
                  ${analysis.partialChargeB > 0 ? `+${analysis.partialChargeB} δ` : analysis.partialChargeB < 0 ? `${analysis.partialChargeB} δ` : '0 δ'}
                </span>
              </div>
            </div>

            <!-- Explicación Electrónica -->
            <p style="color: var(--text-muted); font-size: 0.85rem; text-align: center; max-width: 600px; line-height: 1.5;">
              ${analysis.electronicMechanism}
            </p>
          </div>

          <!-- Fuerzas Intermoleculares Generadas -->
          <div class="vcl-card">
            <h4 style="font-size: 1.05rem; color: #ffffff; margin-bottom: 0.8rem;">Fuerzas Intermoleculares Asociadas</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.8rem;">
              ${forces.map((f) => `
                <div style="background: rgba(15, 23, 42, 0.6); padding: 0.85rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.3rem;">
                    <strong style="color: #ffffff; font-size: 0.85rem;">${f.name}</strong>
                    <span class="vcl-badge" style="font-size: 0.65rem;">${f.relativeStrength}</span>
                  </div>
                  <p style="font-size: 0.76rem; color: var(--text-muted); line-height: 1.4;">${f.description}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    // Event listeners
    const selA = this.container.querySelector('#bond-select-a') as HTMLSelectElement;
    selA?.addEventListener('change', (e) => {
      this.symbolA = (e.target as HTMLSelectElement).value;
      this.render();
    });

    const selB = this.container.querySelector('#bond-select-b') as HTMLSelectElement;
    selB?.addEventListener('change', (e) => {
      this.symbolB = (e.target as HTMLSelectElement).value;
      this.render();
    });

    const ordBtns = this.container.querySelectorAll('[data-order]');
    ordBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const ord = parseInt(btn.getAttribute('data-order') || '1', 10) as 1 | 2 | 3;
        this.bondOrder = ord;
        this.render();
      });
    });

    const presets = this.container.querySelectorAll('.btn-preset');
    presets.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.symbolA = btn.getAttribute('data-a') || 'H';
        this.symbolB = btn.getAttribute('data-b') || 'O';
        this.bondOrder = parseInt(btn.getAttribute('data-o') || '1', 10) as 1 | 2 | 3;
        this.render();
      });
    });
  }
}

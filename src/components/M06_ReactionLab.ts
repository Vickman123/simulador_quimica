/**
 * M06 — Reaction Lab
 * Virtual Chemistry Lab (VCL) — Vickora Labs
 *
 * Motor de simulación de reacciones químicas verificadas, balanceador
 * estequiométrico, auditoría de conservación atómica y análisis termodinámico ΔH.
 */

import { ReactionEngine, VERIFIED_REACTIONS } from '@vcl/chem-engine';
import type { VerifiedReaction, ReactionEvaluation } from '@vcl/chem-engine';

export class ReactionLab {
  private container: HTMLElement;
  private currentReaction: VerifiedReaction;
  private customReactants: string = 'CH4 + 2 O2';
  private customProducts: string = 'CO2 + 2 H2O';

  constructor(container: HTMLElement) {
    this.container = container;
    this.currentReaction = VERIFIED_REACTIONS[0]; // Formación de agua por defecto
    this.render();
  }

  public render(): void {
    const rFormulas = this.currentReaction.reactants.map((r) => r.formula);
    const pFormulas = this.currentReaction.products.map((p) => p.formula);
    const evaluation: ReactionEvaluation = ReactionEngine.evaluateReaction(rFormulas, pFormulas);

    const typeLabels: Record<string, string> = {
      synthesis: 'Síntesis',
      decomposition: 'Descomposición',
      'single-displacement': 'Desplazamiento Simple',
      'double-displacement': 'Doble Sustitución',
      combustion: 'Combustión',
      'acid-base-neutralization': 'Neutralización Ácido-Base',
      redox: 'Oxidación-Reducción',
      precipitation: 'Precipitación',
    };

    this.container.innerHTML = `
      <div class="vcl-layout-2col">
        <!-- Panel Izquierdo: Catálogo y Balanceador de Reacciones -->
        <div class="vcl-card" style="display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div class="vcl-badge" style="margin-bottom: 0.8rem;">M06 // REACTION LAB</div>
            <h3 style="font-family: var(--font-display); font-size: 1.3rem; margin-bottom: 1.2rem; color: #ffffff;">Reacciones Químicas</h3>

            <!-- Selector de Reacciones Certificadas -->
            <div style="margin-bottom: 1.5rem;">
              <label style="font-size: 0.78rem; color: var(--text-muted); display: block; margin-bottom: 0.4rem;">Catálogo de Reacciones Certificadas</label>
              <select id="reaction-catalog-select" class="vcl-input-search" style="width: 100%;">
                ${VERIFIED_REACTIONS.map(
                  (rxn) => `
                  <option value="${rxn.id}" ${rxn.id === this.currentReaction.id ? 'selected' : ''}>
                    [${typeLabels[rxn.type] || rxn.type}] ${rxn.name}
                  </option>
                `
                ).join('')}
              </select>
            </div>

            <!-- Ficha de la Reacción Activa -->
            <div class="vcl-stat-box" style="text-align: left; margin-bottom: 1rem; border-color: var(--border-glow);">
              <div class="vcl-stat-lbl">Tipo de Reacción</div>
              <div style="font-size: 1.05rem; font-weight: 700; color: var(--accent-cyan); text-transform: uppercase;">
                ${typeLabels[this.currentReaction.type] || this.currentReaction.type}
              </div>
            </div>

            <div class="vcl-stat-box" style="text-align: left; margin-bottom: 1.5rem;">
              <div class="vcl-stat-lbl">Condiciones de Operación</div>
              <div style="font-size: 0.85rem; color: #ffffff; line-height: 1.4; margin-top: 0.3rem;">
                ${this.currentReaction.conditions || 'Temperatura y presión estándar (298 K, 1 atm).'}
              </div>
            </div>

            <!-- Entalpía Termodinámica -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; margin-bottom: 1rem;">
              <div class="vcl-stat-box">
                <div class="vcl-stat-lbl">Entalpía Estándar (ΔH°)</div>
                <div class="vcl-stat-val" style="font-size: 1.2rem; color: ${this.currentReaction.enthalpyDeltaH && this.currentReaction.enthalpyDeltaH < 0 ? '#ef4444' : '#10b981'};">
                  ${this.currentReaction.enthalpyDeltaH !== undefined ? `${this.currentReaction.enthalpyDeltaH} kJ/mol` : 'N/D'}
                </div>
              </div>
              <div class="vcl-stat-box">
                <div class="vcl-stat-lbl">Termodinámica</div>
                <div style="font-size: 0.95rem; font-weight: 700; color: #ffffff; margin-top: 0.4rem; text-transform: uppercase;">
                  ${evaluation.thermodynamicNature}
                </div>
              </div>
            </div>
          </div>

          <!-- Fuente Metrológica -->
          <div style="background: rgba(15, 23, 42, 0.6); padding: 0.8rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); font-size: 0.74rem; color: var(--text-dim);">
            <strong>Certificación:</strong> ${this.currentReaction.source.name} (${this.currentReaction.source.database}) • Cumple conservación estricta de masa.
          </div>
        </div>

        <!-- Panel Principal: Ecuación, Conservación y Reorganización de Enlaces -->
        <div style="display: flex; flex-direction: column; gap: 1.25rem;">
          <!-- Gran Ecuación Química Balanceada -->
          <div class="vcl-card" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 2.5rem 1.5rem; text-align: center;">
            <div class="vcl-badge" style="margin-bottom: 1rem; background: rgba(16, 185, 129, 0.15); color: #10b981; border-color: rgba(16, 185, 129, 0.3);">
              Ecuación Química Balanceada
            </div>

            <div style="font-family: var(--font-mono); font-size: 2.2rem; font-weight: 800; color: #ffffff; letter-spacing: 0.05em; line-height: 1.3; margin-bottom: 0.8rem;">
              ${this.currentReaction.equation}
            </div>

            <p style="color: var(--text-muted); font-size: 0.92rem; max-width: 680px; line-height: 1.6;">
              ${this.currentReaction.explanation}
            </p>
          </div>

          <!-- Auditoría de Conservación de Átomos (Lavoisier) -->
          <div class="vcl-card">
            <h4 style="font-size: 1.05rem; color: #ffffff; margin-bottom: 0.3rem;">Conservación de Átomos (Ley de Lavoisier)</h4>
            <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 1rem;">
              Verificación cuantitativa de que ningún átomo se crea ni se destruye durante la transformación.
            </p>

            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); gap: 0.8rem;">
              ${Object.entries(evaluation.atomConservation).map(([sym, data]) => `
                <div style="background: rgba(15, 23, 42, 0.6); padding: 0.85rem; border-radius: var(--radius-sm); border: 1px solid ${data.conserved ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.4)'};">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.3rem;">
                    <strong style="font-size: 1rem; color: var(--accent-cyan);">${sym}</strong>
                    <span style="font-size: 0.72rem; color: ${data.conserved ? '#10b981' : '#ef4444'}; font-weight: 700;">
                      ${data.conserved ? '✓ CONSERVADO' : '✗ DESBALANCE'}
                    </span>
                  </div>
                  <div style="font-family: var(--font-mono); font-size: 0.82rem; color: #ffffff;">
                    Reactivos: <strong>${data.inReactants}</strong> | Productos: <strong>${data.inProducts}</strong>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Reorganización de Enlaces Químicos -->
          <div class="vcl-card">
            <h4 style="font-size: 1.05rem; color: #ffffff; margin-bottom: 0.5rem;">Reorganización de Enlaces Químicos</h4>
            <div style="background: rgba(15, 23, 42, 0.6); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); font-size: 0.88rem; color: var(--accent-gold); font-family: var(--font-mono);">
              ${this.currentReaction.bondChanges || 'Reorganización coordinada de enlaces estables.'}
            </div>
          </div>
        </div>
      </div>
    `;

    const select = this.container.querySelector('#reaction-catalog-select') as HTMLSelectElement;
    select?.addEventListener('change', (e) => {
      const rxnId = (e.target as HTMLSelectElement).value;
      const found = VERIFIED_REACTIONS.find((r) => r.id === rxnId);
      if (found) {
        this.currentReaction = found;
        this.render();
      }
    });
  }
}

/**
 * M07 — Energy & Forces
 * Virtual Chemistry Lab (VCL) — Vickora Labs
 *
 * Gráficas interactivas de curvas de energía potencial contra distancia internuclear,
 * potenciales de Morse y Lennard-Jones, distancia de equilibrio y fuerzas electrostáticas.
 */

import { EnergyEngine } from '@vcl/chem-engine';
import type { BondEnergyCurve } from '@vcl/chem-engine';

export class EnergyForces {
  private container: HTMLElement;
  private currentCurveKey: string = 'O-H';
  private currentDistancePm: number = 95.8;

  constructor(container: HTMLElement) {
    this.container = container;
    this.render();
  }

  public render(): void {
    const curves = EnergyEngine.getStandardCurves();
    const curve: BondEnergyCurve = curves[this.currentCurveKey] || curves['O-H'];

    this.container.innerHTML = `
      <div style="display: grid; grid-template-columns: 340px 1fr; gap: 1.5rem; min-height: calc(100vh - 120px);">
        <!-- Panel Lateral: Configuración y Metrología -->
        <div class="vcl-card" style="display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div class="vcl-badge" style="margin-bottom: 0.8rem;">M07 // ENERGY & FORCES</div>
            <h3 style="font-family: var(--font-display); font-size: 1.3rem; margin-bottom: 1.2rem; color: #ffffff;">Interacciones y Fuerzas</h3>

            <!-- Selector de Enlace / Par Atómico -->
            <div style="margin-bottom: 1.5rem;">
              <label style="font-size: 0.78rem; color: var(--text-muted); display: block; margin-bottom: 0.4rem;">Enlace Químico</label>
              <select id="energy-curve-select" class="vcl-input-search" style="width: 100%;">
                <option value="O-H" ${this.currentCurveKey === 'O-H' ? 'selected' : ''}>O-H en Agua (95.8 pm • 463 kJ/mol)</option>
                <option value="H-H" ${this.currentCurveKey === 'H-H' ? 'selected' : ''}>H-H en Hidrógeno (74.1 pm • 436 kJ/mol)</option>
                <option value="C-H" ${this.currentCurveKey === 'C-H' ? 'selected' : ''}>C-H en Metano (108.7 pm • 413 kJ/mol)</option>
                <option value="C-C" ${this.currentCurveKey === 'C-C' ? 'selected' : ''}>C-C Enlace Simple (154.0 pm • 348 kJ/mol)</option>
                <option value="C=O" ${this.currentCurveKey === 'C=O' ? 'selected' : ''}>C=O Doble Enlace (116.3 pm • 799 kJ/mol)</option>
                <option value="N#N" ${this.currentCurveKey === 'N#N' ? 'selected' : ''}>N≡N Triple Enlace (109.8 pm • 945 kJ/mol)</option>
                <option value="Ar-Ar" ${this.currentCurveKey === 'Ar-Ar' ? 'selected' : ''}>Argón-Argón (Lennard-Jones • 340 pm)</option>
              </select>
            </div>

            <!-- Ficha de Parámetros de la Curva -->
            <div class="vcl-stat-box" style="text-align: left; margin-bottom: 1rem;">
              <div class="vcl-stat-lbl">Distancia de Equilibrio (r₀ / rₑ)</div>
              <div class="vcl-stat-val" style="font-size: 1.4rem;">${curve.equilibriumDistancePm} pm</div>
              <div style="font-size: 0.75rem; color: var(--text-dim); margin-top: 0.2rem;">
                Mínimo del pozo de potencial (Fuerza neta = 0).
              </div>
            </div>

            <div class="vcl-stat-box" style="text-align: left; margin-bottom: 1.5rem;">
              <div class="vcl-stat-lbl">Energía de Disociación de Enlace (Dₑ)</div>
              <div class="vcl-stat-val" style="font-size: 1.4rem; color: var(--accent-gold);">${curve.dissociationEnergyKjMol} kJ/mol</div>
              <div style="font-size: 0.75rem; color: var(--text-dim); margin-top: 0.2rem;">
                Profundidad del pozo de potencial termodinámico.
              </div>
            </div>

            <!-- Control Deslizante de Distancia Internuclear -->
            <div style="background: rgba(15, 23, 42, 0.6); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); margin-bottom: 1rem;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <span style="font-size: 0.8rem; color: var(--text-muted);">Distancia actual:</span>
                <strong style="font-family: var(--font-mono); color: var(--accent-cyan); font-size: 0.95rem;">
                  <span id="slider-dist-val">${this.currentDistancePm}</span> pm
                </strong>
              </div>
              <input
                type="range"
                id="distance-slider"
                min="${curve.repulsiveLimitPm}"
                max="${curve.attractiveLimitPm}"
                value="${this.currentDistancePm}"
                step="1"
                style="width: 100%; accent-color: var(--accent-cyan);"
              />
            </div>
          </div>

          <!-- Base Científica -->
          <div style="background: rgba(15, 23, 42, 0.6); padding: 0.8rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); font-size: 0.74rem; color: var(--text-muted);">
            <strong>Fundamento:</strong> ${curve.scientificBasis}
          </div>
        </div>

        <!-- Panel Principal: Gráfica de Energía Potencial V(r) -->
        <div class="vcl-card" style="display: flex; flex-direction: column;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <div>
              <h3 style="font-family: var(--font-display); font-size: 1.25rem; color: #ffffff;">
                Curva de Energía Potencial Internuclear V(r)
              </h3>
              <p style="font-size: 0.82rem; color: var(--text-muted);">
                Equilibrio entre la repulsión coulómbica de núcleos/electrones (r < r₀) y la atracción por solapamiento cuántico (r > r₀).
              </p>
            </div>
            <span class="vcl-badge">${curve.curveType}</span>
          </div>

          <!-- Canvas 2D de la Gráfica de Morse -->
          <div style="flex: 1; background: #070b14; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem; position: relative;">
            <canvas id="energy-graph-canvas" width="800" height="420" style="width: 100%; height: 100%;"></canvas>
          </div>
        </div>
      </div>
    `;

    this.drawGraph(curve);
    this.setupEventListeners(curve);
  }

  private drawGraph(curve: BondEnergyCurve): void {
    const canvas = this.container.querySelector('#energy-graph-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const padding = { left: 70, right: 30, top: 30, bottom: 50 };
    const w = canvas.width - padding.left - padding.right;
    const h = canvas.height - padding.top - padding.bottom;

    // Rango de distancias y energías
    const minR = curve.points[0]?.internuclearDistancePm || 20;
    const maxR = curve.points[curve.points.length - 1]?.internuclearDistancePm || 300;
    const minV = -curve.dissociationEnergyKjMol * 1.15;
    const maxV = curve.dissociationEnergyKjMol * 1.5;

    const toX = (r: number) => padding.left + ((r - minR) / (maxR - minR)) * w;
    const toY = (v: number) => padding.top + ((maxV - v) / (maxV - minV)) * h;

    // Eje V = 0 (Línea discontinua)
    const zeroY = toY(0);
    ctx.beginPath();
    ctx.setLineDash([4, 4]);
    ctx.moveTo(padding.left, zeroY);
    ctx.lineTo(canvas.width - padding.right, zeroY);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.setLineDash([]);

    // Dibujar Curva de Energía
    ctx.beginPath();
    curve.points.forEach((p, idx) => {
      const x = toX(p.internuclearDistancePm);
      const y = toY(p.potentialEnergyKjMol);
      if (idx === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Sombreado bajo la curva del pozo
    ctx.lineTo(toX(maxR), zeroY);
    ctx.lineTo(toX(minR), zeroY);
    ctx.closePath();
    const fillGrad = ctx.createLinearGradient(0, zeroY, 0, toY(minV));
    fillGrad.addColorStop(0, 'rgba(56, 189, 248, 0.0)');
    fillGrad.addColorStop(1, 'rgba(56, 189, 248, 0.15)');
    ctx.fillStyle = fillGrad;
    ctx.fill();

    // Punto de Distancia de Equilibrio r_e
    const reX = toX(curve.equilibriumDistancePm);
    const reY = toY(-curve.dissociationEnergyKjMol);
    ctx.beginPath();
    ctx.arc(reX, reY, 6, 0, Math.PI * 2);
    ctx.fillStyle = '#f59e0b';
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 11px sans-serif';
    ctx.fillText(`r₀ = ${curve.equilibriumDistancePm} pm`, reX - 25, reY + 22);

    // Indicador de la distancia actual seleccionada por el slider
    const currX = toX(this.currentDistancePm);
    ctx.beginPath();
    ctx.setLineDash([2, 2]);
    ctx.moveTo(currX, padding.top);
    ctx.lineTo(currX, canvas.height - padding.bottom);
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.setLineDash([]);

    // Etiquetas de los ejes
    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px sans-serif';
    ctx.fillText('Distancia Internuclear r (pm)', canvas.width / 2 - 60, canvas.height - 15);

    ctx.save();
    ctx.translate(20, canvas.height / 2 + 50);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Energía Potencial V(r) [kJ/mol]', 0, 0);
    ctx.restore();
  }

  private setupEventListeners(curve: BondEnergyCurve): void {
    const select = this.container.querySelector('#energy-curve-select') as HTMLSelectElement;
    select?.addEventListener('change', (e) => {
      this.currentCurveKey = (e.target as HTMLSelectElement).value;
      const curves = EnergyEngine.getStandardCurves();
      const c = curves[this.currentCurveKey] || curves['O-H'];
      this.currentDistancePm = c.equilibriumDistancePm;
      this.render();
    });

    const slider = this.container.querySelector('#distance-slider') as HTMLInputElement;
    slider?.addEventListener('input', (e) => {
      this.currentDistancePm = parseFloat((e.target as HTMLInputElement).value);
      const valEl = this.container.querySelector('#slider-dist-val');
      if (valEl) valEl.textContent = String(this.currentDistancePm);
      this.drawGraph(curve);
    });
  }
}

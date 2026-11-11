/**
 * M02 — Atomic Studio
 * Virtual Chemistry Lab (VCL) — Vickora Labs
 *
 * Constructor interactivo a nivel subatómico (protones, neutrones, electrones)
 * y visualizador comparativo de los 5 modelos atómicos fundamentales.
 */

import { AtomicEngine, ELEMENTS_BY_SYMBOL, ELEMENTS_BY_Z } from '@vcl/chem-engine';
import type { AtomicStructure, AtomicModelType, AtomicModelInfo } from '@vcl/shared';

export class AtomicStudio {
  private container: HTMLElement;
  private currentElementSymbol: string = 'C';
  private protons: number = 6;
  private neutrons: number = 6;
  private electrons: number = 6;
  private currentModel: AtomicModelType = 'bohr';

  private animFrameId: number | null = null;

  constructor(container: HTMLElement, initialSymbol: string = 'C') {
    this.container = container;
    this.setElement(initialSymbol);
  }

  public setElement(symbol: string): void {
    const el = ELEMENTS_BY_SYMBOL[symbol] || ELEMENTS_BY_Z[6];
    this.currentElementSymbol = el.symbol;
    this.protons = el.atomicNumber;
    this.neutrons = Math.round(el.atomicMass - el.atomicNumber);
    this.electrons = el.atomicNumber;
    this.render();
  }

  public render(): void {
    const struct = AtomicEngine.createStructure(this.protons, this.neutrons, this.electrons);
    const models = AtomicEngine.getAtomicModels();
    const activeModelInfo: AtomicModelInfo = models[this.currentModel];

    this.container.innerHTML = `
      <div class="vcl-layout-3col">
        <!-- Panel Izquierdo: Controles Subatómicos -->
        <div class="vcl-card" style="display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div class="vcl-badge" style="margin-bottom: 0.8rem;">M02 // ATOMIC STUDIO</div>
            <h3 style="font-family: var(--font-display); font-size: 1.3rem; margin-bottom: 1.2rem; color: #ffffff;">Constructor Atómico</h3>

            <!-- Selector de Elemento Rápido -->
            <div style="margin-bottom: 1.5rem;">
              <label style="font-size: 0.78rem; color: var(--text-muted); display: block; margin-bottom: 0.4rem;">Elemento Químico Base</label>
              <select id="atomic-element-picker" class="vcl-input-search" style="width: 100%;">
                <option value="H" ${this.currentElementSymbol === 'H' ? 'selected' : ''}>1 - Hidrógeno (H)</option>
                <option value="He" ${this.currentElementSymbol === 'He' ? 'selected' : ''}>2 - Helio (He)</option>
                <option value="Li" ${this.currentElementSymbol === 'Li' ? 'selected' : ''}>3 - Litio (Li)</option>
                <option value="C" ${this.currentElementSymbol === 'C' ? 'selected' : ''}>6 - Carbono (C)</option>
                <option value="N" ${this.currentElementSymbol === 'N' ? 'selected' : ''}>7 - Nitrógeno (N)</option>
                <option value="O" ${this.currentElementSymbol === 'O' ? 'selected' : ''}>8 - Oxígeno (O)</option>
                <option value="F" ${this.currentElementSymbol === 'F' ? 'selected' : ''}>9 - Flúor (F)</option>
                <option value="Na" ${this.currentElementSymbol === 'Na' ? 'selected' : ''}>11 - Sodio (Na)</option>
                <option value="Cl" ${this.currentElementSymbol === 'Cl' ? 'selected' : ''}>17 - Cloro (Cl)</option>
                <option value="Ca" ${this.currentElementSymbol === 'Ca' ? 'selected' : ''}>20 - Calcio (Ca)</option>
                <option value="Fe" ${this.currentElementSymbol === 'Fe' ? 'selected' : ''}>26 - Hierro (Fe)</option>
              </select>
            </div>

            <!-- Control de Protones -->
            <div style="background: rgba(15, 23, 42, 0.6); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); margin-bottom: 1rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <span style="font-size: 0.85rem; font-weight: 600; color: #ef4444;">🔴 Protones (Z)</span>
                <span style="font-family: var(--font-mono); font-size: 1.2rem; font-weight: 700; color: #ffffff;" id="val-protons">${this.protons}</span>
              </div>
              <div style="display: flex; gap: 0.5rem;">
                <button class="vcl-btn vcl-btn-secondary" id="btn-p-dec" style="flex: 1;">- 1</button>
                <button class="vcl-btn vcl-btn-secondary" id="btn-p-inc" style="flex: 1;">+ 1</button>
              </div>
            </div>

            <!-- Control de Neutrones -->
            <div style="background: rgba(15, 23, 42, 0.6); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); margin-bottom: 1rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <span style="font-size: 0.85rem; font-weight: 600; color: #94a3b8;">⚪ Neutrones (N)</span>
                <span style="font-family: var(--font-mono); font-size: 1.2rem; font-weight: 700; color: #ffffff;" id="val-neutrons">${this.neutrons}</span>
              </div>
              <div style="display: flex; gap: 0.5rem;">
                <button class="vcl-btn vcl-btn-secondary" id="btn-n-dec" style="flex: 1;">- 1</button>
                <button class="vcl-btn vcl-btn-secondary" id="btn-n-inc" style="flex: 1;">+ 1</button>
              </div>
            </div>

            <!-- Control de Electrones -->
            <div style="background: rgba(15, 23, 42, 0.6); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); margin-bottom: 1.5rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <span style="font-size: 0.85rem; font-weight: 600; color: #38bdf8;">🔵 Electrones (e⁻)</span>
                <span style="font-family: var(--font-mono); font-size: 1.2rem; font-weight: 700; color: #ffffff;" id="val-electrons">${this.electrons}</span>
              </div>
              <div style="display: flex; gap: 0.5rem;">
                <button class="vcl-btn vcl-btn-secondary" id="btn-e-dec" style="flex: 1;">- 1</button>
                <button class="vcl-btn vcl-btn-secondary" id="btn-e-inc" style="flex: 1;">+ 1</button>
              </div>
            </div>
          </div>

          <button class="vcl-btn vcl-btn-secondary" id="btn-reset-atom" style="width: 100%;">
            <span>↺</span>
            <span>Restablecer Átomo Neutro</span>
          </button>
        </div>

        <!-- Panel Central: Lienzo Visual del Modelo Atómico Activo -->
        <div class="vcl-card" style="display: flex; flex-direction: column; position: relative; overflow: hidden; padding: 1rem;">
          <!-- Selector Superior de Modelos Atómicos -->
          <div style="display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 0.8rem; z-index: 10; flex-wrap: wrap;">
            ${(['dalton', 'thomson', 'rutherford', 'bohr', 'quantum'] as AtomicModelType[]).map(
              (m) => `
              <button class="vcl-btn ${this.currentModel === m ? 'vcl-btn-primary' : 'vcl-btn-secondary'}" data-model="${m}" style="font-size: 0.76rem; padding: 0.4rem 0.75rem;">
                ${models[m].name.split(' (')[0]}
              </button>
            `
            ).join('')}
          </div>

          <!-- Canvas 2D/3D del Modelo -->
          <div style="flex: 1; position: relative; border-radius: var(--radius-md); background: #070b14; border: 1px solid var(--border-subtle); overflow: hidden; display: flex; align-items: center; justify-content: center;">
            <canvas id="atomic-model-canvas" width="600" height="500" style="width: 100%; height: 100%;"></canvas>
            <div style="position: absolute; bottom: 1rem; left: 1rem; background: rgba(7, 11, 20, 0.85); backdrop-filter: blur(8px); padding: 0.5rem 0.9rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); font-size: 0.78rem; color: var(--accent-cyan);">
              Modo Activo: <strong>${activeModelInfo.name}</strong> (${activeModelInfo.year})
            </div>
          </div>
        </div>

        <!-- Panel Derecho: Diagnóstico Nuclear, Isótopos y Fundamento Pedagógico -->
        <div class="vcl-card" style="display: flex; flex-direction: column; justify-content: space-between; overflow-y: auto;">
          <div>
            <div class="vcl-badge" style="margin-bottom: 0.8rem; background: rgba(16, 185, 129, 0.15); color: #10b981; border-color: rgba(16, 185, 129, 0.3);">
              Estado Nuclear & Iónico
            </div>

            <!-- Ficha Nuclear Resumen -->
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.25rem;">
              <div style="width: 64px; height: 64px; border-radius: var(--radius-md); background: rgba(15, 23, 42, 0.9); border: 2px solid var(--accent-cyan); display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <span style="font-size: 0.72rem; color: var(--text-dim);">${struct.massNumber}</span>
                <span style="font-size: 1.6rem; font-weight: 800; color: #ffffff;">${struct.element.symbol}</span>
                <span style="font-size: 0.72rem; color: var(--text-dim);">${struct.protons}</span>
              </div>
              <div>
                <h4 style="font-size: 1.15rem; color: #ffffff;">${struct.element.name}</h4>
                <div style="font-family: var(--font-mono); font-size: 0.9rem; color: var(--accent-gold); font-weight: 700;">
                  ${struct.ionNotation} • ${struct.isotopeNotation}
                </div>
                <div style="font-size: 0.75rem; color: ${struct.isIon ? '#f59e0b' : '#10b981'}; margin-top: 0.2rem;">
                  ${struct.isIon ? `Ion ${struct.ionType.toUpperCase()} (Carga: ${struct.netCharge > 0 ? `+${struct.netCharge}` : struct.netCharge})` : 'Átomo Neutro (Carga 0)'}
                </div>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; margin-bottom: 1.5rem;">
              <div class="vcl-stat-box" style="padding: 0.6rem;">
                <div class="vcl-stat-lbl">Masa (A = p + n)</div>
                <div style="font-size: 1.1rem; font-weight: 700; color: #ffffff;">${struct.massNumber} u</div>
              </div>
              <div class="vcl-stat-box" style="padding: 0.6rem;">
                <div class="vcl-stat-lbl">Estabilidad N/Z</div>
                <div style="font-size: 1.0rem; font-weight: 700; color: ${struct.stability === 'stable' ? '#10b981' : '#ef4444'};">
                  ${struct.stability.toUpperCase()}
                </div>
              </div>
            </div>

            <!-- Fundamento del Modelo Seleccionado -->
            <div style="border-top: 1px solid var(--border-subtle); padding-top: 1rem;">
              <h4 style="font-size: 0.95rem; color: #ffffff; margin-bottom: 0.5rem;">Fundamento Histórico (${activeModelInfo.author})</h4>
              <p style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 0.8rem;">
                ${activeModelInfo.postulates[0]}
              </p>

              <h5 style="font-size: 0.82rem; color: #f59e0b; margin-bottom: 0.3rem;">Limitación Científica:</h5>
              <p style="font-size: 0.78rem; color: var(--text-dim); line-height: 1.4; margin-bottom: 0.8rem;">
                ${activeModelInfo.limitations[0]}
              </p>
            </div>
          </div>
        </div>
      </div>
    `;

    this.setupEventListeners();
    this.startCanvasAnimation();
  }

  private setupEventListeners(): void {
    // Selector rápido
    const picker = this.container.querySelector('#atomic-element-picker') as HTMLSelectElement;
    picker?.addEventListener('change', (e) => {
      this.setElement((e.target as HTMLSelectElement).value);
    });

    // Protones
    this.container.querySelector('#btn-p-inc')?.addEventListener('click', () => {
      if (this.protons < 118) {
        this.protons++;
        this.render();
      }
    });
    this.container.querySelector('#btn-p-dec')?.addEventListener('click', () => {
      if (this.protons > 1) {
        this.protons--;
        this.render();
      }
    });

    // Neutrones
    this.container.querySelector('#btn-n-inc')?.addEventListener('click', () => {
      this.neutrons++;
      this.render();
    });
    this.container.querySelector('#btn-n-dec')?.addEventListener('click', () => {
      if (this.neutrons > 0) {
        this.neutrons--;
        this.render();
      }
    });

    // Electrones
    this.container.querySelector('#btn-e-inc')?.addEventListener('click', () => {
      this.electrons++;
      this.render();
    });
    this.container.querySelector('#btn-e-dec')?.addEventListener('click', () => {
      if (this.electrons > 0) {
        this.electrons--;
        this.render();
      }
    });

    // Restablecer
    this.container.querySelector('#btn-reset-atom')?.addEventListener('click', () => {
      this.neutrons = Math.round(ELEMENTS_BY_Z[this.protons]?.atomicMass ?? this.protons) - this.protons;
      this.electrons = this.protons;
      this.render();
    });

    // Cambio de modelo
    const modelBtns = this.container.querySelectorAll('[data-model]');
    modelBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const m = btn.getAttribute('data-model') as AtomicModelType;
        if (m) {
          this.currentModel = m;
          this.render();
        }
      });
    });
  }

  private startCanvasAnimation(): void {
    const canvas = this.container.querySelector('#atomic-model-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;

    const draw = () => {
      time += 0.02;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      switch (this.currentModel) {
        case 'dalton': {
          // Esfera sólida e indivisible con gradiente esférico homogéneo
          const rad = 110;
          const grad = ctx.createRadialGradient(cx - 30, cy - 30, 10, cx, cy, rad);
          grad.addColorStop(0, '#94a3b8');
          grad.addColorStop(0.7, '#475569');
          grad.addColorStop(1, '#0f172a');

          ctx.beginPath();
          ctx.arc(cx, cy, rad, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 2;
          ctx.stroke();

          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 16px "Inter", sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('Esfera Maciza e Indivisible', cx, cy + rad + 35);
          break;
        }

        case 'thomson': {
          // Masa positiva continua con electrones incrustados
          const rad = 120;
          const grad = ctx.createRadialGradient(cx, cy, 10, cx, cy, rad);
          grad.addColorStop(0, 'rgba(239, 68, 68, 0.45)');
          grad.addColorStop(1, 'rgba(239, 68, 68, 0.15)');

          ctx.beginPath();
          ctx.arc(cx, cy, rad, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
          ctx.strokeStyle = '#ef4444';
          ctx.lineWidth = 2;
          ctx.stroke();

          // Electrones incrustados uniformemente
          const numE = Math.min(this.electrons, 24);
          for (let i = 0; i < numE; i++) {
            const angle = (i * 2 * Math.PI) / numE + time * 0.1;
            const r = (rad * 0.65) * Math.sqrt((i + 1) / numE);
            const ex = cx + r * Math.cos(angle);
            const ey = cy + r * Math.sin(angle);

            ctx.beginPath();
            ctx.arc(ex, ey, 7, 0, Math.PI * 2);
            ctx.fillStyle = '#38bdf8';
            ctx.fill();
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1;
            ctx.stroke();

            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 9px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('-', ex, ey + 3);
          }
          break;
        }

        case 'rutherford': {
          // Núcleo diminuto hiperdenso central y electrones en órbitas planetarias elípticas
          const numOrbits = 3;
          for (let o = 0; o < numOrbits; o++) {
            const rot = (o * Math.PI) / 3;
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(rot);

            ctx.beginPath();
            ctx.ellipse(0, 0, 160, 60, 0, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Electrón viajando por la elipse
            const t = time * (1.2 + o * 0.4);
            const ex = 160 * Math.cos(t);
            const ey = 60 * Math.sin(t);

            ctx.beginPath();
            ctx.arc(ex, ey, 6, 0, Math.PI * 2);
            ctx.fillStyle = '#38bdf8';
            ctx.fill();
            ctx.restore();
          }

          // Núcleo central
          ctx.beginPath();
          ctx.arc(cx, cy, 14, 0, Math.PI * 2);
          ctx.fillStyle = '#ef4444';
          ctx.fill();
          ctx.strokeStyle = '#fca5a5';
          ctx.lineWidth = 2;
          ctx.stroke();
          break;
        }

        case 'bohr': {
          // Órbitas circulares cuantizadas concéntricas con radios n=1, 2, 3...
          const maxN = Math.min(4, Math.ceil(this.electrons / 2));
          let eRemaining = this.electrons;
          const capacities = [2, 8, 18, 32];

          for (let n = 1; n <= Math.max(2, maxN); n++) {
            const r = 40 + n * 35;
            ctx.beginPath();
            ctx.arc(cx, cy, r, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
            ctx.lineWidth = 1.2;
            ctx.stroke();

            // Etiqueta del nivel
            ctx.fillStyle = 'rgba(148, 163, 184, 0.6)';
            ctx.font = '10px monospace';
            ctx.fillText(`n=${n}`, cx + r + 4, cy + 3);

            // Electrones en este nivel
            const cap = capacities[n - 1] || 8;
            const inLevel = Math.min(eRemaining, cap);
            eRemaining -= inLevel;

            for (let i = 0; i < inLevel; i++) {
              const theta = (i * 2 * Math.PI) / inLevel + time * (1.5 / n);
              const ex = cx + r * Math.cos(theta);
              const ey = cy + r * Math.sin(theta);

              ctx.beginPath();
              ctx.arc(ex, ey, 6, 0, Math.PI * 2);
              ctx.fillStyle = '#38bdf8';
              ctx.fill();
              ctx.strokeStyle = '#ffffff';
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }

          // Núcleo denso central con protones y neutrones
          ctx.beginPath();
          ctx.arc(cx, cy, 18, 0, Math.PI * 2);
          ctx.fillStyle = '#ef4444';
          ctx.fill();
          ctx.strokeStyle = '#fca5a5';
          ctx.lineWidth = 2;
          ctx.stroke();

          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 11px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(`+${this.protons}`, cx, cy + 4);
          break;
        }

        case 'quantum': {
          // Nube de probabilidad mecánica cuántica |Ψ|² (NO órbitas planetarias)
          const numParticles = 280;
          for (let p = 0; p < numParticles; p++) {
            // Distribución radial gaussiana simulando densidad |Ψ_1s|² + |Ψ_2p|²
            const u1 = Math.random();
            const u2 = Math.random();
            const r = Math.sqrt(-2.0 * Math.log(u1)) * 55;
            const theta = 2.0 * Math.PI * u2;

            const px = cx + r * Math.cos(theta + time * 0.05);
            const py = cy + r * Math.sin(theta + time * 0.05);

            const dist = Math.sqrt(Math.pow(px - cx, 2) + Math.pow(py - cy, 2));
            const opacity = Math.max(0.08, Math.min(0.7, 1 - dist / 150));

            ctx.beginPath();
            ctx.arc(px, py, 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(56, 189, 248, ${opacity})`;
            ctx.fill();
          }

          // Núcleo cuántico
          ctx.beginPath();
          ctx.arc(cx, cy, 12, 0, Math.PI * 2);
          ctx.fillStyle = '#ef4444';
          ctx.fill();

          ctx.fillStyle = '#38bdf8';
          ctx.font = '12px "Inter", sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('Densidad de Probabilidad Espacial |Ψ|²', cx, cy + 180);
          break;
        }
      }

      this.animFrameId = requestAnimationFrame(draw);
    };

    if (this.animFrameId !== null) cancelAnimationFrame(this.animFrameId);
    draw();
  }

  public dispose(): void {
    if (this.animFrameId !== null) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
  }
}

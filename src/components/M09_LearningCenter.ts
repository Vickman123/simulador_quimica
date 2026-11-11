/**
 * M09 — Learning Center (Bachillerato)
 * Virtual Chemistry Lab (VCL) — Vickora Labs
 *
 * Entorno pedagógico con lecciones científicas, bitácora interactiva
 * de laboratorio (hipótesis, procedimiento, conclusión) y evaluaciones formativas.
 */

import { eventBus } from '@vcl/shared';

export interface LabNoteEntry {
  id: string;
  title: string;
  date: string;
  objective: string;
  hypothesis: string;
  reagents: string;
  procedure: string;
  observations: string;
  results: string;
  conclusion: string;
}

export class LearningCenter {
  private container: HTMLElement;
  private activeSection: 'lessons' | 'notebook' | 'quizzes' = 'lessons';
  private notebookEntries: LabNoteEntry[] = [];

  constructor(container: HTMLElement) {
    this.container = container;
    this.loadNotebook();
    this.render();
  }

  private loadNotebook(): void {
    try {
      const saved = localStorage.getItem('vcl_lab_notebook');
      if (saved) {
        this.notebookEntries = JSON.parse(saved);
      } else {
        // Entrada inicial de ejemplo educativo
        this.notebookEntries = [
          {
            id: 'exp-1',
            title: 'Síntesis y Geometría Molecular del Agua (H2O)',
            date: new Date().toLocaleDateString('es-MX'),
            objective: 'Sintetizar virtualmente la molécula de agua a partir de hidrógeno y oxígeno, evaluando su geometría angular mediante la teoría VSEPR.',
            hypothesis: 'Dado que el oxígeno posee dos pares de electrones solitarios en su capa de valencia, estos deformarán los enlaces O-H generando un ángulo inferior a 109.5°.',
            reagents: '2 moles de H2(g), 1 mol de O2(g), catalizador virtual.',
            procedure: '1. Cargar átomos en Molecular Builder. 2. Formar enlaces simples O-H. 3. Medir ángulo dipolar en Bond Studio.',
            observations: 'Se observó una marcada polaridad hacia el oxígeno (δ-) debido a su alta electronegatividad (χ=3.44 vs 2.20).',
            results: 'Geometría angular confirmada con ángulo experimental de 104.5° y momento dipolar de 1.85 Debye.',
            conclusion: 'Se confirmó la hipótesis: la repulsión de los dos pares libres del oxígeno comprime los enlaces O-H demostrando la validez del modelo VSEPR.',
          },
        ];
      }
    } catch {
      this.notebookEntries = [];
    }
  }

  private saveNotebook(): void {
    try {
      localStorage.setItem('vcl_lab_notebook', JSON.stringify(this.notebookEntries));
    } catch {}
  }

  public render(): void {
    this.container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 1.5rem; min-height: calc(100vh - 120px);">
        <!-- Barra Superior de Secciones Educativas -->
        <div style="display: flex; justify-content: space-between; align-items: center; background: var(--bg-card); padding: 1rem 1.5rem; border-radius: var(--radius-lg); border: 1px solid var(--border-subtle); flex-wrap: wrap; gap: 1rem;">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <div class="vcl-badge">NIVEL BACHILLERATO</div>
            <h3 style="font-family: var(--font-display); font-size: 1.25rem; color: #ffffff;">Centro de Aprendizaje y Bitácora</h3>
          </div>

          <div style="display: flex; gap: 0.5rem;">
            <button class="vcl-btn ${this.activeSection === 'lessons' ? 'vcl-btn-primary' : 'vcl-btn-secondary'} btn-sec" data-sec="lessons">
              <span>📖</span>
              <span>Lecciones Guiadas</span>
            </button>
            <button class="vcl-btn ${this.activeSection === 'notebook' ? 'vcl-btn-primary' : 'vcl-btn-secondary'} btn-sec" data-sec="notebook">
              <span>📝</span>
              <span>Bitácora de Laboratorio (${this.notebookEntries.length})</span>
            </button>
            <button class="vcl-btn ${this.activeSection === 'quizzes' ? 'vcl-btn-primary' : 'vcl-btn-secondary'} btn-sec" data-sec="quizzes">
              <span>🎯</span>
              <span>Retos y Cuestionarios</span>
            </button>
          </div>
        </div>

        <!-- Contenedor de la Sección Activa -->
        <div id="learning-content-container">
          ${this.renderSectionContent()}
        </div>
      </div>
    `;

    this.setupEventListeners();
  }

  private renderSectionContent(): string {
    if (this.activeSection === 'lessons') {
      return `
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.25rem;">
          <div class="vcl-card">
            <span class="vcl-badge" style="margin-bottom: 0.6rem;">LECCIÓN 1</span>
            <h4 style="font-size: 1.15rem; color: #ffffff; margin-bottom: 0.5rem;">Evolución del Modelo Atómico</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1rem;">
              Desde la indivisibilidad de Dalton y el pudín de Thomson hasta el núcleo de Rutherford, las órbitas de Bohr y los orbitales probabilísticos de Schrödinger.
            </p>
            <div style="font-size: 0.76rem; color: var(--accent-cyan); font-weight: 600;">Objetivo: Distinguir órbitas clásicas de orbitales cuánticos.</div>
          </div>

          <div class="vcl-card">
            <span class="vcl-badge" style="margin-bottom: 0.6rem;">LECCIÓN 2</span>
            <h4 style="font-size: 1.15rem; color: #ffffff; margin-bottom: 0.5rem;">Electrones y la Tabla Periódica</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1rem;">
              Cómo el principio de Aufbau (regla de Madelung), la regla de Hund y el principio de Pauli explican la periodicidad de los 118 elementos.
            </p>
            <div style="font-size: 0.76rem; color: var(--accent-cyan); font-weight: 600;">Objetivo: Escribir configuraciones y predecir valencias.</div>
          </div>

          <div class="vcl-card">
            <span class="vcl-badge" style="margin-bottom: 0.6rem;">LECCIÓN 3</span>
            <h4 style="font-size: 1.15rem; color: #ffffff; margin-bottom: 0.5rem;">Enlaces y Electronegatividad</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1rem;">
              La escala de Pauling: cómo el diferencial Δχ divide los enlaces en covalentes no polares, covalentes polares y enlaces iónicos puros.
            </p>
            <div style="font-size: 0.76rem; color: var(--accent-cyan); font-weight: 600;">Objetivo: Calcular cargas parciales y dipolos.</div>
          </div>

          <div class="vcl-card">
            <span class="vcl-badge" style="margin-bottom: 0.6rem;">LECCIÓN 4</span>
            <h4 style="font-size: 1.15rem; color: #ffffff; margin-bottom: 0.5rem;">Geometría Molecular VSEPR</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1rem;">
              Notación AXE: cómo la repulsión coulómbica de pares solitarios y pares enlazantes determina formas tridimensionales y ángulos de enlace.
            </p>
            <div style="font-size: 0.76rem; color: var(--accent-cyan); font-weight: 600;">Objetivo: Predecir formas lineales, tetraédricas y angulares.</div>
          </div>

          <div class="vcl-card">
            <span class="vcl-badge" style="margin-bottom: 0.6rem;">LECCIÓN 5</span>
            <h4 style="font-size: 1.15rem; color: #ffffff; margin-bottom: 0.5rem;">Conservación y Termodinámica</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1rem;">
              Ley de Lavoisier: balance estequiométrico, balance de cargas y cálculo del calor de reacción ΔH (reacciones exotérmicas vs endotérmicas).
            </p>
            <div style="font-size: 0.76rem; color: var(--accent-cyan); font-weight: 600;">Objetivo: Balancear ecuaciones y auditar átomos.</div>
          </div>
        </div>
      `;
    }

    if (this.activeSection === 'notebook') {
      return `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
          <!-- Formulario de Nueva Entrada de Bitácora -->
          <div class="vcl-card">
            <div class="vcl-badge" style="margin-bottom: 0.8rem;">NUEVA EXPERIMENTACIÓN VIRTUAL</div>
            <h4 style="font-size: 1.2rem; color: #ffffff; margin-bottom: 1rem;">Registrar Entrada de Laboratorio</h4>

            <div style="display: flex; flex-direction: column; gap: 0.8rem;">
              <div>
                <label style="font-size: 0.76rem; color: var(--text-muted); display: block; margin-bottom: 0.2rem;">Título de la Práctica</label>
                <input type="text" id="nb-title" class="vcl-input-search" style="width: 100%;" placeholder="ej. Síntesis y Enlace de Metano (CH4)"/>
              </div>

              <div>
                <label style="font-size: 0.76rem; color: var(--text-muted); display: block; margin-bottom: 0.2rem;">1. Objetivo Científico</label>
                <textarea id="nb-objective" class="vcl-input-search" rows="2" style="width: 100%; resize: vertical;" placeholder="¿Qué fenómeno se busca demostrar?"></textarea>
              </div>

              <div>
                <label style="font-size: 0.76rem; color: var(--text-muted); display: block; margin-bottom: 0.2rem;">2. Hipótesis Inicial</label>
                <textarea id="nb-hypothesis" class="vcl-input-search" rows="2" style="width: 100%; resize: vertical;" placeholder="¿Cuál es el resultado esperado y por qué?"></textarea>
              </div>

              <div>
                <label style="font-size: 0.76rem; color: var(--text-muted); display: block; margin-bottom: 0.2rem;">3. Reactivos y Condiciones</label>
                <input type="text" id="nb-reagents" class="vcl-input-search" style="width: 100%;" placeholder="ej. C(s), 2 H2(g), 298 K"/>
              </div>

              <div>
                <label style="font-size: 0.76rem; color: var(--text-muted); display: block; margin-bottom: 0.2rem;">4. Procedimiento Virtual Realizado</label>
                <textarea id="nb-procedure" class="vcl-input-search" rows="2" style="width: 100%; resize: vertical;" placeholder="Pasos ejecutados en Molecular Builder o Reaction Lab..."></textarea>
              </div>

              <div>
                <label style="font-size: 0.76rem; color: var(--text-muted); display: block; margin-bottom: 0.2rem;">5. Observaciones y Resultados</label>
                <textarea id="nb-results" class="vcl-input-search" rows="2" style="width: 100%; resize: vertical;" placeholder="Ángulos medidos, energía de enlace, balance..."></textarea>
              </div>

              <div>
                <label style="font-size: 0.76rem; color: var(--text-muted); display: block; margin-bottom: 0.2rem;">6. Conclusión Pedagógica</label>
                <textarea id="nb-conclusion" class="vcl-input-search" rows="2" style="width: 100%; resize: vertical;" placeholder="¿Se comprobó la hipótesis? ¿Qué leyes aplican?"></textarea>
              </div>

              <button class="vcl-btn vcl-btn-primary" id="btn-save-notebook" style="margin-top: 0.5rem; justify-content: center;">
                <span>💾</span>
                <span>Guardar en Bitácora Digital</span>
              </button>
            </div>
          </div>

          <!-- Historial de Entradas Registradas -->
          <div style="display: flex; flex-direction: column; gap: 1rem; max-height: 80vh; overflow-y: auto;">
            ${this.notebookEntries.map((entry) => `
              <div class="vcl-card" style="padding: 1.25rem;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.6rem;">
                  <h4 style="font-size: 1.1rem; color: #ffffff;">${entry.title}</h4>
                  <span class="vcl-badge" style="font-size: 0.68rem;">${entry.date}</span>
                </div>

                <div style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 0.6rem;">
                  <strong style="color: var(--accent-cyan);">Objetivo:</strong> ${entry.objective}
                </div>
                <div style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 0.6rem;">
                  <strong style="color: #f59e0b;">Hipótesis:</strong> ${entry.hypothesis}
                </div>
                <div style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 0.6rem;">
                  <strong style="color: #ffffff;">Resultados:</strong> ${entry.results}
                </div>
                <div style="font-size: 0.8rem; color: #e2e8f0; line-height: 1.5; background: rgba(15, 23, 42, 0.6); padding: 0.6rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
                  <strong style="color: #10b981;">Conclusión:</strong> ${entry.conclusion}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // Quizzes
    return `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
        <div class="vcl-card">
          <div class="vcl-badge" style="margin-bottom: 0.6rem;">RETO 1 // ENLACES</div>
          <h4 style="font-size: 1.1rem; color: #ffffff; margin-bottom: 0.5rem;">Predecir el Carácter del Enlace NaCl</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
            Sodio tiene electronegatividad χ = 0.93 y Cloro χ = 3.16. ¿Qué tipo de enlace predomina según Pauling?
          </p>
          <div style="display: flex; flex-direction: column; gap: 0.5rem;" id="quiz-1-options">
            <button class="vcl-btn vcl-btn-secondary quiz-opt" data-correct="false">A) Covalente No Polar</button>
            <button class="vcl-btn vcl-btn-secondary quiz-opt" data-correct="false">B) Covalente Polar con momento dipolar bajo</button>
            <button class="vcl-btn vcl-btn-secondary quiz-opt" data-correct="true">C) Iónico puro (Δχ = 2.23 ≥ 1.7)</button>
            <button class="vcl-btn vcl-btn-secondary quiz-opt" data-correct="false">D) Enlace Metálico</button>
          </div>
          <div id="quiz-1-feedback" style="margin-top: 1rem; font-size: 0.82rem; font-weight: 600;"></div>
        </div>

        <div class="vcl-card">
          <div class="vcl-badge" style="margin-bottom: 0.6rem;">RETO 2 // VSEPR</div>
          <h4 style="font-size: 1.1rem; color: #ffffff; margin-bottom: 0.5rem;">Geometría del Metano (CH4)</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
            El carbono central tiene 4 enlaces simples C-H y 0 pares libres (AX4). ¿Cuál es su forma geométrica tridimensional?
          </p>
          <div style="display: flex; flex-direction: column; gap: 0.5rem;" id="quiz-2-options">
            <button class="vcl-btn vcl-btn-secondary quiz-opt2" data-correct="false">A) Cuadrada Plana (90°)</button>
            <button class="vcl-btn vcl-btn-secondary quiz-opt2" data-correct="true">B) Tetraédrica Regular (109.5°)</button>
            <button class="vcl-btn vcl-btn-secondary quiz-opt2" data-correct="false">C) Trigonal Piramidal (107.3°)</button>
            <button class="vcl-btn vcl-btn-secondary quiz-opt2" data-correct="false">D) Bipiramidal Trigonal</button>
          </div>
          <div id="quiz-2-feedback" style="margin-top: 1rem; font-size: 0.82rem; font-weight: 600;"></div>
        </div>

        <div class="vcl-card">
          <div class="vcl-badge" style="margin-bottom: 0.6rem;">RETO 3 // MODELOS ATÓMICOS</div>
          <h4 style="font-size: 1.1rem; color: #ffffff; margin-bottom: 0.5rem;">El Salto Cuántico de Bohr</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
            ¿Qué ocurre según el modelo de Bohr cuando un electrón salta de una órbita exterior (n=3) a una interior (n=2)?
          </p>
          <div style="display: flex; flex-direction: column; gap: 0.5rem;" id="quiz-3-options">
            <button class="vcl-btn vcl-btn-secondary quiz-opt3" data-correct="true">A) Emite un fotón discreto de energía ΔE = h·ν (Línea Balmer)</button>
            <button class="vcl-btn vcl-btn-secondary quiz-opt3" data-correct="false">B) Absorbe energía continuamente sin radiar</button>
            <button class="vcl-btn vcl-btn-secondary quiz-opt3" data-correct="false">C) El electrón colapsa electrostáticamente en el núcleo</button>
            <button class="vcl-btn vcl-btn-secondary quiz-opt3" data-correct="false">D) Aumenta su masa atómica</button>
          </div>
          <div id="quiz-3-feedback" style="margin-top: 1rem; font-size: 0.82rem; font-weight: 600;"></div>
        </div>
      </div>
    `;
  }

  private setupEventListeners(): void {
    // Cambio de sección
    this.container.querySelectorAll('.btn-sec').forEach((btn) => {
      btn.addEventListener('click', () => {
        const sec = btn.getAttribute('data-sec') as any;
        if (sec) {
          this.activeSection = sec;
          this.render();
        }
      });
    });

    // Guardar bitácora
    const btnSave = this.container.querySelector('#btn-save-notebook');
    btnSave?.addEventListener('click', () => {
      const title = (this.container.querySelector('#nb-title') as HTMLInputElement)?.value;
      const objective = (this.container.querySelector('#nb-objective') as HTMLTextAreaElement)?.value;
      const hypothesis = (this.container.querySelector('#nb-hypothesis') as HTMLTextAreaElement)?.value;
      const reagents = (this.container.querySelector('#nb-reagents') as HTMLInputElement)?.value;
      const procedure = (this.container.querySelector('#nb-procedure') as HTMLTextAreaElement)?.value;
      const results = (this.container.querySelector('#nb-results') as HTMLTextAreaElement)?.value;
      const conclusion = (this.container.querySelector('#nb-conclusion') as HTMLTextAreaElement)?.value;

      if (!title || !conclusion) {
        eventBus.emit('lab:notification', {
          title: 'Datos Incompletos',
          message: 'Por favor asigna al menos un título y una conclusión a tu práctica.',
          type: 'warning',
        });
        return;
      }

      const newEntry: LabNoteEntry = {
        id: `entry-${Date.now()}`,
        title,
        date: new Date().toLocaleDateString('es-MX'),
        objective,
        hypothesis,
        reagents,
        procedure,
        observations: '',
        results,
        conclusion,
      };

      this.notebookEntries.unshift(newEntry);
      this.saveNotebook();
      this.render();

      eventBus.emit('lab:notification', {
        title: 'Práctica Guardada',
        message: `La entrada "${title}" ha sido incorporada a tu bitácora escolar.`,
        type: 'success',
      });
    });

    // Quizzes feedback
    const setupQuiz = (selector: string, feedbackId: string, explanation: string) => {
      this.container.querySelectorAll(selector).forEach((btn) => {
        btn.addEventListener('click', () => {
          const isCorrect = btn.getAttribute('data-correct') === 'true';
          const fb = this.container.querySelector(feedbackId);
          if (fb) {
            fb.textContent = isCorrect
              ? `✓ ¡Correcto! ${explanation}`
              : '✗ Incorrecto. Revisa el fundamento científico en los módulos interactivos.';
            fb.style.color = isCorrect ? '#10b981' : '#ef4444';
          }
        });
      });
    };

    setupQuiz('.quiz-opt', '#quiz-1-feedback', 'El gran delta de electronegatividad (2.23) produce transferencia iónica total.');
    setupQuiz('.quiz-opt2', '#quiz-2-feedback', 'Cuatro dominios enlazantes simétricos minimizan repulsiones a 109.5° en 3D.');
    setupQuiz('.quiz-opt3', '#quiz-3-feedback', 'La transición hacia un nivel de menor energía libera un fotón de frecuencia cuántica exacta.');
  }
}

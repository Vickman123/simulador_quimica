/**
 * Dashboard Principal — Virtual Chemistry Lab (VCL)
 * Vickora Labs
 */

import { ALL_118_ELEMENTS, VERIFIED_REACTIONS, STANDARD_MOLECULES } from '@vcl/chem-engine';

export class Dashboard {
  private container: HTMLElement;
  private onNavigate: (tabId: string) => void;

  constructor(container: HTMLElement, onNavigate: (tabId: string) => void) {
    this.container = container;
    this.onNavigate = onNavigate;
    this.render();
  }

  public render(): void {
    const totalElements = ALL_118_ELEMENTS.length;
    const totalReactions = VERIFIED_REACTIONS.length;
    const totalMolecules = Object.keys(STANDARD_MOLECULES).length;

    this.container.innerHTML = `
      <div class="vcl-dashboard-container">
        <!-- Hero Section -->
        <div class="vcl-dashboard-hero">
          <div class="vcl-hero-banner">
            <div>
              <div class="vcl-badge" style="margin-bottom: 0.8rem;">Vickora Labs • Simulación Científica 2026</div>
              <h2>Laboratorio Virtual de Química</h2>
              <p>
                Plataforma interactiva de simulación atómica, molecular y estequiométrica de alta precisión.
                Diseñada para bachillerato, computación espacial y dispositivos WebXR como <strong>Meta Quest 3S</strong>.
              </p>
            </div>
            <div style="display: flex; gap: 0.8rem; flex-wrap: wrap;">
              <button class="vcl-btn vcl-btn-primary" id="btn-hero-builder">
                <span>🧪</span>
                <span>Construir Molécula 3D</span>
              </button>
              <button class="vcl-btn vcl-btn-secondary" id="btn-hero-ptable">
                <span>📊</span>
                <span>Explorar 118 Elementos</span>
              </button>
              <button class="vcl-btn vcl-btn-xr" id="btn-hero-xr">
                <span>🥽</span>
                <span>Laboratorio Inmersivo XR</span>
              </button>
            </div>
          </div>

          <!-- Quick Stats Panel -->
          <div class="vcl-card" style="display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div class="vcl-badge" style="margin-bottom: 0.8rem; background: rgba(245, 158, 11, 0.15); color: #f59e0b; border-color: rgba(245, 158, 11, 0.3);">
                Estándar Científico Certificado
              </div>
              <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; color: #ffffff;">Metrología e Información</h3>
              <p style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.5;">
                Datos contrastados con NIST Chemistry WebBook, IUPAC Atomic Weights y PubChem.
                Motor químico puro desacoplado, sin alucinación ni estimaciones arbitrarias.
              </p>
            </div>

            <div class="vcl-stats-grid" style="grid-template-columns: repeat(2, 1fr); margin-top: 1rem;">
              <div class="vcl-stat-box">
                <div class="vcl-stat-val">${totalElements}</div>
                <div class="vcl-stat-lbl">Elementos Tabla Periódica</div>
              </div>
              <div class="vcl-stat-box">
                <div class="vcl-stat-val">${totalReactions}</div>
                <div class="vcl-stat-lbl">Reacciones Certificadas</div>
              </div>
              <div class="vcl-stat-box">
                <div class="vcl-stat-val">${totalMolecules}</div>
                <div class="vcl-stat-lbl">Moléculas 3D Estándar</div>
              </div>
              <div class="vcl-stat-box">
                <div class="vcl-stat-val">5</div>
                <div class="vcl-stat-lbl">Modelos Atómicos</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Módulos Científicos Grid -->
        <h3 style="font-family: var(--font-display); font-size: 1.35rem; margin-bottom: 1.25rem; color: #ffffff; letter-spacing: 0.04em;">
          MÓDULOS DE EXPERIMENTACIÓN Y ANÁLISIS
        </h3>

        <div class="vcl-modules-grid">
          <div class="vcl-card vcl-module-card" data-nav="m01-ptable">
            <div>
              <div class="vcl-module-icon">📊</div>
              <h3>M01 — Periodic Explorer</h3>
              <p>Tabla periódica interactiva de 118 elementos con configuraciones electrónicas, radios, masas y electronegatividades.</p>
            </div>
            <button class="vcl-btn vcl-btn-secondary" style="width: 100%;">Abrir Tabla Periódica →</button>
          </div>

          <div class="vcl-card vcl-module-card" data-nav="m02-atomic">
            <div>
              <div class="vcl-module-icon">⚛️</div>
              <h3>M02 — Atomic Studio</h3>
              <p>Constructor de átomos a nivel subatómico (protones, neutrones, electrones). Comparativa de los 5 modelos atómicos desde Dalton hasta la mecánica cuántica.</p>
            </div>
            <button class="vcl-btn vcl-btn-secondary" style="width: 100%;">Entrar a Atomic Studio →</button>
          </div>

          <div class="vcl-card vcl-module-card" data-nav="m03-electron">
            <div>
              <div class="vcl-module-icon">🌀</div>
              <h3>M03 — Electron Lab</h3>
              <p>Diagrama de energía de Aufbau, orbitales s, p, d, f con regla de Hund, principio de Pauli y cálculo de electrones de valencia.</p>
            </div>
            <button class="vcl-btn vcl-btn-secondary" style="width: 100%;">Explorar Orbitales →</button>
          </div>

          <div class="vcl-card vcl-module-card" data-nav="m04-bonds">
            <div>
              <div class="vcl-module-icon">🔗</div>
              <h3>M04 — Bond Studio</h3>
              <p>Simulador de enlaces covalentes (polar/no polar), iónicos y metálicos según escala de Pauling, estructuras de Lewis y fuerzas intermoleculares.</p>
            </div>
            <button class="vcl-btn vcl-btn-secondary" style="width: 100%;">Experimentar Enlaces →</button>
          </div>

          <div class="vcl-card vcl-module-card" data-nav="m05-builder">
            <div>
              <div class="vcl-module-icon">🧪</div>
              <h3>M05 — Molecular Builder</h3>
              <p>Evolución de la experiencia Moléculas. Visualizador y constructor molecular 3D con Ball & Stick, Space Filling, Wireframe y geometría VSEPR.</p>
            </div>
            <button class="vcl-btn vcl-btn-primary" style="width: 100%;">Abrir Constructor 3D →</button>
          </div>

          <div class="vcl-card vcl-module-card" data-nav="m06-reactions">
            <div>
              <div class="vcl-module-icon">💥</div>
              <h3>M06 — Reaction Lab</h3>
              <p>Motor de reacciones químicas verificadas, balanceador estequiométrico, conservación de masa y cálculo termodinámico de entalpía ΔH.</p>
            </div>
            <button class="vcl-btn vcl-btn-secondary" style="width: 100%;">Simular Reacciones →</button>
          </div>

          <div class="vcl-card vcl-module-card" data-nav="m07-energy">
            <div>
              <div class="vcl-module-icon">📈</div>
              <h3>M07 — Energy & Forces</h3>
              <p>Curvas interactivas de potencial de Morse y Lennard-Jones. Distancia de equilibrio internuclear y energía de enlace.</p>
            </div>
            <button class="vcl-btn vcl-btn-secondary" style="width: 100%;">Analizar Curvas →</button>
          </div>

          <div class="vcl-card vcl-module-card" data-nav="m08-xr">
            <div>
              <div class="vcl-module-icon">🥽</div>
              <h3>M08 — Immersive Lab</h3>
              <p>Laboratorio espacial para Meta Quest 3S. Agarra, rota y examina moléculas a escala aumentada con mandos Touch Plus en WebXR.</p>
            </div>
            <button class="vcl-btn vcl-btn-xr" style="width: 100%;">Iniciar Sesión WebXR →</button>
          </div>

          <div class="vcl-card vcl-module-card" data-nav="m09-learning">
            <div>
              <div class="vcl-module-icon">📚</div>
              <h3>M09 — Learning Center</h3>
              <p>Entorno educativo de bachillerato con lecciones guiadas, bitácora de laboratorio interactiva y cuestionarios con evaluación científica.</p>
            </div>
            <button class="vcl-btn vcl-btn-secondary" style="width: 100%;">Ver Actividades →</button>
          </div>
        </div>
      </div>
    `;

    // Event listeners
    this.container.querySelector('#btn-hero-builder')?.addEventListener('click', () => this.onNavigate('m05-builder'));
    this.container.querySelector('#btn-hero-ptable')?.addEventListener('click', () => this.onNavigate('m01-ptable'));
    this.container.querySelector('#btn-hero-xr')?.addEventListener('click', () => this.onNavigate('m08-xr'));

    const cards = this.container.querySelectorAll('.vcl-module-card');
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        const nav = card.getAttribute('data-nav');
        if (nav) this.onNavigate(nav);
      });
    });
  }
}

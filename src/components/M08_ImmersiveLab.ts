/**
 * M08 — Immersive Lab (WebXR / Meta Quest 3S)
 * Virtual Chemistry Lab (VCL) — Vickora Labs
 *
 * Experiencia inmersiva espacial 6-DoF para Meta Quest 3S,
 * manipulación con mandos Touch Plus, panel HUD espacial y fallback desktop.
 */

import { eventBus } from '@vcl/shared';

export class ImmersiveLab {
  private container: HTMLElement;
  private onLaunchXR: () => void;
  private isXRSupported: boolean = false;

  constructor(container: HTMLElement, onLaunchXR: () => void) {
    this.container = container;
    this.onLaunchXR = onLaunchXR;

    // Escuchar estado WebXR
    eventBus.on('xr:sessionState', (data) => {
      this.isXRSupported = data.supported;
      const statusEl = this.container.querySelector('#xr-compat-badge');
      if (statusEl) {
        statusEl.textContent = data.supported ? 'WebXR Compatible (Meta Quest Detectado)' : 'Modo Desktop (Sin Visor XR)';
        statusEl.className = data.supported ? 'vcl-badge' : 'vcl-badge';
      }
    });

    this.render();
  }

  public render(): void {
    this.container.innerHTML = `
      <div class="vcl-layout-split">
        <!-- Panel Izquierdo: Lanzador y Estado -->
        <div class="vcl-card" style="padding: 2.5rem; display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
          <div>
            <div class="vcl-badge" id="xr-compat-badge" style="margin-bottom: 1rem; background: rgba(168, 85, 247, 0.15); color: #a855f7; border-color: rgba(168, 85, 247, 0.3);">
              Verificando Capacidades WebXR...
            </div>

            <h2 style="font-family: var(--font-display); font-size: 2rem; color: #ffffff; line-height: 1.2; margin-bottom: 1rem;">
              Laboratorio Químico Inmersivo WebXR
            </h2>

            <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 2rem;">
              Entra a la experiencia de realidad virtual optimizada para <strong>Meta Quest 3S</strong>.
              Examina moléculas a escala aumentada, agárralas en el espacio con tus manos y manipula enlaces en tiempo real.
            </p>

            <!-- Botón Central de Lanzamiento XR -->
            <button class="vcl-btn vcl-btn-xr" id="btn-enter-webxr" style="font-size: 1.05rem; padding: 0.85rem 1.75rem; width: 100%; justify-content: center; margin-bottom: 1.5rem;">
              <span>🥽</span>
              <span>Iniciar Sesión Inmersiva WebXR</span>
            </button>

            <!-- Características del Runtime -->
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.8rem;">
              <div class="vcl-stat-box" style="text-align: left; padding: 0.75rem;">
                <div class="vcl-stat-lbl">Tasa de Refresco</div>
                <div style="font-size: 1.1rem; font-weight: 700; color: #10b981;">90 Hz Target</div>
              </div>
              <div class="vcl-stat-box" style="text-align: left; padding: 0.75rem;">
                <div class="vcl-stat-lbl">Controladores</div>
                <div style="font-size: 1.1rem; font-weight: 700; color: var(--accent-cyan);">Touch Plus 6-DoF</div>
              </div>
              <div class="vcl-stat-box" style="text-align: left; padding: 0.75rem;">
                <div class="vcl-stat-lbl">Espacio de Referencia</div>
                <div style="font-size: 1.1rem; font-weight: 700; color: #ffffff;">Local-Floor</div>
              </div>
              <div class="vcl-stat-box" style="text-align: left; padding: 0.75rem;">
                <div class="vcl-stat-lbl">Optimización GPU</div>
                <div style="font-size: 1.1rem; font-weight: 700; color: var(--accent-gold);">Instanced Meshes</div>
              </div>
            </div>
          </div>

          <div style="font-size: 0.76rem; color: var(--text-dim); margin-top: 1.5rem;">
            * Si navegas desde PC o Mac, el simulador funciona en modo interactivo 3D con OrbitControls.
          </div>
        </div>

        <!-- Panel Derecho: Guía de Controladores Meta Quest 3S -->
        <div class="vcl-card" style="padding: 2.5rem; display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
          <div>
            <div class="vcl-badge" style="margin-bottom: 1rem;">GUÍA DE INTERACCIÓN ESPACIAL</div>
            <h3 style="font-family: var(--font-display); font-size: 1.4rem; color: #ffffff; margin-bottom: 1.25rem;">
              Mapeo de Mandos Meta Quest Touch Plus
            </h3>

            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div style="display: flex; align-items: flex-start; gap: 1rem; background: rgba(15, 23, 42, 0.6); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                <div style="font-size: 1.6rem;">🎯</div>
                <div>
                  <strong style="font-size: 0.95rem; color: #ffffff;">Gatillo Frontal (Index Trigger)</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.2rem;">
                    Apunta con el rayo láser hacia cualquier átomo o enlace para seleccionarlo e inspeccionar sus propiedades moleculares en el HUD espacial flotante.
                  </p>
                </div>
              </div>

              <div style="display: flex; align-items: flex-start; gap: 1rem; background: rgba(15, 23, 42, 0.6); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                <div style="font-size: 1.6rem;">✊</div>
                <div>
                  <strong style="font-size: 0.95rem; color: #ffffff;">Botón Lateral de Agarre (Hand Grip)</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.2rem;">
                    Mantén presionado el botón lateral para agarrar la molécula con tu mano. Muévela o gírala con la muñeca en 6 grados de libertad (6-DoF).
                  </p>
                </div>
              </div>

              <div style="display: flex; align-items: flex-start; gap: 1rem; background: rgba(15, 23, 42, 0.6); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                <div style="font-size: 1.6rem;">🕹️</div>
                <div>
                  <strong style="font-size: 0.95rem; color: #ffffff;">Palanca Analógica (Thumbstick)</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.2rem;">
                    Desplaza el joystick hacia adelante o atrás para escalar la molécula suavemente, pasando de visión microscópica a tamaño natural de laboratorio.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div style="background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.3); border-radius: var(--radius-sm); padding: 0.85rem; font-size: 0.78rem; color: #e9d5ff; margin-top: 1.5rem;">
            <strong>Tip de Conexión:</strong> Abre <code>Meta Quest Browser</code> dentro de tu visor e ingresa la dirección IP de tu máquina en la red local (ej. <code>http://192.168.x.x:3000</code>).
          </div>
        </div>
      </div>
    `;

    this.container.querySelector('#btn-enter-webxr')?.addEventListener('click', () => {
      this.onLaunchXR();
    });
  }
}

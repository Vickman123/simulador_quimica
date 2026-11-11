/**
 * Navbar Superior y Consola de Control de Navegación de Laboratorio
 * Virtual Chemistry Lab (VCL) — Vickora Labs
 */

import { labAudio } from '../utils/audio.js';

export interface NavTabItem {
  id: string;
  label: string;
  icon: string;
}

export const NAV_TABS: NavTabItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: '⚡' },
  { id: 'm01-ptable', label: 'Tabla Periódica', icon: '📊' },
  { id: 'm02-atomic', label: 'Atomic Studio', icon: '⚛️' },
  { id: 'm03-electron', label: 'Electron Lab', icon: '🌀' },
  { id: 'm04-bonds', label: 'Bond Studio', icon: '🔗' },
  { id: 'm05-builder', label: 'Molecular Builder', icon: '🧪' },
  { id: 'm06-reactions', label: 'Reaction Lab', icon: '💥' },
  { id: 'm07-energy', label: 'Energía y Fuerzas', icon: '📈' },
  { id: 'm08-xr', label: 'Immersive Lab', icon: '🥽' },
  { id: 'm09-learning', label: 'Learning Center', icon: '📚' },
];

export class Navbar {
  private container: HTMLElement;
  private currentTab: string = 'dashboard';
  private onTabChange: (tabId: string) => void;
  private onOpenAI: () => void;
  private onLaunchXR: () => void;

  constructor(
    container: HTMLElement,
    onTabChange: (tabId: string) => void,
    onOpenAI: () => void,
    onLaunchXR: () => void
  ) {
    this.container = container;
    this.onTabChange = onTabChange;
    this.onOpenAI = onOpenAI;
    this.onLaunchXR = onLaunchXR;
    this.render();
  }

  public setActiveTab(tabId: string): void {
    this.currentTab = tabId;
    const buttons = this.container.querySelectorAll('.vcl-tab-btn');
    buttons.forEach((btn) => {
      const id = btn.getAttribute('data-tab');
      if (id === tabId) {
        btn.classList.add('active');
        // Asegurar que el botón activo sea visible en el scroll
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        btn.classList.remove('active');
      }
    });
  }

  public render(): void {
    this.container.innerHTML = `
      <div class="vcl-header-inner">
        <!-- 1. Marca e Indicador de Telemetría Científica -->
        <div class="vcl-brand" id="btn-brand-home" title="Virtual Chemistry Lab - Inicio">
          <div class="vcl-brand-logo">
            <svg width="22" height="22" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="42" stroke="#38bdf8" stroke-width="8"/>
              <circle cx="50" cy="50" r="14" fill="#38bdf8"/>
              <circle cx="28" cy="42" r="8" fill="#ef4444"/>
              <circle cx="72" cy="42" r="8" fill="#3b82f6"/>
              <line x1="28" y1="42" x2="50" y2="50" stroke="#94a3b8" stroke-width="4"/>
              <line x1="72" y1="42" x2="50" y2="50" stroke="#94a3b8" stroke-width="4"/>
            </svg>
          </div>
          <div class="vcl-brand-title">
            <h1>VCL <span>// LAB</span></h1>
            <div class="vcl-brand-subtitle">
              <span class="vcl-led-live"></span> LAB ONLINE • 298.15 K
            </div>
          </div>
        </div>

        <!-- 2. Barra de Estaciones de Trabajo de Laboratorio (Scrollable) -->
        <nav class="vcl-nav-tabs" id="vcl-nav-scroll-area">
          ${NAV_TABS.map(
            (t) => `
            <button class="vcl-tab-btn ${t.id === this.currentTab ? 'active' : ''}" data-tab="${t.id}" title="${t.label}">
              <span class="vcl-tab-icon">${t.icon}</span>
              <span class="vcl-tab-text">${t.label}</span>
            </button>
          `
          ).join('')}
        </nav>

        <!-- 3. Controles de Instrumental y XR -->
        <div class="vcl-header-actions">
          <button class="vcl-btn vcl-btn-secondary" id="btn-toggle-sound" title="Alternar Efectos de Sonido del Laboratorio" style="padding: 0.45rem 0.65rem;">
            <span id="sound-icon">${labAudio.enabled ? '🔊' : '🔇'}</span>
          </button>
          <button class="vcl-btn vcl-btn-secondary" id="btn-toggle-ai" title="Abrir Asistente Científico IA">
            <span>🤖</span>
            <span class="action-btn-text">Asistente IA</span>
          </button>
          <button class="vcl-btn vcl-btn-xr" id="btn-launch-xr" title="Iniciar WebXR en Meta Quest 3S">
            <span>🥽</span>
            <span class="action-btn-text">WebXR</span>
          </button>
          <button class="vcl-btn vcl-btn-secondary" id="btn-fullscreen" title="Pantalla Completa" style="padding: 0.45rem 0.65rem;">
            <span>⛶</span>
          </button>
        </div>
      </div>
    `;

    // Event listeners
    this.container.querySelector('#btn-brand-home')?.addEventListener('click', () => {
      labAudio.playClick();
      this.setActiveTab('dashboard');
      this.onTabChange('dashboard');
    });

    const buttons = this.container.querySelectorAll('.vcl-tab-btn');
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        labAudio.playClick();
        const tabId = btn.getAttribute('data-tab');
        if (tabId) {
          this.setActiveTab(tabId);
          this.onTabChange(tabId);
        }
      });
    });

    this.container.querySelector('#btn-toggle-sound')?.addEventListener('click', () => {
      labAudio.enabled = !labAudio.enabled;
      const icon = this.container.querySelector('#sound-icon');
      if (icon) icon.textContent = labAudio.enabled ? '🔊' : '🔇';
      if (labAudio.enabled) labAudio.playClick();
    });

    this.container.querySelector('#btn-toggle-ai')?.addEventListener('click', () => {
      labAudio.playClick();
      this.onOpenAI();
    });

    this.container.querySelector('#btn-launch-xr')?.addEventListener('click', () => {
      labAudio.playClick();
      this.onLaunchXR();
    });

    this.container.querySelector('#btn-fullscreen')?.addEventListener('click', () => {
      labAudio.playClick();
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });
  }
}

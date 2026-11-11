/**
 * VIRTUAL CHEMISTRY LAB (VCL) — APLICACIÓN PRINCIPAL
 * Vickora Labs | Web 3D + XR
 */

import { Navbar } from './components/Navbar.js';
import { Dashboard } from './components/Dashboard.js';
import { PeriodicExplorer } from './components/M01_PeriodicExplorer.js';
import { AtomicStudio } from './components/M02_AtomicStudio.js';
import { ElectronLab } from './components/M03_ElectronLab.js';
import { BondStudio } from './components/M04_BondStudio.js';
import { MolecularBuilder } from './components/M05_MolecularBuilder.js';
import { ReactionLab } from './components/M06_ReactionLab.js';
import { EnergyForces } from './components/M07_EnergyForces.js';
import { ImmersiveLab } from './components/M08_ImmersiveLab.js';
import { LearningCenter } from './components/M09_LearningCenter.js';
import { ScientificAssistant } from './components/M10_ScientificAssistant.js';

import { VCLXRBridge } from '@vcl/vxr-adapter';
import { eventBus } from '@vcl/shared';
import type { ElementData } from '@vcl/shared';

class App {
  private headerEl: HTMLElement;
  private viewportEl: HTMLElement;
  private modalEl: HTMLElement;
  private toastContainer: HTMLElement;

  private navbar: Navbar;
  private assistant: ScientificAssistant;

  private currentViewId: string = 'dashboard';
  private currentViewInstance: any = null;

  private xrBridge: VCLXRBridge | null = null;

  constructor() {
    this.headerEl = document.getElementById('main-header')!;
    this.viewportEl = document.getElementById('main-viewport')!;
    this.modalEl = document.getElementById('vcl-modal-container')!;
    this.toastContainer = document.getElementById('vcl-toast-container')!;

    this.assistant = new ScientificAssistant(this.modalEl);

    this.navbar = new Navbar(
      this.headerEl,
      (tabId) => this.navigateTo(tabId),
      () => this.assistant.openAssistant(),
      () => this.launchWebXR()
    );

    this.setupGlobalEvents();
    this.navigateTo('dashboard');
  }

  private setupGlobalEvents(): void {
    // Escuchar notificaciones del sistema
    eventBus.on('lab:notification', (data) => {
      this.showToast(data.title, data.message, data.type);
    });

    // Escuchar selección de elementos desde cualquier módulo
    eventBus.on('element:selected', (element: ElementData) => {
      console.log(`[VCL] Elemento seleccionado globalmente: ${element.symbol} (${element.name})`);
    });

    // Redimensionamiento de ventana
    window.addEventListener('resize', () => {
      if (this.currentViewInstance && typeof this.currentViewInstance.handleResize === 'function') {
        this.currentViewInstance.handleResize();
      }
    });
  }

  public navigateTo(viewId: string, initialData?: any): void {
    if (this.currentViewInstance && typeof this.currentViewInstance.dispose === 'function') {
      this.currentViewInstance.dispose();
      this.currentViewInstance = null;
    }

    this.currentViewId = viewId;
    this.navbar.setActiveTab(viewId);
    this.viewportEl.innerHTML = '';

    const viewWrapper = document.createElement('div');
    viewWrapper.className = 'vcl-view-container';
    this.viewportEl.appendChild(viewWrapper);

    switch (viewId) {
      case 'dashboard':
        this.currentViewInstance = new Dashboard(viewWrapper, (tab) => this.navigateTo(tab));
        break;

      case 'm01-ptable':
        this.currentViewInstance = new PeriodicExplorer(viewWrapper, (el) => {
          this.navigateTo('m02-atomic', el.symbol);
        });
        break;

      case 'm02-atomic':
        this.currentViewInstance = new AtomicStudio(viewWrapper, initialData || 'C');
        break;

      case 'm03-electron':
        this.currentViewInstance = new ElectronLab(viewWrapper, initialData || 'O');
        break;

      case 'm04-bonds':
        this.currentViewInstance = new BondStudio(viewWrapper, 'H', 'O');
        break;

      case 'm05-builder':
        this.currentViewInstance = new MolecularBuilder(viewWrapper, () => this.launchWebXR());
        break;

      case 'm06-reactions':
        this.currentViewInstance = new ReactionLab(viewWrapper);
        break;

      case 'm07-energy':
        this.currentViewInstance = new EnergyForces(viewWrapper);
        break;

      case 'm08-xr':
        this.currentViewInstance = new ImmersiveLab(viewWrapper, () => this.launchWebXR());
        break;

      case 'm09-learning':
        this.currentViewInstance = new LearningCenter(viewWrapper);
        break;

      default:
        this.currentViewInstance = new Dashboard(viewWrapper, (tab) => this.navigateTo(tab));
        break;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  public async launchWebXR(): Promise<void> {
    if (this.currentViewId !== 'm05-builder' && this.currentViewId !== 'm08-xr') {
      this.navigateTo('m05-builder');
    }

    // Inicializar o solicitar sesión inmersiva
    if (typeof navigator !== 'undefined' && 'xr' in navigator && (navigator as any).xr) {
      try {
        const supported = await (navigator as any).xr.isSessionSupported('immersive-vr');
        if (supported) {
          this.showToast('WebXR', 'Iniciando sesión en Meta Quest 3S a 90 Hz...', 'info');
        } else {
          this.showToast(
            'Modo Desktop Activo',
            'No se detectó un visor VR conectado. Puedes interactuar en 3D con ratón y teclado.',
            'info'
          );
        }
      } catch (e) {
        this.showToast('WebXR', 'Simulador 3D activo en modo escritorio.', 'info');
      }
    } else {
      this.showToast(
        'Modo Desktop 3D',
        'WebXR no está disponible en este navegador. Explora el laboratorio con ratón y teclado.',
        'info'
      );
    }
  }

  private showToast(title: string, message: string, type: 'info' | 'success' | 'warning' | 'error' = 'info'): void {
    const toast = document.createElement('div');
    toast.className = 'vcl-toast';

    const colors: Record<string, string> = {
      info: 'var(--accent-cyan)',
      success: 'var(--accent-emerald)',
      warning: 'var(--accent-gold)',
      error: 'var(--accent-rose)',
    };
    toast.style.borderLeftColor = colors[type] || 'var(--accent-cyan)';

    toast.innerHTML = `
      <div style="font-weight: 700; color: #ffffff; margin-bottom: 0.2rem;">${title}</div>
      <div style="color: var(--text-muted); font-size: 0.8rem; line-height: 1.4;">${message}</div>
    `;

    this.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'slideIn 0.3s ease reverse forwards';
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, 4000);
  }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  new App();
});

/**
 * M05 — Molecular Builder (3D WebGL & Three.js)
 * Virtual Chemistry Lab (VCL) — Vickora Labs
 *
 * Evolución directa y expansión de la experiencia Moléculas.
 * Constructor y visualizador molecular interactivo con VSEPR,
 * representaciones Ball & Stick, Space Filling, Wireframe y Lewis.
 */

import { MolecularRenderer } from '@vcl/molecular-renderer';
import {
  MolecularEngine,
  STANDARD_MOLECULES,
  ALL_118_ELEMENTS,
  ELEMENTS_BY_SYMBOL,
  ValidationEngine,
  GeometryEngine,
} from '@vcl/chem-engine';
import { eventBus } from '@vcl/shared';
import type { MoleculeGraph, MolecularRepresentation, AtomInstance } from '@vcl/shared';

export class MolecularBuilder {
  private container: HTMLElement;
  private renderer3D: MolecularRenderer | null = null;
  private currentMolecule: MoleculeGraph;
  private currentRepresentation: MolecularRepresentation = 'ball-and-stick';
  private selectedAtom: AtomInstance | null = null;
  private selectedPaletteElement: string = 'C';
  private onLaunchXR?: () => void;

  constructor(container: HTMLElement, onLaunchXR?: () => void) {
    this.container = container;
    this.onLaunchXR = onLaunchXR;
    // Cargar agua (H2O) por defecto para arrancar inmediatamente con una estructura viva
    this.currentMolecule = JSON.parse(JSON.stringify(STANDARD_MOLECULES.H2O));
    this.render();
  }

  public render(): void {
    const commonPalette = ['H', 'C', 'N', 'O', 'F', 'Na', 'Mg', 'P', 'S', 'Cl', 'K', 'Ca', 'Fe', 'Cu', 'Br', 'I'];

    this.container.innerHTML = `
      <div class="vcl-builder-layout">
        <!-- Panel Izquierdo: Paleta de Elementos -->
        <div class="vcl-card vcl-builder-palette">
          <div class="vcl-badge" style="margin-bottom: 0.6rem;">ELEMENTOS CPK</div>
          <h4 style="font-size: 1.05rem; color: #ffffff; margin-bottom: 0.8rem;">Paleta Rápida</h4>

          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; margin-bottom: 1.25rem;">
            ${commonPalette.map((sym) => {
              const el = ELEMENTS_BY_SYMBOL[sym];
              const isSelected = this.selectedPaletteElement === sym;
              return `
                <button class="vcl-btn ${isSelected ? 'vcl-btn-primary' : 'vcl-btn-secondary'} btn-palette-el" data-symbol="${sym}" style="justify-content: flex-start; padding: 0.45rem 0.6rem; font-size: 0.78rem;">
                  <span style="width: 14px; height: 14px; border-radius: 50%; background: ${el?.colorHex || '#fff'}; border: 1px solid rgba(255,255,255,0.4); display: inline-block;"></span>
                  <strong>${sym}</strong> <span style="font-size: 0.7rem; color: var(--text-dim);">${el?.name.slice(0, 5)}</span>
                </button>
              `;
            }).join('')}
          </div>

          <!-- Selector de los 118 Elementos -->
          <div>
            <label style="font-size: 0.74rem; color: var(--text-muted); display: block; margin-bottom: 0.3rem;">Todos los 118 Elementos</label>
            <select id="builder-all-elements-select" class="vcl-input-search" style="width: 100%; font-size: 0.8rem; padding: 0.4rem;">
              ${ALL_118_ELEMENTS.map(
                (e) => `<option value="${e.symbol}" ${e.symbol === this.selectedPaletteElement ? 'selected' : ''}>
                  ${e.atomicNumber} - ${e.name} (${e.symbol})
                </option>`
              ).join('')}
            </select>
          </div>
        </div>

        <!-- Área Central: Visor 3D Three.js -->
        <div class="vcl-builder-canvas-container" id="builder-canvas-box">
          <div class="vcl-canvas-overlay-top">
            <span class="vcl-badge" id="canvas-formula-badge" style="background: rgba(7, 11, 20, 0.85); border-color: var(--accent-cyan); font-size: 0.85rem;">
              ${this.currentMolecule.name} (${this.currentMolecule.formula})
            </span>
            <span class="vcl-badge" id="canvas-geometry-badge" style="background: rgba(7, 11, 20, 0.85);">
              Geometría: ${this.currentMolecule.geometryVSEPR || 'Calculando'}
            </span>
          </div>
        </div>

        <!-- Panel Derecho: Propiedades Químicas y Validación -->
        <div class="vcl-card vcl-builder-properties" id="builder-properties-panel">
          <!-- Renderizado dinámico de propiedades -->
        </div>

        <!-- Panel Inferior: Barra de Herramientas, Enlaces y Presets -->
        <div class="vcl-builder-toolbar">
          <div style="display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap;">
            <!-- Herramientas de Edición -->
            <button class="vcl-btn vcl-btn-primary" id="btn-add-atom">
              <span>+</span>
              <span>Añadir Átomo (${this.selectedPaletteElement})</span>
            </button>
            <button class="vcl-btn vcl-btn-secondary" id="btn-create-bond" title="Conectar dos átomos">
              <span>🔗</span>
              <span>Crear Enlace</span>
            </button>
            <button class="vcl-btn vcl-btn-secondary" id="btn-delete-selected" style="color: #ef4444;" title="Eliminar átomo seleccionado">
              <span>🗑️</span>
              <span>Eliminar</span>
            </button>
            <button class="vcl-btn vcl-btn-secondary" id="btn-clear-molecule">
              <span>↺</span>
              <span>Limpiar</span>
            </button>
          </div>

          <!-- Modos de Representación Visual -->
          <div style="display: flex; align-items: center; gap: 0.4rem;">
            <span style="font-size: 0.76rem; color: var(--text-dim); margin-right: 0.3rem;">Estilo:</span>
            <button class="vcl-btn ${this.currentRepresentation === 'ball-and-stick' ? 'vcl-btn-primary' : 'vcl-btn-secondary'} btn-rep" data-rep="ball-and-stick" style="font-size: 0.75rem; padding: 0.35rem 0.65rem;">
              Ball & Stick
            </button>
            <button class="vcl-btn ${this.currentRepresentation === 'space-filling' ? 'vcl-btn-primary' : 'vcl-btn-secondary'} btn-rep" data-rep="space-filling" style="font-size: 0.75rem; padding: 0.35rem 0.65rem;">
              Space Filling
            </button>
            <button class="vcl-btn ${this.currentRepresentation === 'wireframe' ? 'vcl-btn-primary' : 'vcl-btn-secondary'} btn-rep" data-rep="wireframe" style="font-size: 0.75rem; padding: 0.35rem 0.65rem;">
              Wireframe
            </button>
          </div>

          <!-- Selector de Moléculas Preestablecidas -->
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <select id="builder-presets-select" class="vcl-input-search" style="font-size: 0.8rem; padding: 0.4rem 0.8rem; min-width: 170px;">
              <option value="H2O" selected>Agua (H2O)</option>
              <option value="CO2">Dióxido de Carbono (CO2)</option>
              <option value="CH4">Metano (CH4)</option>
              <option value="NH3">Amoníaco (NH3)</option>
              <option value="O2">Oxígeno (O2)</option>
              <option value="N2">Nitrógeno (N2)</option>
              <option value="HCl">Cloruro de Hidrógeno (HCl)</option>
              <option value="NaCl">Cloruro de Sodio (NaCl)</option>
              <option value="C2H5OH">Etanol (C2H5OH)</option>
              <option value="C2H4">Eteno (C2H4)</option>
            </select>
          </div>
        </div>
      </div>
    `;

    this.init3DRenderer();
    this.updatePropertiesPanel();
    this.setupEventListeners();
  }

  private init3DRenderer(): void {
    const canvasBox = this.container.querySelector('#builder-canvas-box') as HTMLElement;
    if (!canvasBox) return;

    if (this.renderer3D) {
      this.renderer3D.dispose();
      this.renderer3D = null;
    }

    this.renderer3D = new MolecularRenderer({
      container: canvasBox,
      representation: this.currentRepresentation,
      backgroundColor: 0x070b14,
    });

    this.renderer3D.onAtomSelect = (atom) => {
      this.selectedAtom = atom;
      this.updatePropertiesPanel();
      eventBus.emit('lab:notification', {
        title: `Átomo Seleccionado: ${atom.symbol}`,
        message: `ID: ${atom.id} • Posición: [${atom.position.map((v) => v.toFixed(2)).join(', ')}] Å`,
        type: 'info',
      });
    };

    this.renderer3D.setMolecule(this.currentMolecule);
  }

  private updatePropertiesPanel(): void {
    const panel = this.container.querySelector('#builder-properties-panel');
    if (!panel) return;

    const validation = ValidationEngine.validateMolecule(this.currentMolecule);

    panel.innerHTML = `
      <div class="vcl-badge" style="margin-bottom: 0.8rem;">ANÁLISIS ESTRUCTURAL</div>
      <h3 style="font-size: 1.25rem; color: #ffffff; margin-bottom: 0.3rem;">${this.currentMolecule.name}</h3>
      <div style="font-family: var(--font-mono); font-size: 1.1rem; color: var(--accent-cyan); font-weight: 700; margin-bottom: 1rem;">
        ${this.currentMolecule.formula}
      </div>

      <!-- Ficha de Constantes Físicas -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; margin-bottom: 1.25rem;">
        <div class="vcl-stat-box" style="padding: 0.6rem;">
          <div class="vcl-stat-lbl">Masa Molar</div>
          <div style="font-size: 1.1rem; font-weight: 700; color: #ffffff;">${this.currentMolecule.molarMass} g/mol</div>
        </div>
        <div class="vcl-stat-box" style="padding: 0.6rem;">
          <div class="vcl-stat-lbl">Geometría VSEPR</div>
          <div style="font-size: 0.95rem; font-weight: 700; color: var(--accent-gold); text-transform: capitalize;">
            ${this.currentMolecule.geometryVSEPR || 'No calculada'}
          </div>
        </div>
      </div>

      <!-- Diagnóstico de Validación Estructural -->
      <div style="background: ${validation.isValid ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)'}; border: 1px solid ${validation.isValid ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}; border-radius: var(--radius-sm); padding: 0.75rem; margin-bottom: 1.25rem;">
        <div style="font-size: 0.82rem; font-weight: 700; color: ${validation.isValid ? '#10b981' : '#ef4444'}; margin-bottom: 0.3rem;">
          ${validation.isValid ? '✓ Estructura Válida según Reglas de Valencia' : '⚠ Alertas de Validación Estructural'}
        </div>
        ${validation.errors.map((e) => `<p style="font-size: 0.74rem; color: #fca5a5; margin-top: 0.2rem;">• ${e}</p>`).join('')}
        ${validation.warnings.map((w) => `<p style="font-size: 0.74rem; color: #fde047; margin-top: 0.2rem;">• ${w}</p>`).join('')}
      </div>

      <!-- Detalle del Átomo Seleccionado -->
      <div style="border-top: 1px solid var(--border-subtle); padding-top: 1rem; margin-bottom: 1.25rem;">
        <h4 style="font-size: 0.88rem; color: #ffffff; margin-bottom: 0.6rem;">Átomo Seleccionado</h4>
        ${this.selectedAtom ? `
          <div style="background: rgba(15, 23, 42, 0.6); padding: 0.75rem; border-radius: var(--radius-sm); font-size: 0.8rem;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.3rem;">
              <span style="color: var(--text-dim);">Símbolo:</span>
              <strong style="color: var(--accent-cyan);">${this.selectedAtom.symbol} (Z = ${this.selectedAtom.atomicNumber})</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.3rem;">
              <span style="color: var(--text-dim);">Coordenadas (Å):</span>
              <span style="font-family: var(--font-mono); color: #ffffff;">[${this.selectedAtom.position.map((v) => v.toFixed(2)).join(', ')}]</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span style="color: var(--text-dim);">Carga Formal:</span>
              <span style="color: #ffffff;">${this.selectedAtom.formalCharge}</span>
            </div>
          </div>
        ` : `
          <p style="font-size: 0.78rem; color: var(--text-dim);">Haz clic en un átomo en el visor 3D para examinar sus propiedades individuales.</p>
        `}
      </div>

      <!-- Resumen de Enlaces en la Molécula -->
      <div style="border-top: 1px solid var(--border-subtle); padding-top: 1rem;">
        <h4 style="font-size: 0.88rem; color: #ffffff; margin-bottom: 0.6rem;">
          Enlaces Químicos (${this.currentMolecule.bonds.length})
        </h4>
        <div style="max-height: 120px; overflow-y: auto; font-size: 0.76rem; color: var(--text-muted);">
          ${this.currentMolecule.bonds.map((b) => `
            <div style="display: flex; justify-content: space-between; padding: 0.3rem 0; border-bottom: 1px solid rgba(255,255,255,0.04);">
              <span>${b.atomAId.split('_')[0]} — ${b.atomBId.split('_')[0]} (Orden ${b.order})</span>
              <span style="font-family: var(--font-mono); color: var(--accent-cyan);">${b.length?.toFixed(2) ?? '-'} Å</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Actualizar badge superior del canvas
    const formulaBadge = this.container.querySelector('#canvas-formula-badge');
    if (formulaBadge) {
      formulaBadge.textContent = `${this.currentMolecule.name} (${this.currentMolecule.formula})`;
    }
    const geomBadge = this.container.querySelector('#canvas-geometry-badge');
    if (geomBadge) {
      geomBadge.textContent = `Geometría: ${this.currentMolecule.geometryVSEPR || 'Calculando'}`;
    }
  }

  private setupEventListeners(): void {
    // Selección en paleta
    this.container.querySelectorAll('.btn-palette-el').forEach((btn) => {
      btn.addEventListener('click', () => {
        const sym = btn.getAttribute('data-symbol');
        if (sym) {
          this.selectedPaletteElement = sym;
          this.container.querySelectorAll('.btn-palette-el').forEach((b) => b.classList.remove('vcl-btn-primary'));
          btn.classList.add('vcl-btn-primary');
          const addBtn = this.container.querySelector('#btn-add-atom');
          if (addBtn) addBtn.innerHTML = `<span>+</span><span>Añadir Átomo (${sym})</span>`;
        }
      });
    });

    // Selector completo de 118 elementos
    const allSelect = this.container.querySelector('#builder-all-elements-select') as HTMLSelectElement;
    allSelect?.addEventListener('change', (e) => {
      const sym = (e.target as HTMLSelectElement).value;
      this.selectedPaletteElement = sym;
      const addBtn = this.container.querySelector('#btn-add-atom');
      if (addBtn) addBtn.innerHTML = `<span>+</span><span>Añadir Átomo (${sym})</span>`;
    });

    // Añadir átomo
    this.container.querySelector('#btn-add-atom')?.addEventListener('click', () => {
      const count = this.currentMolecule.atoms.length;
      // Posición con desplazamiento en espiral para no superponer
      const radius = 1.3 * Math.sqrt(count || 1);
      const angle = count * 2.399; // Golden angle
      const x = parseFloat((Math.cos(angle) * radius).toFixed(2));
      const y = parseFloat((Math.sin(angle) * radius).toFixed(2));

      const { molecule, addedAtom } = MolecularEngine.addAtom(
        this.currentMolecule,
        this.selectedPaletteElement,
        [x, y, 0]
      );
      this.currentMolecule = molecule;
      this.selectedAtom = addedAtom;

      // Si hay un átomo previo, enlazar automáticamente
      if (count > 0) {
        const prevAtom = this.currentMolecule.atoms[0];
        this.currentMolecule = MolecularEngine.addBond(this.currentMolecule, prevAtom.id, addedAtom.id, 1);
      }

      this.renderer3D?.setMolecule(this.currentMolecule);
      this.updatePropertiesPanel();
      eventBus.emit('molecule:changed', this.currentMolecule);
    });

    // Crear enlace interactivo
    this.container.querySelector('#btn-create-bond')?.addEventListener('click', () => {
      if (this.currentMolecule.atoms.length < 2) {
        eventBus.emit('lab:notification', {
          title: 'Átomos Insuficientes',
          message: 'Se requieren al menos 2 átomos en la escena para crear un enlace.',
          type: 'warning',
        });
        return;
      }
      // Conectar los dos últimos átomos agregados
      const a = this.currentMolecule.atoms[this.currentMolecule.atoms.length - 2];
      const b = this.currentMolecule.atoms[this.currentMolecule.atoms.length - 1];
      this.currentMolecule = MolecularEngine.addBond(this.currentMolecule, a.id, b.id, 1);
      this.renderer3D?.setMolecule(this.currentMolecule);
      this.updatePropertiesPanel();
      eventBus.emit('lab:notification', {
        title: 'Enlace Establecido',
        message: `Enlace formado entre ${a.symbol} y ${b.symbol}.`,
        type: 'success',
      });
    });

    // Eliminar seleccionado
    this.container.querySelector('#btn-delete-selected')?.addEventListener('click', () => {
      if (!this.selectedAtom) {
        eventBus.emit('lab:notification', {
          title: 'Sin Selección',
          message: 'Haz clic en un átomo en el visor 3D para seleccionarlo antes de eliminar.',
          type: 'info',
        });
        return;
      }
      this.currentMolecule = MolecularEngine.removeAtom(this.currentMolecule, this.selectedAtom.id);
      this.selectedAtom = null;
      this.renderer3D?.setMolecule(this.currentMolecule);
      this.updatePropertiesPanel();
      eventBus.emit('lab:notification', {
        title: 'Átomo Eliminado',
        message: 'El átomo y sus enlaces fueron retirados de la estructura.',
        type: 'info',
      });
    });

    // Limpiar molécula
    this.container.querySelector('#btn-clear-molecule')?.addEventListener('click', () => {
      this.currentMolecule = MolecularEngine.createEmptyMolecule('Espacio Vacío');
      this.selectedAtom = null;
      this.renderer3D?.setMolecule(this.currentMolecule);
      this.updatePropertiesPanel();
      eventBus.emit('molecule:cleared');
    });

    // Modos de representación
    this.container.querySelectorAll('.btn-rep').forEach((btn) => {
      btn.addEventListener('click', () => {
        const rep = btn.getAttribute('data-rep') as MolecularRepresentation;
        if (rep) {
          this.currentRepresentation = rep;
          this.container.querySelectorAll('.btn-rep').forEach((b) => b.classList.remove('vcl-btn-primary'));
          btn.classList.add('vcl-btn-primary');
          this.renderer3D?.setRepresentation(rep);
          eventBus.emit('representation:changed', rep);
        }
      });
    });

    // Selector de presets
    const presetSelect = this.container.querySelector('#builder-presets-select') as HTMLSelectElement;
    presetSelect?.addEventListener('change', (e) => {
      const key = (e.target as HTMLSelectElement).value;
      if (STANDARD_MOLECULES[key]) {
        this.currentMolecule = JSON.parse(JSON.stringify(STANDARD_MOLECULES[key]));
        this.selectedAtom = null;
        this.renderer3D?.setMolecule(this.currentMolecule);
        this.updatePropertiesPanel();
        eventBus.emit('molecule:changed', this.currentMolecule);
      }
    });
  }

  public getMolecule(): MoleculeGraph {
    return this.currentMolecule;
  }

  public dispose(): void {
    if (this.renderer3D) {
      this.renderer3D.dispose();
      this.renderer3D = null;
    }
  }
}

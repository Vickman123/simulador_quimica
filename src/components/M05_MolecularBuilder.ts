/**
 * M05 — Molecular Builder (Interactive 3D Physical Laboratory Workstation)
 * Virtual Chemistry Lab (VCL) — Vickora Labs
 *
 * Estación de trabajo de laboratorio físico 3D con mesa óptica de confinamiento,
 * motor de identificación de entidades químicas en tiempo real, optimización VSEPR 3D,
 * balance de enlaces/octeto y visualización molecular fotorrealista.
 */

import { MolecularRenderer } from '@vcl/molecular-renderer';
import {
  MolecularEngine,
  STANDARD_MOLECULES,
  ALL_118_ELEMENTS,
  ELEMENTS_BY_SYMBOL,
  ValidationEngine,
  SubstanceIdentifier,
} from '@vcl/chem-engine';
import { eventBus } from '@vcl/shared';
import type { MoleculeGraph, MolecularRepresentation, AtomInstance } from '@vcl/shared';
import { labAudio } from '../utils/audio.js';

export class MolecularBuilder {
  private container: HTMLElement;
  private renderer3D: MolecularRenderer | null = null;
  private currentMolecule: MoleculeGraph;
  private currentRepresentation: MolecularRepresentation = 'ball-and-stick';
  private selectedAtom: AtomInstance | null = null;
  private selectedPaletteElement: string = 'C';
  private selectedBondOrder: 1 | 2 | 3 = 1;
  private onLaunchXR?: () => void;

  constructor(container: HTMLElement, onLaunchXR?: () => void) {
    this.container = container;
    this.onLaunchXR = onLaunchXR;
    // Cargar Dióxido de Carbono o Agua con estructura optimizada por defecto
    this.currentMolecule = JSON.parse(JSON.stringify(STANDARD_MOLECULES.CO2 || STANDARD_MOLECULES.H2O));
    this.render();
  }

  public render(): void {
    const commonPalette = ['H', 'C', 'N', 'O', 'F', 'Na', 'Mg', 'P', 'S', 'Cl', 'K', 'Ca', 'Fe', 'Cu', 'Br', 'I'];
    const substance = SubstanceIdentifier.identify(this.currentMolecule);

    this.container.innerHTML = `
      <div class="vcl-builder-layout">
        <!-- 1. PANEL IZQUIERDO: RACK FÍSICO DE ELEMENTOS Y REACTIVOS -->
        <div class="vcl-card vcl-builder-palette vcl-lab-rack">
          <div class="vcl-rack-header">
            <div class="vcl-badge-lab">
              <span class="vcl-led-active"></span> DISPENSADOR ATÓMICO
            </div>
            <h4 class="vcl-lab-title">Gradilla de Elementos</h4>
          </div>

          <!-- Paleta de Reactivos Rápidos CPK -->
          <div class="vcl-element-vials-grid">
            ${commonPalette.map((sym) => {
              const el = ELEMENTS_BY_SYMBOL[sym];
              const isSelected = this.selectedPaletteElement === sym;
              return `
                <button class="vcl-vial-btn ${isSelected ? 'active' : ''} btn-palette-el" data-symbol="${sym}" title="${el?.name || sym} (Z=${el?.atomicNumber})">
                  <div class="vcl-vial-color" style="background: ${el?.colorHex || '#fff'}; box-shadow: 0 0 8px ${el?.colorHex || '#fff'}80;"></div>
                  <div class="vcl-vial-info">
                    <span class="vcl-vial-sym">${sym}</span>
                    <span class="vcl-vial-name">${el?.name.slice(0, 6)}</span>
                  </div>
                </button>
              `;
            }).join('')}
          </div>

          <!-- Selector Completo de 118 Elementos -->
          <div class="vcl-all-elements-box">
            <label class="vcl-lab-field-label">TABLA COMPLETA (118 ELEMENTOS)</label>
            <select id="builder-all-elements-select" class="vcl-input-search vcl-lab-select">
              ${ALL_118_ELEMENTS.map(
                (e) => `<option value="${e.symbol}" ${e.symbol === this.selectedPaletteElement ? 'selected' : ''}>
                  ${e.atomicNumber}. ${e.name} (${e.symbol})
                </option>`
              ).join('')}
            </select>
          </div>

          <!-- Selector de Orden de Enlace para Próximas Conexiones -->
          <div class="vcl-bond-order-picker">
            <label class="vcl-lab-field-label">TIPO DE ENLACE A FORMAR</label>
            <div class="vcl-btn-group">
              <button class="vcl-btn-bond-order ${this.selectedBondOrder === 1 ? 'active' : ''}" data-order="1">
                <span>Simple (—)</span>
              </button>
              <button class="vcl-btn-bond-order ${this.selectedBondOrder === 2 ? 'active' : ''}" data-order="2">
                <span>Doble (=)</span>
              </button>
              <button class="vcl-btn-bond-order ${this.selectedBondOrder === 3 ? 'active' : ''}" data-order="3">
                <span>Triple (≡)</span>
              </button>
            </div>
          </div>
        </div>

        <!-- 2. ÁREA CENTRAL: BANCO ÓPTICO 3D Y MESA DE CONFINAMIENTO -->
        <div class="vcl-builder-canvas-container" id="builder-canvas-box">
          <!-- Banner Superior de Telemetría e Identificación en Tiempo Real -->
          <div class="vcl-lab-hud-top">
            <div class="vcl-hud-chip vcl-hud-id" id="hud-substance-banner">
              <span class="vcl-led-id ${this.currentMolecule.atoms.length > 0 ? 'identified' : ''}"></span>
              <span class="vcl-hud-substance-name" id="canvas-substance-name">
                ${substance.name} (${this.currentMolecule.formula || 'Vacía'})
              </span>
            </div>
            <div class="vcl-hud-chip" id="hud-geometry-badge">
              <span class="vcl-hud-lbl">GEOMETRÍA:</span>
              <span class="vcl-hud-val" id="canvas-geometry-text" style="color: var(--accent-gold); text-transform: uppercase;">
                ${this.currentMolecule.geometryVSEPR || 'Calculando'}
              </span>
            </div>
            <div class="vcl-hud-chip">
              <span class="vcl-hud-lbl">MASA:</span>
              <span class="vcl-hud-val" id="canvas-mass-text">${this.currentMolecule.molarMass} g/mol</span>
            </div>
          </div>

          <!-- Barra Flotante de Acciones Rápidas del Escenario 3D -->
          <div class="vcl-stage-quick-controls">
            <button class="vcl-stage-btn" id="btn-optimize-3d" title="Optimizar Geometría 3D y Ángulos VSEPR">
              <span>📐</span>
              <span>Optimizar 3D</span>
            </button>
            <button class="vcl-stage-btn" id="btn-auto-saturate" title="Auto-Balancear Enlaces (Regla del Octeto)">
              <span>⚡</span>
              <span>Auto-Octeto</span>
            </button>
            <button class="vcl-stage-btn" id="btn-toggle-rotate" title="Alternar Rotación Automática">
              <span>🔄</span>
              <span id="txt-rotate-state">Auto-Giro: ON</span>
            </button>
            <button class="vcl-stage-btn" id="btn-recenter-cam" title="Centrar Molécula en la Mesa Óptica">
              <span>🎯</span>
              <span>Centrar</span>
            </button>
          </div>
        </div>

        <!-- 3. PANEL DERECHO: CONSOLA DE INSTRUMENTACIÓN ANALÍTICA -->
        <div class="vcl-card vcl-builder-properties vcl-lab-console" id="builder-properties-panel">
          <!-- Renderizado dinámico de la consola espectrométrica -->
        </div>

        <!-- 4. PANEL INFERIOR: BANCO DE TRABAJO Y HERRAMIENTAS TÁCTILES -->
        <div class="vcl-builder-toolbar vcl-lab-bench-toolbar">
          <div class="vcl-toolbar-group">
            <button class="vcl-btn vcl-btn-primary vcl-btn-tactile" id="btn-add-atom">
              <span class="vcl-btn-icon">+</span>
              <span>Añadir Átomo (${this.selectedPaletteElement})</span>
            </button>
            <button class="vcl-btn vcl-btn-secondary vcl-btn-tactile" id="btn-create-bond" title="Conectar átomos en la mesa">
              <span class="vcl-btn-icon">🔗</span>
              <span>Crear Enlace</span>
            </button>
            <button class="vcl-btn vcl-btn-secondary vcl-btn-tactile" id="btn-delete-selected" style="color: #ef4444;" title="Retirar átomo seleccionado">
              <span class="vcl-btn-icon">🗑️</span>
              <span>Eliminar</span>
            </button>
            <button class="vcl-btn vcl-btn-secondary vcl-btn-tactile" id="btn-clear-molecule" title="Vaciar la mesa de trabajo">
              <span class="vcl-btn-icon">↺</span>
              <span>Limpiar Mesa</span>
            </button>
          </div>

          <!-- Modos de Representación Molecular -->
          <div class="vcl-toolbar-group vcl-rep-selector">
            <span class="vcl-toolbar-lbl">REPRESENTACIÓN:</span>
            <button class="vcl-btn ${this.currentRepresentation === 'ball-and-stick' ? 'vcl-btn-primary' : 'vcl-btn-secondary'} btn-rep" data-rep="ball-and-stick">
              Ball & Stick
            </button>
            <button class="vcl-btn ${this.currentRepresentation === 'space-filling' ? 'vcl-btn-primary' : 'vcl-btn-secondary'} btn-rep" data-rep="space-filling">
              Space Filling (CPK)
            </button>
            <button class="vcl-btn ${this.currentRepresentation === 'wireframe' ? 'vcl-btn-primary' : 'vcl-btn-secondary'} btn-rep" data-rep="wireframe">
              Wireframe
            </button>
          </div>

          <!-- Cargar Sustancias Estándar Preestablecidas -->
          <div class="vcl-toolbar-group">
            <span class="vcl-toolbar-lbl">ESPÉCIMEN PREESTABLECIDO:</span>
            <select id="builder-presets-select" class="vcl-input-search vcl-lab-select" style="min-width: 190px;">
              <option value="CO2" selected>Dióxido de Carbono (CO2)</option>
              <option value="H2O">Agua (H2O)</option>
              <option value="CH4">Metano (CH4)</option>
              <option value="NH3">Amoníaco (NH3)</option>
              <option value="O2">Oxígeno Molecular (O2)</option>
              <option value="N2">Nitrógeno Molecular (N2)</option>
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
      backgroundColor: 0x050811,
      enableShadows: true,
    });

    this.renderer3D.onAtomSelect = (atom) => {
      labAudio.playClick();
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

  /**
   * Actualiza la consola de instrumentación analítica derecha
   */
  private updatePropertiesPanel(): void {
    const panel = this.container.querySelector('#builder-properties-panel');
    if (!panel) return;

    const substance = SubstanceIdentifier.identify(this.currentMolecule);
    const validation = ValidationEngine.validateMolecule(this.currentMolecule);

    // Detección de sugerencia de octeto (ej: enlaces simples en CO2 que deberían ser dobles)
    const needsOctetFix =
      substance.formula === 'CO2' &&
      this.currentMolecule.bonds.some((b) => b.order === 1);

    panel.innerHTML = `
      <!-- Cabecera de la Consola -->
      <div class="vcl-console-top-strip">
        <span class="vcl-badge-lab">ESPECTRÓMETRO DIGITAL</span>
        <span class="vcl-console-status">EN LÍNEA</span>
      </div>

      <!-- Tarjeta Principal de Identificación Química -->
      <div class="vcl-substance-id-card">
        <div class="vcl-substance-header">
          <div class="vcl-substance-flag">
            <span class="vcl-pulse-dot"></span> SUSTANCIA IDENTIFICADA
          </div>
          <h3 class="vcl-substance-title">${substance.name}</h3>
          <div class="vcl-substance-formula">${this.currentMolecule.formula || 'Vacía'}</div>
        </div>

        <div class="vcl-substance-meta">
          <div class="vcl-meta-row">
            <span class="vcl-meta-k">Nombre IUPAC:</span>
            <span class="vcl-meta-v">${substance.iupacName}</span>
          </div>
          <div class="vcl-meta-row">
            <span class="vcl-meta-k">Familia Química:</span>
            <span class="vcl-meta-v">${substance.family}</span>
          </div>
          <div class="vcl-meta-row">
            <span class="vcl-meta-k">Estado a 25°C:</span>
            <span class="vcl-meta-v">${substance.stateAt25C}</span>
          </div>
          <div class="vcl-meta-row">
            <span class="vcl-meta-k">Momento Dipolar:</span>
            <span class="vcl-meta-v">${substance.dipoleMoment}</span>
          </div>
          <div class="vcl-meta-row">
            <span class="vcl-meta-k">Ángulos Teóricos:</span>
            <span class="vcl-meta-v" style="color: var(--accent-gold);">${substance.bondAngles}</span>
          </div>
        </div>

        <p class="vcl-substance-desc">${substance.description}</p>
      </div>

      <!-- Sugerencia de Octeto Inteligente -->
      ${needsOctetFix ? `
        <div class="vcl-alert-box-warning" style="margin-bottom: 1rem;">
          <div style="font-weight: 700; color: #f59e0b; margin-bottom: 0.3rem;">⚡ Ajuste de Enlaces Pendiente</div>
          <p style="font-size: 0.78rem; color: #fef3c7; line-height: 1.4; margin-bottom: 0.5rem;">
            En el dióxido de carbono ($CO_2$), los átomos de carbono y oxígeno forman enlaces covalentes dobles ($O=C=O$) para completar sus octetos.
          </p>
          <button class="vcl-btn vcl-btn-primary" id="btn-fix-octet-quick" style="width: 100%; font-size: 0.8rem; padding: 0.4rem;">
            <span>⚡ Elevar a Enlaces Dobles (O=C=O)</span>
          </button>
        </div>
      ` : ''}

      <!-- Constantes Físico-Químicas -->
      <div class="vcl-instruments-grid">
        <div class="vcl-instrument-readout">
          <div class="vcl-inst-lbl">Masa Molar</div>
          <div class="vcl-inst-val">${this.currentMolecule.molarMass} <span class="vcl-unit">g/mol</span></div>
        </div>
        <div class="vcl-instrument-readout">
          <div class="vcl-inst-lbl">Geometría VSEPR</div>
          <div class="vcl-inst-val" style="color: var(--accent-cyan); text-transform: capitalize;">
            ${this.currentMolecule.geometryVSEPR || 'No calculada'}
          </div>
        </div>
      </div>

      <!-- Diagnóstico de Validación Estructural -->
      <div class="vcl-validation-card ${validation.isValid ? 'valid' : 'invalid'}">
        <div class="vcl-validation-title">
          ${validation.isValid ? '✓ Estructura Válida según Reglas de Valencia' : '⚠ Diagnóstico de Conectividad'}
        </div>
        ${validation.errors.map((e) => `<p class="vcl-val-err">• ${e}</p>`).join('')}
        ${validation.warnings.map((w) => `<p class="vcl-val-warn">• ${w}</p>`).join('')}
      </div>

      <!-- Átomo Seleccionado -->
      <div class="vcl-console-section">
        <h4 class="vcl-section-heading">Átomo en Observación</h4>
        ${this.selectedAtom ? `
          <div class="vcl-atom-details-card">
            <div class="vcl-atom-detail-line">
              <span class="vcl-meta-k">Elemento:</span>
              <strong style="color: var(--accent-cyan); font-size: 0.95rem;">${this.selectedAtom.symbol} (Z = ${this.selectedAtom.atomicNumber})</strong>
            </div>
            <div class="vcl-atom-detail-line">
              <span class="vcl-meta-k">Coordenadas [X, Y, Z]:</span>
              <span class="vcl-mono-coords">[${this.selectedAtom.position.map((v) => v.toFixed(2)).join(', ')}] Å</span>
            </div>
            <div class="vcl-atom-detail-line">
              <span class="vcl-meta-k">Carga Formal:</span>
              <span style="color: #ffffff;">${this.selectedAtom.formalCharge}</span>
            </div>
          </div>
        ` : `
          <div class="vcl-empty-atom-hint">
            Haz clic directamente en un átomo sobre la mesa 3D para inspeccionar sus coordenadas y estados.
          </div>
        `}
      </div>

      <!-- Enlaces Químicos y Control de Orden -->
      <div class="vcl-console-section">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem;">
          <h4 class="vcl-section-heading" style="margin: 0;">Enlaces (${this.currentMolecule.bonds.length})</h4>
          <span style="font-size: 0.7rem; color: var(--text-dim);">(Clic para alternar orden)</span>
        </div>
        <div class="vcl-bonds-list">
          ${this.currentMolecule.bonds.length === 0 ? `
            <div style="font-size: 0.75rem; color: var(--text-dim); padding: 0.5rem 0;">No hay enlaces formados. Haz clic en "Crear Enlace".</div>
          ` : this.currentMolecule.bonds.map((b) => `
            <div class="vcl-bond-item-row" data-bond-id="${b.id}" title="Clic para alternar entre enlace simple, doble y triple">
              <div class="vcl-bond-atoms">
                <strong>${b.atomAId.split('_')[0]}</strong>
                <span class="vcl-bond-order-badge">${b.order === 3 ? '≡ Triple' : b.order === 2 ? '= Doble' : '— Simple'}</span>
                <strong>${b.atomBId.split('_')[0]}</strong>
              </div>
              <div class="vcl-bond-length">${b.length?.toFixed(2) ?? '-'} Å</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Actualizar badges superiores del HUD 3D
    const formulaBadge = this.container.querySelector('#canvas-substance-name');
    if (formulaBadge) {
      formulaBadge.textContent = `${substance.name} (${this.currentMolecule.formula || 'Vacía'})`;
    }
    const geomBadge = this.container.querySelector('#canvas-geometry-text');
    if (geomBadge) {
      geomBadge.textContent = this.currentMolecule.geometryVSEPR || 'Calculando';
    }
    const massBadge = this.container.querySelector('#canvas-mass-text');
    if (massBadge) {
      massBadge.textContent = `${this.currentMolecule.molarMass} g/mol`;
    }

    // Listener para el botón rápido de arreglar octeto si aparece
    this.container.querySelector('#btn-fix-octet-quick')?.addEventListener('click', () => {
      labAudio.playBondSnap();
      this.currentMolecule = MolecularEngine.autoSaturateBonds(this.currentMolecule);
      this.currentMolecule = MolecularEngine.optimize3DGeometry(this.currentMolecule);
      this.renderer3D?.setMolecule(this.currentMolecule);
      this.updatePropertiesPanel();
      labAudio.playIdentifiedChime();
    });

    // Clic en enlaces para alternar orden
    this.container.querySelectorAll('.vcl-bond-item-row').forEach((row) => {
      row.addEventListener('click', () => {
        const bondId = row.getAttribute('data-bond-id');
        if (bondId) {
          labAudio.playBondSnap();
          this.currentMolecule = MolecularEngine.cycleBondOrder(this.currentMolecule, bondId);
          this.renderer3D?.setMolecule(this.currentMolecule);
          this.updatePropertiesPanel();
        }
      });
    });
  }

  private setupEventListeners(): void {
    // Selección de elemento en la paleta rápida
    this.container.querySelectorAll('.btn-palette-el').forEach((btn) => {
      btn.addEventListener('click', () => {
        labAudio.playClick();
        const sym = btn.getAttribute('data-symbol');
        if (sym) {
          this.selectedPaletteElement = sym;
          this.container.querySelectorAll('.btn-palette-el').forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
          const addBtn = this.container.querySelector('#btn-add-atom');
          if (addBtn) addBtn.innerHTML = `<span class="vcl-btn-icon">+</span><span>Añadir Átomo (${sym})</span>`;
        }
      });
    });

    // Selector de los 118 elementos
    const allSelect = this.container.querySelector('#builder-all-elements-select') as HTMLSelectElement;
    allSelect?.addEventListener('change', (e) => {
      labAudio.playClick();
      const sym = (e.target as HTMLSelectElement).value;
      this.selectedPaletteElement = sym;
      const addBtn = this.container.querySelector('#btn-add-atom');
      if (addBtn) addBtn.innerHTML = `<span class="vcl-btn-icon">+</span><span>Añadir Átomo (${sym})</span>`;
    });

    // Selector de orden de enlace
    this.container.querySelectorAll('.vcl-btn-bond-order').forEach((btn) => {
      btn.addEventListener('click', () => {
        labAudio.playClick();
        const order = parseInt(btn.getAttribute('data-order') || '1', 10) as 1 | 2 | 3;
        this.selectedBondOrder = order;
        this.container.querySelectorAll('.vcl-btn-bond-order').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // Añadir átomo a la mesa óptica
    this.container.querySelector('#btn-add-atom')?.addEventListener('click', () => {
      labAudio.playAtomAdd();
      const count = this.currentMolecule.atoms.length;
      const radius = 1.35 * Math.sqrt(count || 1);
      const angle = count * 2.399; // Golden ratio spiral
      const x = parseFloat((Math.cos(angle) * radius).toFixed(2));
      const y = parseFloat((Math.sin(angle) * radius).toFixed(2));

      const { molecule, addedAtom } = MolecularEngine.addAtom(
        this.currentMolecule,
        this.selectedPaletteElement,
        [x, y, 0]
      );
      this.currentMolecule = molecule;
      this.selectedAtom = addedAtom;

      // Si hay un átomo central o previo, enlazar automáticamente con el orden elegido
      if (count > 0) {
        const prevAtom = this.currentMolecule.atoms[0];
        this.currentMolecule = MolecularEngine.addBond(
          this.currentMolecule,
          prevAtom.id,
          addedAtom.id,
          this.selectedBondOrder
        );
      }

      this.renderer3D?.setMolecule(this.currentMolecule);
      this.updatePropertiesPanel();
      eventBus.emit('molecule:changed', this.currentMolecule);
    });

    // Crear enlace explícito
    this.container.querySelector('#btn-create-bond')?.addEventListener('click', () => {
      if (this.currentMolecule.atoms.length < 2) {
        eventBus.emit('lab:notification', {
          title: 'Átomos Insuficientes',
          message: 'Se requieren al menos 2 átomos en la mesa para formar un enlace.',
          type: 'warning',
        });
        return;
      }
      labAudio.playBondSnap();
      const a = this.currentMolecule.atoms[this.currentMolecule.atoms.length - 2];
      const b = this.currentMolecule.atoms[this.currentMolecule.atoms.length - 1];
      this.currentMolecule = MolecularEngine.addBond(this.currentMolecule, a.id, b.id, this.selectedBondOrder);
      this.renderer3D?.setMolecule(this.currentMolecule);
      this.updatePropertiesPanel();
      eventBus.emit('lab:notification', {
        title: 'Enlace Establecido',
        message: `Enlace formado entre ${a.symbol} y ${b.symbol} (Orden ${this.selectedBondOrder}).`,
        type: 'success',
      });
    });

    // Botón Optimizar 3D (VSEPR)
    this.container.querySelector('#btn-optimize-3d')?.addEventListener('click', () => {
      labAudio.playBondSnap();
      this.currentMolecule = MolecularEngine.optimize3DGeometry(this.currentMolecule);
      this.renderer3D?.setMolecule(this.currentMolecule);
      this.updatePropertiesPanel();
      labAudio.playIdentifiedChime();
      eventBus.emit('lab:notification', {
        title: 'Geometría 3D Optimizada',
        message: `Estructura relajada según la teoría VSEPR: ${this.currentMolecule.geometryVSEPR}.`,
        type: 'success',
      });
    });

    // Botón Auto-Saturar / Octeto
    this.container.querySelector('#btn-auto-saturate')?.addEventListener('click', () => {
      labAudio.playBondSnap();
      this.currentMolecule = MolecularEngine.autoSaturateBonds(this.currentMolecule);
      this.currentMolecule = MolecularEngine.optimize3DGeometry(this.currentMolecule);
      this.renderer3D?.setMolecule(this.currentMolecule);
      this.updatePropertiesPanel();
      labAudio.playIdentifiedChime();
      eventBus.emit('lab:notification', {
        title: 'Enlaces Balanceados',
        message: 'Regla del octeto aplicada con éxito a la molécula.',
        type: 'success',
      });
    });

    // Alternar Rotación Automática
    this.container.querySelector('#btn-toggle-rotate')?.addEventListener('click', () => {
      labAudio.playClick();
      if (this.renderer3D) {
        const state = this.renderer3D.toggleAutoRotate();
        const txt = this.container.querySelector('#txt-rotate-state');
        if (txt) txt.textContent = `Auto-Giro: ${state ? 'ON' : 'OFF'}`;
      }
    });

    // Recentrar Cámara
    this.container.querySelector('#btn-recenter-cam')?.addEventListener('click', () => {
      labAudio.playClick();
      this.renderer3D?.resetView();
    });

    // Eliminar seleccionado
    this.container.querySelector('#btn-delete-selected')?.addEventListener('click', () => {
      if (!this.selectedAtom) {
        eventBus.emit('lab:notification', {
          title: 'Sin Selección',
          message: 'Haz clic en un átomo en la mesa 3D para seleccionarlo antes de eliminar.',
          type: 'info',
        });
        return;
      }
      labAudio.playClick();
      this.currentMolecule = MolecularEngine.removeAtom(this.currentMolecule, this.selectedAtom.id);
      this.selectedAtom = null;
      this.renderer3D?.setMolecule(this.currentMolecule);
      this.updatePropertiesPanel();
    });

    // Limpiar mesa
    this.container.querySelector('#btn-clear-molecule')?.addEventListener('click', () => {
      labAudio.playPurge();
      this.currentMolecule = MolecularEngine.createEmptyMolecule('Mesa de Trabajo Vacía');
      this.selectedAtom = null;
      this.renderer3D?.setMolecule(this.currentMolecule);
      this.updatePropertiesPanel();
      eventBus.emit('molecule:cleared');
    });

    // Modos de representación
    this.container.querySelectorAll('.btn-rep').forEach((btn) => {
      btn.addEventListener('click', () => {
        labAudio.playClick();
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

    // Selector de presets estándar
    const presetSelect = this.container.querySelector('#builder-presets-select') as HTMLSelectElement;
    presetSelect?.addEventListener('change', (e) => {
      labAudio.playIdentifiedChime();
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

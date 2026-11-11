/**
 * Molecular Renderer — Virtual Chemistry Lab (VCL)
 * Vickora Labs
 *
 * Motor de renderizado 3D de alta fidelidad basado en Three.js.
 * Administra escena molecular, modos de representación visual,
 * selección por raycasting y sombreado científico.
 */

import * as THREE from 'three';
import { AtomMesh } from './atoms/AtomMesh.js';
import { BondMesh } from './bonds/BondMesh.js';
import { MoleculeMaterials } from './materials/MoleculeMaterials.js';
import type { MoleculeGraph, MolecularRepresentation, AtomInstance, BondInstance } from '@vcl/shared';
import type { RendererOptions, AtomSelectCallback, BondSelectCallback } from './types.js';

export class MolecularRenderer {
  public readonly scene: THREE.Scene;
  public readonly camera: THREE.PerspectiveCamera;
  public readonly renderer: THREE.WebGLRenderer;
  public readonly container: HTMLElement;

  private moleculeGroup: THREE.Group = new THREE.Group();
  private currentMolecule: MoleculeGraph | null = null;
  private representation: MolecularRepresentation = 'ball-and-stick';

  private raycaster = new THREE.Raycaster();
  private mouse = new THREE.Vector2();
  private atomMeshes: THREE.Mesh[] = [];

  private hoveredMesh: THREE.Mesh | null = null;
  private selectedAtomId: string | null = null;

  public onAtomSelect?: AtomSelectCallback;
  public onBondSelect?: BondSelectCallback;

  // Interacción orbital manual con ratón
  private isDragging = false;
  private previousMousePosition = { x: 0, y: 0 };
  private animationFrameId: number | null = null;

  constructor(options: RendererOptions) {
    this.container = options.container;
    this.representation = options.representation || 'ball-and-stick';

    // 1. Configurar Escena
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(options.backgroundColor ?? 0x070b14);

    // 2. Configurar Cámara
    const aspect = this.container.clientWidth / (this.container.clientHeight || 1);
    this.camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 100);
    this.camera.position.set(0, 0, 6.5);

    // 3. Configurar WebGLRenderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: true,
    });
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;

    if (options.enableShadows !== false) {
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    }

    this.container.appendChild(this.renderer.domElement);

    // 4. Iluminación de Estudio Científico
    this.setupLighting();

    // 5. Añadir grupo principal de moléculas
    this.scene.add(this.moleculeGroup);

    // 6. Controles de rotación y eventos de ratón
    this.setupMouseEvents();

    // 7. Bucle de renderizado
    this.animate();
  }

  private setupLighting(): void {
    // Luz ambiental suave
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    this.scene.add(ambientLight);

    // Luz clave principal
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
    keyLight.position.set(5, 8, 6);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    this.scene.add(keyLight);

    // Luz de relleno azulada
    const fillLight = new THREE.DirectionalLight(0x38bdf8, 0.6);
    fillLight.position.set(-6, -3, 4);
    this.scene.add(fillLight);

    // Luz de contra (rim light) para destacar bordes moleculares
    const rimLight = new THREE.DirectionalLight(0xa855f7, 0.8);
    rimLight.position.set(0, -6, -5);
    this.scene.add(rimLight);
  }

  private setupMouseEvents(): void {
    const dom = this.renderer.domElement;

    dom.addEventListener('pointerdown', (e) => {
      this.isDragging = true;
      this.previousMousePosition = { x: e.clientX, y: e.clientY };

      // Raycasting para selección
      this.checkPointerClick(e);
    });

    window.addEventListener('pointermove', (e) => {
      if (!this.isDragging) {
        this.checkPointerHover(e);
        return;
      }

      const deltaX = e.clientX - this.previousMousePosition.x;
      const deltaY = e.clientY - this.previousMousePosition.y;

      this.moleculeGroup.rotation.y += deltaX * 0.008;
      this.moleculeGroup.rotation.x += deltaY * 0.008;

      this.previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('pointerup', () => {
      this.isDragging = false;
    });

    dom.addEventListener('wheel', (e) => {
      e.preventDefault();
      const zoomFactor = e.deltaY * 0.003;
      this.camera.position.z = Math.max(1.8, Math.min(18.0, this.camera.position.z + zoomFactor));
    });
  }

  private checkPointerHover(event: PointerEvent): void {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.atomMeshes);

    if (intersects.length > 0) {
      const hit = intersects[0].object as THREE.Mesh;
      if (this.hoveredMesh !== hit) {
        if (this.hoveredMesh && this.hoveredMesh.userData.atomId !== this.selectedAtomId) {
          this.resetMeshMaterial(this.hoveredMesh);
        }
        this.hoveredMesh = hit;
        this.container.style.cursor = 'pointer';
      }
    } else {
      if (this.hoveredMesh && this.hoveredMesh.userData.atomId !== this.selectedAtomId) {
        this.resetMeshMaterial(this.hoveredMesh);
      }
      this.hoveredMesh = null;
      this.container.style.cursor = 'grab';
    }
  }

  private checkPointerClick(event: PointerEvent): void {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.atomMeshes);

    if (intersects.length > 0) {
      const hit = intersects[0].object as THREE.Mesh;
      const atom: AtomInstance = hit.userData.instance;
      this.selectedAtomId = atom.id;

      // Resaltar átomo seleccionado
      hit.material = MoleculeMaterials.getSelectedMaterial();

      if (this.onAtomSelect) {
        this.onAtomSelect(atom, hit);
      }
    } else {
      this.selectedAtomId = null;
      this.rebuildMeshes();
    }
  }

  private resetMeshMaterial(mesh: THREE.Mesh): void {
    const atom: AtomInstance = mesh.userData.instance;
    const rep = this.representation;
    const newMesh = AtomMesh.create(atom, rep);
    mesh.material = newMesh.material;
  }

  /**
   * Carga una molécula completa en la escena 3D y centra la cámara.
   */
  public setMolecule(molecule: MoleculeGraph): void {
    this.currentMolecule = molecule;
    this.rebuildMeshes();
    this.centerMolecule();
  }

  /**
   * Cambia el modo de representación molecular (Ball & Stick, Space Filling, Wireframe, Lewis).
   */
  public setRepresentation(rep: MolecularRepresentation): void {
    if (this.representation === rep) return;
    this.representation = rep;
    this.rebuildMeshes();
  }

  private rebuildMeshes(): void {
    // 1. Limpiar geometría anterior
    while (this.moleculeGroup.children.length > 0) {
      const child = this.moleculeGroup.children[0];
      this.moleculeGroup.remove(child);
    }
    this.atomMeshes = [];

    if (!this.currentMolecule || this.currentMolecule.atoms.length === 0) return;

    // 2. Crear mallas para cada átomo
    const atomMap = new Map<string, AtomInstance>();
    for (const atom of this.currentMolecule.atoms) {
      atomMap.set(atom.id, atom);
      const mesh = AtomMesh.create(atom, this.representation);
      if (this.selectedAtomId === atom.id) {
        mesh.material = MoleculeMaterials.getSelectedMaterial();
      }
      this.moleculeGroup.add(mesh);
      this.atomMeshes.push(mesh);
    }

    // 3. Crear enlaces
    for (const bond of this.currentMolecule.bonds) {
      const atomA = atomMap.get(bond.atomAId);
      const atomB = atomMap.get(bond.atomBId);
      if (atomA && atomB) {
        const bondGroup = BondMesh.create(bond, atomA, atomB, this.representation);
        if (bondGroup) {
          this.moleculeGroup.add(bondGroup);
        }
      }
    }
  }

  private centerMolecule(): void {
    if (!this.currentMolecule || this.currentMolecule.atoms.length === 0) return;

    // Calcular centro de masa geométrico de la molécula
    const box = new THREE.Box3().setFromObject(this.moleculeGroup);
    const center = new THREE.Vector3();
    box.getCenter(center);

    // Centrar el grupo
    this.moleculeGroup.position.sub(center);

    // Ajustar zoom para abarcar el tamaño
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z, 2.0);
    this.camera.position.z = maxDim * 2.2;
  }

  public handleResize(): void {
    if (!this.container) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight || 1;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  private animate = (): void => {
    this.animationFrameId = requestAnimationFrame(this.animate);

    // Rotación suave continua cuando no se está arrastrando
    if (!this.isDragging) {
      this.moleculeGroup.rotation.y += 0.0015;
    }

    this.renderer.render(this.scene, this.camera);
  };

  public getRootGroup(): THREE.Group {
    return this.moleculeGroup;
  }

  public dispose(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.renderer.dispose();
    if (this.renderer.domElement && this.renderer.domElement.parentNode) {
      this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
    }
  }
}

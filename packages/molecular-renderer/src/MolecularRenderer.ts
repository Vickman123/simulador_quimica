/**
 * Molecular Renderer — Virtual Chemistry Lab (VCL)
 * Vickora Labs
 *
 * Motor de renderizado 3D de alta fidelidad basado en Three.js.
 * Administra el escenario de laboratorio óptico, mesa de trabajo de confinamiento,
 * modos de representación visual, sombras físicas de contacto y sombreado PBR científico.
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
  private benchGroup: THREE.Group = new THREE.Group();
  private reticleRing: THREE.Mesh | null = null;
  private currentMolecule: MoleculeGraph | null = null;
  private representation: MolecularRepresentation = 'ball-and-stick';

  private raycaster = new THREE.Raycaster();
  private mouse = new THREE.Vector2();
  private atomMeshes: THREE.Mesh[] = [];

  private hoveredMesh: THREE.Mesh | null = null;
  private selectedAtomId: string | null = null;
  public autoRotate: boolean = true;

  public onAtomSelect?: AtomSelectCallback;
  public onBondSelect?: BondSelectCallback;

  // Interacción orbital manual con ratón / gestos
  private isDragging = false;
  private previousMousePosition = { x: 0, y: 0 };
  private animationFrameId: number | null = null;

  constructor(options: RendererOptions) {
    this.container = options.container;
    this.representation = options.representation || 'ball-and-stick';

    // 1. Configurar Escena
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(options.backgroundColor ?? 0x050811);
    this.scene.fog = new THREE.FogExp2(0x050811, 0.04);

    // 2. Configurar Cámara
    const aspect = this.container.clientWidth / (this.container.clientHeight || 1);
    this.camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 100);
    this.camera.position.set(0, 0.8, 6.2);

    // 3. Configurar WebGLRenderer con PBR y mapeo tonal cinematográfico
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: true,
    });
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.25;

    if (options.enableShadows !== false) {
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    }

    this.container.appendChild(this.renderer.domElement);

    // 4. Iluminación de Laboratorio Físico
    this.setupLaboratoryLighting();

    // 5. Construir Mesa de Trabajo Óptica y Confinamiento Físico
    this.buildLaboratoryWorkbench();

    // 6. Añadir grupo principal de moléculas
    this.scene.add(this.moleculeGroup);

    // 7. Controles de rotación y eventos de ratón
    this.setupMouseEvents();

    // 8. Bucle de renderizado
    this.animate();
  }

  /**
   * Configura la iluminación de estudio de laboratorio científico
   */
  private setupLaboratoryLighting(): void {
    // Luz ambiental suave azulada de sala limpia
    const ambientLight = new THREE.AmbientLight(0xdbeafe, 0.65);
    this.scene.add(ambientLight);

    // Luz cenital principal (spotlight con sombras suaves)
    const keySpot = new THREE.SpotLight(0xffffff, 2.5);
    keySpot.position.set(2, 7, 4);
    keySpot.angle = Math.PI / 4;
    keySpot.penumbra = 0.5;
    keySpot.castShadow = true;
    keySpot.shadow.mapSize.width = 2048;
    keySpot.shadow.mapSize.height = 2048;
    keySpot.shadow.camera.near = 1;
    keySpot.shadow.camera.far = 15;
    keySpot.shadow.bias = -0.0001;
    this.scene.add(keySpot);

    // Luz de relleno cian del campo de confinamiento
    const cyanFill = new THREE.DirectionalLight(0x38bdf8, 0.85);
    cyanFill.position.set(-5, -1, 3);
    this.scene.add(cyanFill);

    // Luz de contra violeta / ultravioleta de fondo
    const rimLight = new THREE.DirectionalLight(0x818cf8, 0.9);
    rimLight.position.set(0, -4, -6);
    this.scene.add(rimLight);
  }

  /**
   * Construye el pedestal / mesa óptica de experimentación de laboratorio
   */
  private buildLaboratoryWorkbench(): void {
    this.benchGroup.name = 'Laboratory_Optical_Workbench';
    const benchY = -2.2;

    // 1. Encimera de la mesa de experimentación (titanio oscuro pulido)
    const tableGeo = new THREE.CylinderGeometry(3.6, 3.8, 0.25, 48);
    const tableMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.35,
      metalness: 0.85,
    });
    const table = new THREE.Mesh(tableGeo, tableMat);
    table.position.set(0, benchY, 0);
    table.receiveShadow = true;
    this.benchGroup.add(table);

    // 2. Plano receptor de sombras de contacto de los átomos
    const shadowGeo = new THREE.PlaneGeometry(7.0, 7.0);
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.45 });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.set(0, benchY + 0.13, 0);
    shadowPlane.receiveShadow = true;
    this.benchGroup.add(shadowPlane);

    // 3. Rejilla métrica milimétrica de precisión
    const grid = new THREE.PolarGridHelper(3.4, 16, 8, 48, 0x0284c7, 0x1e293b);
    grid.position.set(0, benchY + 0.135, 0);
    this.benchGroup.add(grid);

    // 4. Anillo exterior luminoso de confinamiento láser
    const ringGeo = new THREE.RingGeometry(3.38, 3.44, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(0, benchY + 0.14, 0);
    this.benchGroup.add(ring);

    // 5. Retícula holográfica interna giratoria con marcas angulares
    const reticleGeo = new THREE.RingGeometry(1.6, 1.63, 32);
    const reticleMat = new THREE.MeshBasicMaterial({
      color: 0x00f5ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.6,
    });
    this.reticleRing = new THREE.Mesh(reticleGeo, reticleMat);
    this.reticleRing.rotation.x = -Math.PI / 2;
    this.reticleRing.position.set(0, benchY + 0.142, 0);
    this.benchGroup.add(this.reticleRing);

    // 6. Postes ópticos / pilares de contención en las 4 esquinas
    const postGeo = new THREE.CylinderGeometry(0.06, 0.08, 1.4, 16);
    const postMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.9,
      roughness: 0.2,
    });
    const tipGeo = new THREE.SphereGeometry(0.09, 16, 16);
    const tipMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });

    const postDist = 2.6;
    const postAngles = [Math.PI / 4, (3 * Math.PI) / 4, (5 * Math.PI) / 4, (7 * Math.PI) / 4];

    postAngles.forEach((ang) => {
      const px = Math.cos(ang) * postDist;
      const pz = Math.sin(ang) * postDist;

      const post = new THREE.Mesh(postGeo, postMat);
      post.position.set(px, benchY + 0.7, pz);
      post.castShadow = true;
      post.receiveShadow = true;
      this.benchGroup.add(post);

      const tip = new THREE.Mesh(tipGeo, tipMat);
      tip.position.set(px, benchY + 1.4, pz);
      this.benchGroup.add(tip);
    });

    this.scene.add(this.benchGroup);
  }

  private setupMouseEvents(): void {
    const dom = this.renderer.domElement;

    dom.addEventListener('pointerdown', (e) => {
      this.isDragging = true;
      this.previousMousePosition = { x: e.clientX, y: e.clientY };

      // Raycasting para selección táctil de átomos
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
      this.camera.position.z = Math.max(1.8, Math.min(16.0, this.camera.position.z + zoomFactor));
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

      // Resaltar átomo seleccionado con halo dorado
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
   * Cambia el modo de representación molecular.
   */
  public setRepresentation(rep: MolecularRepresentation): void {
    if (this.representation === rep) return;
    this.representation = rep;
    this.rebuildMeshes();
  }

  /**
   * Activa o desactiva la rotación automática de exhibición de laboratorio.
   */
  public toggleAutoRotate(forceState?: boolean): boolean {
    this.autoRotate = forceState !== undefined ? forceState : !this.autoRotate;
    return this.autoRotate;
  }

  /**
   * Restablece la orientación del espécimen y centra la cámara.
   */
  public resetView(): void {
    this.moleculeGroup.rotation.set(0, 0, 0);
    this.camera.position.set(0, 0.8, 6.2);
    this.centerMolecule();
  }

  private rebuildMeshes(): void {
    while (this.moleculeGroup.children.length > 0) {
      const child = this.moleculeGroup.children[0];
      this.moleculeGroup.remove(child);
    }
    this.atomMeshes = [];

    if (!this.currentMolecule || this.currentMolecule.atoms.length === 0) return;

    // Crear mallas para cada átomo
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

    // Crear enlaces
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

  public centerMolecule(): void {
    if (!this.currentMolecule || this.currentMolecule.atoms.length === 0) return;

    const box = new THREE.Box3().setFromObject(this.moleculeGroup);
    const center = new THREE.Vector3();
    box.getCenter(center);

    // Centrar en el punto de levitación sobre la mesa óptica
    this.moleculeGroup.position.sub(center);

    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z, 2.0);
    this.camera.position.z = maxDim * 2.1;
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

    // Rotación de retícula holográfica de la mesa óptica
    if (this.reticleRing) {
      this.reticleRing.rotation.z += 0.003;
    }

    // Rotación suave del espécimen cuando no se arrastra
    if (this.autoRotate && !this.isDragging) {
      this.moleculeGroup.rotation.y += 0.0025;
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

/**
 * Spatial Laboratory Scene — VXR Adapter
 * Virtual Chemistry Lab (VCL) — Vickora Labs
 *
 * Entorno de laboratorio espacial 3D optimizado para Meta Quest 3S
 * con pedestal de inspección holográfica y paneles de datos flotantes.
 */

import * as THREE from 'three';
import type { MoleculeGraph } from '@vcl/shared';

export class SpatialLabScene {
  public readonly environmentGroup: THREE.Group = new THREE.Group();
  public readonly pedestalGroup: THREE.Group = new THREE.Group();
  public readonly hudMesh: THREE.Mesh;

  private hudCanvas: HTMLCanvasElement;
  private hudTexture: THREE.CanvasTexture;

  constructor() {
    this.environmentGroup.name = 'VCL_LaboratoryEnvironment';

    // 1. Suelo tecnológico del laboratorio
    this.buildFloor();

    // 2. Pedestal de examen molecular
    this.buildPedestal();

    // 3. Panel de HUD espacial 3D
    const { mesh, canvas, texture } = this.buildSpatialHUD();
    this.hudMesh = mesh;
    this.hudCanvas = canvas;
    this.hudTexture = texture;
    this.environmentGroup.add(this.hudMesh);
  }

  private buildFloor(): void {
    // Suelo circular oscuro
    const floorGeo = new THREE.CircleGeometry(8, 48);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x070d18,
      roughness: 0.7,
      metalness: 0.3,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0;
    floor.receiveShadow = true;
    this.environmentGroup.add(floor);

    // Anillo exterior de luz cian
    const ringGeo = new THREE.RingGeometry(7.8, 7.95, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.005;
    this.environmentGroup.add(ring);

    // Rejilla técnica sutil
    const grid = new THREE.GridHelper(14, 28, 0x0284c7, 0x1e293b);
    grid.position.y = 0.01;
    this.environmentGroup.add(grid);
  }

  private buildPedestal(): void {
    // Pedestal cilíndrico a la altura ergonómica de inspección de Meta Quest (~1 metro)
    const baseGeo = new THREE.CylinderGeometry(0.8, 0.95, 0.85, 32);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.35,
      metalness: 0.8,
    });
    const base = new THREE.Mesh(baseGeo, baseMat);
    base.position.set(0, 0.85 / 2, -1.3);
    base.receiveShadow = true;
    base.castShadow = true;
    this.pedestalGroup.add(base);

    // Anillo luminoso de confinamiento holográfico
    const rimGeo = new THREE.TorusGeometry(0.78, 0.02, 16, 48);
    const rimMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const rim = new THREE.Mesh(rimGeo, rimMat);
    rim.rotation.x = Math.PI / 2;
    rim.position.set(0, 0.86, -1.3);
    this.pedestalGroup.add(rim);

    this.environmentGroup.add(this.pedestalGroup);
  }

  private buildSpatialHUD(): { mesh: THREE.Mesh; canvas: HTMLCanvasElement; texture: THREE.CanvasTexture } {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;

    const geo = new THREE.PlaneGeometry(1.6, 0.8);
    const mat = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: 0.95,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geo, mat);
    // Posicionado flotando detrás del pedestal, ligeramente inclinado hacia el usuario
    mesh.position.set(0, 1.6, -2.1);
    mesh.rotation.x = -0.05;

    this.renderHUDText(canvas, texture, null);

    return { mesh, canvas, texture };
  }

  public updateHUD(molecule: MoleculeGraph | null): void {
    this.renderHUDText(this.hudCanvas, this.hudTexture, molecule);
  }

  private renderHUDText(
    canvas: HTMLCanvasElement,
    texture: THREE.CanvasTexture,
    molecule: MoleculeGraph | null
  ): void {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Fondo translúcido con gradiente
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grad.addColorStop(0, 'rgba(15, 23, 42, 0.92)');
    grad.addColorStop(1, 'rgba(7, 11, 20, 0.96)');
    ctx.fillStyle = grad;
    ctx.roundRect(10, 10, canvas.width - 20, canvas.height - 20, 24);
    ctx.fill();

    // Borde brillante
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 4;
    ctx.stroke();

    // Encabezado
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 36px "Segoe UI", Roboto, sans-serif';
    ctx.fillText('VIRTUAL CHEMISTRY LAB // META QUEST 3S', 40, 70);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '22px "Segoe UI", Roboto, sans-serif';
    ctx.fillText('ESTACIÓN HOLOGRÁFICA DE ANÁLISIS MOLECULAR 6-DoF', 40, 105);

    ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(40, 125);
    ctx.lineTo(canvas.width - 40, 125);
    ctx.stroke();

    if (molecule) {
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 48px "Segoe UI", Roboto, sans-serif';
      ctx.fillText(`${molecule.name} (${molecule.formula})`, 40, 195);

      ctx.fillStyle = '#e2e8f0';
      ctx.font = '28px "Segoe UI", Roboto, sans-serif';
      ctx.fillText(`Masa molar: ${molecule.molarMass} g/mol`, 40, 255);
      ctx.fillText(`Geometría VSEPR: ${molecule.geometryVSEPR || 'No calculada'}`, 40, 305);
      ctx.fillText(`Átomos totales: ${molecule.atoms.length} | Enlaces: ${molecule.bonds.length}`, 40, 355);

      if (molecule.dipoleMomentDebye !== undefined) {
        ctx.fillText(`Momento dipolar: ${molecule.dipoleMomentDebye} Debye`, 40, 405);
      }
    } else {
      ctx.fillStyle = '#cbd5e1';
      ctx.font = '32px "Segoe UI", Roboto, sans-serif';
      ctx.fillText('Ninguna molécula montada en el pedestal.', 40, 220);
      ctx.font = '24px "Segoe UI", Roboto, sans-serif';
      ctx.fillStyle = '#64748b';
      ctx.fillText('Apunta con el mando Quest y pulsa el gatillo para cargar y manipular estructuras.', 40, 270);
    }

    // Pie de página de controles Quest
    ctx.fillStyle = '#10b981';
    ctx.font = 'bold 22px "Segoe UI", Roboto, sans-serif';
    ctx.fillText('CONTROLES QUEST: Gatillo = Seleccionar | Grip = Agarrar / Rotar | Joystick = Escalar', 40, 470);

    texture.needsUpdate = true;
  }
}

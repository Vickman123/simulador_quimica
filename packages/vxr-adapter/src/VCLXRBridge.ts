/**
 * VCL-VXR Bridge — Virtual Chemistry Lab (VCL)
 * Vickora Labs
 *
 * Adaptador de alto nivel que conecta VCL con las capacidades de WebXR
 * y VXR Core, optimizado para Meta Quest 3S con fallback desktop transparente.
 */

import * as THREE from 'three';
import { SpatialGrabController } from './SpatialGrabController.js';
import { SpatialLabScene } from './SpatialLabScene.js';
import { eventBus } from '@vcl/shared';
import type { MoleculeGraph } from '@vcl/shared';

export interface VCLXRBridgeOptions {
  container: HTMLElement;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  moleculeRoot: THREE.Group;
}

export class VCLXRBridge {
  public readonly scene: THREE.Scene;
  public readonly camera: THREE.PerspectiveCamera;
  public readonly renderer: THREE.WebGLRenderer;
  public readonly container: HTMLElement;
  public readonly moleculeRoot: THREE.Group;

  public readonly grabController = new SpatialGrabController();
  public readonly labScene = new SpatialLabScene();

  public isVRPresenting = false;
  public isXRSupported = false;

  private xrSession: globalThis.XRSession | null = null;
  private controllers: THREE.XRTargetRaySpace[] = [];
  private controllerGrips: THREE.XRGripSpace[] = [];
  private controllerGroup = new THREE.Group();

  constructor(options: VCLXRBridgeOptions) {
    this.container = options.container;
    this.scene = options.scene;
    this.camera = options.camera;
    this.renderer = options.renderer;
    this.moleculeRoot = options.moleculeRoot;

    // Habilitar soporte WebXR en el renderer de Three.js
    this.renderer.xr.enabled = true;

    // Incorporar entorno del laboratorio espacial a la escena
    this.scene.add(this.labScene.environmentGroup);
    this.scene.add(this.controllerGroup);

    // Inicializar mandos WebXR
    this.setupControllers();

    // Comprobar soporte WebXR en el navegador (Meta Quest Browser / WebXR)
    this.checkXRSupport();
  }

  public async checkXRSupport(): Promise<boolean> {
    if (typeof navigator !== 'undefined' && 'xr' in navigator && (navigator as any).xr) {
      try {
        const supported = await (navigator as any).xr.isSessionSupported('immersive-vr');
        this.isXRSupported = supported;
        eventBus.emit('xr:sessionState', { isVR: this.isVRPresenting, supported });
        return supported;
      } catch (e) {
        this.isXRSupported = false;
      }
    }
    this.isXRSupported = false;
    eventBus.emit('xr:sessionState', { isVR: false, supported: false });
    return false;
  }

  private setupControllers(): void {
    const createLaser = () => {
      const geo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, -3.5),
      ]);
      const mat = new THREE.LineBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.75,
      });
      return new THREE.Line(geo, mat);
    };

    for (let i = 0; i < 2; i++) {
      // 1. Rayo objetivo (Laser Pointer)
      const controller = this.renderer.xr.getController(i);
      controller.name = `VCL_QuestRay_${i}`;
      controller.add(createLaser());

      // Gatillo (Trigger) -> Selección / Pulsación
      controller.addEventListener('selectstart', () => this.onControllerSelectStart(i, controller));
      controller.addEventListener('selectend', () => this.onControllerSelectEnd(i, controller));

      // Botón lateral (Grip / Squeeze) -> Agarre 6-DoF y rotación
      controller.addEventListener('squeezestart', () => this.onControllerSqueezeStart(i, controller));
      controller.addEventListener('squeezeend', () => this.onControllerSqueezeEnd(i, controller));

      this.controllerGroup.add(controller);
      this.controllers.push(controller);

      // 2. Espacio de agarre físico (Grip Space)
      const grip = this.renderer.xr.getControllerGrip(i);
      grip.name = `VCL_QuestGrip_${i}`;
      this.controllerGroup.add(grip);
      this.controllerGrips.push(grip);
    }
  }

  /**
   * Gatillo presionado en Meta Quest
   */
  private onControllerSelectStart(controllerIndex: number, controller: THREE.XRTargetRaySpace): void {
    if (!this.isVRPresenting) return;

    // Raycast desde el mando
    const raycaster = new THREE.Raycaster();
    const tempMatrix = new THREE.Matrix4();
    tempMatrix.identity().extractRotation(controller.matrixWorld);

    raycaster.ray.origin.setFromMatrixPosition(controller.matrixWorld);
    raycaster.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix);

    const hits = raycaster.intersectObjects(this.moleculeRoot.children, true);
    if (hits.length > 0) {
      eventBus.emit('lab:notification', {
        title: 'Meta Quest Touch Plus',
        message: `Átomo seleccionado mediante rayo láser VR.`,
        type: 'info',
      });
    }
  }

  private onControllerSelectEnd(controllerIndex: number, controller: THREE.XRTargetRaySpace): void {}

  /**
   * Grip presionado en Meta Quest -> Iniciar agarre 6-DoF
   */
  private onControllerSqueezeStart(controllerIndex: number, controller: THREE.XRTargetRaySpace): void {
    const pos = new THREE.Vector3().setFromMatrixPosition(controller.matrixWorld);
    const quat = new THREE.Quaternion().setFromRotationMatrix(controller.matrixWorld);

    this.grabController.startGrab(controllerIndex, pos, quat, this.moleculeRoot);

    eventBus.emit('lab:notification', {
      title: 'Molécula Agarrada',
      message: 'Manipulando estructura molecular en el espacio 3D.',
      type: 'info',
    });
  }

  /**
   * Grip liberado en Meta Quest -> Soltar objeto
   */
  private onControllerSqueezeEnd(controllerIndex: number, controller: THREE.XRTargetRaySpace): void {
    this.grabController.releaseGrab();
  }

  /**
   * Actualización por fotograma en modo VR
   */
  public updateVRFrame(): void {
    if (!this.isVRPresenting) return;

    // Si hay un objeto molecular agarrado por el mando, actualizar su traslación y rotación
    if (this.grabController.isGrabbed) {
      const activeIdx = (this.grabController as any).grabState?.controllerIndex ?? 0;
      const ctrl = this.controllers[activeIdx];
      if (ctrl) {
        const pos = new THREE.Vector3().setFromMatrixPosition(ctrl.matrixWorld);
        const quat = new THREE.Quaternion().setFromRotationMatrix(ctrl.matrixWorld);
        this.grabController.updateGrab(pos, quat);
      }
    }
  }

  /**
   * Inicia la sesión WebXR inmersiva (Meta Quest Browser / Headsets).
   */
  public async enterVR(): Promise<boolean> {
    if (!this.isXRSupported || !(navigator as any).xr) {
      eventBus.emit('lab:notification', {
        title: 'WebXR no disponible',
        message: 'No se detectó un visor VR compatible. El laboratorio continúa en modo Desktop.',
        type: 'warning',
      });
      return false;
    }

    try {
      const session = await (navigator as any).xr.requestSession('immersive-vr', {
        optionalFeatures: ['local-floor', 'bounded-floor', 'hand-tracking'],
      });

      this.xrSession = session;
      await this.renderer.xr.setSession(session);
      this.isVRPresenting = true;

      // Colocar molécula en el pedestal al entrar en VR
      this.moleculeRoot.position.set(0, 1.25, -1.3);

      session.addEventListener('end', () => {
        this.isVRPresenting = false;
        this.xrSession = null;
        eventBus.emit('xr:sessionState', { isVR: false, supported: true });
        // Restaurar posición centrada
        this.moleculeRoot.position.set(0, 0, 0);
      });

      eventBus.emit('xr:sessionState', { isVR: true, supported: true });
      eventBus.emit('lab:notification', {
        title: '¡Sesión WebXR Iniciada!',
        message: 'Bienvenido al Laboratorio Virtual en Meta Quest 3S. Apunta con los mandos.',
        type: 'success',
      });
      return true;
    } catch (err: any) {
      console.warn('[VCLXRBridge] Error al solicitar sesión WebXR:', err);
      eventBus.emit('lab:notification', {
        title: 'Error de Inicialización WebXR',
        message: err.message || 'No se pudo iniciar la sesión inmersiva.',
        type: 'error',
      });
      return false;
    }
  }

  /**
   * Sale de la sesión WebXR de forma segura.
   */
  public async exitVR(): Promise<void> {
    if (this.xrSession) {
      await this.xrSession.end();
      this.xrSession = null;
      this.isVRPresenting = false;
    }
  }

  /**
   * Sincroniza datos de la molécula con el HUD espacial del laboratorio.
   */
  public syncHUD(molecule: MoleculeGraph | null): void {
    this.labScene.updateHUD(molecule);
  }
}

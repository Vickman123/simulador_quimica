/**
 * Spatial Grab Controller — VXR Adapter
 * Virtual Chemistry Lab (VCL) — Vickora Labs
 *
 * Implementa la interacción espacial 6-DoF de agarrar, rotar, examinar
 * y escalar estructuras moleculares para Meta Quest 3S y controladores WebXR.
 */

import * as THREE from 'three';

export interface GrabState {
  isGrabbed: boolean;
  controllerIndex: number | null;
  target: THREE.Object3D | null;
  previousControllerPosition: THREE.Vector3;
  previousControllerQuaternion: THREE.Quaternion;
}

export class SpatialGrabController {
  private grabState: GrabState = {
    isGrabbed: false,
    controllerIndex: null,
    target: null,
    previousControllerPosition: new THREE.Vector3(),
    previousControllerQuaternion: new THREE.Quaternion(),
  };

  private initialScale: THREE.Vector3 = new THREE.Vector3(1, 1, 1);

  /**
   * Intenta agarrar un objeto molecular con el controlador indicado.
   */
  public startGrab(
    controllerIndex: number,
    controllerPosition: THREE.Vector3,
    controllerQuaternion: THREE.Quaternion,
    target: THREE.Object3D
  ): boolean {
    this.grabState.isGrabbed = true;
    this.grabState.controllerIndex = controllerIndex;
    this.grabState.target = target;
    this.grabState.previousControllerPosition.copy(controllerPosition);
    this.grabState.previousControllerQuaternion.copy(controllerQuaternion);
    this.initialScale.copy(target.scale);

    return true;
  }

  /**
   * Actualiza la posición y orientación 6-DoF del objeto agarrado en cada frame.
   */
  public updateGrab(
    controllerPosition: THREE.Vector3,
    controllerQuaternion: THREE.Quaternion
  ): void {
    if (!this.grabState.isGrabbed || !this.grabState.target) return;

    const target = this.grabState.target;

    // 1. Calcular delta de traslación
    const deltaPos = new THREE.Vector3().subVectors(
      controllerPosition,
      this.grabState.previousControllerPosition
    );
    target.position.add(deltaPos);

    // 2. Calcular delta de rotación con cuaterniones
    const deltaQuat = new THREE.Quaternion()
      .copy(controllerQuaternion)
      .multiply(this.grabState.previousControllerQuaternion.clone().invert());

    target.quaternion.premultiply(deltaQuat);

    // 3. Guardar estado anterior
    this.grabState.previousControllerPosition.copy(controllerPosition);
    this.grabState.previousControllerQuaternion.copy(controllerQuaternion);
  }

  /**
   * Modifica la escala de la molécula para inspección macro/microscópica.
   */
  public applyScale(scaleMultiplier: number): void {
    if (!this.grabState.target) return;
    const currentScale = this.grabState.target.scale.x;
    const newScale = Math.max(0.2, Math.min(6.0, currentScale * scaleMultiplier));
    this.grabState.target.scale.set(newScale, newScale, newScale);
  }

  /**
   * Libera el objeto molecular en el espacio.
   */
  public releaseGrab(): void {
    this.grabState.isGrabbed = false;
    this.grabState.controllerIndex = null;
    this.grabState.target = null;
  }

  public get isGrabbed(): boolean {
    return this.grabState.isGrabbed;
  }

  public get grabbedTarget(): THREE.Object3D | null {
    return this.grabState.target;
  }
}

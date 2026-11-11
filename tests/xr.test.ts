/**
 * Test Suite Automatizado para XR Adapter y Spatial Interaction
 * Virtual Chemistry Lab (VCL) — Vickora Labs
 */

import { describe, it } from 'node:test';
import assert from 'node:assert';
import * as THREE from 'three';
import { SpatialGrabController } from '../packages/vxr-adapter/src/SpatialGrabController.js';

describe('VCL — Suite de Pruebas WebXR & Interacción Espacial', () => {

  describe('1. SpatialGrabController (6-DoF)', () => {
    it('debe iniciar el agarre guardando posición y orientación de referencia', () => {
      const grab = new SpatialGrabController();
      const target = new THREE.Object3D();
      target.position.set(0, 1.2, -1.0);

      const ctrlPos = new THREE.Vector3(0.2, 1.1, -0.8);
      const ctrlQuat = new THREE.Quaternion();

      const grabbed = grab.startGrab(0, ctrlPos, ctrlQuat, target);
      assert.strictEqual(grabbed, true);
      assert.strictEqual(grab.isGrabbed, true);
      assert.strictEqual(grab.grabbedTarget, target);
    });

    it('debe actualizar la traslación y rotación del objeto en función del movimiento del mando', () => {
      const grab = new SpatialGrabController();
      const target = new THREE.Object3D();
      target.position.set(0, 1.2, -1.0);

      const ctrlPos1 = new THREE.Vector3(0, 1.0, 0);
      const ctrlQuat1 = new THREE.Quaternion();
      grab.startGrab(0, ctrlPos1, ctrlQuat1, target);

      // Desplazar mando +0.5 en X y +0.2 en Y
      const ctrlPos2 = new THREE.Vector3(0.5, 1.2, 0);
      grab.updateGrab(ctrlPos2, ctrlQuat1);

      assert.strictEqual(parseFloat(target.position.x.toFixed(2)), 0.5);
      assert.strictEqual(parseFloat(target.position.y.toFixed(2)), 1.4);
    });

    it('debe aplicar escalado proporcional al objeto agarrado', () => {
      const grab = new SpatialGrabController();
      const target = new THREE.Object3D();
      target.scale.set(1.0, 1.0, 1.0);

      grab.startGrab(0, new THREE.Vector3(), new THREE.Quaternion(), target);
      grab.applyScale(1.5);

      assert.strictEqual(parseFloat(target.scale.x.toFixed(2)), 1.5);
      assert.strictEqual(parseFloat(target.scale.y.toFixed(2)), 1.5);
    });

    it('debe liberar el objeto correctamente restaurando el estado neutro', () => {
      const grab = new SpatialGrabController();
      const target = new THREE.Object3D();

      grab.startGrab(0, new THREE.Vector3(), new THREE.Quaternion(), target);
      assert.strictEqual(grab.isGrabbed, true);

      grab.releaseGrab();
      assert.strictEqual(grab.isGrabbed, false);
      assert.strictEqual(grab.grabbedTarget, null);
    });
  });

  describe('2. Fallback de Compatibilidad WebXR', () => {
    it('debe no arrojar excepciones cuando navigator.xr no está disponible (modo Desktop)', () => {
      // Simular entorno sin WebXR
      const originalXR = (globalThis as any).navigator?.xr;
      if ((globalThis as any).navigator) {
        delete (globalThis as any).navigator.xr;
      }

      // Verificación de robustez: no debe bloquearse la aplicación
      assert.doesNotThrow(() => {
        const hasXR = typeof navigator !== 'undefined' && 'xr' in navigator;
        assert.strictEqual(hasXR, false);
      });

      if (originalXR && (globalThis as any).navigator) {
        (globalThis as any).navigator.xr = originalXR;
      }
    });
  });
});

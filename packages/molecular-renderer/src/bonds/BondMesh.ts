/**
 * Malla de Enlace Químico para Three.js
 * Virtual Chemistry Lab (VCL) — Vickora Labs
 */

import * as THREE from 'three';
import { MoleculeMaterials } from '../materials/MoleculeMaterials.js';
import type { BondInstance, AtomInstance, MolecularRepresentation } from '@vcl/shared';
import type { BondMeshUserData } from '../types.js';

export class BondMesh {
  private static sharedCylinderGeometry = new THREE.CylinderGeometry(1, 1, 1, 16);

  public static create(
    bond: BondInstance,
    atomA: AtomInstance,
    atomB: AtomInstance,
    representation: MolecularRepresentation = 'ball-and-stick'
  ): THREE.Group | null {
    if (representation === 'space-filling') {
      return null; // En space filling los átomos contactan directamente
    }

    const posA = new THREE.Vector3(...atomA.position);
    const posB = new THREE.Vector3(...atomB.position);
    const distance = posA.distanceTo(posB);
    if (distance < 0.01) return null;

    const group = new THREE.Group();
    group.name = `Bond_${bond.id}`;

    const midPoint = new THREE.Vector3().addVectors(posA, posB).multiplyScalar(0.5);
    group.position.copy(midPoint);

    // Orientar cilindro hacia el vector entre A y B (el cilindro por defecto apunta en Y)
    const direction = new THREE.Vector3().subVectors(posB, posA).normalize();
    const up = new THREE.Vector3(0, 1, 0);
    const quaternion = new THREE.Quaternion().setFromUnitVectors(up, direction);
    group.quaternion.copy(quaternion);

    const baseRadius = representation === 'wireframe' ? 0.02 : 0.07;
    const mat = MoleculeMaterials.getBondMaterial();

    const createCylinder = (offsetX: number = 0, offsetZ: number = 0): THREE.Mesh => {
      const mesh = new THREE.Mesh(this.sharedCylinderGeometry, mat);
      mesh.scale.set(baseRadius, distance, baseRadius);
      mesh.position.set(offsetX, 0, offsetZ);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      return mesh;
    };

    if (bond.order === 1) {
      group.add(createCylinder(0, 0));
    } else if (bond.order === 2) {
      const separation = baseRadius * 1.6;
      group.add(createCylinder(-separation, 0));
      group.add(createCylinder(separation, 0));
    } else if (bond.order === 3) {
      const separation = baseRadius * 2.0;
      group.add(createCylinder(0, 0));
      group.add(createCylinder(-separation, 0));
      group.add(createCylinder(separation, 0));
    }

    const userData: BondMeshUserData = {
      bondId: bond.id,
      atomAId: bond.atomAId,
      atomBId: bond.atomBId,
      order: bond.order,
      instance: bond,
    };
    group.userData = userData;

    return group;
  }
}

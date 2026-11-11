/**
 * Malla de Átomo para Three.js
 * Virtual Chemistry Lab (VCL) — Vickora Labs
 */

import * as THREE from 'three';
import { MoleculeMaterials } from '../materials/MoleculeMaterials.js';
import { ELEMENTS_BY_SYMBOL } from '@vcl/chem-engine';
import type { AtomInstance, MolecularRepresentation } from '@vcl/shared';
import type { AtomMeshUserData } from '../types.js';

export class AtomMesh {
  private static sharedSphereGeometry = new THREE.SphereGeometry(1, 32, 24);
  private static wireframeSphereGeometry = new THREE.SphereGeometry(1, 16, 12);

  public static create(
    atom: AtomInstance,
    representation: MolecularRepresentation = 'ball-and-stick'
  ): THREE.Mesh {
    const el = ELEMENTS_BY_SYMBOL[atom.symbol];
    const colorHex = el?.colorHex ?? '#FFFFFF';

    // Determinar radio visual según el modo de representación
    let radius = 0.4; // Base en Ångströms

    if (representation === 'space-filling') {
      const vdw = el?.atomicRadiusVanDerWaals ?? 150; // pm
      radius = (vdw / 100) * 0.75; // Escala proporcionada
    } else if (representation === 'wireframe') {
      radius = 0.12;
    } else if (representation === 'lewis') {
      radius = 0.3;
    } else {
      // Ball and stick
      const cov = el?.atomicRadiusCovalent ?? 75; // pm
      radius = Math.max(0.25, Math.min(0.65, (cov / 100) * 0.45));
    }

    const geo =
      representation === 'wireframe'
        ? this.wireframeSphereGeometry
        : this.sharedSphereGeometry;

    const mat = MoleculeMaterials.getAtomMaterial(colorHex);
    const mesh = new THREE.Mesh(geo, mat);

    mesh.scale.set(radius, radius, radius);
    mesh.position.set(atom.position[0], atom.position[1], atom.position[2]);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.name = `Atom_${atom.symbol}_${atom.id}`;

    const userData: AtomMeshUserData = {
      atomId: atom.id,
      symbol: atom.symbol,
      atomicNumber: atom.atomicNumber,
      instance: atom,
    };
    mesh.userData = userData;

    return mesh;
  }
}

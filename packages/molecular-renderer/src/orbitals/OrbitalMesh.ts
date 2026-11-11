/**
 * Visualización Didáctica 3D de Orbitales Atómicos (s, p, d, híbridos)
 * Virtual Chemistry Lab (VCL) — Vickora Labs
 */

import * as THREE from 'three';
import { MoleculeMaterials } from '../materials/MoleculeMaterials.js';

export class OrbitalMesh {
  /**
   * Genera la superficie de probabilidad para un orbital 's' esférico.
   */
  public static createSOrbital(radius: number = 0.8, colorHex: number = 0x38bdf8): THREE.Mesh {
    const geo = new THREE.SphereGeometry(radius, 32, 24);
    const mat = MoleculeMaterials.getOrbitalMaterial(colorHex, 0.28);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.name = 'Orbital_s';
    return mesh;
  }

  /**
   * Genera los dos lóbulos de probabilidad de un orbital 'p' (orientado en eje 'x', 'y' o 'z').
   */
  public static createPOrbital(
    axis: 'x' | 'y' | 'z',
    length: number = 1.2,
    posColor: number = 0x38bdf8,
    negColor: number = 0xf59e0b
  ): THREE.Group {
    const group = new THREE.Group();
    group.name = `Orbital_p${axis}`;

    // Geometría en forma de gota/elipsoide para cada lóbulo
    const lobeGeo = new THREE.SphereGeometry(0.35, 24, 20);
    lobeGeo.scale(1, 1.8, 1);

    const posMat = MoleculeMaterials.getOrbitalMaterial(posColor, 0.35);
    const negMat = MoleculeMaterials.getOrbitalMaterial(negColor, 0.35);

    const posLobe = new THREE.Mesh(lobeGeo, posMat);
    posLobe.position.set(0, length * 0.45, 0);

    const negLobe = new THREE.Mesh(lobeGeo, negMat);
    negLobe.position.set(0, -length * 0.45, 0);

    group.add(posLobe);
    group.add(negLobe);

    if (axis === 'x') {
      group.rotation.z = Math.PI / 2;
    } else if (axis === 'z') {
      group.rotation.x = Math.PI / 2;
    }

    return group;
  }
}

/**
 * Materiales para Renderizado Molecular 3D
 * Virtual Chemistry Lab (VCL) — Vickora Labs
 */

import * as THREE from 'three';

export class MoleculeMaterials {
  private static atomMaterialCache: Map<string, THREE.MeshStandardMaterial> = new Map();

  public static getAtomMaterial(colorHex: string, roughness: number = 0.25, metalness: number = 0.15): THREE.MeshStandardMaterial {
    const key = `${colorHex}_${roughness}_${metalness}`;
    if (this.atomMaterialCache.has(key)) {
      return this.atomMaterialCache.get(key)!;
    }

    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(colorHex),
      roughness,
      metalness,
      envMapIntensity: 0.8,
    });

    this.atomMaterialCache.set(key, material);
    return material;
  }

  public static getBondMaterial(roughness: number = 0.3, metalness: number = 0.4): THREE.MeshStandardMaterial {
    return new THREE.MeshStandardMaterial({
      color: 0x94a3b8, // Gris plateado neutro
      roughness,
      metalness,
    });
  }

  public static getHighlightMaterial(): THREE.MeshBasicMaterial {
    return new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });
  }

  public static getSelectedMaterial(): THREE.MeshStandardMaterial {
    return new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.5,
    });
  }

  public static getOrbitalMaterial(colorHex: number, opacity: number = 0.35): THREE.MeshPhysicalMaterial {
    return new THREE.MeshPhysicalMaterial({
      color: colorHex,
      transparent: true,
      opacity,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.4,
      ior: 1.1,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
  }
}

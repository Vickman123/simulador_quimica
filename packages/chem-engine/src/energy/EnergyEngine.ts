/**
 * Energy & Forces Engine — Virtual Chemistry Lab (VCL)
 * Vickora Labs
 *
 * Simulación de interacciones moleculares, curvas de energía potencial
 * internuclear (Potencial de Morse y Lennard-Jones), distancia de equilibrio
 * y energías de disociación de enlace.
 */

import type { PotentialEnergyPoint } from '@vcl/shared';

export interface BondEnergyCurve {
  bondName: string;
  equilibriumDistancePm: number; // r_e (pm)
  dissociationEnergyKjMol: number; // D_e (kJ/mol)
  curveType: 'Morse' | 'Lennard-Jones';
  points: PotentialEnergyPoint[];
  repulsiveLimitPm: number;
  attractiveLimitPm: number;
  scientificBasis: string;
}

export class EnergyEngine {
  /**
   * Genera la curva de energía potencial de Morse para un enlace covalente específico.
   * V(r) = D_e * [ (1 - exp(-a * (r - r_e)))^2 - 1 ]
   * (En r = r_e, V = -D_e; en r -> infinito, V -> 0)
   */
  public static generateMorseCurve(
    bondName: string,
    rePm: number,
    deKjMol: number,
    stiffnessParamA: number = 0.02
  ): BondEnergyCurve {
    const points: PotentialEnergyPoint[] = [];
    const minR = Math.max(20, Math.round(rePm * 0.55));
    const maxR = Math.round(rePm * 3.5);
    const step = (maxR - minR) / 100;

    for (let r = minR; r <= maxR; r += step) {
      const deltaR = r - rePm;
      const expTerm = Math.exp(-stiffnessParamA * deltaR);
      const v = deKjMol * (Math.pow(1 - expTerm, 2) - 1);

      // Limitar valores de repulsión infinita para visualización didáctica estable
      const clampedV = Math.min(deKjMol * 2.5, v);

      points.push({
        internuclearDistancePm: parseFloat(r.toFixed(1)),
        potentialEnergyKjMol: parseFloat(clampedV.toFixed(2)),
      });
    }

    return {
      bondName,
      equilibriumDistancePm: rePm,
      dissociationEnergyKjMol: deKjMol,
      curveType: 'Morse',
      points,
      repulsiveLimitPm: minR,
      attractiveLimitPm: maxR,
      scientificBasis: 'Potencial anarmónico de Morse calibrado con constantes espectroscópicas experimentales (NIST).',
    };
  }

  /**
   * Genera el potencial de Lennard-Jones 12-6 para interacciones de Van der Waals / no enlazantes.
   * V(r) = 4 * epsilon * [ (sigma / r)^12 - (sigma / r)^6 ]
   */
  public static generateLennardJonesCurve(
    pairName: string,
    sigmaPm: number,
    epsilonKjMol: number
  ): BondEnergyCurve {
    const points: PotentialEnergyPoint[] = [];
    const minR = Math.max(10, Math.round(sigmaPm * 0.85));
    const maxR = Math.round(sigmaPm * 3.0);
    const step = (maxR - minR) / 100;
    const rePm = parseFloat((sigmaPm * Math.pow(2, 1 / 6)).toFixed(1)); // r_min = 2^(1/6) * sigma

    for (let r = minR; r <= maxR; r += step) {
      const sOverR = sigmaPm / r;
      const sr6 = Math.pow(sOverR, 6);
      const sr12 = Math.pow(sr6, 2);
      const v = 4 * epsilonKjMol * (sr12 - sr6);
      const clampedV = Math.min(epsilonKjMol * 4, v);

      points.push({
        internuclearDistancePm: parseFloat(r.toFixed(1)),
        potentialEnergyKjMol: parseFloat(clampedV.toFixed(2)),
      });
    }

    return {
      bondName: pairName,
      equilibriumDistancePm: rePm,
      dissociationEnergyKjMol: epsilonKjMol,
      curveType: 'Lennard-Jones',
      points,
      repulsiveLimitPm: minR,
      attractiveLimitPm: maxR,
      scientificBasis: 'Potencial de Lennard-Jones 12-6 para fuerzas dispersivas y repulsión de Pauli.',
    };
  }

  /**
   * Catálogo de curvas de energía potencial estándar calibradas.
   */
  public static getStandardCurves(): Record<string, BondEnergyCurve> {
    return {
      'H-H': this.generateMorseCurve('Enlace H-H (H2)', 74.1, 436.0, 0.024),
      'O-H': this.generateMorseCurve('Enlace O-H (Agua)', 95.8, 463.0, 0.022),
      'C-H': this.generateMorseCurve('Enlace C-H (Metano)', 108.7, 413.0, 0.019),
      'C-C': this.generateMorseCurve('Enlace simple C-C', 154.0, 348.0, 0.018),
      'C=O': this.generateMorseCurve('Enlace doble C=O (CO2)', 116.3, 799.0, 0.023),
      'N#N': this.generateMorseCurve('Enlace triple N≡N (N2)', 109.8, 945.0, 0.027),
      'Ar-Ar': this.generateLennardJonesCurve('Argón-Argón (Van der Waals)', 340.0, 1.0),
    };
  }
}

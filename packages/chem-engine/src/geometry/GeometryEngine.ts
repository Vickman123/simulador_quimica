/**
 * Geometry Engine — Virtual Chemistry Lab (VCL)
 * Vickora Labs
 *
 * Simulación rigurosa de la teoría de Repulsión de Pares Electrónicos de la
 * Capa de Valencia (RPECV / VSEPR), notación AXE, ángulos de enlace
 * y síntesis de coordenadas espaciales 3D para renderizado molecular.
 */

import type { VSEPRGeometry } from '@vcl/shared';

export interface VSEPRPrediction {
  stericNumber: number; // SN = m + n
  bondedAtoms: number; // m
  lonePairs: number; // n
  axeNotation: string; // e.g. "AX2E2"
  electronGeometry: 'lineal' | 'trigonal-plana' | 'tetraédrica' | 'bipiramidal-trigonal' | 'octaédrica';
  molecularGeometry: VSEPRGeometry;
  geometryNameEs: string;
  idealAngleDegrees: number;
  actualAngleDegrees: number;
  symmetryGroup?: string;
  explanation: string;
}

export class GeometryEngine {
  /**
   * Predice la geometría VSEPR a partir del número de átomos enlazados (m) y pares libres (n).
   */
  public static predictVSEPR(bondedAtoms: number, lonePairs: number): VSEPRPrediction {
    const sn = bondedAtoms + lonePairs;
    const axe = `AX${bondedAtoms}${lonePairs > 0 ? `E${lonePairs}` : ''}`;

    if (sn === 2) {
      return {
        stericNumber: 2,
        bondedAtoms,
        lonePairs,
        axeNotation: axe,
        electronGeometry: 'lineal',
        molecularGeometry: 'linear',
        geometryNameEs: 'Lineal',
        idealAngleDegrees: 180,
        actualAngleDegrees: 180,
        symmetryGroup: 'D∞h',
        explanation: 'Dos dominios de electrones se orientan en direcciones opuestas a 180° para minimizar la repulsión coulómbica.',
      };
    }

    if (sn === 3) {
      if (lonePairs === 0) {
        return {
          stericNumber: 3,
          bondedAtoms: 3,
          lonePairs: 0,
          axeNotation: 'AX3',
          electronGeometry: 'trigonal-plana',
          molecularGeometry: 'trigonal-planar',
          geometryNameEs: 'Trigonal Plana',
          idealAngleDegrees: 120,
          actualAngleDegrees: 120,
          symmetryGroup: 'D3h',
          explanation: 'Tres dominios de electrones coplanares dirigidos hacia los vértices de un triángulo equilátero.',
        };
      }
      return {
        stericNumber: 3,
        bondedAtoms: 2,
        lonePairs: 1,
        axeNotation: 'AX2E1',
        electronGeometry: 'trigonal-plana',
        molecularGeometry: 'bent',
        geometryNameEs: 'Angular (120°)',
        idealAngleDegrees: 120,
        actualAngleDegrees: 119.0,
        symmetryGroup: 'C2v',
        explanation: 'El par solitario no enlazante ejerce mayor repulsión que los pares enlazantes, comprimiendo el ángulo ligeramente por debajo de 120°.',
      };
    }

    if (sn === 4) {
      if (lonePairs === 0) {
        return {
          stericNumber: 4,
          bondedAtoms: 4,
          lonePairs: 0,
          axeNotation: 'AX4',
          electronGeometry: 'tetraédrica',
          molecularGeometry: 'tetrahedral',
          geometryNameEs: 'Tetraédrica',
          idealAngleDegrees: 109.5,
          actualAngleDegrees: 109.5,
          symmetryGroup: 'Td',
          explanation: 'Cuatro dominios idénticos apuntan a los vértices de un tetraedro regular en 3D (ejemplo: CH4).',
        };
      }
      if (lonePairs === 1) {
        return {
          stericNumber: 4,
          bondedAtoms: 3,
          lonePairs: 1,
          axeNotation: 'AX3E1',
          electronGeometry: 'tetraédrica',
          molecularGeometry: 'trigonal-pyramidal',
          geometryNameEs: 'Trigonal Piramidal',
          idealAngleDegrees: 109.5,
          actualAngleDegrees: 107.3,
          symmetryGroup: 'C3v',
          explanation: 'Un par solitario apical comprime los tres enlaces basales hacia abajo hasta 107.3° (ejemplo: NH3).',
        };
      }
      return {
        stericNumber: 4,
        bondedAtoms: 2,
        lonePairs: 2,
        axeNotation: 'AX2E2',
        electronGeometry: 'tetraédrica',
        molecularGeometry: 'bent',
        geometryNameEs: 'Angular (Tetraédrica)',
        idealAngleDegrees: 109.5,
        actualAngleDegrees: 104.5,
        symmetryGroup: 'C2v',
        explanation: 'Dos pares solitarios no enlazantes deforman intensamente el tetraedro reduciendo el ángulo H-O-H a 104.5° (ejemplo: H2O).',
      };
    }

    if (sn === 5) {
      if (lonePairs === 0) {
        return {
          stericNumber: 5,
          bondedAtoms: 5,
          lonePairs: 0,
          axeNotation: 'AX5',
          electronGeometry: 'bipiramidal-trigonal',
          molecularGeometry: 'trigonal-bipyramidal',
          geometryNameEs: 'Bipiramidal Trigonal',
          idealAngleDegrees: 120, // 90° axial, 120° ecuatorial
          actualAngleDegrees: 120,
          symmetryGroup: 'D3h',
          explanation: 'Tres posiciones ecuatoriales a 120° y dos posiciones axiales a 90° respecto al plano ecuatorial (ejemplo: PCl5).',
        };
      }
      if (lonePairs === 1) {
        return {
          stericNumber: 5,
          bondedAtoms: 4,
          lonePairs: 1,
          axeNotation: 'AX4E1',
          electronGeometry: 'bipiramidal-trigonal',
          molecularGeometry: 'seesaw',
          geometryNameEs: 'Balancín (Seesaw)',
          idealAngleDegrees: 120,
          actualAngleDegrees: 102.0,
          symmetryGroup: 'C2v',
          explanation: 'El par solitario ocupa una posición ecuatorial para minimizar repulsiones a 90° con los ligandos axiales (ejemplo: SF4).',
        };
      }
      if (lonePairs === 2) {
        return {
          stericNumber: 5,
          bondedAtoms: 3,
          lonePairs: 2,
          axeNotation: 'AX3E2',
          electronGeometry: 'bipiramidal-trigonal',
          molecularGeometry: 't-shaped',
          geometryNameEs: 'Forma de T',
          idealAngleDegrees: 90,
          actualAngleDegrees: 87.5,
          symmetryGroup: 'C2v',
          explanation: 'Dos pares libres ocupan posiciones ecuatoriales, dejando tres enlaces que configuran una T (ejemplo: ClF3).',
        };
      }
      return {
        stericNumber: 5,
        bondedAtoms: 2,
        lonePairs: 3,
        axeNotation: 'AX2E3',
        electronGeometry: 'bipiramidal-trigonal',
        molecularGeometry: 'linear',
        geometryNameEs: 'Lineal (Bipiramidal)',
        idealAngleDegrees: 180,
        actualAngleDegrees: 180,
        symmetryGroup: 'D∞h',
        explanation: 'Los tres pares solitarios se disponen en el ecuador a 120° y los dos enlaces en posiciones axiales opuestas a 180° (ejemplo: XeF2).',
      };
    }

    if (sn === 6) {
      if (lonePairs === 0) {
        return {
          stericNumber: 6,
          bondedAtoms: 6,
          lonePairs: 0,
          axeNotation: 'AX6',
          electronGeometry: 'octaédrica',
          molecularGeometry: 'octahedral',
          geometryNameEs: 'Octaédrica',
          idealAngleDegrees: 90,
          actualAngleDegrees: 90,
          symmetryGroup: 'Oh',
          explanation: 'Seis ligandos orientados hacia los vértices de un octaedro regular con todos los ángulos a 90° (ejemplo: SF6).',
        };
      }
      if (lonePairs === 1) {
        return {
          stericNumber: 6,
          bondedAtoms: 5,
          lonePairs: 1,
          axeNotation: 'AX5E1',
          electronGeometry: 'octaédrica',
          molecularGeometry: 'square-pyramidal',
          geometryNameEs: 'Piramidal Cuadrada',
          idealAngleDegrees: 90,
          actualAngleDegrees: 84.8,
          symmetryGroup: 'C4v',
          explanation: 'Cinco enlaces forman una base cuadrada con un ligando apical y un par solitario opuesto (ejemplo: BrF5).',
        };
      }
      return {
        stericNumber: 6,
        bondedAtoms: 4,
        lonePairs: 2,
        axeNotation: 'AX4E2',
        electronGeometry: 'octaédrica',
        molecularGeometry: 'square-planar',
        geometryNameEs: 'Cuadrada Plana',
        idealAngleDegrees: 90,
        actualAngleDegrees: 90,
        symmetryGroup: 'D4h',
        explanation: 'Los dos pares solitarios se sitúan en posiciones trans (180° entre sí) para máxima separación, dejando 4 ligandos coplanares a 90° (ejemplo: XeF4).',
      };
    }

    return {
      stericNumber: sn,
      bondedAtoms,
      lonePairs,
      axeNotation: axe,
      electronGeometry: 'tetraédrica',
      molecularGeometry: 'unknown',
      geometryNameEs: 'Geometría Compleja',
      idealAngleDegrees: 109.5,
      actualAngleDegrees: 109.5,
      explanation: 'Geometría molecular con número estérico no estándar.',
    };
  }

  /**
   * Genera coordenadas 3D para átomos periféricos alrededor de un átomo central a partir de la geometría VSEPR.
   * Devuelve un arreglo de tuplas [x, y, z] en Ångströms centradas en [0, 0, 0].
   */
  public static generateCoordinates(
    geometry: VSEPRGeometry,
    bondLengthsAngstroms: number[]
  ): Array<[number, number, number]> {
    const coords: Array<[number, number, number]> = [];
    const count = bondLengthsAngstroms.length;
    const defaultR = bondLengthsAngstroms[0] ?? 1.1;

    switch (geometry) {
      case 'linear': {
        const r1 = bondLengthsAngstroms[0] ?? defaultR;
        const r2 = bondLengthsAngstroms[1] ?? defaultR;
        coords.push([-r1, 0, 0]);
        if (count > 1) coords.push([r2, 0, 0]);
        break;
      }

      case 'bent': {
        // En el plano XY con ángulo ~104.5° (para agua) o 120°
        const halfAngleRad = ((104.5 / 2) * Math.PI) / 180;
        const r1 = bondLengthsAngstroms[0] ?? defaultR;
        const r2 = bondLengthsAngstroms[1] ?? defaultR;
        coords.push([-r1 * Math.sin(halfAngleRad), r1 * Math.cos(halfAngleRad), 0]);
        coords.push([r2 * Math.sin(halfAngleRad), r2 * Math.cos(halfAngleRad), 0]);
        break;
      }

      case 'trigonal-planar': {
        for (let i = 0; i < count; i++) {
          const r = bondLengthsAngstroms[i] ?? defaultR;
          const theta = (i * 2 * Math.PI) / 3;
          coords.push([
            parseFloat((r * Math.cos(theta)).toFixed(3)),
            parseFloat((r * Math.sin(theta)).toFixed(3)),
            0,
          ]);
        }
        break;
      }

      case 'trigonal-pyramidal': {
        // Base a 120° en Z negativo, con ángulo de pirámide 107.3°
        const apicalAngleRad = (107.3 * Math.PI) / 180;
        const zComp = -Math.cos(apicalAngleRad / 2);
        const xyComp = Math.sin(apicalAngleRad / 2);

        for (let i = 0; i < count; i++) {
          const r = bondLengthsAngstroms[i] ?? defaultR;
          const theta = (i * 2 * Math.PI) / 3;
          coords.push([
            parseFloat((r * xyComp * Math.cos(theta)).toFixed(3)),
            parseFloat((r * xyComp * Math.sin(theta)).toFixed(3)),
            parseFloat((r * zComp).toFixed(3)),
          ]);
        }
        break;
      }

      case 'tetrahedral': {
        // Vértices de tetraedro regular inscritos en cubo unitario
        const invSqrt3 = 1 / Math.sqrt(3);
        const dirs: Array<[number, number, number]> = [
          [invSqrt3, invSqrt3, invSqrt3],
          [-invSqrt3, -invSqrt3, invSqrt3],
          [-invSqrt3, invSqrt3, -invSqrt3],
          [invSqrt3, -invSqrt3, -invSqrt3],
        ];

        for (let i = 0; i < count; i++) {
          const r = bondLengthsAngstroms[i] ?? defaultR;
          const dir = dirs[i % dirs.length];
          coords.push([
            parseFloat((dir[0] * r).toFixed(3)),
            parseFloat((dir[1] * r).toFixed(3)),
            parseFloat((dir[2] * r).toFixed(3)),
          ]);
        }
        break;
      }

      case 'octahedral': {
        // Seis direcciones a lo largo de los ejes cartesianos +/- X, +/- Y, +/- Z
        const dirs: Array<[number, number, number]> = [
          [1, 0, 0],
          [-1, 0, 0],
          [0, 1, 0],
          [0, -1, 0],
          [0, 0, 1],
          [0, 0, -1],
        ];

        for (let i = 0; i < count; i++) {
          const r = bondLengthsAngstroms[i] ?? defaultR;
          const dir = dirs[i % dirs.length];
          coords.push([dir[0] * r, dir[1] * r, dir[2] * r]);
        }
        break;
      }

      default: {
        // Disposición esférica uniforme de Fibonacci para geometrías arbitrarias
        const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle
        for (let i = 0; i < count; i++) {
          const r = bondLengthsAngstroms[i] ?? defaultR;
          const y = 1 - (i / (count - 1 || 1)) * 2;
          const radiusAtY = Math.sqrt(1 - y * y);
          const theta = phi * i;
          const x = Math.cos(theta) * radiusAtY;
          const z = Math.sin(theta) * radiusAtY;
          coords.push([
            parseFloat((x * r).toFixed(3)),
            parseFloat((y * r).toFixed(3)),
            parseFloat((z * r).toFixed(3)),
          ]);
        }
        break;
      }
    }

    return coords;
  }
}

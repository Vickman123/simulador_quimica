/**
 * Bond Engine — Virtual Chemistry Lab (VCL)
 * Vickora Labs
 *
 * Simulación y análisis de enlaces químicos,
 * escala de electronegatividad de Pauling, polaridad, cargas parciales,
 * estructuras de Lewis, orden de enlace y fuerzas intermoleculares.
 */

import { ELEMENTS_BY_SYMBOL, ELEMENTS_BY_Z } from '../data/elements.js';
import type { ElementData, BondType } from '@vcl/shared';

export interface BondAnalysis {
  elementA: ElementData;
  elementB: ElementData;
  electronegativityA: number;
  electronegativityB: number;
  deltaChi: number; // |chiA - chiB|
  bondType: BondType;
  percentIonicCharacter: number; // % según Pauling
  partialChargeA: number; // en unidades de carga elemental e
  partialChargeB: number;
  moreElectronegative: 'A' | 'B' | 'equal';
  typicalBondLengthAngstroms: number;
  typicalDissociationEnergyKjMol: number;
  electronicMechanism: string;
  pedagogicalSummary: string;
}

export interface LewisAtomState {
  symbol: string;
  valenceElectrons: number;
  bondingElectrons: number;
  lonePairElectrons: number;
  lonePairs: number;
  formalCharge: number;
  satisfiesOctet: boolean;
  octetException?: 'duet' | 'sub-octet' | 'expanded-octet' | 'none';
}

export class BondEngine {
  /**
   * Analiza el enlace formado entre dos elementos químicos.
   */
  public static analyzeBond(
    elementAInput: string | number | ElementData,
    elementBInput: string | number | ElementData,
    order: 1 | 2 | 3 = 1
  ): BondAnalysis {
    const elA = this.resolveElement(elementAInput);
    const elB = this.resolveElement(elementBInput);

    const chiA = elA.electronegativityPauling ?? 2.1;
    const chiB = elB.electronegativityPauling ?? 2.1;
    const deltaChi = parseFloat(Math.abs(chiA - chiB).toFixed(2));

    // Carácter iónico porcentual de Pauling: % = 100 * (1 - exp(-0.25 * deltaChi^2))
    const percentIonicCharacter = parseFloat(
      (100 * (1 - Math.exp(-0.25 * Math.pow(deltaChi, 2)))).toFixed(1)
    );

    // Detección de enlace metálico si ambos son metales
    const isMetalA = ['alkali-metal', 'alkaline-earth', 'transition-metal', 'post-transition-metal', 'lanthanide', 'actinide'].includes(elA.category);
    const isMetalB = ['alkali-metal', 'alkaline-earth', 'transition-metal', 'post-transition-metal', 'lanthanide', 'actinide'].includes(elB.category);

    let bondType: BondType;
    let electronicMechanism = '';

    if (isMetalA && isMetalB) {
      bondType = 'metallic';
      electronicMechanism =
        'Los cationes metálicos comparten una nube deslocalizada de electrones de valencia ("mar de electrones"), otorgando alta conductividad y maleabilidad.';
    } else if (deltaChi >= 1.7 || (isMetalA !== isMetalB && deltaChi >= 1.5)) {
      bondType = 'ionic';
      electronicMechanism =
        'Transferencia neta de electrones desde el átomo electropositivo hacia el átomo electronegativo, creando atracción electrostática pura según la ley de Coulomb.';
    } else if (deltaChi >= 0.4) {
      bondType = 'covalent-polar';
      electronicMechanism =
        'Compartición asimétrica de electrones. La densidad electrónica se deforma hacia el núcleo con mayor electronegatividad, originando un dipolo eléctrico permanente.';
    } else {
      bondType = 'covalent-nonpolar';
      electronicMechanism =
        'Compartición equitativa y simétrica de electrones entre ambos átomos, con densidad electrónica centrada en el eje internuclear.';
    }

    // Cargas parciales normalizadas (fracción de la carga del electrón)
    const partialMag = parseFloat((percentIonicCharacter / 100).toFixed(2));
    let partialChargeA = 0;
    let partialChargeB = 0;
    let moreElectronegative: 'A' | 'B' | 'equal' = 'equal';

    if (chiA > chiB) {
      partialChargeA = -partialMag;
      partialChargeB = +partialMag;
      moreElectronegative = 'A';
    } else if (chiB > chiA) {
      partialChargeA = +partialMag;
      partialChargeB = -partialMag;
      moreElectronegative = 'B';
    }

    // Longitud de enlace aproximada (suma de radios covalentes en Angstroms, reducida por orden de enlace)
    const rA = (elA.atomicRadiusCovalent ?? 100) / 100; // Å
    const rB = (elB.atomicRadiusCovalent ?? 100) / 100; // Å
    const contractionFactor = order === 3 ? 0.78 : order === 2 ? 0.88 : 1.0;
    const typicalBondLength = parseFloat(((rA + rB) * contractionFactor).toFixed(3));

    // Energía de enlace aproximada promedio en kJ/mol
    const baseEnergy = 380 * order;
    const ionicBonus = deltaChi * 45;
    const typicalDissociationEnergy = Math.round(baseEnergy + ionicBonus);

    const pedagogicalSummary =
      `Entre ${elA.name} (χ=${chiA}) y ${elB.name} (χ=${chiB}), la diferencia de electronegatividad es Δχ = ${deltaChi}. ` +
      `Esto define un ${bondType.replace('-', ' ')} con ${percentIonicCharacter}% de carácter iónico.`;

    return {
      elementA: elA,
      elementB: elB,
      electronegativityA: chiA,
      electronegativityB: chiB,
      deltaChi,
      bondType,
      percentIonicCharacter,
      partialChargeA,
      partialChargeB,
      moreElectronegative,
      typicalBondLengthAngstroms: typicalBondLength,
      typicalDissociationEnergyKjMol: typicalDissociationEnergy,
      electronicMechanism,
      pedagogicalSummary,
    };
  }

  /**
   * Evalúa el estado de Lewis y la regla del octeto para un átomo en una molécula.
   */
  public static evaluateLewisOctet(
    symbol: string,
    bondingElectrons: number,
    lonePairElectrons: number
  ): LewisAtomState {
    const element = this.resolveElement(symbol);
    const valenceElectrons = element.valenceElectrons;

    // Carga formal = V - N_libres - 1/2(N_enlazantes)
    const formalCharge = valenceElectrons - lonePairElectrons - bondingElectrons / 2;
    const totalElectronsSurrounding = bondingElectrons + lonePairElectrons;

    let satisfiesOctet = false;
    let octetException: 'duet' | 'sub-octet' | 'expanded-octet' | 'none' = 'none';

    if (element.atomicNumber === 1 || element.atomicNumber === 2) {
      // Hidrógeno y Helio siguen la regla del dueto (2 electrones, capa 1s llena)
      satisfiesOctet = totalElectronsSurrounding === 2;
      octetException = 'duet';
    } else if (['B', 'Be'].includes(symbol) && totalElectronsSurrounding < 8) {
      // Boro (6 e-) y Berilio (4 e-) son deficientes en electrones (sub-octeto)
      satisfiesOctet = true;
      octetException = 'sub-octet';
    } else if (totalElectronsSurrounding === 8) {
      // Octeto regular completo
      satisfiesOctet = true;
      octetException = 'none';
    } else if (totalElectronsSurrounding > 8 && element.period >= 3) {
      // Octeto expandido posible a partir del periodo 3 (disponibilidad de orbitales d)
      satisfiesOctet = true;
      octetException = 'expanded-octet';
    } else {
      satisfiesOctet = false;
      octetException = 'sub-octet';
    }

    return {
      symbol,
      valenceElectrons,
      bondingElectrons,
      lonePairElectrons,
      lonePairs: Math.floor(lonePairElectrons / 2),
      formalCharge,
      satisfiesOctet,
      octetException,
    };
  }

  /**
   * Clasifica las fuerzas intermoleculares presentes entre especies químicas.
   */
  public static classifyIntermolecularForces(
    moleculeFormula: string,
    isPolar: boolean,
    hasHydrogenBondDonor: boolean
  ): Array<{ name: string; relativeStrength: 'muy fuerte' | 'fuerte' | 'moderada' | 'débil'; description: string }> {
    const forces: Array<{ name: string; relativeStrength: 'muy fuerte' | 'fuerte' | 'moderada' | 'débil'; description: string }> = [];

    // 1. Puentes de hidrógeno
    if (hasHydrogenBondDonor) {
      forces.push({
        name: 'Puente de hidrógeno',
        relativeStrength: 'muy fuerte',
        description: 'Interacción electrostática dirigida entre un átomo de H unido a F, O o N y el par de electrones libre de otro átomo electronegativo.',
      });
    }

    // 2. Dipolo-Dipolo
    if (isPolar) {
      forces.push({
        name: 'Fuerzas dipolo-dipolo (Keesom)',
        relativeStrength: 'fuerte',
        description: 'Atracción entre los dipolos moleculares permanentes de moléculas polares contiguas.',
      });
    }

    // 3. Fuerzas de dispersión de London (Universales)
    forces.push({
      name: 'Fuerzas de dispersión de London',
      relativeStrength: isPolar ? 'moderada' : 'débil',
      description: 'Atracciones electrostáticas transitorias generadas por fluctuaciones cuánticas instantáneas en la nube electrónica que inducen dipolos temporales en moléculas vecinas.',
    });

    return forces;
  }

  private static resolveElement(input: string | number | ElementData): ElementData {
    if (typeof input === 'object' && 'symbol' in input) return input;
    if (typeof input === 'number') {
      const el = ELEMENTS_BY_Z[input];
      if (el) return el;
    }
    if (typeof input === 'string') {
      const el = ELEMENTS_BY_SYMBOL[input];
      if (el) return el;
    }
    throw new Error(`[BondEngine] Elemento no identificado: ${input}`);
  }
}

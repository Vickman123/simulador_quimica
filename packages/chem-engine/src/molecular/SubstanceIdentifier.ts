/**
 * Substance Identifier & Compound Knowledge Base
 * Virtual Chemistry Lab (VCL) — Vickora Labs
 *
 * Motor de reconocimiento de entidades químicas, resolución de nomenclatura
 * IUPAC y tradicional, validación de enlaces (octeto/valencia) y datos termodinámicos.
 */

import type { MoleculeGraph, VSEPRGeometry } from '@vcl/shared';
import { ELEMENTS_BY_SYMBOL } from '../data/elements.js';

export interface SubstanceInfo {
  formula: string;
  name: string;
  iupacName: string;
  commonName: string;
  family: string;
  stateAt25C: 'Gas' | 'Líquido' | 'Sólido' | 'Acuoso' | string;
  vseprGeometry: VSEPRGeometry;
  bondAngles: string;
  dipoleMoment: string;
  description: string;
  recommendedBonds?: Array<{
    atomASymbol: string;
    atomBSymbol: string;
    order: 1 | 2 | 3;
  }>;
}

export const KNOWN_SUBSTANCES: Record<string, SubstanceInfo> = {
  // --- Moléculas Clave de Bachillerato y Universidad ---
  CO2: {
    formula: 'CO2',
    name: 'Dióxido de Carbono',
    iupacName: 'Dióxido de carbono',
    commonName: 'Anhídrido carbónico / Gas carbónico',
    family: 'Óxido no metálico (Anhídrido)',
    stateAt25C: 'Gas',
    vseprGeometry: 'linear',
    bondAngles: '180.0°',
    dipoleMoment: '0.0 D (Apolar por simetría)',
    description:
      'Gas incoloro fundamental para la fotosíntesis y el ciclo del carbono. El átomo central de carbono forma dos enlaces dobles covalentes con cada oxígeno (O=C=O). Al carecer de pares de electrones libres en el carbono (AX₂), la repulsión de pares electrónicos genera una geometría perfectamente lineal a 180°.',
    recommendedBonds: [
      { atomASymbol: 'C', atomBSymbol: 'O', order: 2 },
      { atomASymbol: 'C', atomBSymbol: 'O', order: 2 },
    ],
  },
  H2O: {
    formula: 'H2O',
    name: 'Agua',
    iupacName: 'Oxidano',
    commonName: 'Agua destilada / Solvente universal',
    family: 'Hidruro no metálico / Óxido de hidrógeno',
    stateAt25C: 'Líquido',
    vseprGeometry: 'bent',
    bondAngles: '104.5°',
    dipoleMoment: '1.85 D (Fuertemente Polar)',
    description:
      'Solvente universal indispensable para los sistemas biológicos. El oxígeno central cuenta con 2 pares enlazantes con hidrógeno y 2 pares de electrones solitarios (AX₂E₂). La fuerte repulsión de los pares libres comprime el ángulo tetraédrico de 109.5° hasta 104.5°, otorgándole un momento dipolar elevado.',
    recommendedBonds: [
      { atomASymbol: 'O', atomBSymbol: 'H', order: 1 },
      { atomASymbol: 'O', atomBSymbol: 'H', order: 1 },
    ],
  },
  CH4: {
    formula: 'CH4',
    name: 'Metano',
    iupacName: 'Metano',
    commonName: 'Gas natural / Gas de los pantanos',
    family: 'Alcano (Hidrocarburo saturado)',
    stateAt25C: 'Gas',
    vseprGeometry: 'tetrahedral',
    bondAngles: '109.5°',
    dipoleMoment: '0.0 D (Apolar)',
    description:
      'Hidrocarburo más simple de la química orgánica. El carbono central cuenta con hibridación sp³ y 4 pares enlazantes equivalentes (AX₄). La repulsión uniforme orienta los 4 átomos de hidrógeno hacia los vértices de un tetraedro regular con ángulos exactos de 109.5°.',
    recommendedBonds: [
      { atomASymbol: 'C', atomBSymbol: 'H', order: 1 },
      { atomASymbol: 'C', atomBSymbol: 'H', order: 1 },
      { atomASymbol: 'C', atomBSymbol: 'H', order: 1 },
      { atomASymbol: 'C', atomBSymbol: 'H', order: 1 },
    ],
  },
  NH3: {
    formula: 'NH3',
    name: 'Amoníaco',
    iupacName: 'Azano',
    commonName: 'Gas amoníaco',
    family: 'Hidruro no metálico / Base de Lewis',
    stateAt25C: 'Gas',
    vseprGeometry: 'trigonal-pyramidal',
    bondAngles: '107.0°',
    dipoleMoment: '1.47 D (Polar)',
    description:
      'Compuesto nitrogenado de olor penetrante vital en la producción de fertilizantes (Proceso Haber-Bosch). Posee 3 enlaces simples N-H y 1 par de electrones solitario en el nitrógeno (AX₃E₁), que comprime el ángulo tetraédrico a 107° formando una pirámide trigonal.',
    recommendedBonds: [
      { atomASymbol: 'N', atomBSymbol: 'H', order: 1 },
      { atomASymbol: 'N', atomBSymbol: 'H', order: 1 },
      { atomASymbol: 'N', atomBSymbol: 'H', order: 1 },
    ],
  },
  O2: {
    formula: 'O2',
    name: 'Oxígeno Molecular',
    iupacName: 'Dioxígeno',
    commonName: 'Oxígeno gas',
    family: 'Elemento diatómico',
    stateAt25C: 'Gas',
    vseprGeometry: 'linear',
    bondAngles: '180.0°',
    dipoleMoment: '0.0 D (Apolar)',
    description:
      'Gas diatómico esencial para la respiración celular aeróbica. Los dos átomos de oxígeno comparten 4 electrones formando un enlace covalente doble (O=O), completando cada uno la regla del octeto con dos pares libres periféricos.',
    recommendedBonds: [{ atomASymbol: 'O', atomBSymbol: 'O', order: 2 }],
  },
  N2: {
    formula: 'N2',
    name: 'Nitrógeno Molecular',
    iupacName: 'Dinitrógeno',
    commonName: 'Nitrógeno gas',
    family: 'Elemento diatómico inerte',
    stateAt25C: 'Gas',
    vseprGeometry: 'linear',
    bondAngles: '180.0°',
    dipoleMoment: '0.0 D (Apolar)',
    description:
      'Constituye el 78% de la atmósfera terrestre. La unión de los dos átomos de nitrógeno se realiza mediante un enlace covalente triple (N≡N) de enorme energía de disociación (945 kJ/mol), lo que le confiere una inercia química excepcional a temperatura ambiente.',
    recommendedBonds: [{ atomASymbol: 'N', atomBSymbol: 'N', order: 3 }],
  },
  H2: {
    formula: 'H2',
    name: 'Hidrógeno Molecular',
    iupacName: 'Dihidrógeno',
    commonName: 'Gas hidrógeno',
    family: 'Elemento diatómico / Combustible limpio',
    stateAt25C: 'Gas',
    vseprGeometry: 'linear',
    bondAngles: '180.0°',
    dipoleMoment: '0.0 D (Apolar)',
    description:
      'El elemento más abundante y ligero del universo. Dos núcleos de hidrógeno comparten su único electrón 1s en un enlace covalente simple sigma, satisfaciendo la regla del dueto.',
    recommendedBonds: [{ atomASymbol: 'H', atomBSymbol: 'H', order: 1 }],
  },
  HCl: {
    formula: 'ClH', // Hill notation: Cl first or H first (if no carbon: alphabetical Cl, H)
    name: 'Cloruro de Hidrógeno',
    iupacName: 'Clorano / Cloruro de hidrógeno',
    commonName: 'Ácido clorhídrico (en disolución acuosa)',
    family: 'Haluro de hidrógeno / Ácido hidrácido',
    stateAt25C: 'Gas',
    vseprGeometry: 'linear',
    bondAngles: '180.0°',
    dipoleMoment: '1.08 D (Polar)',
    description:
      'Gas diatómico incoloro con enlace covalente fuertemente polarizado hacia el átomo de cloro debido a su alta electronegatividad (3.16 frente a 2.20 de H). En agua se ioniza al 100% como ácido fuerte.',
    recommendedBonds: [{ atomASymbol: 'H', atomBSymbol: 'Cl', order: 1 }],
  },
  HCl_alt: {
    formula: 'HCl',
    name: 'Cloruro de Hidrógeno',
    iupacName: 'Clorano',
    commonName: 'Ácido clorhídrico',
    family: 'Haluro de hidrógeno',
    stateAt25C: 'Gas',
    vseprGeometry: 'linear',
    bondAngles: '180.0°',
    dipoleMoment: '1.08 D (Polar)',
    description:
      'Enlace covalente polar entre H y Cl. Altamente soluble en agua donde forma ácido clorhídrico.',
    recommendedBonds: [{ atomASymbol: 'H', atomBSymbol: 'Cl', order: 1 }],
  },
  Cl2: {
    formula: 'Cl2',
    name: 'Cloro Molecular',
    iupacName: 'Dicloro',
    commonName: 'Gas cloro',
    family: 'Halógeno diatómico',
    stateAt25C: 'Gas',
    vseprGeometry: 'linear',
    bondAngles: '180.0°',
    dipoleMoment: '0.0 D (Apolar)',
    description: 'Gas amarillo verdoso sofocante con enlace covalente simple Cl-Cl.',
  },
  NaCl: {
    formula: 'ClNa',
    name: 'Cloruro de Sodio',
    iupacName: 'Cloruro de sodio',
    commonName: 'Sal común / Halita',
    family: 'Sal binaria iónica',
    stateAt25C: 'Sólido',
    vseprGeometry: 'linear',
    bondAngles: '180.0°',
    dipoleMoment: '9.0 D (Enlace iónico)',
    description:
      'Compuesto iónico paradigmático. La transferencia completa de un electrón del catión Na⁺ al anión Cl⁻ genera una red cristalina cúbica de coordinación 6:6 con alta energía de red electrostática.',
    recommendedBonds: [{ atomASymbol: 'Na', atomBSymbol: 'Cl', order: 1 }],
  },
  NaCl_alt: {
    formula: 'NaCl',
    name: 'Cloruro de Sodio',
    iupacName: 'Cloruro de sodio',
    commonName: 'Sal común',
    family: 'Sal iónica',
    stateAt25C: 'Sólido',
    vseprGeometry: 'linear',
    bondAngles: '180.0°',
    dipoleMoment: '9.0 D',
    description: 'Enlace iónico por atracción electrostática entre Na⁺ y Cl⁻.',
  },
  CO: {
    formula: 'CO',
    name: 'Monóxido de Carbono',
    iupacName: 'Monóxido de carbono',
    commonName: 'Gas de combustión incompleta',
    family: 'Óxido de carbono',
    stateAt25C: 'Gas',
    vseprGeometry: 'linear',
    bondAngles: '180.0°',
    dipoleMoment: '0.12 D',
    description:
      'Gas tóxico que se une con afinidad 200 veces superior a la hemoglobina. Posee un enlace triple C≡O donde uno de los enlaces es covalente coordinado (dativo) del oxígeno al carbono.',
    recommendedBonds: [{ atomASymbol: 'C', atomBSymbol: 'O', order: 3 }],
  },
  C2H6: {
    formula: 'C2H6',
    name: 'Etano',
    iupacName: 'Etano',
    commonName: 'Gas etano',
    family: 'Alcano',
    stateAt25C: 'Gas',
    vseprGeometry: 'tetrahedral',
    bondAngles: '109.5°',
    dipoleMoment: '0.0 D',
    description: 'Hidrocarburo con enlace simple C-C y conformación alternada de mínima energía.',
  },
  C2H4: {
    formula: 'C2H4',
    name: 'Eteno (Etileno)',
    iupacName: 'Eteno',
    commonName: 'Etileno (hormona vegetal de maduración)',
    family: 'Alqueno',
    stateAt25C: 'Gas',
    vseprGeometry: 'trigonal-planar',
    bondAngles: '120.0°',
    dipoleMoment: '0.0 D',
    description:
      'Posee un doble enlace carbono-carbono (uno sigma sp²-sp² y uno pi por solapamiento de orbitales 2p puros), confiriéndole geometría plana y alta reactividad en polimerización.',
    recommendedBonds: [
      { atomASymbol: 'C', atomBSymbol: 'C', order: 2 },
      { atomASymbol: 'C', atomBSymbol: 'H', order: 1 },
    ],
  },
  C2H2: {
    formula: 'C2H2',
    name: 'Etino (Acetileno)',
    iupacName: 'Etino',
    commonName: 'Gas acetileno de soldadura',
    family: 'Alquino',
    stateAt25C: 'Gas',
    vseprGeometry: 'linear',
    bondAngles: '180.0°',
    dipoleMoment: '0.0 D',
    description:
      'Alquino con enlace triple C≡C lineal (hibridación sp en los carbonos). Produce llamas de más de 3000°C en combustión oxiacetilénica.',
    recommendedBonds: [
      { atomASymbol: 'C', atomBSymbol: 'C', order: 3 },
      { atomASymbol: 'C', atomBSymbol: 'H', order: 1 },
    ],
  },
  C2H6O: {
    formula: 'C2H6O',
    name: 'Etanol',
    iupacName: 'Etanol',
    commonName: 'Alcohol etílico',
    family: 'Alcohol primario',
    stateAt25C: 'Líquido',
    vseprGeometry: 'tetrahedral',
    bondAngles: '109.5° (C) / 104.5° (O)',
    dipoleMoment: '1.69 D',
    description:
      'Compuesto orgánico oxigenado con grupo hidroxilo (-OH) capaz de formar puentes de hidrógeno intermoleculares que elevan su punto de ebullición a 78.4°C.',
  },
  CH4O: {
    formula: 'CH4O',
    name: 'Metanol',
    iupacName: 'Metanol',
    commonName: 'Alcohol metílico / Alcohol de madera',
    family: 'Alcohol primario',
    stateAt25C: 'Líquido',
    vseprGeometry: 'tetrahedral',
    bondAngles: '108.9°',
    dipoleMoment: '1.70 D',
    description: 'Alcohol de un solo carbono, altamente tóxico que puede causar ceguera por oxidación a formaldehído.',
  },
  H2O2: {
    formula: 'H2O2',
    name: 'Peróxido de Hidrógeno',
    iupacName: 'Dióxido de dihidrógeno',
    commonName: 'Agua oxigenada',
    family: 'Peróxido inorgánico',
    stateAt25C: 'Líquido',
    vseprGeometry: 'bent',
    bondAngles: '94.8° / 111.5° (torsión)',
    dipoleMoment: '2.26 D',
    description:
      'Agente oxidante enérgico con enlace peroxo débil (O-O) susceptible a descomposición catalítica exotérmica en agua y dioxígeno.',
  },
  SO2: {
    formula: 'O2S',
    name: 'Dióxido de Azufre',
    iupacName: 'Dióxido de azufre',
    commonName: 'Gas sulfuroso',
    family: 'Óxido no metálico',
    stateAt25C: 'Gas',
    vseprGeometry: 'bent',
    bondAngles: '119.0°',
    dipoleMoment: '1.63 D',
    description:
      'Gas emitido por volcanes y combustión de carbón. El azufre central tiene 1 par solitario (AX₂E₁), resultando en geometría angular a ~119° y comportamiento polar.',
  },
  SO3: {
    formula: 'O3S',
    name: 'Trióxido de Azufre',
    iupacName: 'Trióxido de azufre',
    commonName: 'Anhídrido sulfúrico',
    family: 'Óxido no metálico / Precursor del ácido sulfúrico',
    stateAt25C: 'Líquido / Gas',
    vseprGeometry: 'trigonal-planar',
    bondAngles: '120.0°',
    dipoleMoment: '0.0 D',
    description:
      'El azufre central cuenta con 3 centros de carga sin pares libres (AX₃). Geometría trigonal plana de simetría D3h apolar.',
  },
  O3: {
    formula: 'O3',
    name: 'Ozono',
    iupacName: 'Trioxígeno',
    commonName: 'Ozono estratosférico',
    family: 'Alótropo de oxígeno',
    stateAt25C: 'Gas',
    vseprGeometry: 'bent',
    bondAngles: '116.8°',
    dipoleMoment: '0.53 D',
    description:
      'Escudo atmosférico contra radiación ultravioleta UV-B. El oxígeno central cuenta con un par de electrones solitario (AX₂E₁), produciendo geometría angular y enlace deslocalizado por resonancia.',
  },
  BF3: {
    formula: 'BF3',
    name: 'Trifluoruro de Boro',
    iupacName: 'Trifluoroborano',
    commonName: 'Trifluoruro de boro',
    family: 'Haluro de boro / Ácido de Lewis',
    stateAt25C: 'Gas',
    vseprGeometry: 'trigonal-planar',
    bondAngles: '120.0°',
    dipoleMoment: '0.0 D',
    description:
      'Ejemplo clásico de octeto incompleto (6 electrones de valencia en el Boro). Geometría trigonal plana perfecta a 120° y avidez electrofílica como aceptor de pares de electrones.',
  },
  SF6: {
    formula: 'F6S',
    name: 'Hexafluoruro de Azufre',
    iupacName: 'Hexafluoro-λ⁶-sulfano',
    commonName: 'Gas aislante dieléctrico SF6',
    family: 'Fluoruro inorgánico / Octeto expandido',
    stateAt25C: 'Gas',
    vseprGeometry: 'octahedral',
    bondAngles: '90.0° / 180.0°',
    dipoleMoment: '0.0 D',
    description:
      'Octeto expandido de 12 electrones alrededor del azufre central (hibridación sp³d² o modelo hipervalente). Geometría octaédrica perfecta de extraordinaria estabilidad térmica y química.',
  },
  PCl5: {
    formula: 'Cl5P',
    name: 'Pentacloruro de Fósforo',
    iupacName: 'Pentacloro-λ⁵-fosfano',
    commonName: 'Pentacloruro de fósforo',
    family: 'Haluro de fósforo / Hipervalente',
    stateAt25C: 'Sólido',
    vseprGeometry: 'trigonal-bipyramidal',
    bondAngles: '120° (ecuatorial) / 90° (axial)',
    dipoleMoment: '0.0 D',
    description:
      'Geometría bipiramidal trigonal (AX₅). Los 3 enlaces ecuatoriales forman ángulos de 120° y los 2 axiales forman ángulos de 90° respecto al plano ecuatorial.',
  },
  HCN: {
    formula: 'CHN',
    name: 'Cianuro de Hidrógeno',
    iupacName: 'Cianuro de hidrógeno / Formonitrilo',
    commonName: 'Ácido prúsico',
    family: 'Nitrilo inorgánico',
    stateAt25C: 'Gas / Líquido volátil',
    vseprGeometry: 'linear',
    bondAngles: '180.0°',
    dipoleMoment: '2.98 D',
    description:
      'Molécula lineal H-C≡N con hibridación sp en el carbono. Enlace triple C≡N polar y gran momento dipolar.',
  },
};

export class SubstanceIdentifier {
  /**
   * Identifica una molécula según su fórmula y estructura gráfica.
   */
  public static identify(molecule: MoleculeGraph): SubstanceInfo {
    const rawFormula = molecule.formula?.trim();

    // 1. Coincidencia directa por clave
    if (KNOWN_SUBSTANCES[rawFormula]) {
      return KNOWN_SUBSTANCES[rawFormula];
    }

    // 2. Normalización de fórmulas equivalentes (ej: CO2, H2O, CH4, etc.)
    const normalizedKey = this.normalizeFormulaKey(molecule);
    if (KNOWN_SUBSTANCES[normalizedKey]) {
      return KNOWN_SUBSTANCES[normalizedKey];
    }

    // 3. Chequeo de formas elementales puras (H2, O2, N2, Cl2, etc.)
    if (molecule.atoms.length === 2 && molecule.atoms[0].symbol === molecule.atoms[1].symbol) {
      const sym = molecule.atoms[0].symbol;
      const key = `${sym}2`;
      if (KNOWN_SUBSTANCES[key]) {
        return KNOWN_SUBSTANCES[key];
      }
    }

    // 4. Si tiene 0 átomos
    if (molecule.atoms.length === 0) {
      return {
        formula: '—',
        name: 'Mesa de Trabajo Vacía',
        iupacName: 'Sin átomos presentes',
        commonName: 'Espacio de síntesis listo para añadir elementos',
        family: 'Área de Trabajo',
        stateAt25C: 'Gas',
        vseprGeometry: 'unknown',
        bondAngles: '—',
        dipoleMoment: '—',
        description:
          'Utiliza la paleta de elementos a la izquierda o selecciona una sustancia preestablecida para comenzar a construir y examinar estructuras moleculares en 3D.',
      };
    }

    // 5. Inferencia sistemática inteligente para cualquier compuesto nuevo o fragmento
    return this.generateSystematicInfo(molecule);
  }

  /**
   * Normaliza la clave de fórmula para encontrar variaciones comunes (ej: ClH -> HCl).
   */
  private static normalizeFormulaKey(molecule: MoleculeGraph): string {
    const counts: Record<string, number> = {};
    for (const a of molecule.atoms) {
      counts[a.symbol] = (counts[a.symbol] || 0) + 1;
    }

    // Buscar variaciones específicas
    if (counts['C'] === 1 && counts['O'] === 2 && Object.keys(counts).length === 2) return 'CO2';
    if (counts['H'] === 2 && counts['O'] === 1 && Object.keys(counts).length === 2) return 'H2O';
    if (counts['C'] === 1 && counts['H'] === 4 && Object.keys(counts).length === 2) return 'CH4';
    if (counts['N'] === 1 && counts['H'] === 3 && Object.keys(counts).length === 2) return 'NH3';
    if (counts['H'] === 1 && counts['Cl'] === 1 && Object.keys(counts).length === 2) return 'HCl';
    if (counts['Na'] === 1 && counts['Cl'] === 1 && Object.keys(counts).length === 2) return 'NaCl';
    if (counts['C'] === 1 && counts['O'] === 1 && Object.keys(counts).length === 2) return 'CO';
    if (counts['C'] === 2 && counts['H'] === 4 && Object.keys(counts).length === 2) return 'C2H4';
    if (counts['C'] === 2 && counts['H'] === 2 && Object.keys(counts).length === 2) return 'C2H2';
    if (counts['C'] === 2 && counts['H'] === 6 && Object.keys(counts).length === 2) return 'C2H6';
    if (counts['C'] === 2 && counts['H'] === 6 && counts['O'] === 1 && Object.keys(counts).length === 3) return 'C2H6O';
    if (counts['H'] === 2 && counts['O'] === 2 && Object.keys(counts).length === 2) return 'H2O2';
    if (counts['S'] === 1 && counts['O'] === 2 && Object.keys(counts).length === 2) return 'SO2';
    if (counts['S'] === 1 && counts['O'] === 3 && Object.keys(counts).length === 2) return 'SO3';
    if (counts['O'] === 3 && Object.keys(counts).length === 1) return 'O3';
    if (counts['B'] === 1 && counts['F'] === 3 && Object.keys(counts).length === 2) return 'BF3';
    if (counts['S'] === 1 && counts['F'] === 6 && Object.keys(counts).length === 2) return 'SF6';
    if (counts['P'] === 1 && counts['Cl'] === 5 && Object.keys(counts).length === 2) return 'PCl5';
    if (counts['C'] === 1 && counts['H'] === 1 && counts['N'] === 1 && Object.keys(counts).length === 3) return 'HCN';

    return molecule.formula;
  }

  /**
   * Genera información sistemática para cualquier estructura personalizada.
   */
  private static generateSystematicInfo(molecule: MoleculeGraph): SubstanceInfo {
    const counts: Record<string, number> = {};
    for (const a of molecule.atoms) {
      counts[a.symbol] = (counts[a.symbol] || 0) + 1;
    }

    const elementsPresent = Object.keys(counts);

    // Si es un átomo aislado
    if (molecule.atoms.length === 1) {
      const a = molecule.atoms[0];
      const el = ELEMENTS_BY_SYMBOL[a.symbol];
      return {
        formula: a.symbol,
        name: `Átomo de ${el?.name || a.symbol}`,
        iupacName: `${el?.name || a.symbol} atómico`,
        commonName: `Elemento ${el?.name || a.symbol} libre`,
        family: el?.category || 'Elemento Químico',
        stateAt25C: el?.stateAt298K === 'gas' ? 'Gas' : el?.stateAt298K === 'liquid' ? 'Líquido' : 'Sólido',
        vseprGeometry: 'linear',
        bondAngles: 'No aplica (Monoatómico)',
        dipoleMoment: '0.0 D',
        description: `Átomo individual de ${el?.name} (Z=${a.atomicNumber}). Masa atómica de ${el?.atomicMass.toFixed(2)} u con ${el?.valenceElectrons} electrones en su capa de valencia.`,
      };
    }

    // Si contiene oxígeno y otro elemento (óxidos)
    if (elementsPresent.length === 2 && elementsPresent.includes('O')) {
      const other = elementsPresent.find((s) => s !== 'O')!;
      const otherEl = ELEMENTS_BY_SYMBOL[other];
      const otherCount = counts[other];
      const oCount = counts['O'];
      const prefixO = oCount === 1 ? 'Monóxido' : oCount === 2 ? 'Dióxido' : oCount === 3 ? 'Trióxido' : `${oCount}-óxido`;
      const name = `${prefixO} de ${otherEl?.name || other}`;

      return {
        formula: molecule.formula,
        name,
        iupacName: name,
        commonName: `Compuesto binario oxigenado (${molecule.formula})`,
        family: otherEl?.category.includes('metal') ? 'Óxido básico' : 'Óxido ácido (Anhídrido)',
        stateAt25C: 'Gas',
        vseprGeometry: molecule.geometryVSEPR || 'linear',
        bondAngles: 'Determinado por VSEPR',
        dipoleMoment: 'Dependiente de la simetría molecular',
        description: `Estructura formada por ${otherCount} átomo(s) de ${otherEl?.name} y ${oCount} átomo(s) de Oxígeno. Enlaces químicos calculados mediante teoría de repulsión de pares electrónicos.`,
      };
    }

    // Nombre sistemático genérico respetando la estequiometría Hill
    const formulaStr = molecule.formula;
    return {
      formula: formulaStr,
      name: `Sustancia Molecular [${formulaStr}]`,
      iupacName: `Compuesto poliatómico (${formulaStr})`,
      commonName: `Molécula sintética personalizada (${formulaStr})`,
      family: 'Estructura Molecular Personalizada',
      stateAt25C: 'Líquido',
      vseprGeometry: molecule.geometryVSEPR || 'unknown',
      bondAngles: 'Geometría VSEPR aproximada',
      dipoleMoment: 'Momento dipolar en cálculo',
      description: `Entidad molecular construida en el laboratorio con ${molecule.atoms.length} átomos y ${molecule.bonds.length} enlace(s) químicos. Cumple con el principio de conservación de masa y balance estequiométrico.`,
    };
  }
}

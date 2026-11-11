/**
 * Tipos y contratos compartidos para Virtual Chemistry Lab (VCL)
 * Vickora Labs
 */

export type ElementCategory =
  | 'alkali-metal'
  | 'alkaline-earth'
  | 'transition-metal'
  | 'post-transition-metal'
  | 'metalloid'
  | 'reactive-nonmetal'
  | 'noble-gas'
  | 'lanthanide'
  | 'actinide'
  | 'unknown';

export type StateOfMatter = 'gas' | 'liquid' | 'solid' | 'unknown';

export type AtomicModelType =
  | 'dalton'
  | 'thomson'
  | 'rutherford'
  | 'bohr'
  | 'quantum';

export type BondType =
  | 'covalent-single'
  | 'covalent-double'
  | 'covalent-triple'
  | 'covalent-polar'
  | 'covalent-nonpolar'
  | 'ionic'
  | 'metallic'
  | 'hydrogen-bond'
  | 'london-dispersion'
  | 'dipole-dipole'
  | 'coordinate-covalent';

export type MolecularRepresentation =
  | 'ball-and-stick'
  | 'space-filling'
  | 'wireframe'
  | 'lewis'
  | 'electron-density';

export type VSEPRGeometry =
  | 'linear'
  | 'bent'
  | 'trigonal-planar'
  | 'trigonal-pyramidal'
  | 'tetrahedral'
  | 'seesaw'
  | 't-shaped'
  | 'trigonal-bipyramidal'
  | 'square-planar'
  | 'square-pyramidal'
  | 'octahedral'
  | 'unknown';

export type ReactionType =
  | 'synthesis'
  | 'decomposition'
  | 'single-displacement'
  | 'double-displacement'
  | 'combustion'
  | 'acid-base-neutralization'
  | 'redox'
  | 'precipitation';

export interface ScientificSource {
  name: string;
  database: 'PubChem' | 'NIST' | 'IUPAC' | 'CRC Handbook' | 'WebElements';
  identifier?: string;
  url?: string;
  confidence: 'certified' | 'experimental' | 'calculated';
  notes?: string;
}

export interface ElementData {
  atomicNumber: number;
  symbol: string;
  name: string;
  atomicMass: number; // g/mol or u
  period: number;
  group: number;
  block: 's' | 'p' | 'd' | 'f';
  category: ElementCategory;
  stateAt298K: StateOfMatter;
  electronegativityPauling: number | null;
  ionizationEnergyFirst: number | null; // kJ/mol
  atomicRadiusCovalent: number | null; // pm
  atomicRadiusVanDerWaals: number | null; // pm
  electronConfiguration: string;
  valenceElectrons: number;
  oxidationStates: number[];
  colorHex: string;
  density?: number; // g/cm3 at STP
  meltingPointK?: number;
  boilingPointK?: number;
  summary: string;
  source: ScientificSource;
}

export interface AtomInstance {
  id: string;
  atomicNumber: number;
  symbol: string;
  protons: number;
  neutrons: number;
  electrons: number;
  formalCharge: number;
  position: [number, number, number]; // [x, y, z] in Angstroms
  fixed?: boolean;
}

export interface BondInstance {
  id: string;
  atomAId: string;
  atomBId: string;
  order: 1 | 2 | 3;
  type: BondType;
  length?: number; // Angstroms
  energy?: number; // kJ/mol
}

export interface MoleculeGraph {
  id: string;
  name: string;
  formula: string;
  empiricalFormula?: string;
  molarMass: number; // g/mol
  atoms: AtomInstance[];
  bonds: BondInstance[];
  geometryVSEPR?: VSEPRGeometry;
  dipoleMomentDebye?: number;
  smiles?: string;
  source?: ScientificSource;
}

export interface ReactionSpecies {
  formula: string;
  coefficient: number;
  state?: 's' | 'l' | 'g' | 'aq';
  name?: string;
}

export interface VerifiedReaction {
  id: string;
  name: string;
  equation: string;
  type: ReactionType;
  reactants: ReactionSpecies[];
  products: ReactionSpecies[];
  enthalpyDeltaH?: number; // kJ/mol (negative: exothermic, positive: endothermic)
  conditions?: string;
  explanation: string;
  bondChanges?: string;
  source: ScientificSource;
}

export interface BalanceResult {
  balanced: boolean;
  balancedEquation: string;
  reactants: ReactionSpecies[];
  products: ReactionSpecies[];
  atomConservation: Record<string, { inReactants: number; inProducts: number; conserved: boolean }>;
  chargeConservation: { reactantCharge: number; productCharge: number; conserved: boolean };
}

export interface PotentialEnergyPoint {
  internuclearDistancePm: number; // pm
  potentialEnergyKjMol: number; // kJ/mol
}

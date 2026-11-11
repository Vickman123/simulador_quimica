/**
 * Base de Datos Certificada de Moléculas y Geometrías 3D de Referencia
 * Fuentes: PubChem 3D Conformer, NIST Chemistry WebBook, Cambridge Structural Database (CSD).
 */

import type { MoleculeGraph } from '@vcl/shared';

export const STANDARD_MOLECULES: Record<string, MoleculeGraph> = {
  // 1. Agua (H2O)
  H2O: {
    id: 'mol-h2o',
    name: 'Agua',
    formula: 'H2O',
    empiricalFormula: 'H2O',
    molarMass: 18.015,
    geometryVSEPR: 'bent',
    dipoleMomentDebye: 1.85,
    smiles: 'O',
    atoms: [
      { id: 'O1', atomicNumber: 8, symbol: 'O', protons: 8, neutrons: 8, electrons: 8, formalCharge: 0, position: [0, 0, 0] },
      { id: 'H1', atomicNumber: 1, symbol: 'H', protons: 1, neutrons: 0, electrons: 1, formalCharge: 0, position: [0.757, 0.586, 0] },
      { id: 'H2', atomicNumber: 1, symbol: 'H', protons: 1, neutrons: 0, electrons: 1, formalCharge: 0, position: [-0.757, 0.586, 0] },
    ],
    bonds: [
      { id: 'b1', atomAId: 'O1', atomBId: 'H1', order: 1, type: 'covalent-polar', length: 0.958, energy: 463 },
      { id: 'b2', atomAId: 'O1', atomBId: 'H2', order: 1, type: 'covalent-polar', length: 0.958, energy: 463 },
    ],
    source: { name: 'NIST Chemistry WebBook 3D Experimental Geometry', database: 'NIST', confidence: 'certified' },
  },

  // 2. Dióxido de carbono (CO2)
  CO2: {
    id: 'mol-co2',
    name: 'Dióxido de carbono',
    formula: 'CO2',
    empiricalFormula: 'CO2',
    molarMass: 44.009,
    geometryVSEPR: 'linear',
    dipoleMomentDebye: 0.0,
    smiles: 'O=C=O',
    atoms: [
      { id: 'C1', atomicNumber: 6, symbol: 'C', protons: 6, neutrons: 6, electrons: 6, formalCharge: 0, position: [0, 0, 0] },
      { id: 'O1', atomicNumber: 8, symbol: 'O', protons: 8, neutrons: 8, electrons: 8, formalCharge: 0, position: [1.163, 0, 0] },
      { id: 'O2', atomicNumber: 8, symbol: 'O', protons: 8, neutrons: 8, electrons: 8, formalCharge: 0, position: [-1.163, 0, 0] },
    ],
    bonds: [
      { id: 'b1', atomAId: 'C1', atomBId: 'O1', order: 2, type: 'covalent-polar', length: 1.163, energy: 799 },
      { id: 'b2', atomAId: 'C1', atomBId: 'O2', order: 2, type: 'covalent-polar', length: 1.163, energy: 799 },
    ],
    source: { name: 'NIST Chemistry WebBook', database: 'NIST', confidence: 'certified' },
  },

  // 3. Metano (CH4)
  CH4: {
    id: 'mol-ch4',
    name: 'Metano',
    formula: 'CH4',
    empiricalFormula: 'CH4',
    molarMass: 16.043,
    geometryVSEPR: 'tetrahedral',
    dipoleMomentDebye: 0.0,
    smiles: 'C',
    atoms: [
      { id: 'C1', atomicNumber: 6, symbol: 'C', protons: 6, neutrons: 6, electrons: 6, formalCharge: 0, position: [0, 0, 0] },
      { id: 'H1', atomicNumber: 1, symbol: 'H', protons: 1, neutrons: 0, electrons: 1, formalCharge: 0, position: [0.629, 0.629, 0.629] },
      { id: 'H2', atomicNumber: 1, symbol: 'H', protons: 1, neutrons: 0, electrons: 1, formalCharge: 0, position: [-0.629, -0.629, 0.629] },
      { id: 'H3', atomicNumber: 1, symbol: 'H', protons: 1, neutrons: 0, electrons: 1, formalCharge: 0, position: [-0.629, 0.629, -0.629] },
      { id: 'H4', atomicNumber: 1, symbol: 'H', protons: 1, neutrons: 0, electrons: 1, formalCharge: 0, position: [0.629, -0.629, -0.629] },
    ],
    bonds: [
      { id: 'b1', atomAId: 'C1', atomBId: 'H1', order: 1, type: 'covalent-nonpolar', length: 1.089, energy: 413 },
      { id: 'b2', atomAId: 'C1', atomBId: 'H2', order: 1, type: 'covalent-nonpolar', length: 1.089, energy: 413 },
      { id: 'b3', atomAId: 'C1', atomBId: 'H3', order: 1, type: 'covalent-nonpolar', length: 1.089, energy: 413 },
      { id: 'b4', atomAId: 'C1', atomBId: 'H4', order: 1, type: 'covalent-nonpolar', length: 1.089, energy: 413 },
    ],
    source: { name: 'PubChem CID 297', database: 'PubChem', confidence: 'certified' },
  },

  // 4. Amoníaco (NH3)
  NH3: {
    id: 'mol-nh3',
    name: 'Amoníaco',
    formula: 'NH3',
    empiricalFormula: 'NH3',
    molarMass: 17.031,
    geometryVSEPR: 'trigonal-pyramidal',
    dipoleMomentDebye: 1.47,
    smiles: 'N',
    atoms: [
      { id: 'N1', atomicNumber: 7, symbol: 'N', protons: 7, neutrons: 7, electrons: 7, formalCharge: 0, position: [0, 0, 0.116] },
      { id: 'H1', atomicNumber: 1, symbol: 'H', protons: 1, neutrons: 0, electrons: 1, formalCharge: 0, position: [0, 0.940, -0.270] },
      { id: 'H2', atomicNumber: 1, symbol: 'H', protons: 1, neutrons: 0, electrons: 1, formalCharge: 0, position: [0.814, -0.470, -0.270] },
      { id: 'H3', atomicNumber: 1, symbol: 'H', protons: 1, neutrons: 0, electrons: 1, formalCharge: 0, position: [-0.814, -0.470, -0.270] },
    ],
    bonds: [
      { id: 'b1', atomAId: 'N1', atomBId: 'H1', order: 1, type: 'covalent-polar', length: 1.012, energy: 391 },
      { id: 'b2', atomAId: 'N1', atomBId: 'H2', order: 1, type: 'covalent-polar', length: 1.012, energy: 391 },
      { id: 'b3', atomAId: 'N1', atomBId: 'H3', order: 1, type: 'covalent-polar', length: 1.012, energy: 391 },
    ],
    source: { name: 'PubChem CID 222', database: 'PubChem', confidence: 'certified' },
  },

  // 5. Oxígeno molecular (O2)
  O2: {
    id: 'mol-o2',
    name: 'Oxígeno diatómico',
    formula: 'O2',
    empiricalFormula: 'O',
    molarMass: 31.998,
    geometryVSEPR: 'linear',
    dipoleMomentDebye: 0.0,
    smiles: 'O=O',
    atoms: [
      { id: 'O1', atomicNumber: 8, symbol: 'O', protons: 8, neutrons: 8, electrons: 8, formalCharge: 0, position: [-0.604, 0, 0] },
      { id: 'O2', atomicNumber: 8, symbol: 'O', protons: 8, neutrons: 8, electrons: 8, formalCharge: 0, position: [0.604, 0, 0] },
    ],
    bonds: [
      { id: 'b1', atomAId: 'O1', atomBId: 'O2', order: 2, type: 'covalent-nonpolar', length: 1.208, energy: 498 },
    ],
    source: { name: 'NIST Chemistry WebBook', database: 'NIST', confidence: 'certified' },
  },

  // 6. Nitrógeno molecular (N2)
  N2: {
    id: 'mol-n2',
    name: 'Nitrógeno diatómico',
    formula: 'N2',
    empiricalFormula: 'N',
    molarMass: 28.014,
    geometryVSEPR: 'linear',
    dipoleMomentDebye: 0.0,
    smiles: 'N#N',
    atoms: [
      { id: 'N1', atomicNumber: 7, symbol: 'N', protons: 7, neutrons: 7, electrons: 7, formalCharge: 0, position: [-0.549, 0, 0] },
      { id: 'N2', atomicNumber: 7, symbol: 'N', protons: 7, neutrons: 7, electrons: 7, formalCharge: 0, position: [0.549, 0, 0] },
    ],
    bonds: [
      { id: 'b1', atomAId: 'N1', atomBId: 'N2', order: 3, type: 'covalent-nonpolar', length: 1.098, energy: 945 },
    ],
    source: { name: 'NIST Chemistry WebBook', database: 'NIST', confidence: 'certified' },
  },

  // 7. Cloruro de hidrógeno (HCl)
  HCl: {
    id: 'mol-hcl',
    name: 'Cloruro de hidrógeno',
    formula: 'HCl',
    empiricalFormula: 'HCl',
    molarMass: 36.458,
    geometryVSEPR: 'linear',
    dipoleMomentDebye: 1.08,
    smiles: 'Cl',
    atoms: [
      { id: 'Cl1', atomicNumber: 17, symbol: 'Cl', protons: 17, neutrons: 18, electrons: 17, formalCharge: 0, position: [0.065, 0, 0] },
      { id: 'H1', atomicNumber: 1, symbol: 'H', protons: 1, neutrons: 0, electrons: 1, formalCharge: 0, position: [-1.209, 0, 0] },
    ],
    bonds: [
      { id: 'b1', atomAId: 'Cl1', atomBId: 'H1', order: 1, type: 'covalent-polar', length: 1.274, energy: 431 },
    ],
    source: { name: 'PubChem CID 313', database: 'PubChem', confidence: 'certified' },
  },

  // 8. Cloruro de sodio (Par iónico de referencia NaCl)
  NaCl: {
    id: 'mol-nacl',
    name: 'Cloruro de sodio',
    formula: 'NaCl',
    empiricalFormula: 'NaCl',
    molarMass: 58.443,
    geometryVSEPR: 'linear',
    dipoleMomentDebye: 9.0,
    smiles: '[Na+].[Cl-]',
    atoms: [
      { id: 'Na1', atomicNumber: 11, symbol: 'Na', protons: 11, neutrons: 12, electrons: 10, formalCharge: 1, position: [-1.18, 0, 0] },
      { id: 'Cl1', atomicNumber: 17, symbol: 'Cl', protons: 17, neutrons: 18, electrons: 18, formalCharge: -1, position: [1.18, 0, 0] },
    ],
    bonds: [
      { id: 'b1', atomAId: 'Na1', atomBId: 'Cl1', order: 1, type: 'ionic', length: 2.36, energy: 787 },
    ],
    source: { name: 'CRC Handbook Lattice Energy', database: 'CRC Handbook', confidence: 'certified' },
  },

  // 9. Etanol (C2H5OH)
  C2H5OH: {
    id: 'mol-ethanol',
    name: 'Etanol',
    formula: 'C2H5OH',
    empiricalFormula: 'C2H6O',
    molarMass: 46.069,
    geometryVSEPR: 'tetrahedral',
    dipoleMomentDebye: 1.69,
    smiles: 'CCO',
    atoms: [
      { id: 'C1', atomicNumber: 6, symbol: 'C', protons: 6, neutrons: 6, electrons: 6, formalCharge: 0, position: [-1.22, -0.22, 0] },
      { id: 'C2', atomicNumber: 6, symbol: 'C', protons: 6, neutrons: 6, electrons: 6, formalCharge: 0, position: [0.08, 0.54, 0] },
      { id: 'O1', atomicNumber: 8, symbol: 'O', protons: 8, neutrons: 8, electrons: 8, formalCharge: 0, position: [1.20, -0.35, 0] },
      { id: 'H1', atomicNumber: 1, symbol: 'H', protons: 1, neutrons: 0, electrons: 1, formalCharge: 0, position: [-1.26, -0.85, 0.89] },
      { id: 'H2', atomicNumber: 1, symbol: 'H', protons: 1, neutrons: 0, electrons: 1, formalCharge: 0, position: [-1.26, -0.85, -0.89] },
      { id: 'H3', atomicNumber: 1, symbol: 'H', protons: 1, neutrons: 0, electrons: 1, formalCharge: 0, position: [-2.07, 0.46, 0] },
      { id: 'H4', atomicNumber: 1, symbol: 'H', protons: 1, neutrons: 0, electrons: 1, formalCharge: 0, position: [0.12, 1.18, 0.89] },
      { id: 'H5', atomicNumber: 1, symbol: 'H', protons: 1, neutrons: 0, electrons: 1, formalCharge: 0, position: [0.12, 1.18, -0.89] },
      { id: 'H6', atomicNumber: 1, symbol: 'H', protons: 1, neutrons: 0, electrons: 1, formalCharge: 0, position: [1.99, 0.19, 0] },
    ],
    bonds: [
      { id: 'b1', atomAId: 'C1', atomBId: 'C2', order: 1, type: 'covalent-nonpolar', length: 1.51 },
      { id: 'b2', atomAId: 'C2', atomBId: 'O1', order: 1, type: 'covalent-polar', length: 1.43 },
      { id: 'b3', atomAId: 'O1', atomBId: 'H6', order: 1, type: 'covalent-polar', length: 0.96 },
      { id: 'b4', atomAId: 'C1', atomBId: 'H1', order: 1, type: 'covalent-nonpolar', length: 1.09 },
      { id: 'b5', atomAId: 'C1', atomBId: 'H2', order: 1, type: 'covalent-nonpolar', length: 1.09 },
      { id: 'b6', atomAId: 'C1', atomBId: 'H3', order: 1, type: 'covalent-nonpolar', length: 1.09 },
      { id: 'b7', atomAId: 'C2', atomBId: 'H4', order: 1, type: 'covalent-nonpolar', length: 1.09 },
      { id: 'b8', atomAId: 'C2', atomBId: 'H5', order: 1, type: 'covalent-nonpolar', length: 1.09 },
    ],
    source: { name: 'PubChem CID 702 3D Conformer', database: 'PubChem', confidence: 'certified' },
  },

  // 10. Etileno / Eteno (C2H4)
  C2H4: {
    id: 'mol-c2h4',
    name: 'Eteno (Etileno)',
    formula: 'C2H4',
    empiricalFormula: 'CH2',
    molarMass: 28.054,
    geometryVSEPR: 'trigonal-planar',
    dipoleMomentDebye: 0.0,
    smiles: 'C=C',
    atoms: [
      { id: 'C1', atomicNumber: 6, symbol: 'C', protons: 6, neutrons: 6, electrons: 6, formalCharge: 0, position: [-0.669, 0, 0] },
      { id: 'C2', atomicNumber: 6, symbol: 'C', protons: 6, neutrons: 6, electrons: 6, formalCharge: 0, position: [0.669, 0, 0] },
      { id: 'H1', atomicNumber: 1, symbol: 'H', protons: 1, neutrons: 0, electrons: 1, formalCharge: 0, position: [-1.232, 0.928, 0] },
      { id: 'H2', atomicNumber: 1, symbol: 'H', protons: 1, neutrons: 0, electrons: 1, formalCharge: 0, position: [-1.232, -0.928, 0] },
      { id: 'H3', atomicNumber: 1, symbol: 'H', protons: 1, neutrons: 0, electrons: 1, formalCharge: 0, position: [1.232, 0.928, 0] },
      { id: 'H4', atomicNumber: 1, symbol: 'H', protons: 1, neutrons: 0, electrons: 1, formalCharge: 0, position: [1.232, -0.928, 0] },
    ],
    bonds: [
      { id: 'b1', atomAId: 'C1', atomBId: 'C2', order: 2, type: 'covalent-nonpolar', length: 1.339, energy: 614 },
      { id: 'b2', atomAId: 'C1', atomBId: 'H1', order: 1, type: 'covalent-nonpolar', length: 1.087, energy: 413 },
      { id: 'b3', atomAId: 'C1', atomBId: 'H2', order: 1, type: 'covalent-nonpolar', length: 1.087, energy: 413 },
      { id: 'b4', atomAId: 'C2', atomBId: 'H3', order: 1, type: 'covalent-nonpolar', length: 1.087, energy: 413 },
      { id: 'b5', atomAId: 'C2', atomBId: 'H4', order: 1, type: 'covalent-nonpolar', length: 1.087, energy: 413 },
    ],
    source: { name: 'NIST WebBook', database: 'NIST', confidence: 'certified' },
  },
};

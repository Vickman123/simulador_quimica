/**
 * Test Suite Automatizado para Chemistry Engine
 * Virtual Chemistry Lab (VCL) — Vickora Labs
 */

import { describe, it } from 'node:test';
import assert from 'node:assert';

import {
  AtomicEngine,
  ElectronEngine,
  BondEngine,
  GeometryEngine,
  MolecularEngine,
  ReactionEngine,
  EnergyEngine,
  ValidationEngine,
  STANDARD_MOLECULES,
  ALL_118_ELEMENTS,
  VERIFIED_REACTIONS,
} from '../packages/chem-engine/src/index.js';

describe('VCL — Suite de Pruebas Químicas', () => {

  describe('1. ATOMIC ENGINE', () => {
    it('debe construir átomo de Hidrógeno neutro (Z=1, p=1, n=0, e=1)', () => {
      const h = AtomicEngine.createStructure('H');
      assert.strictEqual(h.protons, 1);
      assert.strictEqual(h.neutrons, 0);
      assert.strictEqual(h.electrons, 1);
      assert.strictEqual(h.massNumber, 1);
      assert.strictEqual(h.netCharge, 0);
      assert.strictEqual(h.isIon, false);
      assert.strictEqual(h.element.symbol, 'H');
    });

    it('debe construir Oxígeno-16 (Z=8, p=8, n=8, e=8)', () => {
      const o16 = AtomicEngine.createStructure('O', 8, 8);
      assert.strictEqual(o16.protons, 8);
      assert.strictEqual(o16.neutrons, 8);
      assert.strictEqual(o16.electrons, 8);
      assert.strictEqual(o16.massNumber, 16);
      assert.strictEqual(o16.isotopeNotation, '^16O');
    });

    it('debe construir Carbono-12 (Z=6, p=6, n=6, e=6)', () => {
      const c12 = AtomicEngine.createStructure('C', 6, 6);
      assert.strictEqual(c12.protons, 6);
      assert.strictEqual(c12.neutrons, 6);
      assert.strictEqual(c12.electrons, 6);
      assert.strictEqual(c12.massNumber, 12);
      assert.strictEqual(c12.stability, 'stable');
    });

    it('debe formar catión Sodio Na+ (p=11, e=10, carga=+1)', () => {
      const naPlus = AtomicEngine.createStructure('Na', 12, 10);
      assert.strictEqual(naPlus.protons, 11);
      assert.strictEqual(naPlus.electrons, 10);
      assert.strictEqual(naPlus.netCharge, 1);
      assert.strictEqual(naPlus.isIon, true);
      assert.strictEqual(naPlus.ionType, 'cation');
      assert.strictEqual(naPlus.ionNotation, 'Na+');
    });

    it('debe formar anión Cloruro Cl- (p=17, e=18, carga=-1)', () => {
      const clMinus = AtomicEngine.createStructure('Cl', 18, 18);
      assert.strictEqual(clMinus.protons, 17);
      assert.strictEqual(clMinus.electrons, 18);
      assert.strictEqual(clMinus.netCharge, -1);
      assert.strictEqual(clMinus.isIon, true);
      assert.strictEqual(clMinus.ionType, 'anion');
      assert.strictEqual(clMinus.ionNotation, 'Cl-');
    });

    it('debe proporcionar los 5 modelos atómicos con fundamentación histórica y limitaciones', () => {
      const models = AtomicEngine.getAtomicModels();
      assert.ok(models.dalton);
      assert.ok(models.thomson);
      assert.ok(models.rutherford);
      assert.ok(models.bohr);
      assert.ok(models.quantum);
      assert.strictEqual(models.dalton.year, 1803);
      assert.strictEqual(models.quantum.year, 1926);
    });
  });

  describe('2. ELECTRON ENGINE & AUFBAU', () => {
    it('debe calcular configuración electrónica de Carbono (1s2 2s2 2p2)', () => {
      const analysis = ElectronEngine.analyzeConfiguration(6, 6);
      assert.strictEqual(analysis.valenceElectrons, 4);
      assert.strictEqual(analysis.unpairedElectrons, 2); // 2p tiene 2 electrones desapareados según Hund
      assert.strictEqual(analysis.isParamagnetic, true);
    });

    it('debe manejar anomalía de Cobre Z=29 ([Ar] 3d10 4s1)', () => {
      const analysis = ElectronEngine.analyzeConfiguration(29, 29);
      const sub4s = analysis.subshells.find((s) => s.label === '4s');
      const sub3d = analysis.subshells.find((s) => s.label === '3d');
      assert.strictEqual(sub4s?.electrons, 1);
      assert.strictEqual(sub3d?.electrons, 10);
    });
  });

  describe('3. BONDS & INTERMOLECULAR FORCES', () => {
    it('debe calcular enlace O-H como Covalente Polar (deltaChi = 1.24)', () => {
      const bond = BondEngine.analyzeBond('O', 'H', 1);
      assert.strictEqual(bond.bondType, 'covalent-polar');
      assert.strictEqual(bond.moreElectronegative, 'A'); // O es más electronegativo
      assert.ok(bond.percentIonicCharacter > 30);
    });

    it('debe calcular enlace C=O con orden 2', () => {
      const bond = BondEngine.analyzeBond('C', 'O', 2);
      assert.strictEqual(bond.bondType, 'covalent-polar');
      assert.ok(bond.typicalDissociationEnergyKjMol >= 700);
    });

    it('debe calcular enlace Na-Cl como Iónico (deltaChi = 2.23)', () => {
      const bond = BondEngine.analyzeBond('Na', 'Cl', 1);
      assert.strictEqual(bond.bondType, 'ionic');
      assert.ok(bond.percentIonicCharacter > 65);
    });

    it('debe verificar la regla del octeto en átomos', () => {
      const octet = BondEngine.evaluateLewisOctet('C', 8, 0); // Carbono con 4 enlaces compartidos = 8 e-
      assert.strictEqual(octet.satisfiesOctet, true);
      assert.strictEqual(octet.formalCharge, 0);
    });
  });

  describe('4. MOLECULAR & VSEPR GEOMETRY', () => {
    it('debe contener las moléculas estándar obligatorias en la base', () => {
      const keys = ['H2O', 'CO2', 'CH4', 'NH3', 'O2', 'N2'];
      for (const k of keys) {
        assert.ok(STANDARD_MOLECULES[k], `Molécula estándar faltante: ${k}`);
      }
    });

    it('debe verificar geometría tetraédrica para CH4', () => {
      const ch4 = STANDARD_MOLECULES.CH4;
      assert.strictEqual(ch4.geometryVSEPR, 'tetrahedral');
      assert.strictEqual(ch4.atoms.length, 5);
      assert.strictEqual(ch4.bonds.length, 4);
    });

    it('debe verificar geometría angular para H2O', () => {
      const h2o = STANDARD_MOLECULES.H2O;
      assert.strictEqual(h2o.geometryVSEPR, 'bent');
      assert.strictEqual(h2o.atoms.length, 3);
    });

    it('debe predecir VSEPR para 4 enlaces y 0 pares libres como tetraédrico', () => {
      const pred = GeometryEngine.predictVSEPR(4, 0);
      assert.strictEqual(pred.molecularGeometry, 'tetrahedral');
      assert.strictEqual(pred.idealAngleDegrees, 109.5);
    });

    it('debe calcular fórmula Hill y masa molar al añadir átomos dinámicamente', () => {
      let mol = MolecularEngine.createEmptyMolecule('Metano sintético');
      const { molecule: m1, addedAtom: c } = MolecularEngine.addAtom(mol, 'C', [0, 0, 0]);
      const { molecule: m2, addedAtom: h1 } = MolecularEngine.addAtom(m1, 'H', [1, 0, 0]);
      const { molecule: m3, addedAtom: h2 } = MolecularEngine.addAtom(m2, 'H', [-1, 0, 0]);

      let mBonded = MolecularEngine.addBond(m3, c.id, h1.id, 1);
      mBonded = MolecularEngine.addBond(mBonded, c.id, h2.id, 1);

      assert.strictEqual(mBonded.atoms.length, 3);
      assert.strictEqual(mBonded.formula, 'CH2');
      assert.ok(mBonded.molarMass > 14);
    });

    it('debe identificar automáticamente Dióxido de Carbono (CO2) y auto-balancear dobles enlaces', () => {
      let mol = MolecularEngine.createEmptyMolecule('Mesa Vacía');
      const { molecule: m1, addedAtom: c } = MolecularEngine.addAtom(mol, 'C', [0, 0, 0]);
      const { molecule: m2, addedAtom: o1 } = MolecularEngine.addAtom(m1, 'O', [-1.2, 0, 0]);
      const { molecule: m3, addedAtom: o2 } = MolecularEngine.addAtom(m2, 'O', [1.2, 0, 0]);

      let mBonded = MolecularEngine.addBond(m3, c.id, o1.id, 1);
      mBonded = MolecularEngine.addBond(mBonded, c.id, o2.id, 1);

      // Verificación de reconocimiento
      assert.strictEqual(mBonded.formula, 'CO2');
      assert.strictEqual(mBonded.name, 'Dióxido de Carbono');

      // Auto-saturación de enlaces para la regla del octeto (O=C=O)
      const saturated = MolecularEngine.autoSaturateBonds(mBonded);
      assert.strictEqual(saturated.bonds.length, 2);
      assert.strictEqual(saturated.bonds[0].order, 2);
      assert.strictEqual(saturated.bonds[1].order, 2);
      assert.strictEqual(saturated.geometryVSEPR, 'linear');
    });
  });

  describe('5. REACTION ENGINE & STOICHIOMETRY', () => {
    it('debe verificar formación de agua: 2 H2 + O2 -> 2 H2O', () => {
      const evalRxn = ReactionEngine.evaluateReaction(['H2', 'O2'], ['H2O']);
      assert.strictEqual(evalRxn.isVerified, true);
      assert.strictEqual(evalRxn.balanced, true);
      assert.strictEqual(evalRxn.thermodynamicNature, 'exotérmica');
      assert.strictEqual(evalRxn.enthalpyDeltaH, -571.6);
    });

    it('debe verificar neutralización: HCl + NaOH -> NaCl + H2O', () => {
      const evalRxn = ReactionEngine.evaluateReaction(['HCl', 'NaOH'], ['NaCl', 'H2O']);
      assert.strictEqual(evalRxn.isVerified, true);
      assert.strictEqual(evalRxn.balanced, true);
      assert.strictEqual(evalRxn.verifiedData?.type, 'acid-base-neutralization');
    });

    it('debe verificar combustión de metano: CH4 + 2 O2 -> CO2 + 2 H2O', () => {
      const evalRxn = ReactionEngine.evaluateReaction(['CH4', 'O2'], ['CO2', 'H2O']);
      assert.strictEqual(evalRxn.isVerified, true);
      assert.strictEqual(evalRxn.balanced, true);
      assert.strictEqual(evalRxn.thermodynamicNature, 'exotérmica');
    });

    it('debe verificar descomposición de CaCO3 -> CaO + CO2', () => {
      const evalRxn = ReactionEngine.evaluateReaction(['CaCO3'], ['CaO', 'CO2']);
      assert.strictEqual(evalRxn.isVerified, true);
      assert.strictEqual(evalRxn.balanced, true);
      assert.strictEqual(evalRxn.thermodynamicNature, 'endotérmica');
      assert.strictEqual(evalRxn.enthalpyDeltaH, 178.3);
    });

    it('debe rechazar reactivos sin productos conocidos y NO inventar resultados', () => {
      const evalRxn = ReactionEngine.evaluateReaction(['Au', 'He']);
      assert.strictEqual(evalRxn.isVerified, false);
      assert.strictEqual(evalRxn.products.length, 0);
      assert.match(evalRxn.explanation, /Reacción no determinada/);
    });
  });

  describe('6. VALIDATION ENGINE', () => {
    it('debe detectar ecuaciones desbalanceadas y conservar átomos', () => {
      const report = ValidationEngine.validateReactionBalance(
        [{ formula: 'H2', coefficient: 1 }, { formula: 'O2', coefficient: 1 }],
        [{ formula: 'H2O', coefficient: 1 }] // Desbalanceada: 2 H y 2 O -> 2 H y 1 O
      );
      assert.strictEqual(report.isValid, false);
      assert.ok(report.errors.some((e) => e.includes('no conservado')));
    });

    it('debe detectar inconsistencias de carga en átomos', () => {
      const report = ValidationEngine.validateSubatomicConsistency('Na', 11, 12, 10, 0); // Debería ser +1, no 0
      assert.strictEqual(report.isValid, false);
      assert.ok(report.errors.some((e) => e.includes('Inconsistencia de carga')));
    });

    it('debe rechazar estructuras hipervalentes no físicas (e.g. H con 3 enlaces)', () => {
      const rogueMol: any = {
        atoms: [
          { id: 'h1', symbol: 'H' },
          { id: 'c1', symbol: 'C' },
          { id: 'c2', symbol: 'C' },
          { id: 'c3', symbol: 'C' },
        ],
        bonds: [
          { atomAId: 'h1', atomBId: 'c1', order: 1 },
          { atomAId: 'h1', atomBId: 'c2', order: 1 },
          { atomAId: 'h1', atomBId: 'c3', order: 1 },
        ],
      };
      const report = ValidationEngine.validateMolecule(rogueMol);
      assert.strictEqual(report.isValid, false);
      assert.ok(report.errors.some((e) => e.includes('Hipervalencia')));
    });
  });

  describe('7. ENERGY & FORCES ENGINE', () => {
    it('debe generar la curva de potencial de Morse para O-H con pozo de energía', () => {
      const curve = EnergyEngine.generateMorseCurve('O-H', 95.8, 463.0);
      assert.strictEqual(curve.equilibriumDistancePm, 95.8);
      assert.strictEqual(curve.dissociationEnergyKjMol, 463.0);
      assert.ok(curve.points.length > 50);

      // Verificar que el punto mínimo de energía está en torno a r_e
      const minPoint = curve.points.reduce((prev, curr) =>
        curr.potentialEnergyKjMol < prev.potentialEnergyKjMol ? curr : prev
      );
      assert.ok(Math.abs(minPoint.internuclearDistancePm - 95.8) < 5);
      assert.ok(minPoint.potentialEnergyKjMol < -450);
    });
  });

  describe('8. COBERTURA DE DATOS CIENTÍFICOS', () => {
    it('debe contener exactamente los 118 elementos periódicos', () => {
      assert.strictEqual(ALL_118_ELEMENTS.length, 118);
      assert.strictEqual(ALL_118_ELEMENTS[0].symbol, 'H');
      assert.strictEqual(ALL_118_ELEMENTS[117].symbol, 'Og');
    });

    it('debe contener al menos 20 reacciones educativas verificadas', () => {
      assert.ok(VERIFIED_REACTIONS.length >= 20);
    });
  });
});

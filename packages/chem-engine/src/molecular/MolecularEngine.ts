/**
 * Molecular Engine — Virtual Chemistry Lab (VCL)
 * Vickora Labs
 *
 * Gestión integral de grafos moleculares, conectividad de átomos,
 * cálculo de fórmula empírica y molecular (sistema Hill),
 * masa molar estequiométrica, inferencia de geometría VSEPR,
 * identificación automática de sustancias y optimización 3D.
 */

import { ELEMENTS_BY_SYMBOL, ELEMENTS_BY_Z } from '../data/elements.js';
import { GeometryEngine } from '../geometry/GeometryEngine.js';
import { SubstanceIdentifier } from './SubstanceIdentifier.js';
import type { AtomInstance, BondInstance, BondType, MoleculeGraph, VSEPRGeometry } from '@vcl/shared';

export class MolecularEngine {
  /**
   * Crea un grafo molecular vacío.
   */
  public static createEmptyMolecule(name: string = 'Mesa de Trabajo Vacía'): MoleculeGraph {
    return {
      id: `mol-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      name,
      formula: '',
      empiricalFormula: '',
      molarMass: 0,
      atoms: [],
      bonds: [],
      geometryVSEPR: 'unknown',
    };
  }

  /**
   * Agrega un nuevo átomo al grafo molecular y recalcula las propiedades.
   */
  public static addAtom(
    molecule: MoleculeGraph,
    symbolOrZ: string | number,
    position: [number, number, number] = [0, 0, 0]
  ): { molecule: MoleculeGraph; addedAtom: AtomInstance } {
    const el = typeof symbolOrZ === 'number' ? ELEMENTS_BY_Z[symbolOrZ] : ELEMENTS_BY_SYMBOL[symbolOrZ];
    if (!el) {
      throw new Error(`[MolecularEngine] Elemento no válido: ${symbolOrZ}`);
    }

    const id = `${el.symbol}_${molecule.atoms.length + 1}_${Math.random().toString(36).substring(2, 5)}`;
    const newAtom: AtomInstance = {
      id,
      atomicNumber: el.atomicNumber,
      symbol: el.symbol,
      protons: el.atomicNumber,
      neutrons: Math.round(el.atomicMass - el.atomicNumber),
      electrons: el.atomicNumber,
      formalCharge: 0,
      position,
    };

    const updatedAtoms = [...molecule.atoms, newAtom];
    const updatedMolecule = this.recalculateProperties({
      ...molecule,
      atoms: updatedAtoms,
    });

    return { molecule: updatedMolecule, addedAtom: newAtom };
  }

  /**
   * Elimina un átomo y todos sus enlaces asociados.
   */
  public static removeAtom(molecule: MoleculeGraph, atomId: string): MoleculeGraph {
    const updatedAtoms = molecule.atoms.filter((a) => a.id !== atomId);
    const updatedBonds = molecule.bonds.filter((b) => b.atomAId !== atomId && b.atomBId !== atomId);

    return this.recalculateProperties({
      ...molecule,
      atoms: updatedAtoms,
      bonds: updatedBonds,
    });
  }

  /**
   * Crea o actualiza un enlace entre dos átomos del grafo.
   */
  public static addBond(
    molecule: MoleculeGraph,
    atomAId: string,
    atomBId: string,
    order: 1 | 2 | 3 = 1
  ): MoleculeGraph {
    if (atomAId === atomBId) {
      throw new Error('[MolecularEngine] No se puede enlazar un átomo consigo mismo.');
    }

    const atomA = molecule.atoms.find((a) => a.id === atomAId);
    const atomB = molecule.atoms.find((a) => a.id === atomBId);
    if (!atomA || !atomB) {
      throw new Error('[MolecularEngine] Átomos de enlace no encontrados en la molécula.');
    }

    // Filtrar si ya existía un enlace entre ellos para actualizar el orden
    const otherBonds = molecule.bonds.filter(
      (b) => !(
        (b.atomAId === atomAId && b.atomBId === atomBId) ||
        (b.atomAId === atomBId && b.atomBId === atomAId)
      )
    );

    // Calcular longitud entre sus posiciones actuales
    const dx = atomA.position[0] - atomB.position[0];
    const dy = atomA.position[1] - atomB.position[1];
    const dz = atomA.position[2] - atomB.position[2];
    const length = parseFloat(Math.sqrt(dx * dx + dy * dy + dz * dz).toFixed(3));

    const bondType: BondType = order === 3 ? 'covalent-triple' : order === 2 ? 'covalent-double' : 'covalent-single';

    const newBond: BondInstance = {
      id: `bond-${atomAId}-${atomBId}`,
      atomAId,
      atomBId,
      order,
      type: bondType,
      length: length > 0.1 ? length : 1.25,
    };

    return this.recalculateProperties({
      ...molecule,
      bonds: [...otherBonds, newBond],
    });
  }

  /**
   * Cambia el orden de un enlace existente (1 -> 2 -> 3 -> 1).
   */
  public static cycleBondOrder(molecule: MoleculeGraph, bondId: string): MoleculeGraph {
    const updatedBonds = molecule.bonds.map((b) => {
      if (b.id === bondId) {
        const nextOrder: 1 | 2 | 3 = b.order === 1 ? 2 : b.order === 2 ? 3 : 1;
        const bondType: BondType = nextOrder === 3 ? 'covalent-triple' : nextOrder === 2 ? 'covalent-double' : 'covalent-single';
        return { ...b, order: nextOrder, type: bondType };
      }
      return b;
    });

    return this.recalculateProperties({
      ...molecule,
      bonds: updatedBonds,
    });
  }

  /**
   * Recalcula masa molar, fórmula molecular (Sistema Hill), fórmula empírica,
   * geometría VSEPR e identificación automática de la sustancia química.
   */
  public static recalculateProperties(molecule: MoleculeGraph): MoleculeGraph {
    if (molecule.atoms.length === 0) {
      return {
        ...molecule,
        name: 'Mesa de Trabajo Vacía',
        formula: '',
        empiricalFormula: '',
        molarMass: 0,
        geometryVSEPR: 'unknown',
      };
    }

    // 1. Contar átomos por símbolo y sumar masas
    const counts: Record<string, number> = {};
    let totalMass = 0;

    for (const atom of molecule.atoms) {
      counts[atom.symbol] = (counts[atom.symbol] || 0) + 1;
      const el = ELEMENTS_BY_SYMBOL[atom.symbol];
      if (el) {
        totalMass += el.atomicMass;
      }
    }

    // 2. Sistema Hill para fórmula molecular:
    // C primero, H segundo, resto alfabético; o estrictamente alfabético si no hay C.
    const symbols = Object.keys(counts);
    const hasCarbon = symbols.includes('C');
    let formulaOrder: string[] = [];

    if (hasCarbon) {
      formulaOrder.push('C');
      if (symbols.includes('H')) formulaOrder.push('H');
      const rest = symbols.filter((s) => s !== 'C' && s !== 'H').sort();
      formulaOrder = [...formulaOrder, ...rest];
    } else {
      formulaOrder = symbols.sort();
    }

    const formula = formulaOrder
      .map((sym) => {
        const c = counts[sym];
        return c > 1 ? `${sym}${c}` : sym;
      })
      .join('');

    // 3. Fórmula empírica
    const countValues = Object.values(counts);
    const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
    const commonDivisor = countValues.length > 0 ? countValues.reduce(gcd) : 1;

    const empiricalFormula = formulaOrder
      .map((sym) => {
        const c = counts[sym] / commonDivisor;
        return c > 1 ? `${sym}${c}` : sym;
      })
      .join('');

    // 4. Inferencia VSEPR inicial
    let geometryVSEPR: VSEPRGeometry = 'unknown';

    if (molecule.atoms.length === 2) {
      geometryVSEPR = 'linear';
    } else if (molecule.atoms.length > 2) {
      // Encontrar el átomo con más enlaces o mayor valencia esperada
      const connectionCount: Record<string, number> = {};
      for (const b of molecule.bonds) {
        connectionCount[b.atomAId] = (connectionCount[b.atomAId] || 0) + 1;
        connectionCount[b.atomBId] = (connectionCount[b.atomBId] || 0) + 1;
      }

      let maxConn = -1;
      let centralAtomId = molecule.atoms[0].id;

      // Preferir no-hidrógenos con mayor valencia
      for (const a of molecule.atoms) {
        if (a.symbol === 'H') continue;
        const conn = connectionCount[a.id] || 0;
        const el = ELEMENTS_BY_SYMBOL[a.symbol];
        const val = el?.valenceElectrons ?? 4;
        const score = conn * 2 + (8 - Math.abs(4 - val));
        if (score > maxConn) {
          maxConn = score;
          centralAtomId = a.id;
        }
      }

      const centralAtom = molecule.atoms.find((a) => a.id === centralAtomId) || molecule.atoms[0];
      const el = ELEMENTS_BY_SYMBOL[centralAtom.symbol];
      const valence = el?.valenceElectrons ?? 4;

      let bondedElectronPairs = 0;
      let bondedAtomsCount = 0;

      for (const b of molecule.bonds) {
        if (b.atomAId === centralAtom.id || b.atomBId === centralAtom.id) {
          bondedElectronPairs += b.order;
          bondedAtomsCount++;
        }
      }

      const remainingElectrons = Math.max(0, valence - bondedElectronPairs);
      const lonePairs = Math.floor(remainingElectrons / 2);

      const prediction = GeometryEngine.predictVSEPR(bondedAtomsCount, lonePairs);
      geometryVSEPR = prediction.molecularGeometry;
    }

    // 5. Identificación automática de la sustancia (Base de conocimiento científico)
    const preliminary: MoleculeGraph = {
      ...molecule,
      formula: formula || 'Vacía',
      empiricalFormula: empiricalFormula || 'Vacía',
      molarMass: parseFloat(totalMass.toFixed(3)),
      geometryVSEPR,
    };

    const identified = SubstanceIdentifier.identify(preliminary);

    // Si la sustancia es reconocida (ej: CO2, H2O), adoptamos su nombre y geometría canónica
    const finalName = identified.name;
    if (identified.vseprGeometry && identified.vseprGeometry !== 'unknown') {
      geometryVSEPR = identified.vseprGeometry;
    }

    return {
      ...preliminary,
      name: finalName,
      geometryVSEPR,
    };
  }

  /**
   * Auto-satura y balancea los enlaces de la molécula para satisfacer la regla del octeto/dueto.
   * Específico para compuestos como CO2 (C=O doble), O2 (O=O doble), N2 (N≡N triple), HCN (C≡N triple), etc.
   */
  public static autoSaturateBonds(molecule: MoleculeGraph): MoleculeGraph {
    if (molecule.atoms.length < 2) return molecule;

    const identified = SubstanceIdentifier.identify(molecule);
    let updatedBonds = [...molecule.bonds];

    // 1. Si la sustancia tiene enlaces canónicos recomendados en su ficha
    if (identified.recommendedBonds && identified.recommendedBonds.length > 0) {
      updatedBonds = updatedBonds.map((b) => {
        const atomA = molecule.atoms.find((a) => a.id === b.atomAId);
        const atomB = molecule.atoms.find((a) => a.id === b.atomBId);
        if (!atomA || !atomB) return b;

        const rec = identified.recommendedBonds?.find(
          (r) =>
            (r.atomASymbol === atomA.symbol && r.atomBSymbol === atomB.symbol) ||
            (r.atomASymbol === atomB.symbol && r.atomBSymbol === atomA.symbol)
        );

        if (rec) {
          const bondType: BondType = rec.order === 3 ? 'covalent-triple' : rec.order === 2 ? 'covalent-double' : 'covalent-single';
          return { ...b, order: rec.order, type: bondType };
        }
        return b;
      });
    } else {
      // 2. Heurística de valencia general: si el carbono central está enlazado a 2 oxígenos y son de orden 1, elevar a dobles
      const cAtoms = molecule.atoms.filter((a) => a.symbol === 'C');
      const oAtoms = molecule.atoms.filter((a) => a.symbol === 'O');
      if (cAtoms.length === 1 && oAtoms.length === 2 && updatedBonds.length === 2) {
        updatedBonds = updatedBonds.map((b) => ({
          ...b,
          order: 2,
          type: 'covalent-double' as BondType,
        }));
      }
    }

    return this.recalculateProperties({
      ...molecule,
      bonds: updatedBonds,
    });
  }

  /**
   * Optimiza y relaja las coordenadas 3D de los átomos aplicando los ángulos VSEPR reales.
   */
  public static optimize3DGeometry(molecule: MoleculeGraph): MoleculeGraph {
    if (molecule.atoms.length === 0) return molecule;
    if (molecule.atoms.length === 1) {
      const atom = { ...molecule.atoms[0], position: [0, 0, 0] as [number, number, number] };
      return { ...molecule, atoms: [atom] };
    }

    // Primero auto-saturar si corresponde para tener la geometría correcta
    const saturated = this.autoSaturateBonds(molecule);
    const { atoms, bonds, geometryVSEPR } = saturated;

    // Caso Diatómico
    if (atoms.length === 2) {
      const updated = [
        { ...atoms[0], position: [-0.65, 0, 0] as [number, number, number] },
        { ...atoms[1], position: [0.65, 0, 0] as [number, number, number] },
      ];
      return this.recalculateProperties({ ...saturated, atoms: updated });
    }

    // Identificar átomo central
    const connectionCount: Record<string, number> = {};
    for (const b of bonds) {
      connectionCount[b.atomAId] = (connectionCount[b.atomAId] || 0) + 1;
      connectionCount[b.atomBId] = (connectionCount[b.atomBId] || 0) + 1;
    }

    let centralAtom = atoms[0];
    let maxConn = -1;
    for (const a of atoms) {
      if (a.symbol === 'H') continue;
      const conn = connectionCount[a.id] || 0;
      if (conn > maxConn) {
        maxConn = conn;
        centralAtom = a;
      }
    }

    // Si es CO2 específico: O(-1.20, 0, 0) = C(0, 0, 0) = O(1.20, 0, 0)
    if (saturated.name.toLowerCase().includes('dióxido de carbono') || saturated.formula === 'CO2') {
      const otherAtoms = atoms.filter((a) => a.id !== centralAtom.id);
      const newAtoms: AtomInstance[] = [
        { ...centralAtom, position: [0, 0, 0] },
        { ...otherAtoms[0], position: [-1.22, 0, 0] },
        { ...otherAtoms[1], position: [1.22, 0, 0] },
      ];
      return this.recalculateProperties({ ...saturated, atoms: newAtoms });
    }

    // Si es H2O específico: O(0, 0.12, 0), H(-0.76, -0.47, 0), H(0.76, -0.47, 0)
    if (saturated.name.toLowerCase().includes('agua') || saturated.formula === 'H2O') {
      const otherAtoms = atoms.filter((a) => a.id !== centralAtom.id);
      const newAtoms: AtomInstance[] = [
        { ...centralAtom, position: [0, 0.12, 0] },
        { ...otherAtoms[0], position: [-0.78, -0.47, 0] },
        { ...otherAtoms[1], position: [0.78, -0.47, 0] },
      ];
      return this.recalculateProperties({ ...saturated, atoms: newAtoms });
    }

    // Disposición VSEPR general usando GeometryEngine
    const neighbors = atoms.filter((a) => a.id !== centralAtom.id);
    const bondLengths = neighbors.map(() => 1.35);
    const coords = GeometryEngine.generateCoordinates(geometryVSEPR || 'linear', bondLengths);

    const newAtoms: AtomInstance[] = [
      { ...centralAtom, position: [0, 0, 0] },
      ...neighbors.map((atom, idx) => ({
        ...atom,
        position: (coords[idx] || [1.2 * (idx + 1), 0, 0]) as [number, number, number],
      })),
    ];

    return this.recalculateProperties({
      ...saturated,
      atoms: newAtoms,
    });
  }
}

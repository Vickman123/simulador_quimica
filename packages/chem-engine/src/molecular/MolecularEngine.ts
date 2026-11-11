/**
 * Molecular Engine — Virtual Chemistry Lab (VCL)
 * Vickora Labs
 *
 * Gestión integral de grafos moleculares, conectividad de átomos,
 * cálculo de fórmula empírica y molecular (sistema Hill),
 * masa molar estequiométrica e inferencia de geometría VSEPR.
 */

import { ELEMENTS_BY_SYMBOL, ELEMENTS_BY_Z } from '../data/elements.js';
import { GeometryEngine } from '../geometry/GeometryEngine.js';
import type { AtomInstance, BondInstance, MoleculeGraph, VSEPRGeometry } from '@vcl/shared';

export class MolecularEngine {
  /**
   * Crea un grafo molecular vacío.
   */
  public static createEmptyMolecule(name: string = 'Nueva Molécula'): MoleculeGraph {
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

    const newBond: BondInstance = {
      id: `bond-${atomAId}-${atomBId}`,
      atomAId,
      atomBId,
      order,
      type: 'covalent-single',
      length: length > 0.1 ? length : 1.2,
    };

    return this.recalculateProperties({
      ...molecule,
      bonds: [...otherBonds, newBond],
    });
  }

  /**
   * Recalcula masa molar, fórmula molecular (Sistema Hill), fórmula empírica y geometría VSEPR.
   */
  public static recalculateProperties(molecule: MoleculeGraph): MoleculeGraph {
    // 1. Contar átomos por símbolo
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
    // Si contiene Carbono: C primero, H segundo, luego el resto en orden alfabético.
    // Si no contiene Carbono: todo en orden alfabético estricto.
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

    // 3. Fórmula empírica (simplificar por el máximo común divisor)
    const countValues = Object.values(counts);
    const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
    const commonDivisor = countValues.length > 0 ? countValues.reduce(gcd) : 1;

    const empiricalFormula = formulaOrder
      .map((sym) => {
        const c = counts[sym] / commonDivisor;
        return c > 1 ? `${sym}${c}` : sym;
      })
      .join('');

    // 4. Inferencia de geometría VSEPR: identificar átomo central (mayor valencia / conectividad)
    let geometryVSEPR: VSEPRGeometry = 'unknown';

    if (molecule.atoms.length === 2) {
      geometryVSEPR = 'linear';
    } else if (molecule.atoms.length > 2) {
      // Encontrar el átomo con más enlaces conectados
      const connectionCount: Record<string, number> = {};
      for (const b of molecule.bonds) {
        connectionCount[b.atomAId] = (connectionCount[b.atomAId] || 0) + 1;
        connectionCount[b.atomBId] = (connectionCount[b.atomBId] || 0) + 1;
      }

      let maxConn = 0;
      let centralAtomId = molecule.atoms[0].id;
      for (const [id, conn] of Object.entries(connectionCount)) {
        if (conn > maxConn) {
          maxConn = conn;
          centralAtomId = id;
        }
      }

      const centralAtom = molecule.atoms.find((a) => a.id === centralAtomId);
      if (centralAtom) {
        const el = ELEMENTS_BY_SYMBOL[centralAtom.symbol];
        const valence = el?.valenceElectrons ?? 4;
        // Contar electrones usados en enlaces alrededor del átomo central
        let bondedElectronPairs = 0;
        let bondedAtomsCount = 0;

        for (const b of molecule.bonds) {
          if (b.atomAId === centralAtomId || b.atomBId === centralAtomId) {
            bondedElectronPairs += b.order;
            bondedAtomsCount++;
          }
        }

        const remainingElectrons = Math.max(0, valence - bondedElectronPairs);
        const lonePairs = Math.floor(remainingElectrons / 2);

        const prediction = GeometryEngine.predictVSEPR(bondedAtomsCount, lonePairs);
        geometryVSEPR = prediction.molecularGeometry;
      }
    }

    return {
      ...molecule,
      formula: formula || 'Vacía',
      empiricalFormula: empiricalFormula || 'Vacía',
      molarMass: parseFloat(totalMass.toFixed(3)),
      geometryVSEPR,
    };
  }
}

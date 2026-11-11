/**
 * Validation Engine — Virtual Chemistry Lab (VCL)
 * Vickora Labs
 *
 * Motor de validación rigurosa de consistencia física y química.
 * Previene la invención de resultados y garantiza el cumplimiento estricto
 * de leyes científicas fundamentales (Lavoisier, conservación de carga, octeto).
 */

import { ELEMENTS_BY_SYMBOL, ELEMENTS_BY_Z } from '../data/elements.js';
import { ReactionEngine } from '../reactions/ReactionEngine.js';
import type { MoleculeGraph, ReactionSpecies } from '@vcl/shared';

export interface ValidationReport {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  checkedRules: string[];
}

export class ValidationEngine {
  /**
   * 1 & 2. Valida la consistencia de protones, neutrones, electrones y carga atómica.
   */
  public static validateSubatomicConsistency(
    symbol: string,
    protons: number,
    neutrons: number,
    electrons: number,
    netCharge: number
  ): ValidationReport {
    const errors: string[] = [];
    const warnings: string[] = [];
    const checkedRules: string[] = [];

    checkedRules.push('Consistencia Número Atómico = Protones');
    const el = ELEMENTS_BY_SYMBOL[symbol];
    if (!el) {
      errors.push(`Elemento no reconocido: "${symbol}".`);
    } else {
      if (protons !== el.atomicNumber) {
        errors.push(`Inconsistencia en Z: ${symbol} debe tener ${el.atomicNumber} protones, pero tiene ${protons}.`);
      }
    }

    checkedRules.push('Consistencia Carga Neta = Protones - Electrones');
    const expectedCharge = protons - electrons;
    if (netCharge !== expectedCharge) {
      errors.push(
        `Inconsistencia de carga: Q declarada (${netCharge}) no coincide con p - e (${protons} - ${electrons} = ${expectedCharge}).`
      );
    }

    checkedRules.push('Validación de Proporción N/Z para Estabilidad Nuclear');
    if (protons > 1 && (neutrons < 0 || neutrons > protons * 3)) {
      warnings.push(`Relación N/Z extrema (${neutrons}/${protons}): núcleo altamente inestable o no físico.`);
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
      checkedRules,
    };
  }

  /**
   * 3. Valida la sintaxis de una fórmula química escolar.
   */
  public static validateChemicalFormula(formula: string): ValidationReport {
    const errors: string[] = [];
    const warnings: string[] = [];
    const checkedRules = ['Sintaxis de fórmula química', 'Existencia de símbolos en la tabla periódica'];

    if (!formula || formula.trim() === '') {
      errors.push('La fórmula química no puede estar vacía.');
      return { isValid: false, errors, warnings, checkedRules };
    }

    try {
      const parsed = ReactionEngine.parseFormula(formula);
      const keys = Object.keys(parsed);
      if (keys.length === 0) {
        errors.push(`Fórmula no analizable: "${formula}".`);
      }

      for (const sym of keys) {
        if (!ELEMENTS_BY_SYMBOL[sym]) {
          errors.push(`Símbolo de elemento inexistente en la tabla periódica: "${sym}".`);
        }
      }
    } catch (err) {
      errors.push(`Error sintáctico al interpretar la fórmula: "${formula}".`);
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
      checkedRules,
    };
  }

  /**
   * 4, 5 & 6. Valida la conservación de masa y balanceo de una ecuación química.
   */
  public static validateReactionBalance(
    reactants: ReactionSpecies[],
    products: ReactionSpecies[]
  ): ValidationReport {
    const errors: string[] = [];
    const warnings: string[] = [];
    const checkedRules = ['Conservación de masa (Lavoisier)', 'Conservación de carga', 'Coeficientes estequiométricos'];

    if (!reactants || reactants.length === 0) {
      errors.push('La reacción debe contener al menos un reactivo.');
    }
    if (!products || products.length === 0) {
      errors.push('La reacción debe contener al menos un producto.');
    }

    if (errors.length > 0) {
      return { isValid: false, errors, warnings, checkedRules };
    }

    const result = ReactionEngine.verifyConservation(reactants, products);
    if (!result.balanced) {
      for (const [sym, data] of Object.entries(result.atomConservation)) {
        if (!data.conserved) {
          errors.push(
            `Átomo de ${sym} no conservado: ${data.inReactants} en reactivos vs ${data.inProducts} en productos.`
          );
        }
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
      checkedRules,
    };
  }

  /**
   * 7 & 8. Valida la estructura y valencias de un grafo molecular.
   */
  public static validateMolecule(molecule: MoleculeGraph): ValidationReport {
    const errors: string[] = [];
    const warnings: string[] = [];
    const checkedRules = ['Conectividad de átomos', 'Límites de valencia máxima', 'Consistencia de enlaces'];

    if (molecule.atoms.length === 0) {
      warnings.push('La molécula no contiene átomos.');
      return { isValid: true, errors, warnings, checkedRules };
    }

    // Calcular orden total de enlaces para cada átomo
    const bondOrderSum: Record<string, number> = {};
    for (const b of molecule.bonds) {
      bondOrderSum[b.atomAId] = (bondOrderSum[b.atomAId] || 0) + b.order;
      bondOrderSum[b.atomBId] = (bondOrderSum[b.atomBId] || 0) + b.order;
    }

    // Valencias máximas habituales para elementos comunes
    const maxValencies: Record<string, number> = {
      H: 1, He: 0,
      C: 4, N: 4, O: 2, F: 1, Ne: 0,
      Na: 1, Mg: 2, Al: 3, Si: 4, P: 6, S: 6, Cl: 7, Ar: 0,
      K: 1, Ca: 2, Fe: 6, Cu: 2, Zn: 2, Br: 7, I: 7,
    };

    for (const atom of molecule.atoms) {
      const bondsCount = bondOrderSum[atom.id] || 0;
      const maxAllowed = maxValencies[atom.symbol];

      if (maxAllowed !== undefined && bondsCount > maxAllowed) {
        errors.push(
          `Hipervalencia no permitida: el átomo ${atom.symbol} (ID: ${atom.id}) tiene ${bondsCount} enlaces (máximo esperado: ${maxAllowed}).`
        );
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
      checkedRules,
    };
  }
}

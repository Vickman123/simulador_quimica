/**
 * Electron Engine — Virtual Chemistry Lab (VCL)
 * Vickora Labs
 *
 * Simulación rigurosa de la configuración electrónica,
 * regla de Madelung (Aufbau), principio de exclusión de Pauli,
 * regla de máxima multiplicidad de Hund y electrones de valencia.
 */

export interface OrbitalState {
  id: string; // e.g. "2px", "2py", "2pz"
  label: string;
  electrons: number; // 0, 1 o 2
  spins: Array<'+1/2' | '-1/2'>;
}

export interface SubshellConfiguration {
  n: number;
  subshell: 's' | 'p' | 'd' | 'f';
  label: string; // e.g. "2p"
  maxCapacity: number;
  electrons: number;
  orbitals: OrbitalState[];
  energyOrder: number;
}

export interface FullElectronAnalysis {
  atomicNumber: number;
  totalElectrons: number;
  subshells: SubshellConfiguration[];
  condensedNotation: string; // e.g. "[He] 2s2 2p4"
  expandedNotation: string; // e.g. "1s2 2s2 2p4"
  valenceElectrons: number;
  unpairedElectrons: number;
  highestOccupiedLevel: number; // n
  isParamagnetic: boolean;
  magneticMomentBohrMagnetons: number; // sqrt(N*(N+2))
}

export class ElectronEngine {
  // Orden secuencial de llenado Aufbau según la regla n + l (Madelung)
  private static readonly AUFBAU_ORDER: Array<{ n: number; subshell: 's' | 'p' | 'd' | 'f'; capacity: number }> = [
    { n: 1, subshell: 's', capacity: 2 },
    { n: 2, subshell: 's', capacity: 2 },
    { n: 2, subshell: 'p', capacity: 6 },
    { n: 3, subshell: 's', capacity: 2 },
    { n: 3, subshell: 'p', capacity: 6 },
    { n: 4, subshell: 's', capacity: 2 },
    { n: 3, subshell: 'd', capacity: 10 },
    { n: 4, subshell: 'p', capacity: 6 },
    { n: 5, subshell: 's', capacity: 2 },
    { n: 4, subshell: 'd', capacity: 10 },
    { n: 5, subshell: 'p', capacity: 6 },
    { n: 6, subshell: 's', capacity: 2 },
    { n: 4, subshell: 'f', capacity: 14 },
    { n: 5, subshell: 'd', capacity: 10 },
    { n: 6, subshell: 'p', capacity: 6 },
    { n: 7, subshell: 's', capacity: 2 },
    { n: 5, subshell: 'f', capacity: 14 },
    { n: 6, subshell: 'd', capacity: 10 },
    { n: 7, subshell: 'p', capacity: 6 },
  ];

  // Anomalías experimentales de llenado por estabilidad de subcapas semi-llenas o llenas
  private static readonly ANOMALIES: Record<number, Record<string, number>> = {
    24: { '4s': 1, '3d': 5 },  // Cromo (Cr)
    29: { '4s': 1, '3d': 10 }, // Cobre (Cu)
    41: { '5s': 1, '4d': 4 },  // Niobio (Nb)
    42: { '5s': 1, '4d': 5 },  // Molibdeno (Mo)
    44: { '5s': 1, '4d': 7 },  // Rutenio (Ru)
    45: { '5s': 1, '4d': 8 },  // Rodio (Rh)
    46: { '5s': 0, '4d': 10 }, // Paladio (Pd)
    47: { '5s': 1, '4d': 10 }, // Plata (Ag)
    78: { '6s': 1, '5d': 9 },  // Platino (Pt)
    79: { '6s': 1, '5d': 10 }, // Oro (Au)
  };

  /**
   * Genera el desglose cuántico completo de orbitales para un número de electrones.
   */
  public static analyzeConfiguration(electrons: number, atomicNumber?: number): FullElectronAnalysis {
    const z = atomicNumber !== undefined ? atomicNumber : electrons;
    if (electrons < 0) {
      throw new Error('[ElectronEngine] El número de electrones no puede ser negativo.');
    }

    let remaining = electrons;
    const subshellCounts: Record<string, number> = {};

    // 1. Llenado base Aufbau
    for (const item of this.AUFBAU_ORDER) {
      const label = `${item.n}${item.subshell}`;
      const toFill = Math.min(remaining, item.capacity);
      subshellCounts[label] = toFill;
      remaining -= toFill;
      if (remaining <= 0) break;
    }

    // 2. Aplicar anomalías experimentales si es un átomo neutro conocido
    if (z === electrons && this.ANOMALIES[z]) {
      const anomaly = this.ANOMALIES[z];
      for (const [subshellLabel, count] of Object.entries(anomaly)) {
        subshellCounts[subshellLabel] = count;
      }
    }

    // 3. Estructurar cada subcapa aplicando regla de Hund
    const subshells: SubshellConfiguration[] = [];
    let orderIndex = 0;
    let unpairedCount = 0;
    let maxN = 1;

    for (const item of this.AUFBAU_ORDER) {
      const label = `${item.n}${item.subshell}`;
      const count = subshellCounts[label] || 0;
      if (count === 0 && remaining <= 0 && orderIndex > 0 && item.n > maxN) continue;

      if (count > 0 && item.n > maxN) {
        maxN = item.n;
      }

      const numOrbitals = item.capacity / 2; // s: 1, p: 3, d: 5, f: 7
      const orbitals: OrbitalState[] = [];

      for (let i = 0; i < numOrbitals; i++) {
        orbitals.push({
          id: `${label}_orb${i + 1}`,
          label: this.getOrbitalLabel(item.subshell, i),
          electrons: 0,
          spins: [],
        });
      }

      // Aplicar Regla de Hund:
      // Paso 1: poner 1 electrón con espín +1/2 en cada orbital disponible
      let placed = 0;
      for (let i = 0; i < numOrbitals && placed < count; i++) {
        orbitals[i].electrons = 1;
        orbitals[i].spins.push('+1/2');
        placed++;
      }

      // Paso 2: aparear con espín -1/2 si sobran electrones (Pauli)
      for (let i = 0; i < numOrbitals && placed < count; i++) {
        orbitals[i].electrons = 2;
        orbitals[i].spins.push('-1/2');
        placed++;
      }

      // Contar electrones desapareados en esta subcapa
      for (const orb of orbitals) {
        if (orb.electrons === 1) unpairedCount++;
      }

      subshells.push({
        n: item.n,
        subshell: item.subshell,
        label,
        maxCapacity: item.capacity,
        electrons: count,
        orbitals,
        energyOrder: orderIndex++,
      });

      if (electrons === 0) break;
    }

    // 4. Calcular electrones de valencia (electrones en el nivel n más externo + subcapas d/f incompletas)
    let valenceElectrons = 0;
    for (const sub of subshells) {
      if (sub.n === maxN) {
        valenceElectrons += sub.electrons;
      }
    }

    // 5. Notaciones condensadas y expandidas
    const expandedParts = subshells
      .filter((s) => s.electrons > 0)
      .map((s) => `${s.label}${this.toSuperscript(s.electrons)}`);
    const expandedNotation = expandedParts.join(' ');

    const condensedNotation = this.buildCondensedNotation(z, expandedNotation, subshellCounts);

    // Propiedades magnéticas
    const isParamagnetic = unpairedCount > 0;
    const magneticMomentBohrMagnetons = Math.sqrt(unpairedCount * (unpairedCount + 2));

    return {
      atomicNumber: z,
      totalElectrons: electrons,
      subshells,
      condensedNotation,
      expandedNotation,
      valenceElectrons,
      unpairedElectrons: unpairedCount,
      highestOccupiedLevel: maxN,
      isParamagnetic,
      magneticMomentBohrMagnetons: parseFloat(magneticMomentBohrMagnetons.toFixed(2)),
    };
  }

  private static getOrbitalLabel(subshell: 's' | 'p' | 'd' | 'f', index: number): string {
    if (subshell === 's') return 's';
    if (subshell === 'p') {
      const pLabels = ['px', 'py', 'pz'];
      return pLabels[index] || `p${index + 1}`;
    }
    if (subshell === 'd') {
      const dLabels = ['dxy', 'dyz', 'dxz', 'dx2-y2', 'dz2'];
      return dLabels[index] || `d${index + 1}`;
    }
    return `f${index + 1}`;
  }

  private static toSuperscript(num: number): string {
    const map: Record<string, string> = {
      '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
      '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
    };
    return String(num).split('').map((char) => map[char] || char).join('');
  }

  private static buildCondensedNotation(
    z: number,
    expanded: string,
    subshells: Record<string, number>
  ): string {
    const nobleGases = [
      { sym: 'Rn', z: 86 },
      { sym: 'Xe', z: 54 },
      { sym: 'Ar', z: 18 },
      { sym: 'Ne', z: 10 },
      { sym: 'He', z: 2 },
    ];

    const gas = nobleGases.find((g) => z > g.z);
    if (!gas) return expanded;

    // Obtener los orbitales que van después del gas noble
    // e.g. para Oxígeno (Z=8, He=2): omitir 1s2 -> [He] 2s2 2p4
    const nobleGasSubshells: Record<string, string[]> = {
      He: ['1s'],
      Ne: ['1s', '2s', '2p'],
      Ar: ['1s', '2s', '2p', '3s', '3p'],
      Xe: ['1s', '2s', '2p', '3s', '3p', '4s', '3d', '4p', '5s', '4d', '5p'],
      Rn: ['1s', '2s', '2p', '3s', '3p', '4s', '3d', '4p', '5s', '4d', '5p', '6s', '4f', '5d', '6p'],
    };

    const skipList = nobleGasSubshells[gas.sym] || [];
    const remainingParts: string[] = [];

    for (const [sub, count] of Object.entries(subshells)) {
      if (count > 0 && !skipList.includes(sub)) {
        remainingParts.push(`${sub}${this.toSuperscript(count)}`);
      }
    }

    return `[${gas.sym}] ${remainingParts.join(' ')}`.trim();
  }
}

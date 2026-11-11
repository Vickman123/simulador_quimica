/**
 * Atomic Engine — Virtual Chemistry Lab (VCL)
 * Vickora Labs
 *
 * Simulación y análisis riguroso de la estructura atómica,
 * cálculo de partículas subatómicas (p, n, e), isótopos, iones,
 * y los 5 modelos atómicos fundamentales.
 */

import { ELEMENTS_BY_SYMBOL, ELEMENTS_BY_Z } from '../data/elements.js';
import type { ElementData, AtomicModelType } from '@vcl/shared';

export interface AtomicStructure {
  element: ElementData;
  protons: number;
  neutrons: number;
  electrons: number;
  massNumber: number; // A = p + n
  netCharge: number; // q = p - e
  isIon: boolean;
  ionType: 'cation' | 'anion' | 'neutral';
  ionNotation: string; // e.g. "Na+", "O2-", "C"
  isotopeNotation: string; // e.g. "^12C", "^16O"
  isStandardIsotope: boolean;
  stability: 'stable' | 'radioactive' | 'unstable';
}

export interface AtomicModelInfo {
  type: AtomicModelType;
  name: string;
  year: number;
  author: string;
  postulates: string[];
  features: string[];
  limitations: string[];
  visualDescription: string;
}

export class AtomicEngine {
  /**
   * Obtiene la estructura atómica con validación estricta de partículas.
   */
  public static createStructure(
    atomicNumberOrSymbol: number | string,
    neutrons?: number,
    electrons?: number
  ): AtomicStructure {
    let element: ElementData | undefined;

    if (typeof atomicNumberOrSymbol === 'number') {
      element = ELEMENTS_BY_Z[atomicNumberOrSymbol];
    } else {
      element = ELEMENTS_BY_SYMBOL[atomicNumberOrSymbol];
    }

    if (!element) {
      throw new Error(`[AtomicEngine] Elemento químico no encontrado: "${atomicNumberOrSymbol}".`);
    }

    const protons = element.atomicNumber;
    // Si no se especifican neutrones, usar el isótopo más abundante redondeando la masa atómica
    const n = neutrons !== undefined ? neutrons : Math.round(element.atomicMass - protons);
    // Si no se especifican electrones, átomo neutro: e = p
    const e = electrons !== undefined ? electrons : protons;

    const massNumber = protons + n;
    const netCharge = protons - e;
    const isIon = netCharge !== 0;
    const ionType = netCharge > 0 ? 'cation' : netCharge < 0 ? 'anion' : 'neutral';

    let ionNotation = element.symbol;
    if (netCharge > 0) {
      ionNotation += netCharge === 1 ? '+' : `${netCharge}+`;
    } else if (netCharge < 0) {
      ionNotation += netCharge === -1 ? '-' : `${Math.abs(netCharge)}-`;
    }

    const isotopeNotation = `^${massNumber}${element.symbol}`;
    const standardNeutrons = Math.round(element.atomicMass - protons);
    const isStandardIsotope = n === standardNeutrons;

    // Estimación didáctica de estabilidad nuclear basada en relación N/Z
    let stability: 'stable' | 'radioactive' | 'unstable' = 'stable';
    if (protons > 83) {
      stability = 'radioactive'; // Todos los elementos Z > 83 son radiactivos
    } else if (protons === 1 && n === 0) {
      stability = 'stable'; // Protio
    } else if (protons === 1 && n === 1) {
      stability = 'stable'; // Deuterio
    } else if (protons === 1 && n >= 2) {
      stability = 'radioactive'; // Tritio
    } else {
      const ratio = n / protons;
      if (protons <= 20) {
        if (Math.abs(ratio - 1.0) > 0.45) stability = 'unstable';
      } else {
        if (ratio < 1.0 || ratio > 1.6) stability = 'unstable';
      }
    }

    return {
      element,
      protons,
      neutrons: n,
      electrons: e,
      massNumber,
      netCharge,
      isIon,
      ionType,
      ionNotation,
      isotopeNotation,
      isStandardIsotope,
      stability,
    };
  }

  /**
   * Catálogo didáctico exhaustivo de los 5 modelos atómicos obligatorios.
   */
  public static getAtomicModels(): Record<AtomicModelType, AtomicModelInfo> {
    return {
      dalton: {
        type: 'dalton',
        name: 'Modelo de Dalton (Esferas Indivisibles)',
        year: 1803,
        author: 'John Dalton',
        postulates: [
          'La materia está formada por partículas diminutas e indivisibles llamadas átomos.',
          'Los átomos de un mismo elemento son idénticos en masa y propiedades químicas.',
          'Los compuestos se forman por la unión de átomos de diferentes elementos en proporciones numéricas sencillas y constantes.',
          'Las reacciones químicas consisten en la separación, combinación o reorganización de átomos; ningún átomo se crea ni destruye.',
        ],
        features: [
          'Representación como esferas sólidas, homogéneas y rígidas.',
          'Explicó por primera vez la ley de conservación de la masa y la ley de proporciones definidas.',
        ],
        limitations: [
          'Ignoraba la existencia de partículas subatómicas (protones, electrones y neutrones).',
          'No podía explicar los fenómenos eléctricos de la materia ni la existencia de isótopos.',
        ],
        visualDescription: 'Una esfera maciza y uniforme, sin estructura interna ni cargas eléctricas.',
      },

      thomson: {
        type: 'thomson',
        name: 'Modelo de Thomson (Pudín de Pasas)',
        year: 1897,
        author: 'Joseph John Thomson',
        postulates: [
          'El átomo es una esfera de electricidad positiva distribuida de manera continua y uniforme.',
          'Los electrones (corpúsculos de carga negativa) se encuentran incrustados en su interior como pasas en un pudín.',
          'La cantidad de carga negativa de los electrones neutraliza exactamente la carga positiva de la esfera.',
        ],
        features: [
          'Primer modelo en incorporar una partícula subatómica demostrada experimentalmente (el electrón, descubierto con rayos catódicos).',
          'Explica la neutralidad eléctrica y la ionización por pérdida o ganancia de electrones.',
        ],
        limitations: [
          'No consideraba un núcleo central denso ni justificaba la dispersión de partículas alfa.',
          'La carga positiva no está distribuida de forma continua por todo el volumen atómico.',
        ],
        visualDescription: 'Una esfera luminosa de carga positiva continua con pequeños electrones esféricos incrustados uniformemente.',
      },

      rutherford: {
        type: 'rutherford',
        name: 'Modelo Planetario de Rutherford',
        year: 1911,
        author: 'Ernest Rutherford',
        postulates: [
          'El átomo consta de un núcleo central extraordinariamente pequeño y denso, cargado positivamente, donde se concentra prácticamente toda la masa.',
          'La mayor parte del átomo es espacio vacío.',
          'Los electrones giran en órbitas circulares alrededor del núcleo central a gran distancia, similar a planetas orbitando el Sol.',
        ],
        features: [
          'Deducción directa del experimento de la lámina de oro (dispersión de partículas alfa a grandes ángulos).',
          'Descubrimiento del núcleo atómico y posterior identificación del protón.',
        ],
        limitations: [
          'Inestabilidad electromagnética clásica: según las ecuaciones de Maxwell, una carga acelerada debe radiar energía continuamente y colapsar en el núcleo en microsegundos.',
          'No lograba explicar los espectros atómicos de emisión discontinuos (líneas espectrales discretas).',
        ],
        visualDescription: 'Un núcleo diminuto central hiperdenso con electrones orbitando en órbitas elípticas a gran distancia a través de un inmenso vacío.',
      },

      bohr: {
        type: 'bohr',
        name: 'Modelo Cuántico Estacionario de Bohr',
        year: 1913,
        author: 'Niels Bohr',
        postulates: [
          'Los electrones solo pueden orbitar en niveles de energía cuantizados y permitidos (n = 1, 2, 3...) sin emitir radiación (órbitas estacionarias).',
          'El momento angular del electrón en una órbita permitida es un múltiplo entero de h / (2π).',
          'La radiación solo se emite o absorbe cuando un electrón salta de una órbita a otra: ΔE = E2 - E1 = h·ν.',
        ],
        features: [
          'Introdujo la constante de Planck en la estructura atómica y calculó con precisión el radio de Bohr (0.529 Å) y el espectro del átomo de hidrógeno (Rydberg).',
          'Estableció los niveles principales de energía n = 1, 2, 3, 4...',
        ],
        limitations: [
          'Solo funciona cuantitativamente para átomos o iones hidrogenoides (con un solo electrón: H, He+, Li2+).',
          'No explica el desdoblamiento fino de líneas espectrales, el efecto Zeeman ni la naturaleza ondulatoria del electrón.',
        ],
        visualDescription: 'Órbitas circulares concéntricas fijas con radios cuantizados r_n = n²·a₀ sobre las cuales viajan electrones a energías discretas.',
      },

      quantum: {
        type: 'quantum',
        name: 'Modelo Mecánico-Cuántico (Nubes de Probabilidad)',
        year: 1926,
        author: 'Erwin Schrödinger, Werner Heisenberg y Louis de Broglie',
        postulates: [
          'Dualidad onda-partícula: el electrón exhibe propiedades tanto corpusculares como de onda material (λ = h / p).',
          'Principio de Incertidumbre de Heisenberg: es físicamente imposible conocer simultáneamente y con precisión absoluta la posición y el momento lineal del electrón (Δx · Δp ≥ ℏ / 2).',
          'Ecuación de onda de Schrödinger: los estados electrónicos se describen por funciones de onda espaciales Ψ(r, θ, φ).',
          'Orbital atómico: región tridimensional del espacio donde existe una alta probabilidad (usualmente ≥ 90%) de encontrar al electrón, dada por el cuadrado de la función de onda |Ψ|².',
        ],
        features: [
          'Los orbitales no son trayectorias planetarias planas, sino nubes tridimensionales de densidad probabilística.',
          'Descritos por cuatro números cuánticos: n (nivel principal), l (momento angular: s, p, d, f), m_l (orientación magnética) y m_s (espín: +1/2, -1/2).',
          'Fundamento estricto de toda la química molecular y espectroscopía moderna.',
        ],
        limitations: [
          'Requiere métodos computacionales y numéricos aproximados (Hartree-Fock, DFT) para átomos polielectrónicos complejos.',
        ],
        visualDescription: 'Una nube volumétrica difusa y tridimensional donde la densidad de puntos representa la probabilidad |Ψ|² de hallar al electrón (esférica para orbitales s, bilobular orientada en ejes X/Y/Z para orbitales p).',
      },
    };
  }

  /**
   * Calcula la energía de un nivel electrónico de Bohr para átomos hidrogenoides (en eV).
   * E_n = -13.606 eV * (Z^2 / n^2)
   */
  public static calculateBohrEnergy(n: number, z: number = 1): number {
    if (n < 1) throw new Error('[AtomicEngine] El nivel cuántico principal n debe ser >= 1.');
    return -13.606 * (Math.pow(z, 2) / Math.pow(n, 2));
  }

  /**
   * Calcula la longitud de onda fotónica (en nanómetros) emitida al saltar de nivel n_initial a n_final.
   * Rydberg: 1/λ = R_H * Z^2 * (1/n_final^2 - 1/n_initial^2)
   */
  public static calculatePhotonWavelengthNm(nInitial: number, nFinal: number, z: number = 1): number {
    if (nInitial <= nFinal) {
      throw new Error('[AtomicEngine] n_initial debe ser mayor que n_final para una transición de emisión.');
    }
    const R_H = 1.097373e7; // m^-1
    const invLambda = R_H * Math.pow(z, 2) * (1 / Math.pow(nFinal, 2) - 1 / Math.pow(nInitial, 2));
    const lambdaMeters = 1 / invLambda;
    return lambdaMeters * 1e9; // Retornar en nm
  }
}

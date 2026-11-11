# MODELO DE DATOS Y CONTRATOS TYPESCRIPT
## Virtual Chemistry Lab (VCL) — Vickora Labs

---

# 1. Contratos del Dominio Químico

```typescript
// Elemento de la Tabla Periódica
export interface ElementData {
  atomicNumber: number;            // Número atómico Z
  symbol: string;                  // Símbolo químico (ej. "H", "Fe")
  name: string;                    // Nombre en español (ej. "Hierro")
  atomicMass: number;              // Masa atómica estándar IUPAC (u / g/mol)
  period: number;                  // Periodo (1 - 7)
  group: number;                   // Grupo (1 - 18)
  block: 's' | 'p' | 'd' | 'f';    // Bloque orbital
  category: ElementCategory;       // Familia periódica
  stateAt298K: StateOfMatter;      // Estado a 298.15 K (solid, liquid, gas)
  electronegativityPauling: number | null; // Escala Pauling
  ionizationEnergyFirst: number | null;    // kJ/mol
  atomicRadiusCovalent: number | null;     // pm
  atomicRadiusVanDerWaals: number | null;  // pm
  electronConfiguration: string;  // Notación cuántica (ej. "[He] 2s2 2p4")
  valenceElectrons: number;        // Electrones en capa más externa
  oxidationStates: number[];       // Estados de oxidación comunes
  colorHex: string;                // Código CPK internacional (#RRGGBB)
  summary: string;                 // Resumen pedagógico
  source: ScientificSource;        // Metrología certificada
}

// Instancia de Átomo en una Molécula
export interface AtomInstance {
  id: string;                      // Identificador único (ej. "O1_a8f9")
  atomicNumber: number;            // Z
  symbol: string;                  // "O"
  protons: number;                 // p
  neutrons: number;                // n
  electrons: number;               // e
  formalCharge: number;            // Carga formal Lewis
  position: [number, number, number]; // Coordenadas [x, y, z] en Ångströms
  fixed?: boolean;
}

// Enlace Químico
export interface BondInstance {
  id: string;                      // "bond-O1-H1"
  atomAId: string;                 // ID átomo origen
  atomBId: string;                 // ID átomo destino
  order: 1 | 2 | 3;                // Enlace simple, doble o triple
  type: BondType;                  // covalent-polar, ionic, etc.
  length?: number;                 // Longitud internuclear en Ångströms
  energy?: number;                 // Energía de disociación en kJ/mol
}

// Grafo Molecular Completo
export interface MoleculeGraph {
  id: string;
  name: string;
  formula: string;                 // Fórmula Hill (ej. "C2H6O", "H2O")
  empiricalFormula?: string;       // Fórmula mínima reducida
  molarMass: number;               // Suma estequiométrica en g/mol
  atoms: AtomInstance[];           // Vértices del grafo
  bonds: BondInstance[];           // Aristas del grafo
  geometryVSEPR?: VSEPRGeometry;   // Forma molecular tridimensional
  dipoleMomentDebye?: number;      // Momento dipolar experimental en Debye
  smiles?: string;                 // Notación SMILES (ej. "CCO")
  source?: ScientificSource;
}

// Reacción Química Certificada
export interface VerifiedReaction {
  id: string;
  name: string;
  equation: string;                // "2 H2 + O2 -> 2 H2O"
  type: ReactionType;              // synthesis, decomposition, combustion...
  reactants: ReactionSpecies[];    // Especies iniciales con coeficientes
  products: ReactionSpecies[];     // Especies finales
  enthalpyDeltaH?: number;         // ΔH° en kJ/mol (negativo: exotérmica)
  conditions?: string;             // Presión, temperatura, catalizador
  explanation: string;             // Explicación didáctica
  bondChanges?: string;            // Detalle de enlaces rotos y formados
  source: ScientificSource;
}
```

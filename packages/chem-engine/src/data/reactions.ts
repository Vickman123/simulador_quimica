/**
 * Base de Datos Certificada de Reacciones Químicas Verificadas
 * Fuentes: NIST Chemistry WebBook, CRC Handbook of Chemistry & Physics, PubChem.
 */

import type { VerifiedReaction } from '@vcl/shared';

export const VERIFIED_REACTIONS: VerifiedReaction[] = [
  // 1. Síntesis / Formación de agua
  {
    id: 'rxn-water-synthesis',
    name: 'Formación de agua (Síntesis)',
    equation: '2 H2 + O2 -> 2 H2O',
    type: 'synthesis',
    reactants: [
      { formula: 'H2', coefficient: 2, state: 'g', name: 'Gas hidrógeno' },
      { formula: 'O2', coefficient: 1, state: 'g', name: 'Gas oxígeno' },
    ],
    products: [
      { formula: 'H2O', coefficient: 2, state: 'l', name: 'Agua' },
    ],
    enthalpyDeltaH: -571.6, // kJ por mol de reacción (exotérmica, -285.8 kJ/mol H2O)
    conditions: 'Chispa eléctrica o catalizador de platino a 298 K',
    explanation: 'Ruptura de dos enlaces covalentes simples H-H (436 kJ/mol) y un enlace doble O=O (498 kJ/mol) para formar cuatro enlaces covalentes polares O-H (463 kJ/mol), liberando abundante energía térmica.',
    bondChanges: '2 enlaces H-H y 1 enlace O=O rotos -> 4 enlaces O-H formados',
    source: { name: 'NIST WebBook Enthalpy of Formation', database: 'NIST', confidence: 'certified' },
  },

  // 2. Neutralización Ácido-Base
  {
    id: 'rxn-acid-base-hcl-naoh',
    name: 'Neutralización de ácido clorhídrico con hidróxido de sodio',
    equation: 'HCl + NaOH -> NaCl + H2O',
    type: 'acid-base-neutralization',
    reactants: [
      { formula: 'HCl', coefficient: 1, state: 'aq', name: 'Ácido clorhídrico' },
      { formula: 'NaOH', coefficient: 1, state: 'aq', name: 'Hidróxido de sodio' },
    ],
    products: [
      { formula: 'NaCl', coefficient: 1, state: 'aq', name: 'Cloruro de sodio' },
      { formula: 'H2O', coefficient: 1, state: 'l', name: 'Agua' },
    ],
    enthalpyDeltaH: -57.3, // kJ/mol (entalpía estándar de neutralización de ácidos y bases fuertes)
    conditions: 'Solución acuosa a 298 K, 1 atm',
    explanation: 'El protón hidronio H+ del ácido se combina exotérmicamente con el ion hidroxilo OH- de la base para formar una molécula neutra de agua H2O, dejando iones espectadores Na+ y Cl- en disolución.',
    bondChanges: 'H+(aq) + OH-(aq) -> H2O(l)',
    source: { name: 'CRC Handbook of Chemistry & Physics', database: 'CRC Handbook', confidence: 'certified' },
  },

  // 3. Combustión completa de metano
  {
    id: 'rxn-methane-combustion',
    name: 'Combustión completa del metano',
    equation: 'CH4 + 2 O2 -> CO2 + 2 H2O',
    type: 'combustion',
    reactants: [
      { formula: 'CH4', coefficient: 1, state: 'g', name: 'Metano' },
      { formula: 'O2', coefficient: 2, state: 'g', name: 'Gas oxígeno' },
    ],
    products: [
      { formula: 'CO2', coefficient: 1, state: 'g', name: 'Dióxido de carbono' },
      { formula: 'H2O', coefficient: 2, state: 'g', name: 'Vapor de agua' },
    ],
    enthalpyDeltaH: -890.7, // kJ/mol
    conditions: 'Energía de activación inicial (chispa/llama) en exceso de O2',
    explanation: 'Oxidación rápida de los cuatro enlaces C-H del metano. El carbono pasa de estado de oxidación -4 a +4 en el CO2, liberando 890.7 kJ por cada mol de metano consumido.',
    bondChanges: '4 enlaces C-H y 2 enlaces O=O rotos -> 2 enlaces C=O y 4 enlaces O-H formados',
    source: { name: 'NIST Chemistry WebBook', database: 'NIST', confidence: 'certified' },
  },

  // 4. Descomposición térmica de CaCO3
  {
    id: 'rxn-caco3-calcination',
    name: 'Descomposición térmica del carbonato de calcio (Calcinación)',
    equation: 'CaCO3 -> CaO + CO2',
    type: 'decomposition',
    reactants: [
      { formula: 'CaCO3', coefficient: 1, state: 's', name: 'Carbonato de calcio (Caliza)' },
    ],
    products: [
      { formula: 'CaO', coefficient: 1, state: 's', name: 'Óxido de calcio (Cal viva)' },
      { formula: 'CO2', coefficient: 1, state: 'g', name: 'Dióxido de carbono' },
    ],
    enthalpyDeltaH: +178.3, // kJ/mol (endotérmica)
    conditions: 'Calentamiento a temperatura superior a 840 °C (1113 K)',
    explanation: 'La energía térmica rompe la red iónica del ion carbonato CO3(2-), liberando CO2 gaseoso y estabilizando el óxido de calcio sólido en un proceso marcadamente endotérmico.',
    bondChanges: 'Ruptura del anión carbonato -> óxido metálico reticular + molécula lineal CO2',
    source: { name: 'CRC Handbook Thermochemistry', database: 'CRC Handbook', confidence: 'certified' },
  },

  // 5. Síntesis de Haber-Bosch (Amoníaco)
  {
    id: 'rxn-haber-ammonia',
    name: 'Síntesis de amoníaco (Proceso Haber-Bosch)',
    equation: 'N2 + 3 H2 -> 2 NH3',
    type: 'synthesis',
    reactants: [
      { formula: 'N2', coefficient: 1, state: 'g', name: 'Gas nitrógeno' },
      { formula: 'H2', coefficient: 3, state: 'g', name: 'Gas hidrógeno' },
    ],
    products: [
      { formula: 'NH3', coefficient: 2, state: 'g', name: 'Amoníaco' },
    ],
    enthalpyDeltaH: -92.4, // kJ/mol
    conditions: '450 °C, 200 atm, catalizador de hierro enriquecido (Fe3O4)',
    explanation: 'Ruptura del fuerte triple enlace N≡N (945 kJ/mol) y tres enlaces H-H para formar seis enlaces covalentes polares N-H en dos moléculas de geometría trigonal piramidal NH3.',
    bondChanges: '1 enlace N≡N y 3 enlaces H-H rotos -> 6 enlaces N-H formados',
    source: { name: 'IUPAC Technical Reports', database: 'IUPAC', confidence: 'certified' },
  },

  // 6. Formación de cloruro de sodio (Síntesis redox)
  {
    id: 'rxn-nacl-synthesis',
    name: 'Síntesis de cloruro de sodio',
    equation: '2 Na + Cl2 -> 2 NaCl',
    type: 'synthesis',
    reactants: [
      { formula: 'Na', coefficient: 2, state: 's', name: 'Sodio metálico' },
      { formula: 'Cl2', coefficient: 1, state: 'g', name: 'Gas cloro' },
    ],
    products: [
      { formula: 'NaCl', coefficient: 2, state: 's', name: 'Cloruro de sodio' },
    ],
    enthalpyDeltaH: -822.2, // kJ/mol de reacción (-411.1 kJ/mol de NaCl)
    conditions: 'Contacto directo en campana de extracción a 298 K',
    explanation: 'Transferencia completa del electrón de valencia 3s del sodio al orbital 3p del cloro. Los iones formados Na+ y Cl- cristalizan en una red cúbica centrada en las caras estabilizada por alta energía reticular.',
    bondChanges: 'Enlace metálico Na + covalente Cl-Cl -> red iónica Na+ Cl-',
    source: { name: 'NIST Chemistry WebBook', database: 'NIST', confidence: 'certified' },
  },

  // 7. Sustitución simple: Zinc con ácido clorhídrico
  {
    id: 'rxn-zn-hcl-displacement',
    name: 'Desplazamiento simple: Zinc con ácido clorhídrico',
    equation: 'Zn + 2 HCl -> ZnCl2 + H2',
    type: 'single-displacement',
    reactants: [
      { formula: 'Zn', coefficient: 1, state: 's', name: 'Zinc metálico' },
      { formula: 'HCl', coefficient: 2, state: 'aq', name: 'Ácido clorhídrico' },
    ],
    products: [
      { formula: 'ZnCl2', coefficient: 1, state: 'aq', name: 'Cloruro de zinc' },
      { formula: 'H2', coefficient: 1, state: 'g', name: 'Gas hidrógeno' },
    ],
    enthalpyDeltaH: -152.4, // kJ/mol
    conditions: 'Temperatura ambiente, efervescencia inmediata',
    explanation: 'El zinc posee un potencial estándar de reducción más negativo (-0.76 V) que el hidrógeno (0.00 V), por lo que se oxida a Zn(2+) reduciendo los protones H+ a gas hidrógeno H2.',
    bondChanges: 'Zn(s) -> Zn2+(aq) + 2e-; 2H+(aq) + 2e- -> H2(g)',
    source: { name: 'CRC Handbook of Electrochemical Potentials', database: 'CRC Handbook', confidence: 'certified' },
  },

  // 8. Precipitación: Cloruro de sodio con nitrato de plata
  {
    id: 'rxn-agcl-precipitation',
    name: 'Precipitación de cloruro de plata',
    equation: 'AgNO3 + NaCl -> AgCl + NaNO3',
    type: 'precipitation',
    reactants: [
      { formula: 'AgNO3', coefficient: 1, state: 'aq', name: 'Nitrato de plata' },
      { formula: 'NaCl', coefficient: 1, state: 'aq', name: 'Cloruro de sodio' },
    ],
    products: [
      { formula: 'AgCl', coefficient: 1, state: 's', name: 'Cloruro de plata (precipitado blanco)' },
      { formula: 'NaNO3', coefficient: 1, state: 'aq', name: 'Nitrato de sodio' },
    ],
    enthalpyDeltaH: -65.7, // kJ/mol
    conditions: 'Mezcla acuosa directa a 298 K',
    explanation: 'Los iones Ag+ y Cl- poseen un producto de solubilidad muy bajo (Ksp = 1.77 x 10^-10 a 25 °C), precipitando de inmediato como un sólido blanco lechoso insoluble.',
    bondChanges: 'Ag+(aq) + Cl-(aq) -> AgCl(s) (insoluble)',
    source: { name: 'CRC Solubility Product Constants', database: 'CRC Handbook', confidence: 'certified' },
  },

  // 9. Descomposición catalítica del peróxido de hidrógeno
  {
    id: 'rxn-h2o2-decomposition',
    name: 'Descomposición del peróxido de hidrógeno',
    equation: '2 H2O2 -> 2 H2O + O2',
    type: 'decomposition',
    reactants: [
      { formula: 'H2O2', coefficient: 2, state: 'aq', name: 'Peróxido de hidrógeno (Agua oxigenada)' },
    ],
    products: [
      { formula: 'H2O', coefficient: 2, state: 'l', name: 'Agua' },
      { formula: 'O2', coefficient: 1, state: 'g', name: 'Gas oxígeno' },
    ],
    enthalpyDeltaH: -196.1, // kJ/mol
    conditions: 'Catalizador MnO2 o enzima catalasa a temperatura ambiente',
    explanation: 'Reacción de dismutación (redox interna) donde el oxígeno con estado de oxidación -1 se oxida simultáneamente a 0 (en O2) y se reduce a -2 (en H2O).',
    bondChanges: '2 enlaces O-O rotos -> 1 enlace O=O formado',
    source: { name: 'NIST Chemistry WebBook', database: 'NIST', confidence: 'certified' },
  },

  // 10. Combustión de propano
  {
    id: 'rxn-propane-combustion',
    name: 'Combustión completa del propano',
    equation: 'C3H8 + 5 O2 -> 3 CO2 + 4 H2O',
    type: 'combustion',
    reactants: [
      { formula: 'C3H8', coefficient: 1, state: 'g', name: 'Propano' },
      { formula: 'O2', coefficient: 5, state: 'g', name: 'Gas oxígeno' },
    ],
    products: [
      { formula: 'CO2', coefficient: 3, state: 'g', name: 'Dióxido de carbono' },
      { formula: 'H2O', coefficient: 4, state: 'g', name: 'Vapor de agua' },
    ],
    enthalpyDeltaH: -2220.0, // kJ/mol
    conditions: 'Chispa térmica en exceso estequiométrico de comburente O2',
    explanation: 'Combustión altamente exotérmica utilizada como combustible doméstico e industrial. Oxida los 3 átomos de carbono a CO2 y 8 átomos de hidrógeno a H2O.',
    bondChanges: '2 enlaces C-C, 8 enlaces C-H y 5 enlaces O=O rotos -> 6 enlaces C=O y 8 enlaces O-H formados',
    source: { name: 'NIST Chemistry WebBook', database: 'NIST', confidence: 'certified' },
  },

  // 11. Combustión de etanol
  {
    id: 'rxn-ethanol-combustion',
    name: 'Combustión completa del etanol',
    equation: 'C2H5OH + 3 O2 -> 2 CO2 + 3 H2O',
    type: 'combustion',
    reactants: [
      { formula: 'C2H5OH', coefficient: 1, state: 'l', name: 'Etanol' },
      { formula: 'O2', coefficient: 3, state: 'g', name: 'Gas oxígeno' },
    ],
    products: [
      { formula: 'CO2', coefficient: 2, state: 'g', name: 'Dióxido de carbono' },
      { formula: 'H2O', coefficient: 3, state: 'g', name: 'Vapor de agua' },
    ],
    enthalpyDeltaH: -1367.0, // kJ/mol
    conditions: 'Llama o chispa a 298 K',
    explanation: 'Biocombustible limpio. La combustión rompe el enlace C-C, enlaces C-H y el grupo hidroxilo C-OH para formar 2 moléculas de CO2 y 3 de H2O.',
    bondChanges: '1 C-C, 5 C-H, 1 C-O, 1 O-H rotos -> 4 C=O y 6 O-H formados',
    source: { name: 'NIST Chemistry WebBook', database: 'NIST', confidence: 'certified' },
  },

  // 12. Fotosíntesis básica (Fijación biológica)
  {
    id: 'rxn-photosynthesis',
    name: 'Reacción global de fotosíntesis (Fijación de carbono)',
    equation: '6 CO2 + 6 H2O -> C6H12O6 + 6 O2',
    type: 'synthesis',
    reactants: [
      { formula: 'CO2', coefficient: 6, state: 'g', name: 'Dióxido de carbono' },
      { formula: 'H2O', coefficient: 6, state: 'l', name: 'Agua' },
    ],
    products: [
      { formula: 'C6H12O6', coefficient: 1, state: 's', name: 'Glucosa' },
      { formula: 'O2', coefficient: 6, state: 'g', name: 'Gas oxígeno' },
    ],
    enthalpyDeltaH: +2803.0, // kJ/mol (fuertemente endotérmica, impulsada por energía solar)
    conditions: 'Luz solar (fotones hν) y clorofila a 298 K',
    explanation: 'Conversión endergónica de energía radiante en energía de enlace químico. El agua dona electrones reduciendo el CO2 a carbohidrato con liberación de O2.',
    bondChanges: 'Moléculas estables CO2 y H2O sintetizan enlaces C-C y C-H de la glucosa',
    source: { name: 'Biochemical Pathways / NIST', database: 'NIST', confidence: 'certified' },
  },

  // 13. Respiración celular aeróbica
  {
    id: 'rxn-cellular-respiration',
    name: 'Respiración celular aeróbica (Oxidación de glucosa)',
    equation: 'C6H12O6 + 6 O2 -> 6 CO2 + 6 H2O',
    type: 'combustion',
    reactants: [
      { formula: 'C6H12O6', coefficient: 1, state: 'aq', name: 'Glucosa' },
      { formula: 'O2', coefficient: 6, state: 'g', name: 'Gas oxígeno' },
    ],
    products: [
      { formula: 'CO2', coefficient: 6, state: 'g', name: 'Dióxido de carbono' },
      { formula: 'H2O', coefficient: 6, state: 'l', name: 'Agua' },
    ],
    enthalpyDeltaH: -2803.0, // kJ/mol
    conditions: 'Mitocondrias celulares acopladas a la síntesis de 30-32 ATP',
    explanation: 'Catabolismo oxidativo de la glucosa en eucariotas. Los electrones de alta energía son transferidos a la cadena respiratoria con O2 como aceptor terminal.',
    bondChanges: 'Oxidación gradual de glucosa -> CO2 y H2O',
    source: { name: 'CRC Handbook of Biochemistry', database: 'CRC Handbook', confidence: 'certified' },
  },

  // 14. Neutralización ácido sulfúrico con hidróxido de potasio
  {
    id: 'rxn-h2so4-koh-neutralization',
    name: 'Neutralización de ácido sulfúrico con hidróxido de potasio',
    equation: 'H2SO4 + 2 KOH -> K2SO4 + 2 H2O',
    type: 'acid-base-neutralization',
    reactants: [
      { formula: 'H2SO4', coefficient: 1, state: 'aq', name: 'Ácido sulfúrico' },
      { formula: 'KOH', coefficient: 2, state: 'aq', name: 'Hidróxido de potasio' },
    ],
    products: [
      { formula: 'K2SO4', coefficient: 1, state: 'aq', name: 'Sulfato de potasio' },
      { formula: 'H2O', coefficient: 2, state: 'l', name: 'Agua' },
    ],
    enthalpyDeltaH: -115.0, // kJ/mol
    conditions: 'Solución acuosa a 298 K',
    explanation: 'El ácido diprótico transfiere dos protones a dos iones hidróxido para generar dos moléculas de agua y la sal sulfato de potasio soluble.',
    bondChanges: '2 H+ + 2 OH- -> 2 H2O',
    source: { name: 'CRC Handbook Thermochemistry', database: 'CRC Handbook', confidence: 'certified' },
  },

  // 15. Formación de óxido de hierro (III) (Corrosión / Herrumbre)
  {
    id: 'rxn-iron-oxidation',
    name: 'Oxidación de hierro a óxido férrico (Herrumbre)',
    equation: '4 Fe + 3 O2 -> 2 Fe2O3',
    type: 'synthesis',
    reactants: [
      { formula: 'Fe', coefficient: 4, state: 's', name: 'Hierro metálico' },
      { formula: 'O2', coefficient: 3, state: 'g', name: 'Gas oxígeno' },
    ],
    products: [
      { formula: 'Fe2O3', coefficient: 2, state: 's', name: 'Óxido de hierro (III)' },
    ],
    enthalpyDeltaH: -1648.4, // kJ/mol de reacción
    conditions: 'Presencia de humedad y O2 atmosférico',
    explanation: 'Oxidación del hierro de Fe(0) a Fe(3+) con reducción de O2(0) a O(2-). Forma el mineral hematita de color pardo-rojizo.',
    bondChanges: 'Fe metal + O2 gas -> Red iónica cristalina Fe2O3',
    source: { name: 'NIST Chemistry WebBook', database: 'NIST', confidence: 'certified' },
  },

  // 16. Descomposición del clorato de potasio
  {
    id: 'rxn-kclo3-decomposition',
    name: 'Descomposición térmica del clorato de potasio',
    equation: '2 KClO3 -> 2 KCl + 3 O2',
    type: 'decomposition',
    reactants: [
      { formula: 'KClO3', coefficient: 2, state: 's', name: 'Clorato de potasio' },
    ],
    products: [
      { formula: 'KCl', coefficient: 2, state: 's', name: 'Cloruro de potasio' },
      { formula: 'O2', coefficient: 3, state: 'g', name: 'Gas oxígeno' },
    ],
    enthalpyDeltaH: -89.4, // kJ/mol
    conditions: 'Calentamiento en presencia de MnO2 como catalizador',
    explanation: 'Método histórico de laboratorio para obtener gas oxígeno puro mediante descomposición catalizada.',
    bondChanges: 'Ruptura de los aniones clorato ClO3- -> cloruro KCl + gas oxígeno O2',
    source: { name: 'CRC Handbook of Chemistry & Physics', database: 'CRC Handbook', confidence: 'certified' },
  },

  // 17. Reacción de desplazamiento: Cobre y nitrato de plata
  {
    id: 'rxn-cu-agno3-displacement',
    name: 'Desplazamiento simple: Cobre con nitrato de plata',
    equation: 'Cu + 2 AgNO3 -> Cu(NO3)2 + 2 Ag',
    type: 'single-displacement',
    reactants: [
      { formula: 'Cu', coefficient: 1, state: 's', name: 'Cobre metálico' },
      { formula: 'AgNO3', coefficient: 2, state: 'aq', name: 'Nitrato de plata' },
    ],
    products: [
      { formula: 'Cu(NO3)2', coefficient: 1, state: 'aq', name: 'Nitrato de cobre (II)' },
      { formula: 'Ag', coefficient: 2, state: 's', name: 'Plata metálica cristalina' },
    ],
    enthalpyDeltaH: -147.2, // kJ/mol
    conditions: 'Temperatura ambiente en disolución acuosa',
    explanation: 'El alambre de cobre sumergido se cubre de bellas agujas plateadas de plata pura, mientras la disolución adquiere el azul característico de los iones Cu(2+)(aq).',
    bondChanges: 'Cu(s) + 2 Ag+(aq) -> Cu2+(aq) + 2 Ag(s)',
    source: { name: 'CRC Electrochemical Series', database: 'CRC Handbook', confidence: 'certified' },
  },

  // 18. Doble sustitución: Cloruro de bario con sulfato de sodio
  {
    id: 'rxn-baso4-precipitation',
    name: 'Precipitación de sulfato de bario',
    equation: 'BaCl2 + Na2SO4 -> BaSO4 + 2 NaCl',
    type: 'precipitation',
    reactants: [
      { formula: 'BaCl2', coefficient: 1, state: 'aq', name: 'Cloruro de bario' },
      { formula: 'Na2SO4', coefficient: 1, state: 'aq', name: 'Sulfato de sodio' },
    ],
    products: [
      { formula: 'BaSO4', coefficient: 1, state: 's', name: 'Sulfato de bario (precipitado blanco)' },
      { formula: 'NaCl', coefficient: 2, state: 'aq', name: 'Cloruro de sodio' },
    ],
    enthalpyDeltaH: -25.8, // kJ/mol
    conditions: 'Disolución acuosa a 298 K',
    explanation: 'El sulfato de bario es extremadamente insoluble en agua (Ksp = 1.08 x 10^-10), precipitando al instante como un sólido blanco denso usado en radiología como medio de contraste.',
    bondChanges: 'Ba2+(aq) + SO4(2-)(aq) -> BaSO4(s)',
    source: { name: 'CRC Solubility Constants', database: 'CRC Handbook', confidence: 'certified' },
  },

  // 19. Descomposición del bicarbonato de sodio
  {
    id: 'rxn-nahco3-decomposition',
    name: 'Descomposición térmica del bicarbonato de sodio',
    equation: '2 NaHCO3 -> Na2CO3 + H2O + CO2',
    type: 'decomposition',
    reactants: [
      { formula: 'NaHCO3', coefficient: 2, state: 's', name: 'Bicarbonato de sodio' },
    ],
    products: [
      { formula: 'Na2CO3', coefficient: 1, state: 's', name: 'Carbonato de sodio' },
      { formula: 'H2O', coefficient: 1, state: 'g', name: 'Vapor de agua' },
      { formula: 'CO2', coefficient: 1, state: 'g', name: 'Dióxido de carbono' },
    ],
    enthalpyDeltaH: +129.2, // kJ/mol (endotérmica)
    conditions: 'Calor superior a 80 °C (horno de repostería)',
    explanation: 'Base del polvo para hornear: el calor libera CO2 y vapor de agua gaseosos que quedan atrapados en la masa provocando su esponjamiento.',
    bondChanges: '2 NaHCO3 -> Na2CO3 + H2O + CO2',
    source: { name: 'NIST WebBook', database: 'NIST', confidence: 'certified' },
  },

  // 20. Síntesis de cloruro de hidrógeno
  {
    id: 'rxn-hcl-synthesis',
    name: 'Síntesis de gas cloruro de hidrógeno',
    equation: 'H2 + Cl2 -> 2 HCl',
    type: 'synthesis',
    reactants: [
      { formula: 'H2', coefficient: 1, state: 'g', name: 'Gas hidrógeno' },
      { formula: 'Cl2', coefficient: 1, state: 'g', name: 'Gas cloro' },
    ],
    products: [
      { formula: 'HCl', coefficient: 2, state: 'g', name: 'Cloruro de hidrógeno' },
    ],
    enthalpyDeltaH: -184.6, // kJ/mol
    conditions: 'Luz ultravioleta o llama a 298 K',
    explanation: 'Mecanismo en cadena por radicales libres activado fotoquímicamente. Muy exotérmica, produce cloruro de hidrógeno gaseoso que disuelto en agua genera ácido clorhídrico.',
    bondChanges: '1 H-H y 1 Cl-Cl rotos -> 2 H-Cl polares formados',
    source: { name: 'NIST Chemistry WebBook', database: 'NIST', confidence: 'certified' },
  },

  // 21. Reacción de Termita (Aluminotermia)
  {
    id: 'rxn-thermite',
    name: 'Reacción de termita (Aluminotermia)',
    equation: 'Fe2O3 + 2 Al -> Al2O3 + 2 Fe',
    type: 'single-displacement',
    reactants: [
      { formula: 'Fe2O3', coefficient: 1, state: 's', name: 'Óxido de hierro (III)' },
      { formula: 'Al', coefficient: 2, state: 's', name: 'Polvo de aluminio' },
    ],
    products: [
      { formula: 'Al2O3', coefficient: 1, state: 's', name: 'Óxido de aluminio' },
      { formula: 'Fe', coefficient: 2, state: 'l', name: 'Hierro fundido líquido' },
    ],
    enthalpyDeltaH: -851.5, // kJ/mol
    conditions: 'Cinta de magnesio como iniciador a alta temperatura (>1500 °C)',
    explanation: 'La extraordinaria afinidad del aluminio por el oxígeno libera tal cantidad de calor que el hierro producido emerge en estado líquido incandescente a más de 2500 °C.',
    bondChanges: 'Reducción de Fe2O3 por Al -> Al2O3 + Fe fundido',
    source: { name: 'CRC Handbook Thermochemistry', database: 'CRC Handbook', confidence: 'certified' },
  },

  // 22. Descomposición del ácido carbónico en agua y CO2
  {
    id: 'rxn-h2co3-decomposition',
    name: 'Descomposición del ácido carbónico (Efervescencia)',
    equation: 'H2CO3 -> H2O + CO2',
    type: 'decomposition',
    reactants: [
      { formula: 'H2CO3', coefficient: 1, state: 'aq', name: 'Ácido carbónico' },
    ],
    products: [
      { formula: 'H2O', coefficient: 1, state: 'l', name: 'Agua' },
      { formula: 'CO2', coefficient: 1, state: 'g', name: 'Dióxido de carbono (burbujas)' },
    ],
    enthalpyDeltaH: -9.6, // kJ/mol
    conditions: 'Despresurización de bebidas carbonatadas a 298 K',
    explanation: 'Equilibrio de ácido carbónico que descompone espontáneamente al abrir un refresco, liberando burbujas de CO2 gaseoso.',
    bondChanges: 'H2CO3(aq) -> H2O(l) + CO2(g)',
    source: { name: 'NIST WebBook', database: 'NIST', confidence: 'certified' },
  },
];

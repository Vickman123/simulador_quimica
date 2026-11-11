# FUENTES METROLÓGICAS Y DATOS CIENTÍFICOS CERTIFICADOS
## Virtual Chemistry Lab (VCL) — Vickora Labs

---

# 1. Política de Integridad de Datos

En estricto apego a las instrucciones de diseño de Vickora Labs, **Virtual Chemistry Lab no utiliza datos ficticios, inventados ni estimaciones aleatorias**. Toda constante física, propiedad periódica o valor termodinámico presente en la plataforma proviene de repositorios y literatura científica de referencia internacional.

---

# 2. Fuentes Primarias

| Institución / Base de Datos | Rol en VCL | Cobertura en la Suite |
| :--- | :--- | :--- |
| **NIST Chemistry WebBook** (National Institute of Standards and Technology, EE.UU.) | Entalpías estándar de formación ($\Delta H^\circ_f$), energías de disociación de enlace ($D_e$), constantes espectroscópicas y potenciales de ionización. | M02, M06, M07 |
| **IUPAC Commission on Isotopic Abundances and Atomic Weights (CIAAW)** | Pesos atómicos estándar internacionales (118 elementos), masas molares y símbolos químicos canónicos. | M01, M02, M05 |
| **PubChem (National Library of Medicine / NIH)** | Conformadores moleculares 3D experimentales, coordenadas cartesianas certificadas, momentos dipolares en Debye y descriptores de Lewis. | M04, M05 |
| **CRC Handbook of Chemistry and Physics (104th Edition)** | Puntos de fusión y ebullición en Kelvin, radios atómicos covalentes y de Van der Waals en picómetros, constantes de solubilidad $K_{sp}$ y potenciales redox. | M01, M04, M06 |
| **Escala de Electronegatividad de Linus Pauling** | Valores numéricos de $\chi$ utilizados para clasificar los enlaces en covalentes no polares, covalentes polares e iónicos. | M01, M04 |

---

# 3. Unidades del Sistema Internacional y Convenciones

Para evitar cualquier mezcla errónea de unidades:
- **Distancias a nivel atómico / molecular**: Picómetros ($\text{pm}$) en radios atómicos y curvas de potencial; Ångströms ($\text{Å}$, donde $1\text{ Å} = 100\text{ pm} = 10^{-10}\text{ m}$) en coordenadas cartesianas 3D y longitudes de enlace.
- **Energías de Enlace y Reacción**: Kilojulios por mol ($\text{kJ/mol}$).
- **Energías de Ionización**: $\text{kJ/mol}$ (y electrón-voltios $\text{eV}$ en transiciones espectroscópicas de Bohr, donde $1\text{ eV} = 96.485\text{ kJ/mol}$).
- **Momentos Dipolares**: Debye ($\text{D}$, donde $1\text{ D} \approx 3.33564 \times 10^{-30}\text{ C}\cdot\text{m}$).
- **Masa Atómica y Molar**: Unidades de masa atómica ($\text{u}$) y gramos por mol ($\text{g/mol}$).
- **Temperatura y Presión Estándar**: $298.15\text{ K}$ ($25^\circ\text{C}$) y $101.325\text{ kPa}$ ($1\text{ atm}$).

---

# 4. Trazabilidad de Reacciones Químicas

Cada una de las 22 reacciones químicas incorporadas en el Reaction Lab incluye:
1. Ecuación estequiométrica balanceada verificada por conservación matricial de átomos.
2. Cambio entálpico estándar experimental ($\Delta H^\circ_{rxn}$).
3. Tipo de reacción clasificado por mecanismo (síntesis, descomposición, desplazamiento, neutralización, combustión, etc.).
4. Condiciones físicas de presión, temperatura o catalizador.
5. Cita bibliográfica al NIST WebBook o al CRC Handbook.

# CHEMISTRY ENGINE — ESPECIFICACIÓN CIENTÍFICA Y TÉCNICA
## Vickora Labs | Virtual Chemistry Lab (VCL)

---

# 1. Resumen

El paquete `@vcl/chem-engine` constituye el núcleo computacional y científico de Virtual Chemistry Lab. Ha sido diseñado para garantizar que cada interacción, construcción molecular o simulación de reacción obedezca rigurosamente las leyes de la física y la química, erradicando cualquier forma de alucinación de datos.

---

# 2. Subsistemas Químicos

### 2.1 Atomic Engine (`atomic/AtomicEngine.ts`)
- **Partículas Subatómicas**:
  - Número atómico: $Z = p$
  - Número de masa: $A = p + n$
  - Carga eléctrica neta: $q = p - e$
- **Isótopos y Estabilidad Nuclear**:
  - Identificación del isótopo estándar mediante masa atómica ponderada IUPAC.
  - Evaluación de estabilidad nuclear en base a la relación $N/Z$.
- **Modelos Atómicos Comparativos**:
  1. *Dalton (1803)*: Esferas sólidas rígidas e indivisibles; fundamento de las leyes ponderales de conservación de masa.
  2. *Thomson (1897)*: Descubrimiento del electrón; modelo de "pudín de pasas" con carga positiva distribuida uniformemente.
  3. *Rutherford (1911)*: Experimento de la lámina de oro; núcleo central hiperdenso positivo y electrones orbitando en el vacío.
  4. *Bohr (1913)*: Cuantización del momento angular; órbitas estacionarias permitidas $n=1, 2, 3...$; cálculo de niveles de energía $E_n = -13.606 \text{ eV} \cdot \frac{Z^2}{n^2}$ y cálculo de emisión fotónica mediante la fórmula de Rydberg.
  5. *Mecánico-Cuántico (1926)*: Ecuación de onda de Schrödinger; principio de incertidumbre de Heisenberg; densidades de probabilidad espacial $|\Psi|^2$; orbitales $s, p, d, f$.

### 2.2 Electron Engine (`electron/ElectronEngine.ts`)
- **Principio de Aufbau / Regla de Madelung ($n + l$)**:
  - Secuencia estricta de menor a mayor energía: $1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s, 4f, 5d, 6p, 7s, 5f, 6d, 7p$.
  - Anomalías experimentales de subcapa semillena o completa calibradas para $\text{Cr}$ ($4s^1 3d^5$), $\text{Cu}$ ($4s^1 3d^{10}$), $\text{Mo}$, $\text{Ag}$, $\text{Au}$, $\text{Pt}$.
- **Regla de Hund**:
  - En orbitales degenerados ($p_x, p_y, p_z$), los electrones se distribuyen primero individualmente con espín paralelo ($+1/2 \uparrow$) antes de aparearse con espín antiparalelo ($-1/2 \downarrow$).
- **Principio de Exclusión de Pauli**:
  - En un mismo orbital no pueden coexistir dos electrones con los cuatro números cuánticos idénticos (máximo 2 electrones por orbital, necesariamente con espines opuestos).
- **Propiedades Magnéticas**:
  - Conteo de electrones desapareados y momento magnético de espín puro: $\mu_s = \sqrt{N(N+2)}\, \mu_B$.

### 2.3 Bond Engine (`bonds/BondEngine.ts`)
- **Diferencia de Electronegatividad de Pauling ($\Delta \chi = |\chi_A - \chi_B|$)**:
  - $\Delta \chi < 0.4 \implies$ Covalente No Polar.
  - $0.4 \le \Delta \chi < 1.7 \implies$ Covalente Polar (formación de dipolo $\mu$ y cargas parciales $\delta^+ / \delta^-$).
  - $\Delta \chi \ge 1.7 \implies$ Enlace Iónico (transferencia neta de electrones).
  - Si ambos son metales $\implies$ Enlace Metálico ("mar de electrones").
- **Carácter Iónico Porcentual de Pauling**:
  $$\% \text{ Carácter Iónico} = 100 \cdot \left(1 - e^{-0.25 (\Delta \chi)^2}\right)$$
- **Estructuras y Regla del Octeto**:
  - Cálculo de carga formal: $FC = V - N_{\text{libres}} - \frac{1}{2} N_{\text{enlazantes}}$.
  - Manejo de excepciones: Regla del dueto ($\text{H}, \text{He}$), deficiencia electrónica ($\text{Be}, \text{B}$) y octeto expandido en elementos del periodo $\ge 3$ ($\text{P}, \text{S}, \text{Cl}$).

### 2.4 Geometry Engine (`geometry/GeometryEngine.ts`)
- **Teoría RPECV / VSEPR**:
  - Notación $AX_mE_n$ donde $A$ es el átomo central, $X$ los ligandos enlazados y $E$ los pares libres.
  - Determinación de formas moleculares tridimensionales:
    - $AX_2$: Lineal ($180^\circ$)
    - $AX_3$: Trigonal plana ($120^\circ$)
    - $AX_2E_1$: Angular ($\approx 119^\circ$)
    - $AX_4$: Tetraédrica regular ($109.5^\circ$, como en $\text{CH}_4$)
    - $AX_3E_1$: Trigonal piramidal ($107.3^\circ$, como en $\text{NH}_3$)
    - $AX_2E_2$: Angular ($104.5^\circ$, como en $\text{H}_2\text{O}$)
    - $AX_5$: Bipiramidal trigonal ($90^\circ, 120^\circ$)
    - $AX_6$: Octaédrica ($90^\circ$)
- **Síntesis de Coordenadas Cartesianas 3D**:
  - Cálculo trigonométrico exacto de vectores tridimensionales $[x, y, z]$ en Ångströms respetando los ángulos ideales de repulsión.

### 2.5 Reaction Engine (`reactions/ReactionEngine.ts`)
- **Balanceo Estequiométrico**:
  - Conservación de átomos elemento por elemento según la ley de Lavoisier:
    $$\sum_{\text{reactivos}} n_i \cdot c_{i, X} = \sum_{\text{productos}} m_j \cdot c_{j, X} \quad \forall X$$
- **Termodinámica Química ($\Delta H^\circ_{rxn}$)**:
  - Clasificación en reacciones exotérmicas ($\Delta H < 0$) y endotérmicas ($\Delta H > 0$).
  - Catálogo inmutable de 22 reacciones verificadas con fuentes científicas certificadas.
- **Principio Anti-Alucinación**:
  - Si un usuario ingresa combinaciones de reactivos sin respaldo experimental en el catálogo ni balance comprobado, el sistema responde explícitamente "Reacción no determinada".

### 2.6 Energy & Forces Engine (`energy/EnergyEngine.ts`)
- **Potencial Anarmónico de Morse**:
  $$V(r) = D_e \cdot \left[ \left(1 - e^{-a(r - r_e)}\right)^2 - 1 \right]$$
  Modela la disociación real de enlaces covalentes y la fuerza de restitución en torno a la distancia de equilibrio $r_e$.
- **Potencial de Lennard-Jones (12-6)**:
  $$V_{LJ}(r) = 4\varepsilon \left[ \left(\frac{\sigma}{r}\right)^{12} - \left(\frac{\sigma}{r}\right)^6 \right]$$
  Modela interacciones débiles de Van der Waals y fuerzas de dispersión de London.

# ARQUITECTURA DEL SISTEMA — VIRTUAL CHEMISTRY LAB (VCL)
## Vickora Labs | Plataforma de Simulación Científica 2D, 3D y WebXR

---

# 1. Visión Arquitectónica y Principios de Diseño

Virtual Chemistry Lab (VCL) ha sido concebido desde sus cimientos siguiendo los estándares de la ingeniería de software moderna: **arquitectura limpia orientada a dominios (Domain-Driven Design)**, desacoplamiento estricto de la lógica científica respecto a las capas de presentación y renderizado, y compatibilidad universal entre navegadores web convencionales y dispositivos de computación espacial como **Meta Quest 3S**.

### Principios Fundamentales
1. **Independencia del Dominio Químico (`packages/chem-engine`)**: El motor de cálculos atómicos, electrónicos, moleculares y estequiométricos no tiene dependencia alguna del DOM, de la interfaz de usuario ni de Three.js. Puede ejecutarse en Node.js, Web Workers, servidores o en el cliente.
2. **Cero Alucinaciones / Rigor Metrológico**: No se generan productos químicos arbitrarios ni propiedades inventadas. Toda la simulación está respaldada por datos empíricos de IUPAC, NIST y PubChem, o por algoritmos algebraicos exactos (conservación de masa y leyes periódicas).
3. **Desacoplamiento del Renderizado 3D (`packages/molecular-renderer`)**: La capa de visualización Three.js consume grafos moleculares y los transforma en mallas tridimensionales con sombreado de alta fidelidad, optimizado para renderizado a 90 Hz en visores VR.
4. **Integración Controlada con VXR Core (`packages/vxr-adapter`)**: El adaptador actúa como puente entre el framework espacial de Vickora Labs y VCL, orquestando sesiones WebXR `immersive-vr`, haces láser de mandos, agarre espacial 6-DoF y fallback transparente a escritorio.
5. **Bus de Eventos Tipado (`packages/shared`)**: Comunicación asíncrona reactiva y desacoplada entre módulos mediante eventos TypeScript estrictos (`VCLEvents`).

---

# 2. Diagrama de Capas del Sistema

```
┌────────────────────────────────────────────────────────────────────────┐
│                       CAPA DE PRESENTACIÓN (UI)                         │
│  apps/web (Dashboard, M01 Tabla Periódica, M02 Atómico, M03 e-, etc.)  │
└───────────────────▲────────────────────────────────▲───────────────────┘
                    │                                │
┌───────────────────┴────────────────┐   ┌───────────┴───────────────────┐
│        CAPA DE RENDERIZADO 3D      │   │   CAPA DE INTEGRACIÓN WEBXR   │
│     packages/molecular-renderer    │   │      packages/vxr-adapter     │
│   (Ball & Stick, Space Filling,    │   │  (Sesión VR, Mandos Quest 3S, │
│     Wireframe, Orbitales s/p)      │   │   Grab 6-DoF, HUD Espacial)   │
└───────────────────▲────────────────┘   └───────────▲───────────────────┘
                    │                                │
                    └────────────────┬───────────────┘
                                     │
┌────────────────────────────────────┴───────────────────────────────────┐
│                    MOTOR QUÍMICO PURO (CHEM-ENGINE)                    │
│                        packages/chem-engine                            │
│  ┌──────────────┬──────────────┬──────────────┬─────────────────────┐  │
│  │    Atomic    │   Electron   │    Bonds     │      Molecular      │  │
│  │    Engine    │    Engine    │    Engine    │       Engine        │  │
│  ├──────────────┼──────────────┼──────────────┼─────────────────────┤  │
│  │   Geometry   │  Reactions   │    Energy    │     Validation      │  │
│  │    (VSEPR)   │    Engine    │    Engine    │       Engine        │  │
│  └──────────────┴──────────────┴──────────────┴─────────────────────┘  │
└────────────────────────────────────▲───────────────────────────────────┘
                                     │
┌────────────────────────────────────┴───────────────────────────────────┐
│                    CAPA DE DATOS CIENTÍFICOS LOCALES                   │
│         118 Elementos IUPAC • 22 Reacciones NIST • Moléculas 3D        │
└────────────────────────────────────────────────────────────────────────┘
```

---

# 3. Módulos y Paquetes del Monorepo

### 3.1 `packages/chem-engine`
Motor científico puro escrito en TypeScript estricto.
- **`atomic/AtomicEngine.ts`**: Cálculo de partículas subatómicas ($p, n, e$), números de masa $A = Z + N$, carga neta $q = p - e$, isótopos, iones y los 5 modelos atómicos fundamentales (Dalton, Thomson, Rutherford, Bohr, Cuántico).
- **`electron/ElectronEngine.ts`**: Configuración electrónica cuántica mediante regla de Madelung (Aufbau), principio de exclusión de Pauli y regla de máxima multiplicidad de Hund. Cálculo de electrones de valencia y paramagnetismo.
- **`bonds/BondEngine.ts`**: Evaluación de enlaces covalentes (polar/no polar), iónicos y metálicos según escala de Pauling ($\Delta \chi$), cálculo de cargas parciales $\delta^+ / \delta^-$, estructuras de Lewis y fuerzas intermoleculares.
- **`geometry/GeometryEngine.ts`**: Teoría RPECV / VSEPR con notación $AX_mE_n$, ángulos de enlace ideales y cálculo trigonométrico de coordenadas espaciales 3D para átomos periféricos.
- **`molecular/MolecularEngine.ts`**: Grafo molecular interactivo, adición y remoción de átomos y enlaces, fórmula molecular Hill, fórmula empírica y masa molar estequiométrica.
- **`reactions/ReactionEngine.ts`**: Balanceador estequiométrico algebraico, conservación de átomos (Lavoisier), entalpía de reacción $\Delta H^\circ_{rxn}$ y catálogo de 22 reacciones educativas certificadas.
- **`energy/EnergyEngine.ts`**: Curvas de potencial internuclear de Morse y Lennard-Jones, pozo de potencial y distancia de equilibrio $r_e$.
- **`validation/ValidationEngine.ts`**: Validación estricta de consistencia física (Z vs p, carga vs p-e, valencias máximas, balance estequiométrico).

### 3.2 `packages/molecular-renderer`
Motor de renderizado 3D especializado en química con Three.js.
- Generación procedural de átomos con paleta CPK internacional y radios proporcionales.
- Enlaces con cilindros simples, dobles paralelos y triples concéntricos orientados por cuaterniones.
- Representaciones intercambiables en caliente: **Ball and Stick**, **Space Filling**, **Wireframe** y **Lewis**.
- Visualización de orbitales atómicos $s$ y lóbulos $p$ en ejes cartesianos con sombreado transmisivo.
- Raycasting interactivo con resaltado luminoso y selección.

### 3.3 `packages/vxr-adapter`
Capa de integración espacial con VXR Core y WebXR.
- Negociación de sesiones inmersivas `immersive-vr` con soporte a 90 Hz en Meta Quest 3S.
- Rig de controladores 6-DoF con rayos láser para selección e interacción ergonómica.
- `SpatialGrabController`: Algoritmo de agarre y rotación 6-DoF mediante delta de posición y multiplicación de cuaterniones, con escalado analógico vía joystick.
- `SpatialLabScene`: Escenario de laboratorio futurista oscuro con pedestal holográfico y panel HUD 3D en tiempo real.
- Fallback automático y robusto a modo Desktop cuando no se detecta hardware VR.

---

# 4. Flujo de Datos Reactivo

```
[Usuario / Mandos Quest]
          │
          ▼
[VCL Presentation / XR Adapter] ────(Acción de construcción o reacción)───┐
                                                                           │
                                                                           ▼
[TypedEventBus] ◀─────────────────────────────────────────────────── [Chem Engine]
      │                                                        (Valida reglas,
      ├──────────────────────────────┬───────────────────────── masa, octeto, ΔH)
      ▼                              ▼
[MolecularRenderer]          [Paneles de Datos UI]
(Actualiza mallas 3D,        (Muestra fórmulas,
 VSEPR, enlaces y colores)    gráficas y alertas)
```

---

# 5. Garantías de Rendimiento en Meta Quest 3S

1. **Reutilización de Geometrías**: Una única instancia de `SphereGeometry` y `CylinderGeometry` es compartida por todos los átomos y enlaces mediante escalado en matriz de transformación, reduciendo la memoria GPU.
2. **Presupuesto de Draw Calls**: Mantenido por debajo de 80 draw calls en la escena del laboratorio.
3. **Materiales Eficientes**: Uso controlado de `MeshStandardMaterial` con rugosidad precalculada y sin post-procesamiento pesado que degrade la tasa de 90 fps requerida para confort visual.

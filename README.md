# VIRTUAL CHEMISTRY LAB (VCL)
### Vickora Labs | Scientific Simulation Platform | Web 3D + XR

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-0.187-black?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![WebXR](https://img.shields.io/badge/WebXR-Meta_Quest_3S-8b5cf6?style=for-the-badge&logo=meta)](https://immersiveweb.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646cff?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tests](https://img.shields.io/badge/Tests-33%20Passing-10b981?style=for-the-badge)](https://github.com/Vickman123/simulador_quimica)

> Plataforma educativa y científica de simulación química de alta fidelidad, con capacidades 2D, 3D interactivo y realidad extendida (WebXR) para **Meta Quest 3S**, computadoras de escritorio y tablets. Desarrollado por **Vickora Labs**.

---

## 🔬 Identidad y Propósito

**Virtual Chemistry Lab (VCL)** combina el rigor científico con una experiencia inmersiva espacial contemporánea. Diseñado para estudiantes de bachillerato, permite explorar la materia desde el nivel subatómico hasta el molecular, construir sustancias en 3D, comprender los enlaces químicos, balancear reacciones y visualizar curvas de potencial internuclear.

La plataforma opera bajo el principio de **Cero Alucinaciones**: no inventa propiedades ni genera resultados arbitrarios. Toda simulación se fundamenta en constantes metrológicas de **NIST Chemistry WebBook**, **IUPAC CIAAW**, **PubChem** y el **CRC Handbook**.

---

## 🏛️ Arquitectura del Sistema

El proyecto sigue una arquitectura modular y desacoplada organizada en paquetes:

```text
simulador_quimica/
│
├── packages/
│   ├── chem-engine/            # Motor científico puro (cero dependencias DOM/3D)
│   │   ├── atomic/             # Protones, neutrones, electrones, 5 modelos atómicos
│   │   ├── electron/           # Regla de Madelung (Aufbau), Pauli, Hund, valencia
│   │   ├── bonds/              # Enlaces iónicos, covalentes, metálicos, Lewis
│   │   ├── molecular/          # Grafos moleculares, masas molares, fórmula Hill
│   │   ├── geometry/           # Teoría RPECV / VSEPR y coordenadas 3D
│   │   ├── reactions/          # Balanceador estequiométrico, 22 reacciones NIST
│   │   ├── energy/             # Potenciales de Morse y Lennard-Jones
│   │   ├── validation/         # Validación estricta y anti-alucinaciones
│   │   └── data/               # 118 elementos IUPAC y datos moleculares
│   │
│   ├── molecular-renderer/     # Renderizador 3D Three.js
│   │   ├── atoms/              # Mallas CPK con radios proporcionados
│   │   ├── bonds/              # Cilindros simples, dobles y triples
│   │   ├── representations/    # Ball & Stick, Space Filling, Wireframe
│   │   └── orbitals/           # Visualización didáctica de orbitales s y p
│   │
│   ├── vxr-adapter/            # Adaptador VXR Core y puente WebXR
│   │   ├── VCLXRBridge.ts      # Ciclo de vida WebXR y fallback desktop
│   │   ├── SpatialGrabController.ts # Agarre y rotación 6-DoF en Meta Quest 3S
│   │   └── SpatialLabScene.ts  # Escenario de laboratorio y HUD espacial 3D
│   │
│   └── shared/                 # Tipos TypeScript, constantes y bus de eventos
│
├── src/                        # Aplicación Web & Móvil (apps/web)
│   ├── components/             # Módulos M01 a M10
│   ├── styles/                 # Glassmorphism científico, paleta azul marina y cyan
│   └── main.ts                 # Orquestador y enrutador de la SPA
│
├── tests/                      # Suite de pruebas automatizadas (33 tests pasando)
│   ├── chemistry.test.ts       # Pruebas atómicas, moleculares, enlaces y reacciones
│   └── xr.test.ts              # Pruebas de interacción espacial 6-DoF y WebXR
│
└── docs/                       # Documentación técnica completa
    ├── ARCHITECTURE.md         # Arquitectura detallada y flujo de datos
    ├── CHEMISTRY_ENGINE.md     # Fundamentos teóricos del motor químico
    ├── SCIENTIFIC_SOURCES.md   # Metrología y fuentes NIST / IUPAC / PubChem
    ├── XR_INTEGRATION.md       # Guía de WebXR y Meta Quest 3S
    ├── DATA_MODEL.md           # Contratos TypeScript e interfaces
    └── ROADMAP.md              # Próximas versiones y funcionalidades
```

---

## 📦 Módulos Funcionales (M01 — M10)

| Módulo | Nombre | Descripción |
| :--- | :--- | :--- |
| **M01** | **Periodic Explorer** | Tabla periódica interactiva de 118 elementos con filtros por familias, búsqueda en tiempo real y fichas técnicas modales completas. |
| **M02** | **Atomic Studio** | Constructor subatómico ($p, n, e$), isótopos, iones y comparativa de los 5 modelos atómicos: Dalton, Thomson, Rutherford, Bohr y Mecánico-Cuántico. |
| **M03** | **Electron Lab** | Diagrama de energía de Aufbau, casillas de orbitales con regla de Hund ($\uparrow \downarrow$), principio de Pauli y cálculo de electrones de valencia. |
| **M04** | **Bond Studio** | Simulador de enlaces según la escala de Pauling ($\Delta \chi$), cálculo de cargas parciales $\delta^+ / \delta^-$, estructuras de Lewis y fuerzas intermoleculares. |
| **M05** | **Molecular Builder** | Constructor molecular 3D (evolución de *Moléculas*) con geometría VSEPR automática y representaciones Ball & Stick, Space Filling y Wireframe. |
| **M06** | **Reaction Lab** | Catálogo de 22 reacciones verificadas, balanceador estequiométrico automático y auditoría de conservación de átomos (Lavoisier). |
| **M07** | **Energy & Forces** | Gráficas interactivas de potencial de Morse y Lennard-Jones, distancia de equilibrio $r_0$ y cálculo de la energía de disociación de enlace. |
| **M08** | **Immersive Lab** | Laboratorio espacial para **Meta Quest 3S** con agarre 6-DoF, rotación espacial con mandos Touch Plus y panel holográfico 3D. |
| **M09** | **Learning Center** | Entorno pedagógico de bachillerato con lecciones guiadas, bitácora de laboratorio interactiva con guardado local y cuestionarios. |
| **M10** | **Asistente IA** | Capa de asesoría pedagógica inteligente contextualizada en el motor químico, sin alucinaciones. |

---

## 🚀 Instalación y Puesta en Marcha

### Prerrequisitos
- **Node.js**: v20.x o v24.x instalado.
- **npm**: v10.x o superior.

### 1. Clonar el repositorio
```bash
git clone https://github.com/Vickman123/simulador_quimica.git
cd simulador_quimica
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar suite de pruebas automatizadas
```bash
npm test
```
*Ejecuta los 33 tests unitarios y de integración de química y WebXR garantizando 100% de éxito.*

### 4. Iniciar servidor de desarrollo
```bash
npm run dev
```
Abre tu navegador en `http://localhost:3000`.

### 5. Compilar para producción
```bash
npm run build
npm run preview
```

---

## 🥽 Instrucciones para Meta Quest 3S / WebXR

1. Conecta tu computadora y tu visor **Meta Quest 3S** a la **misma red Wi-Fi**.
2. Inicia el servidor de desarrollo exponiendo la red local:
   ```bash
   npm run dev -- --host
   ```
3. En el visor Meta Quest 3S, abre **Meta Quest Browser**.
4. Escribe la dirección IP local de tu ordenador (ejemplo: `http://192.168.1.45:3000`).
5. En la interfaz de VCL, pulsa el botón morado **"WebXR"** o ingresa a **M08 — Immersive Lab**.
6. **Mapeo de Mandos Touch Plus**:
   - **Gatillo Frontal (Index Trigger)**: Selecciona átomos y consulta datos en el HUD espacial flotante.
   - **Botón Lateral de Agarre (Grip / Squeeze)**: Agarra la molécula en el espacio y rótala en 6 grados de libertad (6-DoF) con tu mano.
   - **Palanca Analógica (Thumbstick)**: Escala la molécula para acercarla o alejarla.

*Si navegas desde PC o Mac sin visor, el laboratorio funciona de forma continua con controles orbitales de ratón (`OrbitControls`).*

---

## 🧪 Validación y Cobertura de Pruebas

El proyecto cuenta con 33 pruebas automatizadas ejecutables con `npm test`:

- **Pruebas Atómicas**: Construcción de Hidrógeno, Oxígeno-16, Carbono-12, ion $\text{Na}^+$ e ion $\text{Cl}^-$, y validación de los 5 modelos atómicos.
- **Pruebas Electrónicas**: Configuración de Carbono ($1s^2 2s^2 2p^2$), regla de Hund y anomalía experimental de Cobre Z=29 ($4s^1 3d^{10}$).
- **Pruebas de Enlaces**: Enlace $\text{O-H}$ (covalente polar), $\text{C=O}$ (orden 2), $\text{NaCl}$ (iónico) y regla del octeto.
- **Pruebas Moleculares**: Presencia de $\text{H}_2\text{O}$, $\text{CO}_2$, $\text{CH}_4$, $\text{NH}_3$, $\text{O}_2$, $\text{N}_2$, geometría tetraédrica de $\text{CH}_4$ y fórmula Hill dinámica.
- **Pruebas de Reacciones**: Formación de agua ($2\text{H}_2 + \text{O}_2 \to 2\text{H}_2\text{O}$), neutralización $\text{HCl} + \text{NaOH}$, combustión de metano y descomposición de $\text{CaCO}_3$, y rechazo explícito de reactivos desconocidos (anti-alucinación).
- **Pruebas de Validación**: Detección de ecuaciones desbalanceadas, conservación de masa (Lavoisier), inconsistencias de carga e hipervalencia no física.
- **Pruebas de Interacción Espacial WebXR**: Ciclo de agarre 6-DoF, rotación, escalado proporcional, liberación y fallback desktop.

---

## 📜 Licencia y Atribución

Desarrollado por **Vickora Labs** & **Vickman123**.  
Licencia MIT. Datos científicos acreditados a NIST Chemistry WebBook, IUPAC CIAAW y PubChem.

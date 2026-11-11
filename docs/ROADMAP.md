# ROADMAP DE DESARROLLO — VIRTUAL CHEMISTRY LAB (VCL)
## Vickora Labs | Evolución del Producto

---

# 1. Versión 1.0 (MVP Actual — Q4 2026) ✓
- [x] Arquitectura monorepo TypeScript modular y desacoplada.
- [x] Motor químico puro (`packages/chem-engine`) con validación física estricta.
- [x] Base de datos local inmutable con los 118 elementos periódicos y 22 reacciones certificadas por NIST y PubChem.
- [x] M01: Tabla Periódica Interactiva con búsqueda, filtros y fichas técnicas modales.
- [x] M02: Atomic Studio con constructor subatómico y los 5 modelos atómicos (Dalton, Thomson, Rutherford, Bohr, Cuántico).
- [x] M03: Electron Lab con principio de Aufbau, diagramas de casillas y regla de Hund.
- [x] M04: Bond Studio con escala de Pauling, estructuras de Lewis y fuerzas intermoleculares.
- [x] M05: Molecular Builder 3D con Ball & Stick, Space Filling, Wireframe y VSEPR.
- [x] M06: Reaction Lab con balanceador estequiométrico y auditoría de conservación de masa.
- [x] M07: Energy & Forces con curvas interactivas de potencial de Morse y Lennard-Jones.
- [x] M08: Immersive Lab con integración WebXR para Meta Quest 3S (agarre y rotación 6-DoF).
- [x] M09: Learning Center con lecciones de bachillerato, bitácora interactiva exportable y cuestionarios.
- [x] M10: Capa de Asistente Científico IA contextual basada en el motor químico.
- [x] 33 pruebas unitarias y de integración pasando al 100%.

---

# 2. Versión 1.1 (Q1 2027)
- [ ] **Integración RDKit.js WebAssembly**: Cálculo de descriptores fisicoquímicos avanzados (cLogP, TPSA, violaciones de Lipinski) directamente en el navegador.
- [ ] **Malla Isosuperficial de Densidad Electrónica**: Shaders volumétricos WebGL para mapas de potencial electrostático molecular (MEP).
- [ ] **Exportación Mol2 / PDB / XYZ**: Descarga de estructuras moleculares construidas por el estudiante en formatos estandarizados de bioinformática.

---

# 3. Versión 2.0 (Q2 2027)
- [ ] **Colaboración Multiusuario en WebXR**: Varios estudiantes en el mismo laboratorio virtual compartiendo moléculas y realizando prácticas en equipo mediante WebSockets / WebRTC.
- [ ] **Dinámica Molecular en Tiempo Real**: Simulación basada en campos de fuerza mecánicos para flexión de ángulos y torsiones térmicas.
- [ ] **Módulo de Química Orgánica y Grupos Funcionales**: Reconocimiento automático de alcoholes, aldehídos, cetonas, ácidos carboxílicos y ésteres.

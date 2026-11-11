# INTEGRACIÓN WEBXR Y GUÍA META QUEST 3S
## Virtual Chemistry Lab (VCL) — Vickora Labs

---

# 1. Arquitectura de Integración WebXR

Virtual Chemistry Lab está preparado para ejecutarse de forma nativa en navegadores con soporte de la API estándar **WebXR Device API**, con optimizaciones de rendimiento y ergonomía dedicadas específicamente para **Meta Quest 3S** y visores de la familia Meta Quest.

La integración se realiza a través de `packages/vxr-adapter`, que implementa:
1. **Detección Dinámica de Hardware**: Consulta `navigator.xr.isSessionSupported('immersive-vr')`.
2. **Ciclo de Sesión Seguro**: Petición de sesión WebXR en espacio de referencia `local-floor` con características opcionales de seguimiento de manos (`hand-tracking`) y límites guardian (`bounded-floor`).
3. **Rig de Controladores Touch Plus 6-DoF**: Renderizado de haces láser (`VXR_LaserRay`) desde los mandos y captura de eventos de gatillo (`select`) y agarre lateral (`squeeze`).
4. **Manipulación Espacial de Estructuras (Spatial Grab & Rotate)**: Permite a los estudiantes interactuar de forma táctil y tridimensional con las moléculas.
5. **Fallback Transparente a Desktop**: En computadoras convencionales sin visor VR, la escena 3D se visualiza en el canvas mediante navegación orbital suave (`OrbitControls`), sin arrojar errores ni bloquear la interfaz.

---

# 2. Guía de Ejecución en Meta Quest 3S

### 2.1 Preparación de la Red Local
1. Asegúrate de que el equipo donde se ejecuta el servidor de desarrollo (`npm run dev`) y el visor Meta Quest 3S estén conectados a la **misma red Wi-Fi**.
2. Identifica la dirección IP local de tu máquina de desarrollo (ejemplo: `192.168.1.45`).
3. Inicia el servidor VCL con soporte de red habilitado:
   ```bash
   npm run dev -- --host
   ```
   El servidor responderá con una dirección como `http://192.168.1.45:3000`.

### 2.2 Acceso desde el Visor
1. Colócate el visor **Meta Quest 3S**.
2. Abre la aplicación nativa **Meta Quest Browser**.
3. En la barra de direcciones URL, escribe la IP local: `http://192.168.x.x:3000`.
4. Una vez cargada la interfaz científica de VCL, pulsa el botón morado superior **"WebXR"** o navega al módulo **"M08 — Immersive Lab"** y selecciona **"Iniciar Sesión Inmersiva WebXR"**.
5. Acepta el permiso del navegador para ingresar a la experiencia de Realidad Virtual.

---

# 3. Mapeo de Controles en Meta Quest 3S

```
                  ┌──────────────────────┐
                  │ META QUEST TOUCH PLUS│
                  └──────────┬───────────┘
                             │
     ┌───────────────────────┼───────────────────────┐
     │                       │                       │
     ▼                       ▼                       ▼
[Gatillo Frontal]       [Grip Lateral]         [Thumbstick]
  (Index Trigger)        (Hand Squeeze)         (Joystick)
         │                       │                   │
         ▼                       ▼                   ▼
 Selección de átomos     Agarre 6-DoF y       Escalar molécula
 e inspección en HUD     rotación espacial     (Zoom in / out)
```

---

# 4. Optimizaciones para 90 Hz en Meta Quest 3S

- **Instanciación y Geometrías Compartidas**: Todos los átomos de la escena comparten una única malla esférica unitaria instanciada, recalculando únicamente la matriz de escala y color CPK.
- **Evitación de Shaders Costosos**: Se prescinde de sombras en cascada dinámicas complejas o reflejos en tiempo real pesados que penalicen el chip Snapdragon XR2 Gen 2.
- **Tasa de Refresco Estable**: Se negocia el modo de 90 fotogramas por segundo para evitar fatiga visual o cinetosis en los estudiantes.

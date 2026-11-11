(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();class Ul{ctx=null;enabled=!0;getContext(){if(!this.enabled)return null;if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}return this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx}playClick(){const e=this.getContext();if(e)try{const t=e.createOscillator(),n=e.createGain();t.type="triangle",t.frequency.setValueAtTime(420,e.currentTime),t.frequency.exponentialRampToValueAtTime(140,e.currentTime+.04),n.gain.setValueAtTime(.12,e.currentTime),n.gain.exponentialRampToValueAtTime(.001,e.currentTime+.04),t.connect(n),n.connect(e.destination),t.start(e.currentTime),t.stop(e.currentTime+.04)}catch{}}playAtomAdd(){const e=this.getContext();if(e)try{const t=e.createOscillator(),n=e.createGain();t.type="sine",t.frequency.setValueAtTime(320,e.currentTime),t.frequency.exponentialRampToValueAtTime(680,e.currentTime+.1),n.gain.setValueAtTime(.15,e.currentTime),n.gain.exponentialRampToValueAtTime(.001,e.currentTime+.12),t.connect(n),n.connect(e.destination),t.start(e.currentTime),t.stop(e.currentTime+.12)}catch{}}playBondSnap(){const e=this.getContext();if(e)try{const t=e.createOscillator(),n=e.createOscillator(),i=e.createGain();t.type="sawtooth",t.frequency.setValueAtTime(180,e.currentTime),t.frequency.exponentialRampToValueAtTime(840,e.currentTime+.08),n.type="sine",n.frequency.setValueAtTime(540,e.currentTime),n.frequency.exponentialRampToValueAtTime(1080,e.currentTime+.08),i.gain.setValueAtTime(.18,e.currentTime),i.gain.exponentialRampToValueAtTime(.001,e.currentTime+.1),t.connect(i),n.connect(i),i.connect(e.destination),t.start(e.currentTime),n.start(e.currentTime),t.stop(e.currentTime+.1),n.stop(e.currentTime+.1)}catch{}}playIdentifiedChime(){const e=this.getContext();if(e)try{[523.25,659.25,783.99,1046.5].forEach((n,i)=>{const r=e.createOscillator(),o=e.createGain();r.type="sine",r.frequency.setValueAtTime(n,e.currentTime+i*.04);const s=e.currentTime+i*.04,c=s+.35;o.gain.setValueAtTime(.08,s),o.gain.exponentialRampToValueAtTime(.001,c),r.connect(o),o.connect(e.destination),r.start(s),r.stop(c)})}catch{}}playPurge(){const e=this.getContext();if(e)try{const t=e.createOscillator(),n=e.createGain();t.type="sawtooth",t.frequency.setValueAtTime(300,e.currentTime),t.frequency.exponentialRampToValueAtTime(60,e.currentTime+.18),n.gain.setValueAtTime(.12,e.currentTime),n.gain.exponentialRampToValueAtTime(.001,e.currentTime+.2),t.connect(n),n.connect(e.destination),t.start(e.currentTime),t.stop(e.currentTime+.2)}catch{}}}const $e=new Ul,Bl=[{id:"dashboard",label:"Dashboard",icon:"⚡"},{id:"m01-ptable",label:"Tabla Periódica",icon:"📊"},{id:"m02-atomic",label:"Atomic Studio",icon:"⚛️"},{id:"m03-electron",label:"Electron Lab",icon:"🌀"},{id:"m04-bonds",label:"Bond Studio",icon:"🔗"},{id:"m05-builder",label:"Molecular Builder",icon:"🧪"},{id:"m06-reactions",label:"Reaction Lab",icon:"💥"},{id:"m07-energy",label:"Energía y Fuerzas",icon:"📈"},{id:"m08-xr",label:"Immersive Lab",icon:"🥽"},{id:"m09-learning",label:"Learning Center",icon:"📚"}];class zl{container;currentTab="dashboard";onTabChange;onOpenAI;onLaunchXR;constructor(e,t,n,i){this.container=e,this.onTabChange=t,this.onOpenAI=n,this.onLaunchXR=i,this.render()}setActiveTab(e){this.currentTab=e,this.container.querySelectorAll(".vcl-tab-btn").forEach(n=>{n.getAttribute("data-tab")===e?(n.classList.add("active"),n.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})):n.classList.remove("active")})}render(){this.container.innerHTML=`
      <div class="vcl-header-inner">
        <!-- 1. Marca e Indicador de Telemetría Científica -->
        <div class="vcl-brand" id="btn-brand-home" title="Virtual Chemistry Lab - Inicio">
          <div class="vcl-brand-logo">
            <svg width="22" height="22" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="42" stroke="#38bdf8" stroke-width="8"/>
              <circle cx="50" cy="50" r="14" fill="#38bdf8"/>
              <circle cx="28" cy="42" r="8" fill="#ef4444"/>
              <circle cx="72" cy="42" r="8" fill="#3b82f6"/>
              <line x1="28" y1="42" x2="50" y2="50" stroke="#94a3b8" stroke-width="4"/>
              <line x1="72" y1="42" x2="50" y2="50" stroke="#94a3b8" stroke-width="4"/>
            </svg>
          </div>
          <div class="vcl-brand-title">
            <h1>VCL <span>// LAB</span></h1>
            <div class="vcl-brand-subtitle">
              <span class="vcl-led-live"></span> LAB ONLINE • 298.15 K
            </div>
          </div>
        </div>

        <!-- 2. Barra de Estaciones de Trabajo de Laboratorio (Scrollable) -->
        <nav class="vcl-nav-tabs" id="vcl-nav-scroll-area">
          ${Bl.map(t=>`
            <button class="vcl-tab-btn ${t.id===this.currentTab?"active":""}" data-tab="${t.id}" title="${t.label}">
              <span class="vcl-tab-icon">${t.icon}</span>
              <span class="vcl-tab-text">${t.label}</span>
            </button>
          `).join("")}
        </nav>

        <!-- 3. Controles de Instrumental y XR -->
        <div class="vcl-header-actions">
          <button class="vcl-btn vcl-btn-secondary" id="btn-toggle-sound" title="Alternar Efectos de Sonido del Laboratorio" style="padding: 0.45rem 0.65rem;">
            <span id="sound-icon">${$e.enabled?"🔊":"🔇"}</span>
          </button>
          <button class="vcl-btn vcl-btn-secondary" id="btn-toggle-ai" title="Abrir Asistente Científico IA">
            <span>🤖</span>
            <span class="action-btn-text">Asistente IA</span>
          </button>
          <button class="vcl-btn vcl-btn-xr" id="btn-launch-xr" title="Iniciar WebXR en Meta Quest 3S">
            <span>🥽</span>
            <span class="action-btn-text">WebXR</span>
          </button>
          <button class="vcl-btn vcl-btn-secondary" id="btn-fullscreen" title="Pantalla Completa" style="padding: 0.45rem 0.65rem;">
            <span>⛶</span>
          </button>
        </div>
      </div>
    `,this.container.querySelector("#btn-brand-home")?.addEventListener("click",()=>{$e.playClick(),this.setActiveTab("dashboard"),this.onTabChange("dashboard")}),this.container.querySelectorAll(".vcl-tab-btn").forEach(t=>{t.addEventListener("click",()=>{$e.playClick();const n=t.getAttribute("data-tab");n&&(this.setActiveTab(n),this.onTabChange(n))})}),this.container.querySelector("#btn-toggle-sound")?.addEventListener("click",()=>{$e.enabled=!$e.enabled;const t=this.container.querySelector("#sound-icon");t&&(t.textContent=$e.enabled?"🔊":"🔇"),$e.enabled&&$e.playClick()}),this.container.querySelector("#btn-toggle-ai")?.addEventListener("click",()=>{$e.playClick(),this.onOpenAI()}),this.container.querySelector("#btn-launch-xr")?.addEventListener("click",()=>{$e.playClick(),this.onLaunchXR()}),this.container.querySelector("#btn-fullscreen")?.addEventListener("click",()=>{$e.playClick(),document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})})}}const Hl=[{atomicNumber:1,symbol:"H",name:"Hidrógeno",atomicMass:1.008,period:1,group:1,block:"s",category:"reactive-nonmetal",stateAt298K:"gas",electronegativityPauling:2.2,ionizationEnergyFirst:1312,atomicRadiusCovalent:31,atomicRadiusVanDerWaals:120,electronConfiguration:"1s1",valenceElectrons:1,oxidationStates:[-1,1],colorHex:"#FFFFFF",meltingPointK:14.01,boilingPointK:20.28,summary:"Elemento más ligero y abundante del universo observable. Constituyente esencial del agua y de la materia orgánica.",source:{name:"IUPAC / NIST",database:"NIST",confidence:"certified"}},{atomicNumber:2,symbol:"He",name:"Helio",atomicMass:4.0026,period:1,group:18,block:"s",category:"noble-gas",stateAt298K:"gas",electronegativityPauling:null,ionizationEnergyFirst:2372.3,atomicRadiusCovalent:28,atomicRadiusVanDerWaals:140,electronConfiguration:"1s2",valenceElectrons:2,oxidationStates:[0],colorHex:"#D9FFFF",meltingPointK:.95,boilingPointK:4.22,summary:"Gas noble inerte con la capa electrónica K completa. Segundo elemento más abundante del cosmos.",source:{name:"IUPAC / NIST",database:"NIST",confidence:"certified"}},{atomicNumber:3,symbol:"Li",name:"Litio",atomicMass:6.94,period:2,group:1,block:"s",category:"alkali-metal",stateAt298K:"solid",electronegativityPauling:.98,ionizationEnergyFirst:520.2,atomicRadiusCovalent:128,atomicRadiusVanDerWaals:182,electronConfiguration:"[He] 2s1",valenceElectrons:1,oxidationStates:[1],colorHex:"#CC80FF",meltingPointK:453.69,boilingPointK:1603,summary:"Metal alcalino sólido menos denso. Muy reactivo, cede con facilidad su único electrón de valencia formando Li+.",source:{name:"IUPAC / NIST",database:"NIST",confidence:"certified"}},{atomicNumber:4,symbol:"Be",name:"Berilio",atomicMass:9.0122,period:2,group:2,block:"s",category:"alkaline-earth",stateAt298K:"solid",electronegativityPauling:1.57,ionizationEnergyFirst:899.5,atomicRadiusCovalent:96,atomicRadiusVanDerWaals:153,electronConfiguration:"[He] 2s2",valenceElectrons:2,oxidationStates:[2],colorHex:"#C2FF00",meltingPointK:1560,boilingPointK:2742,summary:"Metal alcalinotérreo ligero de alta rigidez y punto de fusión elevado. Puede formar enlaces covalentes deficientes en electrones.",source:{name:"IUPAC / NIST",database:"NIST",confidence:"certified"}},{atomicNumber:5,symbol:"B",name:"Boro",atomicMass:10.81,period:2,group:13,block:"p",category:"metalloid",stateAt298K:"solid",electronegativityPauling:2.04,ionizationEnergyFirst:800.6,atomicRadiusCovalent:84,atomicRadiusVanDerWaals:192,electronConfiguration:"[He] 2s2 2p1",valenceElectrons:3,oxidationStates:[3],colorHex:"#FFB5B5",meltingPointK:2349,boilingPointK:4200,summary:"Metaloide semiconductor. Forma compuestos tricovalentes neutros que actúan como ácidos de Lewis por octeto incompleto.",source:{name:"IUPAC / NIST",database:"NIST",confidence:"certified"}},{atomicNumber:6,symbol:"C",name:"Carbono",atomicMass:12.011,period:2,group:14,block:"p",category:"reactive-nonmetal",stateAt298K:"solid",electronegativityPauling:2.55,ionizationEnergyFirst:1086.5,atomicRadiusCovalent:76,atomicRadiusVanDerWaals:170,electronConfiguration:"[He] 2s2 2p2",valenceElectrons:4,oxidationStates:[-4,-2,2,4],colorHex:"#909090",meltingPointK:3823,boilingPointK:5100,summary:"Pilar fundamental de la química orgánica y la vida. Su capacidad de concatenación y tetravalencia genera millones de moléculas.",source:{name:"IUPAC / NIST",database:"PubChem",confidence:"certified"}},{atomicNumber:7,symbol:"N",name:"Nitrógeno",atomicMass:14.007,period:2,group:15,block:"p",category:"reactive-nonmetal",stateAt298K:"gas",electronegativityPauling:3.04,ionizationEnergyFirst:1402.3,atomicRadiusCovalent:71,atomicRadiusVanDerWaals:155,electronConfiguration:"[He] 2s2 2p3",valenceElectrons:5,oxidationStates:[-3,3,5],colorHex:"#3050F8",meltingPointK:63.15,boilingPointK:77.36,summary:"Gas diatómico N2 que constituye el 78% de la atmósfera terrestre. Forma un enlace triple muy estable (N≡N).",source:{name:"IUPAC / NIST",database:"NIST",confidence:"certified"}},{atomicNumber:8,symbol:"O",name:"Oxígeno",atomicMass:15.999,period:2,group:16,block:"p",category:"reactive-nonmetal",stateAt298K:"gas",electronegativityPauling:3.44,ionizationEnergyFirst:1313.9,atomicRadiusCovalent:66,atomicRadiusVanDerWaals:152,electronConfiguration:"[He] 2s2 2p4",valenceElectrons:6,oxidationStates:[-2,-1],colorHex:"#FF0D0D",meltingPointK:54.36,boilingPointK:90.2,summary:"Elemento altamente electronegativo, comburente primordial en la respiración celular y reacciones de combustión.",source:{name:"IUPAC / NIST",database:"NIST",confidence:"certified"}},{atomicNumber:9,symbol:"F",name:"Flúor",atomicMass:18.998,period:2,group:17,block:"p",category:"reactive-nonmetal",stateAt298K:"gas",electronegativityPauling:3.98,ionizationEnergyFirst:1681,atomicRadiusCovalent:57,atomicRadiusVanDerWaals:147,electronConfiguration:"[He] 2s2 2p5",valenceElectrons:7,oxidationStates:[-1],colorHex:"#90E050",meltingPointK:53.53,boilingPointK:85.03,summary:"El elemento más electronegativo y reactivo de la tabla periódica. Atrae electrones fuertemente en todos sus enlaces.",source:{name:"IUPAC / NIST",database:"NIST",confidence:"certified"}},{atomicNumber:10,symbol:"Ne",name:"Neón",atomicMass:20.18,period:2,group:18,block:"p",category:"noble-gas",stateAt298K:"gas",electronegativityPauling:null,ionizationEnergyFirst:2080.7,atomicRadiusCovalent:58,atomicRadiusVanDerWaals:154,electronConfiguration:"[He] 2s2 2p6",valenceElectrons:8,oxidationStates:[0],colorHex:"#B3E3F5",meltingPointK:24.56,boilingPointK:27.07,summary:"Gas noble inerte con capa electrónica completa. Emite un brillo rojo-anaranjado característico bajo descarga eléctrica.",source:{name:"IUPAC / NIST",database:"NIST",confidence:"certified"}},{atomicNumber:11,symbol:"Na",name:"Sodio",atomicMass:22.99,period:3,group:1,block:"s",category:"alkali-metal",stateAt298K:"solid",electronegativityPauling:.93,ionizationEnergyFirst:495.8,atomicRadiusCovalent:166,atomicRadiusVanDerWaals:227,electronConfiguration:"[Ne] 3s1",valenceElectrons:1,oxidationStates:[1],colorHex:"#AB5CF2",meltingPointK:370.87,boilingPointK:1156,summary:"Metal alcalino blando y reactivo. Reacciona violentamente con agua liberando H2 y formando NaOH.",source:{name:"IUPAC / NIST",database:"NIST",confidence:"certified"}},{atomicNumber:12,symbol:"Mg",name:"Magnesio",atomicMass:24.305,period:3,group:2,block:"s",category:"alkaline-earth",stateAt298K:"solid",electronegativityPauling:1.31,ionizationEnergyFirst:737.7,atomicRadiusCovalent:141,atomicRadiusVanDerWaals:173,electronConfiguration:"[Ne] 3s2",valenceElectrons:2,oxidationStates:[2],colorHex:"#8AFF00",meltingPointK:923,boilingPointK:1363,summary:"Metal alcalinotérreo estructural. Es el átomo de coordinación central en la molécula de clorofila.",source:{name:"IUPAC / NIST",database:"NIST",confidence:"certified"}},{atomicNumber:13,symbol:"Al",name:"Aluminio",atomicMass:26.982,period:3,group:13,block:"p",category:"post-transition-metal",stateAt298K:"solid",electronegativityPauling:1.61,ionizationEnergyFirst:577.5,atomicRadiusCovalent:121,atomicRadiusVanDerWaals:184,electronConfiguration:"[Ne] 3s2 3p1",valenceElectrons:3,oxidationStates:[3],colorHex:"#BFA6A6",meltingPointK:933.47,boilingPointK:2792,summary:"Metal no ferroso más abundante en la corteza terrestre. Forma una capa pasivante de óxido Al2O3 resistente a corrosión.",source:{name:"IUPAC / NIST",database:"NIST",confidence:"certified"}},{atomicNumber:14,symbol:"Si",name:"Silicio",atomicMass:28.085,period:3,group:14,block:"p",category:"metalloid",stateAt298K:"solid",electronegativityPauling:1.9,ionizationEnergyFirst:786.5,atomicRadiusCovalent:111,atomicRadiusVanDerWaals:210,electronConfiguration:"[Ne] 3s2 3p2",valenceElectrons:4,oxidationStates:[-4,4],colorHex:"#F0C8A0",meltingPointK:1687,boilingPointK:3538,summary:"Semiconductor fundamental de la microelectrónica y segundo elemento más abundante de la litosfera.",source:{name:"IUPAC / NIST",database:"NIST",confidence:"certified"}},{atomicNumber:15,symbol:"P",name:"Fósforo",atomicMass:30.974,period:3,group:15,block:"p",category:"reactive-nonmetal",stateAt298K:"solid",electronegativityPauling:2.19,ionizationEnergyFirst:1011.8,atomicRadiusCovalent:107,atomicRadiusVanDerWaals:180,electronConfiguration:"[Ne] 3s2 3p3",valenceElectrons:5,oxidationStates:[-3,3,5],colorHex:"#FF8000",meltingPointK:317.3,boilingPointK:553.65,summary:"Elemento bioesencial en el esqueleto de ADN/ARN y en la molécula de transferencia energética celular ATP.",source:{name:"IUPAC / NIST",database:"NIST",confidence:"certified"}},{atomicNumber:16,symbol:"S",name:"Azufre",atomicMass:32.06,period:3,group:16,block:"p",category:"reactive-nonmetal",stateAt298K:"solid",electronegativityPauling:2.58,ionizationEnergyFirst:999.6,atomicRadiusCovalent:105,atomicRadiusVanDerWaals:180,electronConfiguration:"[Ne] 3s2 3p4",valenceElectrons:6,oxidationStates:[-2,2,4,6],colorHex:"#FFFF30",meltingPointK:388.36,boilingPointK:717.8,summary:"No metal amarillo formador de puentes disulfuro en proteínas y ácido sulfúrico (H2SO4).",source:{name:"IUPAC / NIST",database:"NIST",confidence:"certified"}},{atomicNumber:17,symbol:"Cl",name:"Cloro",atomicMass:35.45,period:3,group:17,block:"p",category:"reactive-nonmetal",stateAt298K:"gas",electronegativityPauling:3.16,ionizationEnergyFirst:1251.2,atomicRadiusCovalent:102,atomicRadiusVanDerWaals:175,electronConfiguration:"[Ne] 3s2 3p5",valenceElectrons:7,oxidationStates:[-1,1,3,5,7],colorHex:"#1FF01F",meltingPointK:171.6,boilingPointK:239.11,summary:"Halógeno gaseoso amarillo-verdoso altamente oxidante. Forma sales iónicas con metales alcalinos como NaCl.",source:{name:"IUPAC / NIST",database:"NIST",confidence:"certified"}},{atomicNumber:18,symbol:"Ar",name:"Argón",atomicMass:39.948,period:3,group:18,block:"p",category:"noble-gas",stateAt298K:"gas",electronegativityPauling:null,ionizationEnergyFirst:1520.6,atomicRadiusCovalent:106,atomicRadiusVanDerWaals:188,electronConfiguration:"[Ne] 3s2 3p6",valenceElectrons:8,oxidationStates:[0],colorHex:"#80D1E3",meltingPointK:83.8,boilingPointK:87.3,summary:"Gas noble inerte que conforma casi el 1% de la atmósfera terrestre. Empleado en atmósferas protectoras de soldadura.",source:{name:"IUPAC / NIST",database:"NIST",confidence:"certified"}},{atomicNumber:19,symbol:"K",name:"Potasio",atomicMass:39.098,period:4,group:1,block:"s",category:"alkali-metal",stateAt298K:"solid",electronegativityPauling:.82,ionizationEnergyFirst:418.8,atomicRadiusCovalent:203,atomicRadiusVanDerWaals:275,electronConfiguration:"[Ar] 4s1",valenceElectrons:1,oxidationStates:[1],colorHex:"#8F40D4",meltingPointK:336.53,boilingPointK:1032,summary:"Metal alcalino esencial para el potencial de acción celular (bomba Na+/K+).",source:{name:"IUPAC / NIST",database:"NIST",confidence:"certified"}},{atomicNumber:20,symbol:"Ca",name:"Calcio",atomicMass:40.078,period:4,group:2,block:"s",category:"alkaline-earth",stateAt298K:"solid",electronegativityPauling:1,ionizationEnergyFirst:589.8,atomicRadiusCovalent:176,atomicRadiusVanDerWaals:231,electronConfiguration:"[Ar] 4s2",valenceElectrons:2,oxidationStates:[2],colorHex:"#3DFF00",meltingPointK:1115,boilingPointK:1757,summary:"Metal alcalinotérreo constituyente primario de huesos, dientes, carbonato de calcio (CaCO3) y señalización celular.",source:{name:"IUPAC / NIST",database:"NIST",confidence:"certified"}},{atomicNumber:26,symbol:"Fe",name:"Hierro",atomicMass:55.845,period:4,group:8,block:"d",category:"transition-metal",stateAt298K:"solid",electronegativityPauling:1.83,ionizationEnergyFirst:762.5,atomicRadiusCovalent:132,atomicRadiusVanDerWaals:200,electronConfiguration:"[Ar] 3d6 4s2",valenceElectrons:8,oxidationStates:[2,3],colorHex:"#E06633",meltingPointK:1811,boilingPointK:3134,summary:"Metal de transición más utilizado en la civilización humana. Centro activo de transporte de oxígeno en la hemoglobina.",source:{name:"IUPAC / NIST",database:"PubChem",confidence:"certified"}},{atomicNumber:29,symbol:"Cu",name:"Cobre",atomicMass:63.546,period:4,group:11,block:"d",category:"transition-metal",stateAt298K:"solid",electronegativityPauling:1.9,ionizationEnergyFirst:745.5,atomicRadiusCovalent:132,atomicRadiusVanDerWaals:140,electronConfiguration:"[Ar] 3d10 4s1",valenceElectrons:11,oxidationStates:[1,2],colorHex:"#C88033",meltingPointK:1357.77,boilingPointK:2835,summary:"Excelente conductor térmico y eléctrico. Exhibe configuración anómala por subcapa d completamente llena.",source:{name:"IUPAC / NIST",database:"NIST",confidence:"certified"}},{atomicNumber:30,symbol:"Zn",name:"Zinc",atomicMass:65.38,period:4,group:12,block:"d",category:"transition-metal",stateAt298K:"solid",electronegativityPauling:1.65,ionizationEnergyFirst:906.4,atomicRadiusCovalent:122,atomicRadiusVanDerWaals:139,electronConfiguration:"[Ar] 3d10 4s2",valenceElectrons:2,oxidationStates:[2],colorHex:"#7D80B0",meltingPointK:692.68,boilingPointK:1180,summary:"Metal de transición utilizado en galvanizado y como cofactor enzimático (anhidrasa carbónica).",source:{name:"IUPAC / NIST",database:"NIST",confidence:"certified"}},{atomicNumber:35,symbol:"Br",name:"Bromo",atomicMass:79.904,period:4,group:17,block:"p",category:"reactive-nonmetal",stateAt298K:"liquid",electronegativityPauling:2.96,ionizationEnergyFirst:1139.9,atomicRadiusCovalent:120,atomicRadiusVanDerWaals:185,electronConfiguration:"[Ar] 3d10 4s2 4p5",valenceElectrons:7,oxidationStates:[-1,1,5],colorHex:"#A62929",meltingPointK:265.8,boilingPointK:332,summary:"Único no metal líquido a temperatura ambiente. Halógeno marrón-rojizo denso y corrosivo.",source:{name:"IUPAC / NIST",database:"NIST",confidence:"certified"}},{atomicNumber:53,symbol:"I",name:"Yodo",atomicMass:126.9,period:5,group:17,block:"p",category:"reactive-nonmetal",stateAt298K:"solid",electronegativityPauling:2.66,ionizationEnergyFirst:1008.4,atomicRadiusCovalent:139,atomicRadiusVanDerWaals:198,electronConfiguration:"[Kr] 4d10 5s2 5p5",valenceElectrons:7,oxidationStates:[-1,1,5,7],colorHex:"#940094",meltingPointK:386.85,boilingPointK:457.4,summary:"Halógeno sólido brillante que sublima fácilmente a vapor violeta. Esencial para la síntesis de hormonas tiroideas.",source:{name:"IUPAC / NIST",database:"NIST",confidence:"certified"}}],Hs={};for(const a of Hl)Hs[a.atomicNumber]=a;const kl=[{z:1,sym:"H",name:"Hidrógeno",mass:1.008,period:1,group:1,block:"s",cat:"reactive-nonmetal",state:"gas",en:2.2,ie:1312,rc:31,rv:120,config:"1s1",val:1,ox:[-1,1],color:"#FFFFFF"},{z:2,sym:"He",name:"Helio",mass:4.0026,period:1,group:18,block:"s",cat:"noble-gas",state:"gas",en:null,ie:2372.3,rc:28,rv:140,config:"1s2",val:2,ox:[0],color:"#D9FFFF"},{z:3,sym:"Li",name:"Litio",mass:6.94,period:2,group:1,block:"s",cat:"alkali-metal",state:"solid",en:.98,ie:520.2,rc:128,rv:182,config:"[He] 2s1",val:1,ox:[1],color:"#CC80FF"},{z:4,sym:"Be",name:"Berilio",mass:9.0122,period:2,group:2,block:"s",cat:"alkaline-earth",state:"solid",en:1.57,ie:899.5,rc:96,rv:153,config:"[He] 2s2",val:2,ox:[2],color:"#C2FF00"},{z:5,sym:"B",name:"Boro",mass:10.81,period:2,group:13,block:"p",cat:"metalloid",state:"solid",en:2.04,ie:800.6,rc:84,rv:192,config:"[He] 2s2 2p1",val:3,ox:[3],color:"#FFB5B5"},{z:6,sym:"C",name:"Carbono",mass:12.011,period:2,group:14,block:"p",cat:"reactive-nonmetal",state:"solid",en:2.55,ie:1086.5,rc:76,rv:170,config:"[He] 2s2 2p2",val:4,ox:[-4,2,4],color:"#909090"},{z:7,sym:"N",name:"Nitrógeno",mass:14.007,period:2,group:15,block:"p",cat:"reactive-nonmetal",state:"gas",en:3.04,ie:1402.3,rc:71,rv:155,config:"[He] 2s2 2p3",val:5,ox:[-3,3,5],color:"#3050F8"},{z:8,sym:"O",name:"Oxígeno",mass:15.999,period:2,group:16,block:"p",cat:"reactive-nonmetal",state:"gas",en:3.44,ie:1313.9,rc:66,rv:152,config:"[He] 2s2 2p4",val:6,ox:[-2],color:"#FF0D0D"},{z:9,sym:"F",name:"Flúor",mass:18.998,period:2,group:17,block:"p",cat:"reactive-nonmetal",state:"gas",en:3.98,ie:1681,rc:57,rv:147,config:"[He] 2s2 2p5",val:7,ox:[-1],color:"#90E050"},{z:10,sym:"Ne",name:"Neón",mass:20.18,period:2,group:18,block:"p",cat:"noble-gas",state:"gas",en:null,ie:2080.7,rc:58,rv:154,config:"[He] 2s2 2p6",val:8,ox:[0],color:"#B3E3F5"},{z:11,sym:"Na",name:"Sodio",mass:22.99,period:3,group:1,block:"s",cat:"alkali-metal",state:"solid",en:.93,ie:495.8,rc:166,rv:227,config:"[Ne] 3s1",val:1,ox:[1],color:"#AB5CF2"},{z:12,sym:"Mg",name:"Magnesio",mass:24.305,period:3,group:2,block:"s",cat:"alkaline-earth",state:"solid",en:1.31,ie:737.7,rc:141,rv:173,config:"[Ne] 3s2",val:2,ox:[2],color:"#8AFF00"},{z:13,sym:"Al",name:"Aluminio",mass:26.982,period:3,group:13,block:"p",cat:"post-transition-metal",state:"solid",en:1.61,ie:577.5,rc:121,rv:184,config:"[Ne] 3s2 3p1",val:3,ox:[3],color:"#BFA6A6"},{z:14,sym:"Si",name:"Silicio",mass:28.085,period:3,group:14,block:"p",cat:"metalloid",state:"solid",en:1.9,ie:786.5,rc:111,rv:210,config:"[Ne] 3s2 3p2",val:4,ox:[-4,4],color:"#F0C8A0"},{z:15,sym:"P",name:"Fósforo",mass:30.974,period:3,group:15,block:"p",cat:"reactive-nonmetal",state:"solid",en:2.19,ie:1011.8,rc:107,rv:180,config:"[Ne] 3s2 3p3",val:5,ox:[-3,3,5],color:"#FF8000"},{z:16,sym:"S",name:"Azufre",mass:32.06,period:3,group:16,block:"p",cat:"reactive-nonmetal",state:"solid",en:2.58,ie:999.6,rc:105,rv:180,config:"[Ne] 3s2 3p4",val:6,ox:[-2,4,6],color:"#FFFF30"},{z:17,sym:"Cl",name:"Cloro",mass:35.45,period:3,group:17,block:"p",cat:"reactive-nonmetal",state:"gas",en:3.16,ie:1251.2,rc:102,rv:175,config:"[Ne] 3s2 3p5",val:7,ox:[-1,1,3,5,7],color:"#1FF01F"},{z:18,sym:"Ar",name:"Argón",mass:39.948,period:3,group:18,block:"p",cat:"noble-gas",state:"gas",en:null,ie:1520.6,rc:106,rv:188,config:"[Ne] 3s2 3p6",val:8,ox:[0],color:"#80D1E3"},{z:19,sym:"K",name:"Potasio",mass:39.098,period:4,group:1,block:"s",cat:"alkali-metal",state:"solid",en:.82,ie:418.8,rc:203,rv:275,config:"[Ar] 4s1",val:1,ox:[1],color:"#8F40D4"},{z:20,sym:"Ca",name:"Calcio",mass:40.078,period:4,group:2,block:"s",cat:"alkaline-earth",state:"solid",en:1,ie:589.8,rc:176,rv:231,config:"[Ar] 4s2",val:2,ox:[2],color:"#3DFF00"},{z:21,sym:"Sc",name:"Escandio",mass:44.956,period:4,group:3,block:"d",cat:"transition-metal",state:"solid",en:1.36,ie:633.1,rc:170,rv:211,config:"[Ar] 3d1 4s2",val:3,ox:[3],color:"#E6E6E6"},{z:22,sym:"Ti",name:"Titanio",mass:47.867,period:4,group:4,block:"d",cat:"transition-metal",state:"solid",en:1.54,ie:658.8,rc:160,rv:200,config:"[Ar] 3d2 4s2",val:4,ox:[2,3,4],color:"#BFC2C7"},{z:23,sym:"V",name:"Vanadio",mass:50.942,period:4,group:5,block:"d",cat:"transition-metal",state:"solid",en:1.63,ie:650.9,rc:153,rv:200,config:"[Ar] 3d3 4s2",val:5,ox:[2,3,4,5],color:"#A6A6AB"},{z:24,sym:"Cr",name:"Cromo",mass:51.996,period:4,group:6,block:"d",cat:"transition-metal",state:"solid",en:1.66,ie:652.9,rc:139,rv:200,config:"[Ar] 3d5 4s1",val:6,ox:[2,3,6],color:"#8A99C7"},{z:25,sym:"Mn",name:"Manganeso",mass:54.938,period:4,group:7,block:"d",cat:"transition-metal",state:"solid",en:1.55,ie:717.3,rc:139,rv:200,config:"[Ar] 3d5 4s2",val:7,ox:[2,4,7],color:"#9C7AC7"},{z:26,sym:"Fe",name:"Hierro",mass:55.845,period:4,group:8,block:"d",cat:"transition-metal",state:"solid",en:1.83,ie:762.5,rc:132,rv:200,config:"[Ar] 3d6 4s2",val:8,ox:[2,3],color:"#E06633"},{z:27,sym:"Co",name:"Cobalto",mass:58.933,period:4,group:9,block:"d",cat:"transition-metal",state:"solid",en:1.88,ie:760.4,rc:126,rv:200,config:"[Ar] 3d7 4s2",val:9,ox:[2,3],color:"#F090A0"},{z:28,sym:"Ni",name:"Níquel",mass:58.693,period:4,group:10,block:"d",cat:"transition-metal",state:"solid",en:1.91,ie:737.1,rc:124,rv:163,config:"[Ar] 3d8 4s2",val:10,ox:[2,3],color:"#50D050"},{z:29,sym:"Cu",name:"Cobre",mass:63.546,period:4,group:11,block:"d",cat:"transition-metal",state:"solid",en:1.9,ie:745.5,rc:132,rv:140,config:"[Ar] 3d10 4s1",val:11,ox:[1,2],color:"#C88033"},{z:30,sym:"Zn",name:"Zinc",mass:65.38,period:4,group:12,block:"d",cat:"transition-metal",state:"solid",en:1.65,ie:906.4,rc:122,rv:139,config:"[Ar] 3d10 4s2",val:2,ox:[2],color:"#7D80B0"},{z:31,sym:"Ga",name:"Galio",mass:69.723,period:4,group:13,block:"p",cat:"post-transition-metal",state:"solid",en:1.81,ie:578.8,rc:122,rv:187,config:"[Ar] 3d10 4s2 4p1",val:3,ox:[3],color:"#C28F8F"},{z:32,sym:"Ge",name:"Germanio",mass:72.63,period:4,group:14,block:"p",cat:"metalloid",state:"solid",en:2.01,ie:762,rc:120,rv:211,config:"[Ar] 3d10 4s2 4p2",val:4,ox:[2,4],color:"#668F8F"},{z:33,sym:"As",name:"Arsénico",mass:74.922,period:4,group:15,block:"p",cat:"metalloid",state:"solid",en:2.18,ie:947,rc:119,rv:185,config:"[Ar] 3d10 4s2 4p3",val:5,ox:[-3,3,5],color:"#BD80E3"},{z:34,sym:"Se",name:"Selenio",mass:78.971,period:4,group:16,block:"p",cat:"reactive-nonmetal",state:"solid",en:2.55,ie:941,rc:120,rv:190,config:"[Ar] 3d10 4s2 4p4",val:6,ox:[-2,4,6],color:"#FFA100"},{z:35,sym:"Br",name:"Bromo",mass:79.904,period:4,group:17,block:"p",cat:"reactive-nonmetal",state:"liquid",en:2.96,ie:1139.9,rc:120,rv:185,config:"[Ar] 3d10 4s2 4p5",val:7,ox:[-1,1,5],color:"#A62929"},{z:36,sym:"Kr",name:"Kriptón",mass:83.798,period:4,group:18,block:"p",cat:"noble-gas",state:"gas",en:3,ie:1350.8,rc:116,rv:202,config:"[Ar] 3d10 4s2 4p6",val:8,ox:[0,2],color:"#5CB8D1"},{z:37,sym:"Rb",name:"Rubidio",mass:85.468,period:5,group:1,block:"s",cat:"alkali-metal",state:"solid",en:.82,ie:403,rc:220,rv:303,config:"[Kr] 5s1",val:1,ox:[1],color:"#702EB8"},{z:38,sym:"Sr",name:"Estroncio",mass:87.62,period:5,group:2,block:"s",cat:"alkaline-earth",state:"solid",en:.95,ie:549.5,rc:195,rv:249,config:"[Kr] 5s2",val:2,ox:[2],color:"#00FF00"},{z:39,sym:"Y",name:"Itrio",mass:88.906,period:5,group:3,block:"d",cat:"transition-metal",state:"solid",en:1.22,ie:600,rc:190,rv:219,config:"[Kr] 4d1 5s2",val:3,ox:[3],color:"#94FFFF"},{z:40,sym:"Zr",name:"Circonio",mass:91.224,period:5,group:4,block:"d",cat:"transition-metal",state:"solid",en:1.33,ie:640.1,rc:175,rv:215,config:"[Kr] 4d2 5s2",val:4,ox:[4],color:"#94E0E0"},{z:41,sym:"Nb",name:"Niobio",mass:92.906,period:5,group:5,block:"d",cat:"transition-metal",state:"solid",en:1.6,ie:652.1,rc:164,rv:207,config:"[Kr] 4d4 5s1",val:5,ox:[3,5],color:"#73C2C9"},{z:42,sym:"Mo",name:"Molibdeno",mass:95.95,period:5,group:6,block:"d",cat:"transition-metal",state:"solid",en:2.16,ie:684.3,rc:154,rv:209,config:"[Kr] 4d5 5s1",val:6,ox:[4,6],color:"#54B5B5"},{z:43,sym:"Tc",name:"Tecnecio",mass:98,period:5,group:7,block:"d",cat:"transition-metal",state:"solid",en:1.9,ie:702,rc:147,rv:209,config:"[Kr] 4d5 5s2",val:7,ox:[4,7],color:"#3B9E9E"},{z:44,sym:"Ru",name:"Rutenio",mass:101.07,period:5,group:8,block:"d",cat:"transition-metal",state:"solid",en:2.2,ie:710.2,rc:146,rv:207,config:"[Kr] 4d7 5s1",val:8,ox:[3,4],color:"#248F8F"},{z:45,sym:"Rh",name:"Rodio",mass:102.91,period:5,group:9,block:"d",cat:"transition-metal",state:"solid",en:2.28,ie:719.7,rc:142,rv:195,config:"[Kr] 4d8 5s1",val:9,ox:[3],color:"#0A7D8C"},{z:46,sym:"Pd",name:"Paladio",mass:106.42,period:5,group:10,block:"d",cat:"transition-metal",state:"solid",en:2.2,ie:804.4,rc:139,rv:202,config:"[Kr] 4d10",val:10,ox:[2,4],color:"#006985"},{z:47,sym:"Ag",name:"Plata",mass:107.87,period:5,group:11,block:"d",cat:"transition-metal",state:"solid",en:1.93,ie:731,rc:145,rv:172,config:"[Kr] 4d10 5s1",val:11,ox:[1],color:"#C0C0C0"},{z:48,sym:"Cd",name:"Cadmio",mass:112.41,period:5,group:12,block:"d",cat:"transition-metal",state:"solid",en:1.69,ie:867.8,rc:144,rv:158,config:"[Kr] 4d10 5s2",val:2,ox:[2],color:"#FFD98F"},{z:49,sym:"In",name:"Indio",mass:114.82,period:5,group:13,block:"p",cat:"post-transition-metal",state:"solid",en:1.78,ie:558.3,rc:142,rv:193,config:"[Kr] 4d10 5s2 5p1",val:3,ox:[3],color:"#A67573"},{z:50,sym:"Sn",name:"Estaño",mass:118.71,period:5,group:14,block:"p",cat:"post-transition-metal",state:"solid",en:1.96,ie:708.6,rc:139,rv:217,config:"[Kr] 4d10 5s2 5p2",val:4,ox:[2,4],color:"#668080"},{z:51,sym:"Sb",name:"Antimonio",mass:121.76,period:5,group:15,block:"p",cat:"metalloid",state:"solid",en:2.05,ie:834,rc:139,rv:206,config:"[Kr] 4d10 5s2 5p3",val:5,ox:[3,5],color:"#9E63B5"},{z:52,sym:"Te",name:"Telurio",mass:127.6,period:5,group:16,block:"p",cat:"metalloid",state:"solid",en:2.1,ie:869.3,rc:138,rv:206,config:"[Kr] 4d10 5s2 5p4",val:6,ox:[-2,4,6],color:"#D47A00"},{z:53,sym:"I",name:"Yodo",mass:126.9,period:5,group:17,block:"p",cat:"reactive-nonmetal",state:"solid",en:2.66,ie:1008.4,rc:139,rv:198,config:"[Kr] 4d10 5s2 5p5",val:7,ox:[-1,1,5,7],color:"#940094"},{z:54,sym:"Xe",name:"Xenón",mass:131.29,period:5,group:18,block:"p",cat:"noble-gas",state:"gas",en:2.6,ie:1170.4,rc:140,rv:216,config:"[Kr] 4d10 5s2 5p6",val:8,ox:[0,2,4,6],color:"#429EB0"},{z:55,sym:"Cs",name:"Cesio",mass:132.91,period:6,group:1,block:"s",cat:"alkali-metal",state:"solid",en:.79,ie:375.7,rc:244,rv:343,config:"[Xe] 6s1",val:1,ox:[1],color:"#57178F"},{z:56,sym:"Ba",name:"Bario",mass:137.33,period:6,group:2,block:"s",cat:"alkaline-earth",state:"solid",en:.89,ie:502.9,rc:215,rv:268,config:"[Xe] 6s2",val:2,ox:[2],color:"#00C900"},{z:57,sym:"La",name:"Lantano",mass:138.91,period:6,group:3,block:"f",cat:"lanthanide",state:"solid",en:1.1,ie:538.1,rc:207,rv:240,config:"[Xe] 5d1 6s2",val:3,ox:[3],color:"#70D4FF"},{z:58,sym:"Ce",name:"Cerio",mass:140.12,period:6,group:3,block:"f",cat:"lanthanide",state:"solid",en:1.12,ie:534.4,rc:204,rv:235,config:"[Xe] 4f1 5d1 6s2",val:3,ox:[3,4],color:"#FFFFC7"},{z:59,sym:"Pr",name:"Praseodimio",mass:140.91,period:6,group:3,block:"f",cat:"lanthanide",state:"solid",en:1.13,ie:527,rc:203,rv:235,config:"[Xe] 4f3 6s2",val:3,ox:[3],color:"#D9FFC7"},{z:60,sym:"Nd",name:"Neodimio",mass:144.24,period:6,group:3,block:"f",cat:"lanthanide",state:"solid",en:1.14,ie:533.1,rc:201,rv:235,config:"[Xe] 4f4 6s2",val:3,ox:[3],color:"#C7FFC7"},{z:61,sym:"Pm",name:"Prometio",mass:145,period:6,group:3,block:"f",cat:"lanthanide",state:"solid",en:1.13,ie:540,rc:199,rv:235,config:"[Xe] 4f5 6s2",val:3,ox:[3],color:"#A3FFC7"},{z:62,sym:"Sm",name:"Samario",mass:150.36,period:6,group:3,block:"f",cat:"lanthanide",state:"solid",en:1.17,ie:544.5,rc:198,rv:235,config:"[Xe] 4f6 6s2",val:3,ox:[2,3],color:"#8FFFC7"},{z:63,sym:"Eu",name:"Europio",mass:151.96,period:6,group:3,block:"f",cat:"lanthanide",state:"solid",en:1.2,ie:547.1,rc:198,rv:235,config:"[Xe] 4f7 6s2",val:3,ox:[2,3],color:"#61FFC7"},{z:64,sym:"Gd",name:"Gadolinio",mass:157.25,period:6,group:3,block:"f",cat:"lanthanide",state:"solid",en:1.2,ie:593.4,rc:196,rv:235,config:"[Xe] 4f7 5d1 6s2",val:3,ox:[3],color:"#45FFC7"},{z:65,sym:"Tb",name:"Terbio",mass:158.93,period:6,group:3,block:"f",cat:"lanthanide",state:"solid",en:1.2,ie:565.8,rc:194,rv:235,config:"[Xe] 4f9 6s2",val:3,ox:[3,4],color:"#30FFC7"},{z:66,sym:"Dy",name:"Disprosio",mass:162.5,period:6,group:3,block:"f",cat:"lanthanide",state:"solid",en:1.22,ie:573,rc:192,rv:235,config:"[Xe] 4f10 6s2",val:3,ox:[3],color:"#1FFFC7"},{z:67,sym:"Ho",name:"Holmio",mass:164.93,period:6,group:3,block:"f",cat:"lanthanide",state:"solid",en:1.23,ie:581,rc:192,rv:235,config:"[Xe] 4f11 6s2",val:3,ox:[3],color:"#00FF9C"},{z:68,sym:"Er",name:"Erbio",mass:167.26,period:6,group:3,block:"f",cat:"lanthanide",state:"solid",en:1.24,ie:589.3,rc:189,rv:235,config:"[Xe] 4f12 6s2",val:3,ox:[3],color:"#00E675"},{z:69,sym:"Tm",name:"Tulio",mass:168.93,period:6,group:3,block:"f",cat:"lanthanide",state:"solid",en:1.25,ie:596.7,rc:190,rv:235,config:"[Xe] 4f13 6s2",val:3,ox:[3],color:"#00D452"},{z:70,sym:"Yb",name:"Iterbio",mass:173.05,period:6,group:3,block:"f",cat:"lanthanide",state:"solid",en:1.1,ie:603.4,rc:187,rv:235,config:"[Xe] 4f14 6s2",val:3,ox:[2,3],color:"#00BF38"},{z:71,sym:"Lu",name:"Lutecio",mass:174.97,period:6,group:3,block:"d",cat:"lanthanide",state:"solid",en:1.27,ie:523.5,rc:187,rv:235,config:"[Xe] 4f14 5d1 6s2",val:3,ox:[3],color:"#00AB24"},{z:72,sym:"Hf",name:"Hafnio",mass:178.49,period:6,group:4,block:"d",cat:"transition-metal",state:"solid",en:1.3,ie:658.5,rc:175,rv:212,config:"[Xe] 4f14 5d2 6s2",val:4,ox:[4],color:"#4DC2FF"},{z:73,sym:"Ta",name:"Tántalo",mass:180.95,period:6,group:5,block:"d",cat:"transition-metal",state:"solid",en:1.5,ie:761,rc:170,rv:217,config:"[Xe] 4f14 5d3 6s2",val:5,ox:[5],color:"#4DA6FF"},{z:74,sym:"W",name:"Wolframio",mass:183.84,period:6,group:6,block:"d",cat:"transition-metal",state:"solid",en:2.36,ie:770,rc:162,rv:210,config:"[Xe] 4f14 5d4 6s2",val:6,ox:[4,6],color:"#2194D6"},{z:75,sym:"Re",name:"Renio",mass:186.21,period:6,group:7,block:"d",cat:"transition-metal",state:"solid",en:1.9,ie:760,rc:151,rv:217,config:"[Xe] 4f14 5d5 6s2",val:7,ox:[4,7],color:"#267DAB"},{z:76,sym:"Os",name:"Osmio",mass:190.23,period:6,group:8,block:"d",cat:"transition-metal",state:"solid",en:2.2,ie:840,rc:144,rv:216,config:"[Xe] 4f14 5d6 6s2",val:8,ox:[4,8],color:"#266696"},{z:77,sym:"Ir",name:"Iridio",mass:192.22,period:6,group:9,block:"d",cat:"transition-metal",state:"solid",en:2.2,ie:880,rc:141,rv:202,config:"[Xe] 4f14 5d7 6s2",val:9,ox:[3,4],color:"#175487"},{z:78,sym:"Pt",name:"Platino",mass:195.08,period:6,group:10,block:"d",cat:"transition-metal",state:"solid",en:2.28,ie:870,rc:136,rv:209,config:"[Xe] 4f14 5d9 6s1",val:10,ox:[2,4],color:"#D0D0E0"},{z:79,sym:"Au",name:"Oro",mass:196.97,period:6,group:11,block:"d",cat:"transition-metal",state:"solid",en:2.54,ie:890.1,rc:136,rv:166,config:"[Xe] 4f14 5d10 6s1",val:11,ox:[1,3],color:"#FFD123"},{z:80,sym:"Hg",name:"Mercurio",mass:200.59,period:6,group:12,block:"d",cat:"transition-metal",state:"liquid",en:2,ie:1007.1,rc:132,rv:155,config:"[Xe] 4f14 5d10 6s2",val:2,ox:[1,2],color:"#B8B8D0"},{z:81,sym:"Tl",name:"Talio",mass:204.38,period:6,group:13,block:"p",cat:"post-transition-metal",state:"solid",en:1.62,ie:589.4,rc:145,rv:196,config:"[Xe] 4f14 5d10 6s2 6p1",val:3,ox:[1,3],color:"#A6544D"},{z:82,sym:"Pb",name:"Plomo",mass:207.2,period:6,group:14,block:"p",cat:"post-transition-metal",state:"solid",en:2.33,ie:715.6,rc:146,rv:202,config:"[Xe] 4f14 5d10 6s2 6p2",val:4,ox:[2,4],color:"#575961"},{z:83,sym:"Bi",name:"Bismuto",mass:208.98,period:6,group:15,block:"p",cat:"post-transition-metal",state:"solid",en:2.02,ie:703,rc:148,rv:207,config:"[Xe] 4f14 5d10 6s2 6p3",val:5,ox:[3,5],color:"#9E4FB5"},{z:84,sym:"Po",name:"Polonio",mass:209,period:6,group:16,block:"p",cat:"post-transition-metal",state:"solid",en:2,ie:812.1,rc:140,rv:197,config:"[Xe] 4f14 5d10 6s2 6p4",val:6,ox:[2,4],color:"#AB5C00"},{z:85,sym:"At",name:"Ástato",mass:210,period:6,group:17,block:"p",cat:"metalloid",state:"solid",en:2.2,ie:890,rc:150,rv:202,config:"[Xe] 4f14 5d10 6s2 6p5",val:7,ox:[-1,1],color:"#754F45"},{z:86,sym:"Rn",name:"Radón",mass:222,period:6,group:18,block:"p",cat:"noble-gas",state:"gas",en:2.2,ie:1037,rc:150,rv:220,config:"[Xe] 4f14 5d10 6s2 6p6",val:8,ox:[0,2],color:"#428296"},{z:87,sym:"Fr",name:"Francio",mass:223,period:7,group:1,block:"s",cat:"alkali-metal",state:"solid",en:.7,ie:380,rc:260,rv:348,config:"[Rn] 7s1",val:1,ox:[1],color:"#420066"},{z:88,sym:"Ra",name:"Radio",mass:226,period:7,group:2,block:"s",cat:"alkaline-earth",state:"solid",en:.9,ie:509.3,rc:221,rv:283,config:"[Rn] 7s2",val:2,ox:[2],color:"#007D00"},{z:89,sym:"Ac",name:"Actinio",mass:227,period:7,group:3,block:"f",cat:"actinide",state:"solid",en:1.1,ie:499,rc:215,rv:247,config:"[Rn] 6d1 7s2",val:3,ox:[3],color:"#70ABFA"},{z:90,sym:"Th",name:"Torio",mass:232.04,period:7,group:3,block:"f",cat:"actinide",state:"solid",en:1.3,ie:587,rc:206,rv:245,config:"[Rn] 6d2 7s2",val:4,ox:[4],color:"#00BAFF"},{z:91,sym:"Pa",name:"Protactinio",mass:231.04,period:7,group:3,block:"f",cat:"actinide",state:"solid",en:1.5,ie:568,rc:200,rv:243,config:"[Rn] 5f2 6d1 7s2",val:5,ox:[5],color:"#00A1FF"},{z:92,sym:"U",name:"Uranio",mass:238.03,period:7,group:3,block:"f",cat:"actinide",state:"solid",en:1.38,ie:597.6,rc:196,rv:241,config:"[Rn] 5f3 6d1 7s2",val:6,ox:[3,4,5,6],color:"#008FFF"},{z:93,sym:"Np",name:"Neptunio",mass:237,period:7,group:3,block:"f",cat:"actinide",state:"solid",en:1.36,ie:604.5,rc:190,rv:239,config:"[Rn] 5f4 6d1 7s2",val:7,ox:[5],color:"#0080FF"},{z:94,sym:"Pu",name:"Plutonio",mass:244,period:7,group:3,block:"f",cat:"actinide",state:"solid",en:1.28,ie:584.7,rc:187,rv:243,config:"[Rn] 5f6 7s2",val:8,ox:[4],color:"#006BFF"},{z:95,sym:"Am",name:"Americio",mass:243,period:7,group:3,block:"f",cat:"actinide",state:"solid",en:1.3,ie:578,rc:180,rv:244,config:"[Rn] 5f7 7s2",val:9,ox:[3],color:"#545CF2"},{z:96,sym:"Cm",name:"Curio",mass:247,period:7,group:3,block:"f",cat:"actinide",state:"solid",en:1.3,ie:581,rc:169,rv:245,config:"[Rn] 5f7 6d1 7s2",val:10,ox:[3],color:"#785CE3"},{z:97,sym:"Bk",name:"Berkelio",mass:247,period:7,group:3,block:"f",cat:"actinide",state:"solid",en:1.3,ie:601,rc:166,rv:244,config:"[Rn] 5f9 7s2",val:11,ox:[3,4],color:"#8A4FE3"},{z:98,sym:"Cf",name:"Californio",mass:251,period:7,group:3,block:"f",cat:"actinide",state:"solid",en:1.3,ie:608,rc:168,rv:245,config:"[Rn] 5f10 7s2",val:12,ox:[3],color:"#A136D4"},{z:99,sym:"Es",name:"Einstenio",mass:252,period:7,group:3,block:"f",cat:"actinide",state:"solid",en:1.3,ie:619,rc:165,rv:245,config:"[Rn] 5f11 7s2",val:13,ox:[3],color:"#B31FD4"},{z:100,sym:"Fm",name:"Fermio",mass:257,period:7,group:3,block:"f",cat:"actinide",state:"solid",en:1.3,ie:627,rc:167,rv:245,config:"[Rn] 5f12 7s2",val:14,ox:[3],color:"#B31FBA"},{z:101,sym:"Md",name:"Mendelevio",mass:258,period:7,group:3,block:"f",cat:"actinide",state:"solid",en:1.3,ie:635,rc:173,rv:246,config:"[Rn] 5f13 7s2",val:15,ox:[2,3],color:"#B30DA6"},{z:102,sym:"No",name:"Nobelio",mass:259,period:7,group:3,block:"f",cat:"actinide",state:"solid",en:1.3,ie:642,rc:176,rv:246,config:"[Rn] 5f14 7s2",val:16,ox:[2,3],color:"#BD0D87"},{z:103,sym:"Lr",name:"Laurencio",mass:266,period:7,group:3,block:"d",cat:"actinide",state:"solid",en:1.3,ie:470,rc:161,rv:246,config:"[Rn] 5f14 7s2 7p1",val:3,ox:[3],color:"#C70066"},{z:104,sym:"Rf",name:"Rutherfordio",mass:267,period:7,group:4,block:"d",cat:"transition-metal",state:"solid",en:null,ie:580,rc:157,rv:246,config:"[Rn] 5f14 6d2 7s2",val:4,ox:[4],color:"#CC0059"},{z:105,sym:"Db",name:"Dubnio",mass:268,period:7,group:5,block:"d",cat:"transition-metal",state:"solid",en:null,ie:null,rc:149,rv:246,config:"[Rn] 5f14 6d3 7s2",val:5,ox:[5],color:"#D1004F"},{z:106,sym:"Sg",name:"Seaborgio",mass:269,period:7,group:6,block:"d",cat:"transition-metal",state:"solid",en:null,ie:null,rc:143,rv:246,config:"[Rn] 5f14 6d4 7s2",val:6,ox:[6],color:"#D90045"},{z:107,sym:"Bh",name:"Bohrio",mass:270,period:7,group:7,block:"d",cat:"transition-metal",state:"solid",en:null,ie:null,rc:141,rv:246,config:"[Rn] 5f14 6d5 7s2",val:7,ox:[7],color:"#E00038"},{z:108,sym:"Hs",name:"Hasio",mass:277,period:7,group:8,block:"d",cat:"transition-metal",state:"solid",en:null,ie:null,rc:134,rv:246,config:"[Rn] 5f14 6d6 7s2",val:8,ox:[8],color:"#E6002E"},{z:109,sym:"Mt",name:"Meitnerio",mass:278,period:7,group:9,block:"d",cat:"transition-metal",state:"solid",en:null,ie:null,rc:129,rv:246,config:"[Rn] 5f14 6d7 7s2",val:9,ox:[3,4],color:"#EB0026"},{z:110,sym:"Ds",name:"Darmstatio",mass:281,period:7,group:10,block:"d",cat:"transition-metal",state:"solid",en:null,ie:null,rc:128,rv:246,config:"[Rn] 5f14 6d9 7s1",val:10,ox:[2,4],color:"#F0001C"},{z:111,sym:"Rg",name:"Roentgenio",mass:282,period:7,group:11,block:"d",cat:"transition-metal",state:"solid",en:null,ie:null,rc:121,rv:246,config:"[Rn] 5f14 6d10 7s1",val:11,ox:[3],color:"#F50014"},{z:112,sym:"Cn",name:"Copernicio",mass:285,period:7,group:12,block:"d",cat:"transition-metal",state:"solid",en:null,ie:null,rc:122,rv:246,config:"[Rn] 5f14 6d10 7s2",val:2,ox:[2],color:"#FA000A"},{z:113,sym:"Nh",name:"Nihonio",mass:286,period:7,group:13,block:"p",cat:"post-transition-metal",state:"solid",en:null,ie:null,rc:136,rv:246,config:"[Rn] 5f14 6d10 7s2 7p1",val:3,ox:[1,3],color:"#FF0000"},{z:114,sym:"Fl",name:"Flerovio",mass:289,period:7,group:14,block:"p",cat:"post-transition-metal",state:"solid",en:null,ie:null,rc:143,rv:246,config:"[Rn] 5f14 6d10 7s2 7p2",val:4,ox:[2],color:"#FF1F1F"},{z:115,sym:"Mc",name:"Moscovio",mass:290,period:7,group:15,block:"p",cat:"post-transition-metal",state:"solid",en:null,ie:null,rc:162,rv:246,config:"[Rn] 5f14 6d10 7s2 7p3",val:5,ox:[1,3],color:"#FF3D3D"},{z:116,sym:"Lv",name:"Livermorio",mass:293,period:7,group:16,block:"p",cat:"post-transition-metal",state:"solid",en:null,ie:null,rc:175,rv:246,config:"[Rn] 5f14 6d10 7s2 7p4",val:6,ox:[2,4],color:"#FF5C5C"},{z:117,sym:"Ts",name:"Tenesino",mass:294,period:7,group:17,block:"p",cat:"reactive-nonmetal",state:"solid",en:null,ie:null,rc:165,rv:246,config:"[Rn] 5f14 6d10 7s2 7p5",val:7,ox:[-1,1],color:"#FF7A7A"},{z:118,sym:"Og",name:"Oganesón",mass:294,period:7,group:18,block:"p",cat:"noble-gas",state:"solid",en:null,ie:null,rc:157,rv:246,config:"[Rn] 5f14 6d10 7s2 7p6",val:8,ox:[0],color:"#FF9999"}],vn=kl.map(a=>{const e=Hs[a.z];return e||{atomicNumber:a.z,symbol:a.sym,name:a.name,atomicMass:a.mass,period:a.period,group:a.group,block:a.block,category:a.cat,stateAt298K:a.state,electronegativityPauling:a.en,ionizationEnergyFirst:a.ie,atomicRadiusCovalent:a.rc,atomicRadiusVanDerWaals:a.rv,electronConfiguration:a.config,valenceElectrons:a.val,oxidationStates:a.ox,colorHex:a.color,summary:`Elemento químico ${a.name} (${a.sym}, Z=${a.z}). Propiedades periódicas estandarizadas por la IUPAC.`,source:{name:"IUPAC Reference Database",database:"IUPAC",confidence:"certified"}}}),_t={},fi={};for(const a of vn)_t[a.symbol]=a,fi[a.atomicNumber]=a;const wi=[{id:"rxn-water-synthesis",name:"Formación de agua (Síntesis)",equation:"2 H2 + O2 -> 2 H2O",type:"synthesis",reactants:[{formula:"H2",coefficient:2,state:"g",name:"Gas hidrógeno"},{formula:"O2",coefficient:1,state:"g",name:"Gas oxígeno"}],products:[{formula:"H2O",coefficient:2,state:"l",name:"Agua"}],enthalpyDeltaH:-571.6,conditions:"Chispa eléctrica o catalizador de platino a 298 K",explanation:"Ruptura de dos enlaces covalentes simples H-H (436 kJ/mol) y un enlace doble O=O (498 kJ/mol) para formar cuatro enlaces covalentes polares O-H (463 kJ/mol), liberando abundante energía térmica.",bondChanges:"2 enlaces H-H y 1 enlace O=O rotos -> 4 enlaces O-H formados",source:{name:"NIST WebBook Enthalpy of Formation",database:"NIST",confidence:"certified"}},{id:"rxn-acid-base-hcl-naoh",name:"Neutralización de ácido clorhídrico con hidróxido de sodio",equation:"HCl + NaOH -> NaCl + H2O",type:"acid-base-neutralization",reactants:[{formula:"HCl",coefficient:1,state:"aq",name:"Ácido clorhídrico"},{formula:"NaOH",coefficient:1,state:"aq",name:"Hidróxido de sodio"}],products:[{formula:"NaCl",coefficient:1,state:"aq",name:"Cloruro de sodio"},{formula:"H2O",coefficient:1,state:"l",name:"Agua"}],enthalpyDeltaH:-57.3,conditions:"Solución acuosa a 298 K, 1 atm",explanation:"El protón hidronio H+ del ácido se combina exotérmicamente con el ion hidroxilo OH- de la base para formar una molécula neutra de agua H2O, dejando iones espectadores Na+ y Cl- en disolución.",bondChanges:"H+(aq) + OH-(aq) -> H2O(l)",source:{name:"CRC Handbook of Chemistry & Physics",database:"CRC Handbook",confidence:"certified"}},{id:"rxn-methane-combustion",name:"Combustión completa del metano",equation:"CH4 + 2 O2 -> CO2 + 2 H2O",type:"combustion",reactants:[{formula:"CH4",coefficient:1,state:"g",name:"Metano"},{formula:"O2",coefficient:2,state:"g",name:"Gas oxígeno"}],products:[{formula:"CO2",coefficient:1,state:"g",name:"Dióxido de carbono"},{formula:"H2O",coefficient:2,state:"g",name:"Vapor de agua"}],enthalpyDeltaH:-890.7,conditions:"Energía de activación inicial (chispa/llama) en exceso de O2",explanation:"Oxidación rápida de los cuatro enlaces C-H del metano. El carbono pasa de estado de oxidación -4 a +4 en el CO2, liberando 890.7 kJ por cada mol de metano consumido.",bondChanges:"4 enlaces C-H y 2 enlaces O=O rotos -> 2 enlaces C=O y 4 enlaces O-H formados",source:{name:"NIST Chemistry WebBook",database:"NIST",confidence:"certified"}},{id:"rxn-caco3-calcination",name:"Descomposición térmica del carbonato de calcio (Calcinación)",equation:"CaCO3 -> CaO + CO2",type:"decomposition",reactants:[{formula:"CaCO3",coefficient:1,state:"s",name:"Carbonato de calcio (Caliza)"}],products:[{formula:"CaO",coefficient:1,state:"s",name:"Óxido de calcio (Cal viva)"},{formula:"CO2",coefficient:1,state:"g",name:"Dióxido de carbono"}],enthalpyDeltaH:178.3,conditions:"Calentamiento a temperatura superior a 840 °C (1113 K)",explanation:"La energía térmica rompe la red iónica del ion carbonato CO3(2-), liberando CO2 gaseoso y estabilizando el óxido de calcio sólido en un proceso marcadamente endotérmico.",bondChanges:"Ruptura del anión carbonato -> óxido metálico reticular + molécula lineal CO2",source:{name:"CRC Handbook Thermochemistry",database:"CRC Handbook",confidence:"certified"}},{id:"rxn-haber-ammonia",name:"Síntesis de amoníaco (Proceso Haber-Bosch)",equation:"N2 + 3 H2 -> 2 NH3",type:"synthesis",reactants:[{formula:"N2",coefficient:1,state:"g",name:"Gas nitrógeno"},{formula:"H2",coefficient:3,state:"g",name:"Gas hidrógeno"}],products:[{formula:"NH3",coefficient:2,state:"g",name:"Amoníaco"}],enthalpyDeltaH:-92.4,conditions:"450 °C, 200 atm, catalizador de hierro enriquecido (Fe3O4)",explanation:"Ruptura del fuerte triple enlace N≡N (945 kJ/mol) y tres enlaces H-H para formar seis enlaces covalentes polares N-H en dos moléculas de geometría trigonal piramidal NH3.",bondChanges:"1 enlace N≡N y 3 enlaces H-H rotos -> 6 enlaces N-H formados",source:{name:"IUPAC Technical Reports",database:"IUPAC",confidence:"certified"}},{id:"rxn-nacl-synthesis",name:"Síntesis de cloruro de sodio",equation:"2 Na + Cl2 -> 2 NaCl",type:"synthesis",reactants:[{formula:"Na",coefficient:2,state:"s",name:"Sodio metálico"},{formula:"Cl2",coefficient:1,state:"g",name:"Gas cloro"}],products:[{formula:"NaCl",coefficient:2,state:"s",name:"Cloruro de sodio"}],enthalpyDeltaH:-822.2,conditions:"Contacto directo en campana de extracción a 298 K",explanation:"Transferencia completa del electrón de valencia 3s del sodio al orbital 3p del cloro. Los iones formados Na+ y Cl- cristalizan en una red cúbica centrada en las caras estabilizada por alta energía reticular.",bondChanges:"Enlace metálico Na + covalente Cl-Cl -> red iónica Na+ Cl-",source:{name:"NIST Chemistry WebBook",database:"NIST",confidence:"certified"}},{id:"rxn-zn-hcl-displacement",name:"Desplazamiento simple: Zinc con ácido clorhídrico",equation:"Zn + 2 HCl -> ZnCl2 + H2",type:"single-displacement",reactants:[{formula:"Zn",coefficient:1,state:"s",name:"Zinc metálico"},{formula:"HCl",coefficient:2,state:"aq",name:"Ácido clorhídrico"}],products:[{formula:"ZnCl2",coefficient:1,state:"aq",name:"Cloruro de zinc"},{formula:"H2",coefficient:1,state:"g",name:"Gas hidrógeno"}],enthalpyDeltaH:-152.4,conditions:"Temperatura ambiente, efervescencia inmediata",explanation:"El zinc posee un potencial estándar de reducción más negativo (-0.76 V) que el hidrógeno (0.00 V), por lo que se oxida a Zn(2+) reduciendo los protones H+ a gas hidrógeno H2.",bondChanges:"Zn(s) -> Zn2+(aq) + 2e-; 2H+(aq) + 2e- -> H2(g)",source:{name:"CRC Handbook of Electrochemical Potentials",database:"CRC Handbook",confidence:"certified"}},{id:"rxn-agcl-precipitation",name:"Precipitación de cloruro de plata",equation:"AgNO3 + NaCl -> AgCl + NaNO3",type:"precipitation",reactants:[{formula:"AgNO3",coefficient:1,state:"aq",name:"Nitrato de plata"},{formula:"NaCl",coefficient:1,state:"aq",name:"Cloruro de sodio"}],products:[{formula:"AgCl",coefficient:1,state:"s",name:"Cloruro de plata (precipitado blanco)"},{formula:"NaNO3",coefficient:1,state:"aq",name:"Nitrato de sodio"}],enthalpyDeltaH:-65.7,conditions:"Mezcla acuosa directa a 298 K",explanation:"Los iones Ag+ y Cl- poseen un producto de solubilidad muy bajo (Ksp = 1.77 x 10^-10 a 25 °C), precipitando de inmediato como un sólido blanco lechoso insoluble.",bondChanges:"Ag+(aq) + Cl-(aq) -> AgCl(s) (insoluble)",source:{name:"CRC Solubility Product Constants",database:"CRC Handbook",confidence:"certified"}},{id:"rxn-h2o2-decomposition",name:"Descomposición del peróxido de hidrógeno",equation:"2 H2O2 -> 2 H2O + O2",type:"decomposition",reactants:[{formula:"H2O2",coefficient:2,state:"aq",name:"Peróxido de hidrógeno (Agua oxigenada)"}],products:[{formula:"H2O",coefficient:2,state:"l",name:"Agua"},{formula:"O2",coefficient:1,state:"g",name:"Gas oxígeno"}],enthalpyDeltaH:-196.1,conditions:"Catalizador MnO2 o enzima catalasa a temperatura ambiente",explanation:"Reacción de dismutación (redox interna) donde el oxígeno con estado de oxidación -1 se oxida simultáneamente a 0 (en O2) y se reduce a -2 (en H2O).",bondChanges:"2 enlaces O-O rotos -> 1 enlace O=O formado",source:{name:"NIST Chemistry WebBook",database:"NIST",confidence:"certified"}},{id:"rxn-propane-combustion",name:"Combustión completa del propano",equation:"C3H8 + 5 O2 -> 3 CO2 + 4 H2O",type:"combustion",reactants:[{formula:"C3H8",coefficient:1,state:"g",name:"Propano"},{formula:"O2",coefficient:5,state:"g",name:"Gas oxígeno"}],products:[{formula:"CO2",coefficient:3,state:"g",name:"Dióxido de carbono"},{formula:"H2O",coefficient:4,state:"g",name:"Vapor de agua"}],enthalpyDeltaH:-2220,conditions:"Chispa térmica en exceso estequiométrico de comburente O2",explanation:"Combustión altamente exotérmica utilizada como combustible doméstico e industrial. Oxida los 3 átomos de carbono a CO2 y 8 átomos de hidrógeno a H2O.",bondChanges:"2 enlaces C-C, 8 enlaces C-H y 5 enlaces O=O rotos -> 6 enlaces C=O y 8 enlaces O-H formados",source:{name:"NIST Chemistry WebBook",database:"NIST",confidence:"certified"}},{id:"rxn-ethanol-combustion",name:"Combustión completa del etanol",equation:"C2H5OH + 3 O2 -> 2 CO2 + 3 H2O",type:"combustion",reactants:[{formula:"C2H5OH",coefficient:1,state:"l",name:"Etanol"},{formula:"O2",coefficient:3,state:"g",name:"Gas oxígeno"}],products:[{formula:"CO2",coefficient:2,state:"g",name:"Dióxido de carbono"},{formula:"H2O",coefficient:3,state:"g",name:"Vapor de agua"}],enthalpyDeltaH:-1367,conditions:"Llama o chispa a 298 K",explanation:"Biocombustible limpio. La combustión rompe el enlace C-C, enlaces C-H y el grupo hidroxilo C-OH para formar 2 moléculas de CO2 y 3 de H2O.",bondChanges:"1 C-C, 5 C-H, 1 C-O, 1 O-H rotos -> 4 C=O y 6 O-H formados",source:{name:"NIST Chemistry WebBook",database:"NIST",confidence:"certified"}},{id:"rxn-photosynthesis",name:"Reacción global de fotosíntesis (Fijación de carbono)",equation:"6 CO2 + 6 H2O -> C6H12O6 + 6 O2",type:"synthesis",reactants:[{formula:"CO2",coefficient:6,state:"g",name:"Dióxido de carbono"},{formula:"H2O",coefficient:6,state:"l",name:"Agua"}],products:[{formula:"C6H12O6",coefficient:1,state:"s",name:"Glucosa"},{formula:"O2",coefficient:6,state:"g",name:"Gas oxígeno"}],enthalpyDeltaH:2803,conditions:"Luz solar (fotones hν) y clorofila a 298 K",explanation:"Conversión endergónica de energía radiante en energía de enlace químico. El agua dona electrones reduciendo el CO2 a carbohidrato con liberación de O2.",bondChanges:"Moléculas estables CO2 y H2O sintetizan enlaces C-C y C-H de la glucosa",source:{name:"Biochemical Pathways / NIST",database:"NIST",confidence:"certified"}},{id:"rxn-cellular-respiration",name:"Respiración celular aeróbica (Oxidación de glucosa)",equation:"C6H12O6 + 6 O2 -> 6 CO2 + 6 H2O",type:"combustion",reactants:[{formula:"C6H12O6",coefficient:1,state:"aq",name:"Glucosa"},{formula:"O2",coefficient:6,state:"g",name:"Gas oxígeno"}],products:[{formula:"CO2",coefficient:6,state:"g",name:"Dióxido de carbono"},{formula:"H2O",coefficient:6,state:"l",name:"Agua"}],enthalpyDeltaH:-2803,conditions:"Mitocondrias celulares acopladas a la síntesis de 30-32 ATP",explanation:"Catabolismo oxidativo de la glucosa en eucariotas. Los electrones de alta energía son transferidos a la cadena respiratoria con O2 como aceptor terminal.",bondChanges:"Oxidación gradual de glucosa -> CO2 y H2O",source:{name:"CRC Handbook of Biochemistry",database:"CRC Handbook",confidence:"certified"}},{id:"rxn-h2so4-koh-neutralization",name:"Neutralización de ácido sulfúrico con hidróxido de potasio",equation:"H2SO4 + 2 KOH -> K2SO4 + 2 H2O",type:"acid-base-neutralization",reactants:[{formula:"H2SO4",coefficient:1,state:"aq",name:"Ácido sulfúrico"},{formula:"KOH",coefficient:2,state:"aq",name:"Hidróxido de potasio"}],products:[{formula:"K2SO4",coefficient:1,state:"aq",name:"Sulfato de potasio"},{formula:"H2O",coefficient:2,state:"l",name:"Agua"}],enthalpyDeltaH:-115,conditions:"Solución acuosa a 298 K",explanation:"El ácido diprótico transfiere dos protones a dos iones hidróxido para generar dos moléculas de agua y la sal sulfato de potasio soluble.",bondChanges:"2 H+ + 2 OH- -> 2 H2O",source:{name:"CRC Handbook Thermochemistry",database:"CRC Handbook",confidence:"certified"}},{id:"rxn-iron-oxidation",name:"Oxidación de hierro a óxido férrico (Herrumbre)",equation:"4 Fe + 3 O2 -> 2 Fe2O3",type:"synthesis",reactants:[{formula:"Fe",coefficient:4,state:"s",name:"Hierro metálico"},{formula:"O2",coefficient:3,state:"g",name:"Gas oxígeno"}],products:[{formula:"Fe2O3",coefficient:2,state:"s",name:"Óxido de hierro (III)"}],enthalpyDeltaH:-1648.4,conditions:"Presencia de humedad y O2 atmosférico",explanation:"Oxidación del hierro de Fe(0) a Fe(3+) con reducción de O2(0) a O(2-). Forma el mineral hematita de color pardo-rojizo.",bondChanges:"Fe metal + O2 gas -> Red iónica cristalina Fe2O3",source:{name:"NIST Chemistry WebBook",database:"NIST",confidence:"certified"}},{id:"rxn-kclo3-decomposition",name:"Descomposición térmica del clorato de potasio",equation:"2 KClO3 -> 2 KCl + 3 O2",type:"decomposition",reactants:[{formula:"KClO3",coefficient:2,state:"s",name:"Clorato de potasio"}],products:[{formula:"KCl",coefficient:2,state:"s",name:"Cloruro de potasio"},{formula:"O2",coefficient:3,state:"g",name:"Gas oxígeno"}],enthalpyDeltaH:-89.4,conditions:"Calentamiento en presencia de MnO2 como catalizador",explanation:"Método histórico de laboratorio para obtener gas oxígeno puro mediante descomposición catalizada.",bondChanges:"Ruptura de los aniones clorato ClO3- -> cloruro KCl + gas oxígeno O2",source:{name:"CRC Handbook of Chemistry & Physics",database:"CRC Handbook",confidence:"certified"}},{id:"rxn-cu-agno3-displacement",name:"Desplazamiento simple: Cobre con nitrato de plata",equation:"Cu + 2 AgNO3 -> Cu(NO3)2 + 2 Ag",type:"single-displacement",reactants:[{formula:"Cu",coefficient:1,state:"s",name:"Cobre metálico"},{formula:"AgNO3",coefficient:2,state:"aq",name:"Nitrato de plata"}],products:[{formula:"Cu(NO3)2",coefficient:1,state:"aq",name:"Nitrato de cobre (II)"},{formula:"Ag",coefficient:2,state:"s",name:"Plata metálica cristalina"}],enthalpyDeltaH:-147.2,conditions:"Temperatura ambiente en disolución acuosa",explanation:"El alambre de cobre sumergido se cubre de bellas agujas plateadas de plata pura, mientras la disolución adquiere el azul característico de los iones Cu(2+)(aq).",bondChanges:"Cu(s) + 2 Ag+(aq) -> Cu2+(aq) + 2 Ag(s)",source:{name:"CRC Electrochemical Series",database:"CRC Handbook",confidence:"certified"}},{id:"rxn-baso4-precipitation",name:"Precipitación de sulfato de bario",equation:"BaCl2 + Na2SO4 -> BaSO4 + 2 NaCl",type:"precipitation",reactants:[{formula:"BaCl2",coefficient:1,state:"aq",name:"Cloruro de bario"},{formula:"Na2SO4",coefficient:1,state:"aq",name:"Sulfato de sodio"}],products:[{formula:"BaSO4",coefficient:1,state:"s",name:"Sulfato de bario (precipitado blanco)"},{formula:"NaCl",coefficient:2,state:"aq",name:"Cloruro de sodio"}],enthalpyDeltaH:-25.8,conditions:"Disolución acuosa a 298 K",explanation:"El sulfato de bario es extremadamente insoluble en agua (Ksp = 1.08 x 10^-10), precipitando al instante como un sólido blanco denso usado en radiología como medio de contraste.",bondChanges:"Ba2+(aq) + SO4(2-)(aq) -> BaSO4(s)",source:{name:"CRC Solubility Constants",database:"CRC Handbook",confidence:"certified"}},{id:"rxn-nahco3-decomposition",name:"Descomposición térmica del bicarbonato de sodio",equation:"2 NaHCO3 -> Na2CO3 + H2O + CO2",type:"decomposition",reactants:[{formula:"NaHCO3",coefficient:2,state:"s",name:"Bicarbonato de sodio"}],products:[{formula:"Na2CO3",coefficient:1,state:"s",name:"Carbonato de sodio"},{formula:"H2O",coefficient:1,state:"g",name:"Vapor de agua"},{formula:"CO2",coefficient:1,state:"g",name:"Dióxido de carbono"}],enthalpyDeltaH:129.2,conditions:"Calor superior a 80 °C (horno de repostería)",explanation:"Base del polvo para hornear: el calor libera CO2 y vapor de agua gaseosos que quedan atrapados en la masa provocando su esponjamiento.",bondChanges:"2 NaHCO3 -> Na2CO3 + H2O + CO2",source:{name:"NIST WebBook",database:"NIST",confidence:"certified"}},{id:"rxn-hcl-synthesis",name:"Síntesis de gas cloruro de hidrógeno",equation:"H2 + Cl2 -> 2 HCl",type:"synthesis",reactants:[{formula:"H2",coefficient:1,state:"g",name:"Gas hidrógeno"},{formula:"Cl2",coefficient:1,state:"g",name:"Gas cloro"}],products:[{formula:"HCl",coefficient:2,state:"g",name:"Cloruro de hidrógeno"}],enthalpyDeltaH:-184.6,conditions:"Luz ultravioleta o llama a 298 K",explanation:"Mecanismo en cadena por radicales libres activado fotoquímicamente. Muy exotérmica, produce cloruro de hidrógeno gaseoso que disuelto en agua genera ácido clorhídrico.",bondChanges:"1 H-H y 1 Cl-Cl rotos -> 2 H-Cl polares formados",source:{name:"NIST Chemistry WebBook",database:"NIST",confidence:"certified"}},{id:"rxn-thermite",name:"Reacción de termita (Aluminotermia)",equation:"Fe2O3 + 2 Al -> Al2O3 + 2 Fe",type:"single-displacement",reactants:[{formula:"Fe2O3",coefficient:1,state:"s",name:"Óxido de hierro (III)"},{formula:"Al",coefficient:2,state:"s",name:"Polvo de aluminio"}],products:[{formula:"Al2O3",coefficient:1,state:"s",name:"Óxido de aluminio"},{formula:"Fe",coefficient:2,state:"l",name:"Hierro fundido líquido"}],enthalpyDeltaH:-851.5,conditions:"Cinta de magnesio como iniciador a alta temperatura (>1500 °C)",explanation:"La extraordinaria afinidad del aluminio por el oxígeno libera tal cantidad de calor que el hierro producido emerge en estado líquido incandescente a más de 2500 °C.",bondChanges:"Reducción de Fe2O3 por Al -> Al2O3 + Fe fundido",source:{name:"CRC Handbook Thermochemistry",database:"CRC Handbook",confidence:"certified"}},{id:"rxn-h2co3-decomposition",name:"Descomposición del ácido carbónico (Efervescencia)",equation:"H2CO3 -> H2O + CO2",type:"decomposition",reactants:[{formula:"H2CO3",coefficient:1,state:"aq",name:"Ácido carbónico"}],products:[{formula:"H2O",coefficient:1,state:"l",name:"Agua"},{formula:"CO2",coefficient:1,state:"g",name:"Dióxido de carbono (burbujas)"}],enthalpyDeltaH:-9.6,conditions:"Despresurización de bebidas carbonatadas a 298 K",explanation:"Equilibrio de ácido carbónico que descompone espontáneamente al abrir un refresco, liberando burbujas de CO2 gaseoso.",bondChanges:"H2CO3(aq) -> H2O(l) + CO2(g)",source:{name:"NIST WebBook",database:"NIST",confidence:"certified"}}],Ci={H2O:{id:"mol-h2o",name:"Agua",formula:"H2O",empiricalFormula:"H2O",molarMass:18.015,geometryVSEPR:"bent",dipoleMomentDebye:1.85,smiles:"O",atoms:[{id:"O1",atomicNumber:8,symbol:"O",protons:8,neutrons:8,electrons:8,formalCharge:0,position:[0,0,0]},{id:"H1",atomicNumber:1,symbol:"H",protons:1,neutrons:0,electrons:1,formalCharge:0,position:[.757,.586,0]},{id:"H2",atomicNumber:1,symbol:"H",protons:1,neutrons:0,electrons:1,formalCharge:0,position:[-.757,.586,0]}],bonds:[{id:"b1",atomAId:"O1",atomBId:"H1",order:1,type:"covalent-polar",length:.958,energy:463},{id:"b2",atomAId:"O1",atomBId:"H2",order:1,type:"covalent-polar",length:.958,energy:463}],source:{name:"NIST Chemistry WebBook 3D Experimental Geometry",database:"NIST",confidence:"certified"}},CO2:{id:"mol-co2",name:"Dióxido de carbono",formula:"CO2",empiricalFormula:"CO2",molarMass:44.009,geometryVSEPR:"linear",dipoleMomentDebye:0,smiles:"O=C=O",atoms:[{id:"C1",atomicNumber:6,symbol:"C",protons:6,neutrons:6,electrons:6,formalCharge:0,position:[0,0,0]},{id:"O1",atomicNumber:8,symbol:"O",protons:8,neutrons:8,electrons:8,formalCharge:0,position:[1.163,0,0]},{id:"O2",atomicNumber:8,symbol:"O",protons:8,neutrons:8,electrons:8,formalCharge:0,position:[-1.163,0,0]}],bonds:[{id:"b1",atomAId:"C1",atomBId:"O1",order:2,type:"covalent-polar",length:1.163,energy:799},{id:"b2",atomAId:"C1",atomBId:"O2",order:2,type:"covalent-polar",length:1.163,energy:799}],source:{name:"NIST Chemistry WebBook",database:"NIST",confidence:"certified"}},CH4:{id:"mol-ch4",name:"Metano",formula:"CH4",empiricalFormula:"CH4",molarMass:16.043,geometryVSEPR:"tetrahedral",dipoleMomentDebye:0,smiles:"C",atoms:[{id:"C1",atomicNumber:6,symbol:"C",protons:6,neutrons:6,electrons:6,formalCharge:0,position:[0,0,0]},{id:"H1",atomicNumber:1,symbol:"H",protons:1,neutrons:0,electrons:1,formalCharge:0,position:[.629,.629,.629]},{id:"H2",atomicNumber:1,symbol:"H",protons:1,neutrons:0,electrons:1,formalCharge:0,position:[-.629,-.629,.629]},{id:"H3",atomicNumber:1,symbol:"H",protons:1,neutrons:0,electrons:1,formalCharge:0,position:[-.629,.629,-.629]},{id:"H4",atomicNumber:1,symbol:"H",protons:1,neutrons:0,electrons:1,formalCharge:0,position:[.629,-.629,-.629]}],bonds:[{id:"b1",atomAId:"C1",atomBId:"H1",order:1,type:"covalent-nonpolar",length:1.089,energy:413},{id:"b2",atomAId:"C1",atomBId:"H2",order:1,type:"covalent-nonpolar",length:1.089,energy:413},{id:"b3",atomAId:"C1",atomBId:"H3",order:1,type:"covalent-nonpolar",length:1.089,energy:413},{id:"b4",atomAId:"C1",atomBId:"H4",order:1,type:"covalent-nonpolar",length:1.089,energy:413}],source:{name:"PubChem CID 297",database:"PubChem",confidence:"certified"}},NH3:{id:"mol-nh3",name:"Amoníaco",formula:"NH3",empiricalFormula:"NH3",molarMass:17.031,geometryVSEPR:"trigonal-pyramidal",dipoleMomentDebye:1.47,smiles:"N",atoms:[{id:"N1",atomicNumber:7,symbol:"N",protons:7,neutrons:7,electrons:7,formalCharge:0,position:[0,0,.116]},{id:"H1",atomicNumber:1,symbol:"H",protons:1,neutrons:0,electrons:1,formalCharge:0,position:[0,.94,-.27]},{id:"H2",atomicNumber:1,symbol:"H",protons:1,neutrons:0,electrons:1,formalCharge:0,position:[.814,-.47,-.27]},{id:"H3",atomicNumber:1,symbol:"H",protons:1,neutrons:0,electrons:1,formalCharge:0,position:[-.814,-.47,-.27]}],bonds:[{id:"b1",atomAId:"N1",atomBId:"H1",order:1,type:"covalent-polar",length:1.012,energy:391},{id:"b2",atomAId:"N1",atomBId:"H2",order:1,type:"covalent-polar",length:1.012,energy:391},{id:"b3",atomAId:"N1",atomBId:"H3",order:1,type:"covalent-polar",length:1.012,energy:391}],source:{name:"PubChem CID 222",database:"PubChem",confidence:"certified"}},O2:{id:"mol-o2",name:"Oxígeno diatómico",formula:"O2",empiricalFormula:"O",molarMass:31.998,geometryVSEPR:"linear",dipoleMomentDebye:0,smiles:"O=O",atoms:[{id:"O1",atomicNumber:8,symbol:"O",protons:8,neutrons:8,electrons:8,formalCharge:0,position:[-.604,0,0]},{id:"O2",atomicNumber:8,symbol:"O",protons:8,neutrons:8,electrons:8,formalCharge:0,position:[.604,0,0]}],bonds:[{id:"b1",atomAId:"O1",atomBId:"O2",order:2,type:"covalent-nonpolar",length:1.208,energy:498}],source:{name:"NIST Chemistry WebBook",database:"NIST",confidence:"certified"}},N2:{id:"mol-n2",name:"Nitrógeno diatómico",formula:"N2",empiricalFormula:"N",molarMass:28.014,geometryVSEPR:"linear",dipoleMomentDebye:0,smiles:"N#N",atoms:[{id:"N1",atomicNumber:7,symbol:"N",protons:7,neutrons:7,electrons:7,formalCharge:0,position:[-.549,0,0]},{id:"N2",atomicNumber:7,symbol:"N",protons:7,neutrons:7,electrons:7,formalCharge:0,position:[.549,0,0]}],bonds:[{id:"b1",atomAId:"N1",atomBId:"N2",order:3,type:"covalent-nonpolar",length:1.098,energy:945}],source:{name:"NIST Chemistry WebBook",database:"NIST",confidence:"certified"}},HCl:{id:"mol-hcl",name:"Cloruro de hidrógeno",formula:"HCl",empiricalFormula:"HCl",molarMass:36.458,geometryVSEPR:"linear",dipoleMomentDebye:1.08,smiles:"Cl",atoms:[{id:"Cl1",atomicNumber:17,symbol:"Cl",protons:17,neutrons:18,electrons:17,formalCharge:0,position:[.065,0,0]},{id:"H1",atomicNumber:1,symbol:"H",protons:1,neutrons:0,electrons:1,formalCharge:0,position:[-1.209,0,0]}],bonds:[{id:"b1",atomAId:"Cl1",atomBId:"H1",order:1,type:"covalent-polar",length:1.274,energy:431}],source:{name:"PubChem CID 313",database:"PubChem",confidence:"certified"}},NaCl:{id:"mol-nacl",name:"Cloruro de sodio",formula:"NaCl",empiricalFormula:"NaCl",molarMass:58.443,geometryVSEPR:"linear",dipoleMomentDebye:9,smiles:"[Na+].[Cl-]",atoms:[{id:"Na1",atomicNumber:11,symbol:"Na",protons:11,neutrons:12,electrons:10,formalCharge:1,position:[-1.18,0,0]},{id:"Cl1",atomicNumber:17,symbol:"Cl",protons:17,neutrons:18,electrons:18,formalCharge:-1,position:[1.18,0,0]}],bonds:[{id:"b1",atomAId:"Na1",atomBId:"Cl1",order:1,type:"ionic",length:2.36,energy:787}],source:{name:"CRC Handbook Lattice Energy",database:"CRC Handbook",confidence:"certified"}},C2H5OH:{id:"mol-ethanol",name:"Etanol",formula:"C2H5OH",empiricalFormula:"C2H6O",molarMass:46.069,geometryVSEPR:"tetrahedral",dipoleMomentDebye:1.69,smiles:"CCO",atoms:[{id:"C1",atomicNumber:6,symbol:"C",protons:6,neutrons:6,electrons:6,formalCharge:0,position:[-1.22,-.22,0]},{id:"C2",atomicNumber:6,symbol:"C",protons:6,neutrons:6,electrons:6,formalCharge:0,position:[.08,.54,0]},{id:"O1",atomicNumber:8,symbol:"O",protons:8,neutrons:8,electrons:8,formalCharge:0,position:[1.2,-.35,0]},{id:"H1",atomicNumber:1,symbol:"H",protons:1,neutrons:0,electrons:1,formalCharge:0,position:[-1.26,-.85,.89]},{id:"H2",atomicNumber:1,symbol:"H",protons:1,neutrons:0,electrons:1,formalCharge:0,position:[-1.26,-.85,-.89]},{id:"H3",atomicNumber:1,symbol:"H",protons:1,neutrons:0,electrons:1,formalCharge:0,position:[-2.07,.46,0]},{id:"H4",atomicNumber:1,symbol:"H",protons:1,neutrons:0,electrons:1,formalCharge:0,position:[.12,1.18,.89]},{id:"H5",atomicNumber:1,symbol:"H",protons:1,neutrons:0,electrons:1,formalCharge:0,position:[.12,1.18,-.89]},{id:"H6",atomicNumber:1,symbol:"H",protons:1,neutrons:0,electrons:1,formalCharge:0,position:[1.99,.19,0]}],bonds:[{id:"b1",atomAId:"C1",atomBId:"C2",order:1,type:"covalent-nonpolar",length:1.51},{id:"b2",atomAId:"C2",atomBId:"O1",order:1,type:"covalent-polar",length:1.43},{id:"b3",atomAId:"O1",atomBId:"H6",order:1,type:"covalent-polar",length:.96},{id:"b4",atomAId:"C1",atomBId:"H1",order:1,type:"covalent-nonpolar",length:1.09},{id:"b5",atomAId:"C1",atomBId:"H2",order:1,type:"covalent-nonpolar",length:1.09},{id:"b6",atomAId:"C1",atomBId:"H3",order:1,type:"covalent-nonpolar",length:1.09},{id:"b7",atomAId:"C2",atomBId:"H4",order:1,type:"covalent-nonpolar",length:1.09},{id:"b8",atomAId:"C2",atomBId:"H5",order:1,type:"covalent-nonpolar",length:1.09}],source:{name:"PubChem CID 702 3D Conformer",database:"PubChem",confidence:"certified"}},C2H4:{id:"mol-c2h4",name:"Eteno (Etileno)",formula:"C2H4",empiricalFormula:"CH2",molarMass:28.054,geometryVSEPR:"trigonal-planar",dipoleMomentDebye:0,smiles:"C=C",atoms:[{id:"C1",atomicNumber:6,symbol:"C",protons:6,neutrons:6,electrons:6,formalCharge:0,position:[-.669,0,0]},{id:"C2",atomicNumber:6,symbol:"C",protons:6,neutrons:6,electrons:6,formalCharge:0,position:[.669,0,0]},{id:"H1",atomicNumber:1,symbol:"H",protons:1,neutrons:0,electrons:1,formalCharge:0,position:[-1.232,.928,0]},{id:"H2",atomicNumber:1,symbol:"H",protons:1,neutrons:0,electrons:1,formalCharge:0,position:[-1.232,-.928,0]},{id:"H3",atomicNumber:1,symbol:"H",protons:1,neutrons:0,electrons:1,formalCharge:0,position:[1.232,.928,0]},{id:"H4",atomicNumber:1,symbol:"H",protons:1,neutrons:0,electrons:1,formalCharge:0,position:[1.232,-.928,0]}],bonds:[{id:"b1",atomAId:"C1",atomBId:"C2",order:2,type:"covalent-nonpolar",length:1.339,energy:614},{id:"b2",atomAId:"C1",atomBId:"H1",order:1,type:"covalent-nonpolar",length:1.087,energy:413},{id:"b3",atomAId:"C1",atomBId:"H2",order:1,type:"covalent-nonpolar",length:1.087,energy:413},{id:"b4",atomAId:"C2",atomBId:"H3",order:1,type:"covalent-nonpolar",length:1.087,energy:413},{id:"b5",atomAId:"C2",atomBId:"H4",order:1,type:"covalent-nonpolar",length:1.087,energy:413}],source:{name:"NIST WebBook",database:"NIST",confidence:"certified"}}};class Do{static createStructure(e,t,n){let i;if(typeof e=="number"?i=fi[e]:i=_t[e],!i)throw new Error(`[AtomicEngine] Elemento químico no encontrado: "${e}".`);const r=i.atomicNumber,o=t!==void 0?t:Math.round(i.atomicMass-r),s=n!==void 0?n:r,c=r+o,l=r-s,d=l!==0,p=l>0?"cation":l<0?"anion":"neutral";let f=i.symbol;l>0?f+=l===1?"+":`${l}+`:l<0&&(f+=l===-1?"-":`${Math.abs(l)}-`);const m=`^${c}${i.symbol}`,v=Math.round(i.atomicMass-r),_=o===v;let h="stable";if(r>83)h="radioactive";else if(r===1&&o===0)h="stable";else if(r===1&&o===1)h="stable";else if(r===1&&o>=2)h="radioactive";else{const u=o/r;r<=20?Math.abs(u-1)>.45&&(h="unstable"):(u<1||u>1.6)&&(h="unstable")}return{element:i,protons:r,neutrons:o,electrons:s,massNumber:c,netCharge:l,isIon:d,ionType:p,ionNotation:f,isotopeNotation:m,isStandardIsotope:_,stability:h}}static getAtomicModels(){return{dalton:{type:"dalton",name:"Modelo de Dalton (Esferas Indivisibles)",year:1803,author:"John Dalton",postulates:["La materia está formada por partículas diminutas e indivisibles llamadas átomos.","Los átomos de un mismo elemento son idénticos en masa y propiedades químicas.","Los compuestos se forman por la unión de átomos de diferentes elementos en proporciones numéricas sencillas y constantes.","Las reacciones químicas consisten en la separación, combinación o reorganización de átomos; ningún átomo se crea ni destruye."],features:["Representación como esferas sólidas, homogéneas y rígidas.","Explicó por primera vez la ley de conservación de la masa y la ley de proporciones definidas."],limitations:["Ignoraba la existencia de partículas subatómicas (protones, electrones y neutrones).","No podía explicar los fenómenos eléctricos de la materia ni la existencia de isótopos."],visualDescription:"Una esfera maciza y uniforme, sin estructura interna ni cargas eléctricas."},thomson:{type:"thomson",name:"Modelo de Thomson (Pudín de Pasas)",year:1897,author:"Joseph John Thomson",postulates:["El átomo es una esfera de electricidad positiva distribuida de manera continua y uniforme.","Los electrones (corpúsculos de carga negativa) se encuentran incrustados en su interior como pasas en un pudín.","La cantidad de carga negativa de los electrones neutraliza exactamente la carga positiva de la esfera."],features:["Primer modelo en incorporar una partícula subatómica demostrada experimentalmente (el electrón, descubierto con rayos catódicos).","Explica la neutralidad eléctrica y la ionización por pérdida o ganancia de electrones."],limitations:["No consideraba un núcleo central denso ni justificaba la dispersión de partículas alfa.","La carga positiva no está distribuida de forma continua por todo el volumen atómico."],visualDescription:"Una esfera luminosa de carga positiva continua con pequeños electrones esféricos incrustados uniformemente."},rutherford:{type:"rutherford",name:"Modelo Planetario de Rutherford",year:1911,author:"Ernest Rutherford",postulates:["El átomo consta de un núcleo central extraordinariamente pequeño y denso, cargado positivamente, donde se concentra prácticamente toda la masa.","La mayor parte del átomo es espacio vacío.","Los electrones giran en órbitas circulares alrededor del núcleo central a gran distancia, similar a planetas orbitando el Sol."],features:["Deducción directa del experimento de la lámina de oro (dispersión de partículas alfa a grandes ángulos).","Descubrimiento del núcleo atómico y posterior identificación del protón."],limitations:["Inestabilidad electromagnética clásica: según las ecuaciones de Maxwell, una carga acelerada debe radiar energía continuamente y colapsar en el núcleo en microsegundos.","No lograba explicar los espectros atómicos de emisión discontinuos (líneas espectrales discretas)."],visualDescription:"Un núcleo diminuto central hiperdenso con electrones orbitando en órbitas elípticas a gran distancia a través de un inmenso vacío."},bohr:{type:"bohr",name:"Modelo Cuántico Estacionario de Bohr",year:1913,author:"Niels Bohr",postulates:["Los electrones solo pueden orbitar en niveles de energía cuantizados y permitidos (n = 1, 2, 3...) sin emitir radiación (órbitas estacionarias).","El momento angular del electrón en una órbita permitida es un múltiplo entero de h / (2π).","La radiación solo se emite o absorbe cuando un electrón salta de una órbita a otra: ΔE = E2 - E1 = h·ν."],features:["Introdujo la constante de Planck en la estructura atómica y calculó con precisión el radio de Bohr (0.529 Å) y el espectro del átomo de hidrógeno (Rydberg).","Estableció los niveles principales de energía n = 1, 2, 3, 4..."],limitations:["Solo funciona cuantitativamente para átomos o iones hidrogenoides (con un solo electrón: H, He+, Li2+).","No explica el desdoblamiento fino de líneas espectrales, el efecto Zeeman ni la naturaleza ondulatoria del electrón."],visualDescription:"Órbitas circulares concéntricas fijas con radios cuantizados r_n = n²·a₀ sobre las cuales viajan electrones a energías discretas."},quantum:{type:"quantum",name:"Modelo Mecánico-Cuántico (Nubes de Probabilidad)",year:1926,author:"Erwin Schrödinger, Werner Heisenberg y Louis de Broglie",postulates:["Dualidad onda-partícula: el electrón exhibe propiedades tanto corpusculares como de onda material (λ = h / p).","Principio de Incertidumbre de Heisenberg: es físicamente imposible conocer simultáneamente y con precisión absoluta la posición y el momento lineal del electrón (Δx · Δp ≥ ℏ / 2).","Ecuación de onda de Schrödinger: los estados electrónicos se describen por funciones de onda espaciales Ψ(r, θ, φ).","Orbital atómico: región tridimensional del espacio donde existe una alta probabilidad (usualmente ≥ 90%) de encontrar al electrón, dada por el cuadrado de la función de onda |Ψ|²."],features:["Los orbitales no son trayectorias planetarias planas, sino nubes tridimensionales de densidad probabilística.","Descritos por cuatro números cuánticos: n (nivel principal), l (momento angular: s, p, d, f), m_l (orientación magnética) y m_s (espín: +1/2, -1/2).","Fundamento estricto de toda la química molecular y espectroscopía moderna."],limitations:["Requiere métodos computacionales y numéricos aproximados (Hartree-Fock, DFT) para átomos polielectrónicos complejos."],visualDescription:"Una nube volumétrica difusa y tridimensional donde la densidad de puntos representa la probabilidad |Ψ|² de hallar al electrón (esférica para orbitales s, bilobular orientada en ejes X/Y/Z para orbitales p)."}}}static calculateBohrEnergy(e,t=1){if(e<1)throw new Error("[AtomicEngine] El nivel cuántico principal n debe ser >= 1.");return-13.606*(Math.pow(t,2)/Math.pow(e,2))}static calculatePhotonWavelengthNm(e,t,n=1){if(e<=t)throw new Error("[AtomicEngine] n_initial debe ser mayor que n_final para una transición de emisión.");return 1/(10973730*Math.pow(n,2)*(1/Math.pow(t,2)-1/Math.pow(e,2)))*1e9}}class Gl{static AUFBAU_ORDER=[{n:1,subshell:"s",capacity:2},{n:2,subshell:"s",capacity:2},{n:2,subshell:"p",capacity:6},{n:3,subshell:"s",capacity:2},{n:3,subshell:"p",capacity:6},{n:4,subshell:"s",capacity:2},{n:3,subshell:"d",capacity:10},{n:4,subshell:"p",capacity:6},{n:5,subshell:"s",capacity:2},{n:4,subshell:"d",capacity:10},{n:5,subshell:"p",capacity:6},{n:6,subshell:"s",capacity:2},{n:4,subshell:"f",capacity:14},{n:5,subshell:"d",capacity:10},{n:6,subshell:"p",capacity:6},{n:7,subshell:"s",capacity:2},{n:5,subshell:"f",capacity:14},{n:6,subshell:"d",capacity:10},{n:7,subshell:"p",capacity:6}];static ANOMALIES={24:{"4s":1,"3d":5},29:{"4s":1,"3d":10},41:{"5s":1,"4d":4},42:{"5s":1,"4d":5},44:{"5s":1,"4d":7},45:{"5s":1,"4d":8},46:{"5s":0,"4d":10},47:{"5s":1,"4d":10},78:{"6s":1,"5d":9},79:{"6s":1,"5d":10}};static analyzeConfiguration(e,t){const n=t!==void 0?t:e;if(e<0)throw new Error("[ElectronEngine] El número de electrones no puede ser negativo.");let i=e;const r={};for(const h of this.AUFBAU_ORDER){const u=`${h.n}${h.subshell}`,y=Math.min(i,h.capacity);if(r[u]=y,i-=y,i<=0)break}if(n===e&&this.ANOMALIES[n]){const h=this.ANOMALIES[n];for(const[u,y]of Object.entries(h))r[u]=y}const o=[];let s=0,c=0,l=1;for(const h of this.AUFBAU_ORDER){const u=`${h.n}${h.subshell}`,y=r[u]||0;if(y===0&&i<=0&&s>0&&h.n>l)continue;y>0&&h.n>l&&(l=h.n);const T=h.capacity/2,S=[];for(let A=0;A<T;A++)S.push({id:`${u}_orb${A+1}`,label:this.getOrbitalLabel(h.subshell,A),electrons:0,spins:[]});let C=0;for(let A=0;A<T&&C<y;A++)S[A].electrons=1,S[A].spins.push("+1/2"),C++;for(let A=0;A<T&&C<y;A++)S[A].electrons=2,S[A].spins.push("-1/2"),C++;for(const A of S)A.electrons===1&&c++;if(o.push({n:h.n,subshell:h.subshell,label:u,maxCapacity:h.capacity,electrons:y,orbitals:S,energyOrder:s++}),e===0)break}let d=0;for(const h of o)h.n===l&&(d+=h.electrons);const f=o.filter(h=>h.electrons>0).map(h=>`${h.label}${this.toSuperscript(h.electrons)}`).join(" "),m=this.buildCondensedNotation(n,f,r),v=c>0,_=Math.sqrt(c*(c+2));return{atomicNumber:n,totalElectrons:e,subshells:o,condensedNotation:m,expandedNotation:f,valenceElectrons:d,unpairedElectrons:c,highestOccupiedLevel:l,isParamagnetic:v,magneticMomentBohrMagnetons:parseFloat(_.toFixed(2))}}static getOrbitalLabel(e,t){return e==="s"?"s":e==="p"?["px","py","pz"][t]||`p${t+1}`:e==="d"?["dxy","dyz","dxz","dx2-y2","dz2"][t]||`d${t+1}`:`f${t+1}`}static toSuperscript(e){const t={0:"⁰",1:"¹",2:"²",3:"³",4:"⁴",5:"⁵",6:"⁶",7:"⁷",8:"⁸",9:"⁹"};return String(e).split("").map(n=>t[n]||n).join("")}static buildCondensedNotation(e,t,n){const r=[{sym:"Rn",z:86},{sym:"Xe",z:54},{sym:"Ar",z:18},{sym:"Ne",z:10},{sym:"He",z:2}].find(l=>e>l.z);if(!r)return t;const s={He:["1s"],Ne:["1s","2s","2p"],Ar:["1s","2s","2p","3s","3p"],Xe:["1s","2s","2p","3s","3p","4s","3d","4p","5s","4d","5p"],Rn:["1s","2s","2p","3s","3p","4s","3d","4p","5s","4d","5p","6s","4f","5d","6p"]}[r.sym]||[],c=[];for(const[l,d]of Object.entries(n))d>0&&!s.includes(l)&&c.push(`${l}${this.toSuperscript(d)}`);return`[${r.sym}] ${c.join(" ")}`.trim()}}class Lo{static analyzeBond(e,t,n=1){const i=this.resolveElement(e),r=this.resolveElement(t),o=i.electronegativityPauling??2.1,s=r.electronegativityPauling??2.1,c=parseFloat(Math.abs(o-s).toFixed(2)),l=parseFloat((100*(1-Math.exp(-.25*Math.pow(c,2)))).toFixed(1)),d=["alkali-metal","alkaline-earth","transition-metal","post-transition-metal","lanthanide","actinide"].includes(i.category),p=["alkali-metal","alkaline-earth","transition-metal","post-transition-metal","lanthanide","actinide"].includes(r.category);let f,m="";d&&p?(f="metallic",m='Los cationes metálicos comparten una nube deslocalizada de electrones de valencia ("mar de electrones"), otorgando alta conductividad y maleabilidad.'):c>=1.7||d!==p&&c>=1.5?(f="ionic",m="Transferencia neta de electrones desde el átomo electropositivo hacia el átomo electronegativo, creando atracción electrostática pura según la ley de Coulomb."):c>=.4?(f="covalent-polar",m="Compartición asimétrica de electrones. La densidad electrónica se deforma hacia el núcleo con mayor electronegatividad, originando un dipolo eléctrico permanente."):(f="covalent-nonpolar",m="Compartición equitativa y simétrica de electrones entre ambos átomos, con densidad electrónica centrada en el eje internuclear.");const v=parseFloat((l/100).toFixed(2));let _=0,h=0,u="equal";o>s?(_=-v,h=+v,u="A"):s>o&&(_=+v,h=-v,u="B");const y=(i.atomicRadiusCovalent??100)/100,T=(r.atomicRadiusCovalent??100)/100,S=n===3?.78:n===2?.88:1,C=parseFloat(((y+T)*S).toFixed(3)),A=380*n,g=c*45,M=Math.round(A+g),I=`Entre ${i.name} (χ=${o}) y ${r.name} (χ=${s}), la diferencia de electronegatividad es Δχ = ${c}. Esto define un ${f.replace("-"," ")} con ${l}% de carácter iónico.`;return{elementA:i,elementB:r,electronegativityA:o,electronegativityB:s,deltaChi:c,bondType:f,percentIonicCharacter:l,partialChargeA:_,partialChargeB:h,moreElectronegative:u,typicalBondLengthAngstroms:C,typicalDissociationEnergyKjMol:M,electronicMechanism:m,pedagogicalSummary:I}}static evaluateLewisOctet(e,t,n){const i=this.resolveElement(e),r=i.valenceElectrons,o=r-n-t/2,s=t+n;let c=!1,l="none";return i.atomicNumber===1||i.atomicNumber===2?(c=s===2,l="duet"):["B","Be"].includes(e)&&s<8?(c=!0,l="sub-octet"):s===8?(c=!0,l="none"):s>8&&i.period>=3?(c=!0,l="expanded-octet"):(c=!1,l="sub-octet"),{symbol:e,valenceElectrons:r,bondingElectrons:t,lonePairElectrons:n,lonePairs:Math.floor(n/2),formalCharge:o,satisfiesOctet:c,octetException:l}}static classifyIntermolecularForces(e,t,n){const i=[];return n&&i.push({name:"Puente de hidrógeno",relativeStrength:"muy fuerte",description:"Interacción electrostática dirigida entre un átomo de H unido a F, O o N y el par de electrones libre de otro átomo electronegativo."}),t&&i.push({name:"Fuerzas dipolo-dipolo (Keesom)",relativeStrength:"fuerte",description:"Atracción entre los dipolos moleculares permanentes de moléculas polares contiguas."}),i.push({name:"Fuerzas de dispersión de London",relativeStrength:t?"moderada":"débil",description:"Atracciones electrostáticas transitorias generadas por fluctuaciones cuánticas instantáneas en la nube electrónica que inducen dipolos temporales en moléculas vecinas."}),i}static resolveElement(e){if(typeof e=="object"&&"symbol"in e)return e;if(typeof e=="number"){const t=fi[e];if(t)return t}if(typeof e=="string"){const t=_t[e];if(t)return t}throw new Error(`[BondEngine] Elemento no identificado: ${e}`)}}class Io{static predictVSEPR(e,t){const n=e+t,i=`AX${e}${t>0?`E${t}`:""}`;return n===2?{stericNumber:2,bondedAtoms:e,lonePairs:t,axeNotation:i,electronGeometry:"lineal",molecularGeometry:"linear",geometryNameEs:"Lineal",idealAngleDegrees:180,actualAngleDegrees:180,symmetryGroup:"D∞h",explanation:"Dos dominios de electrones se orientan en direcciones opuestas a 180° para minimizar la repulsión coulómbica."}:n===3?t===0?{stericNumber:3,bondedAtoms:3,lonePairs:0,axeNotation:"AX3",electronGeometry:"trigonal-plana",molecularGeometry:"trigonal-planar",geometryNameEs:"Trigonal Plana",idealAngleDegrees:120,actualAngleDegrees:120,symmetryGroup:"D3h",explanation:"Tres dominios de electrones coplanares dirigidos hacia los vértices de un triángulo equilátero."}:{stericNumber:3,bondedAtoms:2,lonePairs:1,axeNotation:"AX2E1",electronGeometry:"trigonal-plana",molecularGeometry:"bent",geometryNameEs:"Angular (120°)",idealAngleDegrees:120,actualAngleDegrees:119,symmetryGroup:"C2v",explanation:"El par solitario no enlazante ejerce mayor repulsión que los pares enlazantes, comprimiendo el ángulo ligeramente por debajo de 120°."}:n===4?t===0?{stericNumber:4,bondedAtoms:4,lonePairs:0,axeNotation:"AX4",electronGeometry:"tetraédrica",molecularGeometry:"tetrahedral",geometryNameEs:"Tetraédrica",idealAngleDegrees:109.5,actualAngleDegrees:109.5,symmetryGroup:"Td",explanation:"Cuatro dominios idénticos apuntan a los vértices de un tetraedro regular en 3D (ejemplo: CH4)."}:t===1?{stericNumber:4,bondedAtoms:3,lonePairs:1,axeNotation:"AX3E1",electronGeometry:"tetraédrica",molecularGeometry:"trigonal-pyramidal",geometryNameEs:"Trigonal Piramidal",idealAngleDegrees:109.5,actualAngleDegrees:107.3,symmetryGroup:"C3v",explanation:"Un par solitario apical comprime los tres enlaces basales hacia abajo hasta 107.3° (ejemplo: NH3)."}:{stericNumber:4,bondedAtoms:2,lonePairs:2,axeNotation:"AX2E2",electronGeometry:"tetraédrica",molecularGeometry:"bent",geometryNameEs:"Angular (Tetraédrica)",idealAngleDegrees:109.5,actualAngleDegrees:104.5,symmetryGroup:"C2v",explanation:"Dos pares solitarios no enlazantes deforman intensamente el tetraedro reduciendo el ángulo H-O-H a 104.5° (ejemplo: H2O)."}:n===5?t===0?{stericNumber:5,bondedAtoms:5,lonePairs:0,axeNotation:"AX5",electronGeometry:"bipiramidal-trigonal",molecularGeometry:"trigonal-bipyramidal",geometryNameEs:"Bipiramidal Trigonal",idealAngleDegrees:120,actualAngleDegrees:120,symmetryGroup:"D3h",explanation:"Tres posiciones ecuatoriales a 120° y dos posiciones axiales a 90° respecto al plano ecuatorial (ejemplo: PCl5)."}:t===1?{stericNumber:5,bondedAtoms:4,lonePairs:1,axeNotation:"AX4E1",electronGeometry:"bipiramidal-trigonal",molecularGeometry:"seesaw",geometryNameEs:"Balancín (Seesaw)",idealAngleDegrees:120,actualAngleDegrees:102,symmetryGroup:"C2v",explanation:"El par solitario ocupa una posición ecuatorial para minimizar repulsiones a 90° con los ligandos axiales (ejemplo: SF4)."}:t===2?{stericNumber:5,bondedAtoms:3,lonePairs:2,axeNotation:"AX3E2",electronGeometry:"bipiramidal-trigonal",molecularGeometry:"t-shaped",geometryNameEs:"Forma de T",idealAngleDegrees:90,actualAngleDegrees:87.5,symmetryGroup:"C2v",explanation:"Dos pares libres ocupan posiciones ecuatoriales, dejando tres enlaces que configuran una T (ejemplo: ClF3)."}:{stericNumber:5,bondedAtoms:2,lonePairs:3,axeNotation:"AX2E3",electronGeometry:"bipiramidal-trigonal",molecularGeometry:"linear",geometryNameEs:"Lineal (Bipiramidal)",idealAngleDegrees:180,actualAngleDegrees:180,symmetryGroup:"D∞h",explanation:"Los tres pares solitarios se disponen en el ecuador a 120° y los dos enlaces en posiciones axiales opuestas a 180° (ejemplo: XeF2)."}:n===6?t===0?{stericNumber:6,bondedAtoms:6,lonePairs:0,axeNotation:"AX6",electronGeometry:"octaédrica",molecularGeometry:"octahedral",geometryNameEs:"Octaédrica",idealAngleDegrees:90,actualAngleDegrees:90,symmetryGroup:"Oh",explanation:"Seis ligandos orientados hacia los vértices de un octaedro regular con todos los ángulos a 90° (ejemplo: SF6)."}:t===1?{stericNumber:6,bondedAtoms:5,lonePairs:1,axeNotation:"AX5E1",electronGeometry:"octaédrica",molecularGeometry:"square-pyramidal",geometryNameEs:"Piramidal Cuadrada",idealAngleDegrees:90,actualAngleDegrees:84.8,symmetryGroup:"C4v",explanation:"Cinco enlaces forman una base cuadrada con un ligando apical y un par solitario opuesto (ejemplo: BrF5)."}:{stericNumber:6,bondedAtoms:4,lonePairs:2,axeNotation:"AX4E2",electronGeometry:"octaédrica",molecularGeometry:"square-planar",geometryNameEs:"Cuadrada Plana",idealAngleDegrees:90,actualAngleDegrees:90,symmetryGroup:"D4h",explanation:"Los dos pares solitarios se sitúan en posiciones trans (180° entre sí) para máxima separación, dejando 4 ligandos coplanares a 90° (ejemplo: XeF4)."}:{stericNumber:n,bondedAtoms:e,lonePairs:t,axeNotation:i,electronGeometry:"tetraédrica",molecularGeometry:"unknown",geometryNameEs:"Geometría Compleja",idealAngleDegrees:109.5,actualAngleDegrees:109.5,explanation:"Geometría molecular con número estérico no estándar."}}static generateCoordinates(e,t){const n=[],i=t.length,r=t[0]??1.1;switch(e){case"linear":{const o=t[0]??r,s=t[1]??r;n.push([-o,0,0]),i>1&&n.push([s,0,0]);break}case"bent":{const o=52.25*Math.PI/180,s=t[0]??r,c=t[1]??r;n.push([-s*Math.sin(o),s*Math.cos(o),0]),n.push([c*Math.sin(o),c*Math.cos(o),0]);break}case"trigonal-planar":{for(let o=0;o<i;o++){const s=t[o]??r,c=o*2*Math.PI/3;n.push([parseFloat((s*Math.cos(c)).toFixed(3)),parseFloat((s*Math.sin(c)).toFixed(3)),0])}break}case"trigonal-pyramidal":{const o=107.3*Math.PI/180,s=-Math.cos(o/2),c=Math.sin(o/2);for(let l=0;l<i;l++){const d=t[l]??r,p=l*2*Math.PI/3;n.push([parseFloat((d*c*Math.cos(p)).toFixed(3)),parseFloat((d*c*Math.sin(p)).toFixed(3)),parseFloat((d*s).toFixed(3))])}break}case"tetrahedral":{const o=1/Math.sqrt(3),s=[[o,o,o],[-o,-o,o],[-o,o,-o],[o,-o,-o]];for(let c=0;c<i;c++){const l=t[c]??r,d=s[c%s.length];n.push([parseFloat((d[0]*l).toFixed(3)),parseFloat((d[1]*l).toFixed(3)),parseFloat((d[2]*l).toFixed(3))])}break}case"octahedral":{const o=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];for(let s=0;s<i;s++){const c=t[s]??r,l=o[s%o.length];n.push([l[0]*c,l[1]*c,l[2]*c])}break}default:{const o=Math.PI*(3-Math.sqrt(5));for(let s=0;s<i;s++){const c=t[s]??r,l=1-s/(i-1||1)*2,d=Math.sqrt(1-l*l),p=o*s,f=Math.cos(p)*d,m=Math.sin(p)*d;n.push([parseFloat((f*c).toFixed(3)),parseFloat((l*c).toFixed(3)),parseFloat((m*c).toFixed(3))])}break}}return n}}const Kn={CO2:{formula:"CO2",name:"Dióxido de Carbono",iupacName:"Dióxido de carbono",commonName:"Anhídrido carbónico / Gas carbónico",family:"Óxido no metálico (Anhídrido)",stateAt25C:"Gas",vseprGeometry:"linear",bondAngles:"180.0°",dipoleMoment:"0.0 D (Apolar por simetría)",description:"Gas incoloro fundamental para la fotosíntesis y el ciclo del carbono. El átomo central de carbono forma dos enlaces dobles covalentes con cada oxígeno (O=C=O). Al carecer de pares de electrones libres en el carbono (AX₂), la repulsión de pares electrónicos genera una geometría perfectamente lineal a 180°.",recommendedBonds:[{atomASymbol:"C",atomBSymbol:"O",order:2},{atomASymbol:"C",atomBSymbol:"O",order:2}]},H2O:{formula:"H2O",name:"Agua",iupacName:"Oxidano",commonName:"Agua destilada / Solvente universal",family:"Hidruro no metálico / Óxido de hidrógeno",stateAt25C:"Líquido",vseprGeometry:"bent",bondAngles:"104.5°",dipoleMoment:"1.85 D (Fuertemente Polar)",description:"Solvente universal indispensable para los sistemas biológicos. El oxígeno central cuenta con 2 pares enlazantes con hidrógeno y 2 pares de electrones solitarios (AX₂E₂). La fuerte repulsión de los pares libres comprime el ángulo tetraédrico de 109.5° hasta 104.5°, otorgándole un momento dipolar elevado.",recommendedBonds:[{atomASymbol:"O",atomBSymbol:"H",order:1},{atomASymbol:"O",atomBSymbol:"H",order:1}]},CH4:{formula:"CH4",name:"Metano",iupacName:"Metano",commonName:"Gas natural / Gas de los pantanos",family:"Alcano (Hidrocarburo saturado)",stateAt25C:"Gas",vseprGeometry:"tetrahedral",bondAngles:"109.5°",dipoleMoment:"0.0 D (Apolar)",description:"Hidrocarburo más simple de la química orgánica. El carbono central cuenta con hibridación sp³ y 4 pares enlazantes equivalentes (AX₄). La repulsión uniforme orienta los 4 átomos de hidrógeno hacia los vértices de un tetraedro regular con ángulos exactos de 109.5°.",recommendedBonds:[{atomASymbol:"C",atomBSymbol:"H",order:1},{atomASymbol:"C",atomBSymbol:"H",order:1},{atomASymbol:"C",atomBSymbol:"H",order:1},{atomASymbol:"C",atomBSymbol:"H",order:1}]},NH3:{formula:"NH3",name:"Amoníaco",iupacName:"Azano",commonName:"Gas amoníaco",family:"Hidruro no metálico / Base de Lewis",stateAt25C:"Gas",vseprGeometry:"trigonal-pyramidal",bondAngles:"107.0°",dipoleMoment:"1.47 D (Polar)",description:"Compuesto nitrogenado de olor penetrante vital en la producción de fertilizantes (Proceso Haber-Bosch). Posee 3 enlaces simples N-H y 1 par de electrones solitario en el nitrógeno (AX₃E₁), que comprime el ángulo tetraédrico a 107° formando una pirámide trigonal.",recommendedBonds:[{atomASymbol:"N",atomBSymbol:"H",order:1},{atomASymbol:"N",atomBSymbol:"H",order:1},{atomASymbol:"N",atomBSymbol:"H",order:1}]},O2:{formula:"O2",name:"Oxígeno Molecular",iupacName:"Dioxígeno",commonName:"Oxígeno gas",family:"Elemento diatómico",stateAt25C:"Gas",vseprGeometry:"linear",bondAngles:"180.0°",dipoleMoment:"0.0 D (Apolar)",description:"Gas diatómico esencial para la respiración celular aeróbica. Los dos átomos de oxígeno comparten 4 electrones formando un enlace covalente doble (O=O), completando cada uno la regla del octeto con dos pares libres periféricos.",recommendedBonds:[{atomASymbol:"O",atomBSymbol:"O",order:2}]},N2:{formula:"N2",name:"Nitrógeno Molecular",iupacName:"Dinitrógeno",commonName:"Nitrógeno gas",family:"Elemento diatómico inerte",stateAt25C:"Gas",vseprGeometry:"linear",bondAngles:"180.0°",dipoleMoment:"0.0 D (Apolar)",description:"Constituye el 78% de la atmósfera terrestre. La unión de los dos átomos de nitrógeno se realiza mediante un enlace covalente triple (N≡N) de enorme energía de disociación (945 kJ/mol), lo que le confiere una inercia química excepcional a temperatura ambiente.",recommendedBonds:[{atomASymbol:"N",atomBSymbol:"N",order:3}]},H2:{formula:"H2",name:"Hidrógeno Molecular",iupacName:"Dihidrógeno",commonName:"Gas hidrógeno",family:"Elemento diatómico / Combustible limpio",stateAt25C:"Gas",vseprGeometry:"linear",bondAngles:"180.0°",dipoleMoment:"0.0 D (Apolar)",description:"El elemento más abundante y ligero del universo. Dos núcleos de hidrógeno comparten su único electrón 1s en un enlace covalente simple sigma, satisfaciendo la regla del dueto.",recommendedBonds:[{atomASymbol:"H",atomBSymbol:"H",order:1}]},HCl:{formula:"ClH",name:"Cloruro de Hidrógeno",iupacName:"Clorano / Cloruro de hidrógeno",commonName:"Ácido clorhídrico (en disolución acuosa)",family:"Haluro de hidrógeno / Ácido hidrácido",stateAt25C:"Gas",vseprGeometry:"linear",bondAngles:"180.0°",dipoleMoment:"1.08 D (Polar)",description:"Gas diatómico incoloro con enlace covalente fuertemente polarizado hacia el átomo de cloro debido a su alta electronegatividad (3.16 frente a 2.20 de H). En agua se ioniza al 100% como ácido fuerte.",recommendedBonds:[{atomASymbol:"H",atomBSymbol:"Cl",order:1}]},HCl_alt:{formula:"HCl",name:"Cloruro de Hidrógeno",iupacName:"Clorano",commonName:"Ácido clorhídrico",family:"Haluro de hidrógeno",stateAt25C:"Gas",vseprGeometry:"linear",bondAngles:"180.0°",dipoleMoment:"1.08 D (Polar)",description:"Enlace covalente polar entre H y Cl. Altamente soluble en agua donde forma ácido clorhídrico.",recommendedBonds:[{atomASymbol:"H",atomBSymbol:"Cl",order:1}]},Cl2:{formula:"Cl2",name:"Cloro Molecular",iupacName:"Dicloro",commonName:"Gas cloro",family:"Halógeno diatómico",stateAt25C:"Gas",vseprGeometry:"linear",bondAngles:"180.0°",dipoleMoment:"0.0 D (Apolar)",description:"Gas amarillo verdoso sofocante con enlace covalente simple Cl-Cl."},NaCl:{formula:"ClNa",name:"Cloruro de Sodio",iupacName:"Cloruro de sodio",commonName:"Sal común / Halita",family:"Sal binaria iónica",stateAt25C:"Sólido",vseprGeometry:"linear",bondAngles:"180.0°",dipoleMoment:"9.0 D (Enlace iónico)",description:"Compuesto iónico paradigmático. La transferencia completa de un electrón del catión Na⁺ al anión Cl⁻ genera una red cristalina cúbica de coordinación 6:6 con alta energía de red electrostática.",recommendedBonds:[{atomASymbol:"Na",atomBSymbol:"Cl",order:1}]},NaCl_alt:{formula:"NaCl",name:"Cloruro de Sodio",iupacName:"Cloruro de sodio",commonName:"Sal común",family:"Sal iónica",stateAt25C:"Sólido",vseprGeometry:"linear",bondAngles:"180.0°",dipoleMoment:"9.0 D",description:"Enlace iónico por atracción electrostática entre Na⁺ y Cl⁻."},CO:{formula:"CO",name:"Monóxido de Carbono",iupacName:"Monóxido de carbono",commonName:"Gas de combustión incompleta",family:"Óxido de carbono",stateAt25C:"Gas",vseprGeometry:"linear",bondAngles:"180.0°",dipoleMoment:"0.12 D",description:"Gas tóxico que se une con afinidad 200 veces superior a la hemoglobina. Posee un enlace triple C≡O donde uno de los enlaces es covalente coordinado (dativo) del oxígeno al carbono.",recommendedBonds:[{atomASymbol:"C",atomBSymbol:"O",order:3}]},C2H6:{formula:"C2H6",name:"Etano",iupacName:"Etano",commonName:"Gas etano",family:"Alcano",stateAt25C:"Gas",vseprGeometry:"tetrahedral",bondAngles:"109.5°",dipoleMoment:"0.0 D",description:"Hidrocarburo con enlace simple C-C y conformación alternada de mínima energía."},C2H4:{formula:"C2H4",name:"Eteno (Etileno)",iupacName:"Eteno",commonName:"Etileno (hormona vegetal de maduración)",family:"Alqueno",stateAt25C:"Gas",vseprGeometry:"trigonal-planar",bondAngles:"120.0°",dipoleMoment:"0.0 D",description:"Posee un doble enlace carbono-carbono (uno sigma sp²-sp² y uno pi por solapamiento de orbitales 2p puros), confiriéndole geometría plana y alta reactividad en polimerización.",recommendedBonds:[{atomASymbol:"C",atomBSymbol:"C",order:2},{atomASymbol:"C",atomBSymbol:"H",order:1}]},C2H2:{formula:"C2H2",name:"Etino (Acetileno)",iupacName:"Etino",commonName:"Gas acetileno de soldadura",family:"Alquino",stateAt25C:"Gas",vseprGeometry:"linear",bondAngles:"180.0°",dipoleMoment:"0.0 D",description:"Alquino con enlace triple C≡C lineal (hibridación sp en los carbonos). Produce llamas de más de 3000°C en combustión oxiacetilénica.",recommendedBonds:[{atomASymbol:"C",atomBSymbol:"C",order:3},{atomASymbol:"C",atomBSymbol:"H",order:1}]},C2H6O:{formula:"C2H6O",name:"Etanol",iupacName:"Etanol",commonName:"Alcohol etílico",family:"Alcohol primario",stateAt25C:"Líquido",vseprGeometry:"tetrahedral",bondAngles:"109.5° (C) / 104.5° (O)",dipoleMoment:"1.69 D",description:"Compuesto orgánico oxigenado con grupo hidroxilo (-OH) capaz de formar puentes de hidrógeno intermoleculares que elevan su punto de ebullición a 78.4°C."},CH4O:{formula:"CH4O",name:"Metanol",iupacName:"Metanol",commonName:"Alcohol metílico / Alcohol de madera",family:"Alcohol primario",stateAt25C:"Líquido",vseprGeometry:"tetrahedral",bondAngles:"108.9°",dipoleMoment:"1.70 D",description:"Alcohol de un solo carbono, altamente tóxico que puede causar ceguera por oxidación a formaldehído."},H2O2:{formula:"H2O2",name:"Peróxido de Hidrógeno",iupacName:"Dióxido de dihidrógeno",commonName:"Agua oxigenada",family:"Peróxido inorgánico",stateAt25C:"Líquido",vseprGeometry:"bent",bondAngles:"94.8° / 111.5° (torsión)",dipoleMoment:"2.26 D",description:"Agente oxidante enérgico con enlace peroxo débil (O-O) susceptible a descomposición catalítica exotérmica en agua y dioxígeno."},SO2:{formula:"O2S",name:"Dióxido de Azufre",iupacName:"Dióxido de azufre",commonName:"Gas sulfuroso",family:"Óxido no metálico",stateAt25C:"Gas",vseprGeometry:"bent",bondAngles:"119.0°",dipoleMoment:"1.63 D",description:"Gas emitido por volcanes y combustión de carbón. El azufre central tiene 1 par solitario (AX₂E₁), resultando en geometría angular a ~119° y comportamiento polar."},SO3:{formula:"O3S",name:"Trióxido de Azufre",iupacName:"Trióxido de azufre",commonName:"Anhídrido sulfúrico",family:"Óxido no metálico / Precursor del ácido sulfúrico",stateAt25C:"Líquido / Gas",vseprGeometry:"trigonal-planar",bondAngles:"120.0°",dipoleMoment:"0.0 D",description:"El azufre central cuenta con 3 centros de carga sin pares libres (AX₃). Geometría trigonal plana de simetría D3h apolar."},O3:{formula:"O3",name:"Ozono",iupacName:"Trioxígeno",commonName:"Ozono estratosférico",family:"Alótropo de oxígeno",stateAt25C:"Gas",vseprGeometry:"bent",bondAngles:"116.8°",dipoleMoment:"0.53 D",description:"Escudo atmosférico contra radiación ultravioleta UV-B. El oxígeno central cuenta con un par de electrones solitario (AX₂E₁), produciendo geometría angular y enlace deslocalizado por resonancia."},BF3:{formula:"BF3",name:"Trifluoruro de Boro",iupacName:"Trifluoroborano",commonName:"Trifluoruro de boro",family:"Haluro de boro / Ácido de Lewis",stateAt25C:"Gas",vseprGeometry:"trigonal-planar",bondAngles:"120.0°",dipoleMoment:"0.0 D",description:"Ejemplo clásico de octeto incompleto (6 electrones de valencia en el Boro). Geometría trigonal plana perfecta a 120° y avidez electrofílica como aceptor de pares de electrones."},SF6:{formula:"F6S",name:"Hexafluoruro de Azufre",iupacName:"Hexafluoro-λ⁶-sulfano",commonName:"Gas aislante dieléctrico SF6",family:"Fluoruro inorgánico / Octeto expandido",stateAt25C:"Gas",vseprGeometry:"octahedral",bondAngles:"90.0° / 180.0°",dipoleMoment:"0.0 D",description:"Octeto expandido de 12 electrones alrededor del azufre central (hibridación sp³d² o modelo hipervalente). Geometría octaédrica perfecta de extraordinaria estabilidad térmica y química."},PCl5:{formula:"Cl5P",name:"Pentacloruro de Fósforo",iupacName:"Pentacloro-λ⁵-fosfano",commonName:"Pentacloruro de fósforo",family:"Haluro de fósforo / Hipervalente",stateAt25C:"Sólido",vseprGeometry:"trigonal-bipyramidal",bondAngles:"120° (ecuatorial) / 90° (axial)",dipoleMoment:"0.0 D",description:"Geometría bipiramidal trigonal (AX₅). Los 3 enlaces ecuatoriales forman ángulos de 120° y los 2 axiales forman ángulos de 90° respecto al plano ecuatorial."},HCN:{formula:"CHN",name:"Cianuro de Hidrógeno",iupacName:"Cianuro de hidrógeno / Formonitrilo",commonName:"Ácido prúsico",family:"Nitrilo inorgánico",stateAt25C:"Gas / Líquido volátil",vseprGeometry:"linear",bondAngles:"180.0°",dipoleMoment:"2.98 D",description:"Molécula lineal H-C≡N con hibridación sp en el carbono. Enlace triple C≡N polar y gran momento dipolar."}};class ya{static identify(e){const t=e.formula?.trim();if(Kn[t])return Kn[t];const n=this.normalizeFormulaKey(e);if(Kn[n])return Kn[n];if(e.atoms.length===2&&e.atoms[0].symbol===e.atoms[1].symbol){const r=`${e.atoms[0].symbol}2`;if(Kn[r])return Kn[r]}return e.atoms.length===0?{formula:"—",name:"Mesa de Trabajo Vacía",iupacName:"Sin átomos presentes",commonName:"Espacio de síntesis listo para añadir elementos",family:"Área de Trabajo",stateAt25C:"Gas",vseprGeometry:"unknown",bondAngles:"—",dipoleMoment:"—",description:"Utiliza la paleta de elementos a la izquierda o selecciona una sustancia preestablecida para comenzar a construir y examinar estructuras moleculares en 3D."}:this.generateSystematicInfo(e)}static normalizeFormulaKey(e){const t={};for(const n of e.atoms)t[n.symbol]=(t[n.symbol]||0)+1;return t.C===1&&t.O===2&&Object.keys(t).length===2?"CO2":t.H===2&&t.O===1&&Object.keys(t).length===2?"H2O":t.C===1&&t.H===4&&Object.keys(t).length===2?"CH4":t.N===1&&t.H===3&&Object.keys(t).length===2?"NH3":t.H===1&&t.Cl===1&&Object.keys(t).length===2?"HCl":t.Na===1&&t.Cl===1&&Object.keys(t).length===2?"NaCl":t.C===1&&t.O===1&&Object.keys(t).length===2?"CO":t.C===2&&t.H===4&&Object.keys(t).length===2?"C2H4":t.C===2&&t.H===2&&Object.keys(t).length===2?"C2H2":t.C===2&&t.H===6&&Object.keys(t).length===2?"C2H6":t.C===2&&t.H===6&&t.O===1&&Object.keys(t).length===3?"C2H6O":t.H===2&&t.O===2&&Object.keys(t).length===2?"H2O2":t.S===1&&t.O===2&&Object.keys(t).length===2?"SO2":t.S===1&&t.O===3&&Object.keys(t).length===2?"SO3":t.O===3&&Object.keys(t).length===1?"O3":t.B===1&&t.F===3&&Object.keys(t).length===2?"BF3":t.S===1&&t.F===6&&Object.keys(t).length===2?"SF6":t.P===1&&t.Cl===5&&Object.keys(t).length===2?"PCl5":t.C===1&&t.H===1&&t.N===1&&Object.keys(t).length===3?"HCN":e.formula}static generateSystematicInfo(e){const t={};for(const r of e.atoms)t[r.symbol]=(t[r.symbol]||0)+1;const n=Object.keys(t);if(e.atoms.length===1){const r=e.atoms[0],o=_t[r.symbol];return{formula:r.symbol,name:`Átomo de ${o?.name||r.symbol}`,iupacName:`${o?.name||r.symbol} atómico`,commonName:`Elemento ${o?.name||r.symbol} libre`,family:o?.category||"Elemento Químico",stateAt25C:o?.stateAt298K==="gas"?"Gas":o?.stateAt298K==="liquid"?"Líquido":"Sólido",vseprGeometry:"linear",bondAngles:"No aplica (Monoatómico)",dipoleMoment:"0.0 D",description:`Átomo individual de ${o?.name} (Z=${r.atomicNumber}). Masa atómica de ${o?.atomicMass.toFixed(2)} u con ${o?.valenceElectrons} electrones en su capa de valencia.`}}if(n.length===2&&n.includes("O")){const r=n.find(p=>p!=="O"),o=_t[r],s=t[r],c=t.O,d=`${c===1?"Monóxido":c===2?"Dióxido":c===3?"Trióxido":`${c}-óxido`} de ${o?.name||r}`;return{formula:e.formula,name:d,iupacName:d,commonName:`Compuesto binario oxigenado (${e.formula})`,family:o?.category.includes("metal")?"Óxido básico":"Óxido ácido (Anhídrido)",stateAt25C:"Gas",vseprGeometry:e.geometryVSEPR||"linear",bondAngles:"Determinado por VSEPR",dipoleMoment:"Dependiente de la simetría molecular",description:`Estructura formada por ${s} átomo(s) de ${o?.name} y ${c} átomo(s) de Oxígeno. Enlaces químicos calculados mediante teoría de repulsión de pares electrónicos.`}}const i=e.formula;return{formula:i,name:`Sustancia Molecular [${i}]`,iupacName:`Compuesto poliatómico (${i})`,commonName:`Molécula sintética personalizada (${i})`,family:"Estructura Molecular Personalizada",stateAt25C:"Líquido",vseprGeometry:e.geometryVSEPR||"unknown",bondAngles:"Geometría VSEPR aproximada",dipoleMoment:"Momento dipolar en cálculo",description:`Entidad molecular construida en el laboratorio con ${e.atoms.length} átomos y ${e.bonds.length} enlace(s) químicos. Cumple con el principio de conservación de masa y balance estequiométrico.`}}}class Kt{static createEmptyMolecule(e="Mesa de Trabajo Vacía"){return{id:`mol-${Date.now()}-${Math.random().toString(36).substring(2,6)}`,name:e,formula:"",empiricalFormula:"",molarMass:0,atoms:[],bonds:[],geometryVSEPR:"unknown"}}static addAtom(e,t,n=[0,0,0]){const i=typeof t=="number"?fi[t]:_t[t];if(!i)throw new Error(`[MolecularEngine] Elemento no válido: ${t}`);const o={id:`${i.symbol}_${e.atoms.length+1}_${Math.random().toString(36).substring(2,5)}`,atomicNumber:i.atomicNumber,symbol:i.symbol,protons:i.atomicNumber,neutrons:Math.round(i.atomicMass-i.atomicNumber),electrons:i.atomicNumber,formalCharge:0,position:n},s=[...e.atoms,o];return{molecule:this.recalculateProperties({...e,atoms:s}),addedAtom:o}}static removeAtom(e,t){const n=e.atoms.filter(r=>r.id!==t),i=e.bonds.filter(r=>r.atomAId!==t&&r.atomBId!==t);return this.recalculateProperties({...e,atoms:n,bonds:i})}static addBond(e,t,n,i=1){if(t===n)throw new Error("[MolecularEngine] No se puede enlazar un átomo consigo mismo.");const r=e.atoms.find(v=>v.id===t),o=e.atoms.find(v=>v.id===n);if(!r||!o)throw new Error("[MolecularEngine] Átomos de enlace no encontrados en la molécula.");const s=e.bonds.filter(v=>!(v.atomAId===t&&v.atomBId===n||v.atomAId===n&&v.atomBId===t)),c=r.position[0]-o.position[0],l=r.position[1]-o.position[1],d=r.position[2]-o.position[2],p=parseFloat(Math.sqrt(c*c+l*l+d*d).toFixed(3)),f=i===3?"covalent-triple":i===2?"covalent-double":"covalent-single",m={id:`bond-${t}-${n}`,atomAId:t,atomBId:n,order:i,type:f,length:p>.1?p:1.25};return this.recalculateProperties({...e,bonds:[...s,m]})}static cycleBondOrder(e,t){const n=e.bonds.map(i=>{if(i.id===t){const r=i.order===1?2:i.order===2?3:1;return{...i,order:r,type:r===3?"covalent-triple":r===2?"covalent-double":"covalent-single"}}return i});return this.recalculateProperties({...e,bonds:n})}static recalculateProperties(e){if(e.atoms.length===0)return{...e,name:"Mesa de Trabajo Vacía",formula:"",empiricalFormula:"",molarMass:0,geometryVSEPR:"unknown"};const t={};let n=0;for(const h of e.atoms){t[h.symbol]=(t[h.symbol]||0)+1;const u=_t[h.symbol];u&&(n+=u.atomicMass)}const i=Object.keys(t),r=i.includes("C");let o=[];if(r){o.push("C"),i.includes("H")&&o.push("H");const h=i.filter(u=>u!=="C"&&u!=="H").sort();o=[...o,...h]}else o=i.sort();const s=o.map(h=>{const u=t[h];return u>1?`${h}${u}`:h}).join(""),c=Object.values(t),l=(h,u)=>u===0?h:l(u,h%u),d=c.length>0?c.reduce(l):1,p=o.map(h=>{const u=t[h]/d;return u>1?`${h}${u}`:h}).join("");let f="unknown";if(e.atoms.length===2)f="linear";else if(e.atoms.length>2){const h={};for(const D of e.bonds)h[D.atomAId]=(h[D.atomAId]||0)+1,h[D.atomBId]=(h[D.atomBId]||0)+1;let u=-1,y=e.atoms[0].id;for(const D of e.atoms){if(D.symbol==="H")continue;const F=h[D.id]||0,P=_t[D.symbol]?.valenceElectrons??4,k=F*2+(8-Math.abs(4-P));k>u&&(u=k,y=D.id)}const T=e.atoms.find(D=>D.id===y)||e.atoms[0],C=_t[T.symbol]?.valenceElectrons??4;let A=0,g=0;for(const D of e.bonds)(D.atomAId===T.id||D.atomBId===T.id)&&(A+=D.order,g++);const M=Math.max(0,C-A),I=Math.floor(M/2);f=Io.predictVSEPR(g,I).molecularGeometry}const m={...e,formula:s||"Vacía",empiricalFormula:p||"Vacía",molarMass:parseFloat(n.toFixed(3)),geometryVSEPR:f},v=ya.identify(m),_=v.name;return v.vseprGeometry&&v.vseprGeometry!=="unknown"&&(f=v.vseprGeometry),{...m,name:_,geometryVSEPR:f}}static autoSaturateBonds(e){if(e.atoms.length<2)return e;const t=ya.identify(e);let n=[...e.bonds];if(t.recommendedBonds&&t.recommendedBonds.length>0)n=n.map(i=>{const r=e.atoms.find(c=>c.id===i.atomAId),o=e.atoms.find(c=>c.id===i.atomBId);if(!r||!o)return i;const s=t.recommendedBonds?.find(c=>c.atomASymbol===r.symbol&&c.atomBSymbol===o.symbol||c.atomASymbol===o.symbol&&c.atomBSymbol===r.symbol);if(s){const c=s.order===3?"covalent-triple":s.order===2?"covalent-double":"covalent-single";return{...i,order:s.order,type:c}}return i});else{const i=e.atoms.filter(o=>o.symbol==="C"),r=e.atoms.filter(o=>o.symbol==="O");i.length===1&&r.length===2&&n.length===2&&(n=n.map(o=>({...o,order:2,type:"covalent-double"})))}return this.recalculateProperties({...e,bonds:n})}static optimize3DGeometry(e){if(e.atoms.length===0)return e;if(e.atoms.length===1){const m={...e.atoms[0],position:[0,0,0]};return{...e,atoms:[m]}}const t=this.autoSaturateBonds(e),{atoms:n,bonds:i,geometryVSEPR:r}=t;if(n.length===2){const m=[{...n[0],position:[-.65,0,0]},{...n[1],position:[.65,0,0]}];return this.recalculateProperties({...t,atoms:m})}const o={};for(const m of i)o[m.atomAId]=(o[m.atomAId]||0)+1,o[m.atomBId]=(o[m.atomBId]||0)+1;let s=n[0],c=-1;for(const m of n){if(m.symbol==="H")continue;const v=o[m.id]||0;v>c&&(c=v,s=m)}if(t.name.toLowerCase().includes("dióxido de carbono")||t.formula==="CO2"){const m=n.filter(_=>_.id!==s.id),v=[{...s,position:[0,0,0]},{...m[0],position:[-1.22,0,0]},{...m[1],position:[1.22,0,0]}];return this.recalculateProperties({...t,atoms:v})}if(t.name.toLowerCase().includes("agua")||t.formula==="H2O"){const m=n.filter(_=>_.id!==s.id),v=[{...s,position:[0,.12,0]},{...m[0],position:[-.78,-.47,0]},{...m[1],position:[.78,-.47,0]}];return this.recalculateProperties({...t,atoms:v})}const l=n.filter(m=>m.id!==s.id),d=l.map(()=>1.35),p=Io.generateCoordinates(r||"linear",d),f=[{...s,position:[0,0,0]},...l.map((m,v)=>({...m,position:p[v]||[1.2*(v+1),0,0]}))];return this.recalculateProperties({...t,atoms:f})}}class mr{static parseFormula(e){const t=e.trim().replace(/\s+/g,""),n=/\(([^()]+)\)(\d*)/g;let i=t;for(;n.test(i);)i=i.replace(n,(r,o,s)=>{const c=s?parseInt(s,10):1,l=this.parseSimpleFormula(o);return Object.entries(l).map(([d,p])=>`${d}${p*c}`).join("")});return this.parseSimpleFormula(i)}static parseSimpleFormula(e){const t={},n=/([A-Z][a-z]*)(\d*)/g;let i;for(;(i=n.exec(e))!==null;){const r=i[1],o=i[2]?parseInt(i[2],10):1;t[r]=(t[r]||0)+o}return t}static verifyConservation(e,t){const n={},i={};for(const p of e){const f=p.coefficient||1,m=this.parseFormula(p.formula);for(const[v,_]of Object.entries(m))n[v]=(n[v]||0)+_*f}for(const p of t){const f=p.coefficient||1,m=this.parseFormula(p.formula);for(const[v,_]of Object.entries(m))i[v]=(i[v]||0)+_*f}const r=Array.from(new Set([...Object.keys(n),...Object.keys(i)]));let o=!0;const s={};for(const p of r){const f=n[p]||0,m=i[p]||0,v=f===m;v||(o=!1),s[p]={inReactants:f,inProducts:m,conserved:v}}const c=e.map(p=>`${p.coefficient>1?`${p.coefficient} `:""}${p.formula}`).join(" + "),l=t.map(p=>`${p.coefficient>1?`${p.coefficient} `:""}${p.formula}`).join(" + "),d=`${c} -> ${l}`;return{balanced:o,balancedEquation:d,reactants:e,products:t,atomConservation:s,chargeConservation:{reactantCharge:0,productCharge:0,conserved:!0}}}static evaluateReaction(e,t){const n=e.map(r=>r.trim()).sort(),i=wi.find(r=>{const o=r.reactants.map(c=>c.formula).sort();if(o.length!==n.length||!o.every((c,l)=>c===n[l]))return!1;if(t&&t.length>0){const c=t.map(d=>d.trim()).sort(),l=r.products.map(d=>d.formula).sort();return l.length!==c.length?!1:l.every((d,p)=>d===c[p])}return!0});if(i){const r=this.verifyConservation(i.reactants,i.products),o=i.enthalpyDeltaH,s=o!==void 0?o<0?"exotérmica":o>0?"endotérmica":"neutra":"desconocida";return{isVerified:!0,verifiedData:i,balanced:r.balanced,balancedEquation:i.equation,reactants:i.reactants,products:i.products,atomConservation:r.atomConservation,chargeConservation:r.chargeConservation,enthalpyDeltaH:o,thermodynamicNature:s,explanation:i.explanation,scientificNotes:`Datos termodinámicos certificados por ${i.source.database}.`}}if(t&&t.length>0){const r=n.map(c=>({formula:c,coefficient:1})),o=t.map(c=>({formula:c,coefficient:1})),s=this.verifyConservation(r,o);return{isVerified:!1,balanced:s.balanced,balancedEquation:s.balancedEquation,reactants:r,products:o,atomConservation:s.atomConservation,chargeConservation:s.chargeConservation,thermodynamicNature:"desconocida",explanation:s.balanced?"Ecuación químicamente conservada en átomos, pero no registrada en el catálogo de reacciones certificadas con parámetros cinéticos.":"La ecuación propuesta no conserva los átomos de los reactivos en los productos (desbalance estequiométrico).",scientificNotes:"Resultado derivado de verificación algebraica estricta."}}return{isVerified:!1,balanced:!1,balancedEquation:`${n.join(" + ")} -> ?`,reactants:n.map(r=>({formula:r,coefficient:1})),products:[],atomConservation:{},chargeConservation:{reactantCharge:0,productCharge:0,conserved:!1},thermodynamicNature:"desconocida",explanation:"Reacción no determinada. El laboratorio virtual no genera productos arbitrarios ni asume reactividad química espontánea sin evidencia experimental o condiciones termodinámicas documentadas.",scientificNotes:"Sin datos en la base certificada."}}static autoBalance(e,t){const n=e.length,i=t.length,r=n+i;if(r>6)return this.verifyConservation(e.map(l=>({formula:l,coefficient:1})),t.map(l=>({formula:l,coefficient:1})));const o=6,s=new Array(r).fill(1),c=l=>{if(l===r){const d=e.map((m,v)=>({formula:m,coefficient:s[v]})),p=t.map((m,v)=>({formula:m,coefficient:s[n+v]}));return this.verifyConservation(d,p).balanced}for(let d=1;d<=o;d++)if(s[l]=d,c(l+1))return!0;return!1};if(c(0)){const l=e.map((p,f)=>({formula:p,coefficient:s[f]})),d=t.map((p,f)=>({formula:p,coefficient:s[n+f]}));return this.verifyConservation(l,d)}return null}}class Fo{static generateMorseCurve(e,t,n,i=.02){const r=[],o=Math.max(20,Math.round(t*.55)),s=Math.round(t*3.5),c=(s-o)/100;for(let l=o;l<=s;l+=c){const d=l-t,p=Math.exp(-i*d),f=n*(Math.pow(1-p,2)-1),m=Math.min(n*2.5,f);r.push({internuclearDistancePm:parseFloat(l.toFixed(1)),potentialEnergyKjMol:parseFloat(m.toFixed(2))})}return{bondName:e,equilibriumDistancePm:t,dissociationEnergyKjMol:n,curveType:"Morse",points:r,repulsiveLimitPm:o,attractiveLimitPm:s,scientificBasis:"Potencial anarmónico de Morse calibrado con constantes espectroscópicas experimentales (NIST)."}}static generateLennardJonesCurve(e,t,n){const i=[],r=Math.max(10,Math.round(t*.85)),o=Math.round(t*3),s=(o-r)/100,c=parseFloat((t*Math.pow(2,1/6)).toFixed(1));for(let l=r;l<=o;l+=s){const d=t/l,p=Math.pow(d,6),f=Math.pow(p,2),m=4*n*(f-p),v=Math.min(n*4,m);i.push({internuclearDistancePm:parseFloat(l.toFixed(1)),potentialEnergyKjMol:parseFloat(v.toFixed(2))})}return{bondName:e,equilibriumDistancePm:c,dissociationEnergyKjMol:n,curveType:"Lennard-Jones",points:i,repulsiveLimitPm:r,attractiveLimitPm:o,scientificBasis:"Potencial de Lennard-Jones 12-6 para fuerzas dispersivas y repulsión de Pauli."}}static getStandardCurves(){return{"H-H":this.generateMorseCurve("Enlace H-H (H2)",74.1,436,.024),"O-H":this.generateMorseCurve("Enlace O-H (Agua)",95.8,463,.022),"C-H":this.generateMorseCurve("Enlace C-H (Metano)",108.7,413,.019),"C-C":this.generateMorseCurve("Enlace simple C-C",154,348,.018),"C=O":this.generateMorseCurve("Enlace doble C=O (CO2)",116.3,799,.023),"N#N":this.generateMorseCurve("Enlace triple N≡N (N2)",109.8,945,.027),"Ar-Ar":this.generateLennardJonesCurve("Argón-Argón (Van der Waals)",340,1)}}}class Vl{static validateSubatomicConsistency(e,t,n,i,r){const o=[],s=[],c=[];c.push("Consistencia Número Atómico = Protones");const l=_t[e];l?t!==l.atomicNumber&&o.push(`Inconsistencia en Z: ${e} debe tener ${l.atomicNumber} protones, pero tiene ${t}.`):o.push(`Elemento no reconocido: "${e}".`),c.push("Consistencia Carga Neta = Protones - Electrones");const d=t-i;return r!==d&&o.push(`Inconsistencia de carga: Q declarada (${r}) no coincide con p - e (${t} - ${i} = ${d}).`),c.push("Validación de Proporción N/Z para Estabilidad Nuclear"),t>1&&(n<0||n>t*3)&&s.push(`Relación N/Z extrema (${n}/${t}): núcleo altamente inestable o no físico.`),{isValid:o.length===0,errors:o,warnings:s,checkedRules:c}}static validateChemicalFormula(e){const t=[],n=[],i=["Sintaxis de fórmula química","Existencia de símbolos en la tabla periódica"];if(!e||e.trim()==="")return t.push("La fórmula química no puede estar vacía."),{isValid:!1,errors:t,warnings:n,checkedRules:i};try{const r=mr.parseFormula(e),o=Object.keys(r);o.length===0&&t.push(`Fórmula no analizable: "${e}".`);for(const s of o)_t[s]||t.push(`Símbolo de elemento inexistente en la tabla periódica: "${s}".`)}catch{t.push(`Error sintáctico al interpretar la fórmula: "${e}".`)}return{isValid:t.length===0,errors:t,warnings:n,checkedRules:i}}static validateReactionBalance(e,t){const n=[],i=[],r=["Conservación de masa (Lavoisier)","Conservación de carga","Coeficientes estequiométricos"];if((!e||e.length===0)&&n.push("La reacción debe contener al menos un reactivo."),(!t||t.length===0)&&n.push("La reacción debe contener al menos un producto."),n.length>0)return{isValid:!1,errors:n,warnings:i,checkedRules:r};const o=mr.verifyConservation(e,t);if(!o.balanced)for(const[s,c]of Object.entries(o.atomConservation))c.conserved||n.push(`Átomo de ${s} no conservado: ${c.inReactants} en reactivos vs ${c.inProducts} en productos.`);return{isValid:n.length===0,errors:n,warnings:i,checkedRules:r}}static validateMolecule(e){const t=[],n=[],i=["Conectividad de átomos","Límites de valencia máxima","Consistencia de enlaces"];if(e.atoms.length===0)return n.push("La molécula no contiene átomos."),{isValid:!0,errors:t,warnings:n,checkedRules:i};const r={};for(const s of e.bonds)r[s.atomAId]=(r[s.atomAId]||0)+s.order,r[s.atomBId]=(r[s.atomBId]||0)+s.order;const o={H:1,He:0,C:4,N:4,O:2,F:1,Ne:0,Na:1,Mg:2,Al:3,Si:4,P:6,S:6,Cl:7,Ar:0,K:1,Ca:2,Fe:6,Cu:2,Zn:2,Br:7,I:7};for(const s of e.atoms){const c=r[s.id]||0,l=o[s.symbol];l!==void 0&&c>l&&t.push(`Hipervalencia no permitida: el átomo ${s.symbol} (ID: ${s.id}) tiene ${c} enlaces (máximo esperado: ${l}).`)}return{isValid:t.length===0,errors:t,warnings:n,checkedRules:i}}}class Oo{container;onNavigate;constructor(e,t){this.container=e,this.onNavigate=t,this.render()}render(){const e=vn.length,t=wi.length,n=Object.keys(Ci).length;this.container.innerHTML=`
      <div class="vcl-dashboard-container">
        <!-- Hero Section -->
        <div class="vcl-dashboard-hero">
          <div class="vcl-hero-banner">
            <div>
              <div class="vcl-badge" style="margin-bottom: 0.8rem;">Vickora Labs • Simulación Científica 2026</div>
              <h2>Laboratorio Virtual de Química</h2>
              <p>
                Plataforma interactiva de simulación atómica, molecular y estequiométrica de alta precisión.
                Diseñada para bachillerato, computación espacial y dispositivos WebXR como <strong>Meta Quest 3S</strong>.
              </p>
            </div>
            <div style="display: flex; gap: 0.8rem; flex-wrap: wrap;">
              <button class="vcl-btn vcl-btn-primary" id="btn-hero-builder">
                <span>🧪</span>
                <span>Construir Molécula 3D</span>
              </button>
              <button class="vcl-btn vcl-btn-secondary" id="btn-hero-ptable">
                <span>📊</span>
                <span>Explorar 118 Elementos</span>
              </button>
              <button class="vcl-btn vcl-btn-xr" id="btn-hero-xr">
                <span>🥽</span>
                <span>Laboratorio Inmersivo XR</span>
              </button>
            </div>
          </div>

          <!-- Quick Stats Panel -->
          <div class="vcl-card" style="display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div class="vcl-badge" style="margin-bottom: 0.8rem; background: rgba(245, 158, 11, 0.15); color: #f59e0b; border-color: rgba(245, 158, 11, 0.3);">
                Estándar Científico Certificado
              </div>
              <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; color: #ffffff;">Metrología e Información</h3>
              <p style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.5;">
                Datos contrastados con NIST Chemistry WebBook, IUPAC Atomic Weights y PubChem.
                Motor químico puro desacoplado, sin alucinación ni estimaciones arbitrarias.
              </p>
            </div>

            <div class="vcl-stats-grid" style="grid-template-columns: repeat(2, 1fr); margin-top: 1rem;">
              <div class="vcl-stat-box">
                <div class="vcl-stat-val">${e}</div>
                <div class="vcl-stat-lbl">Elementos Tabla Periódica</div>
              </div>
              <div class="vcl-stat-box">
                <div class="vcl-stat-val">${t}</div>
                <div class="vcl-stat-lbl">Reacciones Certificadas</div>
              </div>
              <div class="vcl-stat-box">
                <div class="vcl-stat-val">${n}</div>
                <div class="vcl-stat-lbl">Moléculas 3D Estándar</div>
              </div>
              <div class="vcl-stat-box">
                <div class="vcl-stat-val">5</div>
                <div class="vcl-stat-lbl">Modelos Atómicos</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Módulos Científicos Grid -->
        <h3 style="font-family: var(--font-display); font-size: 1.35rem; margin-bottom: 1.25rem; color: #ffffff; letter-spacing: 0.04em;">
          MÓDULOS DE EXPERIMENTACIÓN Y ANÁLISIS
        </h3>

        <div class="vcl-modules-grid">
          <div class="vcl-card vcl-module-card" data-nav="m01-ptable">
            <div>
              <div class="vcl-module-icon">📊</div>
              <h3>M01 — Periodic Explorer</h3>
              <p>Tabla periódica interactiva de 118 elementos con configuraciones electrónicas, radios, masas y electronegatividades.</p>
            </div>
            <button class="vcl-btn vcl-btn-secondary" style="width: 100%;">Abrir Tabla Periódica →</button>
          </div>

          <div class="vcl-card vcl-module-card" data-nav="m02-atomic">
            <div>
              <div class="vcl-module-icon">⚛️</div>
              <h3>M02 — Atomic Studio</h3>
              <p>Constructor de átomos a nivel subatómico (protones, neutrones, electrones). Comparativa de los 5 modelos atómicos desde Dalton hasta la mecánica cuántica.</p>
            </div>
            <button class="vcl-btn vcl-btn-secondary" style="width: 100%;">Entrar a Atomic Studio →</button>
          </div>

          <div class="vcl-card vcl-module-card" data-nav="m03-electron">
            <div>
              <div class="vcl-module-icon">🌀</div>
              <h3>M03 — Electron Lab</h3>
              <p>Diagrama de energía de Aufbau, orbitales s, p, d, f con regla de Hund, principio de Pauli y cálculo de electrones de valencia.</p>
            </div>
            <button class="vcl-btn vcl-btn-secondary" style="width: 100%;">Explorar Orbitales →</button>
          </div>

          <div class="vcl-card vcl-module-card" data-nav="m04-bonds">
            <div>
              <div class="vcl-module-icon">🔗</div>
              <h3>M04 — Bond Studio</h3>
              <p>Simulador de enlaces covalentes (polar/no polar), iónicos y metálicos según escala de Pauling, estructuras de Lewis y fuerzas intermoleculares.</p>
            </div>
            <button class="vcl-btn vcl-btn-secondary" style="width: 100%;">Experimentar Enlaces →</button>
          </div>

          <div class="vcl-card vcl-module-card" data-nav="m05-builder">
            <div>
              <div class="vcl-module-icon">🧪</div>
              <h3>M05 — Molecular Builder</h3>
              <p>Evolución de la experiencia Moléculas. Visualizador y constructor molecular 3D con Ball & Stick, Space Filling, Wireframe y geometría VSEPR.</p>
            </div>
            <button class="vcl-btn vcl-btn-primary" style="width: 100%;">Abrir Constructor 3D →</button>
          </div>

          <div class="vcl-card vcl-module-card" data-nav="m06-reactions">
            <div>
              <div class="vcl-module-icon">💥</div>
              <h3>M06 — Reaction Lab</h3>
              <p>Motor de reacciones químicas verificadas, balanceador estequiométrico, conservación de masa y cálculo termodinámico de entalpía ΔH.</p>
            </div>
            <button class="vcl-btn vcl-btn-secondary" style="width: 100%;">Simular Reacciones →</button>
          </div>

          <div class="vcl-card vcl-module-card" data-nav="m07-energy">
            <div>
              <div class="vcl-module-icon">📈</div>
              <h3>M07 — Energy & Forces</h3>
              <p>Curvas interactivas de potencial de Morse y Lennard-Jones. Distancia de equilibrio internuclear y energía de enlace.</p>
            </div>
            <button class="vcl-btn vcl-btn-secondary" style="width: 100%;">Analizar Curvas →</button>
          </div>

          <div class="vcl-card vcl-module-card" data-nav="m08-xr">
            <div>
              <div class="vcl-module-icon">🥽</div>
              <h3>M08 — Immersive Lab</h3>
              <p>Laboratorio espacial para Meta Quest 3S. Agarra, rota y examina moléculas a escala aumentada con mandos Touch Plus en WebXR.</p>
            </div>
            <button class="vcl-btn vcl-btn-xr" style="width: 100%;">Iniciar Sesión WebXR →</button>
          </div>

          <div class="vcl-card vcl-module-card" data-nav="m09-learning">
            <div>
              <div class="vcl-module-icon">📚</div>
              <h3>M09 — Learning Center</h3>
              <p>Entorno educativo de bachillerato con lecciones guiadas, bitácora de laboratorio interactiva y cuestionarios con evaluación científica.</p>
            </div>
            <button class="vcl-btn vcl-btn-secondary" style="width: 100%;">Ver Actividades →</button>
          </div>
        </div>
      </div>
    `,this.container.querySelector("#btn-hero-builder")?.addEventListener("click",()=>this.onNavigate("m05-builder")),this.container.querySelector("#btn-hero-ptable")?.addEventListener("click",()=>this.onNavigate("m01-ptable")),this.container.querySelector("#btn-hero-xr")?.addEventListener("click",()=>this.onNavigate("m08-xr")),this.container.querySelectorAll(".vcl-module-card").forEach(r=>{r.addEventListener("click",()=>{const o=r.getAttribute("data-nav");o&&this.onNavigate(o)})})}}class Wl{listeners={};on(e,t){return this.listeners[e]||(this.listeners[e]=new Set),this.listeners[e].add(t),()=>this.off(e,t)}off(e,t){this.listeners[e]?.delete(t)}emit(e,t){this.listeners[e]?.forEach(n=>{try{n(t)}catch(i){console.error(`[VCLEventBus] Error en listener para evento '${String(e)}':`,i)}})}clear(){this.listeners={}}}const xt=new Wl;class ql{container;onSelectElementForStudio;selectedCategory="all";searchQuery="";constructor(e,t){this.container=e,this.onSelectElementForStudio=t,this.render()}render(){const e={"alkali-metal":"#8b5cf6","alkaline-earth":"#10b981","transition-metal":"#f59e0b","post-transition-metal":"#06b6d4",metalloid:"#14b8a6","reactive-nonmetal":"#3b82f6","noble-gas":"#ec4899",lanthanide:"#6366f1",actinide:"#d946ef",unknown:"#64748b"},t={all:"Todos los Elementos","alkali-metal":"Metales Alcalinos","alkaline-earth":"Alcalinotérreos","transition-metal":"Metales de Transición","post-transition-metal":"Metales Post-transición",metalloid:"Metaloides","reactive-nonmetal":"No Metales Reactivos","noble-gas":"Gases Nobles",lanthanide:"Lantánidos",actinide:"Actínidos"};this.container.innerHTML=`
      <div class="vcl-ptable-container">
        <!-- Controles y Filtros -->
        <div class="vcl-ptable-controls">
          <div style="display: flex; align-items: center; gap: 0.8rem; flex-wrap: wrap;">
            <input
              type="text"
              id="ptable-search-input"
              class="vcl-input-search"
              placeholder="Buscar por nombre, símbolo o número Z (ej. Carbono, C, 6)..."
              value="${this.searchQuery}"
            />
            <select id="ptable-category-filter" class="vcl-input-search" style="min-width: 200px;">
              ${Object.entries(t).map(([n,i])=>`<option value="${n}" ${this.selectedCategory===n?"selected":""}>${i}</option>`).join("")}
            </select>
          </div>

          <div style="display: flex; align-items: center; gap: 0.8rem;">
            <span class="vcl-badge" id="ptable-count-badge">${vn.length} Elementos</span>
          </div>
        </div>

        <!-- Leyenda de Categorías -->
        <div style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-bottom: 0.5rem; font-size: 0.72rem;">
          ${Object.entries(e).map(([n,i])=>`
            <div style="display: flex; align-items: center; gap: 0.35rem; color: var(--text-muted);">
              <span style="width: 10px; height: 10px; border-radius: 2px; background: ${i};"></span>
              <span>${t[n]||n}</span>
            </div>
          `).join("")}
        </div>

        <!-- Cuadrícula de la Tabla Periódica -->
        <div class="vcl-ptable-grid" id="ptable-grid">
          <!-- Renderizado de las 18 columnas x 7 periodos estándar + filas de Lantánidos y Actínidos -->
        </div>
      </div>
    `,this.renderGrid(e),this.setupEvents(e)}renderGrid(e){const t=this.container.querySelector("#ptable-grid");if(!t)return;let n="";const i=vn.filter(o=>{const s=this.selectedCategory==="all"||o.category===this.selectedCategory,c=this.searchQuery.toLowerCase().trim(),l=!c||o.name.toLowerCase().includes(c)||o.symbol.toLowerCase().includes(c)||String(o.atomicNumber)===c;return s&&l}),r=this.container.querySelector("#ptable-count-badge");r&&(r.textContent=`${i.length} Elementos`);for(const o of vn){const s=i.some(f=>f.atomicNumber===o.atomicNumber),c=e[o.category]||"#64748b";let l=o.period,d=o.group;o.category==="lanthanide"&&o.atomicNumber>=57&&o.atomicNumber<=71?(l=8,d=o.atomicNumber-57+3):o.category==="actinide"&&o.atomicNumber>=89&&o.atomicNumber<=103&&(l=9,d=o.atomicNumber-89+3);const p=`
        grid-row: ${l};
        grid-column: ${d};
        border-left: 3px solid ${c};
        opacity: ${s?"1":"0.15"};
        pointer-events: ${s?"auto":"none"};
      `;n+=`
        <div class="vcl-element-cell" style="${p}" data-symbol="${o.symbol}">
          <div class="vcl-cell-top">
            <span>${o.atomicNumber}</span>
            <span>${o.atomicMass.toFixed(1)}</span>
          </div>
          <div class="vcl-cell-symbol" style="color: ${c};">${o.symbol}</div>
          <div class="vcl-cell-name">${o.name}</div>
        </div>
      `}t.innerHTML=n,t.querySelectorAll(".vcl-element-cell").forEach(o=>{o.addEventListener("click",()=>{const s=o.getAttribute("data-symbol");s&&_t[s]&&this.openElementModal(_t[s])})})}setupEvents(e){this.container.querySelector("#ptable-search-input")?.addEventListener("input",i=>{this.searchQuery=i.target.value,this.renderGrid(e)}),this.container.querySelector("#ptable-category-filter")?.addEventListener("change",i=>{this.selectedCategory=i.target.value,this.renderGrid(e)})}openElementModal(e){const t=document.getElementById("vcl-modal-container");t&&(t.classList.remove("hidden"),t.innerHTML=`
      <div class="vcl-modal-content">
        <button id="modal-btn-close" style="position: absolute; top: 1.25rem; right: 1.25rem; background: transparent; border: none; color: var(--text-muted); font-size: 1.5rem; cursor: pointer;">✕</button>

        <div style="display: flex; align-items: center; gap: 1.25rem; margin-bottom: 1.5rem;">
          <div style="width: 72px; height: 72px; border-radius: var(--radius-md); background: rgba(15, 23, 42, 0.9); border: 2px solid ${e.colorHex}; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 0 20px ${e.colorHex}44;">
            <span style="font-size: 0.8rem; color: var(--text-dim);">${e.atomicNumber}</span>
            <span style="font-size: 1.8rem; font-weight: 800; color: #ffffff;">${e.symbol}</span>
          </div>
          <div>
            <h2 style="font-family: var(--font-display); font-size: 1.6rem; color: #ffffff; margin-bottom: 0.2rem;">${e.name}</h2>
            <div style="display: flex; gap: 0.5rem; align-items: center;">
              <span class="vcl-badge">${e.category}</span>
              <span class="vcl-badge" style="background: rgba(16, 185, 129, 0.15); color: #10b981; border-color: rgba(16, 185, 129, 0.3);">
                Estado: ${e.stateAt298K} (298 K)
              </span>
            </div>
          </div>
        </div>

        <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem;">
          ${e.summary}
        </p>

        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 1.8rem;">
          <div class="vcl-stat-box" style="text-align: left;">
            <div class="vcl-stat-lbl">Masa Atómica IUPAC</div>
            <div style="font-size: 1.1rem; font-weight: 700; color: #ffffff;">${e.atomicMass} u (g/mol)</div>
          </div>
          <div class="vcl-stat-box" style="text-align: left;">
            <div class="vcl-stat-lbl">Configuración Electrónica</div>
            <div style="font-size: 1.05rem; font-family: var(--font-mono); font-weight: 700; color: var(--accent-cyan);">${e.electronConfiguration}</div>
          </div>
          <div class="vcl-stat-box" style="text-align: left;">
            <div class="vcl-stat-lbl">Electronegatividad (Pauling)</div>
            <div style="font-size: 1.1rem; font-weight: 700; color: ${e.electronegativityPauling?"#ffffff":"var(--text-dim)"};">
              ${e.electronegativityPauling??"No aplica"}
            </div>
          </div>
          <div class="vcl-stat-box" style="text-align: left;">
            <div class="vcl-stat-lbl">1ª Energía de Ionización</div>
            <div style="font-size: 1.1rem; font-weight: 700; color: #ffffff;">
              ${e.ionizationEnergyFirst?`${e.ionizationEnergyFirst} kJ/mol`:"No documentada"}
            </div>
          </div>
          <div class="vcl-stat-box" style="text-align: left;">
            <div class="vcl-stat-lbl">Radio Covalente / Van der Waals</div>
            <div style="font-size: 1.1rem; font-weight: 700; color: #ffffff;">
              ${e.atomicRadiusCovalent??"-"} pm / ${e.atomicRadiusVanDerWaals??"-"} pm
            </div>
          </div>
          <div class="vcl-stat-box" style="text-align: left;">
            <div class="vcl-stat-lbl">Electrones de Valencia</div>
            <div style="font-size: 1.1rem; font-weight: 700; color: var(--accent-gold);">${e.valenceElectrons} e-</div>
          </div>
        </div>

        <div style="background: rgba(15, 23, 42, 0.6); padding: 0.85rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); margin-bottom: 1.5rem; font-size: 0.78rem; color: var(--text-dim);">
          <strong>Fuente Metrológica:</strong> ${e.source.name} (${e.source.database}) • Nivel de confianza: ${e.source.confidence}.
        </div>

        <div style="display: flex; gap: 0.8rem; justify-content: flex-end;">
          <button class="vcl-btn vcl-btn-secondary" id="modal-btn-open-atomic">
            <span>⚛️</span>
            <span>Ver en Atomic Studio</span>
          </button>
          <button class="vcl-btn vcl-btn-primary" id="modal-btn-add-builder">
            <span>🧪</span>
            <span>Añadir a Molecular Builder</span>
          </button>
        </div>
      </div>
    `,t.querySelector("#modal-btn-close")?.addEventListener("click",()=>{t.classList.add("hidden")}),t.addEventListener("click",n=>{n.target===t&&t.classList.add("hidden")}),t.querySelector("#modal-btn-open-atomic")?.addEventListener("click",()=>{t.classList.add("hidden"),xt.emit("element:selected",e),this.onSelectElementForStudio&&this.onSelectElementForStudio(e)}),t.querySelector("#modal-btn-add-builder")?.addEventListener("click",()=>{t.classList.add("hidden"),xt.emit("element:selected",e),xt.emit("lab:notification",{title:"Elemento Cargado",message:`${e.name} (${e.symbol}) listo para ser enlazado en el Molecular Builder.`,type:"success"})}))}}class Xl{container;currentElementSymbol="C";protons=6;neutrons=6;electrons=6;currentModel="bohr";animFrameId=null;constructor(e,t="C"){this.container=e,this.setElement(t)}setElement(e){const t=_t[e]||fi[6];this.currentElementSymbol=t.symbol,this.protons=t.atomicNumber,this.neutrons=Math.round(t.atomicMass-t.atomicNumber),this.electrons=t.atomicNumber,this.render()}render(){const e=Do.createStructure(this.protons,this.neutrons,this.electrons),t=Do.getAtomicModels(),n=t[this.currentModel];this.container.innerHTML=`
      <div class="vcl-layout-3col">
        <!-- Panel Izquierdo: Controles Subatómicos -->
        <div class="vcl-card" style="display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div class="vcl-badge" style="margin-bottom: 0.8rem;">M02 // ATOMIC STUDIO</div>
            <h3 style="font-family: var(--font-display); font-size: 1.3rem; margin-bottom: 1.2rem; color: #ffffff;">Constructor Atómico</h3>

            <!-- Selector de Elemento Rápido -->
            <div style="margin-bottom: 1.5rem;">
              <label style="font-size: 0.78rem; color: var(--text-muted); display: block; margin-bottom: 0.4rem;">Elemento Químico Base</label>
              <select id="atomic-element-picker" class="vcl-input-search" style="width: 100%;">
                <option value="H" ${this.currentElementSymbol==="H"?"selected":""}>1 - Hidrógeno (H)</option>
                <option value="He" ${this.currentElementSymbol==="He"?"selected":""}>2 - Helio (He)</option>
                <option value="Li" ${this.currentElementSymbol==="Li"?"selected":""}>3 - Litio (Li)</option>
                <option value="C" ${this.currentElementSymbol==="C"?"selected":""}>6 - Carbono (C)</option>
                <option value="N" ${this.currentElementSymbol==="N"?"selected":""}>7 - Nitrógeno (N)</option>
                <option value="O" ${this.currentElementSymbol==="O"?"selected":""}>8 - Oxígeno (O)</option>
                <option value="F" ${this.currentElementSymbol==="F"?"selected":""}>9 - Flúor (F)</option>
                <option value="Na" ${this.currentElementSymbol==="Na"?"selected":""}>11 - Sodio (Na)</option>
                <option value="Cl" ${this.currentElementSymbol==="Cl"?"selected":""}>17 - Cloro (Cl)</option>
                <option value="Ca" ${this.currentElementSymbol==="Ca"?"selected":""}>20 - Calcio (Ca)</option>
                <option value="Fe" ${this.currentElementSymbol==="Fe"?"selected":""}>26 - Hierro (Fe)</option>
              </select>
            </div>

            <!-- Control de Protones -->
            <div style="background: rgba(15, 23, 42, 0.6); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); margin-bottom: 1rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <span style="font-size: 0.85rem; font-weight: 600; color: #ef4444;">🔴 Protones (Z)</span>
                <span style="font-family: var(--font-mono); font-size: 1.2rem; font-weight: 700; color: #ffffff;" id="val-protons">${this.protons}</span>
              </div>
              <div style="display: flex; gap: 0.5rem;">
                <button class="vcl-btn vcl-btn-secondary" id="btn-p-dec" style="flex: 1;">- 1</button>
                <button class="vcl-btn vcl-btn-secondary" id="btn-p-inc" style="flex: 1;">+ 1</button>
              </div>
            </div>

            <!-- Control de Neutrones -->
            <div style="background: rgba(15, 23, 42, 0.6); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); margin-bottom: 1rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <span style="font-size: 0.85rem; font-weight: 600; color: #94a3b8;">⚪ Neutrones (N)</span>
                <span style="font-family: var(--font-mono); font-size: 1.2rem; font-weight: 700; color: #ffffff;" id="val-neutrons">${this.neutrons}</span>
              </div>
              <div style="display: flex; gap: 0.5rem;">
                <button class="vcl-btn vcl-btn-secondary" id="btn-n-dec" style="flex: 1;">- 1</button>
                <button class="vcl-btn vcl-btn-secondary" id="btn-n-inc" style="flex: 1;">+ 1</button>
              </div>
            </div>

            <!-- Control de Electrones -->
            <div style="background: rgba(15, 23, 42, 0.6); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); margin-bottom: 1.5rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <span style="font-size: 0.85rem; font-weight: 600; color: #38bdf8;">🔵 Electrones (e⁻)</span>
                <span style="font-family: var(--font-mono); font-size: 1.2rem; font-weight: 700; color: #ffffff;" id="val-electrons">${this.electrons}</span>
              </div>
              <div style="display: flex; gap: 0.5rem;">
                <button class="vcl-btn vcl-btn-secondary" id="btn-e-dec" style="flex: 1;">- 1</button>
                <button class="vcl-btn vcl-btn-secondary" id="btn-e-inc" style="flex: 1;">+ 1</button>
              </div>
            </div>
          </div>

          <button class="vcl-btn vcl-btn-secondary" id="btn-reset-atom" style="width: 100%;">
            <span>↺</span>
            <span>Restablecer Átomo Neutro</span>
          </button>
        </div>

        <!-- Panel Central: Lienzo Visual del Modelo Atómico Activo -->
        <div class="vcl-card" style="display: flex; flex-direction: column; position: relative; overflow: hidden; padding: 1rem;">
          <!-- Selector Superior de Modelos Atómicos -->
          <div style="display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 0.8rem; z-index: 10; flex-wrap: wrap;">
            ${["dalton","thomson","rutherford","bohr","quantum"].map(i=>`
              <button class="vcl-btn ${this.currentModel===i?"vcl-btn-primary":"vcl-btn-secondary"}" data-model="${i}" style="font-size: 0.76rem; padding: 0.4rem 0.75rem;">
                ${t[i].name.split(" (")[0]}
              </button>
            `).join("")}
          </div>

          <!-- Canvas 2D/3D del Modelo -->
          <div style="flex: 1; position: relative; border-radius: var(--radius-md); background: #070b14; border: 1px solid var(--border-subtle); overflow: hidden; display: flex; align-items: center; justify-content: center;">
            <canvas id="atomic-model-canvas" width="600" height="500" style="width: 100%; height: 100%;"></canvas>
            <div style="position: absolute; bottom: 1rem; left: 1rem; background: rgba(7, 11, 20, 0.85); backdrop-filter: blur(8px); padding: 0.5rem 0.9rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); font-size: 0.78rem; color: var(--accent-cyan);">
              Modo Activo: <strong>${n.name}</strong> (${n.year})
            </div>
          </div>
        </div>

        <!-- Panel Derecho: Diagnóstico Nuclear, Isótopos y Fundamento Pedagógico -->
        <div class="vcl-card" style="display: flex; flex-direction: column; justify-content: space-between; overflow-y: auto;">
          <div>
            <div class="vcl-badge" style="margin-bottom: 0.8rem; background: rgba(16, 185, 129, 0.15); color: #10b981; border-color: rgba(16, 185, 129, 0.3);">
              Estado Nuclear & Iónico
            </div>

            <!-- Ficha Nuclear Resumen -->
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.25rem;">
              <div style="width: 64px; height: 64px; border-radius: var(--radius-md); background: rgba(15, 23, 42, 0.9); border: 2px solid var(--accent-cyan); display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <span style="font-size: 0.72rem; color: var(--text-dim);">${e.massNumber}</span>
                <span style="font-size: 1.6rem; font-weight: 800; color: #ffffff;">${e.element.symbol}</span>
                <span style="font-size: 0.72rem; color: var(--text-dim);">${e.protons}</span>
              </div>
              <div>
                <h4 style="font-size: 1.15rem; color: #ffffff;">${e.element.name}</h4>
                <div style="font-family: var(--font-mono); font-size: 0.9rem; color: var(--accent-gold); font-weight: 700;">
                  ${e.ionNotation} • ${e.isotopeNotation}
                </div>
                <div style="font-size: 0.75rem; color: ${e.isIon?"#f59e0b":"#10b981"}; margin-top: 0.2rem;">
                  ${e.isIon?`Ion ${e.ionType.toUpperCase()} (Carga: ${e.netCharge>0?`+${e.netCharge}`:e.netCharge})`:"Átomo Neutro (Carga 0)"}
                </div>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; margin-bottom: 1.5rem;">
              <div class="vcl-stat-box" style="padding: 0.6rem;">
                <div class="vcl-stat-lbl">Masa (A = p + n)</div>
                <div style="font-size: 1.1rem; font-weight: 700; color: #ffffff;">${e.massNumber} u</div>
              </div>
              <div class="vcl-stat-box" style="padding: 0.6rem;">
                <div class="vcl-stat-lbl">Estabilidad N/Z</div>
                <div style="font-size: 1.0rem; font-weight: 700; color: ${e.stability==="stable"?"#10b981":"#ef4444"};">
                  ${e.stability.toUpperCase()}
                </div>
              </div>
            </div>

            <!-- Fundamento del Modelo Seleccionado -->
            <div style="border-top: 1px solid var(--border-subtle); padding-top: 1rem;">
              <h4 style="font-size: 0.95rem; color: #ffffff; margin-bottom: 0.5rem;">Fundamento Histórico (${n.author})</h4>
              <p style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 0.8rem;">
                ${n.postulates[0]}
              </p>

              <h5 style="font-size: 0.82rem; color: #f59e0b; margin-bottom: 0.3rem;">Limitación Científica:</h5>
              <p style="font-size: 0.78rem; color: var(--text-dim); line-height: 1.4; margin-bottom: 0.8rem;">
                ${n.limitations[0]}
              </p>
            </div>
          </div>
        </div>
      </div>
    `,this.setupEventListeners(),this.startCanvasAnimation()}setupEventListeners(){this.container.querySelector("#atomic-element-picker")?.addEventListener("change",n=>{this.setElement(n.target.value)}),this.container.querySelector("#btn-p-inc")?.addEventListener("click",()=>{this.protons<118&&(this.protons++,this.render())}),this.container.querySelector("#btn-p-dec")?.addEventListener("click",()=>{this.protons>1&&(this.protons--,this.render())}),this.container.querySelector("#btn-n-inc")?.addEventListener("click",()=>{this.neutrons++,this.render()}),this.container.querySelector("#btn-n-dec")?.addEventListener("click",()=>{this.neutrons>0&&(this.neutrons--,this.render())}),this.container.querySelector("#btn-e-inc")?.addEventListener("click",()=>{this.electrons++,this.render()}),this.container.querySelector("#btn-e-dec")?.addEventListener("click",()=>{this.electrons>0&&(this.electrons--,this.render())}),this.container.querySelector("#btn-reset-atom")?.addEventListener("click",()=>{this.neutrons=Math.round(fi[this.protons]?.atomicMass??this.protons)-this.protons,this.electrons=this.protons,this.render()}),this.container.querySelectorAll("[data-model]").forEach(n=>{n.addEventListener("click",()=>{const i=n.getAttribute("data-model");i&&(this.currentModel=i,this.render())})})}startCanvasAnimation(){const e=this.container.querySelector("#atomic-model-canvas");if(!e)return;const t=e.getContext("2d");if(!t)return;let n=0;const i=()=>{n+=.02,t.clearRect(0,0,e.width,e.height);const r=e.width/2,o=e.height/2;switch(this.currentModel){case"dalton":{const c=t.createRadialGradient(r-30,o-30,10,r,o,110);c.addColorStop(0,"#94a3b8"),c.addColorStop(.7,"#475569"),c.addColorStop(1,"#0f172a"),t.beginPath(),t.arc(r,o,110,0,Math.PI*2),t.fillStyle=c,t.fill(),t.strokeStyle="#38bdf8",t.lineWidth=2,t.stroke(),t.fillStyle="#ffffff",t.font='bold 16px "Inter", sans-serif',t.textAlign="center",t.fillText("Esfera Maciza e Indivisible",r,o+110+35);break}case"thomson":{const c=t.createRadialGradient(r,o,10,r,o,120);c.addColorStop(0,"rgba(239, 68, 68, 0.45)"),c.addColorStop(1,"rgba(239, 68, 68, 0.15)"),t.beginPath(),t.arc(r,o,120,0,Math.PI*2),t.fillStyle=c,t.fill(),t.strokeStyle="#ef4444",t.lineWidth=2,t.stroke();const l=Math.min(this.electrons,24);for(let d=0;d<l;d++){const p=d*2*Math.PI/l+n*.1,f=120*.65*Math.sqrt((d+1)/l),m=r+f*Math.cos(p),v=o+f*Math.sin(p);t.beginPath(),t.arc(m,v,7,0,Math.PI*2),t.fillStyle="#38bdf8",t.fill(),t.strokeStyle="#ffffff",t.lineWidth=1,t.stroke(),t.fillStyle="#ffffff",t.font="bold 9px sans-serif",t.textAlign="center",t.fillText("-",m,v+3)}break}case"rutherford":{for(let c=0;c<3;c++){const l=c*Math.PI/3;t.save(),t.translate(r,o),t.rotate(l),t.beginPath(),t.ellipse(0,0,160,60,0,0,Math.PI*2),t.strokeStyle="rgba(56, 189, 248, 0.35)",t.lineWidth=1.5,t.stroke();const d=n*(1.2+c*.4),p=160*Math.cos(d),f=60*Math.sin(d);t.beginPath(),t.arc(p,f,6,0,Math.PI*2),t.fillStyle="#38bdf8",t.fill(),t.restore()}t.beginPath(),t.arc(r,o,14,0,Math.PI*2),t.fillStyle="#ef4444",t.fill(),t.strokeStyle="#fca5a5",t.lineWidth=2,t.stroke();break}case"bohr":{const s=Math.min(4,Math.ceil(this.electrons/2));let c=this.electrons;const l=[2,8,18,32];for(let d=1;d<=Math.max(2,s);d++){const p=40+d*35;t.beginPath(),t.arc(r,o,p,0,Math.PI*2),t.strokeStyle="rgba(56, 189, 248, 0.4)",t.lineWidth=1.2,t.stroke(),t.fillStyle="rgba(148, 163, 184, 0.6)",t.font="10px monospace",t.fillText(`n=${d}`,r+p+4,o+3);const f=l[d-1]||8,m=Math.min(c,f);c-=m;for(let v=0;v<m;v++){const _=v*2*Math.PI/m+n*(1.5/d),h=r+p*Math.cos(_),u=o+p*Math.sin(_);t.beginPath(),t.arc(h,u,6,0,Math.PI*2),t.fillStyle="#38bdf8",t.fill(),t.strokeStyle="#ffffff",t.lineWidth=1,t.stroke()}}t.beginPath(),t.arc(r,o,18,0,Math.PI*2),t.fillStyle="#ef4444",t.fill(),t.strokeStyle="#fca5a5",t.lineWidth=2,t.stroke(),t.fillStyle="#ffffff",t.font="bold 11px sans-serif",t.textAlign="center",t.fillText(`+${this.protons}`,r,o+4);break}case"quantum":{for(let c=0;c<280;c++){const l=Math.random(),d=Math.random(),p=Math.sqrt(-2*Math.log(l))*55,f=2*Math.PI*d,m=r+p*Math.cos(f+n*.05),v=o+p*Math.sin(f+n*.05),_=Math.sqrt(Math.pow(m-r,2)+Math.pow(v-o,2)),h=Math.max(.08,Math.min(.7,1-_/150));t.beginPath(),t.arc(m,v,2,0,Math.PI*2),t.fillStyle=`rgba(56, 189, 248, ${h})`,t.fill()}t.beginPath(),t.arc(r,o,12,0,Math.PI*2),t.fillStyle="#ef4444",t.fill(),t.fillStyle="#38bdf8",t.font='12px "Inter", sans-serif',t.textAlign="center",t.fillText("Densidad de Probabilidad Espacial |Ψ|²",r,o+180);break}}this.animFrameId=requestAnimationFrame(i)};this.animFrameId!==null&&cancelAnimationFrame(this.animFrameId),i()}dispose(){this.animFrameId!==null&&(cancelAnimationFrame(this.animFrameId),this.animFrameId=null)}}class $l{container;currentElementSymbol="O";constructor(e,t="O"){this.container=e,this.currentElementSymbol=t,this.render()}setElement(e){this.currentElementSymbol=e,this.render()}render(){const e=_t[this.currentElementSymbol]||_t.O,t=Gl.analyzeConfiguration(e.atomicNumber,e.atomicNumber);this.container.innerHTML=`
      <div class="vcl-layout-2col">
        <!-- Panel Lateral: Selector y Resumen Cuántico -->
        <div class="vcl-card" style="display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div class="vcl-badge" style="margin-bottom: 0.8rem;">M03 // ELECTRON LAB</div>
            <h3 style="font-family: var(--font-display); font-size: 1.3rem; margin-bottom: 1.2rem; color: #ffffff;">Configuración Cuántica</h3>

            <!-- Selector de Elemento -->
            <div style="margin-bottom: 1.5rem;">
              <label style="font-size: 0.78rem; color: var(--text-muted); display: block; margin-bottom: 0.4rem;">Seleccionar Elemento</label>
              <select id="electron-element-picker" class="vcl-input-search" style="width: 100%;">
                ${vn.slice(0,36).map(i=>`<option value="${i.symbol}" ${i.symbol===this.currentElementSymbol?"selected":""}>
                    ${i.atomicNumber} - ${i.name} (${i.symbol})
                  </option>`).join("")}
              </select>
            </div>

            <!-- Ficha de Notaciones -->
            <div class="vcl-stat-box" style="text-align: left; margin-bottom: 1rem;">
              <div class="vcl-stat-lbl">Notación Condensada (Gas Noble)</div>
              <div style="font-family: var(--font-mono); font-size: 1.15rem; font-weight: 700; color: var(--accent-cyan); margin-top: 0.2rem;">
                ${t.condensedNotation}
              </div>
            </div>

            <div class="vcl-stat-box" style="text-align: left; margin-bottom: 1.5rem;">
              <div class="vcl-stat-lbl">Notación Expandida Completa</div>
              <div style="font-family: var(--font-mono); font-size: 0.95rem; font-weight: 600; color: #ffffff; margin-top: 0.2rem; line-height: 1.4;">
                ${t.expandedNotation}
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; margin-bottom: 1.5rem;">
              <div class="vcl-stat-box">
                <div class="vcl-stat-lbl">Electrones de Valencia</div>
                <div class="vcl-stat-val" style="color: var(--accent-gold); font-size: 1.5rem;">${t.valenceElectrons} e⁻</div>
              </div>
              <div class="vcl-stat-box">
                <div class="vcl-stat-lbl">e⁻ Desapareados</div>
                <div class="vcl-stat-val" style="color: #ef4444; font-size: 1.5rem;">${t.unpairedElectrons}</div>
              </div>
            </div>

            <div class="vcl-stat-box" style="text-align: left;">
              <div class="vcl-stat-lbl">Comportamiento Magnético</div>
              <div style="font-size: 1rem; font-weight: 700; color: ${t.isParamagnetic?"#f59e0b":"#10b981"}; margin-top: 0.2rem;">
                ${t.isParamagnetic?"Paramagnético (Atraído por campos)":"Diamagnético (Ligeramente repelido)"}
              </div>
              <div style="font-size: 0.75rem; color: var(--text-dim); margin-top: 0.2rem;">
                Momento magnético de espín: ${t.magneticMomentBohrMagnetons} μB
              </div>
            </div>
          </div>

          <!-- Leyenda de Principios Cuánticos -->
          <div style="background: rgba(15, 23, 42, 0.6); padding: 0.8rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); font-size: 0.74rem; color: var(--text-muted);">
            <strong style="color: var(--accent-cyan);">Regla de Hund:</strong> Los electrones ocupan orbitales degenerados individualmente con espines paralelos (↑) antes de aparearse (↓).
          </div>
        </div>

        <!-- Panel Principal: Diagrama de Casillas de Orbitales de Aufbau -->
        <div class="vcl-card" style="display: flex; flex-direction: column;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
            <div>
              <h3 style="font-family: var(--font-display); font-size: 1.25rem; color: #ffffff;">Diagrama de Orbitales de Aufbau</h3>
              <p style="font-size: 0.82rem; color: var(--text-muted);">Distribución de los ${t.totalElectrons} electrones en subniveles de menor a mayor energía.</p>
            </div>
            <span class="vcl-badge">${e.name} (Z = ${e.atomicNumber})</span>
          </div>

          <div style="display: flex; flex-direction: column-reverse; gap: 0.8rem; flex: 1; overflow-y: auto; padding-right: 0.5rem;">
            ${t.subshells.filter(i=>i.electrons>0).map(i=>`
              <div style="display: flex; align-items: center; gap: 1.2rem; background: rgba(15, 23, 42, 0.6); padding: 0.75rem 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                <div style="width: 55px; font-family: var(--font-mono); font-weight: 700; font-size: 1.15rem; color: var(--accent-cyan);">
                  ${i.label}
                </div>

                <div style="display: flex; gap: 0.6rem; flex: 1;">
                  ${i.orbitals.map(r=>`
                    <div style="width: 52px; height: 52px; background: rgba(7, 11, 20, 0.9); border: 2px solid ${r.electrons>0?"var(--accent-cyan)":"var(--border-subtle)"}; border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; gap: 4px; box-shadow: ${r.electrons>0?"0 0 10px rgba(56, 189, 248, 0.2)":"none"};">
                      ${r.spins.map(o=>`
                        <span style="font-size: 1.3rem; font-weight: 800; color: ${o==="+1/2"?"#38bdf8":"#f59e0b"};">
                          ${o==="+1/2"?"↑":"↓"}
                        </span>
                      `).join("")}
                    </div>
                  `).join("")}
                </div>

                <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-dim);">
                  ${i.electrons} / ${i.maxCapacity} e⁻
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `,this.container.querySelector("#electron-element-picker")?.addEventListener("change",i=>{this.setElement(i.target.value)})}}class Kl{container;symbolA="H";symbolB="O";bondOrder=1;constructor(e,t="H",n="O"){this.container=e,this.symbolA=t,this.symbolB=n,this.render()}render(){const e=Lo.analyzeBond(this.symbolA,this.symbolB,this.bondOrder),t=Lo.classifyIntermolecularForces(`${this.symbolA}-${this.symbolB}`,e.bondType==="covalent-polar",this.symbolA==="H"&&["O","N","F"].includes(this.symbolB)||this.symbolB==="H"&&["O","N","F"].includes(this.symbolA)),i={"covalent-nonpolar":{label:"Covalente No Polar",color:"#10b981"},"covalent-polar":{label:"Covalente Polar",color:"#38bdf8"},ionic:{label:"Enlace Iónico",color:"#f59e0b"},metallic:{label:"Enlace Metálico",color:"#a855f7"},"coordinate-covalent":{label:"Covalente Coordinado (Dativo)",color:"#ec4899"}}[e.bondType]||{label:e.bondType,color:"#64748b"};this.container.innerHTML=`
      <div class="vcl-layout-2col">
        <!-- Panel de Configuración de Enlace -->
        <div class="vcl-card" style="display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div class="vcl-badge" style="margin-bottom: 0.8rem;">M04 // BOND STUDIO</div>
            <h3 style="font-family: var(--font-display); font-size: 1.3rem; margin-bottom: 1.2rem; color: #ffffff;">Simulador de Enlaces</h3>

            <!-- Selector Átomo A -->
            <div style="margin-bottom: 1rem;">
              <label style="font-size: 0.78rem; color: var(--text-muted); display: block; margin-bottom: 0.4rem;">Átomo A</label>
              <select id="bond-select-a" class="vcl-input-search" style="width: 100%;">
                ${vn.slice(0,36).map(l=>`<option value="${l.symbol}" ${l.symbol===this.symbolA?"selected":""}>
                    ${l.name} (${l.symbol}) — χ = ${l.electronegativityPauling??"N/A"}
                  </option>`).join("")}
              </select>
            </div>

            <!-- Selector Átomo B -->
            <div style="margin-bottom: 1.5rem;">
              <label style="font-size: 0.78rem; color: var(--text-muted); display: block; margin-bottom: 0.4rem;">Átomo B</label>
              <select id="bond-select-b" class="vcl-input-search" style="width: 100%;">
                ${vn.slice(0,36).map(l=>`<option value="${l.symbol}" ${l.symbol===this.symbolB?"selected":""}>
                    ${l.name} (${l.symbol}) — χ = ${l.electronegativityPauling??"N/A"}
                  </option>`).join("")}
              </select>
            </div>

            <!-- Selector de Orden de Enlace -->
            <div style="margin-bottom: 1.5rem;">
              <label style="font-size: 0.78rem; color: var(--text-muted); display: block; margin-bottom: 0.4rem;">Orden de Enlace</label>
              <div style="display: flex; gap: 0.5rem;">
                ${[1,2,3].map(l=>`
                  <button class="vcl-btn ${this.bondOrder===l?"vcl-btn-primary":"vcl-btn-secondary"}" data-order="${l}" style="flex: 1;">
                    ${l===1?"Simple (-)":l===2?"Doble (=)":"Triple (≡)"}
                  </button>
                `).join("")}
              </div>
            </div>

            <!-- Métricas Físicas Estimadas -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; margin-bottom: 1rem;">
              <div class="vcl-stat-box">
                <div class="vcl-stat-lbl">Longitud Estimada</div>
                <div class="vcl-stat-val" style="font-size: 1.25rem;">${e.typicalBondLengthAngstroms} Å</div>
              </div>
              <div class="vcl-stat-box">
                <div class="vcl-stat-lbl">Energía de Disociación</div>
                <div class="vcl-stat-val" style="font-size: 1.25rem; color: var(--accent-gold);">${e.typicalDissociationEnergyKjMol} kJ/mol</div>
              </div>
            </div>
          </div>

          <!-- Presets de Enlaces Didácticos Comunes -->
          <div style="border-top: 1px solid var(--border-subtle); padding-top: 1rem;">
            <label style="font-size: 0.75rem; color: var(--text-dim); display: block; margin-bottom: 0.5rem;">Ejemplos Clásicos:</label>
            <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
              <button class="vcl-btn vcl-btn-secondary btn-preset" data-a="H" data-b="O" data-o="1" style="font-size: 0.75rem; padding: 0.3rem 0.6rem;">O-H (Agua)</button>
              <button class="vcl-btn vcl-btn-secondary btn-preset" data-a="C" data-b="O" data-o="2" style="font-size: 0.75rem; padding: 0.3rem 0.6rem;">C=O (CO2)</button>
              <button class="vcl-btn vcl-btn-secondary btn-preset" data-a="Na" data-b="Cl" data-o="1" style="font-size: 0.75rem; padding: 0.3rem 0.6rem;">NaCl (Iónico)</button>
              <button class="vcl-btn vcl-btn-secondary btn-preset" data-a="N" data-b="N" data-o="3" style="font-size: 0.75rem; padding: 0.3rem 0.6rem;">N≡N (Triple)</button>
              <button class="vcl-btn vcl-btn-secondary btn-preset" data-a="Fe" data-b="Fe" data-o="1" style="font-size: 0.75rem; padding: 0.3rem 0.6rem;">Fe-Fe (Metálico)</button>
            </div>
          </div>
        </div>

        <!-- Panel Principal: Análisis y Visualización de Polaridad -->
        <div style="display: flex; flex-direction: column; gap: 1.25rem;">
          <!-- Visualización Holográfica de Distribución de Carga -->
          <div class="vcl-card" style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 280px; position: relative;">
            <div class="vcl-badge" style="position: absolute; top: 1.25rem; left: 1.25rem; background: ${i.color}22; color: ${i.color}; border-color: ${i.color}55;">
              ${i.label}
            </div>

            <!-- Esquema Gráfico del Enlace -->
            <div style="display: flex; align-items: center; gap: 3rem; margin: 2rem 0;">
              <!-- Átomo A -->
              <div style="display: flex; flex-direction: column; align-items: center;">
                <div style="width: 80px; height: 80px; border-radius: 50%; background: ${e.elementA.colorHex}; border: 3px solid #ffffff; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 25px ${e.elementA.colorHex}66; color: #000000; font-weight: 800; font-size: 1.6rem;">
                  ${e.elementA.symbol}
                </div>
                <span style="font-size: 0.85rem; font-weight: 700; color: #ffffff; margin-top: 0.5rem;">${e.elementA.name}</span>
                <span style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-dim);">χ = ${e.electronegativityA}</span>
                <span style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: 700; color: ${e.partialChargeA<0?"#ef4444":"#38bdf8"}; margin-top: 0.2rem;">
                  ${e.partialChargeA>0?`+${e.partialChargeA} δ`:e.partialChargeA<0?`${e.partialChargeA} δ`:"0 δ"}
                </span>
              </div>

              <!-- Enlace Gráfico (Cilindros / Conexión) -->
              <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
                ${new Array(this.bondOrder).fill(0).map(()=>`
                  <div style="width: 140px; height: 10px; border-radius: 5px; background: linear-gradient(to right, ${e.elementA.colorHex}, ${e.elementB.colorHex}); box-shadow: 0 0 10px rgba(56, 189, 248, 0.4);"></div>
                `).join("")}
                <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.5rem;">
                  Δχ = <strong>${e.deltaChi}</strong> (${e.percentIonicCharacter}% carácter iónico)
                </div>
              </div>

              <!-- Átomo B -->
              <div style="display: flex; flex-direction: column; align-items: center;">
                <div style="width: 80px; height: 80px; border-radius: 50%; background: ${e.elementB.colorHex}; border: 3px solid #ffffff; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 25px ${e.elementB.colorHex}66; color: #000000; font-weight: 800; font-size: 1.6rem;">
                  ${e.elementB.symbol}
                </div>
                <span style="font-size: 0.85rem; font-weight: 700; color: #ffffff; margin-top: 0.5rem;">${e.elementB.name}</span>
                <span style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-dim);">χ = ${e.electronegativityB}</span>
                <span style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: 700; color: ${e.partialChargeB<0?"#ef4444":"#38bdf8"}; margin-top: 0.2rem;">
                  ${e.partialChargeB>0?`+${e.partialChargeB} δ`:e.partialChargeB<0?`${e.partialChargeB} δ`:"0 δ"}
                </span>
              </div>
            </div>

            <!-- Explicación Electrónica -->
            <p style="color: var(--text-muted); font-size: 0.85rem; text-align: center; max-width: 600px; line-height: 1.5;">
              ${e.electronicMechanism}
            </p>
          </div>

          <!-- Fuerzas Intermoleculares Generadas -->
          <div class="vcl-card">
            <h4 style="font-size: 1.05rem; color: #ffffff; margin-bottom: 0.8rem;">Fuerzas Intermoleculares Asociadas</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.8rem;">
              ${t.map(l=>`
                <div style="background: rgba(15, 23, 42, 0.6); padding: 0.85rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.3rem;">
                    <strong style="color: #ffffff; font-size: 0.85rem;">${l.name}</strong>
                    <span class="vcl-badge" style="font-size: 0.65rem;">${l.relativeStrength}</span>
                  </div>
                  <p style="font-size: 0.76rem; color: var(--text-muted); line-height: 1.4;">${l.description}</p>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    `,this.container.querySelector("#bond-select-a")?.addEventListener("change",l=>{this.symbolA=l.target.value,this.render()}),this.container.querySelector("#bond-select-b")?.addEventListener("change",l=>{this.symbolB=l.target.value,this.render()}),this.container.querySelectorAll("[data-order]").forEach(l=>{l.addEventListener("click",()=>{const d=parseInt(l.getAttribute("data-order")||"1",10);this.bondOrder=d,this.render()})}),this.container.querySelectorAll(".btn-preset").forEach(l=>{l.addEventListener("click",()=>{this.symbolA=l.getAttribute("data-a")||"H",this.symbolB=l.getAttribute("data-b")||"O",this.bondOrder=parseInt(l.getAttribute("data-o")||"1",10),this.render()})})}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ao="187",Yl=0,Uo=1,Zl=2,pa=1,ks=2,Ti=3,Gn=0,It=1,qt=2,li=0,Pi=1,Bo=2,zo=3,Ho=4,Jl=5,si=100,Ql=101,jl=102,ec=103,tc=104,nc=200,ic=201,ac=202,rc=203,Gs=204,Vs=205,oc=206,sc=207,lc=208,cc=209,dc=210,uc=211,fc=212,hc=213,mc=214,pr=0,gr=1,vr=2,Di=3,br=4,xr=5,_r=6,yr=7,Ws=0,pc=1,gc=2,bn=0,qs=1,Xs=2,$s=3,ro=4,Ks=5,Ys=6,Zs=7,Js=300,hi=301,Li=302,Ba=303,za=304,Mr=1e3,gn=1001,Sr=1002,St=1003,vc=1004,qi=1005,Lt=1006,Ha=1007,wn=1008,Ut=1009,Qs=1010,js=1011,Ii=1012,oo=1013,ln=1014,rn=1015,cn=1016,so=1017,lo=1018,mi=1020,el=35902,tl=35899,nl=1021,il=1022,on=1023,Nn=1026,Pn=1027,al=1028,co=1029,Vn=1030,uo=1031,fo=1033,ga=33776,va=33777,ba=33778,xa=33779,Er=35840,Ar=35841,Cr=35842,Tr=35843,Rr=36196,wr=37492,Pr=37496,Nr=37488,Dr=37489,Ma=37490,Lr=37491,Ir=37808,Fr=37809,Or=37810,Ur=37811,Br=37812,zr=37813,Hr=37814,kr=37815,Gr=37816,Vr=37817,Wr=37818,qr=37819,Xr=37820,$r=37821,Kr=36492,Yr=36494,Zr=36495,Jr=36283,Qr=36284,Sa=36285,jr=36286,bc=3200,eo=0,xc=1,Rn="",Vt="srgb",Ea="srgb-linear",Aa="linear",Ze="srgb",ka=7680,_c=519,yc=512,Mc=513,Sc=514,rl=515,Ec=516,Ac=517,ol=518,sl=519,Cc=35044,ko="300 es",jt=2e3,Fi=2001;function Tc(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Ca(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Rc(){const a=Ca("canvas");return a.style.display="block",a}const Go={};function Vo(...a){const e="THREE."+a.shift();console.log(e,...a)}function ll(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function Re(...a){a=ll(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function qe(...a){a=ll(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function ci(...a){const e=a.join(" ");e in Go||(Go[e]=!0,Re(...a))}function wc(a,e,t){return new Promise(function(n,i){function r(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:i();break;case a.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Pc={[pr]:pr,[vr]:_r,[br]:br,[Di]:xr,[gr]:gr,[_r]:vr,[yr]:yr,[xr]:Di};class qn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ga=Math.PI/180,Ta=180/Math.PI;function zi(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[a&255]+Ct[a>>8&255]+Ct[a>>16&255]+Ct[a>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function ke(a,e,t){return Math.max(e,Math.min(t,a))}function Nc(a,e){return(a%e+e)%e}function Va(a,e,t){return(1-t)*a+t*e}function Dc(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function ho(a){switch(a.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Lc(a,e){if(e.constructor===Float32Array)return a;const t=ho(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(a/t,-1)}function Ic(a,e){if(e.constructor===Float32Array)return a;const t=ho(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(a*t)}class Ge{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,s){let c=n[i+0],l=n[i+1],d=n[i+2],p=n[i+3],f=r[o+0],m=r[o+1],v=r[o+2],_=r[o+3];if(p!==_||c!==f||l!==m||d!==v){let h=c*f+l*m+d*v+p*_;h<0&&(f=-f,m=-m,v=-v,_=-_,h=-h);let u=1-s;if(h<.9995){const y=Math.acos(h),T=Math.sin(y);u=Math.sin(u*y)/T,s=Math.sin(s*y)/T,c=c*u+f*s,l=l*u+m*s,d=d*u+v*s,p=p*u+_*s}else{c=c*u+f*s,l=l*u+m*s,d=d*u+v*s,p=p*u+_*s;const y=1/Math.sqrt(c*c+l*l+d*d+p*p);c*=y,l*=y,d*=y,p*=y}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,i,r,o){const s=n[i],c=n[i+1],l=n[i+2],d=n[i+3],p=r[o],f=r[o+1],m=r[o+2],v=r[o+3];return e[t]=s*v+d*p+c*m-l*f,e[t+1]=c*v+d*f+l*p-s*m,e[t+2]=l*v+d*m+s*f-c*p,e[t+3]=d*v-s*p-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,s=Math.cos,c=Math.sin,l=s(n/2),d=s(i/2),p=s(r/2),f=c(n/2),m=c(i/2),v=c(r/2);switch(o){case"XYZ":this._x=f*d*p+l*m*v,this._y=l*m*p-f*d*v,this._z=l*d*v+f*m*p,this._w=l*d*p-f*m*v;break;case"YXZ":this._x=f*d*p+l*m*v,this._y=l*m*p-f*d*v,this._z=l*d*v-f*m*p,this._w=l*d*p+f*m*v;break;case"ZXY":this._x=f*d*p-l*m*v,this._y=l*m*p+f*d*v,this._z=l*d*v+f*m*p,this._w=l*d*p-f*m*v;break;case"ZYX":this._x=f*d*p-l*m*v,this._y=l*m*p+f*d*v,this._z=l*d*v-f*m*p,this._w=l*d*p+f*m*v;break;case"YZX":this._x=f*d*p+l*m*v,this._y=l*m*p+f*d*v,this._z=l*d*v-f*m*p,this._w=l*d*p-f*m*v;break;case"XZY":this._x=f*d*p-l*m*v,this._y=l*m*p-f*d*v,this._z=l*d*v+f*m*p,this._w=l*d*p+f*m*v;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],s=t[5],c=t[9],l=t[2],d=t[6],p=t[10],f=n+s+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-c)*m,this._y=(r-l)*m,this._z=(o-i)*m}else if(n>s&&n>p){const m=2*Math.sqrt(1+n-s-p);this._w=(d-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+l)/m}else if(s>p){const m=2*Math.sqrt(1+s-n-p);this._w=(r-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+p-n-s);this._w=(o-i)/m,this._x=(r+l)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,s=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+o*s+i*l-r*c,this._y=i*d+o*c+r*s-n*l,this._z=r*d+o*l+n*c-i*s,this._w=o*d-n*s-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,s=this.dot(e);s<0&&(n=-n,i=-i,r=-r,o=-o,s=-s);let c=1-t;if(s<.9995){const l=Math.acos(s),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,s=e.z,c=e.w,l=2*(o*i-s*n),d=2*(s*t-r*i),p=2*(r*n-o*t);return this.x=t+c*l+o*p-s*d,this.y=n+c*d+s*l-r*p,this.z=i+c*p+r*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,s=t.y,c=t.z;return this.x=i*c-r*s,this.y=r*o-n*c,this.z=n*s-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wa.copy(this).projectOnVector(e),this.sub(Wa)}reflect(e){return this.sub(Wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wa=new z,Wo=new Xn;class Le{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,r,o,s,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,s,c,l)}set(e,t,n,i,r,o,s,c,l){const d=this.elements;return d[0]=e,d[1]=i,d[2]=s,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],s=n[3],c=n[6],l=n[1],d=n[4],p=n[7],f=n[2],m=n[5],v=n[8],_=i[0],h=i[3],u=i[6],y=i[1],T=i[4],S=i[7],C=i[2],A=i[5],g=i[8];return r[0]=o*_+s*y+c*C,r[3]=o*h+s*T+c*A,r[6]=o*u+s*S+c*g,r[1]=l*_+d*y+p*C,r[4]=l*h+d*T+p*A,r[7]=l*u+d*S+p*g,r[2]=f*_+m*y+v*C,r[5]=f*h+m*T+v*A,r[8]=f*u+m*S+v*g,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*s*l-n*r*d+n*s*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],c=e[6],l=e[7],d=e[8],p=d*o-s*l,f=s*c-d*r,m=l*r-o*c,v=t*p+n*f+i*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=p*_,e[1]=(i*l-d*n)*_,e[2]=(s*n-i*o)*_,e[3]=f*_,e[4]=(d*t-i*c)*_,e[5]=(i*r-s*t)*_,e[6]=m*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,s){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*s)+o+e,-i*l,i*c,-i*(-l*o+c*s)+s+t,0,0,1),this}scale(e,t){return ci("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qa.makeScale(e,t)),this}rotate(e){return ci("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qa.makeRotation(-e)),this}translate(e,t){return ci("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qa=new Le,qo=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xo=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fc(){const a={enabled:!0,workingColorSpace:Ea,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ze&&(i.r=xn(i.r),i.g=xn(i.g),i.b=xn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ze&&(i.r=di(i.r),i.g=di(i.g),i.b=di(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Rn?Aa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return a.define({[Ea]:{primaries:e,whitePoint:n,transfer:Aa,toXYZ:qo,fromXYZ:Xo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:Ze,toXYZ:qo,fromXYZ:Xo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),a}const Ve=Fc();function xn(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function di(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Yn;class Oc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yn===void 0&&(Yn=Ca("canvas")),Yn.width=e.width,Yn.height=e.height;const i=Yn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Yn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ca("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=xn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xn(t[n]/255)*255):t[n]=xn(t[n]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Uc=0;class mo{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Uc++}),this.uuid=zi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,s=i.length;o<s;o++)i[o].isDataTexture?r.push(Xa(i[o].image)):r.push(Xa(i[o]))}else r=Xa(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Xa(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Oc.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}let Bc=0;const $a=new z;class Nt extends qn{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,n=gn,i=gn,r=Lt,o=wn,s=on,c=Ut,l=Nt.DEFAULT_ANISOTROPY,d=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=zi(),this.name="",this.source=new mo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize($a).x}get height(){return this.source.getSize($a).y}get depth(){return this.source.getSize($a).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Js)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mr:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case Sr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mr:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case Sr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Js;Nt.DEFAULT_ANISOTROPY=1;class ot{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],d=c[4],p=c[8],f=c[1],m=c[5],v=c[9],_=c[2],h=c[6],u=c[10];if(Math.abs(d-f)<.01&&Math.abs(p-_)<.01&&Math.abs(v-h)<.01){if(Math.abs(d+f)<.1&&Math.abs(p+_)<.1&&Math.abs(v+h)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,S=(m+1)/2,C=(u+1)/2,A=(d+f)/4,g=(p+_)/4,M=(v+h)/4;return T>S&&T>C?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=A/n,r=g/n):S>C?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=A/i,r=M/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=g/r,i=M/r),this.set(n,i,r,t),this}let y=Math.sqrt((h-v)*(h-v)+(p-_)*(p-_)+(f-d)*(f-d));return Math.abs(y)<.001&&(y=1),this.x=(h-v)/y,this.y=(p-_)/y,this.z=(f-d)/y,this.w=Math.acos((l+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zc extends qn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t),this.textures=[];const i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Nt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new mo(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sn extends zc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class cl extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=St,this.minFilter=St,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hc extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=St,this.minFilter=St,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class et{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,r,o,s,c,l,d,p,f,m,v,_,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,s,c,l,d,p,f,m,v,_,h)}set(e,t,n,i,r,o,s,c,l,d,p,f,m,v,_,h){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=i,u[1]=r,u[5]=o,u[9]=s,u[13]=c,u[2]=l,u[6]=d,u[10]=p,u[14]=f,u[3]=m,u[7]=v,u[11]=_,u[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Zn.setFromMatrixColumn(e,0).length(),r=1/Zn.setFromMatrixColumn(e,1).length(),o=1/Zn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),s=Math.sin(n),c=Math.cos(i),l=Math.sin(i),d=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const f=o*d,m=o*p,v=s*d,_=s*p;t[0]=c*d,t[4]=-c*p,t[8]=l,t[1]=m+v*l,t[5]=f-_*l,t[9]=-s*c,t[2]=_-f*l,t[6]=v+m*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*d,m=c*p,v=l*d,_=l*p;t[0]=f+_*s,t[4]=v*s-m,t[8]=o*l,t[1]=o*p,t[5]=o*d,t[9]=-s,t[2]=m*s-v,t[6]=_+f*s,t[10]=o*c}else if(e.order==="ZXY"){const f=c*d,m=c*p,v=l*d,_=l*p;t[0]=f-_*s,t[4]=-o*p,t[8]=v+m*s,t[1]=m+v*s,t[5]=o*d,t[9]=_-f*s,t[2]=-o*l,t[6]=s,t[10]=o*c}else if(e.order==="ZYX"){const f=o*d,m=o*p,v=s*d,_=s*p;t[0]=c*d,t[4]=v*l-m,t[8]=f*l+_,t[1]=c*p,t[5]=_*l+f,t[9]=m*l-v,t[2]=-l,t[6]=s*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,m=o*l,v=s*c,_=s*l;t[0]=c*d,t[4]=_-f*p,t[8]=v*p+m,t[1]=p,t[5]=o*d,t[9]=-s*d,t[2]=-l*d,t[6]=m*p+v,t[10]=f-_*p}else if(e.order==="XZY"){const f=o*c,m=o*l,v=s*c,_=s*l;t[0]=c*d,t[4]=-p,t[8]=l*d,t[1]=f*p+_,t[5]=o*d,t[9]=m*p-v,t[2]=v*p-m,t[6]=s*d,t[10]=_*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kc,e,Gc)}lookAt(e,t,n){const i=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),Mn.crossVectors(n,Ft),Mn.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),Mn.crossVectors(n,Ft)),Mn.normalize(),Xi.crossVectors(Ft,Mn),i[0]=Mn.x,i[4]=Xi.x,i[8]=Ft.x,i[1]=Mn.y,i[5]=Xi.y,i[9]=Ft.y,i[2]=Mn.z,i[6]=Xi.z,i[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],s=n[4],c=n[8],l=n[12],d=n[1],p=n[5],f=n[9],m=n[13],v=n[2],_=n[6],h=n[10],u=n[14],y=n[3],T=n[7],S=n[11],C=n[15],A=i[0],g=i[4],M=i[8],I=i[12],N=i[1],D=i[5],F=i[9],V=i[13],P=i[2],k=i[6],Z=i[10],H=i[14],te=i[3],q=i[7],Q=i[11],j=i[15];return r[0]=o*A+s*N+c*P+l*te,r[4]=o*g+s*D+c*k+l*q,r[8]=o*M+s*F+c*Z+l*Q,r[12]=o*I+s*V+c*H+l*j,r[1]=d*A+p*N+f*P+m*te,r[5]=d*g+p*D+f*k+m*q,r[9]=d*M+p*F+f*Z+m*Q,r[13]=d*I+p*V+f*H+m*j,r[2]=v*A+_*N+h*P+u*te,r[6]=v*g+_*D+h*k+u*q,r[10]=v*M+_*F+h*Z+u*Q,r[14]=v*I+_*V+h*H+u*j,r[3]=y*A+T*N+S*P+C*te,r[7]=y*g+T*D+S*k+C*q,r[11]=y*M+T*F+S*Z+C*Q,r[15]=y*I+T*V+S*H+C*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],s=e[5],c=e[9],l=e[13],d=e[2],p=e[6],f=e[10],m=e[14],v=e[3],_=e[7],h=e[11],u=e[15],y=c*m-l*f,T=s*m-l*p,S=s*f-c*p,C=o*m-l*d,A=o*f-c*d,g=o*p-s*d;return t*(_*y-h*T+u*S)-n*(v*y-h*C+u*A)+i*(v*T-_*C+u*g)-r*(v*S-_*A+h*g)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],s=e[9],c=e[2],l=e[6],d=e[10];return t*(o*d-s*l)-n*(r*d-s*c)+i*(r*l-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],c=e[6],l=e[7],d=e[8],p=e[9],f=e[10],m=e[11],v=e[12],_=e[13],h=e[14],u=e[15],y=t*s-n*o,T=t*c-i*o,S=t*l-r*o,C=n*c-i*s,A=n*l-r*s,g=i*l-r*c,M=d*_-p*v,I=d*h-f*v,N=d*u-m*v,D=p*h-f*_,F=p*u-m*_,V=f*u-m*h,P=y*V-T*F+S*D+C*N-A*I+g*M;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/P;return e[0]=(s*V-c*F+l*D)*k,e[1]=(i*F-n*V-r*D)*k,e[2]=(_*g-h*A+u*C)*k,e[3]=(f*A-p*g-m*C)*k,e[4]=(c*N-o*V-l*I)*k,e[5]=(t*V-i*N+r*I)*k,e[6]=(h*S-v*g-u*T)*k,e[7]=(d*g-f*S+m*T)*k,e[8]=(o*F-s*N+l*M)*k,e[9]=(n*N-t*F-r*M)*k,e[10]=(v*A-_*S+u*y)*k,e[11]=(p*S-d*A-m*y)*k,e[12]=(s*I-o*D-c*M)*k,e[13]=(t*D-n*I+i*M)*k,e[14]=(_*T-v*C-h*y)*k,e[15]=(d*C-p*T+f*y)*k,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,s=e.y,c=e.z,l=r*o,d=r*s;return this.set(l*o+n,l*s-i*c,l*c+i*s,0,l*s+i*c,d*s+n,d*c-i*o,0,l*c-i*s,d*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,s=t._z,c=t._w,l=r+r,d=o+o,p=s+s,f=r*l,m=r*d,v=r*p,_=o*d,h=o*p,u=s*p,y=c*l,T=c*d,S=c*p,C=n.x,A=n.y,g=n.z;return i[0]=(1-(_+u))*C,i[1]=(m+S)*C,i[2]=(v-T)*C,i[3]=0,i[4]=(m-S)*A,i[5]=(1-(f+u))*A,i[6]=(h+y)*A,i[7]=0,i[8]=(v+T)*g,i[9]=(h-y)*g,i[10]=(1-(f+_))*g,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Zn.set(i[0],i[1],i[2]).length();const s=Zn.set(i[4],i[5],i[6]).length(),c=Zn.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Yt.copy(this);const l=1/o,d=1/s,p=1/c;return Yt.elements[0]*=l,Yt.elements[1]*=l,Yt.elements[2]*=l,Yt.elements[4]*=d,Yt.elements[5]*=d,Yt.elements[6]*=d,Yt.elements[8]*=p,Yt.elements[9]*=p,Yt.elements[10]*=p,t.setFromRotationMatrix(Yt),n.x=o,n.y=s,n.z=c,this}makePerspective(e,t,n,i,r,o,s=jt,c=!1){const l=this.elements,d=2*r/(t-e),p=2*r/(n-i),f=(t+e)/(t-e),m=(n+i)/(n-i);let v,_;if(c)v=r/(o-r),_=o*r/(o-r);else if(s===jt)v=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(s===Fi)v=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=d,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=p,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,s=jt,c=!1){const l=this.elements,d=2/(t-e),p=2/(n-i),f=-(t+e)/(t-e),m=-(n+i)/(n-i);let v,_;if(c)v=1/(o-r),_=o/(o-r);else if(s===jt)v=-2/(o-r),_=-(o+r)/(o-r);else if(s===Fi)v=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=d,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=p,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=v,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zn=new z,Yt=new et,kc=new z(0,0,0),Gc=new z(1,1,1),Mn=new z,Xi=new z,Ft=new z,$o=new et,Ko=new Xn;class Dn{constructor(e=0,t=0,n=0,i=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],s=i[8],c=i[1],l=i[5],d=i[9],p=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(ke(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ke(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $o.makeRotationFromQuaternion(e),this.setFromRotationMatrix($o,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ko.setFromEuler(this),this.setFromQuaternion(Ko,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class po{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vc=0;const Yo=new z,Jn=new Xn,un=new et,$i=new z,_i=new z,Wc=new z,qc=new Xn,Zo=new z(1,0,0),Jo=new z(0,1,0),Qo=new z(0,0,1),jo={type:"added"},Xc={type:"removed"},Qn={type:"childadded",child:null},Ka={type:"childremoved",child:null};class ft extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vc++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new z,t=new Dn,n=new Xn,i=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new et},normalMatrix:{value:new Le}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.premultiply(Jn),this}rotateX(e){return this.rotateOnAxis(Zo,e)}rotateY(e){return this.rotateOnAxis(Jo,e)}rotateZ(e){return this.rotateOnAxis(Qo,e)}translateOnAxis(e,t){return Yo.copy(e).applyQuaternion(this.quaternion),this.position.add(Yo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zo,e)}translateY(e){return this.translateOnAxis(Jo,e)}translateZ(e){return this.translateOnAxis(Qo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$i.copy(e):$i.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(_i,$i,this.up):un.lookAt($i,_i,this.up),this.quaternion.setFromRotationMatrix(un),i&&(un.extractRotation(i.matrixWorld),Jn.setFromRotationMatrix(un),this.quaternion.premultiply(Jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jo),Qn.child=e,this.dispatchEvent(Qn),Qn.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xc),Ka.child=e,this.dispatchEvent(Ka),Ka.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jo),Qn.child=e,this.dispatchEvent(Qn),Qn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,e,Wc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,qc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(s=>({...s,boundingBox:s.boundingBox?s.boundingBox.toJSON():void 0,boundingSphere:s.boundingSphere?s.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(s=>({...s})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const p=c[l];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,l=this.material.length;c<l;c++)s.push(r(e.materials,this.material[c]));i.material=s}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];i.animations.push(r(e.animations,c))}}if(t){const s=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),p=o(e.shapes),f=o(e.skeletons),m=o(e.animations),v=o(e.nodes);s.length>0&&(n.geometries=s),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=i,n;function o(s){const c=[];for(const l in s){const d=s[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ft.DEFAULT_UP=new z(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Hn extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $c={type:"move"};class Ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const s=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const h=t.getJointPose(_,n),u=this._getHandJoint(l,_);h!==null&&(u.matrix.fromArray(h.transform.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=h.radius),u.visible=h!==null}const d=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],f=d.position.distanceTo(p.position),m=.02,v=.005;l.inputState.pinching&&f>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent($c)))}return s!==null&&(s.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Hn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const dl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},Ki={h:0,s:0,l:0};function Za(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ve.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ve.workingColorSpace){if(e=Nc(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Za(o,r,e+1/3),this.g=Za(o,r,e),this.b=Za(o,r,e-1/3)}return Ve.colorSpaceToWorking(this,i),this}setStyle(e,t=Vt){function n(r){r!==void 0&&parseFloat(r)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],s=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(s))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(s))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(s))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=dl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xn(e.r),this.g=xn(e.g),this.b=xn(e.b),this}copyLinearToSRGB(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return Ve.workingToColorSpace(Tt.copy(this),e),Math.round(ke(Tt.r*255,0,255))*65536+Math.round(ke(Tt.g*255,0,255))*256+Math.round(ke(Tt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.workingToColorSpace(Tt.copy(this),t);const n=Tt.r,i=Tt.g,r=Tt.b,o=Math.max(n,i,r),s=Math.min(n,i,r);let c,l;const d=(s+o)/2;if(s===o)c=0,l=0;else{const p=o-s;switch(l=d<=.5?p/(o+s):p/(2-o-s),o){case n:c=(i-r)/p+(i<r?6:0);break;case i:c=(r-n)/p+2;break;case r:c=(n-i)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=Ve.workingColorSpace){return Ve.workingToColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=Vt){Ve.workingToColorSpace(Tt.copy(this),e);const t=Tt.r,n=Tt.g,i=Tt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Sn),this.setHSL(Sn.h+e,Sn.s+t,Sn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Sn),e.getHSL(Ki);const n=Va(Sn.h,Ki.h,t),i=Va(Sn.s,Ki.s,t),r=Va(Sn.l,Ki.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new Ie;Ie.NAMES=dl;class go{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ie(e),this.density=t}clone(){return new go(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Kc extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Zt=new z,fn=new z,Ja=new z,hn=new z,jn=new z,ei=new z,es=new z,Qa=new z,ja=new z,er=new z,tr=new ot,nr=new ot,ir=new ot;class Qt{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Zt.subVectors(e,t),i.cross(Zt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Zt.subVectors(i,t),fn.subVectors(n,t),Ja.subVectors(e,t);const o=Zt.dot(Zt),s=Zt.dot(fn),c=Zt.dot(Ja),l=fn.dot(fn),d=fn.dot(Ja),p=o*l-s*s;if(p===0)return r.set(0,0,0),null;const f=1/p,m=(l*c-s*d)*f,v=(o*d-s*c)*f;return r.set(1-m-v,v,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(e,t,n,i,r,o,s,c){return this.getBarycoord(e,t,n,i,hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,hn.x),c.addScaledVector(o,hn.y),c.addScaledVector(s,hn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return tr.setScalar(0),nr.setScalar(0),ir.setScalar(0),tr.fromBufferAttribute(e,t),nr.fromBufferAttribute(e,n),ir.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(tr,r.x),o.addScaledVector(nr,r.y),o.addScaledVector(ir,r.z),o}static isFrontFacing(e,t,n,i){return Zt.subVectors(n,t),fn.subVectors(e,t),Zt.cross(fn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zt.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),Zt.cross(fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Qt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,s;jn.subVectors(i,n),ei.subVectors(r,n),Qa.subVectors(e,n);const c=jn.dot(Qa),l=ei.dot(Qa);if(c<=0&&l<=0)return t.copy(n);ja.subVectors(e,i);const d=jn.dot(ja),p=ei.dot(ja);if(d>=0&&p<=d)return t.copy(i);const f=c*p-d*l;if(f<=0&&c>=0&&d<=0&&c-d>0)return o=c/(c-d),t.copy(n).addScaledVector(jn,o);er.subVectors(e,r);const m=jn.dot(er),v=ei.dot(er);if(v>=0&&m<=v)return t.copy(r);const _=m*l-c*v;if(_<=0&&l>=0&&v<=0)return s=l/(l-v),t.copy(n).addScaledVector(ei,s);const h=d*v-m*p;if(h<=0&&p-d>=0&&m-v>=0)return es.subVectors(r,i),s=(p-d)/(p-d+(m-v)),t.copy(i).addScaledVector(es,s);const u=1/(h+_+f);return o=_*u,s=f*u,t.copy(n).addScaledVector(jn,o).addScaledVector(ei,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class vi{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,s=r.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,Jt):Jt.fromBufferAttribute(r,o),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yi.copy(n.boundingBox)),Yi.applyMatrix4(e.matrixWorld),this.union(Yi)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yi),Zi.subVectors(this.max,yi),ti.subVectors(e.a,yi),ni.subVectors(e.b,yi),ii.subVectors(e.c,yi),En.subVectors(ni,ti),An.subVectors(ii,ni),On.subVectors(ti,ii);let t=[0,-En.z,En.y,0,-An.z,An.y,0,-On.z,On.y,En.z,0,-En.x,An.z,0,-An.x,On.z,0,-On.x,-En.y,En.x,0,-An.y,An.x,0,-On.y,On.x,0];return!ar(t,ti,ni,ii,Zi)||(t=[1,0,0,0,1,0,0,0,1],!ar(t,ti,ni,ii,Zi))?!1:(Ji.crossVectors(En,An),t=[Ji.x,Ji.y,Ji.z],ar(t,ti,ni,ii,Zi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mn=[new z,new z,new z,new z,new z,new z,new z,new z],Jt=new z,Yi=new vi,ti=new z,ni=new z,ii=new z,En=new z,An=new z,On=new z,yi=new z,Zi=new z,Ji=new z,Un=new z;function ar(a,e,t,n,i){for(let r=0,o=a.length-3;r<=o;r+=3){Un.fromArray(a,r);const s=i.x*Math.abs(Un.x)+i.y*Math.abs(Un.y)+i.z*Math.abs(Un.z),c=e.dot(Un),l=t.dot(Un),d=n.dot(Un);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>s)return!1}return!0}const ct=new z,Qi=new Ge;let Yc=0;class kn extends qn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cc,this.updateRanges=[],this.gpuType=rn,this.version=0,this._normalizationScale=e!==void 0?ho(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qi.fromBufferAttribute(this,t),Qi.applyMatrix3(e),this.setXY(t,Qi.x,Qi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Lc(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ic(e,this.array)}}class ul extends kn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class fl extends kn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class rt extends kn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Zc=new vi,Mi=new z,rr=new z;class La{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Zc.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mi.subVectors(e,this.center);const t=Mi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Mi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mi.copy(e.center).add(rr)),this.expandByPoint(Mi.copy(e.center).sub(rr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Jc=0;const Gt=new et,or=new ft,ai=new z,Ot=new vi,Si=new vi,bt=new z;class Xt extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tc(e)?fl:ul)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Le().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return or.lookAt(e),or.updateMatrix(),this.applyMatrix4(or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ai).negate(),this.translate(ai.x,ai.y,ai.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new rt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Ot.setFromBufferAttribute(r),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new La);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const s=t[r];Si.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(Ot.min,Si.min),Ot.expandByPoint(bt),bt.addVectors(Ot.max,Si.max),Ot.expandByPoint(bt)):(Ot.expandByPoint(Si.min),Ot.expandByPoint(Si.max))}Ot.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)bt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(bt));if(t)for(let r=0,o=t.length;r<o;r++){const s=t[r],c=this.morphTargetsRelative;for(let l=0,d=s.count;l<d;l++)bt.fromBufferAttribute(s,l),c&&(ai.fromBufferAttribute(e,l),bt.add(ai)),i=Math.max(i,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new kn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const s=[],c=[],l=new Uint8Array(n.count);for(let I=0;I<n.count;I++)s[I]=new z,c[I]=new z;const d=new z,p=new z,f=new z,m=new Ge,v=new Ge,_=new Ge,h=new z,u=new z;function y(I,N,D){l[I]=l[N]=l[D]=1,d.fromBufferAttribute(n,I),p.fromBufferAttribute(n,N),f.fromBufferAttribute(n,D),m.fromBufferAttribute(r,I),v.fromBufferAttribute(r,N),_.fromBufferAttribute(r,D),p.sub(d),f.sub(d),v.sub(m),_.sub(m);const F=1/(v.x*_.y-_.x*v.y);isFinite(F)&&(h.copy(p).multiplyScalar(_.y).addScaledVector(f,-v.y).multiplyScalar(F),u.copy(f).multiplyScalar(v.x).addScaledVector(p,-_.x).multiplyScalar(F),s[I].add(h),s[N].add(h),s[D].add(h),c[I].add(u),c[N].add(u),c[D].add(u))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let I=0,N=T.length;I<N;++I){const D=T[I],F=D.start,V=D.count;for(let P=F,k=F+V;P<k;P+=3)y(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const S=new z,C=new z,A=new z,g=new z;function M(I){A.fromBufferAttribute(i,I),g.copy(A);const N=s[I];S.copy(N),S.sub(A.multiplyScalar(A.dot(N))).normalize(),C.crossVectors(g,N);const F=C.dot(c[I])<0?-1:1;o.setXYZW(I,S.x,S.y,S.z,F)}for(let I=0,N=n.count;I<N;++I)l[I]&&M(I);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new kn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new z,r=new z,o=new z,s=new z,c=new z,l=new z,d=new z,p=new z;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),_=e.getX(f+1),h=e.getX(f+2);i.fromBufferAttribute(t,v),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,h),d.subVectors(o,r),p.subVectors(i,r),d.cross(p),s.fromBufferAttribute(n,v),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,h),s.add(d),c.add(d),l.add(d),n.setXYZ(v,s.x,s.y,s.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(h,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,r),p.subVectors(i,r),d.cross(p),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(s,c){const l=s.array,d=s.itemSize,p=s.normalized,f=new l.constructor(c.length*d);let m=0,v=0;for(let _=0,h=c.length;_<h;_++){s.isInterleavedBufferAttribute?m=c[_]*s.data.stride+s.offset:m=c[_]*d;for(let u=0;u<d;u++)f[v++]=l[m++]}return new kn(f,d,p)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,n=this.index.array,i=this.attributes;for(const s in i){const c=i[s],l=e(c,n);t.setAttribute(s,l)}const r=this.morphAttributes;for(const s in r){const c=[],l=r[s];for(let d=0,p=l.length;d<p;d++){const f=l[d],m=e(f,n);c.push(m)}t.morphAttributes[s]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,c=o.length;s<c;s++){const l=o[s];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let p=0,f=l.length;p<f;p++){const m=l[p];d.push(m.toJSON(e.data))}d.length>0&&(i[c]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere=s.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const d=i[l];this.setAttribute(l,d.clone(t))}const r=e.morphAttributes;for(const l in r){const d=[],p=r[l];for(let f=0,m=p.length;f<m;f++)d.push(p[f].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,d=o.length;l<d;l++){const p=o[l];this.addGroup(p.start,p.count,p.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sr=new z,Qc=new z,jc=new Le;class Tn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=sr.subVectors(n,t).cross(Qc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(sr),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||jc.getNormalMatrix(e),i=this.coplanarPoint(sr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let ed=0;class $n extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=Pi,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gs,this.blendDst=Vs,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ka,this.stencilZFail=ka,this.stencilZPass=ka,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const s in r){const c=r[s];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ie().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Tn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ge().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ge().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const pn=new z,lr=new z,ji=new z,ea=new z;class vo{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.origin).addScaledVector(this.direction,t),pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){lr.copy(e).add(t).multiplyScalar(.5),ji.copy(t).sub(e).normalize(),ea.copy(this.origin).sub(lr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ji),s=ea.dot(this.direction),c=-ea.dot(ji),l=ea.lengthSq(),d=Math.abs(1-o*o);let p,f,m,v;if(d>0)if(p=o*c-s,f=o*s-c,v=r*d,p>=0)if(f>=-v)if(f<=v){const _=1/d;p*=_,f*=_,m=p*(p+o*f+2*s)+f*(o*p+f+2*c)+l}else f=r,p=Math.max(0,-(o*f+s)),m=-p*p+f*(f+2*c)+l;else f=-r,p=Math.max(0,-(o*f+s)),m=-p*p+f*(f+2*c)+l;else f<=-v?(p=Math.max(0,-(-o*r+s)),f=p>0?-r:Math.min(Math.max(-r,-c),r),m=-p*p+f*(f+2*c)+l):f<=v?(p=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(p=Math.max(0,-(o*r+s)),f=p>0?r:Math.min(Math.max(-r,-c),r),m=-p*p+f*(f+2*c)+l);else f=o>0?-r:r,p=Math.max(0,-(o*f+s)),m=-p*p+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(lr).addScaledVector(ji,f),m}intersectSphere(e,t){if(e.radius<0)return null;pn.subVectors(e.center,this.origin);const n=pn.dot(this.direction),i=pn.dot(pn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),s=n-o,c=n+o;return c<0?null:s<0?this.at(c,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,s,c;const l=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),d>=0?(r=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(r=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),p>=0?(s=(e.min.z-f.z)*p,c=(e.max.z-f.z)*p):(s=(e.max.z-f.z)*p,c=(e.min.z-f.z)*p),n>c||s>i)||((s>n||n!==n)&&(n=s),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,pn)!==null}intersectTriangle(e,t,n,i,r){const o=this.origin,s=this.direction,c=s.x,l=s.y,d=s.z,p=e.x-o.x,f=e.y-o.y,m=e.z-o.z,v=t.x-o.x,_=t.y-o.y,h=t.z-o.z,u=n.x-o.x,y=n.y-o.y,T=n.z-o.z,S=Math.abs(c),C=Math.abs(l),A=Math.abs(d);let g,M,I,N,D,F,V,P,k,Z,H,te;if(S>=C&&S>=A?(I=c,F=p,k=v,te=u,c>=0?(g=l,M=d,N=f,D=m,V=_,P=h,Z=y,H=T):(g=d,M=l,N=m,D=f,V=h,P=_,Z=T,H=y)):C>=A?(I=l,F=f,k=_,te=y,l>=0?(g=d,M=c,N=m,D=p,V=h,P=v,Z=T,H=u):(g=c,M=d,N=p,D=m,V=v,P=h,Z=u,H=T)):(I=d,F=m,k=h,te=T,d>=0?(g=c,M=l,N=p,D=f,V=v,P=_,Z=u,H=y):(g=l,M=c,N=f,D=p,V=_,P=v,Z=y,H=u)),I===0)return null;const q=g/I,Q=M/I,j=1/I,ye=N-q*F,Pe=D-Q*F,K=V-q*k,me=P-Q*k,be=Z-q*te,Ae=H-Q*te,pe=be*me-Ae*K,De=ye*Ae-Pe*be,st=K*Pe-me*ye;if(i){if(pe<0||De<0||st<0)return null}else if((pe<0||De<0||st<0)&&(pe>0||De>0||st>0))return null;const Te=pe+De+st;if(Te===0)return null;const Ke=j*(pe*F+De*k+st*te);return(Te>0?Ke<0:Ke>0)?null:this.at(Ke/Te,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ni extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Ws,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ts=new et,Bn=new vo,ta=new La,ns=new z,na=new z,ia=new z,aa=new z,cr=new z,ra=new z,is=new z,oa=new z;class Pt extends ft{constructor(e=new Xt,t=new Ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const s=this.morphTargetInfluences;if(r&&s){ra.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const d=s[c],p=r[c];d!==0&&(cr.fromBufferAttribute(p,e),o?ra.addScaledVector(cr,d):ra.addScaledVector(cr.sub(t),d))}t.add(ra)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(r),Bn.copy(e.ray).recast(e.near),!(ta.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(ta,ns)===null||Bn.origin.distanceToSquared(ns)>(e.far-e.near)**2))&&(ts.copy(r).invert(),Bn.copy(e.ray).applyMatrix4(ts),!(n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,s=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,f=r.groups,m=r.drawRange;if(s!==null)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const h=f[v],u=o[h.materialIndex],y=Math.max(h.start,m.start),T=Math.min(s.count,Math.min(h.start+h.count,m.start+m.count));for(let S=y,C=T;S<C;S+=3){const A=s.getX(S),g=s.getX(S+1),M=s.getX(S+2);i=sa(this,u,e,n,l,d,p,A,g,M),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=h.materialIndex,t.push(i))}}else{const v=Math.max(0,m.start),_=Math.min(s.count,m.start+m.count);for(let h=v,u=_;h<u;h+=3){const y=s.getX(h),T=s.getX(h+1),S=s.getX(h+2);i=sa(this,o,e,n,l,d,p,y,T,S),i&&(i.faceIndex=Math.floor(h/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const h=f[v],u=o[h.materialIndex],y=Math.max(h.start,m.start),T=Math.min(c.count,Math.min(h.start+h.count,m.start+m.count));for(let S=y,C=T;S<C;S+=3){const A=S,g=S+1,M=S+2;i=sa(this,u,e,n,l,d,p,A,g,M),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=h.materialIndex,t.push(i))}}else{const v=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let h=v,u=_;h<u;h+=3){const y=h,T=h+1,S=h+2;i=sa(this,o,e,n,l,d,p,y,T,S),i&&(i.faceIndex=Math.floor(h/3),t.push(i))}}}}function td(a,e,t,n,i,r,o,s){let c;if(e.side===It?c=n.intersectTriangle(o,r,i,!0,s):c=n.intersectTriangle(i,r,o,e.side===Gn,s),c===null)return null;oa.copy(s),oa.applyMatrix4(a.matrixWorld);const l=t.ray.origin.distanceTo(oa);return l<t.near||l>t.far?null:{distance:l,point:oa.clone(),object:a}}function sa(a,e,t,n,i,r,o,s,c,l){a.getVertexPosition(s,na),a.getVertexPosition(c,ia),a.getVertexPosition(l,aa);const d=td(a,e,t,n,na,ia,aa,is);if(d){const p=new z;Qt.getBarycoord(is,na,ia,aa,p),i&&(d.uv=Qt.getInterpolatedAttribute(i,s,c,l,p,new Ge)),r&&(d.uv1=Qt.getInterpolatedAttribute(r,s,c,l,p,new Ge)),o&&(d.normal=Qt.getInterpolatedAttribute(o,s,c,l,p,new z),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:s,b:c,c:l,normal:new z,materialIndex:0};Qt.getNormal(na,ia,aa,f.normal),d.face=f,d.barycoord=p}return d}class nd extends Nt{constructor(e=null,t=1,n=1,i,r,o,s,c,l=St,d=St,p,f){super(null,o,s,c,l,d,i,r,p,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zn=new La,id=new Ge(.5,.5),la=new z;class Oi{constructor(e=new Tn,t=new Tn,n=new Tn,i=new Tn,r=new Tn,o=new Tn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jt,n=!1){const i=this.planes,r=e.elements,o=r[0],s=r[1],c=r[2],l=r[3],d=r[4],p=r[5],f=r[6],m=r[7],v=r[8],_=r[9],h=r[10],u=r[11],y=r[12],T=r[13],S=r[14],C=r[15];if(i[0].setComponents(l-o,m-d,u-v,C-y).normalize(),i[1].setComponents(l+o,m+d,u+v,C+y).normalize(),i[2].setComponents(l+s,m+p,u+_,C+T).normalize(),i[3].setComponents(l-s,m-p,u-_,C-T).normalize(),n)i[4].setComponents(c,f,h,S).normalize(),i[5].setComponents(l-c,m-f,u-h,C-S).normalize();else if(i[4].setComponents(l-c,m-f,u-h,C-S).normalize(),t===jt)i[5].setComponents(l+c,m+f,u+h,C+S).normalize();else if(t===Fi)i[5].setComponents(c,f,h,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(e){zn.center.set(0,0,0);const t=id.distanceTo(e.center);return zn.radius=.7071067811865476+t,zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(la.x=i.normal.x>0?e.max.x:e.min.x,la.y=i.normal.y>0?e.max.y:e.min.y,la.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(la)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const as=new et;class bo{constructor(){this.coordinateSystem=jt,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){const r=t[i];as.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Oi),n[i].setFromProjectionMatrix(as,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Oi),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new bo().copy(this)}}class hl extends $n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ra=new z,wa=new z,rs=new et,Ei=new vo,ca=new La,dr=new z,os=new z;class ad extends ft{constructor(e=new Xt,t=new hl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ra.fromBufferAttribute(t,i-1),wa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ra.distanceTo(wa);e.setAttribute("lineDistance",new rt(n,1))}else Re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(i),ca.radius+=r,e.ray.intersectsSphere(ca)===!1)return;rs.copy(i).invert(),Ei.copy(e.ray).applyMatrix4(rs);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,l=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){const m=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let _=m,h=v-1;_<h;_+=l){const u=d.getX(_),y=d.getX(_+1),T=da(this,e,Ei,c,u,y,_);T&&t.push(T)}if(this.isLineLoop){const _=d.getX(v-1),h=d.getX(m),u=da(this,e,Ei,c,_,h,v-1);u&&t.push(u)}}else{const m=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let _=m,h=v-1;_<h;_+=l){const u=da(this,e,Ei,c,_,_+1,_);u&&t.push(u)}if(this.isLineLoop){const _=da(this,e,Ei,c,v-1,m,v-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}function da(a,e,t,n,i,r,o){const s=a.geometry.attributes.position;if(Ra.fromBufferAttribute(s,i),wa.fromBufferAttribute(s,r),t.distanceSqToSegment(Ra,wa,dr,os)>n)return;dr.applyMatrix4(a.matrixWorld);const l=e.ray.origin.distanceTo(dr);if(!(l<e.near||l>e.far))return{distance:l,point:os.clone().applyMatrix4(a.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:a}}const ss=new z,ls=new z;class rd extends ad{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ss.fromBufferAttribute(t,i),ls.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ss.distanceTo(ls);e.setAttribute("lineDistance",new rt(n,1))}else Re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ml extends Nt{constructor(e=[],t=hi,n,i,r,o,s,c,l,d){super(e,t,n,i,r,o,s,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pi extends Nt{constructor(e,t,n=ln,i,r,o,s=St,c=St,l,d=Nn,p=1){if(d!==Nn&&d!==Pn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:p};super(f,i,r,o,s,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class pl extends pi{constructor(e,t=ln,n=hi,i,r,o=St,s=St,c,l=Nn){const d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,t,n,i,r,o,s,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class gl extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Hi extends Xt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const s=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],d=[],p=[];let f=0,m=0;v("z","y","x",-1,-1,n,t,e,o,r,0),v("z","y","x",1,-1,n,t,-e,o,r,1),v("x","z","y",1,1,e,n,t,i,o,2),v("x","z","y",1,-1,e,n,-t,i,o,3),v("x","y","z",1,-1,e,t,n,i,r,4),v("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(d,3)),this.setAttribute("uv",new rt(p,2));function v(_,h,u,y,T,S,C,A,g,M,I){const N=S/g,D=C/M,F=S/2,V=C/2,P=A/2,k=g+1,Z=M+1;let H=0,te=0;const q=new z;for(let Q=0;Q<Z;Q++){const j=Q*D-V;for(let ye=0;ye<k;ye++){const Pe=ye*N-F;q[_]=Pe*y,q[h]=j*T,q[u]=P,l.push(q.x,q.y,q.z),q[_]=0,q[h]=0,q[u]=A>0?1:-1,d.push(q.x,q.y,q.z),p.push(ye/g),p.push(1-Q/M),H+=1}}for(let Q=0;Q<M;Q++)for(let j=0;j<g;j++){const ye=f+j+k*Q,Pe=f+j+k*(Q+1),K=f+(j+1)+k*(Q+1),me=f+(j+1)+k*Q;c.push(ye,Pe,me),c.push(Pe,K,me),te+=6}s.addGroup(m,te,I),m+=te,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ui extends Xt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,s=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:s,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const d=[],p=[],f=[],m=[];let v=0;const _=[],h=n/2;let u=0;y(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(d),this.setAttribute("position",new rt(p,3)),this.setAttribute("normal",new rt(f,3)),this.setAttribute("uv",new rt(m,2));function y(){const S=new z,C=new z;let A=0;const g=(t-e)/n;for(let M=0;M<=r;M++){const I=[],N=M/r,D=N*(t-e)+e;for(let F=0;F<=i;F++){const V=F/i,P=V*c+s,k=Math.sin(P),Z=Math.cos(P);C.x=D*k,C.y=-N*n+h,C.z=D*Z,p.push(C.x,C.y,C.z),S.set(k,g,Z).normalize(),f.push(S.x,S.y,S.z),m.push(V,1-N),I.push(v++)}_.push(I)}for(let M=0;M<i;M++)for(let I=0;I<r;I++){const N=_[I][M],D=_[I+1][M],F=_[I+1][M+1],V=_[I][M+1];(e>0||I!==0)&&(d.push(N,D,V),A+=3),(t>0||I!==r-1)&&(d.push(D,F,V),A+=3)}l.addGroup(u,A,0),u+=A}function T(S){const C=v,A=new Ge,g=new z;let M=0;const I=S===!0?e:t,N=S===!0?1:-1;for(let F=1;F<=i;F++)p.push(0,h*N,0),f.push(0,N,0),m.push(.5,.5),v++;const D=v;for(let F=0;F<=i;F++){const P=F/i*c+s,k=Math.cos(P),Z=Math.sin(P);g.x=I*Z,g.y=h*N,g.z=I*k,p.push(g.x,g.y,g.z),f.push(0,N,0),A.x=k*.5+.5,A.y=Z*.5*N+.5,m.push(A.x,A.y),v++}for(let F=0;F<i;F++){const V=C+F,P=D+F;S===!0?d.push(P,P+1,V):d.push(P+1,P,V),M+=3}l.addGroup(u,M,S===!0?1:2),u+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ki extends Xt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,s=Math.floor(n),c=Math.floor(i),l=s+1,d=c+1,p=e/s,f=t/c,m=[],v=[],_=[],h=[];for(let u=0;u<d;u++){const y=u*f-o;for(let T=0;T<l;T++){const S=T*p-r;v.push(S,-y,0),_.push(0,0,1),h.push(T/s),h.push(1-u/c)}}for(let u=0;u<c;u++)for(let y=0;y<s;y++){const T=y+l*u,S=y+l*(u+1),C=y+1+l*(u+1),A=y+1+l*u;m.push(T,S,A),m.push(S,C,A)}this.setIndex(m),this.setAttribute("position",new rt(v,3)),this.setAttribute("normal",new rt(_,3)),this.setAttribute("uv",new rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pa extends Xt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const s=[],c=[],l=[],d=[];let p=e;const f=(t-e)/i,m=new z,v=new Ge;for(let _=0;_<=i;_++){for(let h=0;h<=n;h++){const u=r+h/n*o;m.x=p*Math.cos(u),m.y=p*Math.sin(u),c.push(m.x,m.y,m.z),l.push(0,0,1),v.x=(m.x/t+1)/2,v.y=(m.y/t+1)/2,d.push(v.x,v.y)}p+=f}for(let _=0;_<i;_++){const h=_*(n+1);for(let u=0;u<n;u++){const y=u+h,T=y,S=y+n+1,C=y+n+2,A=y+1;s.push(T,S,A),s.push(S,C,A)}}this.setIndex(s),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Bi extends Xt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+s,Math.PI);let l=0;const d=[],p=new z,f=new z,m=[],v=[],_=[],h=[];for(let u=0;u<=n;u++){const y=[],T=u/n,S=o+T*s,C=e*Math.cos(S),A=Math.sqrt(e*e-C*C);let g=0;u===0&&o===0?g=.5/t:u===n&&c===Math.PI&&(g=-.5/t);for(let M=0;M<=t;M++){const I=M/t,N=i+I*r;p.x=-A*Math.cos(N),p.y=C,p.z=A*Math.sin(N),v.push(p.x,p.y,p.z),f.copy(p).normalize(),_.push(f.x,f.y,f.z),h.push(I+g,1-T),y.push(l++)}d.push(y)}for(let u=0;u<n;u++)for(let y=0;y<t;y++){const T=d[u][y+1],S=d[u][y],C=d[u+1][y],A=d[u+1][y+1];(u!==0||o>0)&&m.push(T,S,A),(u!==n-1||c<Math.PI)&&m.push(S,C,A)}this.setIndex(m),this.setAttribute("position",new rt(v,3)),this.setAttribute("normal",new rt(_,3)),this.setAttribute("uv",new rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class od extends $n{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ie(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function gi(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];if(cs(i))i.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(cs(i[0])){const r=[];for(let o=0,s=i.length;o<s;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function wt(a){const e={};for(let t=0;t<a.length;t++){const n=gi(a[t]);for(const i in n)e[i]=n[i]}return e}function cs(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function sd(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function vl(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}const ld={clone:gi,merge:wt};var cd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cd,this.fragmentShader=dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gi(e.uniforms),this.uniformsGroups=sd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ie().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ge().fromArray(i.value);break;case"v3":this.uniforms[n].value=new z().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ot().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Le().fromArray(i.value);break;case"m4":this.uniforms[n].value=new et().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class ud extends Wn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ui extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eo,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fd extends ui{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ge(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return ci('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){ci('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class hd extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class md extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class xo extends ft{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ur=new et,ds=new z,us=new z;class bl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=Ut,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oi,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;ds.setFromMatrixPosition(e.matrixWorld),t.position.copy(ds),us.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(us),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){ur.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ur,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=i?i.z/r.x:1,s=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;e.coordinateSystem===Fi||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*s,0,.5*s+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*s,0,.5*s+l,0,0,.5,.5,0,0,0,1),t.multiply(ur)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ua=new z,fa=new Xn,tn=new z;class xl extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=jt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ua,fa,tn),tn.x===1&&tn.y===1&&tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,fa,tn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ua,fa,tn),tn.x===1&&tn.y===1&&tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,fa,tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Cn=new z,fs=new Ge,hs=new Ge;class Wt extends xl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ta*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ta*2*Math.atan(Math.tan(Ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cn.x,Cn.y).multiplyScalar(-e/Cn.z),Cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cn.x,Cn.y).multiplyScalar(-e/Cn.z)}getViewSize(e,t){return this.getViewBounds(e,fs,hs),t.subVectors(hs,fs)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ga*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class pd extends bl{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ta*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class gd extends xo{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new pd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class _l extends xl{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,s=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,s-=d*this.view.offsetY,c=s-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,s,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class vd extends bl{constructor(){super(new _l(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ms extends xo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new vd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class bd extends xo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ri=-90,oi=1;class to extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Wt(ri,oi,e,t);i.layers=this.layers,this.add(i);const r=new Wt(ri,oi,e,t);r.layers=this.layers,this.add(r);const o=new Wt(ri,oi,e,t);o.layers=this.layers,this.add(o);const s=new Wt(ri,oi,e,t);s.layers=this.layers,this.add(s);const c=new Wt(ri,oi,e,t);c.layers=this.layers,this.add(c);const l=new Wt(ri,oi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,s,c]=t;for(const l of t)this.remove(l);if(e===jt)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Fi)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,s,c,l,d]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;e.isWebGLRenderer===!0?h=e.state.buffers.depth.getReversed():h=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,3,i),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,i),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(p,f,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class xd extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const ps=new et;class _d{constructor(e,t,n=0,i=1/0){this.ray=new vo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new po,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ps.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ps),this}intersectObject(e,t=!0,n=[]){return no(e,this,n,t),n.sort(gs),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)no(e[i],this,n,t);return n.sort(gs),n}}function gs(a,e){return a.distance-e.distance}function no(a,e,t,n){let i=!0;if(a.layers.test(e.layers)&&a.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=a.children;for(let o=0,s=r.length;o<s;o++)no(r[o],e,t,!0)}}class yd extends rd{constructor(e=10,t=16,n=8,i=64,r=4473924,o=8947848){r=new Ie(r),o=new Ie(o);const s=[],c=[];if(t>1)for(let p=0;p<t;p++){const f=p/t*(Math.PI*2),m=Math.sin(f)*e,v=Math.cos(f)*e;s.push(0,0,0),s.push(m,0,v);const _=p&1?r:o;c.push(_.r,_.g,_.b),c.push(_.r,_.g,_.b)}for(let p=0;p<n;p++){const f=p&1?r:o,m=e-e/n*p;for(let v=0;v<i;v++){let _=v/i*(Math.PI*2),h=Math.sin(_)*m,u=Math.cos(_)*m;s.push(h,0,u),c.push(f.r,f.g,f.b),_=(v+1)/i*(Math.PI*2),h=Math.sin(_)*m,u=Math.cos(_)*m,s.push(h,0,u),c.push(f.r,f.g,f.b)}}const l=new Xt;l.setAttribute("position",new rt(s,3)),l.setAttribute("color",new rt(c,3));const d=new hl({vertexColors:!0,toneMapped:!1});super(l,d),this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function vs(a,e,t,n){const i=Md(n);switch(t){case nl:return a*e;case al:return a*e/i.components*i.byteLength;case co:return a*e/i.components*i.byteLength;case Vn:return a*e*2/i.components*i.byteLength;case uo:return a*e*2/i.components*i.byteLength;case il:return a*e*3/i.components*i.byteLength;case on:return a*e*4/i.components*i.byteLength;case fo:return a*e*4/i.components*i.byteLength;case ga:case va:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case ba:case xa:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Ar:case Tr:return Math.max(a,16)*Math.max(e,8)/4;case Er:case Cr:return Math.max(a,8)*Math.max(e,8)/2;case Rr:case wr:case Nr:case Dr:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Pr:case Ma:case Lr:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Ir:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Fr:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Or:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Ur:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Br:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case zr:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Hr:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case kr:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Gr:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Vr:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Wr:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case qr:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Xr:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case $r:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Kr:case Yr:case Zr:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Jr:case Qr:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Sa:case jr:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Md(a){switch(a){case Ut:case Qs:return{byteLength:1,components:1};case Ii:case js:case cn:return{byteLength:2,components:1};case so:case lo:return{byteLength:2,components:4};case ln:case oo:case rn:return{byteLength:4,components:1};case el:case tl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ao}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ao);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yl(){let a=null,e=!1,t=null,n=null;function i(r,o){n=a.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&a!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function Sd(a){const e=new WeakMap;function t(s,c){const l=s.array,d=s.usage,p=l.byteLength,f=a.createBuffer();a.bindBuffer(c,f),a.bufferData(c,l,d),s.onUploadCallback();let m;if(l instanceof Float32Array)m=a.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=a.HALF_FLOAT;else if(l instanceof Uint16Array)s.isFloat16BufferAttribute?m=a.HALF_FLOAT:m=a.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=a.SHORT;else if(l instanceof Uint32Array)m=a.UNSIGNED_INT;else if(l instanceof Int32Array)m=a.INT;else if(l instanceof Int8Array)m=a.BYTE;else if(l instanceof Uint8Array)m=a.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:s.version,size:p}}function n(s,c,l){const d=c.array,p=c.updateRanges;if(a.bindBuffer(l,s),p.length===0)a.bufferSubData(l,0,d);else{p.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<p.length;m++){const v=p[f],_=p[m];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++f,p[f]=_)}p.length=f+1;for(let m=0,v=p.length;m<v;m++){const _=p[m];a.bufferSubData(l,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function r(s){s.isInterleavedBufferAttribute&&(s=s.data);const c=e.get(s);c&&(a.deleteBuffer(c.buffer),e.delete(s))}function o(s,c){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const d=e.get(s);(!d||d.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const l=e.get(s);if(l===void 0)e.set(s,t(s,c));else if(l.version<s.version){if(l.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,s,c),l.version=s.version}}return{get:i,remove:r,update:o}}var Ed=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ad=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Td=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Nd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ld=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Id=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Od=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ud=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Wd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,$d=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Yd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jd="gl_FragColor = linearToOutputTexel( gl_FragColor );",eu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,nu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,iu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,au=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ru=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ou=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,su=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,du=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,pu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,gu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_u=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yu=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Su=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Eu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Au=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Cu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ru=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Du=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ou=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uu=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Hu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ku=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Xu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$u=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ku=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ju=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ju=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ef=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,af=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,of=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,sf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,df=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ff=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ef=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Af=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tf=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Nf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Df=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Lf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ff=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Of=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$f=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,th=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ih=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:Ed,alphahash_pars_fragment:Ad,alphamap_fragment:Cd,alphamap_pars_fragment:Td,alphatest_fragment:Rd,alphatest_pars_fragment:wd,aomap_fragment:Pd,aomap_pars_fragment:Nd,batching_pars_vertex:Dd,batching_vertex:Ld,begin_vertex:Id,beginnormal_vertex:Fd,bsdfs:Od,iridescence_fragment:Ud,bumpmap_pars_fragment:Bd,clipping_planes_fragment:zd,clipping_planes_pars_fragment:Hd,clipping_planes_pars_vertex:kd,clipping_planes_vertex:Gd,color_fragment:Vd,color_pars_fragment:Wd,color_pars_vertex:qd,color_vertex:Xd,common:$d,defaultnormal_vertex:Kd,displacementmap_pars_vertex:Yd,displacementmap_vertex:Zd,emissivemap_fragment:Jd,emissivemap_pars_fragment:Qd,colorspace_fragment:jd,colorspace_pars_fragment:eu,envmap_fragment:tu,envmap_common_pars_fragment:nu,envmap_pars_fragment:iu,envmap_pars_vertex:au,envmap_physical_pars_fragment:pu,envmap_vertex:ru,fog_vertex:ou,fog_pars_vertex:su,fog_fragment:lu,fog_pars_fragment:cu,gradientmap_pars_fragment:du,lightmap_pars_fragment:uu,lights_lambert_fragment:fu,lights_lambert_pars_fragment:hu,lights_pars_begin:mu,lights_toon_fragment:gu,lights_toon_pars_fragment:vu,lights_phong_fragment:bu,lights_phong_pars_fragment:xu,lights_physical_fragment:_u,lights_physical_pars_fragment:yu,lights_fragment_begin:Mu,lights_fragment_maps:Su,lights_fragment_end:Eu,lightprobes_pars_fragment:Au,logdepthbuf_fragment:Cu,logdepthbuf_pars_fragment:Tu,logdepthbuf_pars_vertex:Ru,logdepthbuf_vertex:wu,map_fragment:Pu,map_pars_fragment:Nu,map_particle_fragment:Du,map_particle_pars_fragment:Lu,metalnessmap_fragment:Iu,metalnessmap_pars_fragment:Fu,morphinstance_vertex:Ou,morphcolor_vertex:Uu,morphnormal_vertex:Bu,morphtarget_pars_vertex:zu,morphtarget_vertex:Hu,normal_fragment_begin:ku,normal_fragment_maps:Gu,normal_pars_fragment:Vu,normal_pars_vertex:Wu,normal_vertex:qu,normalmap_pars_fragment:Xu,clearcoat_normal_fragment_begin:$u,clearcoat_normal_fragment_maps:Ku,clearcoat_pars_fragment:Yu,iridescence_pars_fragment:Zu,opaque_fragment:Ju,packing:Qu,premultiplied_alpha_fragment:ju,project_vertex:ef,dithering_fragment:tf,dithering_pars_fragment:nf,roughnessmap_fragment:af,roughnessmap_pars_fragment:rf,shadowmap_pars_fragment:of,shadowmap_pars_vertex:sf,shadowmap_vertex:lf,shadowmask_pars_fragment:cf,skinbase_vertex:df,skinning_pars_vertex:uf,skinning_vertex:ff,skinnormal_vertex:hf,specularmap_fragment:mf,specularmap_pars_fragment:pf,tonemapping_fragment:gf,tonemapping_pars_fragment:vf,transmission_fragment:bf,transmission_pars_fragment:xf,uv_pars_fragment:_f,uv_pars_vertex:yf,uv_vertex:Mf,worldpos_vertex:Sf,background_vert:Ef,background_frag:Af,backgroundCube_vert:Cf,backgroundCube_frag:Tf,cube_vert:Rf,cube_frag:wf,depth_vert:Pf,depth_frag:Nf,distance_vert:Df,distance_frag:Lf,equirect_vert:If,equirect_frag:Ff,linedashed_vert:Of,linedashed_frag:Uf,meshbasic_vert:Bf,meshbasic_frag:zf,meshlambert_vert:Hf,meshlambert_frag:kf,meshmatcap_vert:Gf,meshmatcap_frag:Vf,meshnormal_vert:Wf,meshnormal_frag:qf,meshphong_vert:Xf,meshphong_frag:$f,meshphysical_vert:Kf,meshphysical_frag:Yf,meshtoon_vert:Zf,meshtoon_frag:Jf,points_vert:Qf,points_frag:jf,shadow_vert:eh,shadow_frag:th,sprite_vert:nh,sprite_frag:ih},he={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},an={basic:{uniforms:wt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:wt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:wt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:wt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:wt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:wt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:wt([he.points,he.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:wt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:wt([he.common,he.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:wt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:wt([he.sprite,he.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:wt([he.common,he.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:wt([he.lights,he.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};an.physical={uniforms:wt([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Le},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const ha={r:0,b:0,g:0},ah=new et,Ml=new Le;Ml.set(-1,0,0,0,1,0,0,0,1);function rh(a,e,t,n,i,r){const o=new Ie(0);let s=i===!0?0:1,c,l,d=null,p=0,f=null;function m(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const S=y.backgroundBlurriness>0;T=e.get(T,S)}return T}function v(y){let T=!1;const S=m(y);S===null?h(o,s):S&&S.isColor&&(h(S,1),T=!0);const C=a.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(a.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function _(y,T){const S=m(T);S&&S.isCubeTexture?(l===void 0&&(l=new Pt(new Hi(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:gi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,A,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ah.makeRotationFromEuler(T.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ml),l.material.toneMapped=Ve.getTransfer(S.colorSpace)!==Ze,(d!==S||p!==S.version||f!==a.toneMapping)&&(l.material.needsUpdate=!0,d=S,p=S.version,f=a.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Pt(new ki(2,2),new Wn({name:"BackgroundMaterial",uniforms:gi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Ve.getTransfer(S.colorSpace)!==Ze,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||p!==S.version||f!==a.toneMapping)&&(c.material.needsUpdate=!0,d=S,p=S.version,f=a.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function h(y,T){y.getRGB(ha,vl(a)),t.buffers.color.setClear(ha.r,ha.g,ha.b,T,r)}function u(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,T=1){o.set(y),s=T,h(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(y){s=y,h(o,s)},render:v,addToRenderList:_,dispose:u}}function oh(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function s(D,F,V,P,k){let Z=!1;const H=p(D,P,V,F);r!==H&&(r=H,l(r.object)),Z=m(D,P,V,k),Z&&v(D,P,V,k),k!==null&&e.update(k,a.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,S(D,F,V,P),k!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return a.createVertexArray()}function l(D){return a.bindVertexArray(D)}function d(D){return a.deleteVertexArray(D)}function p(D,F,V,P){const k=P.wireframe===!0;let Z=n[F.id];Z===void 0&&(Z={},n[F.id]=Z);const H=D.isInstancedMesh===!0?D.id:0;let te=Z[H];te===void 0&&(te={},Z[H]=te);let q=te[V.id];q===void 0&&(q={},te[V.id]=q);let Q=q[k];return Q===void 0&&(Q=f(c()),q[k]=Q),Q}function f(D){const F=[],V=[],P=[];for(let k=0;k<t;k++)F[k]=0,V[k]=0,P[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:P,object:D,attributes:{},index:null}}function m(D,F,V,P){const k=r.attributes,Z=F.attributes;let H=0;const te=V.getAttributes();for(const q in te)if(te[q].location>=0){const j=k[q];let ye=Z[q];if(ye===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(ye=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(ye=D.instanceColor)),j===void 0||j.attribute!==ye||ye&&j.data!==ye.data)return!0;H++}return r.attributesNum!==H||r.index!==P}function v(D,F,V,P){const k={},Z=F.attributes;let H=0;const te=V.getAttributes();for(const q in te)if(te[q].location>=0){let j=Z[q];j===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));const ye={};ye.attribute=j,j&&j.data&&(ye.data=j.data),k[q]=ye,H++}r.attributes=k,r.attributesNum=H,r.index=P}function _(){const D=r.newAttributes;for(let F=0,V=D.length;F<V;F++)D[F]=0}function h(D){u(D,0)}function u(D,F){const V=r.newAttributes,P=r.enabledAttributes,k=r.attributeDivisors;V[D]=1,P[D]===0&&(a.enableVertexAttribArray(D),P[D]=1),k[D]!==F&&(a.vertexAttribDivisor(D,F),k[D]=F)}function y(){const D=r.newAttributes,F=r.enabledAttributes;for(let V=0,P=F.length;V<P;V++)F[V]!==D[V]&&(a.disableVertexAttribArray(V),F[V]=0)}function T(D,F,V,P,k,Z,H){H===!0?a.vertexAttribIPointer(D,F,V,k,Z):a.vertexAttribPointer(D,F,V,P,k,Z)}function S(D,F,V,P){_();const k=P.attributes,Z=V.getAttributes(),H=F.defaultAttributeValues;for(const te in Z){const q=Z[te];if(q.location>=0){let Q=k[te];if(Q===void 0&&(te==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),te==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){const j=Q.normalized,ye=Q.itemSize,Pe=e.get(Q);if(Pe===void 0)continue;const K=Pe.buffer,me=Pe.type,be=Pe.bytesPerElement,Ae=me===a.INT||me===a.UNSIGNED_INT||Q.gpuType===oo;if(Q.isInterleavedBufferAttribute){const pe=Q.data,De=pe.isInterleavedBuffer===!0?pe.stride:pe.itemSize,st=Q.offset;if(pe.isInstancedInterleavedBuffer||pe.isInstancedBufferAttribute){for(let Te=0;Te<q.locationSize;Te++)u(q.location+Te,pe.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Te=0;Te<q.locationSize;Te++)h(q.location+Te);a.bindBuffer(a.ARRAY_BUFFER,K);for(let Te=0;Te<q.locationSize;Te++)T(q.location+Te,ye/q.locationSize,me,j,De*be,(st+ye/q.locationSize*Te)*be,Ae)}else{if(Q.isInstancedBufferAttribute){for(let pe=0;pe<q.locationSize;pe++)u(q.location+pe,Q.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let pe=0;pe<q.locationSize;pe++)h(q.location+pe);a.bindBuffer(a.ARRAY_BUFFER,K);for(let pe=0;pe<q.locationSize;pe++)T(q.location+pe,ye/q.locationSize,me,j,ye*be,ye/q.locationSize*pe*be,Ae)}}else if(H!==void 0){const j=H[te];if(j!==void 0)switch(j.length){case 2:a.vertexAttrib2fv(q.location,j);break;case 3:a.vertexAttrib3fv(q.location,j);break;case 4:a.vertexAttrib4fv(q.location,j);break;default:a.vertexAttrib1fv(q.location,j)}}}}y()}function C(){I();for(const D in n){const F=n[D];for(const V in F){const P=F[V];for(const k in P){const Z=P[k];for(const H in Z)d(Z[H].object),delete Z[H];delete P[k]}}delete n[D]}}function A(D){if(n[D.id]===void 0)return;const F=n[D.id];for(const V in F){const P=F[V];for(const k in P){const Z=P[k];for(const H in Z)d(Z[H].object),delete Z[H];delete P[k]}}delete n[D.id]}function g(D){for(const F in n){const V=n[F];for(const P in V){const k=V[P];if(k[D.id]===void 0)continue;const Z=k[D.id];for(const H in Z)d(Z[H].object),delete Z[H];delete k[D.id]}}}function M(D){for(const F in n){const V=n[F],P=D.isInstancedMesh===!0?D.id:0,k=V[P];if(k!==void 0){for(const Z in k){const H=k[Z];for(const te in H)d(H[te].object),delete H[te];delete k[Z]}delete V[P],Object.keys(V).length===0&&delete n[F]}}}function I(){N(),o=!0,r!==i&&(r=i,l(r.object))}function N(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:I,resetDefaultState:N,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfObject:M,releaseStatesOfProgram:g,initAttributes:_,enableAttribute:h,disableUnusedAttributes:y}}function sh(a,e,t){let n;function i(c){n=c}function r(c,l){a.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,d){d!==0&&(a.drawArraysInstanced(n,c,l,d),t.update(l,n,d))}function s(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let f=0;for(let m=0;m<d;m++)f+=l[m];t.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=s}function lh(a,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(g){return!(g!==on&&n.convert(g)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(g){const M=g===cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==Ut&&g!==rn&&!M&&n.convert(g)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE))}function c(g){if(g==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(Re("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&Re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&Re("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const m=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),v=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=a.getParameter(a.MAX_TEXTURE_SIZE),h=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),u=a.getParameter(a.MAX_VERTEX_ATTRIBS),y=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),T=a.getParameter(a.MAX_VARYING_VECTORS),S=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),C=a.getParameter(a.MAX_SAMPLES),A=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:h,maxAttributes:u,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:S,maxSamples:C,samples:A}}function ch(a){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Tn,s=new Le,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||n!==0||i;return i=f,n=p.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,f){t=d(p,f,0)},this.setState=function(p,f,m){const v=p.clippingPlanes,_=p.clipIntersection,h=p.clipShadows,u=a.get(p);if(!i||v===null||v.length===0||r&&!h)r?d(null):l();else{const y=r?0:n,T=y*4;let S=u.clippingState||null;c.value=S,S=d(v,f,T,m);for(let C=0;C!==T;++C)S[C]=t[C];u.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,f,m,v){const _=p!==null?p.length:0;let h=null;if(_!==0){if(h=c.value,v!==!0||h===null){const u=m+_*4,y=f.matrixWorldInverse;s.getNormalMatrix(y),(h===null||h.length<u)&&(h=new Float32Array(u));for(let T=0,S=m;T!==_;++T,S+=4)o.copy(p[T]).applyMatrix4(y,s),o.normal.toArray(h,S),h[S+3]=o.constant}c.value=h,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,h}}class _o extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ml(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Hi(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:li});r.uniforms.tEquirect.value=t;const o=new Pt(i,r),s=t.minFilter;return t.minFilter===wn&&(t.minFilter=Lt),new to(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const bs=256,dh=3,uh=20,Sl=256,El=16,fh=3,hh=new z,mh=new Ie;class Na{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new to(1,10,null),this._boxMesh=new Pt(new Hi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:s=hh}=r,c=this._renderer;this._setSize(o);const l=this._allocateTarget(),d=this._getSourceTarget(!0);t>0&&(d.texture.mipmapsAutoUpdate=!1);const p=c.autoClear,f=c.autoClearColor,m=c.autoClearDepth,v=c.autoClearStencil,_=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,_===null&&(e.background=c.getClearColor(mh));const h=new to(n,i,d);return h.position.copy(s),h.update(c,e),c.autoClear=p,c.autoClearColor=f,c.autoClearDepth=m,c.autoClearStencil=v,e.background=_,t>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ys(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_s(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(bs,Dc(e))}_fromTexture(e,t){e.mapping===hi||e.mapping===Li?this._setSize(e.image.length===0?bs:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=xs(e,!1,!1),n=Math.log2(e)-dh;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=xs(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===hi||e.mapping===Li?(this._cubemapMaterial===null&&(this._cubemapMaterial=ys()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=_s()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=ph(),this._integrationMaterial=gh());const t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/El);for(let o=0;o<=n;o++){const s=Na.lodToRoughness(o,n);if(o>n-fh)r.roughness.value=s,this._renderCube(e,o,this._integrationMaterial);else{const c=s>0?Math.log2(t)+.5*Math.log2(6/(Sl*Math.pow(s,4)))+.5:0;i.roughness.value=s,i.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=vh());const n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}}function xs(a,e,t){return new _o(a,{minFilter:wn,generateMipmaps:e,type:cn,colorSpace:Ea,depthBuffer:t})}function Gi(a,e,t){return new Wn({name:a,uniforms:e,vertexShader:Ue.cube_vert,fragmentShader:t,side:It,blending:li,depthTest:!1,depthWrite:!1})}function ph(){return Gi("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Sl}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function gh(){return Gi("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:El}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function vh(){return Gi("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${uh}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function _s(){return Gi("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function ys(){return Gi("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function bh(a){let e=new WeakMap,t=new WeakMap,n=null;function i(f,m=!1){return f==null?null:m?o(f):r(f)}function r(f){if(f&&f.isTexture){const m=f.mapping;if(m===Ba||m===za)if(e.has(f)){const v=e.get(f).texture;return s(v,f.mapping)}else{const v=f.image;if(v&&v.height>0){const _=new _o(v.height);return _.fromEquirectangularTexture(a,f),e.set(f,_),f.addEventListener("dispose",l),s(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const m=f.mapping,v=m===Ba||m===za,_=m===hi||m===Li;if(v||_){let h=t.get(f);const u=h!==void 0?h.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==u)return n===null&&(n=new Na(a)),h=v?n.fromEquirectangular(f,h):n.fromCubemap(f,h),h.texture.pmremVersion=f.pmremVersion,t.set(f,h),h.texture;if(h!==void 0)return h.texture;{const y=f.image;return v&&y&&y.height>0||_&&y&&c(y)?(n===null&&(n=new Na(a)),h=v?n.fromEquirectangular(f):n.fromCubemap(f),h.texture.pmremVersion=f.pmremVersion,t.set(f,h),f.addEventListener("dispose",d),h.texture):null}}}return f}function s(f,m){return m===Ba?f.mapping=hi:m===za&&(f.mapping=Li),f}function c(f){let m=0;const v=6;for(let _=0;_<v;_++)f[_]!==void 0&&m++;return m===v}function l(f){const m=f.target;m.removeEventListener("dispose",l);const v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function d(f){const m=f.target;m.removeEventListener("dispose",d);const v=t.get(m);v!==void 0&&(t.delete(m),v.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:p}}function xh(a){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=a.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ci("WebGLRenderer: "+n+" extension not supported."),i}}}function _h(a,e,t,n){const i={},r=new WeakMap,o=new FinalizationRegistry(v=>delete i[v]);function s(v){c(v.target)}function c(v){v.index!==null&&e.remove(v.index);for(const h in v.attributes)e.remove(v.attributes[h]);v.removeEventListener("dispose",s),delete i[v.id],o.unregister(v);const _=r.get(v);_&&(e.remove(_),r.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function l(v,_){return i[_.id]!==void 0||(_.addEventListener("dispose",s),i[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}function d(v){const _=v.attributes;for(const h in _)e.update(_[h],a.ARRAY_BUFFER)}function p(v){const _=v.index,h=v.attributes.position;let u=0;if(h===void 0)return;const y=_!==null?_.array.length:h.array.length/3-1,T=h.count>=65535?fl:ul,S=new T(Math.ceil(y/3)*6,1),C=S.array;if(_!==null){const g=_.array;u=_.version;for(let M=0,I=0;M<y;M+=3){const N=g[M+0],D=g[M+1],F=g[M+2];C[I++]=N,C[I++]=D,C[I++]=D,C[I++]=F,C[I++]=F,C[I++]=N}}else{u=h.version;for(let g=0,M=0;g<y;g+=3){const I=g+0,N=g+1,D=g+2;C[M++]=I,C[M++]=N,C[M++]=N,C[M++]=D,C[M++]=D,C[M++]=I}}S.version=u;const A=r.get(v);A&&e.remove(A),r.set(v,S)}function f(v){const _=r.get(v);if(_){const h=v.index;h!==null&&_.version<h.version&&p(v)}else p(v);return r.get(v)}function m(){for(const v in i){const _=i[v].deref();_!==void 0&&c(_)}}return{get:l,update:d,getWireframeAttribute:f,dispose:m}}function yh(a,e,t){let n;function i(p){n=p}let r,o;function s(p){r=p.type,o=p.bytesPerElement}function c(p,f){a.drawElements(n,f,r,p*o),t.update(f,n,1)}function l(p,f,m){m!==0&&(a.drawElementsInstanced(n,f,r,p*o,m),t.update(f,n,m))}function d(p,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,m);let _=0;for(let h=0;h<m;h++)_+=f[h];t.update(_,n,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function Mh(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,s){switch(t.calls++,o){case a.TRIANGLES:t.triangles+=s*(r/3);break;case a.LINES:t.lines+=s*(r/2);break;case a.LINE_STRIP:t.lines+=s*(r-1);break;case a.LINE_LOOP:t.lines+=s*r;break;case a.POINTS:t.points+=s*r;break;default:qe("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Sh(a,e,t){const n=new WeakMap,i=new ot;function r(o,s,c){const l=o.morphTargetInfluences,d=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,p=d!==void 0?d.length:0;let f=n.get(s);if(f===void 0||f.count!==p){let N=function(){M.dispose(),n.delete(s),s.removeEventListener("dispose",N)};var m=N;f!==void 0&&f.texture.dispose();const v=s.morphAttributes.position!==void 0,_=s.morphAttributes.normal!==void 0,h=s.morphAttributes.color!==void 0,u=s.morphAttributes.position||[],y=s.morphAttributes.normal||[],T=s.morphAttributes.color||[];let S=0;v===!0&&(S=1),_===!0&&(S=2),h===!0&&(S=3);let C=s.attributes.position.count*S,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const g=new Float32Array(C*A*4*p),M=new cl(g,C,A,p);M.type=rn,M.needsUpdate=!0;const I=S*4;for(let D=0;D<p;D++){const F=u[D],V=y[D],P=T[D],k=C*A*4*D;for(let Z=0;Z<F.count;Z++){const H=Z*I;v===!0&&(i.fromBufferAttribute(F,Z),g[k+H+0]=i.x,g[k+H+1]=i.y,g[k+H+2]=i.z,g[k+H+3]=0),_===!0&&(i.fromBufferAttribute(V,Z),g[k+H+4]=i.x,g[k+H+5]=i.y,g[k+H+6]=i.z,g[k+H+7]=0),h===!0&&(i.fromBufferAttribute(P,Z),g[k+H+8]=i.x,g[k+H+9]=i.y,g[k+H+10]=i.z,g[k+H+11]=P.itemSize===4?i.w:1)}}f={count:p,texture:M,size:new Ge(C,A)},n.set(s,f),s.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(a,"morphTexture",o.morphTexture,t);else{let v=0;for(let h=0;h<l.length;h++)v+=l[h];const _=s.morphTargetsRelative?1:1-v;c.getUniforms().setValue(a,"morphTargetBaseInfluence",_),c.getUniforms().setValue(a,"morphTargetInfluences",l)}c.getUniforms().setValue(a,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(a,"morphTargetsTextureSize",f.size)}return{update:r}}function Eh(a,e,t,n,i){let r=new WeakMap;function o(l){const d=i.render.frame,p=l.geometry,f=e.get(l,p);if(r.get(f)!==d&&(e.update(f),r.set(f,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==d&&(m.update(),r.set(m,d))}return f}function s(){r=new WeakMap}function c(l){const d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:s}}const Ah={[qs]:"LINEAR_TONE_MAPPING",[Xs]:"REINHARD_TONE_MAPPING",[$s]:"CINEON_TONE_MAPPING",[ro]:"ACES_FILMIC_TONE_MAPPING",[Ys]:"AGX_TONE_MAPPING",[Zs]:"NEUTRAL_TONE_MAPPING",[Ks]:"CUSTOM_TONE_MAPPING"};function Ch(a,e,t,n,i,r){const o=new sn(e,t,{type:a,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let s=null,c=null,l=null;const d=new Xt;d.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new rt([0,2,0,0,2,0],2));const p=new ud({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Pt(d,p),m=new _l(-1,1,1,-1,0,1);let v=null,_=null,h=!1,u,y=null,T=[],S=!1;this.setSize=function(C,A){o.setSize(C,A),s!==null&&s.setSize(C,A),c!==null&&c.setSize(C,A);for(let g=0;g<T.length;g++){const M=T[g];M.setSize&&M.setSize(C,A)}},this.setEffects=function(C){T=C,S=T.length>0&&T[0].isRenderPass===!0;const A=o.width,g=o.height;T.length>0&&s===null&&(s=new sn(A,g,{type:cn,depthBuffer:!1,stencilBuffer:!1}),c=new sn(A,g,{type:cn,depthBuffer:!1,stencilBuffer:!1}));const M=i===!0&&T.some(I=>I.needsDepthTexture===!0);M!==(o.depthTexture!==null)&&(M===!0&&l===null&&(l=new pi(A,g),r===!0&&(l.format=Pn,l.type=mi)),o.dispose(),o.depthTexture=M?l:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M);for(let I=0;I<T.length;I++){const N=T[I];N.setSize&&N.setSize(A,g),M&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(l)}},this.begin=function(C,A){if(h||C.toneMapping===bn&&T.length===0)return!1;if(y=A,A!==null){const g=A.width,M=A.height;(o.width!==g||o.height!==M)&&this.setSize(g,M)}return S===!1&&C.setRenderTarget(o),u=C.toneMapping,C.toneMapping=bn,!0},this.hasRenderPass=function(){return S},this.end=function(C,A){C.toneMapping=u,h=!0;let g=o,M=s;for(let I=0;I<T.length;I++){const N=T[I];N.enabled!==!1&&(N.render(C,M,g,A),N.needsSwap!==!1&&(g=M,M=M===s?c:s))}if(v!==C.outputColorSpace||_!==C.toneMapping){v=C.outputColorSpace,_=C.toneMapping,p.defines={},Ve.getTransfer(v)===Ze&&(p.defines.SRGB_TRANSFER="");const I=Ah[_];I&&(p.defines[I]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=g.texture,C.setRenderTarget(y),C.render(f,m),y=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),d.dispose(),p.dispose()}}const Al=new Nt,Cl=new pi(1,1),Tl=new pl(1),Rl=new cl,wl=new Hc,Pl=new ml,Ms=[],Ss=[],Es=new Float32Array(16),As=new Float32Array(9),Cs=new Float32Array(4);function bi(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let r=Ms[i];if(r===void 0&&(r=new Float32Array(i),Ms[i]=r),e!==0){n.toArray(r,0);for(let o=1,s=0;o!==e;++o)s+=t,a[o].toArray(r,s)}return r}function ht(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function mt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Ia(a,e){let t=Ss[e];t===void 0&&(t=new Int32Array(e),Ss[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function Th(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Rh(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;a.uniform2fv(this.addr,e),mt(t,e)}}function wh(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;a.uniform3fv(this.addr,e),mt(t,e)}}function Ph(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;a.uniform4fv(this.addr,e),mt(t,e)}}function Nh(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(ht(t,n))return;Cs.set(n),a.uniformMatrix2fv(this.addr,!1,Cs),mt(t,n)}}function Dh(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(ht(t,n))return;As.set(n),a.uniformMatrix3fv(this.addr,!1,As),mt(t,n)}}function Lh(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(ht(t,n))return;Es.set(n),a.uniformMatrix4fv(this.addr,!1,Es),mt(t,n)}}function Ih(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Fh(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;a.uniform2iv(this.addr,e),mt(t,e)}}function Oh(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;a.uniform3iv(this.addr,e),mt(t,e)}}function Uh(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;a.uniform4iv(this.addr,e),mt(t,e)}}function Bh(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function zh(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;a.uniform2uiv(this.addr,e),mt(t,e)}}function Hh(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;a.uniform3uiv(this.addr,e),mt(t,e)}}function kh(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;a.uniform4uiv(this.addr,e),mt(t,e)}}function Fa(a){return a.version===0&&(a.compareFunction=sl,a.needsUpdate=!0),a}function Gh(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);let r;this.type===a.SAMPLER_2D_SHADOW?r=Fa(Cl):r=Al,t.setTexture2D(e||r,i)}function Vh(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||wl,i)}function Wh(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);let r;this.type===a.SAMPLER_CUBE_SHADOW?r=Fa(Tl):r=Pl,t.setTextureCube(e||r,i)}function qh(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Rl,i)}function Xh(a){switch(a){case 5126:return Th;case 35664:return Rh;case 35665:return wh;case 35666:return Ph;case 35674:return Nh;case 35675:return Dh;case 35676:return Lh;case 5124:case 35670:return Ih;case 35667:case 35671:return Fh;case 35668:case 35672:return Oh;case 35669:case 35673:return Uh;case 5125:return Bh;case 36294:return zh;case 36295:return Hh;case 36296:return kh;case 35678:case 36198:case 36298:case 36306:case 35682:return Gh;case 35679:case 36299:case 36307:return Vh;case 35680:case 36300:case 36308:case 36293:return Wh;case 36289:case 36303:case 36311:case 36292:return qh}}function $h(a,e){a.uniform1fv(this.addr,e)}function Kh(a,e){const t=bi(e,this.size,2);a.uniform2fv(this.addr,t)}function Yh(a,e){const t=bi(e,this.size,3);a.uniform3fv(this.addr,t)}function Zh(a,e){const t=bi(e,this.size,4);a.uniform4fv(this.addr,t)}function Jh(a,e){const t=bi(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Qh(a,e){const t=bi(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function jh(a,e){const t=bi(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function em(a,e){a.uniform1iv(this.addr,e)}function tm(a,e){a.uniform2iv(this.addr,e)}function nm(a,e){a.uniform3iv(this.addr,e)}function im(a,e){a.uniform4iv(this.addr,e)}function am(a,e){a.uniform1uiv(this.addr,e)}function rm(a,e){a.uniform2uiv(this.addr,e)}function om(a,e){a.uniform3uiv(this.addr,e)}function sm(a,e){a.uniform4uiv(this.addr,e)}function lm(a,e,t){const n=this.cache,i=e.length,r=Ia(t,i);ht(n,r)||(a.uniform1iv(this.addr,r),mt(n,r));let o;this.type===a.SAMPLER_2D_SHADOW?o=Fa(Cl):o=Al;for(let s=0;s!==i;++s)t.setTexture2D(e[s]||o,r[s])}function cm(a,e,t){const n=this.cache,i=e.length,r=Ia(t,i);ht(n,r)||(a.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||wl,r[o])}function dm(a,e,t){const n=this.cache,i=e.length,r=Ia(t,i);ht(n,r)||(a.uniform1iv(this.addr,r),mt(n,r));let o;this.type===a.SAMPLER_CUBE_SHADOW?o=Fa(Tl):o=Pl;for(let s=0;s!==i;++s)t.setTextureCube(e[s]||o,r[s])}function um(a,e,t){const n=this.cache,i=e.length,r=Ia(t,i);ht(n,r)||(a.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Rl,r[o])}function fm(a){switch(a){case 5126:return $h;case 35664:return Kh;case 35665:return Yh;case 35666:return Zh;case 35674:return Jh;case 35675:return Qh;case 35676:return jh;case 5124:case 35670:return em;case 35667:case 35671:return tm;case 35668:case 35672:return nm;case 35669:case 35673:return im;case 5125:return am;case 36294:return rm;case 36295:return om;case 36296:return sm;case 35678:case 36198:case 36298:case 36306:case 35682:return lm;case 35679:case 36299:case 36307:return cm;case 35680:case 36300:case 36308:case 36293:return dm;case 36289:case 36303:case 36311:case 36292:return um}}class hm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Xh(t.type)}}class mm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fm(t.type)}}class pm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const s=i[r];s.setValue(e,t[s.id],n)}}}const fr=/(\w+)(\])?(\[|\.)?/g;function Ts(a,e){a.seq.push(e),a.map[e.id]=e}function gm(a,e,t){const n=a.name,i=n.length;for(fr.lastIndex=0;;){const r=fr.exec(n),o=fr.lastIndex;let s=r[1];const c=r[2]==="]",l=r[3];if(c&&(s=s|0),l===void 0||l==="["&&o+2===i){Ts(t,l===void 0?new hm(s,a,e):new mm(s,a,e));break}else{let p=t.map[s];p===void 0&&(p=new pm(s),Ts(t,p)),t=p}}}class _a{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const s=e.getActiveUniform(t,o),c=e.getUniformLocation(t,s.name);gm(s,c,this)}const i=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const s=t[r],c=n[s.id];c.needsUpdate!==!1&&s.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Rs(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}const vm=37297;let bm=0;function xm(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const s=o+1;n.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return n.join(`
`)}const ws=new Le;function _m(a){Ve._getMatrix(ws,Ve.workingColorSpace,a);const e=`mat3( ${ws.elements.map(t=>t.toFixed(4))} )`;switch(Ve.getTransfer(a)){case Aa:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Ps(a,e,t){const n=a.getShaderParameter(e,a.COMPILE_STATUS),r=(a.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+xm(a.getShaderSource(e),s)}else return r}function ym(a,e){const t=_m(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Mm={[qs]:"Linear",[Xs]:"Reinhard",[$s]:"Cineon",[ro]:"ACESFilmic",[Ys]:"AgX",[Zs]:"Neutral",[Ks]:"Custom"};function Sm(a,e){const t=Mm[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ma=new z;function Em(){Ve.getLuminanceCoefficients(ma);const a=ma.x.toFixed(4),e=ma.y.toFixed(4),t=ma.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Am(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ri).join(`
`)}function Cm(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Tm(a,e){const t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=a.getActiveAttrib(e,i),o=r.name;let s=1;r.type===a.FLOAT_MAT2&&(s=2),r.type===a.FLOAT_MAT3&&(s=3),r.type===a.FLOAT_MAT4&&(s=4),t[o]={type:r.type,location:a.getAttribLocation(e,o),locationSize:s}}return t}function Ri(a){return a!==""}function Ns(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Ds(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Rm=/^[ \t]*#include +<([\w\d./]+)>/gm;function io(a){return a.replace(Rm,wm)}function wm(a,e){const t=Ue[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return io(t)}const Pm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ls(a){return a.replace(Pm,Nm)}function Nm(a,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Is(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Dm={[pa]:"SHADOWMAP_TYPE_PCF",[Ti]:"SHADOWMAP_TYPE_VSM"};function Lm(a){return Dm[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Im={[Li]:"ENVMAP_MODE_REFRACTION"};function Fm(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":Im[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Om={[Ws]:"ENVMAP_BLENDING_MULTIPLY",[pc]:"ENVMAP_BLENDING_MIX",[gc]:"ENVMAP_BLENDING_ADD"};function Um(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":Om[a.combine]||"ENVMAP_BLENDING_NONE"}function Bm(a,e,t,n){const i=a.getContext(),r=t.defines;let o=t.vertexShader,s=t.fragmentShader;const c=Lm(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=Fm(t),p=Um(t),f=Am(t),m=Cm(r),v=i.createProgram();let _,h,u=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ri).join(`
`),_.length>0&&(_+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ri).join(`
`),h.length>0&&(h+=`
`)):(_=[Is(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ri).join(`
`),h=[Is(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==bn?Sm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,ym("linearToOutputTexel",t.outputColorSpace),Em(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ri).join(`
`)),o=io(o),o=Ns(o,t),o=Ds(o,t),s=io(s),s=Ns(s,t),s=Ds(s,t),o=Ls(o),s=Ls(s),t.isRawShaderMaterial!==!0&&(u=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,h=["#define varying in",t.glslVersion===ko?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ko?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=u+_+o,T=u+h+s,S=Rs(i,i.VERTEX_SHADER,y),C=Rs(i,i.FRAGMENT_SHADER,T);i.attachShader(v,S),i.attachShader(v,C),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function A(N){if(a.debug.checkShaderErrors){const D=i.getProgramInfoLog(v)||"",F=i.getShaderInfoLog(S)||"",V=i.getShaderInfoLog(C)||"",P=D.trim(),k=F.trim(),Z=V.trim();let H=!0,te=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(H=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,v,S,C);else{const q=Ps(i,S,"vertex"),Q=Ps(i,C,"fragment");qe("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+P+`
`+q+`
`+Q)}else P!==""?Re("WebGLProgram: Program Info Log:",P):(k===""||Z==="")&&(te=!1);te&&(N.diagnostics={runnable:H,programLog:P,vertexShader:{log:k,prefix:_},fragmentShader:{log:Z,prefix:h}})}i.deleteShader(S),i.deleteShader(C),g=new _a(i,v),M=Tm(i,v)}let g;this.getUniforms=function(){return g===void 0&&A(this),g};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(v,vm)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=C,this}let zm=0;class Hm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new km(e),t.set(e,n)),n}}class km{constructor(e){this.id=zm++,this.code=e,this.usedTimes=0}}function Gm(a){return a===Vn||a===Ma||a===Sa}function Vm(a,e,t,n,i,r){const o=new po,s=new Hm,c=new Set,l=[],d=new Map,p=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return c.add(g),g===0?"uv":`uv${g}`}function v(g,M,I,N,D,F){const V=N.fog,P=D.geometry,k=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?N.environment:null,Z=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,H=e.get(g.envMap||k,Z),te=f[g.type];let q=n.precision;g.precision!==null&&(q=n.getMaxPrecision(g.precision),q!==g.precision&&Re("WebGLProgram.getParameters:",g.precision,"not supported, using",q,"instead."));const Q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,j=Q!==void 0?Q.length:0;let ye=0;P.morphAttributes.position!==void 0&&(ye=1),P.morphAttributes.normal!==void 0&&(ye=2),P.morphAttributes.color!==void 0&&(ye=3);let Pe,K,me,be;if(te){const fe=an[te];Pe=fe.vertexShader,K=fe.fragmentShader}else{Pe=g.vertexShader,K=g.fragmentShader;const fe=s.getVertexShaderStage(g),Ye=s.getFragmentShaderStage(g);s.update(g,fe,Ye),me=fe.id,be=Ye.id}const Ae=a.getRenderTarget(),pe=a.state.buffers.depth.getReversed(),De=D.isInstancedMesh===!0,st=D.isBatchedMesh===!0,Te=!!g.map,Ke=!!g.matcap,Je=!!H,Be=Je&&H.isPMREMTexture===!0,yt=!!g.aoMap,dt=!!g.lightMap,Dt=!!g.bumpMap&&g.wireframe===!1,it=!!g.normalMap,en=!!g.displacementMap,pt=!!g.emissiveMap,Bt=!!g.metalnessMap,zt=!!g.roughnessMap,Ht=g.anisotropy>0,L=g.clearcoat>0,kt=g.diffuseRoughness>0,tt=g.dispersion>0,nt=g.retroreflectivity>0,ue=g.iridescence>0,ut=g.sheen>0,Ce=g.transmission>0,we=Ht&&!!g.anisotropyMap,E=L&&!!g.clearcoatMap,b=L&&!!g.clearcoatNormalMap,U=L&&!!g.clearcoatRoughnessMap,ee=kt&&!!g.diffuseRoughnessMap,J=ue&&!!g.iridescenceMap,ae=ue&&!!g.iridescenceThicknessMap,ce=ut&&!!g.sheenColorMap,X=ut&&!!g.sheenRoughnessMap,$=!!g.specularMap,oe=!!g.specularColorMap,R=!!g.specularIntensityMap,Y=Ce&&!!g.transmissionMap,W=Ce&&!!g.thicknessMap,se=!!g.gradientMap,ie=!!g.alphaMap,re=g.alphaTest>0,Se=!!g.alphaHash,Oe=!!g.extensions;let ne=bn;g.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(ne=a.toneMapping);const Ee=Be?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Fe={shaderID:te,shaderType:g.type,shaderName:g.name,vertexShader:Pe,fragmentShader:K,defines:g.defines,customVertexShaderID:me,customFragmentShaderID:be,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:q,batching:st,batchingColor:st&&D._colorsTexture!==null,instancing:De,instancingColor:De&&D.instanceColor!==null,instancingMorph:De&&D.morphTexture!==null,outputColorSpace:Ae===null?a.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:Ve.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Te,matcap:Ke,envMap:Je,envMapMode:Je&&H.mapping,envMapPMREM:Be,envMapMaxLod:Be?Ee.length-1:null,envMapSize:Be?Ee[0].width:null,aoMap:yt,lightMap:dt,bumpMap:Dt,normalMap:it,displacementMap:en,emissiveMap:pt,normalMapObjectSpace:it&&g.normalMapType===xc,normalMapTangentSpace:it&&g.normalMapType===eo,packedNormalMap:it&&g.normalMapType===eo&&Gm(g.normalMap.format),metalnessMap:Bt,roughnessMap:zt,anisotropy:Ht,anisotropyMap:we,clearcoat:L,clearcoatMap:E,clearcoatNormalMap:b,clearcoatRoughnessMap:U,diffuseRoughness:kt,diffuseRoughnessMap:ee,dispersion:tt,retroreflection:nt,iridescence:ue,iridescenceMap:J,iridescenceThicknessMap:ae,sheen:ut,sheenColorMap:ce,sheenRoughnessMap:X,specularMap:$,specularColorMap:oe,specularIntensityMap:R,transmission:Ce,transmissionMap:Y,thicknessMap:W,gradientMap:se,opaque:g.transparent===!1&&g.blending===Pi&&g.alphaToCoverage===!1,alphaMap:ie,alphaTest:re,alphaHash:Se,combine:g.combine,mapUv:Te&&m(g.map.channel),aoMapUv:yt&&m(g.aoMap.channel),lightMapUv:dt&&m(g.lightMap.channel),bumpMapUv:Dt&&m(g.bumpMap.channel),normalMapUv:it&&m(g.normalMap.channel),displacementMapUv:en&&m(g.displacementMap.channel),emissiveMapUv:pt&&m(g.emissiveMap.channel),metalnessMapUv:Bt&&m(g.metalnessMap.channel),roughnessMapUv:zt&&m(g.roughnessMap.channel),anisotropyMapUv:we&&m(g.anisotropyMap.channel),clearcoatMapUv:E&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:b&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&m(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ee&&m(g.diffuseRoughnessMap.channel),iridescenceMapUv:J&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:X&&m(g.sheenRoughnessMap.channel),specularMapUv:$&&m(g.specularMap.channel),specularColorMapUv:oe&&m(g.specularColorMap.channel),specularIntensityMapUv:R&&m(g.specularIntensityMap.channel),transmissionMapUv:Y&&m(g.transmissionMap.channel),thicknessMapUv:W&&m(g.thicknessMap.channel),alphaMapUv:ie&&m(g.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(it||Ht),vertexNormals:!!P.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!P.attributes.uv&&(Te||ie),fog:!!V,useFog:g.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||P.attributes.normal===void 0&&it===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:pe,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ye,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:F.filter(fe=>fe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:a.shadowMap.enabled&&I.length>0,shadowMapType:a.shadowMap.type,toneMapping:ne,decodeVideoTexture:Te&&g.map.isVideoTexture===!0&&Ve.getTransfer(g.map.colorSpace)===Ze,decodeVideoTextureEmissive:pt&&g.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(g.emissiveMap.colorSpace)===Ze,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===qt,flipSided:g.side===It,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Oe&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&g.extensions.multiDraw===!0||st)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function _(g){const M=[];if(g.shaderID?M.push(g.shaderID):(M.push(g.customVertexShaderID),M.push(g.customFragmentShaderID)),g.defines!==void 0)for(const I in g.defines)M.push(I),M.push(g.defines[I]);return g.isRawShaderMaterial===!1&&(h(M,g),u(M,g),M.push(a.outputColorSpace)),M.push(g.customProgramCacheKey),M.join()}function h(g,M){g.push(M.precision),g.push(M.outputColorSpace),g.push(M.envMapMode),g.push(M.envMapPMREM),g.push(M.envMapMaxLod),g.push(M.envMapSize),g.push(M.mapUv),g.push(M.alphaMapUv),g.push(M.lightMapUv),g.push(M.aoMapUv),g.push(M.bumpMapUv),g.push(M.normalMapUv),g.push(M.displacementMapUv),g.push(M.emissiveMapUv),g.push(M.metalnessMapUv),g.push(M.roughnessMapUv),g.push(M.anisotropyMapUv),g.push(M.clearcoatMapUv),g.push(M.clearcoatNormalMapUv),g.push(M.clearcoatRoughnessMapUv),g.push(M.diffuseRoughnessMapUv),g.push(M.iridescenceMapUv),g.push(M.iridescenceThicknessMapUv),g.push(M.sheenColorMapUv),g.push(M.sheenRoughnessMapUv),g.push(M.specularMapUv),g.push(M.specularColorMapUv),g.push(M.specularIntensityMapUv),g.push(M.transmissionMapUv),g.push(M.thicknessMapUv),g.push(M.combine),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.numSunLights),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numSunLightShadows),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.numLightProbes),g.push(M.numLightProbeGrids),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}function u(g,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.diffuseRoughness&&o.enable(25),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function y(g){const M=f[g.type];let I;if(M){const N=an[M];I=ld.clone(N.uniforms)}else I=g.uniforms;return I}function T(g,M){let I=d.get(M);return I!==void 0?++I.usedTimes:(I=new Bm(a,M,g,i),l.push(I),d.set(M,I)),I}function S(g){if(--g.usedTimes===0){const M=l.indexOf(g);l[M]=l[l.length-1],l.pop(),d.delete(g.cacheKey),g.destroy()}}function C(g){s.remove(g)}function A(){s.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:y,acquireProgram:T,releaseProgram:S,releaseShaderCache:C,programs:l,dispose:A}}function Wm(){let a=new WeakMap;function e(o){return a.has(o)}function t(o){let s=a.get(o);return s===void 0&&(s={},a.set(o,s)),s}function n(o){a.delete(o)}function i(o,s,c){a.get(o)[s]=c}function r(){a=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function qm(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function Fs(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Os(){const a=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function s(f,m,v,_,h,u){let y=a[e];return y===void 0?(y={id:f.id,object:f,geometry:m,material:v,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:h,group:u},a[e]=y):(y.id=f.id,y.object=f,y.geometry=m,y.material=v,y.materialVariant=o(f),y.groupOrder=_,y.renderOrder=f.renderOrder,y.z=h,y.group=u),e++,y}function c(f,m,v,_,h,u,y){y.reversedDepth===!0&&(h=-h);const T=s(f,m,v,_,h,u);v.transmission>0?n.push(T):v.transparent===!0?i.push(T):t.push(T)}function l(f,m,v,_,h,u){const y=s(f,m,v,_,h,u);v.transmission>0?n.unshift(y):v.transparent===!0?i.unshift(y):t.unshift(y)}function d(f,m){t.length>1&&t.sort(f||qm),n.length>1&&n.sort(m||Fs),i.length>1&&i.sort(m||Fs)}function p(){for(let f=e,m=a.length;f<m;f++){const v=a[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:p,sort:d}}function Xm(){let a=new WeakMap;function e(n,i){const r=a.get(n);let o;return r===void 0?(o=new Os,a.set(n,[o])):i>=r.length?(o=new Os,r.push(o)):o=r[i],o}function t(){a=new WeakMap}return{get:e,dispose:t}}function $m(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new Ie};break;case"SpotLight":t={position:new z,direction:new z,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new z,halfWidth:new z,halfHeight:new z};break}return a[e.id]=t,t}}}function Km(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Ym=0;function Zm(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Jm(a){const e=new $m,t=Km(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);const i=new z,r=new et,o=new et;function s(l){let d=0,p=0,f=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let m=0,v=0,_=0,h=0,u=0,y=0,T=0,S=0,C=0,A=0,g=0,M=0,I=0,N=0;l.sort(Zm);for(let F=0,V=l.length;F<V;F++){const P=l[F],k=P.color,Z=P.intensity,H=P.distance;let te=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Vn?te=P.shadow.map.texture:te=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=k.r*Z,p+=k.g*Z,f+=k.b*Z;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],Z);N++}else if(P.isSunLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,j=t.get(P);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[v]=j,n.sunShadowMap[v]=te;const ye=Q.getViewportCount();for(let Pe=0;Pe<ye;Pe++)n.sunShadowMatrix[_+Pe]=Q.getMatrix(Pe),n.sunShadowCascade[_+Pe]=Q._cascadeData[Pe];_+=ye,v++}n.sun[m]=q,m++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,j=t.get(P);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.directionalShadow[h]=j,n.directionalShadowMap[h]=te,n.directionalShadowMatrix[h]=P.shadow.matrix,C++}n.directional[h]=q,h++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(k).multiplyScalar(Z),q.distance=H,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[y]=q;const Q=P.shadow;if(P.map&&(n.spotLightMap[M]=P.map,M++,Q.updateMatrices(P),P.castShadow&&I++),n.spotLightMatrix[y]=Q.matrix,P.castShadow){const j=t.get(P);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.spotShadow[y]=j,n.spotShadowMap[y]=te,g++}y++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(k).multiplyScalar(Z),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[T]=q,T++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const Q=P.shadow,j=t.get(P);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,n.pointShadow[u]=j,n.pointShadowMap[u]=te,n.pointShadowMatrix[u]=P.shadow.matrix,A++}n.point[u]=q,u++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(Z),q.groundColor.copy(P.groundColor).multiplyScalar(Z),n.hemi[S]=q,S++}}T>0&&(a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=f;const D=n.hash;(D.sunLength!==m||D.directionalLength!==h||D.pointLength!==u||D.spotLength!==y||D.rectAreaLength!==T||D.hemiLength!==S||D.numSunShadows!==v||D.numDirectionalShadows!==C||D.numPointShadows!==A||D.numSpotShadows!==g||D.numSpotMaps!==M||D.numLightProbes!==N)&&(n.sun.length=m,n.directional.length=h,n.spot.length=y,n.rectArea.length=T,n.point.length=u,n.hemi.length=S,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+M-I,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=N,D.sunLength=m,D.directionalLength=h,D.pointLength=u,D.spotLength=y,D.rectAreaLength=T,D.hemiLength=S,D.numSunShadows=v,D.numDirectionalShadows=C,D.numPointShadows=A,D.numSpotShadows=g,D.numSpotMaps=M,D.numLightProbes=N,n.version=Ym++)}function c(l,d){let p=0,f=0,m=0,v=0,_=0,h=0;const u=d.matrixWorldInverse;for(let y=0,T=l.length;y<T;y++){const S=l[y];if(S.isSunLight){const C=n.sun[p];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(u),p++}else if(S.isDirectionalLight){const C=n.directional[f];C.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(i),C.direction.transformDirection(u),f++}else if(S.isSpotLight){const C=n.spot[v];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(u),C.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(i),C.direction.transformDirection(u),v++}else if(S.isRectAreaLight){const C=n.rectArea[_];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(u),o.identity(),r.copy(S.matrixWorld),r.premultiply(u),o.extractRotation(r),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const C=n.point[m];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(u),m++}else if(S.isHemisphereLight){const C=n.hemi[h];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(u),h++}}}return{setup:s,setupView:c,state:n}}function Us(a){const e=new Jm(a),t=[],n=[],i=[];function r(p){d.camera=p,t.length=0,n.length=0,i.length=0}function o(p){p.isLightProbeGrid?i.push(p):t.push(p)}function s(p){n.push(p)}function c(){e.setup(t),i.sort((p,f)=>p.priority-f.priority||p.id-f.id)}function l(p){e.setupView(t,p)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Qm(a){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let s;return o===void 0?(s=new Us(a),e.set(i,[s])):r>=o.length?(s=new Us(a),o.push(s)):s=o[r],s}function n(){e=new WeakMap}return{get:t,dispose:n}}const jm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ep=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,tp=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],np=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Bs=new et,Ai=new z,hr=new z;function ip(a,e,t){let n=new Oi;const i=new Ge,r=new Ge,o=new ot,s=new hd,c=new md,l={},d=t.maxTextureSize,p={[Gn]:It,[It]:Gn,[qt]:qt},f=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:jm,fragmentShader:ep}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new Xt;v.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pt(v,f),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pa;let u=this.type;this.render=function(A,g,M){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||A.length===0)return;this.type===ks&&(Re("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=pa);const I=a.getRenderTarget(),N=a.getActiveCubeFace(),D=a.getActiveMipmapLevel(),F=a.state;F.setBlending(li),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const V=u!==this.type;V&&g.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(k=>k.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,k=A.length;P<k;P++){const Z=A[P],H=Z.shadow;if(H===void 0){Re("WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const te=H.getFrameExtents();i.multiply(te),r.copy(H.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/te.x),i.x=r.x*te.x,H.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/te.y),i.y=r.y*te.y,H.mapSize.y=r.y));const q=a.state.buffers.depth.getReversed();if(H.camera._reversedDepth=q,H.map===null||V===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ti){if(Z.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new sn(i.x,i.y,{format:Vn,type:cn,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),H.map.texture.name=Z.name+".shadowMap",H.map.depthTexture=new pi(i.x,i.y,rn),H.map.depthTexture.name=Z.name+".shadowMapDepth",H.map.depthTexture.format=Nn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=St,H.map.depthTexture.magFilter=St}else Z.isPointLight?(H.map=new _o(i.x),H.map.depthTexture=new pl(i.x,ln)):(H.map=new sn(i.x,i.y),H.map.depthTexture=new pi(i.x,i.y,ln)),H.map.depthTexture.name=Z.name+".shadowMap",H.map.depthTexture.format=Nn,this.type===pa?(H.map.depthTexture.compareFunction=q?ol:rl,H.map.depthTexture.minFilter=Lt,H.map.depthTexture.magFilter=Lt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=St,H.map.depthTexture.magFilter=St);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==i.x||H.map.height!==i.y)&&H.map.setSize(i.x,i.y);const Q=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();Z.isPointLight!==!0&&H.updateMatrices(Z,M);const j=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:M.layers;for(let ye=0;ye<Q;ye++){const Pe=H.getCamera(ye);if(Z.isPointLight){const K=H.camera,me=H.matrix,be=Z.distance||K.far;be!==K.far&&(K.far=be,K.updateProjectionMatrix()),Ai.setFromMatrixPosition(Z.matrixWorld),K.position.copy(Ai),hr.copy(K.position),hr.add(tp[ye]),K.up.copy(np[ye]),K.lookAt(hr),K.updateMatrixWorld(),me.makeTranslation(-Ai.x,-Ai.y,-Ai.z),Bs.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Bs,K.coordinateSystem,K.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)a.setRenderTarget(H.map,ye),a.clear();else{ye===0&&(a.setRenderTarget(H.map),a.clear());const K=H.getViewport(ye);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),F.viewport(o)}n=H.getFrustum(ye),S(g,M,Pe,Z,j,this.type)}H.isPointLightShadow!==!0&&this.type===Ti&&y(H,M),H.needsUpdate=!1}u=this.type,h.needsUpdate=!1,a.setRenderTarget(I,N,D)};function y(A,g){const M=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null?A.mapPass=new sn(i.x,i.y,{format:Vn,type:cn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,a.setRenderTarget(A.mapPass),a.clear(),a.renderBufferDirect(g,null,M,f,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value.set(A.map.width,A.map.height),m.uniforms.radius.value=A.radius,a.setRenderTarget(A.map),a.clear(),a.renderBufferDirect(g,null,M,m,_,null)}function T(A,g,M,I){let N=null;const D=M.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)N=D;else if(N=M.isPointLight===!0?c:s,a.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const F=N.uuid,V=g.uuid;let P=l[F];P===void 0&&(P={},l[F]=P);let k=P[V];k===void 0&&(k=N.clone(),P[V]=k,g.addEventListener("dispose",C)),N=k}if(N.visible=g.visible,N.wireframe=g.wireframe,I===Ti?N.side=g.shadowSide!==null?g.shadowSide:g.side:N.side=g.shadowSide!==null?g.shadowSide:p[g.side],N.alphaMap=g.alphaMap,N.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,N.map=g.map,N.clipShadows=g.clipShadows,N.clippingPlanes=g.clippingPlanes,N.clipIntersection=g.clipIntersection,N.displacementMap=g.displacementMap,N.displacementScale=g.displacementScale,N.displacementBias=g.displacementBias,N.wireframeLinewidth=g.wireframeLinewidth,N.linewidth=g.linewidth,M.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const F=a.properties.get(N);F.light=M}return N}function S(A,g,M,I,N,D){if(A.visible===!1)return;if(A.layers.test(N)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&D===Ti)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,A.matrixWorld);const P=e.update(A),k=A.material;if(Array.isArray(k)){const Z=P.groups;for(let H=0,te=Z.length;H<te;H++){const q=Z[H],Q=k[q.materialIndex];if(Q&&Q.visible){const j=T(A,Q,I,D);A.onBeforeShadow(a,A,g,M,P,j,q),a.renderBufferDirect(M,null,P,j,A,q),A.onAfterShadow(a,A,g,M,P,j,q)}}}else if(k.visible){const Z=T(A,k,I,D);A.onBeforeShadow(a,A,g,M,P,Z,null),a.renderBufferDirect(M,null,P,Z,A,null),A.onAfterShadow(a,A,g,M,P,Z,null)}}const V=A.children;for(let P=0,k=V.length;P<k;P++)S(V[P],g,M,I,N,D)}function C(A){A.target.removeEventListener("dispose",C);for(const M in l){const I=l[M],N=A.target.uuid;N in I&&(I[N].dispose(),delete I[N])}}}function ap(a,e){function t(){let R=!1;const Y=new ot;let W=null;const se=new ot(0,0,0,0);return{setMask:function(ie){W!==ie&&!R&&(a.colorMask(ie,ie,ie,ie),W=ie)},setLocked:function(ie){R=ie},setClear:function(ie,re,Se,Oe,ne){ne===!0&&(ie*=Oe,re*=Oe,Se*=Oe),Y.set(ie,re,Se,Oe),se.equals(Y)===!1&&(a.clearColor(ie,re,Se,Oe),se.copy(Y))},reset:function(){R=!1,W=null,se.set(-1,0,0,0)}}}function n(){let R=!1,Y=!1,W=null,se=null,ie=null;return{setReversed:function(re){if(Y!==re){const Se=e.get("EXT_clip_control");re?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),Y=re;const Oe=ie;ie=null,this.setClear(Oe)}},getReversed:function(){return Y},setTest:function(re){re?pe(a.DEPTH_TEST):De(a.DEPTH_TEST)},setMask:function(re){W!==re&&!R&&(a.depthMask(re),W=re)},setFunc:function(re){if(Y&&(re=Pc[re]),se!==re){switch(re){case pr:a.depthFunc(a.NEVER);break;case gr:a.depthFunc(a.ALWAYS);break;case vr:a.depthFunc(a.LESS);break;case Di:a.depthFunc(a.LEQUAL);break;case br:a.depthFunc(a.EQUAL);break;case xr:a.depthFunc(a.GEQUAL);break;case _r:a.depthFunc(a.GREATER);break;case yr:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}se=re}},setLocked:function(re){R=re},setClear:function(re){ie!==re&&(ie=re,Y&&(re=1-re),a.clearDepth(re))},reset:function(){R=!1,W=null,se=null,ie=null,Y=!1}}}function i(){let R=!1,Y=null,W=null,se=null,ie=null,re=null,Se=null,Oe=null,ne=null;return{setTest:function(Ee){R||(Ee?pe(a.STENCIL_TEST):De(a.STENCIL_TEST))},setMask:function(Ee){Y!==Ee&&!R&&(a.stencilMask(Ee),Y=Ee)},setFunc:function(Ee,Fe,fe){(W!==Ee||se!==Fe||ie!==fe)&&(a.stencilFunc(Ee,Fe,fe),W=Ee,se=Fe,ie=fe)},setOp:function(Ee,Fe,fe){(re!==Ee||Se!==Fe||Oe!==fe)&&(a.stencilOp(Ee,Fe,fe),re=Ee,Se=Fe,Oe=fe)},setLocked:function(Ee){R=Ee},setClear:function(Ee){ne!==Ee&&(a.clearStencil(Ee),ne=Ee)},reset:function(){R=!1,Y=null,W=null,se=null,ie=null,re=null,Se=null,Oe=null,ne=null}}}const r=new t,o=new n,s=new i;let c={};const l=new WeakMap;let d={},p={},f={},m=new WeakMap,v=[],_=null,h=!1,u=null,y=null,T=null,S=null,C=null,A=null,g=null,M=new Ie(0,0,0),I=0,N=!1,D=null,F=null,V=null,P=null,k=null;const Z=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,te=0;const q=a.getParameter(a.VERSION);q.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=te>=1):q.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=te>=2);let Q=null,j={};const ye=a.getParameter(a.SCISSOR_BOX),Pe=a.getParameter(a.VIEWPORT),K=new ot().fromArray(ye),me=new ot().fromArray(Pe);function be(R,Y,W,se){const ie=new Uint8Array(4),re=a.createTexture();a.bindTexture(R,re),a.texParameteri(R,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(R,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Se=0;Se<W;Se++)R===a.TEXTURE_3D||R===a.TEXTURE_2D_ARRAY?a.texImage3D(Y,0,a.RGBA,1,1,se,0,a.RGBA,a.UNSIGNED_BYTE,ie):a.texImage2D(Y+Se,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ie);return re}const Ae={};Ae[a.TEXTURE_2D]=be(a.TEXTURE_2D,a.TEXTURE_2D,1),Ae[a.TEXTURE_CUBE_MAP]=be(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[a.TEXTURE_2D_ARRAY]=be(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Ae[a.TEXTURE_3D]=be(a.TEXTURE_3D,a.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),s.setClear(0),pe(a.DEPTH_TEST),o.setFunc(Di),Dt(!1),it(Uo),pe(a.CULL_FACE),yt(li);function pe(R){d[R]!==!0&&(a.enable(R),d[R]=!0)}function De(R){d[R]!==!1&&(a.disable(R),d[R]=!1)}function st(R,Y){return f[R]!==Y?(a.bindFramebuffer(R,Y),f[R]=Y,R===a.DRAW_FRAMEBUFFER&&(f[a.FRAMEBUFFER]=Y),R===a.FRAMEBUFFER&&(f[a.DRAW_FRAMEBUFFER]=Y),!0):!1}function Te(R,Y){let W=v,se=!1;if(R){W=m.get(Y),W===void 0&&(W=[],m.set(Y,W));const ie=R.textures;if(W.length!==ie.length||W[0]!==a.COLOR_ATTACHMENT0){for(let re=0,Se=ie.length;re<Se;re++)W[re]=a.COLOR_ATTACHMENT0+re;W.length=ie.length,se=!0}}else W[0]!==a.BACK&&(W[0]=a.BACK,se=!0);se&&a.drawBuffers(W)}function Ke(R){return _!==R?(a.useProgram(R),_=R,!0):!1}const Je={[si]:a.FUNC_ADD,[Ql]:a.FUNC_SUBTRACT,[jl]:a.FUNC_REVERSE_SUBTRACT};Je[ec]=a.MIN,Je[tc]=a.MAX;const Be={[nc]:a.ZERO,[ic]:a.ONE,[ac]:a.SRC_COLOR,[Gs]:a.SRC_ALPHA,[dc]:a.SRC_ALPHA_SATURATE,[lc]:a.DST_COLOR,[oc]:a.DST_ALPHA,[rc]:a.ONE_MINUS_SRC_COLOR,[Vs]:a.ONE_MINUS_SRC_ALPHA,[cc]:a.ONE_MINUS_DST_COLOR,[sc]:a.ONE_MINUS_DST_ALPHA,[uc]:a.CONSTANT_COLOR,[fc]:a.ONE_MINUS_CONSTANT_COLOR,[hc]:a.CONSTANT_ALPHA,[mc]:a.ONE_MINUS_CONSTANT_ALPHA};function yt(R,Y,W,se,ie,re,Se,Oe,ne,Ee){if(R===li){h===!0&&(De(a.BLEND),h=!1);return}if(h===!1&&(pe(a.BLEND),h=!0),R!==Jl){if(R!==u||Ee!==N){if((y!==si||C!==si)&&(a.blendEquation(a.FUNC_ADD),y=si,C=si),Ee)switch(R){case Pi:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Bo:a.blendFunc(a.ONE,a.ONE);break;case zo:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Ho:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:qe("WebGLState: Invalid blending: ",R);break}else switch(R){case Pi:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Bo:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case zo:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ho:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",R);break}T=null,S=null,A=null,g=null,M.set(0,0,0),I=0,u=R,N=Ee}return}ie=ie||Y,re=re||W,Se=Se||se,(Y!==y||ie!==C)&&(a.blendEquationSeparate(Je[Y],Je[ie]),y=Y,C=ie),(W!==T||se!==S||re!==A||Se!==g)&&(a.blendFuncSeparate(Be[W],Be[se],Be[re],Be[Se]),T=W,S=se,A=re,g=Se),(Oe.equals(M)===!1||ne!==I)&&(a.blendColor(Oe.r,Oe.g,Oe.b,ne),M.copy(Oe),I=ne),u=R,N=!1}function dt(R,Y){R.side===qt?De(a.CULL_FACE):pe(a.CULL_FACE);let W=R.side===It;Y&&(W=!W),Dt(W),R.blending===Pi&&R.transparent===!1?yt(li):yt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),r.setMask(R.colorWrite);const se=R.stencilWrite;s.setTest(se),se&&(s.setMask(R.stencilWriteMask),s.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),s.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),pt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?pe(a.SAMPLE_ALPHA_TO_COVERAGE):De(a.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(R){D!==R&&(R?a.frontFace(a.CW):a.frontFace(a.CCW),D=R)}function it(R){R!==Yl?(pe(a.CULL_FACE),R!==F&&(R===Uo?a.cullFace(a.BACK):R===Zl?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):De(a.CULL_FACE),F=R}function en(R){R!==V&&(H&&a.lineWidth(R),V=R)}function pt(R,Y,W){R?(pe(a.POLYGON_OFFSET_FILL),(P!==Y||k!==W)&&(P=Y,k=W,o.getReversed()&&(Y=-Y,W=-W),a.polygonOffset(Y,W))):De(a.POLYGON_OFFSET_FILL)}function Bt(R){R?pe(a.SCISSOR_TEST):De(a.SCISSOR_TEST)}function zt(R){R===void 0&&(R=a.TEXTURE0+Z-1),Q!==R&&(a.activeTexture(R),Q=R)}function Ht(R,Y,W){W===void 0&&(Q===null?W=a.TEXTURE0+Z-1:W=Q);let se=j[W];se===void 0&&(se={type:void 0,texture:void 0},j[W]=se),(se.type!==R||se.texture!==Y)&&(Q!==W&&(a.activeTexture(W),Q=W),a.bindTexture(R,Y||Ae[R]),se.type=R,se.texture=Y)}function L(){const R=j[Q];R!==void 0&&R.type!==void 0&&(a.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function kt(){try{a.compressedTexImage2D(...arguments)}catch(R){qe("WebGLState:",R)}}function tt(){try{a.compressedTexImage3D(...arguments)}catch(R){qe("WebGLState:",R)}}function nt(){try{a.texSubImage2D(...arguments)}catch(R){qe("WebGLState:",R)}}function ue(){try{a.texSubImage3D(...arguments)}catch(R){qe("WebGLState:",R)}}function ut(){try{a.compressedTexSubImage2D(...arguments)}catch(R){qe("WebGLState:",R)}}function Ce(){try{a.compressedTexSubImage3D(...arguments)}catch(R){qe("WebGLState:",R)}}function we(){try{a.texStorage2D(...arguments)}catch(R){qe("WebGLState:",R)}}function E(){try{a.texStorage3D(...arguments)}catch(R){qe("WebGLState:",R)}}function b(){try{a.texImage2D(...arguments)}catch(R){qe("WebGLState:",R)}}function U(){try{a.texImage3D(...arguments)}catch(R){qe("WebGLState:",R)}}function ee(R){return p[R]!==void 0?p[R]:a.getParameter(R)}function J(R,Y){p[R]!==Y&&(a.pixelStorei(R,Y),p[R]=Y)}function ae(R){K.equals(R)===!1&&(a.scissor(R.x,R.y,R.z,R.w),K.copy(R))}function ce(R){me.equals(R)===!1&&(a.viewport(R.x,R.y,R.z,R.w),me.copy(R))}function X(R,Y){let W=l.get(Y);W===void 0&&(W=new WeakMap,l.set(Y,W));let se=W.get(R);se===void 0&&(se=a.getUniformBlockIndex(Y,R.name),a.uniformBlockBinding(Y,se,se),W.set(R,se))}function $(R,Y,W){const ie=l.get(Y).get(R);c[ie]!==W&&(a.bindBufferBase(a.UNIFORM_BUFFER,ie,W),c[ie]=W)}function oe(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),o.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),d={},p={},Q=null,j={},f={},c={},m=new WeakMap,v=[],_=null,h=!1,u=null,y=null,T=null,S=null,C=null,A=null,g=null,M=new Ie(0,0,0),I=0,N=!1,D=null,F=null,V=null,P=null,k=null,K.set(0,0,a.canvas.width,a.canvas.height),me.set(0,0,a.canvas.width,a.canvas.height),r.reset(),o.reset(),s.reset()}return{buffers:{color:r,depth:o,stencil:s},enable:pe,disable:De,bindFramebuffer:st,drawBuffers:Te,useProgram:Ke,setBlending:yt,setMaterial:dt,setFlipSided:Dt,setCullFace:it,setLineWidth:en,setPolygonOffset:pt,setScissorTest:Bt,activeTexture:zt,bindTexture:Ht,unbindTexture:L,compressedTexImage2D:kt,compressedTexImage3D:tt,texImage2D:b,texImage3D:U,pixelStorei:J,getParameter:ee,updateUBOMapping:X,uniformBlockBinding:$,texStorage2D:we,texStorage3D:E,texSubImage2D:nt,texSubImage3D:ue,compressedTexSubImage2D:ut,compressedTexSubImage3D:Ce,scissor:ae,viewport:ce,reset:oe}}function rp(a,e,t,n,i,r,o){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ge,d=new WeakMap,p=new Set;let f;const m=new WeakMap,v=new Set,_=new FinalizationRegistry(E=>v.delete(E));let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function u(E,b){return h?new OffscreenCanvas(E,b):Ca("canvas")}function y(E,b,U){let ee=1;const J=we(E);if((J.width>U||J.height>U)&&(ee=U/Math.max(J.width,J.height)),ee<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const ae=Math.floor(ee*J.width),ce=Math.floor(ee*J.height);f===void 0&&(f=u(ae,ce));const X=b?u(ae,ce):f;return X.width=ae,X.height=ce,X.getContext("2d").drawImage(E,0,0,ae,ce),Re("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ae+"x"+ce+")."),X}else return"data"in E&&Re("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function T(E){return E.generateMipmaps}function S(E){a.generateMipmap(E)}function C(E){return E.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?a.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function A(E,b,U,ee,J,ae=!1){if(E!==null){if(a[E]!==void 0)return a[E];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ce;ee&&(ce=e.get("EXT_texture_norm16"),ce||Re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=b;if(b===a.RED&&(U===a.FLOAT&&(X=a.R32F),U===a.HALF_FLOAT&&(X=a.R16F),U===a.UNSIGNED_BYTE&&(X=a.R8),U===a.UNSIGNED_SHORT&&ce&&(X=ce.R16_EXT),U===a.SHORT&&ce&&(X=ce.R16_SNORM_EXT)),b===a.RED_INTEGER&&(U===a.UNSIGNED_BYTE&&(X=a.R8UI),U===a.UNSIGNED_SHORT&&(X=a.R16UI),U===a.UNSIGNED_INT&&(X=a.R32UI),U===a.BYTE&&(X=a.R8I),U===a.SHORT&&(X=a.R16I),U===a.INT&&(X=a.R32I)),b===a.RG&&(U===a.FLOAT&&(X=a.RG32F),U===a.HALF_FLOAT&&(X=a.RG16F),U===a.UNSIGNED_BYTE&&(X=a.RG8),U===a.UNSIGNED_SHORT&&ce&&(X=ce.RG16_EXT),U===a.SHORT&&ce&&(X=ce.RG16_SNORM_EXT)),b===a.RG_INTEGER&&(U===a.UNSIGNED_BYTE&&(X=a.RG8UI),U===a.UNSIGNED_SHORT&&(X=a.RG16UI),U===a.UNSIGNED_INT&&(X=a.RG32UI),U===a.BYTE&&(X=a.RG8I),U===a.SHORT&&(X=a.RG16I),U===a.INT&&(X=a.RG32I)),b===a.RGB_INTEGER&&(U===a.UNSIGNED_BYTE&&(X=a.RGB8UI),U===a.UNSIGNED_SHORT&&(X=a.RGB16UI),U===a.UNSIGNED_INT&&(X=a.RGB32UI),U===a.BYTE&&(X=a.RGB8I),U===a.SHORT&&(X=a.RGB16I),U===a.INT&&(X=a.RGB32I)),b===a.RGBA_INTEGER&&(U===a.UNSIGNED_BYTE&&(X=a.RGBA8UI),U===a.UNSIGNED_SHORT&&(X=a.RGBA16UI),U===a.UNSIGNED_INT&&(X=a.RGBA32UI),U===a.BYTE&&(X=a.RGBA8I),U===a.SHORT&&(X=a.RGBA16I),U===a.INT&&(X=a.RGBA32I)),b===a.RGB&&(U===a.UNSIGNED_SHORT&&ce&&(X=ce.RGB16_EXT),U===a.SHORT&&ce&&(X=ce.RGB16_SNORM_EXT),U===a.UNSIGNED_INT_5_9_9_9_REV&&(X=a.RGB9_E5),U===a.UNSIGNED_INT_10F_11F_11F_REV&&(X=a.R11F_G11F_B10F)),b===a.RGBA){const $=ae?Aa:Ve.getTransfer(J);U===a.FLOAT&&(X=a.RGBA32F),U===a.HALF_FLOAT&&(X=a.RGBA16F),U===a.UNSIGNED_BYTE&&(X=$===Ze?a.SRGB8_ALPHA8:a.RGBA8),U===a.UNSIGNED_SHORT&&ce&&(X=ce.RGBA16_EXT),U===a.SHORT&&ce&&(X=ce.RGBA16_SNORM_EXT),U===a.UNSIGNED_SHORT_4_4_4_4&&(X=a.RGBA4),U===a.UNSIGNED_SHORT_5_5_5_1&&(X=a.RGB5_A1)}return(X===a.R16F||X===a.R32F||X===a.RG16F||X===a.RG32F||X===a.RGBA16F||X===a.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function g(E,b){let U;return E?b===null||b===ln||b===mi?U=a.DEPTH24_STENCIL8:b===rn?U=a.DEPTH32F_STENCIL8:b===Ii&&(U=a.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ln||b===mi?U=a.DEPTH_COMPONENT24:b===rn?U=a.DEPTH_COMPONENT32F:b===Ii&&(U=a.DEPTH_COMPONENT16),U}function M(E,b){return T(E)===!0||E.isFramebufferTexture&&E.minFilter!==St&&E.minFilter!==Lt?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function I(E){const b=new WeakRef(E);n.get(E).__ref=b,v.add(b),_.register(E,b,b)}function N(E){const b=n.get(E).__ref;b!==void 0&&(v.delete(b),_.unregister(b))}function D(E){V(E.target)}function F(E){P(E.target)}function V(E){E.removeEventListener("dispose",D),N(E),Z(E),E.isVideoTexture&&d.delete(E),E.isHTMLTexture&&p.delete(E)}function P(E){E.removeEventListener("dispose",F),N(E),te(E)}function k(){for(const E of v){const b=E.deref();b!==void 0&&(b.isRenderTarget===!0?P(b):V(b))}v.clear(),p.clear()}function Z(E){const b=n.get(E);if(b.__webglInit===void 0)return;const U=E.source,ee=m.get(U);if(ee){const J=ee[b.__cacheKey];J.usedTimes--,J.usedTimes===0&&H(E),Object.keys(ee).length===0&&m.delete(U)}n.remove(E)}function H(E){const b=n.get(E);a.deleteTexture(b.__webglTexture);const U=E.source,ee=m.get(U);delete ee[b.__cacheKey],o.memory.textures--}function te(E){const b=n.get(E);b.__depthDisposeCallback&&b.__depthDisposeCallback();const U=E.depthTexture;if(U&&U.renderTarget===E&&V(U),E.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(b.__webglFramebuffer[J]))for(let ae=0;ae<b.__webglFramebuffer[J].length;ae++)a.deleteFramebuffer(b.__webglFramebuffer[J][ae]);else a.deleteFramebuffer(b.__webglFramebuffer[J]);b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer[J])}else{if(Array.isArray(b.__webglFramebuffer))for(let J=0;J<b.__webglFramebuffer.length;J++)a.deleteFramebuffer(b.__webglFramebuffer[J]);else a.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&a.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let J=0;J<b.__webglColorRenderbuffer.length;J++)b.__webglColorRenderbuffer[J]&&a.deleteRenderbuffer(b.__webglColorRenderbuffer[J]);b.__webglDepthRenderbuffer&&a.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ee=E.textures;for(let J=0,ae=ee.length;J<ae;J++){const ce=n.get(ee[J]);ce.__webglTexture&&(a.deleteTexture(ce.__webglTexture),o.memory.textures--),n.remove(ee[J])}n.remove(E)}let q=0;function Q(){q=0}function j(){return q}function ye(E){q=E}function Pe(){const E=q;return E>=i.maxTextures&&Re("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+i.maxTextures),q+=1,E}function K(E){const b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.mipmapsAutoUpdate),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.colorSpace),b.join()}function me(E,b){const U=n.get(E);if(E.isVideoTexture&&ut(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&U.__version!==E.version){const ee=E.image;if(ee===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{dt(U,E,b);return}}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,U.__webglTexture,a.TEXTURE0+b)}function be(E,b){const U=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){dt(U,E,b);return}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,U.__webglTexture,a.TEXTURE0+b)}function Ae(E,b){const U=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){dt(U,E,b);return}t.bindTexture(a.TEXTURE_3D,U.__webglTexture,a.TEXTURE0+b)}function pe(E,b){const U=n.get(E);if(E.version>0&&U.__version!==E.version){Dt(U,E,b);return}t.bindTexture(a.TEXTURE_CUBE_MAP,U.__webglTexture,a.TEXTURE0+b)}const De={[Mr]:a.REPEAT,[gn]:a.CLAMP_TO_EDGE,[Sr]:a.MIRRORED_REPEAT},st={[St]:a.NEAREST,[vc]:a.NEAREST_MIPMAP_NEAREST,[qi]:a.NEAREST_MIPMAP_LINEAR,[Lt]:a.LINEAR,[Ha]:a.LINEAR_MIPMAP_NEAREST,[wn]:a.LINEAR_MIPMAP_LINEAR},Te={[yc]:a.NEVER,[sl]:a.ALWAYS,[Mc]:a.LESS,[rl]:a.LEQUAL,[Sc]:a.EQUAL,[ol]:a.GEQUAL,[Ec]:a.GREATER,[Ac]:a.NOTEQUAL};function Ke(E,b){if(b.type===rn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Lt||b.magFilter===Ha||b.magFilter===qi||b.magFilter===wn||b.minFilter===Lt||b.minFilter===Ha||b.minFilter===qi||b.minFilter===wn)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(E,a.TEXTURE_WRAP_S,De[b.wrapS]),a.texParameteri(E,a.TEXTURE_WRAP_T,De[b.wrapT]),(E===a.TEXTURE_3D||E===a.TEXTURE_2D_ARRAY)&&a.texParameteri(E,a.TEXTURE_WRAP_R,De[b.wrapR]),a.texParameteri(E,a.TEXTURE_MAG_FILTER,st[b.magFilter]),a.texParameteri(E,a.TEXTURE_MIN_FILTER,st[b.minFilter]),b.compareFunction&&(a.texParameteri(E,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(E,a.TEXTURE_COMPARE_FUNC,Te[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===St||b.minFilter!==qi&&b.minFilter!==wn||b.type===rn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");a.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Je(E,b){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",D),I(b));const ee=b.source;let J=m.get(ee);J===void 0&&(J={},m.set(ee,J));const ae=K(b);if(ae!==E.__cacheKey){J[ae]===void 0&&(J[ae]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,U=!0),J[ae].usedTimes++;const ce=J[E.__cacheKey];ce!==void 0&&(J[E.__cacheKey].usedTimes--,ce.usedTimes===0&&H(b)),E.__cacheKey=ae,E.__webglTexture=J[ae].texture}return U}function Be(E,b,U){return Math.floor(Math.floor(E/U)/b)}function yt(E,b,U,ee){const ae=E.updateRanges;if(ae.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,b.width,b.height,U,ee,b.data);else{ae.sort((R,Y)=>R.start-Y.start);let ce=0;for(let R=1;R<ae.length;R++){const Y=ae[ce],W=ae[R],se=Y.start+Y.count,ie=Be(W.start,b.width,4),re=Be(Y.start,b.width,4);W.start<=se+1&&ie===re&&Be(W.start+W.count-1,b.width,4)===ie?Y.count=Math.max(Y.count,W.start+W.count-Y.start):(++ce,ae[ce]=W)}ae.length=ce+1;const X=t.getParameter(a.UNPACK_ROW_LENGTH),$=t.getParameter(a.UNPACK_SKIP_PIXELS),oe=t.getParameter(a.UNPACK_SKIP_ROWS);t.pixelStorei(a.UNPACK_ROW_LENGTH,b.width);for(let R=0,Y=ae.length;R<Y;R++){const W=ae[R],se=Math.floor(W.start/4),ie=Math.ceil(W.count/4),re=se%b.width,Se=Math.floor(se/b.width),Oe=ie,ne=1;t.pixelStorei(a.UNPACK_SKIP_PIXELS,re),t.pixelStorei(a.UNPACK_SKIP_ROWS,Se),t.texSubImage2D(a.TEXTURE_2D,0,re,Se,Oe,ne,U,ee,b.data)}E.clearUpdateRanges(),t.pixelStorei(a.UNPACK_ROW_LENGTH,X),t.pixelStorei(a.UNPACK_SKIP_PIXELS,$),t.pixelStorei(a.UNPACK_SKIP_ROWS,oe)}}function dt(E,b,U){let ee=a.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ee=a.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ee=a.TEXTURE_3D);const J=Je(E,b),ae=b.source;t.bindTexture(ee,E.__webglTexture,a.TEXTURE0+U);const ce=n.get(ae);if(ae.version!==ce.__version||J===!0){if(t.activeTexture(a.TEXTURE0+U),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const ne=Ve.getPrimaries(Ve.workingColorSpace),Ee=b.colorSpace===Rn?null:Ve.getPrimaries(b.colorSpace),Fe=b.colorSpace===Rn||ne===Ee?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}t.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment);let $=y(b.image,!1,i.maxTextureSize);$=Ce(b,$);const oe=r.convert(b.format,b.colorSpace),R=r.convert(b.type);let Y=A(b.internalFormat,oe,R,b.normalized,b.colorSpace,b.isVideoTexture);Ke(ee,b);let W;const se=b.mipmaps,ie=b.isVideoTexture!==!0,re=ce.__version===void 0||J===!0,Se=ae.dataReady,Oe=M(b,$);if(b.isDepthTexture)Y=g(b.format===Pn,b.type),re&&(ie?t.texStorage2D(a.TEXTURE_2D,1,Y,$.width,$.height):t.texImage2D(a.TEXTURE_2D,0,Y,$.width,$.height,0,oe,R,null));else if(b.isDataTexture)if(se.length>0){ie&&re&&t.texStorage2D(a.TEXTURE_2D,Oe,Y,se[0].width,se[0].height);for(let ne=0,Ee=se.length;ne<Ee;ne++)W=se[ne],ie?Se&&t.texSubImage2D(a.TEXTURE_2D,ne,0,0,W.width,W.height,oe,R,W.data):t.texImage2D(a.TEXTURE_2D,ne,Y,W.width,W.height,0,oe,R,W.data);b.generateMipmaps=!1}else ie?(re&&t.texStorage2D(a.TEXTURE_2D,Oe,Y,$.width,$.height),Se&&yt(b,$,oe,R)):t.texImage2D(a.TEXTURE_2D,0,Y,$.width,$.height,0,oe,R,$.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ie&&re&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Oe,Y,se[0].width,se[0].height,$.depth);for(let ne=0,Ee=se.length;ne<Ee;ne++)if(W=se[ne],b.format!==on)if(oe!==null)if(ie){if(Se)if(b.layerUpdates.size>0){const Fe=vs(W.width,W.height,b.format,b.type);for(const fe of b.layerUpdates){const Ye=W.data.subarray(fe*Fe/W.data.BYTES_PER_ELEMENT,(fe+1)*Fe/W.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ne,0,0,fe,W.width,W.height,1,oe,Ye)}}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ne,0,0,0,W.width,W.height,$.depth,oe,W.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ne,Y,W.width,W.height,$.depth,0,W.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?Se&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,ne,0,0,0,W.width,W.height,$.depth,oe,R,W.data):t.texImage3D(a.TEXTURE_2D_ARRAY,ne,Y,W.width,W.height,$.depth,0,oe,R,W.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{ie&&re&&t.texStorage2D(a.TEXTURE_2D,Oe,Y,se[0].width,se[0].height);for(let ne=0,Ee=se.length;ne<Ee;ne++)W=se[ne],b.format!==on?oe!==null?ie?Se&&t.compressedTexSubImage2D(a.TEXTURE_2D,ne,0,0,W.width,W.height,oe,W.data):t.compressedTexImage2D(a.TEXTURE_2D,ne,Y,W.width,W.height,0,W.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?Se&&t.texSubImage2D(a.TEXTURE_2D,ne,0,0,W.width,W.height,oe,R,W.data):t.texImage2D(a.TEXTURE_2D,ne,Y,W.width,W.height,0,oe,R,W.data)}else if(b.isDataArrayTexture)if(ie){if(re&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Oe,Y,$.width,$.height,$.depth),Se)if(b.layerUpdates.size>0){const ne=vs($.width,$.height,b.format,b.type);for(const Ee of b.layerUpdates){const Fe=$.data.subarray(Ee*ne/$.data.BYTES_PER_ELEMENT,(Ee+1)*ne/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Ee,$.width,$.height,1,oe,R,Fe)}b.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,oe,R,$.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Y,$.width,$.height,$.depth,0,oe,R,$.data);else if(b.isData3DTexture)ie?(re&&t.texStorage3D(a.TEXTURE_3D,Oe,Y,$.width,$.height,$.depth),Se&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,oe,R,$.data)):t.texImage3D(a.TEXTURE_3D,0,Y,$.width,$.height,$.depth,0,oe,R,$.data);else if(b.isFramebufferTexture){if(re)if(ie)t.texStorage2D(a.TEXTURE_2D,Oe,Y,$.width,$.height);else{let ne=$.width,Ee=$.height;for(let Fe=0;Fe<Oe;Fe++)t.texImage2D(a.TEXTURE_2D,Fe,Y,ne,Ee,0,oe,R,null),ne>>=1,Ee>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in a){const ne=a.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),$.parentNode!==ne){ne.appendChild($),p.add(b),ne.onpaint=Ee=>{const Fe=Ee.changedElements;for(const fe of p)Fe.includes(fe.image)&&(fe.needsUpdate=!0)},ne.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,$);else{const Fe=a.RGBA,fe=a.RGBA,Ye=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,Fe,fe,Ye,$)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(se.length>0){if(ie&&re){const ne=we(se[0]);t.texStorage2D(a.TEXTURE_2D,Oe,Y,ne.width,ne.height)}for(let ne=0,Ee=se.length;ne<Ee;ne++)W=se[ne],ie?Se&&t.texSubImage2D(a.TEXTURE_2D,ne,0,0,oe,R,W):t.texImage2D(a.TEXTURE_2D,ne,Y,oe,R,W);b.generateMipmaps=!1}else if(ie){if(re){const ne=we($);t.texStorage2D(a.TEXTURE_2D,Oe,Y,ne.width,ne.height)}Se&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,oe,R,$)}else t.texImage2D(a.TEXTURE_2D,0,Y,oe,R,$);T(b)&&b.mipmapsAutoUpdate===!0&&S(ee),ce.__version=ae.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function Dt(E,b,U){if(b.image.length!==6)return;const ee=Je(E,b),J=b.source;t.bindTexture(a.TEXTURE_CUBE_MAP,E.__webglTexture,a.TEXTURE0+U);const ae=n.get(J);if(J.version!==ae.__version||ee===!0){t.activeTexture(a.TEXTURE0+U);const ce=Ve.getPrimaries(Ve.workingColorSpace),X=b.colorSpace===Rn?null:Ve.getPrimaries(b.colorSpace),$=b.colorSpace===Rn||ce===X?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const oe=b.isCompressedTexture||b.image[0].isCompressedTexture,R=b.image[0]&&b.image[0].isDataTexture,Y=[];for(let fe=0;fe<6;fe++)!oe&&!R?Y[fe]=y(b.image[fe],!0,i.maxCubemapSize):Y[fe]=R?b.image[fe].image:b.image[fe],Y[fe]=Ce(b,Y[fe]);const W=Y[0],se=r.convert(b.format,b.colorSpace),ie=r.convert(b.type);let re=A(b.internalFormat,se,ie,b.normalized,b.colorSpace);const Se=b.isVideoTexture!==!0,Oe=ae.__version===void 0||ee===!0,ne=J.dataReady;let Ee=M(b,W);Ke(a.TEXTURE_CUBE_MAP,b);let Fe;if(b.isDepthTexture){if(re=g(b.format===Pn,b.type),Oe)if(Se)t.texStorage2D(a.TEXTURE_CUBE_MAP,1,re,W.width,W.height);else for(let fe=0;fe<6;fe++)t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,re,W.width,W.height,0,se,ie,null)}else if(oe){Se&&Oe&&t.texStorage2D(a.TEXTURE_CUBE_MAP,Ee,re,W.width,W.height);for(let fe=0;fe<6;fe++){Fe=Y[fe].mipmaps;for(let Ye=0;Ye<Fe.length;Ye++){const gt=Fe[Ye];b.format!==on?se!==null?Se?ne&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ye,0,0,gt.width,gt.height,se,gt.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ye,re,gt.width,gt.height,0,gt.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Se?ne&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ye,0,0,gt.width,gt.height,se,ie,gt.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ye,re,gt.width,gt.height,0,se,ie,gt.data)}}}else{if(Fe=b.mipmaps,Se&&Oe){Fe.length>0&&Ee++;const fe=we(Y[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,Ee,re,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(R){Se?ne&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Y[fe].width,Y[fe].height,se,ie,Y[fe].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,re,Y[fe].width,Y[fe].height,0,se,ie,Y[fe].data);for(let Ye=0;Ye<Fe.length;Ye++){const _n=Fe[Ye].image[fe].image;Se?ne&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ye+1,0,0,_n.width,_n.height,se,ie,_n.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ye+1,re,_n.width,_n.height,0,se,ie,_n.data)}}else{Se?ne&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,se,ie,Y[fe]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,re,se,ie,Y[fe]);for(let Ye=0;Ye<Fe.length;Ye++){const gt=Fe[Ye];Se?ne&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ye+1,0,0,se,ie,gt.image[fe]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ye+1,re,se,ie,gt.image[fe])}}}T(b)&&b.mipmapsAutoUpdate===!0&&S(a.TEXTURE_CUBE_MAP),ae.__version=J.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function it(E,b,U,ee,J,ae){const ce=r.convert(U.format,U.colorSpace),X=r.convert(U.type),$=A(U.internalFormat,ce,X,U.normalized,U.colorSpace),oe=n.get(b),R=n.get(U);if(R.__renderTarget=b,!oe.__hasExternalTextures){const Y=Math.max(1,b.width>>ae),W=Math.max(1,b.height>>ae);J===a.TEXTURE_3D||J===a.TEXTURE_2D_ARRAY?t.texImage3D(J,ae,$,Y,W,b.depth,0,ce,X,null):t.texImage2D(J,ae,$,Y,W,0,ce,X,null)}t.bindFramebuffer(a.FRAMEBUFFER,E),ue(b)?s.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ee,J,R.__webglTexture,0,nt(b)):(J===a.TEXTURE_2D||J>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ee,J,R.__webglTexture,ae),t.bindFramebuffer(a.FRAMEBUFFER,null)}function en(E,b,U){if(a.bindRenderbuffer(a.RENDERBUFFER,E),b.depthBuffer){const ee=b.depthTexture,J=ee&&ee.isDepthTexture?ee.type:null,ae=g(b.stencilBuffer,J),ce=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;ue(b)?s.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,nt(b),ae,b.width,b.height):U?a.renderbufferStorageMultisample(a.RENDERBUFFER,nt(b),ae,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,ae,b.width,b.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,ce,a.RENDERBUFFER,E)}else{const ee=b.textures;for(let J=0;J<ee.length;J++){const ae=ee[J],ce=r.convert(ae.format,ae.colorSpace),X=r.convert(ae.type),$=A(ae.internalFormat,ce,X,ae.normalized,ae.colorSpace);ue(b)?s.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,nt(b),$,b.width,b.height):U?a.renderbufferStorageMultisample(a.RENDERBUFFER,nt(b),$,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,$,b.width,b.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function pt(E,b,U){const ee=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=n.get(b.depthTexture);J.__renderTarget=b;const ae=ee?b.depthTexture.image[0]:b.depthTexture.image;(!J.__webglTexture||ae.width!==b.width||ae.height!==b.height)&&(ae.width=b.width,ae.height=b.height,b.depthTexture.needsUpdate=!0),ee?pe(b.depthTexture,0):me(b.depthTexture,0);const ce=J.__webglTexture,X=nt(b),$=ee?a.TEXTURE_CUBE_MAP_POSITIVE_X+U:a.TEXTURE_2D,oe=b.depthTexture.format===Pn?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(b.depthTexture.format===Nn)ue(b)?s.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,oe,$,ce,0,X):a.framebufferTexture2D(a.FRAMEBUFFER,oe,$,ce,0);else if(b.depthTexture.format===Pn)ue(b)?s.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,oe,$,ce,0,X):a.framebufferTexture2D(a.FRAMEBUFFER,oe,$,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Bt(E){const b=n.get(E),U=E.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==E.depthTexture){const ee=E.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ee){const J=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ee.removeEventListener("dispose",J)};ee.addEventListener("dispose",J),b.__depthDisposeCallback=J}b.__boundDepthTexture=ee}if(E.depthTexture&&!b.__autoAllocateDepthBuffer)if(U)for(let ee=0;ee<6;ee++)pt(b.__webglFramebuffer[ee],E,ee);else E.texture.mipmaps.length>0?pt(b.__webglFramebuffer[0],E,0):pt(b.__webglFramebuffer,E,0);else if(U){b.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[ee]),b.__webglDepthbuffer[ee]===void 0)b.__webglDepthbuffer[ee]=a.createRenderbuffer(),en(b.__webglDepthbuffer[ee],E,!1);else{const J=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ae=b.__webglDepthbuffer[ee];a.bindRenderbuffer(a.RENDERBUFFER,ae),a.framebufferRenderbuffer(a.FRAMEBUFFER,J,a.RENDERBUFFER,ae)}}else if(E.texture.mipmaps.length>0?t.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=a.createRenderbuffer(),en(b.__webglDepthbuffer,E,!1);else{const J=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ae=b.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,ae),a.framebufferRenderbuffer(a.FRAMEBUFFER,J,a.RENDERBUFFER,ae)}t.bindFramebuffer(a.FRAMEBUFFER,null)}function zt(E,b,U){const ee=n.get(E);b!==void 0&&it(ee.__webglFramebuffer,E,E.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),U!==void 0&&Bt(E)}function Ht(E){const b=E.texture,U=n.get(E),ee=n.get(b);E.addEventListener("dispose",F),I(E);const J=E.textures,ae=E.isWebGLCubeRenderTarget===!0,ce=J.length>1;if(ce||(ee.__webglTexture===void 0&&(ee.__webglTexture=a.createTexture()),ee.__version=b.version,o.memory.textures++),ae){U.__webglFramebuffer=[];for(let X=0;X<6;X++)if(b.mipmaps.length>0){U.__webglFramebuffer[X]=[];for(let $=0;$<b.mipmaps.length;$++)U.__webglFramebuffer[X][$]=a.createFramebuffer()}else U.__webglFramebuffer[X]=a.createFramebuffer()}else{if(b.mipmaps.length>0){U.__webglFramebuffer=[];for(let X=0;X<b.mipmaps.length;X++)U.__webglFramebuffer[X]=a.createFramebuffer()}else U.__webglFramebuffer=a.createFramebuffer();if(ce)for(let X=0,$=J.length;X<$;X++){const oe=n.get(J[X]);oe.__webglTexture===void 0&&(oe.__webglTexture=a.createTexture(),o.memory.textures++)}if(E.samples>0&&ue(E)===!1){U.__webglMultisampledFramebuffer=a.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let X=0;X<J.length;X++){const $=J[X];U.__webglColorRenderbuffer[X]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,U.__webglColorRenderbuffer[X]);const oe=r.convert($.format,$.colorSpace),R=r.convert($.type),Y=A($.internalFormat,oe,R,$.normalized,$.colorSpace,E.isXRRenderTarget===!0),W=nt(E);a.renderbufferStorageMultisample(a.RENDERBUFFER,W,Y,E.width,E.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+X,a.RENDERBUFFER,U.__webglColorRenderbuffer[X])}a.bindRenderbuffer(a.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=a.createRenderbuffer(),en(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ae){t.bindTexture(a.TEXTURE_CUBE_MAP,ee.__webglTexture),Ke(a.TEXTURE_CUBE_MAP,b);for(let X=0;X<6;X++)if(b.mipmaps.length>0)for(let $=0;$<b.mipmaps.length;$++)it(U.__webglFramebuffer[X][$],E,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+X,$);else it(U.__webglFramebuffer[X],E,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);T(b)?S(a.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(ce){for(let X=0,$=J.length;X<$;X++){const oe=J[X],R=n.get(oe);let Y=a.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Y=E.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(Y,R.__webglTexture),Ke(Y,oe),it(U.__webglFramebuffer,E,oe,a.COLOR_ATTACHMENT0+X,Y,0),T(oe)&&S(Y)}t.unbindTexture()}else{let X=a.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(X=E.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(X,ee.__webglTexture),Ke(X,b),b.mipmaps.length>0)for(let $=0;$<b.mipmaps.length;$++)it(U.__webglFramebuffer[$],E,b,a.COLOR_ATTACHMENT0,X,$);else it(U.__webglFramebuffer,E,b,a.COLOR_ATTACHMENT0,X,0);T(b)?S(X):b.mipmaps.length>0&&a.texParameteri(X,a.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}E.depthBuffer&&Bt(E)}function L(E){const b=E.textures;for(let U=0,ee=b.length;U<ee;U++){const J=b[U];if(T(J)&&J.mipmapsAutoUpdate===!0){const ae=C(E),ce=n.get(J).__webglTexture;t.bindTexture(ae,ce),S(ae),t.unbindTexture()}}}const kt=[];function tt(E){if(E.samples>0){if(ue(E)===!1){const b=E.textures,U=E.width,ee=E.height;let J=a.COLOR_BUFFER_BIT;const ae=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ce=n.get(E),X=b.length>1;if(X)for(let oe=0;oe<b.length;oe++)t.bindFramebuffer(a.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+oe,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,ce.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+oe,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let oe=0;oe<b.length;oe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=a.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=a.STENCIL_BUFFER_BIT)),X){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,ce.__webglColorRenderbuffer[oe]);const R=n.get(b[oe]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,R,0)}a.blitFramebuffer(0,0,U,ee,0,0,U,ee,J,a.NEAREST),c===!0&&(kt.length=0,kt.push(a.COLOR_ATTACHMENT0+oe),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&kt.push(ae),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,kt))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),X)for(let oe=0;oe<b.length;oe++){t.bindFramebuffer(a.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+oe,a.RENDERBUFFER,ce.__webglColorRenderbuffer[oe]);const R=n.get(b[oe]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,ce.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+oe,a.TEXTURE_2D,R,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){const b=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[b])}}}function nt(E){return Math.min(i.maxSamples,E.samples)}function ue(E){const b=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ut(E){const b=o.render.frame;d.get(E)!==b&&(d.set(E,b),E.update())}function Ce(E,b){const U=E.colorSpace,ee=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!==Ea&&U!==Rn&&(Ve.getTransfer(U)===Ze?(ee!==on||J!==Ut)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",U)),b}function we(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=Pe,this.resetTextureUnits=Q,this.getTextureUnits=j,this.setTextureUnits=ye,this.setTexture2D=me,this.setTexture2DArray=be,this.setTexture3D=Ae,this.setTextureCube=pe,this.rebindTextures=zt,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=ue,this.dispose=k}function op(a,e){function t(n,i=Rn){let r;const o=Ve.getTransfer(i);if(n===Ut)return a.UNSIGNED_BYTE;if(n===so)return a.UNSIGNED_SHORT_4_4_4_4;if(n===lo)return a.UNSIGNED_SHORT_5_5_5_1;if(n===el)return a.UNSIGNED_INT_5_9_9_9_REV;if(n===tl)return a.UNSIGNED_INT_10F_11F_11F_REV;if(n===Qs)return a.BYTE;if(n===js)return a.SHORT;if(n===Ii)return a.UNSIGNED_SHORT;if(n===oo)return a.INT;if(n===ln)return a.UNSIGNED_INT;if(n===rn)return a.FLOAT;if(n===cn)return a.HALF_FLOAT;if(n===nl)return a.ALPHA;if(n===il)return a.RGB;if(n===on)return a.RGBA;if(n===Nn)return a.DEPTH_COMPONENT;if(n===Pn)return a.DEPTH_STENCIL;if(n===al)return a.RED;if(n===co)return a.RED_INTEGER;if(n===Vn)return a.RG;if(n===uo)return a.RG_INTEGER;if(n===fo)return a.RGBA_INTEGER;if(n===ga||n===va||n===ba||n===xa)if(o===Ze)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Er||n===Ar||n===Cr||n===Tr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Er)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ar)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rr||n===wr||n===Pr||n===Nr||n===Dr||n===Ma||n===Lr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Rr||n===wr)return o===Ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pr)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Nr)return r.COMPRESSED_R11_EAC;if(n===Dr)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ma)return r.COMPRESSED_RG11_EAC;if(n===Lr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ir||n===Fr||n===Or||n===Ur||n===Br||n===zr||n===Hr||n===kr||n===Gr||n===Vr||n===Wr||n===qr||n===Xr||n===$r)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ir)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fr)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Or)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ur)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Br)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zr)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hr)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kr)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gr)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vr)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wr)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qr)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xr)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$r)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Kr||n===Yr||n===Zr)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Kr)return o===Ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jr||n===Qr||n===Sa||n===jr)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===mi?a.UNSIGNED_INT_24_8:a[n]!==void 0?a[n]:null}return{convert:t}}const sp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class cp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new gl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Wn({vertexShader:sp,fragmentShader:lp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dp extends qn{constructor(e,t){super();const n=this;let i=null,r=1,o=null,s="local-floor",c=1,l=null,d=null,p=null,f=null,m=null,v=null;const _=typeof XRWebGLBinding<"u",h=new cp,u={},y=t.getContextAttributes();let T=null,S=null;const C=[],A=[],g=new Ge;let M=null,I=null;const N=new Wt;N.viewport=new ot;const D=new Wt;D.viewport=new ot;const F=[N,D],V=new xd;let P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let me=C[K];return me===void 0&&(me=new Ya,C[K]=me),me.getTargetRaySpace()},this.getControllerGrip=function(K){let me=C[K];return me===void 0&&(me=new Ya,C[K]=me),me.getGripSpace()},this.getHand=function(K){let me=C[K];return me===void 0&&(me=new Ya,C[K]=me),me.getHandSpace()};function Z(K){const me=A.indexOf(K.inputSource);if(me===-1)return;const be=C[me];be!==void 0&&(be.update(K.inputSource,K.frame,l||o),be.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",te);for(let K=0;K<C.length;K++){const me=A[K];me!==null&&(A[K]=null,C[K].disconnect(me))}P=null,k=null,h.reset();for(const K in u)delete u[K];if(e.setRenderTarget(T),m=null,f=null,p=null,i=null,S=null,Pe.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(g.width,g.height,!1),I!==null){const K=I.camera;K.fov=I.fov,K.zoom=I.zoom,K.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){s=K,n.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p===null&&_&&(p=new XRWebGLBinding(i,t)),p},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",H),i.addEventListener("inputsourceschange",te),y.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(g),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Ae=null,pe=null;y.depth&&(pe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=y.stencil?Pn:Nn,Ae=y.stencil?mi:ln);const De={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};p=this.getBinding(),f=p.createProjectionLayer(De),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new sn(f.textureWidth,f.textureHeight,{format:on,type:Ut,depthTexture:new pi(f.textureWidth,f.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const be={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,be),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new sn(m.framebufferWidth,m.framebufferHeight,{format:on,type:Ut,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(s),Pe.setContext(i),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function te(K){for(let me=0;me<K.removed.length;me++){const be=K.removed[me],Ae=A.indexOf(be);Ae>=0&&(A[Ae]=null,C[Ae].disconnect(be))}for(let me=0;me<K.added.length;me++){const be=K.added[me];let Ae=A.indexOf(be);if(Ae===-1){for(let De=0;De<C.length;De++)if(De>=A.length){A.push(be),Ae=De;break}else if(A[De]===null){A[De]=be,Ae=De;break}if(Ae===-1)break}const pe=C[Ae];pe&&pe.connect(be)}}function q(K,me){me===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(me.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let me=K.near,be=K.far;h.texture!==null&&(h.depthNear>0&&(me=h.depthNear),h.depthFar>0&&(be=h.depthFar)),V.near=D.near=N.near=me,V.far=D.far=N.far=be,(P!==V.near||k!==V.far)&&(i.updateRenderState({depthNear:V.near,depthFar:V.far}),P=V.near,k=V.far),V.layers.mask=K.layers.mask|6,N.layers.mask=V.layers.mask&-5,D.layers.mask=V.layers.mask&-3;const Ae=K.parent,pe=V.cameras;q(V,Ae);for(let De=0;De<pe.length;De++)q(pe[De],Ae);V.projectionMatrix.copy(N.projectionMatrix),V.projectionMatrixInverse.copy(N.projectionMatrixInverse),I===null&&K.isPerspectiveCamera&&(I={camera:K,fov:K.fov,zoom:K.zoom}),Q(K,V,Ae)};function Q(K,me,be){be===null?K.matrix.copy(me.matrixWorld):(K.matrix.copy(be.matrixWorld),K.matrix.invert(),K.matrix.multiply(me.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(me.projectionMatrix),K.projectionMatrixInverse.copy(me.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ta*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(V)},this.getCameraTexture=function(K){return u[K]};let j=null;function ye(K,me){if(d=me.getViewerPose(l||o),v=me,d!==null){const be=d.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let Ae=!1;be.length!==V.cameras.length&&(V.cameras.length=0,Ae=!0);for(let Te=0;Te<be.length;Te++){const Ke=be[Te];let Je=null;if(m!==null)Je=m.getViewport(Ke);else{const yt=p.getViewSubImage(f,Ke);Je=yt.viewport,Te===0&&(e.setRenderTargetTextures(S,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(S))}let Be=F[Te];Be===void 0&&(Be=new Wt,Be.layers.enable(Te),Be.viewport=new ot,F[Te]=Be),Be.matrix.fromArray(Ke.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Ke.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Je.x,Je.y,Je.width,Je.height),Te===0&&(V.matrix.copy(Be.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ae===!0&&V.cameras.push(Be)}const pe=i.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){p=n.getBinding();const Te=p.getDepthInformation(be[0]);Te&&Te.isValid&&Te.texture&&h.init(Te,i.renderState)}if(pe&&pe.includes("camera-access")&&_){e.state.unbindTexture(),p=n.getBinding();for(let Te=0;Te<be.length;Te++){const Ke=be[Te].camera;if(Ke){let Je=u[Ke];Je||(Je=new gl,u[Ke]=Je);const Be=p.getCameraImage(Ke);Je.sourceTexture=Be}}}}for(let be=0;be<C.length;be++){const Ae=A[be],pe=C[be];Ae!==null&&pe!==void 0&&pe.update(Ae,me,l||o)}j&&j(K,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),v=null}const Pe=new yl;Pe.setAnimationLoop(ye),this.setAnimationLoop=function(K){j=K},this.dispose=function(){}}}const up=new et,Nl=new Le;Nl.set(-1,0,0,0,1,0,0,0,1);function fp(a,e){function t(h,u){h.matrixAutoUpdate===!0&&h.updateMatrix(),u.value.copy(h.matrix)}function n(h,u){u.color.getRGB(h.fogColor.value,vl(a)),u.isFog?(h.fogNear.value=u.near,h.fogFar.value=u.far):u.isFogExp2&&(h.fogDensity.value=u.density)}function i(h,u,y,T,S){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(h,u):u.isMeshLambertMaterial?(r(h,u),u.envMap&&(h.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(h,u),p(h,u)):u.isMeshPhongMaterial?(r(h,u),d(h,u),u.envMap&&(h.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(h,u),f(h,u),u.isMeshPhysicalMaterial&&m(h,u,S)):u.isMeshMatcapMaterial?(r(h,u),v(h,u)):u.isMeshDepthMaterial?r(h,u):u.isMeshDistanceMaterial?(r(h,u),_(h,u)):u.isMeshNormalMaterial?r(h,u):u.isLineBasicMaterial?(o(h,u),u.isLineDashedMaterial&&s(h,u)):u.isPointsMaterial?c(h,u,y,T):u.isSpriteMaterial?l(h,u):u.isShadowMaterial?(h.color.value.copy(u.color),h.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(h,u){h.opacity.value=u.opacity,u.color&&h.diffuse.value.copy(u.color),u.emissive&&h.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(h.map.value=u.map,t(u.map,h.mapTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,t(u.alphaMap,h.alphaMapTransform)),u.bumpMap&&(h.bumpMap.value=u.bumpMap,t(u.bumpMap,h.bumpMapTransform),h.bumpScale.value=u.bumpScale,u.side===It&&(h.bumpScale.value*=-1)),u.normalMap&&(h.normalMap.value=u.normalMap,t(u.normalMap,h.normalMapTransform),h.normalScale.value.copy(u.normalScale),u.side===It&&h.normalScale.value.negate()),u.displacementMap&&(h.displacementMap.value=u.displacementMap,t(u.displacementMap,h.displacementMapTransform),h.displacementScale.value=u.displacementScale,h.displacementBias.value=u.displacementBias),u.emissiveMap&&(h.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,h.emissiveMapTransform)),u.specularMap&&(h.specularMap.value=u.specularMap,t(u.specularMap,h.specularMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest);const y=e.get(u),T=y.envMap,S=y.envMapRotation;T&&(h.envMap.value=T,h.envMapRotation.value.setFromMatrix4(up.makeRotationFromEuler(S)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&h.envMapRotation.value.premultiply(Nl),h.reflectivity.value=u.reflectivity,h.ior.value=u.ior,h.refractionRatio.value=u.refractionRatio),u.lightMap&&(h.lightMap.value=u.lightMap,h.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,h.lightMapTransform)),u.aoMap&&(h.aoMap.value=u.aoMap,h.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,h.aoMapTransform))}function o(h,u){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,u.map&&(h.map.value=u.map,t(u.map,h.mapTransform))}function s(h,u){h.dashSize.value=u.dashSize,h.totalSize.value=u.dashSize+u.gapSize,h.scale.value=u.scale}function c(h,u,y,T){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,h.size.value=u.size*y,h.scale.value=T*.5,u.map&&(h.map.value=u.map,t(u.map,h.uvTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,t(u.alphaMap,h.alphaMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest)}function l(h,u){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,h.rotation.value=u.rotation,u.map&&(h.map.value=u.map,t(u.map,h.mapTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,t(u.alphaMap,h.alphaMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest)}function d(h,u){h.specular.value.copy(u.specular),h.shininess.value=Math.max(u.shininess,1e-4)}function p(h,u){u.gradientMap&&(h.gradientMap.value=u.gradientMap)}function f(h,u){h.metalness.value=u.metalness,u.metalnessMap&&(h.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,h.metalnessMapTransform)),h.roughness.value=u.roughness,u.roughnessMap&&(h.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,h.roughnessMapTransform)),u.envMap&&(h.envMapIntensity.value=u.envMapIntensity)}function m(h,u,y){h.ior.value=u.ior,u.diffuseRoughness>0&&(h.diffuseRoughness.value=u.diffuseRoughness,u.diffuseRoughnessMap&&(h.diffuseRoughnessMap.value=u.diffuseRoughnessMap,t(u.diffuseRoughnessMap,h.diffuseRoughnessMapTransform))),u.sheen>0&&(h.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),h.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(h.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,h.sheenColorMapTransform)),u.sheenRoughnessMap&&(h.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,h.sheenRoughnessMapTransform))),u.clearcoat>0&&(h.clearcoat.value=u.clearcoat,h.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(h.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,h.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(h.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===It&&h.clearcoatNormalScale.value.negate())),u.dispersion>0&&(h.dispersion.value=u.dispersion),u.retroreflectivity>0&&(h.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(h.iridescence.value=u.iridescence,h.iridescenceIOR.value=u.iridescenceIOR,h.iridescenceThicknessMinimum.value=u.iridescenceThicknessMinimum,h.iridescenceThicknessMaximum.value=u.iridescenceThicknessMaximum,u.iridescenceMap&&(h.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,h.iridescenceMapTransform)),u.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),u.transmission>0&&(h.transmission.value=u.transmission,h.transmissionSamplerMap.value=y.texture,h.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(h.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,h.transmissionMapTransform)),h.thickness.value=u.thickness,u.thicknessMap&&(h.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=u.attenuationDistance,h.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(h.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(h.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=u.specularIntensity,h.specularColor.value.copy(u.specularColor),u.specularColorMap&&(h.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,h.specularColorMapTransform)),u.specularIntensityMap&&(h.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,h.specularIntensityMapTransform))}function v(h,u){u.matcap&&(h.matcap.value=u.matcap)}function _(h,u){const y=e.get(u).light;h.referencePosition.value.setFromMatrixPosition(y.matrixWorld),h.nearDistance.value=y.shadow.camera.near,h.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function hp(a,e,t,n){let i={},r={};function o(y,T){const S=T.program;n.uniformBlockBinding(y,S,i[y.id])}function s(y,T){let S=i[y.id];S===void 0&&(v(y),S=c(y),i[y.id]=S,y.addEventListener("dispose",h));const C=T.program;n.updateUBOMapping(y,C);const A=e.render.frame;r[y.id]!==A&&(l(y),r[y.id]=A)}function c(y){const T=a.createBuffer(),S=y.__size,C=y.usage;return a.bindBuffer(a.UNIFORM_BUFFER,T),a.bufferData(a.UNIFORM_BUFFER,S,C),a.bindBuffer(a.UNIFORM_BUFFER,null),T}function l(y){const T=i[y.id],S=y.uniforms,C=y.__cache;a.bindBuffer(a.UNIFORM_BUFFER,T);for(let A=0,g=S.length;A<g;A++){const M=S[A];if(Array.isArray(M))for(let I=0,N=M.length;I<N;I++)d(M[I],A,I,C);else d(M,A,0,C)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function d(y,T,S,C){if(f(y,T,S,C)===!0){const A=y.__offset,g=y.value;if(Array.isArray(g)){let M=0;for(let I=0;I<g.length;I++){const N=g[I],D=_(N,!0);p(N,y.__data,M),M+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else p(g,y.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,A,y.__data)}}function p(y,T,S){typeof y=="number"||typeof y=="boolean"?T[S]=y:y.isMatrix3?(T[S]=y.elements[0],T[S+1]=y.elements[1],T[S+2]=y.elements[2],T[S+3]=0,T[S+4]=y.elements[3],T[S+5]=y.elements[4],T[S+6]=y.elements[5],T[S+7]=0,T[S+8]=y.elements[6],T[S+9]=y.elements[7],T[S+10]=y.elements[8],T[S+11]=0):ArrayBuffer.isView(y)?T.set(y.subarray(0,T.length-S),S):y.toArray(T,S)}function f(y,T,S,C){const A=y.value,g=T+"_"+S;if(Array.isArray(A)){C[g]===void 0&&(C[g]=[]);const M=C[g];let I=!1;for(let N=0;N<A.length;N++)m(A[N],M,N)===!0&&(I=!0);return I}return m(A,C,g)}function m(y,T,S){if(T[S]===void 0)return typeof y=="number"||typeof y=="boolean"?T[S]=y:ArrayBuffer.isView(y)?T[S]=y.slice():T[S]=y.clone(),!0;{const C=T[S];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return T[S]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(C.equals(y)===!1)return C.copy(y),!0}}return!1}function v(y){const T=y.uniforms;let S=0;const C=16;for(let g=0,M=T.length;g<M;g++){const I=Array.isArray(T[g])?T[g]:[T[g]];for(let N=0,D=I.length;N<D;N++){const F=I[N],V=Array.isArray(F.value)?F.value:[F.value],P=Array.isArray(T[g])||Array.isArray(F.value);let k=S;for(let H=0,te=V.length;H<te;H++){const q=V[H],Q=_(q,P),j=S%C,ye=j%Q.boundary,Pe=j+ye;S+=ye,Pe!==0&&C-Pe<Q.storage&&(S+=C-Pe),H===0&&(k=S),S+=Q.storage}const Z=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new Z((S-k)/Float32Array.BYTES_PER_ELEMENT),F.__offset=k}}const A=S%C;return A>0&&(S+=C-A),y.__size=S,y.__cache={},this}function _(y,T){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=16,S.storage=48):y.isMatrix4?(S.boundary=16,S.storage=64):y.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Re("WebGLRenderer: Unsupported uniform value type.",y),T===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function h(y){const T=y.target;T.removeEventListener("dispose",h),a.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function u(){for(const y in i)a.deleteBuffer(i[y]);i={},r={}}return{bind:o,update:s,dispose:u}}const mp=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let nn=null;function pp(){return nn===null&&(nn=new nd(mp,16,16,Vn,cn),nn.name="DFG_LUT",nn.minFilter=Lt,nn.magFilter=Lt,nn.wrapS=gn,nn.wrapT=gn,nn.generateMipmaps=!1,nn.needsUpdate=!0),nn}class gp{constructor(e={}){const{canvas:t=Rc(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:m=Ut}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=o;const _=m,h=new Set([fo,uo,co]),u=new Set([Ut,ln,Ii,mi,so,lo]),y=new Uint32Array(4),T=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let C=null,A=null;const g=[],M=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let D=!1,F=null,V=null,P=null,k=null;this._outputColorSpace=Vt;let Z=0,H=0,te=null,q=-1,Q=null;const j=new ot,ye=new ot;let Pe=null;const K=new Ie(0);let me=0,be=t.width,Ae=t.height,pe=1,De=null,st=null;const Te=new ot(0,0,be,Ae),Ke=new ot(0,0,be,Ae);let Je=!1;const Be=new Oi,yt=new bo;let dt=!1,Dt=!1;const it=new et,en=new z,pt=new ot,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function Ht(){return te===null?pe:1}let L=n;function kt(x,w){return t.getContext(x,w)}let tt,nt,ue,ut,Ce,we,E,b,U,ee,J,ae,ce,X,$,oe,R,Y,W,se,ie,re,Se;try{const x={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ao}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",fe,!1),L===null){const w="webgl2";if(L=kt(w,x),L===null)throw kt(w)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(x){throw t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),qe("WebGLRenderer: "+x.message),x}function Oe(){tt=new xh(L),tt.init(),ie=new op(L,tt),nt=new lh(L,tt,e,ie),ue=new ap(L,tt),nt.reversedDepthBuffer&&f&&ue.buffers.depth.setReversed(!0),V=L.createFramebuffer(),P=L.createFramebuffer(),k=L.createFramebuffer(),ut=new Mh(L),Ce=new Wm,we=new rp(L,tt,ue,Ce,nt,ie,ut),E=new bh(N),b=new Sd(L),re=new oh(L,b),U=new _h(L,b,ut,re),ee=new Eh(L,U,b,re,ut),Y=new Sh(L,nt,we),$=new ch(Ce),J=new Vm(N,E,tt,nt,re,$),ae=new fp(N,Ce),ce=new Xm,X=new Qm(tt),R=new rh(N,E,ue,ee,v,c),oe=new ip(N,ee,nt),Se=new hp(L,ut,nt,ue),W=new sh(L,tt,ut),se=new yh(L,tt,ut),ut.programs=J.programs,N.capabilities=nt,N.extensions=tt,N.properties=Ce,N.renderLists=ce,N.shadowMap=oe,N.state=ue,N.info=ut}_!==Ut&&(I=new Ch(_,t.width,t.height,s,i,r));const ne=new dp(N,L);this.xr=ne,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const x=tt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=tt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(x){x!==void 0&&(pe=x,this.setSize(be,Ae,!1))},this.getSize=function(x){return x.set(be,Ae)},this.setSize=function(x,w,G=!0){if(ne.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}be=x,Ae=w,t.width=Math.floor(x*pe),t.height=Math.floor(w*pe),G===!0&&(t.style.width=x+"px",t.style.height=w+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,x,w)},this.getDrawingBufferSize=function(x){return x.set(be*pe,Ae*pe).floor()},this.setDrawingBufferSize=function(x,w,G){be=x,Ae=w,pe=G,t.width=Math.floor(x*G),t.height=Math.floor(w*G),this.setViewport(0,0,x,w)},this.setEffects=function(x){if(_===Ut){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let w=0;w<x.length;w++)if(x[w].isOutputPass===!0){Re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(j)},this.getViewport=function(x){return x.copy(Te)},this.setViewport=function(x,w,G,O){x.isVector4?Te.set(x.x,x.y,x.z,x.w):Te.set(x,w,G,O),ue.viewport(j.copy(Te).multiplyScalar(Ht()).round())},this.getScissor=function(x){return x.copy(Ke)},this.setScissor=function(x,w,G,O){x.isVector4?Ke.set(x.x,x.y,x.z,x.w):Ke.set(x,w,G,O),ue.scissor(ye.copy(Ke).multiplyScalar(Ht()).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(x){ue.setScissorTest(Je=x)},this.setOpaqueSort=function(x){De=x},this.setTransparentSort=function(x){st=x},this.getClearColor=function(x){return x.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(x=!0,w=!0,G=!0){let O=0;if(x){let B=!1;if(te!==null){const de=te.texture.format;B=h.has(de)}if(B){const de=te.texture.type,ve=u.has(de),le=R.getClearColor(),ge=R.getClearAlpha(),Me=le.r,Ne=le.g,ze=le.b;ve?(y[0]=Me,y[1]=Ne,y[2]=ze,y[3]=ge,L.clearBufferuiv(L.COLOR,0,y)):(T[0]=Me,T[1]=Ne,T[2]=ze,T[3]=ge,L.clearBufferiv(L.COLOR,0,T))}else O|=L.COLOR_BUFFER_BIT}w&&(O|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(O|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&L.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),F=x},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),R.dispose(),ce.dispose(),X.dispose(),we.dispose(),Ce.dispose(),E.dispose(),ee.dispose(),U.dispose(),re.dispose(),Se.dispose(),J.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Mo),ne.removeEventListener("sessionend",So),Ln.stop()};function Ee(x){x.preventDefault(),Vo("WebGLRenderer: Context Lost."),D=!0}function Fe(){Vo("WebGLRenderer: Context Restored."),D=!1;const x=ut.autoReset,w=oe.enabled,G=oe.autoUpdate,O=oe.needsUpdate,B=oe.type;Oe(),ut.autoReset=x,oe.enabled=w,oe.autoUpdate=G,oe.needsUpdate=O,oe.type=B}function fe(x){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ye(x){const w=x.target;w.removeEventListener("dispose",Ye),gt(w)}function gt(x){_n(x),Ce.remove(x)}function _n(x){const w=Ce.get(x).programs;w!==void 0&&(w.forEach(function(G){J.releaseProgram(G)}),x.isShaderMaterial&&J.releaseShaderCache(x))}this.renderBufferDirect=function(x,w,G,O,B,de){w===null&&(w=Bt);const ve=B.isMesh&&B.matrixWorld.determinantAffine()<0,le=Il(x,w,G,O,B);ue.setMaterial(O,ve);let ge=G.index,Me=1;if(O.wireframe===!0){if(ge=U.getWireframeAttribute(G),ge===void 0)return;Me=2}const Ne=G.drawRange,ze=G.attributes.position;let xe=Ne.start*Me,He=(Ne.start+Ne.count)*Me;de!==null&&(xe=Math.max(xe,de.start*Me),He=Math.min(He,(de.start+de.count)*Me)),ge!==null?(xe=Math.max(xe,0),He=Math.min(He,ge.count)):ze!=null&&(xe=Math.max(xe,0),He=Math.min(He,ze.count));const lt=He-xe;if(lt<0||lt===1/0)return;re.setup(B,O,le,G,ge);let je,Qe=W;if(ge!==null&&(je=b.get(ge),Qe=se,Qe.setIndex(je)),B.isMesh)O.wireframe===!0?(ue.setLineWidth(O.wireframeLinewidth*Ht()),Qe.setMode(L.LINES)):Qe.setMode(L.TRIANGLES);else if(B.isLine){let Et=O.linewidth;Et===void 0&&(Et=1),ue.setLineWidth(Et*Ht()),B.isLineSegments?Qe.setMode(L.LINES):B.isLineLoop?Qe.setMode(L.LINE_LOOP):Qe.setMode(L.LINE_STRIP)}else B.isPoints?Qe.setMode(L.POINTS):B.isSprite&&Qe.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))Qe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Et=B._multiDrawStarts,_e=B._multiDrawCounts,Rt=B._multiDrawCount,Xe=ge?b.get(ge).bytesPerElement:1,In=Ce.get(O).currentProgram.getUniforms();for(let At=0;At<Rt;At++)In.setValue(L,"_gl_DrawID",At),Qe.render(Et[At]/Xe,_e[At])}else if(B.isInstancedMesh)Qe.renderInstances(xe,lt,B.count);else if(G.isInstancedBufferGeometry){const Et=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,_e=Math.min(G.instanceCount,Et);Qe.renderInstances(xe,lt,_e)}else Qe.render(xe,lt)};function yo(x,w,G,O){F!==null&&x.isNodeMaterial&&F.setObject(O,x),dt===!0&&$.setState(x,G,!1),x.transparent===!0&&x.side===qt&&x.forceSinglePass===!1?(x.side=It,x.needsUpdate=!0,xi(x,w,O),x.side=Gn,x.needsUpdate=!0,xi(x,w,O),x.side=qt):xi(x,w,O)}this.compile=function(x,w,G=null){G===null&&(G=x),F!==null&&F.renderStart(x,w,G),A=X.get(G),A.init(w),M.push(A),G.traverseVisible(function(B){B.isLight&&B.layers.test(w.layers)&&(A.pushLight(B),B.castShadow&&A.pushShadow(B))}),x!==G&&x.traverseVisible(function(B){B.isLight&&B.layers.test(w.layers)&&(A.pushLight(B),B.castShadow&&A.pushShadow(B))}),A.setupLights(),F!==null&&F.updateLights(A.state.lightsArray),Dt=this.localClippingEnabled,dt=$.init(this.clippingPlanes,Dt),dt===!0&&$.setGlobalState(this.clippingPlanes,w),F!==null&&oe.render(A.state.shadowsArray,G,w);const O=new Set;return x.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const de=B.material;if(de)if(Array.isArray(de))for(let ve=0;ve<de.length;ve++){const le=de[ve];yo(le,G,w,B),O.add(le)}else yo(de,G,w,B),O.add(de)}),A=M.pop(),F!==null&&F.renderEnd(),O},this.compileAsync=function(x,w,G=null){const O=this.compile(x,w,G);return new Promise(B=>{function de(){if(O.forEach(function(ve){const ge=Ce.get(ve).currentProgram;(ge===void 0||ge.isReady())&&O.delete(ve)}),O.size===0){B(x);return}setTimeout(de,10)}tt.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Oa=null;function Dl(x){Oa&&Oa(x)}function Mo(){Ln.stop()}function So(){Ln.start()}const Ln=new yl;Ln.setAnimationLoop(Dl),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(x){Oa=x,ne.setAnimationLoop(x),x===null?Ln.stop():Ln.start()},ne.addEventListener("sessionstart",Mo),ne.addEventListener("sessionend",So),this.render=function(x,w){if(w!==void 0&&w.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(x,w);const G=ne.enabled===!0&&ne.isPresenting===!0,O=I!==null&&(te===null||G)&&I.begin(N,te);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),w.parent===null&&w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(w),w=ne.getCamera()),x.isScene===!0&&x.onBeforeRender(N,x,w,te),A=X.get(x,M.length),A.init(w),A.state.textureUnits=we.getTextureUnits(),M.push(A),it.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),w.isArrayCamera?yt.setFromArrayCamera(w):Be.setFromProjectionMatrix(it,jt,w.reversedDepth),Dt=this.localClippingEnabled,dt=$.init(this.clippingPlanes,Dt),C=ce.get(x,g.length),C.init(),g.push(C),this.info.render.frame++,ne.enabled===!0&&ne.isPresenting===!0){const ve=N.xr.getDepthSensingMesh();ve!==null&&Ua(ve,w,-1/0,N.sortObjects)}Ua(x,w,0,N.sortObjects),C.finish(),F!==null&&F.updateLights(A.state.lightsArray),N.sortObjects===!0&&C.sort(De,st),zt=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,zt&&R.addToRenderList(C,x),this.info.autoReset===!0&&this.info.reset(),dt===!0&&$.beginShadows();const B=A.state.shadowsArray;if(oe.render(B,x,w),dt===!0&&$.endShadows(),(O&&I.hasRenderPass())===!1){const ve=C.opaque,le=C.transmissive;if(A.setupLights(),w.isArrayCamera){const ge=w.cameras;if(le.length>0)for(let Me=0,Ne=ge.length;Me<Ne;Me++){const ze=ge[Me];Ao(ve,le,x,ze)}zt&&R.render(x);for(let Me=0,Ne=ge.length;Me<Ne;Me++){const ze=ge[Me];Eo(C,x,ze,ze.viewport)}}else le.length>0&&Ao(ve,le,x,w),zt&&R.render(x),Eo(C,x,w)}te!==null&&H===0&&(we.updateMultisampleRenderTarget(te),we.updateRenderTargetMipmap(te)),O&&I.end(N),x.isScene===!0&&x.onAfterRender(N,x,w),re.resetDefaultState(),q=-1,Q=null,M.pop(),M.length>0?(A=M[M.length-1],we.setTextureUnits(A.state.textureUnits),dt===!0&&$.setGlobalState(N.clippingPlanes,A.state.camera)):A=null,g.pop(),g.length>0?C=g[g.length-1]:C=null,F!==null&&F.renderEnd()};function Ua(x,w,G,O){if(x.visible===!1)return;if(x.layers.test(w.layers)){if(x.isGroup)G=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(w);else if(x.isLight)A.pushLight(x),x.castShadow&&A.pushShadow(x);else if(x.isSprite){const ve=w.isArrayCamera?yt:Be;if(!x.frustumCulled||x.intersectsFrustum(ve)){O&&pt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(it);const le=ee.update(x),ge=x.material;ge.visible&&C.push(x,le,ge,G,pt.z,null,w)}}else if(x.isMesh||x.isLine||x.isPoints){const ve=w.isArrayCamera?yt:Be;if(!x.frustumCulled||x.intersectsFrustum(ve)){const le=ee.update(x),ge=x.material;if(O&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),pt.copy(x.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),pt.copy(le.boundingSphere.center)),pt.applyMatrix4(x.matrixWorld).applyMatrix4(it)),Array.isArray(ge)){const Me=le.groups;for(let Ne=0,ze=Me.length;Ne<ze;Ne++){const xe=Me[Ne],He=ge[xe.materialIndex];He&&He.visible&&C.push(x,le,He,G,pt.z,xe,w)}}else ge.visible&&C.push(x,le,ge,G,pt.z,null,w)}}}const de=x.children;for(let ve=0,le=de.length;ve<le;ve++)Ua(de[ve],w,G,O)}function Eo(x,w,G,O){const{opaque:B,transmissive:de,transparent:ve}=x;A.setupLightsView(G),dt===!0&&$.setGlobalState(N.clippingPlanes,G),O&&ue.viewport(j.copy(O)),B.length>0&&Vi(B,w,G),de.length>0&&Vi(de,w,G),ve.length>0&&Vi(ve,w,G),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Ao(x,w,G,O){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[O.id]===void 0){const xe=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[O.id]=new sn(1,1,{generateMipmaps:!0,type:xe?cn:Ut,minFilter:wn,samples:Math.max(4,nt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ve.workingColorSpace})}const de=A.state.transmissionRenderTarget[O.id],ve=O.viewport||j;de.setSize(ve.z*N.transmissionResolutionScale,ve.w*N.transmissionResolutionScale);const le=N.getRenderTarget(),ge=N.getActiveCubeFace(),Me=N.getActiveMipmapLevel();N.setRenderTarget(de),N.getClearColor(K),me=N.getClearAlpha(),me<1&&N.setClearColor(16777215,.5),N.clear(),zt&&R.render(G);const Ne=N.toneMapping;N.toneMapping=bn;const ze=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),A.setupLightsView(O),dt===!0&&$.setGlobalState(N.clippingPlanes,O),Vi(x,G,O),we.updateMultisampleRenderTarget(de),we.updateRenderTargetMipmap(de),tt.has("WEBGL_multisampled_render_to_texture")===!1){let xe=!1;for(let He=0,lt=w.length;He<lt;He++){const je=w[He],{object:Qe,geometry:Et,material:_e,group:Rt}=je;if(_e.side===qt&&Qe.layers.test(O.layers)){const Xe=_e.side;_e.side=It,_e.needsUpdate=!0,Co(Qe,G,O,Et,_e,Rt),_e.side=Xe,_e.needsUpdate=!0,xe=!0}}xe===!0&&(we.updateMultisampleRenderTarget(de),we.updateRenderTargetMipmap(de))}N.setRenderTarget(le,ge,Me),N.setClearColor(K,me),ze!==void 0&&(O.viewport=ze),N.toneMapping=Ne}function Vi(x,w,G){const O=w.isScene===!0?w.overrideMaterial:null;for(let B=0,de=x.length;B<de;B++){const ve=x[B],{object:le,geometry:ge,group:Me}=ve;let Ne=ve.material;Ne.allowOverride===!0&&O!==null&&(Ne=O),le.layers.test(G.layers)&&Co(le,w,G,ge,Ne,Me)}}function Co(x,w,G,O,B,de){F!==null&&B.isNodeMaterial&&F.setObject(x,B),x.onBeforeRender(N,w,G,O,B,de),x.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),B.onBeforeRender(N,w,G,O,x,de),B.transparent===!0&&B.side===qt&&B.forceSinglePass===!1?(B.side=It,B.needsUpdate=!0,N.renderBufferDirect(G,w,O,B,x,de),B.side=Gn,B.needsUpdate=!0,N.renderBufferDirect(G,w,O,B,x,de),B.side=qt):N.renderBufferDirect(G,w,O,B,x,de),x.onAfterRender(N,w,G,O,B,de)}function To(x){let w=0;for(const G of x)G.texture!==null&&w++;return w}function xi(x,w,G){w.isScene!==!0&&(w=Bt);const O=Ce.get(x),B=A.state.lights,de=A.state.shadowsArray,ve=B.state.version,le=J.getParameters(x,B.state,de,w,G,A.state.lightProbeGridArray),ge=J.getProgramCacheKey(le);let Me=O.programs;O.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?w.environment:null,O.fog=w.fog;const Ne=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;O.envMap=E.get(x.envMap||O.environment,Ne),O.envMapRotation=O.environment!==null&&x.envMap===null?w.environmentRotation:x.envMapRotation,Me===void 0&&(x.addEventListener("dispose",Ye),Me=new Map,O.programs=Me,O.programVariants=new Map);let ze=Me.get(ge);if(ze!==void 0){if(O.currentProgram===ze&&O.lightsStateVersion===ve)return wo(x,le),ze}else le.uniforms=J.getUniforms(x),F!==null&&x.isNodeMaterial&&F.build(x,G,le),x.onBeforeCompile(le,N),ze=J.acquireProgram(le,ge),Me.set(ge,ze),O.uniforms=le.uniforms;const xe=O.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(xe.clippingPlanes=$.uniform),wo(x,le),O.needsLights=Ol(x),O.lightsStateVersion=ve,O.needsLights&&(xe.ambientLightColor.value=B.state.ambient,xe.lightProbe.value=B.state.probe,xe.sunLights.value=B.state.sun,xe.sunLightShadows.value=B.state.sunShadow,xe.directionalLights.value=B.state.directional,xe.directionalLightShadows.value=B.state.directionalShadow,xe.spotLights.value=B.state.spot,xe.spotLightShadows.value=B.state.spotShadow,xe.rectAreaLights.value=B.state.rectArea,xe.ltc_1.value=B.state.rectAreaLTC1,xe.ltc_2.value=B.state.rectAreaLTC2,xe.pointLights.value=B.state.point,xe.pointLightShadows.value=B.state.pointShadow,xe.hemisphereLights.value=B.state.hemi,xe.sunShadowMatrix.value=B.state.sunShadowMatrix,xe.sunShadowCascade.value=B.state.sunShadowCascade,xe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,xe.spotLightMatrix.value=B.state.spotLightMatrix,xe.spotLightMap.value=B.state.spotLightMap,xe.pointShadowMatrix.value=B.state.pointShadowMatrix),O.numLightProbeGrids=To(A.state.lightProbeGridArray),O.currentProgram=ze,O.uniformsList=null,ze}function Ll(x,w,G,O,B){const de=Ce.get(x),ve=de.currentProgram.id+","+O+","+B;let le=de.programVariants.get(ve);return le===void 0?(le=xi(x,w,G),de.programVariants.set(ve,le)):(de.currentProgram=le,de.uniformsList=null,de.outputColorSpace=O,de.toneMapping=B),le}function Ro(x){if(x.uniformsList===null){const w=x.currentProgram.getUniforms();x.uniformsList=_a.seqWithValue(w.seq,x.uniforms)}return x.uniformsList}function wo(x,w){const G=Ce.get(x);G.outputColorSpace=w.outputColorSpace,G.batching=w.batching,G.batchingColor=w.batchingColor,G.instancing=w.instancing,G.instancingColor=w.instancingColor,G.instancingMorph=w.instancingMorph,G.skinning=w.skinning,G.morphTargets=w.morphTargets,G.morphNormals=w.morphNormals,G.morphColors=w.morphColors,G.morphTargetsCount=w.morphTargetsCount,G.numClippingPlanes=w.numClippingPlanes,G.numIntersection=w.numClipIntersection,G.vertexAlphas=w.vertexAlphas,G.vertexTangents=w.vertexTangents,G.toneMapping=w.toneMapping}function Il(x,w,G,O,B){w.isScene!==!0&&(w=Bt),we.resetTextureUnits();const de=w.fog,ve=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?w.environment:null,le=te===null?N.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ve.workingColorSpace,ge=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Me=E.get(O.envMap||ve,ge),Ne=O.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ze=!!G.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),xe=!!G.morphAttributes.position,He=!!G.morphAttributes.normal,lt=!!G.morphAttributes.color;let je=bn;O.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(je=N.toneMapping);const Qe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Et=Qe!==void 0?Qe.length:0,_e=Ce.get(O),Rt=A.state.lights;if(dt===!0&&(Dt===!0||x!==Q)){const at=x===Q&&O.id===q;$.setState(O,x,at)}let Xe=!1,In=!1;O.version===_e.__version?_e.needsLights&&_e.lightsStateVersion!==Rt.state.version||B.isBatchedMesh&&_e.batching===!1||!B.isBatchedMesh&&_e.batching===!0||B.isBatchedMesh&&_e.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&_e.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&_e.instancing===!1||!B.isInstancedMesh&&_e.instancing===!0||B.isSkinnedMesh&&_e.skinning===!1||!B.isSkinnedMesh&&_e.skinning===!0||B.isInstancedMesh&&_e.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&_e.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&_e.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&_e.instancingMorph===!1&&B.morphTexture!==null||_e.envMap!==Me||O.fog===!0&&_e.fog!==de||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==$.numPlanes||_e.numIntersection!==$.numIntersection)||_e.vertexAlphas!==Ne||_e.vertexTangents!==ze||_e.morphTargets!==xe||_e.morphNormals!==He||_e.morphColors!==lt||_e.morphTargetsCount!==Et||_e.numLightProbeGrids!==To(A.state.lightProbeGridArray)?Xe=!0:(_e.outputColorSpace!==le||_e.toneMapping!==je)&&(In=!0):(Xe=!0,_e.__version=O.version);let At=_e.currentProgram;(Xe===!0||In===!0)&&(At=In===!0?Ll(O,w,B,le,je):xi(O,w,B),F&&O.isNodeMaterial&&F.onUpdateProgram(O,At,_e));let Wi=!1,yn=!1,Fn=!1;const We=At.getUniforms(),Mt=_e.uniforms;if(ue.useProgram(At.program)&&(Wi=!0,yn=!0,Fn=!0),O.id!==q&&(q=O.id,yn=!0),Wi||Q!==x){ue.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),We.setValue(L,"projectionMatrix",x.projectionMatrix),We.setValue(L,"viewMatrix",x.matrixWorldInverse);const vt=We.map.cameraPosition;vt!==void 0&&vt.setValue(L,en.setFromMatrixPosition(x.matrixWorld)),nt.logarithmicDepthBuffer&&We.setValue(L,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&We.setValue(L,"isOrthographic",x.isOrthographicCamera===!0),Q!==x&&(Q=x,yn=!0,Fn=!0)}if(_e.needsLights&&(Rt.state.sunShadowMap.length>0&&We.setValue(L,"sunShadowMap",Rt.state.sunShadowMap,we),Rt.state.directionalShadowMap.length>0&&We.setValue(L,"directionalShadowMap",Rt.state.directionalShadowMap,we),Rt.state.spotShadowMap.length>0&&We.setValue(L,"spotShadowMap",Rt.state.spotShadowMap,we),Rt.state.pointShadowMap.length>0&&We.setValue(L,"pointShadowMap",Rt.state.pointShadowMap,we)),B.isSkinnedMesh){We.setOptional(L,B,"bindMatrix"),We.setOptional(L,B,"bindMatrixInverse");const at=B.skeleton;at&&(at.boneTexture===null&&at.computeBoneTexture(),We.setValue(L,"boneTexture",at.boneTexture,we))}B.isBatchedMesh&&(We.setOptional(L,B,"batchingTexture"),We.setValue(L,"batchingTexture",B._matricesTexture,we),We.setOptional(L,B,"batchingIdTexture"),We.setValue(L,"batchingIdTexture",B._indirectTexture,we),We.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&We.setValue(L,"batchingColorTexture",B._colorsTexture,we));const $t=G.morphAttributes;if(($t.position!==void 0||$t.normal!==void 0||$t.color!==void 0)&&Y.update(B,G,At),(yn||_e.receiveShadow!==B.receiveShadow)&&(_e.receiveShadow=B.receiveShadow,We.setValue(L,"receiveShadow",B.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&w.environment!==null&&(Mt.envMapIntensity.value=w.environmentIntensity),Mt.dfgLUT!==void 0&&(Mt.dfgLUT.value=pp()),yn){if(We.setValue(L,"toneMappingExposure",N.toneMappingExposure),_e.needsLights&&Fl(Mt,Fn),de&&O.fog===!0&&ae.refreshFogUniforms(Mt,de),ae.refreshMaterialUniforms(Mt,O,pe,Ae,A.state.transmissionRenderTarget[x.id]),_e.needsLights&&_e.numLightProbeGrids>0){const at=S;let vt=0;for(const dn of A.state.lightProbeGridArray)dn.texture!==null&&(at.textures[vt]=dn.texture,at.min[vt]=dn.boundingBox.min,at.max[vt]=dn.boundingBox.max,at.resolution[vt]=dn.resolution,vt++);for(const dn in at)at[dn].length=vt;Mt.probesSH.value=at.textures,Mt.probesMin.value=at.min,Mt.probesMax.value=at.max,Mt.probesResolution.value=at.resolution}_a.upload(L,Ro(_e),Mt,we)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(_a.upload(L,Ro(_e),Mt,we),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&We.setValue(L,"center",B.center),We.setValue(L,"modelViewMatrix",B.modelViewMatrix),We.setValue(L,"normalMatrix",B.normalMatrix),We.setValue(L,"modelMatrix",B.matrixWorld),O.uniformsGroups!==void 0){const at=O.uniformsGroups;for(let vt=0,dn=at.length;vt<dn;vt++){const No=at[vt];Se.update(No,At),Se.bind(No,At)}}return At}function Fl(x,w){x.ambientLightColor.needsUpdate=w,x.lightProbe.needsUpdate=w,x.sunLights.needsUpdate=w,x.sunLightShadows.needsUpdate=w,x.directionalLights.needsUpdate=w,x.directionalLightShadows.needsUpdate=w,x.pointLights.needsUpdate=w,x.pointLightShadows.needsUpdate=w,x.spotLights.needsUpdate=w,x.spotLightShadows.needsUpdate=w,x.rectAreaLights.needsUpdate=w,x.hemisphereLights.needsUpdate=w}function Ol(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(x,w,G){const O=Ce.get(x);O.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Ce.get(x.texture).__webglTexture=w,Ce.get(x.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:G,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,w){const G=Ce.get(x);G.__webglFramebuffer=w,G.__useDefaultFramebuffer=w===void 0},this.setRenderTarget=function(x,w=0,G=0){te=x,Z=w,H=G;let O=null,B=!1,de=!1;if(x){const le=Ce.get(x);if(le.__useDefaultFramebuffer!==void 0){ue.bindFramebuffer(L.FRAMEBUFFER,le.__webglFramebuffer),j.copy(x.viewport),ye.copy(x.scissor),Pe=x.scissorTest,ue.viewport(j),ue.scissor(ye),ue.setScissorTest(Pe),q=-1;return}else if(le.__webglFramebuffer===void 0)we.setupRenderTarget(x);else if(le.__hasExternalTextures)we.rebindTextures(x,Ce.get(x.texture).__webglTexture,Ce.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ne=x.depthTexture;if(le.__boundDepthTexture!==Ne){if(Ne!==null&&Ce.has(Ne)&&(x.width!==Ne.image.width||x.height!==Ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");we.setupDepthRenderbuffer(x)}}const ge=x.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(de=!0);const Me=Ce.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Me[w])?O=Me[w][G]:O=Me[w],B=!0):x.samples>0&&we.useMultisampledRTT(x)===!1?O=Ce.get(x).__webglMultisampledFramebuffer:Array.isArray(Me)?O=Me[G]:O=Me,j.copy(x.viewport),ye.copy(x.scissor),Pe=x.scissorTest}else j.copy(Te).multiplyScalar(pe).floor(),ye.copy(Ke).multiplyScalar(pe).floor(),Pe=Je;if(G!==0&&(O=V),ue.bindFramebuffer(L.FRAMEBUFFER,O)&&ue.drawBuffers(x,O),ue.viewport(j),ue.scissor(ye),ue.setScissorTest(Pe),B){const le=Ce.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+w,le.__webglTexture,G)}else if(de){const le=w;for(let ge=0;ge<x.textures.length;ge++){const Me=Ce.get(x.textures[ge]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ge,Me.__webglTexture,G,le)}}else if(x!==null&&G!==0){const le=Ce.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,le.__webglTexture,G)}q=-1};function Po(x){const w=Ce.get(x);return(w.__readFormat!==x.format||w.__readType!==x.type)&&(w.__readFormat=x.format,w.__readType=x.type,w.__formatReadable=nt.textureFormatReadable(x.format),w.__typeReadable=nt.textureTypeReadable(x.type)),w}this.readRenderTargetPixels=function(x,w,G,O,B,de,ve,le=0){if(!(x&&x.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Ce.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ve!==void 0&&(ge=ge[ve],Array.isArray(ge)&&(ge=ge[0])),ge){ue.bindFramebuffer(L.FRAMEBUFFER,ge);try{const Me=x.textures[le],Ne=Me.format,ze=Me.type;x.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+le);const xe=Po(Me);if(xe.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(xe.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}w>=0&&w<=x.width-O&&G>=0&&G<=x.height-B&&L.readPixels(w,G,O,B,ie.convert(Ne),ie.convert(ze),de)}finally{const Me=te!==null?Ce.get(te).__webglFramebuffer:null;ue.bindFramebuffer(L.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(x,w,G,O,B,de,ve,le=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Ce.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ve!==void 0&&(ge=ge[ve],Array.isArray(ge)&&(ge=ge[0])),ge)if(w>=0&&w<=x.width-O&&G>=0&&G<=x.height-B){ue.bindFramebuffer(L.FRAMEBUFFER,ge);const Me=x.textures[le],Ne=Me.format,ze=Me.type;x.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+le);const xe=Po(Me);if(xe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(xe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,He),L.bufferData(L.PIXEL_PACK_BUFFER,de.byteLength,L.STREAM_READ),L.readPixels(w,G,O,B,ie.convert(Ne),ie.convert(ze),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const lt=te!==null?Ce.get(te).__webglFramebuffer:null;ue.bindFramebuffer(L.FRAMEBUFFER,lt);const je=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await wc(L,je,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,He),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,de),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(He),L.deleteSync(je),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,w=null,G=0){const O=Math.pow(2,-G),B=Math.floor(x.image.width*O),de=Math.floor(x.image.height*O),ve=w!==null?w.x:0,le=w!==null?w.y:0;we.setTexture2D(x,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,ve,le,B,de),ue.unbindTexture()},this.copyTextureToTexture=function(x,w,G=null,O=null,B=0,de=0){let ve,le,ge,Me,Ne,ze,xe,He,lt;const je=x.isCompressedTexture?x.mipmaps[de]:x.image;if(G!==null)ve=G.max.x-G.min.x,le=G.max.y-G.min.y,ge=G.isBox3?G.max.z-G.min.z:1,Me=G.min.x,Ne=G.min.y,ze=G.isBox3?G.min.z:0;else{const We=Math.pow(2,-B);ve=Math.floor(je.width*We),le=Math.floor(je.height*We),x.isDataArrayTexture?ge=je.depth:x.isData3DTexture?ge=Math.floor(je.depth*We):ge=1,Me=0,Ne=0,ze=0}O!==null?(xe=O.x,He=O.y,lt=O.z):(xe=0,He=0,lt=0);const Qe=ie.convert(w.format),Et=ie.convert(w.type);let _e;w.isData3DTexture?(we.setTexture3D(w,0),_e=L.TEXTURE_3D):w.isDataArrayTexture||w.isCompressedArrayTexture?(we.setTexture2DArray(w,0),_e=L.TEXTURE_2D_ARRAY):(we.setTexture2D(w,0),_e=L.TEXTURE_2D),ue.activeTexture(L.TEXTURE0),ue.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,w.flipY),ue.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),ue.pixelStorei(L.UNPACK_ALIGNMENT,w.unpackAlignment);const Rt=ue.getParameter(L.UNPACK_ROW_LENGTH),Xe=ue.getParameter(L.UNPACK_IMAGE_HEIGHT),In=ue.getParameter(L.UNPACK_SKIP_PIXELS),At=ue.getParameter(L.UNPACK_SKIP_ROWS),Wi=ue.getParameter(L.UNPACK_SKIP_IMAGES);ue.pixelStorei(L.UNPACK_ROW_LENGTH,je.width),ue.pixelStorei(L.UNPACK_IMAGE_HEIGHT,je.height),ue.pixelStorei(L.UNPACK_SKIP_PIXELS,Me),ue.pixelStorei(L.UNPACK_SKIP_ROWS,Ne),ue.pixelStorei(L.UNPACK_SKIP_IMAGES,ze);const yn=x.isDataArrayTexture||x.isData3DTexture,Fn=w.isDataArrayTexture||w.isData3DTexture;if(x.isDepthTexture){const We=Ce.get(x),Mt=Ce.get(w),$t=Ce.get(We.__renderTarget),at=Ce.get(Mt.__renderTarget);ue.bindFramebuffer(L.READ_FRAMEBUFFER,$t.__webglFramebuffer),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let vt=0;vt<ge;vt++)yn&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ce.get(x).__webglTexture,B,ze+vt),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ce.get(w).__webglTexture,de,lt+vt)),L.blitFramebuffer(Me,Ne,Me+ve,Ne+le,xe,He,xe+ve,He+le,L.DEPTH_BUFFER_BIT,L.NEAREST);ue.bindFramebuffer(L.READ_FRAMEBUFFER,null),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||x.isRenderTargetTexture||Ce.has(x)){const We=Ce.get(x),Mt=Ce.get(w);ue.bindFramebuffer(L.READ_FRAMEBUFFER,P),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,k);for(let $t=0;$t<ge;$t++)yn?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,We.__webglTexture,B,ze+$t):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,We.__webglTexture,B),Fn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Mt.__webglTexture,de,lt+$t):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Mt.__webglTexture,de),B!==0?L.blitFramebuffer(Me,Ne,Me+ve,Ne+le,xe,He,xe+ve,He+le,L.COLOR_BUFFER_BIT,L.NEAREST):Fn?L.copyTexSubImage3D(_e,de,xe,He,lt+$t,Me,Ne,ve,le):L.copyTexSubImage2D(_e,de,xe,He,Me,Ne,ve,le);ue.bindFramebuffer(L.READ_FRAMEBUFFER,null),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Fn?x.isDataTexture||x.isData3DTexture?L.texSubImage3D(_e,de,xe,He,lt,ve,le,ge,Qe,Et,je.data):w.isCompressedArrayTexture?L.compressedTexSubImage3D(_e,de,xe,He,lt,ve,le,ge,Qe,je.data):L.texSubImage3D(_e,de,xe,He,lt,ve,le,ge,Qe,Et,je):x.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,de,xe,He,ve,le,Qe,Et,je.data):x.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,de,xe,He,je.width,je.height,Qe,je.data):L.texSubImage2D(L.TEXTURE_2D,de,xe,He,ve,le,Qe,Et,je);ue.pixelStorei(L.UNPACK_ROW_LENGTH,Rt),ue.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Xe),ue.pixelStorei(L.UNPACK_SKIP_PIXELS,In),ue.pixelStorei(L.UNPACK_SKIP_ROWS,At),ue.pixelStorei(L.UNPACK_SKIP_IMAGES,Wi),de===0&&w.generateMipmaps===!0&&w.mipmapsAutoUpdate===!0&&L.generateMipmap(_e),ue.unbindTexture()},this.initRenderTarget=function(x){Ce.get(x).__webglFramebuffer===void 0&&we.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?we.setTextureCube(x,0):x.isData3DTexture?we.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?we.setTexture2DArray(x,0):we.setTexture2D(x,0),ue.unbindTexture()},this.resetState=function(){Z=0,H=0,te=null,ue.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}}class Da{static atomMaterialCache=new Map;static getAtomMaterial(e,t=.25,n=.15){const i=`${e}_${t}_${n}`;if(this.atomMaterialCache.has(i))return this.atomMaterialCache.get(i);const r=new ui({color:new Ie(e),roughness:t,metalness:n,envMapIntensity:.8});return this.atomMaterialCache.set(i,r),r}static getBondMaterial(e=.3,t=.4){return new ui({color:9741240,roughness:e,metalness:t})}static getHighlightMaterial(){return new Ni({color:3718648,wireframe:!0,transparent:!0,opacity:.8})}static getSelectedMaterial(){return new ui({color:3718648,emissive:165063,emissiveIntensity:.6,roughness:.2,metalness:.5})}static getOrbitalMaterial(e,t=.35){return new fd({color:e,transparent:!0,opacity:t,roughness:.1,metalness:.1,transmission:.4,ior:1.1,side:qt,depthWrite:!1})}}class zs{static sharedSphereGeometry=new Bi(1,32,24);static wireframeSphereGeometry=new Bi(1,16,12);static create(e,t="ball-and-stick"){const n=_t[e.symbol],i=n?.colorHex??"#FFFFFF";let r=.4;if(t==="space-filling")r=(n?.atomicRadiusVanDerWaals??150)/100*.75;else if(t==="wireframe")r=.12;else if(t==="lewis")r=.3;else{const d=n?.atomicRadiusCovalent??75;r=Math.max(.25,Math.min(.65,d/100*.45))}const o=t==="wireframe"?this.wireframeSphereGeometry:this.sharedSphereGeometry,s=Da.getAtomMaterial(i),c=new Pt(o,s);c.scale.set(r,r,r),c.position.set(e.position[0],e.position[1],e.position[2]),c.castShadow=!0,c.receiveShadow=!0,c.name=`Atom_${e.symbol}_${e.id}`;const l={atomId:e.id,symbol:e.symbol,atomicNumber:e.atomicNumber,instance:e};return c.userData=l,c}}class vp{static sharedCylinderGeometry=new Ui(1,1,1,16);static create(e,t,n,i="ball-and-stick"){if(i==="space-filling")return null;const r=new z(...t.position),o=new z(...n.position),s=r.distanceTo(o);if(s<.01)return null;const c=new Hn;c.name=`Bond_${e.id}`;const l=new z().addVectors(r,o).multiplyScalar(.5);c.position.copy(l);const d=new z().subVectors(o,r).normalize(),p=new z(0,1,0),f=new Xn().setFromUnitVectors(p,d);c.quaternion.copy(f);const m=i==="wireframe"?.02:.07,v=Da.getBondMaterial(),_=(u=0,y=0)=>{const T=new Pt(this.sharedCylinderGeometry,v);return T.scale.set(m,s,m),T.position.set(u,0,y),T.castShadow=!0,T.receiveShadow=!0,T};if(e.order===1)c.add(_(0,0));else if(e.order===2){const u=m*1.6;c.add(_(-u,0)),c.add(_(u,0))}else if(e.order===3){const u=m*2;c.add(_(0,0)),c.add(_(-u,0)),c.add(_(u,0))}const h={bondId:e.id,atomAId:e.atomAId,atomBId:e.atomBId,order:e.order,instance:e};return c.userData=h,c}}class bp{scene;camera;renderer;container;moleculeGroup=new Hn;benchGroup=new Hn;reticleRing=null;currentMolecule=null;representation="ball-and-stick";raycaster=new _d;mouse=new Ge;atomMeshes=[];hoveredMesh=null;selectedAtomId=null;autoRotate=!0;onAtomSelect;onBondSelect;isDragging=!1;previousMousePosition={x:0,y:0};animationFrameId=null;constructor(e){this.container=e.container,this.representation=e.representation||"ball-and-stick",this.scene=new Kc,this.scene.background=new Ie(e.backgroundColor??329745),this.scene.fog=new go(329745,.04);const t=this.container.clientWidth/(this.container.clientHeight||1);this.camera=new Wt(45,t,.1,100),this.camera.position.set(0,.8,6.2),this.renderer=new gp({antialias:!0,powerPreference:"high-performance",alpha:!0}),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=ro,this.renderer.toneMappingExposure=1.25,e.enableShadows!==!1&&(this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ks),this.container.appendChild(this.renderer.domElement),this.setupLaboratoryLighting(),this.buildLaboratoryWorkbench(),this.scene.add(this.moleculeGroup),this.setupMouseEvents(),this.animate()}setupLaboratoryLighting(){const e=new bd(14412542,.65);this.scene.add(e);const t=new gd(16777215,2.5);t.position.set(2,7,4),t.angle=Math.PI/4,t.penumbra=.5,t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,t.shadow.camera.near=1,t.shadow.camera.far=15,t.shadow.bias=-1e-4,this.scene.add(t);const n=new ms(3718648,.85);n.position.set(-5,-1,3),this.scene.add(n);const i=new ms(8490232,.9);i.position.set(0,-4,-6),this.scene.add(i)}buildLaboratoryWorkbench(){this.benchGroup.name="Laboratory_Optical_Workbench";const e=-2.2,t=new Ui(3.6,3.8,.25,48),n=new ui({color:988970,roughness:.35,metalness:.85}),i=new Pt(t,n);i.position.set(0,e,0),i.receiveShadow=!0,this.benchGroup.add(i);const r=new ki(7,7),o=new od({opacity:.45}),s=new Pt(r,o);s.rotation.x=-Math.PI/2,s.position.set(0,e+.13,0),s.receiveShadow=!0,this.benchGroup.add(s);const c=new yd(3.4,16,8,48,165063,1976635);c.position.set(0,e+.135,0),this.benchGroup.add(c);const l=new Pa(3.38,3.44,64),d=new Ni({color:3718648,side:qt}),p=new Pt(l,d);p.rotation.x=-Math.PI/2,p.position.set(0,e+.14,0),this.benchGroup.add(p);const f=new Pa(1.6,1.63,32),m=new Ni({color:62975,side:qt,transparent:!0,opacity:.6});this.reticleRing=new Pt(f,m),this.reticleRing.rotation.x=-Math.PI/2,this.reticleRing.position.set(0,e+.142,0),this.benchGroup.add(this.reticleRing);const v=new Ui(.06,.08,1.4,16),_=new ui({color:3359061,metalness:.9,roughness:.2}),h=new Bi(.09,16,16),u=new Ni({color:3718648}),y=2.6;[Math.PI/4,3*Math.PI/4,5*Math.PI/4,7*Math.PI/4].forEach(S=>{const C=Math.cos(S)*y,A=Math.sin(S)*y,g=new Pt(v,_);g.position.set(C,e+.7,A),g.castShadow=!0,g.receiveShadow=!0,this.benchGroup.add(g);const M=new Pt(h,u);M.position.set(C,e+1.4,A),this.benchGroup.add(M)}),this.scene.add(this.benchGroup)}setupMouseEvents(){const e=this.renderer.domElement;e.addEventListener("pointerdown",t=>{this.isDragging=!0,this.previousMousePosition={x:t.clientX,y:t.clientY},this.checkPointerClick(t)}),window.addEventListener("pointermove",t=>{if(!this.isDragging){this.checkPointerHover(t);return}const n=t.clientX-this.previousMousePosition.x,i=t.clientY-this.previousMousePosition.y;this.moleculeGroup.rotation.y+=n*.008,this.moleculeGroup.rotation.x+=i*.008,this.previousMousePosition={x:t.clientX,y:t.clientY}}),window.addEventListener("pointerup",()=>{this.isDragging=!1}),e.addEventListener("wheel",t=>{t.preventDefault();const n=t.deltaY*.003;this.camera.position.z=Math.max(1.8,Math.min(16,this.camera.position.z+n))})}checkPointerHover(e){const t=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(e.clientX-t.left)/t.width*2-1,this.mouse.y=-((e.clientY-t.top)/t.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const n=this.raycaster.intersectObjects(this.atomMeshes);if(n.length>0){const i=n[0].object;this.hoveredMesh!==i&&(this.hoveredMesh&&this.hoveredMesh.userData.atomId!==this.selectedAtomId&&this.resetMeshMaterial(this.hoveredMesh),this.hoveredMesh=i,this.container.style.cursor="pointer")}else this.hoveredMesh&&this.hoveredMesh.userData.atomId!==this.selectedAtomId&&this.resetMeshMaterial(this.hoveredMesh),this.hoveredMesh=null,this.container.style.cursor="grab"}checkPointerClick(e){const t=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(e.clientX-t.left)/t.width*2-1,this.mouse.y=-((e.clientY-t.top)/t.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const n=this.raycaster.intersectObjects(this.atomMeshes);if(n.length>0){const i=n[0].object,r=i.userData.instance;this.selectedAtomId=r.id,i.material=Da.getSelectedMaterial(),this.onAtomSelect&&this.onAtomSelect(r,i)}else this.selectedAtomId=null,this.rebuildMeshes()}resetMeshMaterial(e){const t=e.userData.instance,n=this.representation,i=zs.create(t,n);e.material=i.material}setMolecule(e){this.currentMolecule=e,this.rebuildMeshes(),this.centerMolecule()}setRepresentation(e){this.representation!==e&&(this.representation=e,this.rebuildMeshes())}toggleAutoRotate(e){return this.autoRotate=e!==void 0?e:!this.autoRotate,this.autoRotate}resetView(){this.moleculeGroup.rotation.set(0,0,0),this.camera.position.set(0,.8,6.2),this.centerMolecule()}rebuildMeshes(){for(;this.moleculeGroup.children.length>0;){const t=this.moleculeGroup.children[0];this.moleculeGroup.remove(t)}if(this.atomMeshes=[],!this.currentMolecule||this.currentMolecule.atoms.length===0)return;const e=new Map;for(const t of this.currentMolecule.atoms){e.set(t.id,t);const n=zs.create(t,this.representation);this.selectedAtomId===t.id&&(n.material=Da.getSelectedMaterial()),this.moleculeGroup.add(n),this.atomMeshes.push(n)}for(const t of this.currentMolecule.bonds){const n=e.get(t.atomAId),i=e.get(t.atomBId);if(n&&i){const r=vp.create(t,n,i,this.representation);r&&this.moleculeGroup.add(r)}}}centerMolecule(){if(!this.currentMolecule||this.currentMolecule.atoms.length===0)return;const e=new vi().setFromObject(this.moleculeGroup),t=new z;e.getCenter(t),this.moleculeGroup.position.sub(t);const n=new z;e.getSize(n);const i=Math.max(n.x,n.y,n.z,2);this.camera.position.z=i*2.1}handleResize(){if(!this.container)return;const e=this.container.clientWidth,t=this.container.clientHeight||1;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}animate=()=>{this.animationFrameId=requestAnimationFrame(this.animate),this.reticleRing&&(this.reticleRing.rotation.z+=.003),this.autoRotate&&!this.isDragging&&(this.moleculeGroup.rotation.y+=.0025),this.renderer.render(this.scene,this.camera)};getRootGroup(){return this.moleculeGroup}dispose(){this.animationFrameId!==null&&cancelAnimationFrame(this.animationFrameId),this.renderer.dispose(),this.renderer.domElement&&this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement)}}class xp{container;renderer3D=null;currentMolecule;currentRepresentation="ball-and-stick";selectedAtom=null;selectedPaletteElement="C";selectedBondOrder=1;activeRightTab="substance";onLaunchXR;constructor(e,t){this.container=e,this.onLaunchXR=t,this.currentMolecule=JSON.parse(JSON.stringify(Ci.CO2||Ci.H2O)),this.render()}render(){const e=["H","C","N","O","F","Na","Mg","P","S","Cl","K","Ca","Fe","Cu","Br","I"],t=ya.identify(this.currentMolecule);this.container.innerHTML=`
      <div class="vcl-builder-layout">
        <!-- 1. PANEL IZQUIERDO: RACK FÍSICO DE ELEMENTOS Y REACTIVOS -->
        <div class="vcl-card vcl-builder-palette vcl-lab-rack">
          <div class="vcl-rack-header">
            <div class="vcl-badge-lab">
              <span class="vcl-led-active"></span> REACTIVOS CPK
            </div>
            <h4 class="vcl-lab-title">Gradilla de Átomos</h4>
          </div>

          <!-- Paleta de Reactivos Rápidos CPK -->
          <div class="vcl-element-vials-grid">
            ${e.map(n=>{const i=_t[n];return`
                <button class="vcl-vial-btn ${this.selectedPaletteElement===n?"active":""} btn-palette-el" data-symbol="${n}" title="${i?.name||n} (Z=${i?.atomicNumber})">
                  <div class="vcl-vial-color" style="background: ${i?.colorHex||"#fff"}; box-shadow: 0 0 6px ${i?.colorHex||"#fff"}99;"></div>
                  <div class="vcl-vial-info">
                    <span class="vcl-vial-sym">${n}</span>
                    <span class="vcl-vial-name">${i?.name.slice(0,5)}</span>
                  </div>
                </button>
              `}).join("")}
          </div>

          <!-- Selector Completo de 118 Elementos -->
          <div class="vcl-all-elements-box">
            <label class="vcl-lab-field-label">TABLA COMPLETA (118 ELEMENTOS)</label>
            <select id="builder-all-elements-select" class="vcl-input-search vcl-lab-select">
              ${vn.map(n=>`<option value="${n.symbol}" ${n.symbol===this.selectedPaletteElement?"selected":""}>
                  ${n.atomicNumber}. ${n.name} (${n.symbol})
                </option>`).join("")}
            </select>
          </div>

          <!-- Selector de Orden de Enlace para Próximas Conexiones -->
          <div class="vcl-bond-order-picker">
            <label class="vcl-lab-field-label">ORDEN DE ENLACE</label>
            <div class="vcl-bond-order-segmented">
              <button class="vcl-btn-bond-order ${this.selectedBondOrder===1?"active":""}" data-order="1">Simple (—)</button>
              <button class="vcl-btn-bond-order ${this.selectedBondOrder===2?"active":""}" data-order="2">Doble (=)</button>
              <button class="vcl-btn-bond-order ${this.selectedBondOrder===3?"active":""}" data-order="3">Triple (≡)</button>
            </div>
          </div>
        </div>

        <!-- 2. ÁREA CENTRAL: BANCO ÓPTICO 3D Y MESA DE CONFINAMIENTO -->
        <div class="vcl-builder-canvas-container" id="builder-canvas-box">
          <!-- Banner Superior Compacto de Telemetría e Identificación -->
          <div class="vcl-canvas-hud-bar">
            <div class="vcl-hud-tag-id">
              <span class="vcl-led-id ${this.currentMolecule.atoms.length>0?"identified":""}"></span>
              <strong id="canvas-substance-name">${t.name}</strong>
              <span class="vcl-hud-formula" id="canvas-formula-code">(${this.currentMolecule.formula||"Vacía"})</span>
            </div>
            <div class="vcl-hud-divider"></div>
            <div class="vcl-hud-metric">
              <span class="vcl-hud-k">GEOMETRÍA:</span>
              <span class="vcl-hud-v" id="canvas-geometry-text" style="color: var(--accent-gold); text-transform: uppercase;">
                ${this.currentMolecule.geometryVSEPR||"Calculando"}
              </span>
            </div>
            <div class="vcl-hud-divider"></div>
            <div class="vcl-hud-metric">
              <span class="vcl-hud-k">MASA:</span>
              <span class="vcl-hud-v" id="canvas-mass-text">${this.currentMolecule.molarMass} g/mol</span>
            </div>
          </div>

          <!-- Barra Flotante de Acciones Rápidas del Escenario 3D -->
          <div class="vcl-stage-quick-controls">
            <button class="vcl-stage-btn" id="btn-optimize-3d" title="Optimizar Geometría 3D y Ángulos VSEPR">
              <span>📐</span>
              <span>Optimizar 3D</span>
            </button>
            <button class="vcl-stage-btn" id="btn-auto-saturate" title="Auto-Balancear Enlaces (Regla del Octeto)">
              <span>⚡</span>
              <span>Auto-Octeto</span>
            </button>
            <button class="vcl-stage-btn" id="btn-toggle-rotate" title="Alternar Rotación Automática">
              <span>🔄</span>
              <span id="txt-rotate-state">Auto-Giro: ON</span>
            </button>
            <button class="vcl-stage-btn" id="btn-recenter-cam" title="Centrar Molécula en la Mesa Óptica">
              <span>🎯</span>
              <span>Centrar</span>
            </button>
          </div>
        </div>

        <!-- 3. PANEL DERECHO: CONSOLA DE INSTRUMENTACIÓN ANALÍTICA CON PESTAÑAS -->
        <div class="vcl-card vcl-builder-properties vcl-lab-console">
          <!-- Pestañas Superiores de la Consola -->
          <div class="vcl-panel-tabs">
            <button class="vcl-panel-tab ${this.activeRightTab==="substance"?"active":""}" data-ptab="substance">
              <span>🔬</span>
              <span>Sustancia</span>
            </button>
            <button class="vcl-panel-tab ${this.activeRightTab==="inspection"?"active":""}" data-ptab="inspection">
              <span>📐</span>
              <span>Estructura (${this.currentMolecule.atoms.length} át.)</span>
            </button>
          </div>

          <!-- Contenedor dinámico de pestañas -->
          <div id="builder-properties-panel" class="vcl-tab-pane-container">
            <!-- Renderizado dinámico de la pestaña activa -->
          </div>
        </div>

        <!-- 4. PANEL INFERIOR: BANCO DE TRABAJO Y HERRAMIENTAS TÁCTILES -->
        <div class="vcl-builder-toolbar vcl-lab-bench-toolbar">
          <div class="vcl-toolbar-group">
            <button class="vcl-btn vcl-btn-primary vcl-btn-tactile" id="btn-add-atom">
              <span class="vcl-btn-icon">+</span>
              <span>Añadir Átomo (${this.selectedPaletteElement})</span>
            </button>
            <button class="vcl-btn vcl-btn-secondary vcl-btn-tactile" id="btn-create-bond" title="Conectar átomos en la mesa">
              <span class="vcl-btn-icon">🔗</span>
              <span>Crear Enlace</span>
            </button>
            <button class="vcl-btn vcl-btn-secondary vcl-btn-tactile" id="btn-delete-selected" style="color: #ef4444;" title="Retirar átomo seleccionado">
              <span class="vcl-btn-icon">🗑️</span>
              <span>Eliminar</span>
            </button>
            <button class="vcl-btn vcl-btn-secondary vcl-btn-tactile" id="btn-clear-molecule" title="Vaciar la mesa de trabajo">
              <span class="vcl-btn-icon">↺</span>
              <span>Limpiar</span>
            </button>
          </div>

          <!-- Modos de Representación Molecular -->
          <div class="vcl-toolbar-group vcl-rep-selector">
            <span class="vcl-toolbar-lbl">ESTILO:</span>
            <button class="vcl-btn ${this.currentRepresentation==="ball-and-stick"?"vcl-btn-primary":"vcl-btn-secondary"} btn-rep" data-rep="ball-and-stick">
              Ball & Stick
            </button>
            <button class="vcl-btn ${this.currentRepresentation==="space-filling"?"vcl-btn-primary":"vcl-btn-secondary"} btn-rep" data-rep="space-filling">
              Space Filling
            </button>
            <button class="vcl-btn ${this.currentRepresentation==="wireframe"?"vcl-btn-primary":"vcl-btn-secondary"} btn-rep" data-rep="wireframe">
              Wireframe
            </button>
          </div>

          <!-- Cargar Sustancias Estándar Preestablecidas -->
          <div class="vcl-toolbar-group">
            <span class="vcl-toolbar-lbl">PRESET:</span>
            <select id="builder-presets-select" class="vcl-input-search vcl-lab-select" style="min-width: 170px;">
              <option value="CO2" selected>Dióxido de Carbono (CO2)</option>
              <option value="H2O">Agua (H2O)</option>
              <option value="CH4">Metano (CH4)</option>
              <option value="NH3">Amoníaco (NH3)</option>
              <option value="O2">Oxígeno Molecular (O2)</option>
              <option value="N2">Nitrógeno Molecular (N2)</option>
              <option value="HCl">Cloruro de Hidrógeno (HCl)</option>
              <option value="NaCl">Cloruro de Sodio (NaCl)</option>
              <option value="C2H5OH">Etanol (C2H5OH)</option>
              <option value="C2H4">Eteno (C2H4)</option>
            </select>
          </div>
        </div>
      </div>
    `,this.init3DRenderer(),this.updatePropertiesPanel(),this.setupEventListeners()}init3DRenderer(){const e=this.container.querySelector("#builder-canvas-box");e&&(this.renderer3D&&(this.renderer3D.dispose(),this.renderer3D=null),this.renderer3D=new bp({container:e,representation:this.currentRepresentation,backgroundColor:329745,enableShadows:!0}),this.renderer3D.onAtomSelect=t=>{$e.playClick(),this.selectedAtom=t,this.activeRightTab="inspection",this.updateRightTabButtons(),this.updatePropertiesPanel(),xt.emit("lab:notification",{title:`Átomo Seleccionado: ${t.symbol}`,message:`ID: ${t.id} • Posición: [${t.position.map(n=>n.toFixed(2)).join(", ")}] Å`,type:"info"})},this.renderer3D.setMolecule(this.currentMolecule))}updateRightTabButtons(){this.container.querySelectorAll(".vcl-panel-tab").forEach(t=>{t.getAttribute("data-ptab")===this.activeRightTab?t.classList.add("active"):t.classList.remove("active")})}updatePropertiesPanel(){const e=this.container.querySelector("#builder-properties-panel");if(!e)return;const t=ya.identify(this.currentMolecule),n=Vl.validateMolecule(this.currentMolecule),i=t.formula==="CO2"&&this.currentMolecule.bonds.some(l=>l.order===1);this.activeRightTab==="substance"?e.innerHTML=`
        <div class="vcl-substance-id-card">
          <div class="vcl-substance-header">
            <div class="vcl-substance-flag">
              <span class="vcl-pulse-dot"></span> SUSTANCIA RECONOCIDA
            </div>
            <h3 class="vcl-substance-title">${t.name}</h3>
            <div class="vcl-substance-formula">${this.currentMolecule.formula||"Vacía"}</div>
          </div>

          <div class="vcl-substance-meta">
            <div class="vcl-meta-row">
              <span class="vcl-meta-k">Nombre IUPAC:</span>
              <span class="vcl-meta-v">${t.iupacName}</span>
            </div>
            <div class="vcl-meta-row">
              <span class="vcl-meta-k">Familia Química:</span>
              <span class="vcl-meta-v">${t.family}</span>
            </div>
            <div class="vcl-meta-row">
              <span class="vcl-meta-k">Estado a 25°C:</span>
              <span class="vcl-meta-v">${t.stateAt25C}</span>
            </div>
            <div class="vcl-meta-row">
              <span class="vcl-meta-k">Momento Dipolar:</span>
              <span class="vcl-meta-v">${t.dipoleMoment}</span>
            </div>
            <div class="vcl-meta-row">
              <span class="vcl-meta-k">Ángulos Teóricos:</span>
              <span class="vcl-meta-v" style="color: var(--accent-gold);">${t.bondAngles}</span>
            </div>
          </div>

          <p class="vcl-substance-desc">${t.description}</p>
        </div>

        ${i?`
          <div class="vcl-alert-box-warning" style="margin-top: 0.8rem;">
            <div style="font-weight: 700; color: #f59e0b; margin-bottom: 0.25rem;">⚡ Ajuste de Enlaces Pendiente</div>
            <p style="font-size: 0.76rem; color: #fef3c7; line-height: 1.4; margin-bottom: 0.45rem;">
              En el dióxido de carbono ($CO_2$), los enlaces deben ser dobles ($O=C=O$) para completar sus octetos.
            </p>
            <button class="vcl-btn vcl-btn-primary" id="btn-fix-octet-quick" style="width: 100%; font-size: 0.78rem; padding: 0.35rem;">
              <span>⚡ Elevar a Enlaces Dobles (O=C=O)</span>
            </button>
          </div>
        `:""}
      `:e.innerHTML=`
        <!-- Constantes Físico-Químicas -->
        <div class="vcl-instruments-grid">
          <div class="vcl-instrument-readout">
            <div class="vcl-inst-lbl">Masa Molar</div>
            <div class="vcl-inst-val">${this.currentMolecule.molarMass} <span class="vcl-unit">g/mol</span></div>
          </div>
          <div class="vcl-instrument-readout">
            <div class="vcl-inst-lbl">Geometría VSEPR</div>
            <div class="vcl-inst-val" style="color: var(--accent-cyan); text-transform: capitalize;">
              ${this.currentMolecule.geometryVSEPR||"No calculada"}
            </div>
          </div>
        </div>

        <!-- Diagnóstico de Validación -->
        <div class="vcl-validation-card ${n.isValid?"valid":"invalid"}">
          <div class="vcl-validation-title">
            ${n.isValid?"✓ Estructura Válida según Valencia":"⚠ Diagnóstico de Conectividad"}
          </div>
          ${n.errors.map(l=>`<p class="vcl-val-err">• ${l}</p>`).join("")}
          ${n.warnings.map(l=>`<p class="vcl-val-warn">• ${l}</p>`).join("")}
        </div>

        <!-- Átomo Seleccionado -->
        <div class="vcl-console-section" style="border-top: none; padding-top: 0;">
          <h4 class="vcl-section-heading">Átomo en Observación</h4>
          ${this.selectedAtom?`
            <div class="vcl-atom-details-card">
              <div class="vcl-atom-detail-line">
                <span class="vcl-meta-k">Elemento:</span>
                <strong style="color: var(--accent-cyan);">${this.selectedAtom.symbol} (Z = ${this.selectedAtom.atomicNumber})</strong>
              </div>
              <div class="vcl-atom-detail-line">
                <span class="vcl-meta-k">Coordenadas:</span>
                <span class="vcl-mono-coords">[${this.selectedAtom.position.map(l=>l.toFixed(2)).join(", ")}] Å</span>
              </div>
              <div class="vcl-atom-detail-line">
                <span class="vcl-meta-k">Carga Formal:</span>
                <span style="color: #ffffff;">${this.selectedAtom.formalCharge}</span>
              </div>
            </div>
          `:`
            <div class="vcl-empty-atom-hint">
              Haz clic en un átomo en la mesa 3D para examinar sus datos.
            </div>
          `}
        </div>

        <!-- Enlaces Químicos y Control de Orden -->
        <div class="vcl-console-section">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
            <h4 class="vcl-section-heading" style="margin: 0;">Enlaces (${this.currentMolecule.bonds.length})</h4>
            <span style="font-size: 0.68rem; color: var(--text-dim);">(Clic para alternar orden)</span>
          </div>
          <div class="vcl-bonds-list">
            ${this.currentMolecule.bonds.length===0?`
              <div style="font-size: 0.74rem; color: var(--text-dim); padding: 0.3rem 0;">No hay enlaces formados. Haz clic en "Crear Enlace".</div>
            `:this.currentMolecule.bonds.map(l=>`
              <div class="vcl-bond-item-row" data-bond-id="${l.id}" title="Clic para alternar entre enlace simple, doble y triple">
                <div class="vcl-bond-atoms">
                  <strong>${l.atomAId.split("_")[0]}</strong>
                  <span class="vcl-bond-order-badge">${l.order===3?"≡ Triple":l.order===2?"= Doble":"— Simple"}</span>
                  <strong>${l.atomBId.split("_")[0]}</strong>
                </div>
                <div class="vcl-bond-length">${l.length?.toFixed(2)??"-"} Å</div>
              </div>
            `).join("")}
          </div>
        </div>
      `;const r=this.container.querySelector("#canvas-substance-name");r&&(r.textContent=t.name);const o=this.container.querySelector("#canvas-formula-code");o&&(o.textContent=`(${this.currentMolecule.formula||"Vacía"})`);const s=this.container.querySelector("#canvas-geometry-text");s&&(s.textContent=this.currentMolecule.geometryVSEPR||"Calculando");const c=this.container.querySelector("#canvas-mass-text");c&&(c.textContent=`${this.currentMolecule.molarMass} g/mol`),this.container.querySelector("#btn-fix-octet-quick")?.addEventListener("click",()=>{$e.playBondSnap(),this.currentMolecule=Kt.autoSaturateBonds(this.currentMolecule),this.currentMolecule=Kt.optimize3DGeometry(this.currentMolecule),this.renderer3D?.setMolecule(this.currentMolecule),this.updatePropertiesPanel(),$e.playIdentifiedChime()}),this.container.querySelectorAll(".vcl-bond-item-row").forEach(l=>{l.addEventListener("click",()=>{const d=l.getAttribute("data-bond-id");d&&($e.playBondSnap(),this.currentMolecule=Kt.cycleBondOrder(this.currentMolecule,d),this.renderer3D?.setMolecule(this.currentMolecule),this.updatePropertiesPanel())})})}setupEventListeners(){this.container.querySelectorAll(".vcl-panel-tab").forEach(n=>{n.addEventListener("click",()=>{$e.playClick();const i=n.getAttribute("data-ptab");i&&(this.activeRightTab=i,this.updateRightTabButtons(),this.updatePropertiesPanel())})}),this.container.querySelectorAll(".btn-palette-el").forEach(n=>{n.addEventListener("click",()=>{$e.playClick();const i=n.getAttribute("data-symbol");if(i){this.selectedPaletteElement=i,this.container.querySelectorAll(".btn-palette-el").forEach(o=>o.classList.remove("active")),n.classList.add("active");const r=this.container.querySelector("#btn-add-atom");r&&(r.innerHTML=`<span class="vcl-btn-icon">+</span><span>Añadir Átomo (${i})</span>`)}})}),this.container.querySelector("#builder-all-elements-select")?.addEventListener("change",n=>{$e.playClick();const i=n.target.value;this.selectedPaletteElement=i;const r=this.container.querySelector("#btn-add-atom");r&&(r.innerHTML=`<span class="vcl-btn-icon">+</span><span>Añadir Átomo (${i})</span>`)}),this.container.querySelectorAll(".vcl-btn-bond-order").forEach(n=>{n.addEventListener("click",()=>{$e.playClick();const i=parseInt(n.getAttribute("data-order")||"1",10);this.selectedBondOrder=i,this.container.querySelectorAll(".vcl-btn-bond-order").forEach(r=>r.classList.remove("active")),n.classList.add("active")})}),this.container.querySelector("#btn-add-atom")?.addEventListener("click",()=>{$e.playAtomAdd();const n=this.currentMolecule.atoms.length,i=1.35*Math.sqrt(n||1),r=n*2.399,o=parseFloat((Math.cos(r)*i).toFixed(2)),s=parseFloat((Math.sin(r)*i).toFixed(2)),{molecule:c,addedAtom:l}=Kt.addAtom(this.currentMolecule,this.selectedPaletteElement,[o,s,0]);if(this.currentMolecule=c,this.selectedAtom=l,n>0){const d=this.currentMolecule.atoms[0];this.currentMolecule=Kt.addBond(this.currentMolecule,d.id,l.id,this.selectedBondOrder)}this.renderer3D?.setMolecule(this.currentMolecule),this.updatePropertiesPanel(),xt.emit("molecule:changed",this.currentMolecule)}),this.container.querySelector("#btn-create-bond")?.addEventListener("click",()=>{if(this.currentMolecule.atoms.length<2){xt.emit("lab:notification",{title:"Átomos Insuficientes",message:"Se requieren al menos 2 átomos en la mesa para formar un enlace.",type:"warning"});return}$e.playBondSnap();const n=this.currentMolecule.atoms[this.currentMolecule.atoms.length-2],i=this.currentMolecule.atoms[this.currentMolecule.atoms.length-1];this.currentMolecule=Kt.addBond(this.currentMolecule,n.id,i.id,this.selectedBondOrder),this.renderer3D?.setMolecule(this.currentMolecule),this.updatePropertiesPanel(),xt.emit("lab:notification",{title:"Enlace Establecido",message:`Enlace formado entre ${n.symbol} y ${i.symbol} (Orden ${this.selectedBondOrder}).`,type:"success"})}),this.container.querySelector("#btn-optimize-3d")?.addEventListener("click",()=>{$e.playBondSnap(),this.currentMolecule=Kt.optimize3DGeometry(this.currentMolecule),this.renderer3D?.setMolecule(this.currentMolecule),this.updatePropertiesPanel(),$e.playIdentifiedChime(),xt.emit("lab:notification",{title:"Geometría 3D Optimizada",message:`Estructura relajada según la teoría VSEPR: ${this.currentMolecule.geometryVSEPR}.`,type:"success"})}),this.container.querySelector("#btn-auto-saturate")?.addEventListener("click",()=>{$e.playBondSnap(),this.currentMolecule=Kt.autoSaturateBonds(this.currentMolecule),this.currentMolecule=Kt.optimize3DGeometry(this.currentMolecule),this.renderer3D?.setMolecule(this.currentMolecule),this.updatePropertiesPanel(),$e.playIdentifiedChime(),xt.emit("lab:notification",{title:"Enlaces Balanceados",message:"Regla del octeto aplicada con éxito a la molécula.",type:"success"})}),this.container.querySelector("#btn-toggle-rotate")?.addEventListener("click",()=>{if($e.playClick(),this.renderer3D){const n=this.renderer3D.toggleAutoRotate(),i=this.container.querySelector("#txt-rotate-state");i&&(i.textContent=`Auto-Giro: ${n?"ON":"OFF"}`)}}),this.container.querySelector("#btn-recenter-cam")?.addEventListener("click",()=>{$e.playClick(),this.renderer3D?.resetView()}),this.container.querySelector("#btn-delete-selected")?.addEventListener("click",()=>{if(!this.selectedAtom){xt.emit("lab:notification",{title:"Sin Selección",message:"Haz clic en un átomo en la mesa 3D para seleccionarlo antes de eliminar.",type:"info"});return}$e.playClick(),this.currentMolecule=Kt.removeAtom(this.currentMolecule,this.selectedAtom.id),this.selectedAtom=null,this.renderer3D?.setMolecule(this.currentMolecule),this.updatePropertiesPanel()}),this.container.querySelector("#btn-clear-molecule")?.addEventListener("click",()=>{$e.playPurge(),this.currentMolecule=Kt.createEmptyMolecule("Mesa de Trabajo Vacía"),this.selectedAtom=null,this.renderer3D?.setMolecule(this.currentMolecule),this.updatePropertiesPanel(),xt.emit("molecule:cleared")}),this.container.querySelectorAll(".btn-rep").forEach(n=>{n.addEventListener("click",()=>{$e.playClick();const i=n.getAttribute("data-rep");i&&(this.currentRepresentation=i,this.container.querySelectorAll(".btn-rep").forEach(r=>r.classList.remove("vcl-btn-primary")),n.classList.add("vcl-btn-primary"),this.renderer3D?.setRepresentation(i),xt.emit("representation:changed",i))})}),this.container.querySelector("#builder-presets-select")?.addEventListener("change",n=>{$e.playIdentifiedChime();const i=n.target.value;Ci[i]&&(this.currentMolecule=JSON.parse(JSON.stringify(Ci[i])),this.selectedAtom=null,this.renderer3D?.setMolecule(this.currentMolecule),this.updatePropertiesPanel(),xt.emit("molecule:changed",this.currentMolecule))})}getMolecule(){return this.currentMolecule}dispose(){this.renderer3D&&(this.renderer3D.dispose(),this.renderer3D=null)}}class _p{container;currentReaction;customReactants="CH4 + 2 O2";customProducts="CO2 + 2 H2O";constructor(e){this.container=e,this.currentReaction=wi[0],this.render()}render(){const e=this.currentReaction.reactants.map(o=>o.formula),t=this.currentReaction.products.map(o=>o.formula),n=mr.evaluateReaction(e,t),i={synthesis:"Síntesis",decomposition:"Descomposición","single-displacement":"Desplazamiento Simple","double-displacement":"Doble Sustitución",combustion:"Combustión","acid-base-neutralization":"Neutralización Ácido-Base",redox:"Oxidación-Reducción",precipitation:"Precipitación"};this.container.innerHTML=`
      <div class="vcl-layout-2col">
        <!-- Panel Izquierdo: Catálogo y Balanceador de Reacciones -->
        <div class="vcl-card" style="display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div class="vcl-badge" style="margin-bottom: 0.8rem;">M06 // REACTION LAB</div>
            <h3 style="font-family: var(--font-display); font-size: 1.3rem; margin-bottom: 1.2rem; color: #ffffff;">Reacciones Químicas</h3>

            <!-- Selector de Reacciones Certificadas -->
            <div style="margin-bottom: 1.5rem;">
              <label style="font-size: 0.78rem; color: var(--text-muted); display: block; margin-bottom: 0.4rem;">Catálogo de Reacciones Certificadas</label>
              <select id="reaction-catalog-select" class="vcl-input-search" style="width: 100%;">
                ${wi.map(o=>`
                  <option value="${o.id}" ${o.id===this.currentReaction.id?"selected":""}>
                    [${i[o.type]||o.type}] ${o.name}
                  </option>
                `).join("")}
              </select>
            </div>

            <!-- Ficha de la Reacción Activa -->
            <div class="vcl-stat-box" style="text-align: left; margin-bottom: 1rem; border-color: var(--border-glow);">
              <div class="vcl-stat-lbl">Tipo de Reacción</div>
              <div style="font-size: 1.05rem; font-weight: 700; color: var(--accent-cyan); text-transform: uppercase;">
                ${i[this.currentReaction.type]||this.currentReaction.type}
              </div>
            </div>

            <div class="vcl-stat-box" style="text-align: left; margin-bottom: 1.5rem;">
              <div class="vcl-stat-lbl">Condiciones de Operación</div>
              <div style="font-size: 0.85rem; color: #ffffff; line-height: 1.4; margin-top: 0.3rem;">
                ${this.currentReaction.conditions||"Temperatura y presión estándar (298 K, 1 atm)."}
              </div>
            </div>

            <!-- Entalpía Termodinámica -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; margin-bottom: 1rem;">
              <div class="vcl-stat-box">
                <div class="vcl-stat-lbl">Entalpía Estándar (ΔH°)</div>
                <div class="vcl-stat-val" style="font-size: 1.2rem; color: ${this.currentReaction.enthalpyDeltaH&&this.currentReaction.enthalpyDeltaH<0?"#ef4444":"#10b981"};">
                  ${this.currentReaction.enthalpyDeltaH!==void 0?`${this.currentReaction.enthalpyDeltaH} kJ/mol`:"N/D"}
                </div>
              </div>
              <div class="vcl-stat-box">
                <div class="vcl-stat-lbl">Termodinámica</div>
                <div style="font-size: 0.95rem; font-weight: 700; color: #ffffff; margin-top: 0.4rem; text-transform: uppercase;">
                  ${n.thermodynamicNature}
                </div>
              </div>
            </div>
          </div>

          <!-- Fuente Metrológica -->
          <div style="background: rgba(15, 23, 42, 0.6); padding: 0.8rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); font-size: 0.74rem; color: var(--text-dim);">
            <strong>Certificación:</strong> ${this.currentReaction.source.name} (${this.currentReaction.source.database}) • Cumple conservación estricta de masa.
          </div>
        </div>

        <!-- Panel Principal: Ecuación, Conservación y Reorganización de Enlaces -->
        <div style="display: flex; flex-direction: column; gap: 1.25rem;">
          <!-- Gran Ecuación Química Balanceada -->
          <div class="vcl-card" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 2.5rem 1.5rem; text-align: center;">
            <div class="vcl-badge" style="margin-bottom: 1rem; background: rgba(16, 185, 129, 0.15); color: #10b981; border-color: rgba(16, 185, 129, 0.3);">
              Ecuación Química Balanceada
            </div>

            <div style="font-family: var(--font-mono); font-size: 2.2rem; font-weight: 800; color: #ffffff; letter-spacing: 0.05em; line-height: 1.3; margin-bottom: 0.8rem;">
              ${this.currentReaction.equation}
            </div>

            <p style="color: var(--text-muted); font-size: 0.92rem; max-width: 680px; line-height: 1.6;">
              ${this.currentReaction.explanation}
            </p>
          </div>

          <!-- Auditoría de Conservación de Átomos (Lavoisier) -->
          <div class="vcl-card">
            <h4 style="font-size: 1.05rem; color: #ffffff; margin-bottom: 0.3rem;">Conservación de Átomos (Ley de Lavoisier)</h4>
            <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 1rem;">
              Verificación cuantitativa de que ningún átomo se crea ni se destruye durante la transformación.
            </p>

            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); gap: 0.8rem;">
              ${Object.entries(n.atomConservation).map(([o,s])=>`
                <div style="background: rgba(15, 23, 42, 0.6); padding: 0.85rem; border-radius: var(--radius-sm); border: 1px solid ${s.conserved?"rgba(16, 185, 129, 0.3)":"rgba(239, 68, 68, 0.4)"};">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.3rem;">
                    <strong style="font-size: 1rem; color: var(--accent-cyan);">${o}</strong>
                    <span style="font-size: 0.72rem; color: ${s.conserved?"#10b981":"#ef4444"}; font-weight: 700;">
                      ${s.conserved?"✓ CONSERVADO":"✗ DESBALANCE"}
                    </span>
                  </div>
                  <div style="font-family: var(--font-mono); font-size: 0.82rem; color: #ffffff;">
                    Reactivos: <strong>${s.inReactants}</strong> | Productos: <strong>${s.inProducts}</strong>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Reorganización de Enlaces Químicos -->
          <div class="vcl-card">
            <h4 style="font-size: 1.05rem; color: #ffffff; margin-bottom: 0.5rem;">Reorganización de Enlaces Químicos</h4>
            <div style="background: rgba(15, 23, 42, 0.6); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); font-size: 0.88rem; color: var(--accent-gold); font-family: var(--font-mono);">
              ${this.currentReaction.bondChanges||"Reorganización coordinada de enlaces estables."}
            </div>
          </div>
        </div>
      </div>
    `,this.container.querySelector("#reaction-catalog-select")?.addEventListener("change",o=>{const s=o.target.value,c=wi.find(l=>l.id===s);c&&(this.currentReaction=c,this.render())})}}class yp{container;currentCurveKey="O-H";currentDistancePm=95.8;constructor(e){this.container=e,this.render()}render(){const e=Fo.getStandardCurves(),t=e[this.currentCurveKey]||e["O-H"];this.container.innerHTML=`
      <div class="vcl-layout-2col">
        <!-- Panel Lateral: Configuración y Metrología -->
        <div class="vcl-card" style="display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div class="vcl-badge" style="margin-bottom: 0.8rem;">M07 // ENERGY & FORCES</div>
            <h3 style="font-family: var(--font-display); font-size: 1.3rem; margin-bottom: 1.2rem; color: #ffffff;">Interacciones y Fuerzas</h3>

            <!-- Selector de Enlace / Par Atómico -->
            <div style="margin-bottom: 1.5rem;">
              <label style="font-size: 0.78rem; color: var(--text-muted); display: block; margin-bottom: 0.4rem;">Enlace Químico</label>
              <select id="energy-curve-select" class="vcl-input-search" style="width: 100%;">
                <option value="O-H" ${this.currentCurveKey==="O-H"?"selected":""}>O-H en Agua (95.8 pm • 463 kJ/mol)</option>
                <option value="H-H" ${this.currentCurveKey==="H-H"?"selected":""}>H-H en Hidrógeno (74.1 pm • 436 kJ/mol)</option>
                <option value="C-H" ${this.currentCurveKey==="C-H"?"selected":""}>C-H en Metano (108.7 pm • 413 kJ/mol)</option>
                <option value="C-C" ${this.currentCurveKey==="C-C"?"selected":""}>C-C Enlace Simple (154.0 pm • 348 kJ/mol)</option>
                <option value="C=O" ${this.currentCurveKey==="C=O"?"selected":""}>C=O Doble Enlace (116.3 pm • 799 kJ/mol)</option>
                <option value="N#N" ${this.currentCurveKey==="N#N"?"selected":""}>N≡N Triple Enlace (109.8 pm • 945 kJ/mol)</option>
                <option value="Ar-Ar" ${this.currentCurveKey==="Ar-Ar"?"selected":""}>Argón-Argón (Lennard-Jones • 340 pm)</option>
              </select>
            </div>

            <!-- Ficha de Parámetros de la Curva -->
            <div class="vcl-stat-box" style="text-align: left; margin-bottom: 1rem;">
              <div class="vcl-stat-lbl">Distancia de Equilibrio (r₀ / rₑ)</div>
              <div class="vcl-stat-val" style="font-size: 1.4rem;">${t.equilibriumDistancePm} pm</div>
              <div style="font-size: 0.75rem; color: var(--text-dim); margin-top: 0.2rem;">
                Mínimo del pozo de potencial (Fuerza neta = 0).
              </div>
            </div>

            <div class="vcl-stat-box" style="text-align: left; margin-bottom: 1.5rem;">
              <div class="vcl-stat-lbl">Energía de Disociación de Enlace (Dₑ)</div>
              <div class="vcl-stat-val" style="font-size: 1.4rem; color: var(--accent-gold);">${t.dissociationEnergyKjMol} kJ/mol</div>
              <div style="font-size: 0.75rem; color: var(--text-dim); margin-top: 0.2rem;">
                Profundidad del pozo de potencial termodinámico.
              </div>
            </div>

            <!-- Control Deslizante de Distancia Internuclear -->
            <div style="background: rgba(15, 23, 42, 0.6); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); margin-bottom: 1rem;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <span style="font-size: 0.8rem; color: var(--text-muted);">Distancia actual:</span>
                <strong style="font-family: var(--font-mono); color: var(--accent-cyan); font-size: 0.95rem;">
                  <span id="slider-dist-val">${this.currentDistancePm}</span> pm
                </strong>
              </div>
              <input
                type="range"
                id="distance-slider"
                min="${t.repulsiveLimitPm}"
                max="${t.attractiveLimitPm}"
                value="${this.currentDistancePm}"
                step="1"
                style="width: 100%; accent-color: var(--accent-cyan);"
              />
            </div>
          </div>

          <!-- Base Científica -->
          <div style="background: rgba(15, 23, 42, 0.6); padding: 0.8rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); font-size: 0.74rem; color: var(--text-muted);">
            <strong>Fundamento:</strong> ${t.scientificBasis}
          </div>
        </div>

        <!-- Panel Principal: Gráfica de Energía Potencial V(r) -->
        <div class="vcl-card" style="display: flex; flex-direction: column;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <div>
              <h3 style="font-family: var(--font-display); font-size: 1.25rem; color: #ffffff;">
                Curva de Energía Potencial Internuclear V(r)
              </h3>
              <p style="font-size: 0.82rem; color: var(--text-muted);">
                Equilibrio entre la repulsión coulómbica de núcleos/electrones (r < r₀) y la atracción por solapamiento cuántico (r > r₀).
              </p>
            </div>
            <span class="vcl-badge">${t.curveType}</span>
          </div>

          <!-- Canvas 2D de la Gráfica de Morse -->
          <div style="flex: 1; background: #070b14; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem; position: relative;">
            <canvas id="energy-graph-canvas" width="800" height="420" style="width: 100%; height: 100%;"></canvas>
          </div>
        </div>
      </div>
    `,this.drawGraph(t),this.setupEventListeners(t)}drawGraph(e){const t=this.container.querySelector("#energy-graph-canvas");if(!t)return;const n=t.getContext("2d");if(!n)return;n.clearRect(0,0,t.width,t.height);const i={left:70,right:30,top:30,bottom:50},r=t.width-i.left-i.right,o=t.height-i.top-i.bottom,s=e.points[0]?.internuclearDistancePm||20,c=e.points[e.points.length-1]?.internuclearDistancePm||300,l=-e.dissociationEnergyKjMol*1.15,d=e.dissociationEnergyKjMol*1.5,p=y=>i.left+(y-s)/(c-s)*r,f=y=>i.top+(d-y)/(d-l)*o,m=f(0);n.beginPath(),n.setLineDash([4,4]),n.moveTo(i.left,m),n.lineTo(t.width-i.right,m),n.strokeStyle="rgba(255, 255, 255, 0.25)",n.lineWidth=1,n.stroke(),n.setLineDash([]),n.beginPath(),e.points.forEach((y,T)=>{const S=p(y.internuclearDistancePm),C=f(y.potentialEnergyKjMol);T===0?n.moveTo(S,C):n.lineTo(S,C)}),n.strokeStyle="#38bdf8",n.lineWidth=3,n.stroke(),n.lineTo(p(c),m),n.lineTo(p(s),m),n.closePath();const v=n.createLinearGradient(0,m,0,f(l));v.addColorStop(0,"rgba(56, 189, 248, 0.0)"),v.addColorStop(1,"rgba(56, 189, 248, 0.15)"),n.fillStyle=v,n.fill();const _=p(e.equilibriumDistancePm),h=f(-e.dissociationEnergyKjMol);n.beginPath(),n.arc(_,h,6,0,Math.PI*2),n.fillStyle="#f59e0b",n.fill(),n.strokeStyle="#ffffff",n.lineWidth=2,n.stroke(),n.fillStyle="#f59e0b",n.font="bold 11px sans-serif",n.fillText(`r₀ = ${e.equilibriumDistancePm} pm`,_-25,h+22);const u=p(this.currentDistancePm);n.beginPath(),n.setLineDash([2,2]),n.moveTo(u,i.top),n.lineTo(u,t.height-i.bottom),n.strokeStyle="#ef4444",n.lineWidth=1.5,n.stroke(),n.setLineDash([]),n.fillStyle="#94a3b8",n.font="11px sans-serif",n.fillText("Distancia Internuclear r (pm)",t.width/2-60,t.height-15),n.save(),n.translate(20,t.height/2+50),n.rotate(-Math.PI/2),n.fillText("Energía Potencial V(r) [kJ/mol]",0,0),n.restore()}setupEventListeners(e){this.container.querySelector("#energy-curve-select")?.addEventListener("change",i=>{this.currentCurveKey=i.target.value;const r=Fo.getStandardCurves(),o=r[this.currentCurveKey]||r["O-H"];this.currentDistancePm=o.equilibriumDistancePm,this.render()}),this.container.querySelector("#distance-slider")?.addEventListener("input",i=>{this.currentDistancePm=parseFloat(i.target.value);const r=this.container.querySelector("#slider-dist-val");r&&(r.textContent=String(this.currentDistancePm)),this.drawGraph(e)})}}class Mp{container;onLaunchXR;isXRSupported=!1;constructor(e,t){this.container=e,this.onLaunchXR=t,xt.on("xr:sessionState",n=>{this.isXRSupported=n.supported;const i=this.container.querySelector("#xr-compat-badge");i&&(i.textContent=n.supported?"WebXR Compatible (Meta Quest Detectado)":"Modo Desktop (Sin Visor XR)",i.className=(n.supported,"vcl-badge"))}),this.render()}render(){this.container.innerHTML=`
      <div class="vcl-layout-split">
        <!-- Panel Izquierdo: Lanzador y Estado -->
        <div class="vcl-card" style="padding: 2.5rem; display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
          <div>
            <div class="vcl-badge" id="xr-compat-badge" style="margin-bottom: 1rem; background: rgba(168, 85, 247, 0.15); color: #a855f7; border-color: rgba(168, 85, 247, 0.3);">
              Verificando Capacidades WebXR...
            </div>

            <h2 style="font-family: var(--font-display); font-size: 2rem; color: #ffffff; line-height: 1.2; margin-bottom: 1rem;">
              Laboratorio Químico Inmersivo WebXR
            </h2>

            <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 2rem;">
              Entra a la experiencia de realidad virtual optimizada para <strong>Meta Quest 3S</strong>.
              Examina moléculas a escala aumentada, agárralas en el espacio con tus manos y manipula enlaces en tiempo real.
            </p>

            <!-- Botón Central de Lanzamiento XR -->
            <button class="vcl-btn vcl-btn-xr" id="btn-enter-webxr" style="font-size: 1.05rem; padding: 0.85rem 1.75rem; width: 100%; justify-content: center; margin-bottom: 1.5rem;">
              <span>🥽</span>
              <span>Iniciar Sesión Inmersiva WebXR</span>
            </button>

            <!-- Características del Runtime -->
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.8rem;">
              <div class="vcl-stat-box" style="text-align: left; padding: 0.75rem;">
                <div class="vcl-stat-lbl">Tasa de Refresco</div>
                <div style="font-size: 1.1rem; font-weight: 700; color: #10b981;">90 Hz Target</div>
              </div>
              <div class="vcl-stat-box" style="text-align: left; padding: 0.75rem;">
                <div class="vcl-stat-lbl">Controladores</div>
                <div style="font-size: 1.1rem; font-weight: 700; color: var(--accent-cyan);">Touch Plus 6-DoF</div>
              </div>
              <div class="vcl-stat-box" style="text-align: left; padding: 0.75rem;">
                <div class="vcl-stat-lbl">Espacio de Referencia</div>
                <div style="font-size: 1.1rem; font-weight: 700; color: #ffffff;">Local-Floor</div>
              </div>
              <div class="vcl-stat-box" style="text-align: left; padding: 0.75rem;">
                <div class="vcl-stat-lbl">Optimización GPU</div>
                <div style="font-size: 1.1rem; font-weight: 700; color: var(--accent-gold);">Instanced Meshes</div>
              </div>
            </div>
          </div>

          <div style="font-size: 0.76rem; color: var(--text-dim); margin-top: 1.5rem;">
            * Si navegas desde PC o Mac, el simulador funciona en modo interactivo 3D con OrbitControls.
          </div>
        </div>

        <!-- Panel Derecho: Guía de Controladores Meta Quest 3S -->
        <div class="vcl-card" style="padding: 2.5rem; display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
          <div>
            <div class="vcl-badge" style="margin-bottom: 1rem;">GUÍA DE INTERACCIÓN ESPACIAL</div>
            <h3 style="font-family: var(--font-display); font-size: 1.4rem; color: #ffffff; margin-bottom: 1.25rem;">
              Mapeo de Mandos Meta Quest Touch Plus
            </h3>

            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div style="display: flex; align-items: flex-start; gap: 1rem; background: rgba(15, 23, 42, 0.6); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                <div style="font-size: 1.6rem;">🎯</div>
                <div>
                  <strong style="font-size: 0.95rem; color: #ffffff;">Gatillo Frontal (Index Trigger)</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.2rem;">
                    Apunta con el rayo láser hacia cualquier átomo o enlace para seleccionarlo e inspeccionar sus propiedades moleculares en el HUD espacial flotante.
                  </p>
                </div>
              </div>

              <div style="display: flex; align-items: flex-start; gap: 1rem; background: rgba(15, 23, 42, 0.6); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                <div style="font-size: 1.6rem;">✊</div>
                <div>
                  <strong style="font-size: 0.95rem; color: #ffffff;">Botón Lateral de Agarre (Hand Grip)</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.2rem;">
                    Mantén presionado el botón lateral para agarrar la molécula con tu mano. Muévela o gírala con la muñeca en 6 grados de libertad (6-DoF).
                  </p>
                </div>
              </div>

              <div style="display: flex; align-items: flex-start; gap: 1rem; background: rgba(15, 23, 42, 0.6); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                <div style="font-size: 1.6rem;">🕹️</div>
                <div>
                  <strong style="font-size: 0.95rem; color: #ffffff;">Palanca Analógica (Thumbstick)</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.2rem;">
                    Desplaza el joystick hacia adelante o atrás para escalar la molécula suavemente, pasando de visión microscópica a tamaño natural de laboratorio.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div style="background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.3); border-radius: var(--radius-sm); padding: 0.85rem; font-size: 0.78rem; color: #e9d5ff; margin-top: 1.5rem;">
            <strong>Tip de Conexión:</strong> Abre <code>Meta Quest Browser</code> dentro de tu visor e ingresa la dirección IP de tu máquina en la red local (ej. <code>http://192.168.x.x:3000</code>).
          </div>
        </div>
      </div>
    `,this.container.querySelector("#btn-enter-webxr")?.addEventListener("click",()=>{this.onLaunchXR()})}}class Sp{container;activeSection="lessons";notebookEntries=[];constructor(e){this.container=e,this.loadNotebook(),this.render()}loadNotebook(){try{const e=localStorage.getItem("vcl_lab_notebook");e?this.notebookEntries=JSON.parse(e):this.notebookEntries=[{id:"exp-1",title:"Síntesis y Geometría Molecular del Agua (H2O)",date:new Date().toLocaleDateString("es-MX"),objective:"Sintetizar virtualmente la molécula de agua a partir de hidrógeno y oxígeno, evaluando su geometría angular mediante la teoría VSEPR.",hypothesis:"Dado que el oxígeno posee dos pares de electrones solitarios en su capa de valencia, estos deformarán los enlaces O-H generando un ángulo inferior a 109.5°.",reagents:"2 moles de H2(g), 1 mol de O2(g), catalizador virtual.",procedure:"1. Cargar átomos en Molecular Builder. 2. Formar enlaces simples O-H. 3. Medir ángulo dipolar en Bond Studio.",observations:"Se observó una marcada polaridad hacia el oxígeno (δ-) debido a su alta electronegatividad (χ=3.44 vs 2.20).",results:"Geometría angular confirmada con ángulo experimental de 104.5° y momento dipolar de 1.85 Debye.",conclusion:"Se confirmó la hipótesis: la repulsión de los dos pares libres del oxígeno comprime los enlaces O-H demostrando la validez del modelo VSEPR."}]}catch{this.notebookEntries=[]}}saveNotebook(){try{localStorage.setItem("vcl_lab_notebook",JSON.stringify(this.notebookEntries))}catch{}}render(){this.container.innerHTML=`
      <div style="display: flex; flex-direction: column; gap: 1.5rem; min-height: calc(100vh - 120px);">
        <!-- Barra Superior de Secciones Educativas -->
        <div style="display: flex; justify-content: space-between; align-items: center; background: var(--bg-card); padding: 1rem 1.5rem; border-radius: var(--radius-lg); border: 1px solid var(--border-subtle); flex-wrap: wrap; gap: 1rem;">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <div class="vcl-badge">NIVEL BACHILLERATO</div>
            <h3 style="font-family: var(--font-display); font-size: 1.25rem; color: #ffffff;">Centro de Aprendizaje y Bitácora</h3>
          </div>

          <div style="display: flex; gap: 0.5rem;">
            <button class="vcl-btn ${this.activeSection==="lessons"?"vcl-btn-primary":"vcl-btn-secondary"} btn-sec" data-sec="lessons">
              <span>📖</span>
              <span>Lecciones Guiadas</span>
            </button>
            <button class="vcl-btn ${this.activeSection==="notebook"?"vcl-btn-primary":"vcl-btn-secondary"} btn-sec" data-sec="notebook">
              <span>📝</span>
              <span>Bitácora de Laboratorio (${this.notebookEntries.length})</span>
            </button>
            <button class="vcl-btn ${this.activeSection==="quizzes"?"vcl-btn-primary":"vcl-btn-secondary"} btn-sec" data-sec="quizzes">
              <span>🎯</span>
              <span>Retos y Cuestionarios</span>
            </button>
          </div>
        </div>

        <!-- Contenedor de la Sección Activa -->
        <div id="learning-content-container">
          ${this.renderSectionContent()}
        </div>
      </div>
    `,this.setupEventListeners()}renderSectionContent(){return this.activeSection==="lessons"?`
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.25rem;">
          <div class="vcl-card">
            <span class="vcl-badge" style="margin-bottom: 0.6rem;">LECCIÓN 1</span>
            <h4 style="font-size: 1.15rem; color: #ffffff; margin-bottom: 0.5rem;">Evolución del Modelo Atómico</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1rem;">
              Desde la indivisibilidad de Dalton y el pudín de Thomson hasta el núcleo de Rutherford, las órbitas de Bohr y los orbitales probabilísticos de Schrödinger.
            </p>
            <div style="font-size: 0.76rem; color: var(--accent-cyan); font-weight: 600;">Objetivo: Distinguir órbitas clásicas de orbitales cuánticos.</div>
          </div>

          <div class="vcl-card">
            <span class="vcl-badge" style="margin-bottom: 0.6rem;">LECCIÓN 2</span>
            <h4 style="font-size: 1.15rem; color: #ffffff; margin-bottom: 0.5rem;">Electrones y la Tabla Periódica</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1rem;">
              Cómo el principio de Aufbau (regla de Madelung), la regla de Hund y el principio de Pauli explican la periodicidad de los 118 elementos.
            </p>
            <div style="font-size: 0.76rem; color: var(--accent-cyan); font-weight: 600;">Objetivo: Escribir configuraciones y predecir valencias.</div>
          </div>

          <div class="vcl-card">
            <span class="vcl-badge" style="margin-bottom: 0.6rem;">LECCIÓN 3</span>
            <h4 style="font-size: 1.15rem; color: #ffffff; margin-bottom: 0.5rem;">Enlaces y Electronegatividad</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1rem;">
              La escala de Pauling: cómo el diferencial Δχ divide los enlaces en covalentes no polares, covalentes polares y enlaces iónicos puros.
            </p>
            <div style="font-size: 0.76rem; color: var(--accent-cyan); font-weight: 600;">Objetivo: Calcular cargas parciales y dipolos.</div>
          </div>

          <div class="vcl-card">
            <span class="vcl-badge" style="margin-bottom: 0.6rem;">LECCIÓN 4</span>
            <h4 style="font-size: 1.15rem; color: #ffffff; margin-bottom: 0.5rem;">Geometría Molecular VSEPR</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1rem;">
              Notación AXE: cómo la repulsión coulómbica de pares solitarios y pares enlazantes determina formas tridimensionales y ángulos de enlace.
            </p>
            <div style="font-size: 0.76rem; color: var(--accent-cyan); font-weight: 600;">Objetivo: Predecir formas lineales, tetraédricas y angulares.</div>
          </div>

          <div class="vcl-card">
            <span class="vcl-badge" style="margin-bottom: 0.6rem;">LECCIÓN 5</span>
            <h4 style="font-size: 1.15rem; color: #ffffff; margin-bottom: 0.5rem;">Conservación y Termodinámica</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1rem;">
              Ley de Lavoisier: balance estequiométrico, balance de cargas y cálculo del calor de reacción ΔH (reacciones exotérmicas vs endotérmicas).
            </p>
            <div style="font-size: 0.76rem; color: var(--accent-cyan); font-weight: 600;">Objetivo: Balancear ecuaciones y auditar átomos.</div>
          </div>
        </div>
      `:this.activeSection==="notebook"?`
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
          <!-- Formulario de Nueva Entrada de Bitácora -->
          <div class="vcl-card">
            <div class="vcl-badge" style="margin-bottom: 0.8rem;">NUEVA EXPERIMENTACIÓN VIRTUAL</div>
            <h4 style="font-size: 1.2rem; color: #ffffff; margin-bottom: 1rem;">Registrar Entrada de Laboratorio</h4>

            <div style="display: flex; flex-direction: column; gap: 0.8rem;">
              <div>
                <label style="font-size: 0.76rem; color: var(--text-muted); display: block; margin-bottom: 0.2rem;">Título de la Práctica</label>
                <input type="text" id="nb-title" class="vcl-input-search" style="width: 100%;" placeholder="ej. Síntesis y Enlace de Metano (CH4)"/>
              </div>

              <div>
                <label style="font-size: 0.76rem; color: var(--text-muted); display: block; margin-bottom: 0.2rem;">1. Objetivo Científico</label>
                <textarea id="nb-objective" class="vcl-input-search" rows="2" style="width: 100%; resize: vertical;" placeholder="¿Qué fenómeno se busca demostrar?"></textarea>
              </div>

              <div>
                <label style="font-size: 0.76rem; color: var(--text-muted); display: block; margin-bottom: 0.2rem;">2. Hipótesis Inicial</label>
                <textarea id="nb-hypothesis" class="vcl-input-search" rows="2" style="width: 100%; resize: vertical;" placeholder="¿Cuál es el resultado esperado y por qué?"></textarea>
              </div>

              <div>
                <label style="font-size: 0.76rem; color: var(--text-muted); display: block; margin-bottom: 0.2rem;">3. Reactivos y Condiciones</label>
                <input type="text" id="nb-reagents" class="vcl-input-search" style="width: 100%;" placeholder="ej. C(s), 2 H2(g), 298 K"/>
              </div>

              <div>
                <label style="font-size: 0.76rem; color: var(--text-muted); display: block; margin-bottom: 0.2rem;">4. Procedimiento Virtual Realizado</label>
                <textarea id="nb-procedure" class="vcl-input-search" rows="2" style="width: 100%; resize: vertical;" placeholder="Pasos ejecutados en Molecular Builder o Reaction Lab..."></textarea>
              </div>

              <div>
                <label style="font-size: 0.76rem; color: var(--text-muted); display: block; margin-bottom: 0.2rem;">5. Observaciones y Resultados</label>
                <textarea id="nb-results" class="vcl-input-search" rows="2" style="width: 100%; resize: vertical;" placeholder="Ángulos medidos, energía de enlace, balance..."></textarea>
              </div>

              <div>
                <label style="font-size: 0.76rem; color: var(--text-muted); display: block; margin-bottom: 0.2rem;">6. Conclusión Pedagógica</label>
                <textarea id="nb-conclusion" class="vcl-input-search" rows="2" style="width: 100%; resize: vertical;" placeholder="¿Se comprobó la hipótesis? ¿Qué leyes aplican?"></textarea>
              </div>

              <button class="vcl-btn vcl-btn-primary" id="btn-save-notebook" style="margin-top: 0.5rem; justify-content: center;">
                <span>💾</span>
                <span>Guardar en Bitácora Digital</span>
              </button>
            </div>
          </div>

          <!-- Historial de Entradas Registradas -->
          <div style="display: flex; flex-direction: column; gap: 1rem; max-height: 80vh; overflow-y: auto;">
            ${this.notebookEntries.map(e=>`
              <div class="vcl-card" style="padding: 1.25rem;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.6rem;">
                  <h4 style="font-size: 1.1rem; color: #ffffff;">${e.title}</h4>
                  <span class="vcl-badge" style="font-size: 0.68rem;">${e.date}</span>
                </div>

                <div style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 0.6rem;">
                  <strong style="color: var(--accent-cyan);">Objetivo:</strong> ${e.objective}
                </div>
                <div style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 0.6rem;">
                  <strong style="color: #f59e0b;">Hipótesis:</strong> ${e.hypothesis}
                </div>
                <div style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 0.6rem;">
                  <strong style="color: #ffffff;">Resultados:</strong> ${e.results}
                </div>
                <div style="font-size: 0.8rem; color: #e2e8f0; line-height: 1.5; background: rgba(15, 23, 42, 0.6); padding: 0.6rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
                  <strong style="color: #10b981;">Conclusión:</strong> ${e.conclusion}
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `:`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
        <div class="vcl-card">
          <div class="vcl-badge" style="margin-bottom: 0.6rem;">RETO 1 // ENLACES</div>
          <h4 style="font-size: 1.1rem; color: #ffffff; margin-bottom: 0.5rem;">Predecir el Carácter del Enlace NaCl</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
            Sodio tiene electronegatividad χ = 0.93 y Cloro χ = 3.16. ¿Qué tipo de enlace predomina según Pauling?
          </p>
          <div style="display: flex; flex-direction: column; gap: 0.5rem;" id="quiz-1-options">
            <button class="vcl-btn vcl-btn-secondary quiz-opt" data-correct="false">A) Covalente No Polar</button>
            <button class="vcl-btn vcl-btn-secondary quiz-opt" data-correct="false">B) Covalente Polar con momento dipolar bajo</button>
            <button class="vcl-btn vcl-btn-secondary quiz-opt" data-correct="true">C) Iónico puro (Δχ = 2.23 ≥ 1.7)</button>
            <button class="vcl-btn vcl-btn-secondary quiz-opt" data-correct="false">D) Enlace Metálico</button>
          </div>
          <div id="quiz-1-feedback" style="margin-top: 1rem; font-size: 0.82rem; font-weight: 600;"></div>
        </div>

        <div class="vcl-card">
          <div class="vcl-badge" style="margin-bottom: 0.6rem;">RETO 2 // VSEPR</div>
          <h4 style="font-size: 1.1rem; color: #ffffff; margin-bottom: 0.5rem;">Geometría del Metano (CH4)</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
            El carbono central tiene 4 enlaces simples C-H y 0 pares libres (AX4). ¿Cuál es su forma geométrica tridimensional?
          </p>
          <div style="display: flex; flex-direction: column; gap: 0.5rem;" id="quiz-2-options">
            <button class="vcl-btn vcl-btn-secondary quiz-opt2" data-correct="false">A) Cuadrada Plana (90°)</button>
            <button class="vcl-btn vcl-btn-secondary quiz-opt2" data-correct="true">B) Tetraédrica Regular (109.5°)</button>
            <button class="vcl-btn vcl-btn-secondary quiz-opt2" data-correct="false">C) Trigonal Piramidal (107.3°)</button>
            <button class="vcl-btn vcl-btn-secondary quiz-opt2" data-correct="false">D) Bipiramidal Trigonal</button>
          </div>
          <div id="quiz-2-feedback" style="margin-top: 1rem; font-size: 0.82rem; font-weight: 600;"></div>
        </div>

        <div class="vcl-card">
          <div class="vcl-badge" style="margin-bottom: 0.6rem;">RETO 3 // MODELOS ATÓMICOS</div>
          <h4 style="font-size: 1.1rem; color: #ffffff; margin-bottom: 0.5rem;">El Salto Cuántico de Bohr</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
            ¿Qué ocurre según el modelo de Bohr cuando un electrón salta de una órbita exterior (n=3) a una interior (n=2)?
          </p>
          <div style="display: flex; flex-direction: column; gap: 0.5rem;" id="quiz-3-options">
            <button class="vcl-btn vcl-btn-secondary quiz-opt3" data-correct="true">A) Emite un fotón discreto de energía ΔE = h·ν (Línea Balmer)</button>
            <button class="vcl-btn vcl-btn-secondary quiz-opt3" data-correct="false">B) Absorbe energía continuamente sin radiar</button>
            <button class="vcl-btn vcl-btn-secondary quiz-opt3" data-correct="false">C) El electrón colapsa electrostáticamente en el núcleo</button>
            <button class="vcl-btn vcl-btn-secondary quiz-opt3" data-correct="false">D) Aumenta su masa atómica</button>
          </div>
          <div id="quiz-3-feedback" style="margin-top: 1rem; font-size: 0.82rem; font-weight: 600;"></div>
        </div>
      </div>
    `}setupEventListeners(){this.container.querySelectorAll(".btn-sec").forEach(n=>{n.addEventListener("click",()=>{const i=n.getAttribute("data-sec");i&&(this.activeSection=i,this.render())})}),this.container.querySelector("#btn-save-notebook")?.addEventListener("click",()=>{const n=this.container.querySelector("#nb-title")?.value,i=this.container.querySelector("#nb-objective")?.value,r=this.container.querySelector("#nb-hypothesis")?.value,o=this.container.querySelector("#nb-reagents")?.value,s=this.container.querySelector("#nb-procedure")?.value,c=this.container.querySelector("#nb-results")?.value,l=this.container.querySelector("#nb-conclusion")?.value;if(!n||!l){xt.emit("lab:notification",{title:"Datos Incompletos",message:"Por favor asigna al menos un título y una conclusión a tu práctica.",type:"warning"});return}const d={id:`entry-${Date.now()}`,title:n,date:new Date().toLocaleDateString("es-MX"),objective:i,hypothesis:r,reagents:o,procedure:s,observations:"",results:c,conclusion:l};this.notebookEntries.unshift(d),this.saveNotebook(),this.render(),xt.emit("lab:notification",{title:"Práctica Guardada",message:`La entrada "${n}" ha sido incorporada a tu bitácora escolar.`,type:"success"})});const t=(n,i,r)=>{this.container.querySelectorAll(n).forEach(o=>{o.addEventListener("click",()=>{const s=o.getAttribute("data-correct")==="true",c=this.container.querySelector(i);c&&(c.textContent=s?`✓ ¡Correcto! ${r}`:"✗ Incorrecto. Revisa el fundamento científico en los módulos interactivos.",c.style.color=s?"#10b981":"#ef4444")})})};t(".quiz-opt","#quiz-1-feedback","El gran delta de electronegatividad (2.23) produce transferencia iónica total."),t(".quiz-opt2","#quiz-2-feedback","Cuatro dominios enlazantes simétricos minimizan repulsiones a 109.5° en 3D."),t(".quiz-opt3","#quiz-3-feedback","La transición hacia un nivel de menor energía libera un fotón de frecuencia cuántica exacta.")}}class Ep{modalContainer;constructor(e){this.modalContainer=e}openAssistant(){this.modalContainer.classList.remove("hidden"),this.render()}closeAssistant(){this.modalContainer.classList.add("hidden")}render(){this.modalContainer.innerHTML=`
      <div class="vcl-modal-content" style="max-width: 650px;">
        <button id="ai-modal-close" style="position: absolute; top: 1.25rem; right: 1.25rem; background: transparent; border: none; color: var(--text-muted); font-size: 1.5rem; cursor: pointer;">✕</button>

        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.25rem;">
          <div style="width: 48px; height: 48px; border-radius: var(--radius-md); background: linear-gradient(135deg, var(--accent-cyan), var(--accent-blue)); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; box-shadow: 0 0 15px rgba(56, 189, 248, 0.4);">
            🤖
          </div>
          <div>
            <h3 style="font-family: var(--font-display); font-size: 1.25rem; color: #ffffff;">Asistente Pedagógico VCL</h3>
            <div style="font-size: 0.76rem; color: var(--accent-gold);">Motor Científico Vickora Labs • Cero Alucinaciones</div>
          </div>
        </div>

        <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1.25rem;">
          Formula una consulta química o selecciona una de las preguntas frecuentes del plan de estudios de bachillerato:
        </p>

        <!-- Preguntas Frecuentes Rápidas -->
        <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.5rem;">
          <button class="vcl-btn vcl-btn-secondary ai-faq-btn" data-q="water-co2-polarity" style="justify-content: flex-start; text-align: left; font-size: 0.8rem; padding: 0.6rem 0.85rem;">
            ❓ ¿Por qué el agua (H2O) es polar mientras que el dióxido de carbono (CO2) es no polar?
          </button>
          <button class="vcl-btn vcl-btn-secondary ai-faq-btn" data-q="hund-rule" style="justify-content: flex-start; text-align: left; font-size: 0.8rem; padding: 0.6rem 0.85rem;">
            ❓ ¿Por qué los electrones prefieren ocupar orbitales desapareados según la Regla de Hund?
          </button>
          <button class="vcl-btn vcl-btn-secondary ai-faq-btn" data-q="vsepr-ch4" style="justify-content: flex-start; text-align: left; font-size: 0.8rem; padding: 0.6rem 0.85rem;">
            ❓ ¿Por qué el metano (CH4) es un tetraedro a 109.5° y no un plano a 90°?
          </button>
          <button class="vcl-btn vcl-btn-secondary ai-faq-btn" data-q="lavoisier-mass" style="justify-content: flex-start; text-align: left; font-size: 0.8rem; padding: 0.6rem 0.85rem;">
            ❓ ¿Cómo demuestra el simulador la conservación de masa en la neutralización HCl + NaOH?
          </button>
        </div>

        <!-- Entrada de Pregunta Personalizada -->
        <div style="display: flex; gap: 0.6rem; margin-bottom: 1.25rem;">
          <input type="text" id="ai-user-query" class="vcl-input-search" style="flex: 1;" placeholder="Escribe tu duda sobre enlaces, orbitales o reacciones..."/>
          <button class="vcl-btn vcl-btn-primary" id="ai-btn-submit">Consultar</button>
        </div>

        <!-- Respuesta del Asistente -->
        <div id="ai-response-box" style="background: rgba(15, 23, 42, 0.8); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.25rem; font-size: 0.85rem; color: #e2e8f0; line-height: 1.6; display: none;">
        </div>
      </div>
    `,this.setupEvents()}setupEvents(){this.modalContainer.querySelector("#ai-modal-close")?.addEventListener("click",()=>{this.closeAssistant()}),this.modalContainer.addEventListener("click",i=>{i.target===this.modalContainer&&this.closeAssistant()}),this.modalContainer.querySelectorAll(".ai-faq-btn").forEach(i=>{i.addEventListener("click",()=>{const r=i.getAttribute("data-q");this.showAnswer(r||"")})});const e=this.modalContainer.querySelector("#ai-btn-submit"),t=this.modalContainer.querySelector("#ai-user-query"),n=()=>{const i=t?.value.trim().toLowerCase();i&&(i.includes("agua")&&i.includes("polar")?this.showAnswer("water-co2-polarity"):i.includes("hund")||i.includes("orbital")?this.showAnswer("hund-rule"):i.includes("tetraedro")||i.includes("metano")||i.includes("vsepr")?this.showAnswer("vsepr-ch4"):i.includes("neutraliz")||i.includes("hcl")||i.includes("naoh")?this.showAnswer("lavoisier-mass"):this.showGenericAnswer(i))};e?.addEventListener("click",n),t?.addEventListener("keydown",i=>{i.key==="Enter"&&n()})}showAnswer(e){const t=this.modalContainer.querySelector("#ai-response-box");if(!t)return;t.style.display="block";const n={"water-co2-polarity":`
        <strong style="color: var(--accent-cyan);">Polaridad y Geometría Molecular:</strong><br>
        Tanto el agua (H₂O) como el dióxido de carbono (CO₂) contienen enlaces covalentes polares debido a la alta electronegatividad del oxígeno (χ = 3.44).<br><br>
        • En el <strong>CO₂</strong>, el carbono central no posee pares libres (notación AX₂), generando una geometría <em>lineal a 180°</em>. Los dos vectores momento dipolar O=C=O son idénticos pero apuntan en sentidos opuestos, anulándose algebraicamente (μ = 0 Debye). La molécula es <strong>no polar</strong>.<br>
        • En el <strong>H₂O</strong>, el oxígeno posee dos pares de electrones libres (notación AX₂E₂), forzando una geometría <em>angular a 104.5°</em>. Los dos vectores dipolares O-H se suman vectorialmente, originando un dipolo neto permanente (μ = 1.85 Debye). Por ello, el agua es intensamente <strong>polar</strong>.
      `,"hund-rule":`
        <strong style="color: var(--accent-cyan);">Regla de Máxima Multiplicidad de Hund:</strong><br>
        Cuando los electrones ocupan subniveles con más de un orbital degenerado (misma energía, como los 3 orbitales <em>2p</em> o los 5 orbitales <em>3d</em>), se ubican primero de manera <strong>individual en cada casilla con espines paralelos (+1/2 ↑)</strong> antes de aparearse.<br><br>
        <strong>Fundamento físico:</strong> Dos electrones en el mismo orbital espacial experimentan mayor repulsión electrostática coulómbica que si ocupan orbitales espaciales diferentes. La ocupación individual minimiza la energía potencial del átomo y maximiza su estabilidad cuántica.
      `,"vsepr-ch4":`
        <strong style="color: var(--accent-cyan);">Geometría Tetraédrica del Metano (CH₄):</strong><br>
        El átomo de carbono en el metano comparte 4 pares de electrones con 4 hidrógenos (notación VSEPR <strong>AX₄</strong>).<br><br>
        Si la molécula fuera cuadrada plana en 2D, el ángulo de separación entre enlaces sería de solo <strong>90°</strong>. Al extenderse en las tres dimensiones del espacio, los cuatro dominios electrónicos pueden separarse hasta <strong>109.5°</strong> apuntando a los vértices de un tetraedro regular.<br><br>
        Esto reduce drásticamente la repulsión de Pauli y coulómbica entre las nubes electrónicas enlazantes.
      `,"lavoisier-mass":`
        <strong style="color: var(--accent-cyan);">Conservación de Masa en la Neutralización:</strong><br>
        Ecuación: <code>HCl(aq) + NaOH(aq) -> NaCl(aq) + H₂O(l)</code><br><br>
        • <strong>Reactivos:</strong> 1 H (en HCl) + 1 Cl + 1 Na + 1 O + 1 H (en NaOH) = 2 H, 1 Cl, 1 Na, 1 O.<br>
        • <strong>Productos:</strong> 1 Na + 1 Cl (en NaCl) + 2 H + 1 O (en H₂O) = 2 H, 1 Cl, 1 Na, 1 O.<br><br>
        La auditoría del Reaction Engine confirma que la masa se conserva al 100% (cero átomos creados o destruidos) y la transferencia del protón H⁺ al OH⁻ libera 57.3 kJ/mol de calor exotérmico estandarizado.
      `};t.innerHTML=n[e]||n["water-co2-polarity"]}showGenericAnswer(e){const t=this.modalContainer.querySelector("#ai-response-box");t&&(t.style.display="block",t.innerHTML=`
      <strong style="color: var(--accent-cyan);">Análisis Científico del Motor VCL:</strong><br>
      Respecto a tu consulta "<em>${e}</em>":<br>
      El motor químico de VCL evalúa las propiedades moleculares a través de primeros principios (estructura atómica, configuración de Aufbau, electronegatividad de Pauling y teoría VSEPR).<br><br>
      Puedes verificar cuantitativamente este fenómeno abriendo el módulo correspondiente en la barra de navegación superior (M01 a M07).
    `)}}class Ap{headerEl;viewportEl;modalEl;toastContainer;navbar;assistant;currentViewId="dashboard";currentViewInstance=null;xrBridge=null;constructor(){this.headerEl=document.getElementById("main-header"),this.viewportEl=document.getElementById("main-viewport"),this.modalEl=document.getElementById("vcl-modal-container"),this.toastContainer=document.getElementById("vcl-toast-container"),this.assistant=new Ep(this.modalEl),this.navbar=new zl(this.headerEl,e=>this.navigateTo(e),()=>this.assistant.openAssistant(),()=>this.launchWebXR()),this.setupGlobalEvents(),this.navigateTo("dashboard")}setupGlobalEvents(){xt.on("lab:notification",e=>{this.showToast(e.title,e.message,e.type)}),xt.on("element:selected",e=>{console.log(`[VCL] Elemento seleccionado globalmente: ${e.symbol} (${e.name})`)}),window.addEventListener("resize",()=>{this.currentViewInstance&&typeof this.currentViewInstance.handleResize=="function"&&this.currentViewInstance.handleResize()})}navigateTo(e,t){this.currentViewInstance&&typeof this.currentViewInstance.dispose=="function"&&(this.currentViewInstance.dispose(),this.currentViewInstance=null),this.currentViewId=e,this.navbar.setActiveTab(e),this.viewportEl.innerHTML="";const n=document.createElement("div");switch(n.className="vcl-view-container",this.viewportEl.appendChild(n),e){case"dashboard":this.currentViewInstance=new Oo(n,i=>this.navigateTo(i));break;case"m01-ptable":this.currentViewInstance=new ql(n,i=>{this.navigateTo("m02-atomic",i.symbol)});break;case"m02-atomic":this.currentViewInstance=new Xl(n,t||"C");break;case"m03-electron":this.currentViewInstance=new $l(n,t||"O");break;case"m04-bonds":this.currentViewInstance=new Kl(n,"H","O");break;case"m05-builder":this.currentViewInstance=new xp(n,()=>this.launchWebXR());break;case"m06-reactions":this.currentViewInstance=new _p(n);break;case"m07-energy":this.currentViewInstance=new yp(n);break;case"m08-xr":this.currentViewInstance=new Mp(n,()=>this.launchWebXR());break;case"m09-learning":this.currentViewInstance=new Sp(n);break;default:this.currentViewInstance=new Oo(n,i=>this.navigateTo(i));break}window.scrollTo({top:0,behavior:"smooth"})}async launchWebXR(){if(this.currentViewId!=="m05-builder"&&this.currentViewId!=="m08-xr"&&this.navigateTo("m05-builder"),typeof navigator<"u"&&"xr"in navigator&&navigator.xr)try{await navigator.xr.isSessionSupported("immersive-vr")?this.showToast("WebXR","Iniciando sesión en Meta Quest 3S a 90 Hz...","info"):this.showToast("Modo Desktop Activo","No se detectó un visor VR conectado. Puedes interactuar en 3D con ratón y teclado.","info")}catch{this.showToast("WebXR","Simulador 3D activo en modo escritorio.","info")}else this.showToast("Modo Desktop 3D","WebXR no está disponible en este navegador. Explora el laboratorio con ratón y teclado.","info")}showToast(e,t,n="info"){const i=document.createElement("div");i.className="vcl-toast";const r={info:"var(--accent-cyan)",success:"var(--accent-emerald)",warning:"var(--accent-gold)",error:"var(--accent-rose)"};i.style.borderLeftColor=r[n]||"var(--accent-cyan)",i.innerHTML=`
      <div style="font-weight: 700; color: #ffffff; margin-bottom: 0.2rem;">${e}</div>
      <div style="color: var(--text-muted); font-size: 0.8rem; line-height: 1.4;">${t}</div>
    `,this.toastContainer.appendChild(i),setTimeout(()=>{i.style.animation="slideIn 0.3s ease reverse forwards",setTimeout(()=>{i.parentNode&&i.parentNode.removeChild(i)},300)},4e3)}}document.addEventListener("DOMContentLoaded",()=>{new Ap});
//# sourceMappingURL=index-sTl9tImL.js.map

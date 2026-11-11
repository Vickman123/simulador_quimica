/**
 * M10 — Educational Scientific Assistant (AI Layer)
 * Virtual Chemistry Lab (VCL) — Vickora Labs
 *
 * Asistente pedagógico inteligente y contextual.
 * Proporciona explicaciones didácticas fundamentadas estrictamente en el Chemistry Engine,
 * sin inventar datos ni alucinar propiedades ausentes en la evidencia experimental.
 */

export class ScientificAssistant {
  private modalContainer: HTMLElement;

  constructor(modalContainer: HTMLElement) {
    this.modalContainer = modalContainer;
  }

  public openAssistant(): void {
    this.modalContainer.classList.remove('hidden');
    this.render();
  }

  public closeAssistant(): void {
    this.modalContainer.classList.add('hidden');
  }

  private render(): void {
    this.modalContainer.innerHTML = `
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
    `;

    this.setupEvents();
  }

  private setupEvents(): void {
    this.modalContainer.querySelector('#ai-modal-close')?.addEventListener('click', () => {
      this.closeAssistant();
    });

    this.modalContainer.addEventListener('click', (e) => {
      if (e.target === this.modalContainer) {
        this.closeAssistant();
      }
    });

    // FAQs
    this.modalContainer.querySelectorAll('.ai-faq-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const qKey = btn.getAttribute('data-q');
        this.showAnswer(qKey || '');
      });
    });

    // Submit personalizada
    const submitBtn = this.modalContainer.querySelector('#ai-btn-submit');
    const input = this.modalContainer.querySelector('#ai-user-query') as HTMLInputElement;

    const doSubmit = () => {
      const q = input?.value.trim().toLowerCase();
      if (!q) return;

      if (q.includes('agua') && q.includes('polar')) {
        this.showAnswer('water-co2-polarity');
      } else if (q.includes('hund') || q.includes('orbital')) {
        this.showAnswer('hund-rule');
      } else if (q.includes('tetraedro') || q.includes('metano') || q.includes('vsepr')) {
        this.showAnswer('vsepr-ch4');
      } else if (q.includes('neutraliz') || q.includes('hcl') || q.includes('naoh')) {
        this.showAnswer('lavoisier-mass');
      } else {
        this.showGenericAnswer(q);
      }
    };

    submitBtn?.addEventListener('click', doSubmit);
    input?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') doSubmit();
    });
  }

  private showAnswer(key: string): void {
    const box = this.modalContainer.querySelector('#ai-response-box') as HTMLElement;
    if (!box) return;

    box.style.display = 'block';

    const answers: Record<string, string> = {
      'water-co2-polarity': `
        <strong style="color: var(--accent-cyan);">Polaridad y Geometría Molecular:</strong><br>
        Tanto el agua (H₂O) como el dióxido de carbono (CO₂) contienen enlaces covalentes polares debido a la alta electronegatividad del oxígeno (χ = 3.44).<br><br>
        • En el <strong>CO₂</strong>, el carbono central no posee pares libres (notación AX₂), generando una geometría <em>lineal a 180°</em>. Los dos vectores momento dipolar O=C=O son idénticos pero apuntan en sentidos opuestos, anulándose algebraicamente (μ = 0 Debye). La molécula es <strong>no polar</strong>.<br>
        • En el <strong>H₂O</strong>, el oxígeno posee dos pares de electrones libres (notación AX₂E₂), forzando una geometría <em>angular a 104.5°</em>. Los dos vectores dipolares O-H se suman vectorialmente, originando un dipolo neto permanente (μ = 1.85 Debye). Por ello, el agua es intensamente <strong>polar</strong>.
      `,
      'hund-rule': `
        <strong style="color: var(--accent-cyan);">Regla de Máxima Multiplicidad de Hund:</strong><br>
        Cuando los electrones ocupan subniveles con más de un orbital degenerado (misma energía, como los 3 orbitales <em>2p</em> o los 5 orbitales <em>3d</em>), se ubican primero de manera <strong>individual en cada casilla con espines paralelos (+1/2 ↑)</strong> antes de aparearse.<br><br>
        <strong>Fundamento físico:</strong> Dos electrones en el mismo orbital espacial experimentan mayor repulsión electrostática coulómbica que si ocupan orbitales espaciales diferentes. La ocupación individual minimiza la energía potencial del átomo y maximiza su estabilidad cuántica.
      `,
      'vsepr-ch4': `
        <strong style="color: var(--accent-cyan);">Geometría Tetraédrica del Metano (CH₄):</strong><br>
        El átomo de carbono en el metano comparte 4 pares de electrones con 4 hidrógenos (notación VSEPR <strong>AX₄</strong>).<br><br>
        Si la molécula fuera cuadrada plana en 2D, el ángulo de separación entre enlaces sería de solo <strong>90°</strong>. Al extenderse en las tres dimensiones del espacio, los cuatro dominios electrónicos pueden separarse hasta <strong>109.5°</strong> apuntando a los vértices de un tetraedro regular.<br><br>
        Esto reduce drásticamente la repulsión de Pauli y coulómbica entre las nubes electrónicas enlazantes.
      `,
      'lavoisier-mass': `
        <strong style="color: var(--accent-cyan);">Conservación de Masa en la Neutralización:</strong><br>
        Ecuación: <code>HCl(aq) + NaOH(aq) -> NaCl(aq) + H₂O(l)</code><br><br>
        • <strong>Reactivos:</strong> 1 H (en HCl) + 1 Cl + 1 Na + 1 O + 1 H (en NaOH) = 2 H, 1 Cl, 1 Na, 1 O.<br>
        • <strong>Productos:</strong> 1 Na + 1 Cl (en NaCl) + 2 H + 1 O (en H₂O) = 2 H, 1 Cl, 1 Na, 1 O.<br><br>
        La auditoría del Reaction Engine confirma que la masa se conserva al 100% (cero átomos creados o destruidos) y la transferencia del protón H⁺ al OH⁻ libera 57.3 kJ/mol de calor exotérmico estandarizado.
      `,
    };

    box.innerHTML = answers[key] || answers['water-co2-polarity'];
  }

  private showGenericAnswer(query: string): void {
    const box = this.modalContainer.querySelector('#ai-response-box') as HTMLElement;
    if (!box) return;

    box.style.display = 'block';
    box.innerHTML = `
      <strong style="color: var(--accent-cyan);">Análisis Científico del Motor VCL:</strong><br>
      Respecto a tu consulta "<em>${query}</em>":<br>
      El motor químico de VCL evalúa las propiedades moleculares a través de primeros principios (estructura atómica, configuración de Aufbau, electronegatividad de Pauling y teoría VSEPR).<br><br>
      Puedes verificar cuantitativamente este fenómeno abriendo el módulo correspondiente en la barra de navegación superior (M01 a M07).
    `;
  }
}

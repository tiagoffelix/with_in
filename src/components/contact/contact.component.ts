import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Componente Contact - Seção de informações de contacto
 * Exibe informações de contacto da clínica de forma organizada
 */
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contact" class="contact section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Contacta-nos</h2>
          <p class="section-subtitle">
            Estamos aqui para te ajudar. Entra em contacto connosco para mais informações ou para agendar a tua sessão.
          </p>
        </div>

        <div class="contact-content">
          <div class="contact-info">
            <div class="contact-card">
              <div class="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div class="contact-details">
                <h3>Email</h3>
                <a href="mailto:infowithin.psi&#64;gmail.com" class="contact-link">
                  infowithin.psi&#64;gmail.com
                </a>
                <p>Resposta em até 24 horas</p>
              </div>
            </div>

            <div class="contact-card">
              <div class="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div class="contact-details">
                <h3>Telefone</h3>
                <a href="tel:+351919728341" class="contact-link">
                  +351 919 728 341
                </a>
                <p>Segunda a Sexta, 9h às 18h</p>
              </div>
            </div>

            <div class="contact-card">
              <div class="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12,6 12,12 16,14"></polyline>
                </svg>
              </div>
              <div class="contact-details">
                <h3>Horário de Funcionamento</h3>
                <div class="schedule">
                  <div class="schedule-item">
                    <span>Segunda a Quinta</span>
                    <span>9h - 20h</span>
                  </div>
                  <div class="schedule-item">
                    <span>Sexta-feira</span>
                    <span>9h - 18h</span>
                  </div>
                  <div class="schedule-item">
                    <span>Sábado</span>
                    <span>9h - 13h</span>
                  </div>
                  <div class="schedule-item">
                    <span>Domingo</span>
                    <span>Fechado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-cta">
            <div class="cta-card">
              <h3>Pronto para começar?</h3>
              <p>
                Dar o primeiro passo pode ser desafiante, mas estamos aqui para te acompanhar 
                nesta jornada. Agenda a tua primeira sessão e descobre como podemos ajudar-te.
              </p>
              <a 
                class="btn btn-primary btn-large"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfqfPM11n8QKqNMOpQKo6vEduwQ7Fna5utR1mo69PbtDKUZMQ/viewform?sessionType=individual"
                target="_blank"
              >
                Agendar Primeira Sessão
              </a>
            </div>
          </div>
        </div>

        <div class="additional-info">
          <div class="info-grid">
            <div class="info-item">
              <h4>Confidencialidade</h4>
              <p>
                Todas as sessões são estritamente confidenciais, seguindo o código 
                deontológico da Ordem dos Psicólogos Portugueses.
              </p>
            </div>
            <div class="info-item">
              <h4>Flexibilidade</h4>
              <p>
                Oferecemos horários flexíveis para se adaptarem à tua rotina, 
                incluindo sessões ao final do dia.
              </p>
            </div>
            <div class="info-item">
              <h4>Apoio Contínuo</h4>
              <p>
                Para além das sessões, estamos disponíveis para apoio em situações 
                de emergência ou dúvidas urgentes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      background-color: var(--color-white);
    }

    .section-header {
      text-align: center;
      margin-bottom: var(--spacing-xxl);
    }

    .section-title {
      font-family: 'Poppins', sans-serif;
      font-size: var(--font-size-4xl);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-md);
    }

    .section-subtitle {
      font-size: var(--font-size-lg);
      color: var(--color-text-secondary);
      max-width: 600px;
      margin: 0 auto;
      line-height: var(--line-height-relaxed);
    }

    .contact-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: var(--spacing-xxl);
      margin-bottom: var(--spacing-xxl);
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-lg);
    }

    .contact-card {
      display: flex;
      align-items: flex-start;
      gap: var(--spacing-md);
      padding: var(--spacing-lg);
      background: var(--color-primary-bg);
      border-radius: var(--radius-md);
      border: 1px solid rgba(139, 115, 85, 0.1);
      transition: all var(--transition-normal);
    }

    .contact-card:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }

    .contact-icon {
      flex-shrink: 0;
      width: 50px;
      height: 50px;
      background: var(--color-accent);
      border-radius: var(--radius-full);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .contact-icon svg {
      width: 24px;
      height: 24px;
      color: var(--color-white);
    }

    .contact-details {
      flex: 1;
    }

    .contact-details h3 {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-xs);
    }

    .contact-link {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-medium);
      color: var(--color-accent);
      text-decoration: none;
      transition: color var(--transition-normal);
    }

    .contact-link:hover {
      color: var(--color-accent-hover);
      text-decoration: underline;
    }

    .contact-details p {
      font-size: var(--font-size-sm);
      color: var(--color-text-secondary);
      margin-top: var(--spacing-xs);
    }

    .schedule {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-xs);
    }

    .schedule-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: var(--font-size-sm);
    }

    .schedule-item span:first-child {
      color: var(--color-text-secondary);
    }

    .schedule-item span:last-child {
      color: var(--color-text-primary);
      font-weight: var(--font-weight-medium);
    }

    .contact-cta {
      display: flex;
      align-items: flex-start;
    }

    .cta-card {
      background: var(--color-accent);
      color: var(--color-white);
      padding: var(--spacing-xl);
      border-radius: var(--radius-md);
      text-align: center;
      height: fit-content;
    }

    .cta-card h3 {
      font-size: var(--font-size-2xl);
      font-weight: var(--font-weight-semibold);
      margin-bottom: var(--spacing-md);
    }

    .cta-card p {
      font-size: var(--font-size-base);
      line-height: var(--line-height-relaxed);
      margin-bottom: var(--spacing-lg);
      opacity: 0.9;
    }

    .cta-card .btn {
      background: var(--color-white);
      color: var(--color-accent);
    }

    .cta-card .btn:hover {
      background: rgba(255, 255, 255, 0.9);
      transform: translateY(-2px);
    }

    .btn-large {
      padding: var(--spacing-md) var(--spacing-xl);
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-medium);
    }

    .additional-info {
      margin-top: var(--spacing-xxl);
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--spacing-lg);
    }

    .info-item {
      text-align: center;
      padding: var(--spacing-lg);
    }

    .info-item h4 {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      color: var(--color-accent);
      margin-bottom: var(--spacing-sm);
    }

    .info-item p {
      font-size: var(--font-size-sm);
      color: var(--color-text-secondary);
      line-height: var(--line-height-relaxed);
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
      .contact-content {
        grid-template-columns: 1fr;
        gap: var(--spacing-xl);
      }
    }

    @media (max-width: 768px) {
      .section-title {
        font-size: var(--font-size-3xl);
      }

      .contact-card {
        padding: var(--spacing-md);
      }

      .contact-icon {
        width: 40px;
        height: 40px;
      }

      .contact-icon svg {
        width: 20px;
        height: 20px;
      }

      .cta-card {
        padding: var(--spacing-lg);
      }

      .info-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-md);
      }
    }

    @media (max-width: 480px) {
      .contact-card {
        flex-direction: column;
        text-align: center;
        gap: var(--spacing-sm);
      }

      .schedule-item {
        flex-direction: column;
        gap: 4px;
        text-align: center;
      }
    }
  `]
})
export class ContactComponent {

  /**
   * Abre o modal de agendamento
   */
  openAppointmentModal(): void {
    const event = new CustomEvent('openAppointmentModal');
    document.dispatchEvent(event);
  }
}
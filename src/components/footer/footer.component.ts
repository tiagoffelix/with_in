import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Componente Footer - Rodapé do site
 * Contém informações de contato, navegação e copyright
 */
@Component({
    selector: 'app-footer',
    imports: [CommonModule],
    template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <!-- Logo e Informações Principais -->
          <div class="footer-brand">
            <div class="footer-logo">
              <span class="logo-text">With.in</span>
            </div>
            <p class="brand-description">
              With.in — Psicologia Clínica Joana Barbosa
            </p>
            <p class="brand-tagline">
              Dentro de ti vivem histórias que merecem ser cuidadas
            </p>
          </div>

          <!-- Navegação -->
          <div class="footer-nav">
            <h4>Navegação</h4>
            <ul class="nav-links">
              <li><a href="#home" (click)="scrollToSection('home', $event)">Início</a></li>
              <li><a href="#team" (click)="scrollToSection('team', $event)">Equipa</a></li>
              <li><a href="#services" (click)="scrollToSection('services', $event)">Serviços</a></li>
              <li><a href="#contact" (click)="scrollToSection('contact', $event)">Contacto</a></li>
            </ul>
          </div>

          <!-- Serviços -->
          <div class="footer-services">
            <h4>Serviços</h4>
            <ul class="service-links">
              <li>Terapia Individual</li>
              <li>Terapia de Casal</li>
              <li>Terapia Familiar</li>
              <li>Terapia de Grupo</li>
            </ul>
          </div>

          <!-- Contacto -->
          <div class="footer-contact">
            <h4>Contacto</h4>
            <div class="contact-info">
              <a href="mailto:infowithin.psi&#64;gmail.com" class="contact-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                infowithin.psi&#64;gmail.com
              </a>
              <a href="tel:+351919728341" class="contact-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +351 919 728 341
              </a>
            </div>
          </div>
        </div>


        <!-- Copyright -->
        <div class="footer-bottom">
          <div class="copyright">
            <p>&copy; {{ currentYear }} With.in - Psicologia Clínica. Todos os direitos reservados.</p>
          </div>
          <div class="legal-links">
            <span>Ordem dos Psicólogos Portugueses</span>
          </div>
        </div>
      </div>
    </footer>
  `,
    styles: [`
    .footer {
      background-color: #F5F2E8;
      color: var(--color-text-primary);
      padding: var(--spacing-xxl) 0 var(--spacing-lg);
    }

    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1.5fr;
      gap: var(--spacing-xl);
      margin-bottom: var(--spacing-xxl);
    }

    .footer-brand {
      max-width: 300px;
    }

    .footer-logo {
      margin-bottom: var(--spacing-md);
    }

    .logo-text {
      font-family: 'Poppins', sans-serif;
      font-size: var(--font-size-3xl);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-primary);
      letter-spacing: -0.02em;
    }

    .brand-description {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-medium);
      margin-bottom: var(--spacing-sm);
      opacity: 0.9;
    }

    .brand-tagline {
      font-size: var(--font-size-sm);
      line-height: var(--line-height-relaxed);
      opacity: 0.8;
      font-style: italic;
    }

    .footer-nav h4,
    .footer-services h4,
    .footer-contact h4 {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      margin-bottom: var(--spacing-md);
      color: var(--color-text-primary);
    }

    .nav-links,
    .service-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .nav-links li,
    .service-links li {
      margin-bottom: var(--spacing-xs);
    }

    .nav-links a {
      color: var(--color-text-secondary);
      text-decoration: none;
      font-size: var(--font-size-sm);
      transition: color var(--transition-normal);
    }

    .nav-links a:hover {
      color: var(--color-text-primary);
    }

    .service-links li {
      color: var(--color-text-secondary);
      font-size: var(--font-size-sm);
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-sm);
    }

    .contact-link {
      display: flex;
      align-items: center;
      gap: var(--spacing-xs);
      color: var(--color-text-secondary);
      text-decoration: none;
      font-size: var(--font-size-sm);
      transition: color var(--transition-normal);
    }

    .contact-link:hover {
      color: var(--color-text-primary);
    }

    .contact-link svg {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
    }

    .footer-cta {
      background: rgba(255, 255, 255, 0.1);
      border-radius: var(--radius-md);
      padding: var(--spacing-xl);
      text-align: center;
      margin-bottom: var(--spacing-xl);
      backdrop-filter: blur(10px);
    }

    .cta-content h3 {
      font-size: var(--font-size-2xl);
      font-weight: var(--font-weight-semibold);
      margin-bottom: var(--spacing-sm);
    }

    .cta-content p {
      font-size: var(--font-size-base);
      opacity: 0.9;
      margin-bottom: var(--spacing-lg);
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
    }

    .cta-content .btn {
      background: var(--color-neutral-medium);
      color: var(--color-white);
      font-weight: var(--font-weight-medium);
    }

    .cta-content .btn:hover {
      background-color: var(--color-neutral-dark);
      transform: translateY(-2px);
    }

    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: var(--spacing-lg);
      border-top: 1px solid rgba(255, 255, 255, 0.2);
    }

    .copyright p {
      font-size: var(--font-size-sm);
      opacity: 0.8;
      margin: 0;
    }

    .legal-links {
      font-size: var(--font-size-sm);
      opacity: 0.8;
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
      .footer-content {
        grid-template-columns: 1fr 1fr;
        gap: var(--spacing-lg);
      }

      .footer-brand {
        max-width: none;
      }
    }

    @media (max-width: 768px) {
      .footer {
        padding: var(--spacing-xl) 0 var(--spacing-md);
      }

      .footer-content {
        grid-template-columns: 1fr;
        gap: var(--spacing-lg);
        text-align: center;
      }

      .footer-brand {
        max-width: none;
      }

      .footer-cta {
        padding: var(--spacing-lg);
      }

      .cta-content h3 {
        font-size: var(--font-size-xl);
      }

      .footer-bottom {
        flex-direction: column;
        gap: var(--spacing-sm);
        text-align: center;
      }
    }

    @media (max-width: 480px) {
      .logo-text {
        font-size: var(--font-size-2xl);
      }

      .footer-cta {
        padding: var(--spacing-md);
      }

      .contact-link {
        justify-content: center;
      }
    }
  `]
})
export class FooterComponent {
  /** Ano atual para copyright */
  currentYear = new Date().getFullYear();

  /**
   * Navega suavemente para uma seção específica
   * @param sectionId - ID da seção de destino
   * @param event - Evento do clique
   */
  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 70; // Altura do header fixo
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }

  /**
   * Redireciona para o Google Forms para agendamento
   */
  redirectToGoogleForms(): void {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfqfPM11n8QKqNMOpQKo6vEduwQ7Fna5utR1mo69PbtDKUZMQ/viewform?sessionType=individual', '_blank');
  }
}
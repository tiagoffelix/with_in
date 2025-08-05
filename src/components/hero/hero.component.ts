import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../shared/scroll.service';

/**
 * Componente Hero - Seção principal de apresentação
 * Contém headline, texto descritivo e call-to-action principal
 */
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero">
      <div class="hero-background">
        <div class="hero-overlay"></div>
      </div>
      
      <div class="container">
        <div class="hero-content" [class.animate]="isVisible">
          <div class="hero-text">
            <h1 class="hero-headline">
              Dentro de ti vivem histórias que merecem ser cuidadas
            </h1>
            
            <div class="hero-description">
              <p><strong>Cuidar da mente devia ser simples e próximo.</strong></p>
              <p>Mas sabemos — pela nossa própria experiência como psicólogas — que muitas vezes quem mais precisa de ajuda sente-se sozinho e distante.</p>
              <p>Foi por isso que nasceu o With.in — um projeto que nasce de mim, <strong>Joana Barbosa</strong>, e da minha equipa de profissionais, todos unidos por um propósito comum: <strong>tornar o cuidado emocional mais humano e presente</strong>, independentemente do lugar onde estás.</p>
              <p>Somos psicólogas, terapeutas e, antes de qualquer título, <strong>pessoas</strong>. Pessoas com histórias, experiências e cicatrizes.</p>
              <p>Sabemos o que significa perder o equilíbrio interior. E sabemos, também, o poder de o reencontrar.</p>
              <p>Acreditamos que cuidar da mente vai muito além de tratar sintomas. <strong>É escutar silêncios, acolher fragilidades e encontrar caminhos.</strong></p>
              <p>Cada pessoa que chega até nós traz consigo um mundo inteiro.</p>
              <p>E é na relação terapêutica — no encontro genuíno de <strong>confiança, escuta e empatia</strong> — que começa o verdadeiro processo de cura e autoconhecimento.</p>
              <p>É através dessa conexão que ajudamos cada pessoa a <strong>olhar para dentro</strong>, descobrir as suas forças e compreender as suas fragilidades — para que possa <strong>construir um caminho autêntico de crescimento</strong>.</p>
            </div>
            
            <div class="hero-actions">
              <button 
                class="btn btn-secondary btn-large"
                (click)="scrollService.scrollToSection('team', $event)"
                [attr.aria-label]="'Conhecer a nossa equipa'"
              >
                Conhece a nossa equipa
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding: var(--spacing-xxxl) 0 var(--spacing-xxl);
      overflow: hidden;
    }

    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, 
        var(--color-primary-bg) 0%, 
        rgba(245, 242, 232, 0.9) 50%,
        rgba(160, 147, 125, 0.1) 100%
      );
      z-index: -2;
    }

    .hero-background::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        radial-gradient(circle at 20% 80%, rgba(139, 115, 85, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(160, 147, 125, 0.1) 0%, transparent 50%);
      z-index: -1;
    }

    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(245, 242, 232, 0.3);
      z-index: -1;
    }

    .hero-content {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s ease-out;
    }

    .hero-content.animate {
      opacity: 1;
      transform: translateY(0);
    }

    .hero-headline {
      font-family: 'Tenor Sans', cursive;
      font-size: var(--font-size-5xl);
      font-weight: var(--font-weight-semibold);
      line-height: var(--line-height-tight);
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-xl);
      letter-spacing: -0.02em;
    }

    .hero-description {
      margin-bottom: var(--spacing-xl);
    }

    .hero-description p {
      font-size: var(--font-size-lg);
      line-height: var(--line-height-relaxed);
      color: var(--color-text-secondary);
      margin-bottom: var(--spacing-md);
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }

    .hero-description p:last-child {
      margin-bottom: 0;
      font-weight: var(--font-weight-medium);
      color: var(--color-text-primary);
    }

    .hero-actions {
      display: flex;
      gap: var(--spacing-md);
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn-large {
      padding: var(--spacing-md) var(--spacing-xl);
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-medium);
      min-width: 200px;
    }

    /* Animações de entrada */
    .hero-headline {
      animation: fadeInUp 0.8s ease-out 0.2s both;
    }

    .hero-description {
      animation: fadeInUp 0.8s ease-out 0.4s both;
    }

    .hero-actions {
      animation: fadeInUp 0.8s ease-out 0.6s both;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .hero {
        min-height: 90vh;
        padding: var(--spacing-xxl) 0 var(--spacing-xl);
      }

      .hero-headline {
        font-size: var(--font-size-3xl);
        margin-bottom: var(--spacing-lg);
      }

      .hero-description p {
        font-size: var(--font-size-base);
        margin-bottom: var(--spacing-sm);
      }

      .hero-actions {
        flex-direction: column;
        align-items: center;
      }

      .btn-large {
        width: 100%;
        max-width: 300px;
        padding: var(--spacing-sm) var(--spacing-lg);
        font-size: var(--font-size-base);
      }
    }

    @media (max-width: 480px) {
      .hero {
        padding: var(--spacing-xl) 0;
      }

      .hero-headline {
        font-size: var(--font-size-2xl);
      }

      .hero-description p {
        font-size: var(--font-size-sm);
      }
    }
  `]
})
export class HeroComponent implements OnInit {
  /** Estado de visibilidade para animações */
  isVisible = false;

  constructor(public scrollService: ScrollService) {}

  ngOnInit(): void {
    // Inicia animação após um pequeno delay
    setTimeout(() => {
      this.isVisible = true;
    }, 100);
  }

  /**
   * Abre o modal de agendamento
   */
  openAppointmentModal(): void {
    const event = new CustomEvent('openAppointmentModal');
    document.dispatchEvent(event);
  }
}
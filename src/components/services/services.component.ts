import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface para definir a estrutura dos serviços
 */
interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
}

/**
 * Componente Services - Seção dos serviços oferecidos
 * Exibe cards com informações detalhadas dos tipos de terapia
 */
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="services section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Os Nossos Serviços</h2>
          <p class="section-subtitle">
            Oferecemos diferentes modalidades terapêuticas adaptadas às tuas necessidades
          </p>
        </div>

        <div class="services-grid">
          <div 
            class="service-card"
            *ngFor="let service of services; trackBy: trackByService"
          >
            <div class="service-icon">
              <div [innerHTML]="getServiceIcon(service.icon)"></div>
            </div>
            
            <div class="service-content">
              <h3 class="service-name">{{ service.name }}</h3>
              <p class="service-description">{{ service.description }}</p>
              
              <ul class="service-features">
                <li *ngFor="let feature of service.features">{{ feature }}</li>
              </ul>
              
              <div class="service-actions">
                <button 
                  class="btn btn-primary"
                  (click)="scheduleService(service.name)"
                >
                  Marca a tua sessão
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="additional-info">
          <div class="info-card">
            <h3>Como funciona?</h3>
            <div class="steps">
              <div class="step">
                <div class="step-number">1</div>
                <div class="step-content">
                  <h4>Primeiro Contacto</h4>
                  <p>Entra em contacto connosco através do formulário ou telefone</p>
                </div>
              </div>
              <div class="step">
                <div class="step-number">2</div>
                <div class="step-content">
                  <h4>Avaliação Inicial</h4>
                  <p>Realizamos uma primeira sessão para compreender as tuas necessidades</p>
                </div>
              </div>
              <div class="step">
                <div class="step-number">3</div>
                <div class="step-content">
                  <h4>Plano Personalizado</h4>
                  <p>Desenvolvemos um plano terapêutico adaptado aos teus objetivos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services {
      background-color: var(--color-primary-bg);
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

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: var(--spacing-xl);
      margin-bottom: var(--spacing-xxl);
    }

    .service-card {
      background: var(--color-white);
      border-radius: var(--radius-md);
      padding: var(--spacing-xl);
      box-shadow: var(--shadow-md);
      transition: all var(--transition-normal);
      border: 1px solid rgba(139, 115, 85, 0.1);
      text-align: center;
    }

    .service-card:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-lg);
    }

    .service-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto var(--spacing-lg);
      background: rgba(139, 115, 85, 0.1);
      border-radius: var(--radius-full);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all var(--transition-normal);
    }

    .service-card:hover .service-icon {
      background: var(--color-accent);
      transform: scale(1.1);
    }

    .service-icon :global(svg) {
      width: 40px;
      height: 40px;
      color: var(--color-accent);
      transition: color var(--transition-normal);
    }

    .service-card:hover .service-icon :global(svg) {
      color: var(--color-white);
    }

    .service-name {
      font-size: var(--font-size-2xl);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-md);
    }

    .service-description {
      font-size: var(--font-size-base);
      color: var(--color-text-secondary);
      line-height: var(--line-height-relaxed);
      margin-bottom: var(--spacing-lg);
    }

    .service-features {
      list-style: none;
      padding: 0;
      margin: 0 0 var(--spacing-lg) 0;
      text-align: left;
    }

    .service-features li {
      font-size: var(--font-size-sm);
      color: var(--color-text-secondary);
      margin-bottom: var(--spacing-xs);
      padding-left: var(--spacing-md);
      position: relative;
    }

    .service-features li::before {
      content: '✓';
      color: var(--color-accent);
      font-weight: var(--font-weight-semibold);
      position: absolute;
      left: 0;
    }

    .service-actions {
      text-align: center;
    }

    .additional-info {
      margin-top: var(--spacing-xxl);
    }

    .info-card {
      background: var(--color-white);
      border-radius: var(--radius-md);
      padding: var(--spacing-xl);
      box-shadow: var(--shadow-md);
      max-width: 800px;
      margin: 0 auto;
    }

    .info-card h3 {
      font-size: var(--font-size-2xl);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-primary);
      text-align: center;
      margin-bottom: var(--spacing-xl);
    }

    .steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: var(--spacing-lg);
    }

    .step {
      text-align: center;
    }

    .step-number {
      width: 50px;
      height: 50px;
      background: var(--color-accent);
      color: var(--color-white);
      border-radius: var(--radius-full);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semibold);
      margin: 0 auto var(--spacing-md);
    }

    .step h4 {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-xs);
    }

    .step p {
      font-size: var(--font-size-sm);
      color: var(--color-text-secondary);
      line-height: var(--line-height-normal);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .services-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-lg);
      }

      .section-title {
        font-size: var(--font-size-3xl);
      }

      .service-card {
        padding: var(--spacing-lg);
      }

      .steps {
        grid-template-columns: 1fr;
        gap: var(--spacing-md);
      }

      .info-card {
        padding: var(--spacing-lg);
      }
    }

    @media (max-width: 480px) {
      .service-card {
        padding: var(--spacing-md);
      }

      .service-icon {
        width: 60px;
        height: 60px;
      }

      .service-icon :global(svg) {
        width: 30px;
        height: 30px;
      }
    }

    .btn:focus {
      outline: none;
      box-shadow: none;
    }
  `]
})
export class ServicesComponent implements OnInit {
  /** Lista de serviços oferecidos pela clínica */
  services: Service[] = [
    {
      id: 'individual-therapy',
      name: 'Terapia Individual',
      description: 'A terapia individual é um espaço seguro e confidencial onde podes explorar os teus pensamentos, emoções e comportamentos. Através de uma relação terapêutica de confiança, trabalhamos juntos para compreender as dificuldades que enfrentas e desenvolver estratégias eficazes para as superar.',
      icon: 'individual',
      features: [
        'Sessões personalizadas de 50 minutos',
        'Ambiente seguro e confidencial',
        'Abordagem adaptada às tuas necessidades',
        'Desenvolvimento de competências de autorregulação',
        'Acompanhamento contínuo do progresso'
      ]
    },
    {
      id: 'couple-therapy',
      name: 'Terapia de Casal',
      description: 'A terapia de casal oferece um espaço neutro e acolhedor para casais que desejam melhorar a sua relação. Trabalhamos questões como comunicação, conflitos, intimidade e confiança, fortalecendo a ligação entre os parceiros.',
      icon: 'couple',
      features: [
        'Sessões de 60 minutos para ambos os parceiros',
        'Melhoria da comunicação do casal',
        'Resolução construtiva de conflitos',
        'Fortalecimento da intimidade e confiança',
        'Estratégias práticas para o dia a dia'
      ]
    },
    {
      id: 'family-therapy',
      name: 'Terapia Familiar',
      description: 'A terapia familiar envolve todos os membros da família num processo de mudança e crescimento conjunto. Focamo-nos na melhoria da comunicação familiar, na resolução de conflitos e no fortalecimento dos laços afetivos.',
      icon: 'family',
      features: [
        'Sessões de 60 minutos com toda a família',
        'Melhoria da dinâmica familiar',
        'Resolução de conflitos entre gerações',
        'Fortalecimento dos laços afetivos',
        'Criação de ambiente familiar harmonioso'
      ]
    }
  ];

  ngOnInit(): void {
    // Componente inicializado
  }

  /**
   * Função de tracking para otimizar renderização da lista
   * @param index - Índice do item
   * @param service - Dados do serviço
   * @returns ID único para tracking
   */
  trackByService(index: number, service: Service): string {
    return service.id;
  }

  /**
   * Retorna o ícone SVG para cada tipo de serviço
   * @param iconType - Tipo do ícone
   * @returns HTML string com o SVG
   */
  getServiceIcon(iconType: string): string {
    const icons: { [key: string]: string } = {
      individual: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      `,
      couple: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      `,
      family: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          <circle cx="18" cy="12" r="3"></circle>
        </svg>
      `
    };

    return icons[iconType] || icons['individual'];
  }

  /**
   * Redireciona para o formulário do Google Forms com o tipo de sessão
   * @param serviceName - Nome do serviço
   */
  scheduleService(serviceName: string): void {
    const sessionTypeMap: { [key: string]: string } = {
      'Terapia Individual': 'individual',
      'Terapia de Casal': 'couple',
      'Terapia Familiar': 'family'
    };

    const sessionType = sessionTypeMap[serviceName] || 'individual';
    const formUrl = `https://docs.google.com/forms/d/1KxtOKPhGwvNQHsLUDsGPSqLUSkHGePeY5-BPS2kZTXE/viewform?sessionType=${sessionType}`;
    window.open(formUrl, '_blank');
  }
}
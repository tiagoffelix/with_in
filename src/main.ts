import { Component, OnInit, OnDestroy } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs';

// Importação dos componentes
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { TeamComponent } from './components/team/team.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

/**
 * Componente principal da aplicação With.in
 * Orquestra todos os componentes e gerencia o estado global
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeaderComponent,
    HeroComponent,
    TeamComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <div class="app">
      <!-- Header fixo -->
      <app-header></app-header>

      <!-- Conteúdo principal -->
      <main class="main-content">
        <!-- Seção Hero -->
        <app-hero></app-hero>

        <!-- Seção Equipa -->
        <app-team></app-team>

        <!-- Seção Serviços -->
        <app-services></app-services>

        <!-- Seção Contacto -->
        <app-contact></app-contact>
      </main>

      <!-- Footer -->
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .app {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .main-content {
      flex: 1;
      padding-top: 70px; /* Altura do header fixo */
    }

    /* Smooth scroll behavior */
    html {
      scroll-behavior: smooth;
    }

    /* Otimizações de performance */
    * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* Acessibilidade - Focus visible */
    *:focus-visible {
      outline: 2px solid var(--color-accent);
      outline-offset: 2px;
    }

    /* Prevenção de flash de conteúdo não estilizado */
    .app {
      opacity: 0;
      animation: fadeIn 0.3s ease-out forwards;
    }

    @keyframes fadeIn {
      to {
        opacity: 1;
      }
    }

    /* Loading state para imagens */
    img {
      transition: opacity var(--transition-normal);
    }

    img[loading="lazy"] {
      opacity: 0;
    }

    img[loading="lazy"].loaded {
      opacity: 1;
    }

    /* Otimização para dispositivos móveis */
    @media (max-width: 768px) {
      .main-content {
        padding-top: 60px;
      }
    }

    /* Melhorias de performance para animações */
    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }
  `]
})
export class App implements OnInit, OnDestroy {
  /** Subject para gerenciar unsubscribe */
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.setupEventListeners();
    this.setupSEO();
    this.setupPerformanceOptimizations();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Configura listeners para eventos globais
   */
  private setupEventListeners(): void {
    // Lazy loading para imagens
    this.setupLazyLoading();
  }

  /**
   * Configura meta tags para SEO
   */
  private setupSEO(): void {
    // Atualiza o título da página
    document.title = 'With.in - Psicologia Clínica | Joana Barbosa';

    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'With.in - Psicologia Clínica em Lisboa. Terapia individual, de casal e familiar. ' +
        'Equipa especializada em bem-estar emocional e mental. Agende a sua sessão.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'With.in - Psicologia Clínica em Lisboa. Terapia individual, de casal e familiar. ' +
        'Equipa especializada em bem-estar emocional e mental. Agende a sua sessão.';
      document.head.appendChild(meta);
    }

    // Meta keywords
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'psicologia, terapia, Lisboa, psicólogo, saúde mental, bem-estar, ' +
      'terapia individual, terapia casal, terapia familiar, Joana Barbosa';
    document.head.appendChild(metaKeywords);

    // Meta viewport (se não existir)
    if (!document.querySelector('meta[name="viewport"]')) {
      const metaViewport = document.createElement('meta');
      metaViewport.name = 'viewport';
      metaViewport.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(metaViewport);
    }
  }

  /**
   * Configura otimizações de performance
   */
  private setupPerformanceOptimizations(): void {
    // Preload de fontes críticas
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@400;500;600&display=swap';
    fontPreload.as = 'style';
    document.head.appendChild(fontPreload);

    // Service Worker para cache (se suportado)
    if ('serviceWorker' in navigator) {
      // Implementação futura do service worker
    }
  }

  /**
   * Configura lazy loading para imagens
   */
  private setupLazyLoading(): void {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        });
      });

      // Observa todas as imagens com loading="lazy"
      setTimeout(() => {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        lazyImages.forEach(img => imageObserver.observe(img));
      }, 100);
    }
  }
}

// Bootstrap da aplicação
bootstrapApplication(App, {
  providers: [
    // Providers adicionais podem ser adicionados aqui
  ]
}).catch(err => console.error(err));
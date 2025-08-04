import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from 'shared/scroll.service';

/**
 * Componente Header - Navegação principal do site
 * Inclui logo, menu de navegação e botão CTA
 * Responsivo com menu hamburger para mobile
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header" [class.scrolled]="isScrolled">
      <div class="container">
        <div class="header-content">
          <!-- Logo -->
          <div class="logo">
            <a href="#home" (click)="scrollService.scrollToSection('home', $event)">
              <span class="logo-text">With.in</span>
            </a>
          </div>

          <!-- Desktop Navigation -->
          <nav class="nav-desktop" [attr.aria-label]="'Navegação principal'">
            <ul class="nav-list">
              <li><a href="#home" (click)="scrollService.scrollToSection('home', $event)">Início</a></li>
              <li><a href="#team" (click)="scrollService.scrollToSection('team', $event)">Equipa</a></li>
              <li><a href="#services" (click)="scrollService.scrollToSection('services', $event)">Serviços</a></li>
              <li><a href="#contact" (click)="scrollService.scrollToSection('contact', $event)">Contacto</a></li>
            </ul>
          </nav>

          <!-- CTA Button -->
          <div class="cta-container">
            <button 
              class="btn btn-primary cta-btn"
              (click)="openAppointmentModal()"
              [attr.aria-label]="'Abrir formulário de agendamento'"
            >
              Agendar Sessão
            </button>
          </div>

          <!-- Mobile Menu Toggle -->
          <button 
            class="mobile-menu-toggle"
            (click)="toggleMobileMenu()"
            [attr.aria-expanded]="isMobileMenuOpen"
            [attr.aria-label]="isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'"
          >
            <span class="hamburger-line" [class.active]="isMobileMenuOpen"></span>
            <span class="hamburger-line" [class.active]="isMobileMenuOpen"></span>
            <span class="hamburger-line" [class.active]="isMobileMenuOpen"></span>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <nav 
          class="nav-mobile" 
          [class.open]="isMobileMenuOpen"
          [attr.aria-hidden]="!isMobileMenuOpen"
        >
          <ul class="nav-list-mobile">
            <li><a href="#home" (click)="scrollService.scrollToSection('home', $event)">Início</a></li>
            <li><a href="#team" (click)="scrollService.scrollToSection('team', $event)">Equipa</a></li>
            <li><a href="#services" (click)="scrollService.scrollToSection('services', $event)">Serviços</a></li>
            <li><a href="#contact" (click)="scrollService.scrollToSection('contact', $event)">Contacto</a></li>
            <li>
              <button 
                class="btn btn-primary mobile-cta"
                (click)="openAppointmentModal()"
              >
                Agendar Sessão
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background-color: rgba(245, 242, 232, 0.95);
      backdrop-filter: blur(10px);
      transition: all var(--transition-normal);
      border-bottom: 1px solid transparent;
    }

    .header.scrolled {
      background-color: rgba(245, 242, 232, 0.98);
      border-bottom-color: rgba(139, 115, 85, 0.1);
      box-shadow: var(--shadow-sm);
    }

    .header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--spacing-sm) 0;
      min-height: 70px;
    }

    .logo {
      flex-shrink: 0;
    }

    .logo-text {
      font-family: 'Poppins', sans-serif;
      font-size: var(--font-size-2xl);
      font-weight: var(--font-weight-semibold);
      color: var(--color-accent);
      text-decoration: none;
      letter-spacing: -0.02em;
      position: relative;
    }

    .logo-text::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--color-accent);
      transition: width var(--transition-normal);
    }

    .logo a:hover .logo-text::after {
      width: 100%;
    }

    .nav-desktop {
      display: flex;
      align-items: center;
    }

    .nav-list {
      display: flex;
      list-style: none;
      gap: var(--spacing-lg);
      margin: 0;
      padding: 0;
    }

    .nav-list a {
      color: var(--color-text-primary);
      text-decoration: none;
      font-weight: var(--font-weight-medium);
      font-size: var(--font-size-base);
      padding: var(--spacing-xs) var(--spacing-sm);
      border-radius: var(--radius-sm);
      transition: all var(--transition-normal);
      position: relative;
    }

    .nav-list a:hover {
      color: var(--color-accent);
      background-color: rgba(139, 115, 85, 0.1);
    }

    .cta-container {
      flex-shrink: 0;
    }

    .cta-btn {
      font-size: var(--font-size-sm);
      padding: var(--spacing-sm) var(--spacing-md);
    }

    .mobile-menu-toggle {
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      background: none;
      border: none;
      cursor: pointer;
      padding: var(--spacing-xs);
    }

    .hamburger-line {
      width: 24px;
      height: 2px;
      background-color: var(--color-accent);
      transition: all var(--transition-normal);
      margin: 2px 0;
    }

    .hamburger-line.active:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }

    .hamburger-line.active:nth-child(2) {
      opacity: 0;
    }

    .hamburger-line.active:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }

    .nav-mobile {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background-color: var(--color-white);
      border-top: 1px solid rgba(139, 115, 85, 0.1);
      box-shadow: var(--shadow-md);
      opacity: 0;
      transform: translateY(-10px);
      transition: all var(--transition-normal);
    }

    .nav-mobile.open {
      display: block;
      opacity: 1;
      transform: translateY(0);
    }

    .nav-list-mobile {
      list-style: none;
      margin: 0;
      padding: var(--spacing-md) 0;
    }

    .nav-list-mobile li {
      margin: 0;
    }

    .nav-list-mobile a,
    .mobile-cta {
      display: block;
      padding: var(--spacing-sm) var(--spacing-md);
      color: var(--color-text-primary);
      text-decoration: none;
      font-weight: var(--font-weight-medium);
      transition: all var(--transition-normal);
      border: none;
      background: none;
      width: 100%;
      text-align: left;
      font-size: var(--font-size-base);
    }

    .nav-list-mobile a:hover {
      background-color: rgba(139, 115, 85, 0.1);
      color: var(--color-accent);
    }

    .mobile-cta {
      margin: var(--spacing-sm) var(--spacing-md) 0;
      text-align: center;
      width: calc(100% - var(--spacing-lg));
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .nav-desktop,
      .cta-container {
        display: none;
      }

      .mobile-menu-toggle {
        display: flex;
      }

      .header-content {
        padding: var(--spacing-sm) 0;
        min-height: 60px;
      }

      .logo-text {
        font-size: var(--font-size-xl);
      }
    }

    @media (max-width: 480px) {
      .container {
        padding: 0 var(--spacing-sm);
      }
    }

    a:-webkit-any-link {
      text-decoration: none;
    }
  `]
})
export class HeaderComponent implements OnInit {
  /** Estado do scroll da página */
  isScrolled = false;
  
  /** Estado do menu mobile */
  isMobileMenuOpen = false;

  constructor(public scrollService: ScrollService) {}

  ngOnInit(): void {
    // Verifica o estado inicial do scroll
    this.checkScrollPosition();
  }

  /**
   * Listener para eventos de scroll da janela
   * Atualiza o estado visual do header baseado na posição do scroll
   */
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScrollPosition();
  }

  /**
   * Listener para cliques fora do menu mobile
   * Fecha o menu quando clicado fora dele
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    const header = target.closest('.header');
    
    if (!header && this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
    }
  }

  /**
   * Verifica a posição do scroll e atualiza o estado do header
   */
  private checkScrollPosition(): void {
    this.isScrolled = window.scrollY > 50;
  }

  /**
   * Alterna o estado do menu mobile
   */
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  /**
   * Redireciona para o formulário do Google Forms
   */
  openAppointmentModal(): void {
    // Fecha o menu mobile se estiver aberto
    this.isMobileMenuOpen = false;

    // Redireciona para o link do Google Forms
    window.open('https://docs.google.com/forms/d/1KxtOKPhGwvNQHsLUDsGPSqLUSkHGePeY5-BPS2kZTXE/viewform', '_blank');
  }
}
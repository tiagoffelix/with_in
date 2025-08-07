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
    imports: [CommonModule],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
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
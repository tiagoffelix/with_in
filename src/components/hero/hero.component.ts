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
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss']
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
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  /** Ano atual para copyright */
  currentYear = new Date().getFullYear();

  /**
   * Navega suavemente para uma seção específica
   */
  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 70;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  }

  /**
   * Redireciona para o Google Forms para agendamento
   */
  redirectToGoogleForms(): void {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSfqfPM11n8QKqNMOpQKo6vEduwQ7Fna5utR1mo69PbtDKUZMQ/viewform?sessionType=individual',
      '_blank'
    );
  }
}
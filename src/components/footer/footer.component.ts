import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  /** Ano atual para copyright */
  currentYear = new Date().getFullYear();

  constructor(private router: Router) {}

  /**
   * Navega suavemente para uma seção específica; se não existir, navega para home com fragmento
   */
  scrollToSection(sectionId: string, event?: Event): void {
    event?.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 70;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    } else {
      this.router.navigate(['/'], { fragment: sectionId });
    }
  }

  /**
   * Abre um serviço específico na secção de serviços
   */
  openService(serviceId: string, event?: Event): void {
    event?.preventDefault();
    // Go to home services section first
    this.router.navigate(['/'], { fragment: 'services' }).then(() => {
      // After navigation, wait for DOM paint and open modal
      setTimeout(() => {
        const card = document.querySelector(`.services .service-card img[src*="${serviceId}"]`);
        const btn = card?.closest('.service-card')?.querySelector('button.btn.btn-secondary') as HTMLButtonElement | null;
        btn?.click();
      }, 700);
    });
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
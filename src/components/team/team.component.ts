import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Psychologist } from '../../models/psychologist.model';
import { PsychologistService } from '../../services/psychologist.service';

/**
 * Componente Team - Seção da equipa de psicólogas
 * Exibe cards com informações das profissionais em formato accordion
 */
@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="team" class="team section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">A Nossa Equipa</h2>
          <p class="section-subtitle">
            Profissionais dedicadas ao teu bem-estar emocional e mental
          </p>
        </div>

        <div class="team-grid" *ngIf="psychologists$ | async as psychologists">
          <div 
            class="team-card"
            *ngFor="let psychologist of psychologists; trackBy: trackByPsychologist"
            [class.expanded]="expandedCard === psychologist.id"
          >
            <div class="card-header" (click)="toggleCard(psychologist.id)">
              <div class="psychologist-photo">
                <img 
                  [src]="psychologist.photo" 
                  [alt]="'Foto de ' + psychologist.name"
                  loading="lazy"
                  (error)="onImageError($event)"
                />
                <div class="photo-overlay" *ngIf="psychologist.isFounder">
                  <span class="founder-badge">Fundadora</span>
                </div>
              </div>
              
              <div class="psychologist-info">
                <h3 class="psychologist-name">{{ psychologist.name }}</h3>
                <p class="psychologist-title">{{ psychologist.title }}</p>
                <p class="psychologist-summary">{{ psychologist.summary }}</p>
                
                <div class="specializations-preview">
                  <span 
                    class="specialization-tag"
                    *ngFor="let spec of psychologist.specializations.slice(0, 3)"
                  >
                    {{ spec }}
                  </span>
                  <span 
                    class="more-specializations"
                    *ngIf="psychologist.specializations.length > 3"
                  >
                    +{{ psychologist.specializations.length - 3 }}
                  </span>
                </div>
              </div>
              
              <div class="expand-icon">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  stroke-width="2"
                >
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </div>
            </div>

            <div class="card-content" [class.expanded]="expandedCard === psychologist.id">
              <div class="content-inner">
                <div class="biography-section">
                  <h4>Sobre</h4>
                  <p>{{ psychologist.biography }}</p>
                </div>

                <div class="details-grid">
                  <div class="detail-section">
                    <h4>Especializações</h4>
                    <ul>
                      <li *ngFor="let spec of psychologist.specializations">{{ spec }}</li>
                    </ul>
                  </div>

                  <div class="detail-section">
                    <h4>Formação</h4>
                    <ul>
                      <li *ngFor="let edu of psychologist.education">{{ edu }}</li>
                    </ul>
                  </div>

                  <div class="detail-section">
                    <h4>Experiência</h4>
                    <ul>
                      <li *ngFor="let exp of psychologist.experience">{{ exp }}</li>
                    </ul>
                  </div>

                  <div class="detail-section">
                    <h4>Abordagens</h4>
                    <ul>
                      <li *ngFor="let approach of psychologist.approaches">{{ approach }}</li>
                    </ul>
                  </div>
                </div>

                <div class="card-actions">
                  <button 
                    class="btn btn-primary"
                    (click)="scheduleWithPsychologist(psychologist.name)"
                  >
                    Agendar com {{ psychologist.name.split(' ')[0] }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .team {
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

    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: var(--spacing-lg);
      max-width: 1200px;
      margin: 0 auto;
    }

    .team-card {
      background: var(--color-white);
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-md);
      overflow: hidden;
      transition: all var(--transition-normal);
      border: 1px solid rgba(139, 115, 85, 0.1);
    }

    .team-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
    }

    .card-header {
      padding: var(--spacing-lg);
      cursor: pointer;
      display: flex;
      gap: var(--spacing-md);
      align-items: flex-start;
      position: relative;
    }

    .psychologist-photo {
      position: relative;
      flex-shrink: 0;
    }

    .psychologist-photo img {
      width: 80px;
      height: 80px;
      border-radius: var(--radius-full);
      object-fit: cover;
      border: 3px solid var(--color-neutral-light);
      transition: all var(--transition-normal);
    }

    .team-card:hover .psychologist-photo img {
      border-color: var(--color-accent);
    }

    .photo-overlay {
      position: absolute;
      top: -8px;
      right: -8px;
    }

    .founder-badge {
      background: var(--color-accent);
      color: var(--color-white);
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-medium);
      padding: 4px 8px;
      border-radius: var(--radius-sm);
      white-space: nowrap;
    }

    .psychologist-info {
      flex: 1;
      min-width: 0;
    }

    .psychologist-name {
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-primary);
      margin-bottom: 4px;
    }

    .psychologist-title {
      font-size: var(--font-size-sm);
      color: var(--color-accent);
      font-weight: var(--font-weight-medium);
      margin-bottom: var(--spacing-xs);
    }

    .psychologist-summary {
      font-size: var(--font-size-sm);
      color: var(--color-text-secondary);
      line-height: var(--line-height-normal);
      margin-bottom: var(--spacing-sm);
    }

    .specializations-preview {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-xs);
    }

    .specialization-tag {
      background: rgba(139, 115, 85, 0.1);
      color: var(--color-accent);
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-medium);
      padding: 4px 8px;
      border-radius: var(--radius-sm);
      white-space: nowrap;
    }

    .more-specializations {
      background: rgba(139, 115, 85, 0.2);
      color: var(--color-accent);
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-medium);
      padding: 4px 8px;
      border-radius: var(--radius-sm);
    }

    .expand-icon {
      flex-shrink: 0;
      color: var(--color-neutral-medium);
      transition: transform var(--transition-normal);
    }

    .team-card.expanded .expand-icon {
      transform: rotate(180deg);
    }

    .card-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height var(--transition-slow) ease-in-out;
    }

    .card-content.expanded {
      max-height: 1000px;
    }

    .content-inner {
      padding: 0 var(--spacing-lg) var(--spacing-lg);
      border-top: 1px solid rgba(139, 115, 85, 0.1);
    }

    .biography-section {
      margin-bottom: var(--spacing-lg);
    }

    .biography-section h4 {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-sm);
    }

    .biography-section p {
      color: var(--color-text-secondary);
      line-height: var(--line-height-relaxed);
    }

    .details-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: var(--spacing-lg);
      margin-bottom: var(--spacing-lg);
    }

    .detail-section h4 {
      font-size: var(--font-size-base);
      font-weight: var(--font-weight-semibold);
      color: var(--color-accent);
      margin-bottom: var(--spacing-sm);
    }

    .detail-section ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .detail-section li {
      font-size: var(--font-size-sm);
      color: var(--color-text-secondary);
      margin-bottom: var(--spacing-xs);
      padding-left: var(--spacing-sm);
      position: relative;
    }

    .detail-section li::before {
      content: '•';
      color: var(--color-accent);
      position: absolute;
      left: 0;
    }

    .card-actions {
      text-align: center;
      padding-top: var(--spacing-md);
      border-top: 1px solid rgba(139, 115, 85, 0.1);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .team-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-md);
      }

      .section-title {
        font-size: var(--font-size-3xl);
      }

      .card-header {
        padding: var(--spacing-md);
        flex-direction: column;
        text-align: center;
      }

      .psychologist-photo {
        align-self: center;
      }

      .psychologist-photo img {
        width: 100px;
        height: 100px;
      }

      .details-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-md);
      }

      .content-inner {
        padding: 0 var(--spacing-md) var(--spacing-md);
      }
    }

    @media (max-width: 480px) {
      .team-grid {
        grid-template-columns: 1fr;
      }

      .card-header {
        padding: var(--spacing-sm);
      }

      .content-inner {
        padding: 0 var(--spacing-sm) var(--spacing-sm);
      }
    }
  `]
})
export class TeamComponent implements OnInit {
  /** Observable com dados das psicólogas */
  psychologists$!: Observable<Psychologist[]>;
  
  /** ID do card atualmente expandido */
  expandedCard: string | null = null;

  constructor(private psychologistService: PsychologistService) {}

  ngOnInit(): void {
    this.psychologists$ = this.psychologistService.getAllPsychologists();
  }

  /**
   * Função de tracking para otimizar renderização da lista
   * @param index - Índice do item
   * @param psychologist - Dados da psicóloga
   * @returns ID único para tracking
   */
  trackByPsychologist(index: number, psychologist: Psychologist): string {
    return psychologist.id;
  }

  /**
   * Alterna o estado expandido/colapsado de um card
   * @param psychologistId - ID da psicóloga
   */
  toggleCard(psychologistId: string): void {
    this.expandedCard = this.expandedCard === psychologistId ? null : psychologistId;
  }

  /**
   * Abre modal de agendamento com psicóloga específica
   * @param psychologistName - Nome da psicóloga
   */
  scheduleWithPsychologist(psychologistName: string): void {
    const event = new CustomEvent('openAppointmentModal', {
      detail: { preferredPsychologist: psychologistName }
    });
    document.dispatchEvent(event);
  }

  /**
   * Manipula erro de carregamento de imagem
   * @param event - Evento de erro
   */
  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
  }
}
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
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  /** Observable com dados das psicólogas */
  psychologists$!: Observable<Psychologist[]>;
  

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

  /** ID do card atualmente expandido */
  expandedCard: string | null = null;
  /** Alterna o estado expandido/colapsado de um card */
  toggleCard(psychologistId: string): void {
    this.expandedCard = this.expandedCard === psychologistId ? null : psychologistId;
  }

  /**
   * Abre modal de agendamento com psicóloga específica
   * @param psychologistName - Nome da psicóloga
   */
  scheduleWithPsychologist(psychologistName: string): void {
    const baseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfqfPM11n8QKqNMOpQKo6vEduwQ7Fna5utR1mo69PbtDKUZMQ/viewform?sessionType=individual';
    const url = `${baseUrl}&psychologist=${encodeURIComponent(psychologistName)}`;
    window.open(url, '_blank');
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
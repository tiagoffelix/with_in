import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Psychologist } from '../../models/psychologist.model';
import { PsychologistService } from '../../services/psychologist.service';
import { ElementRef } from '@angular/core';

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
export class TeamComponent implements OnInit, AfterViewInit, OnDestroy {
  /** Observable com dados das psicólogas */
  psychologists$!: Observable<Psychologist[]>;
  /** Listas para scroll infinito */
  psychologists: Psychologist[] = [];
  repeatedPsychologists: Psychologist[] = [];
  

  constructor(private psychologistService: PsychologistService, private el: ElementRef) {}

  ngOnInit(): void {
    this.psychologists$ = this.psychologistService.getAllPsychologists();
    // Também manter uma cópia local para criar lista duplicada
    this.psychologists$.subscribe(list => {
      this.psychologists = list;
      // duplicar para permitir loop contínuo
      this.repeatedPsychologists = [...list, ...list];
    });
  }

  private loopObserver?: IntersectionObserver;
  ngAfterViewInit(): void {
    const track: HTMLElement | null = this.el.nativeElement.querySelector('.team .loop-track');
    if (track && 'IntersectionObserver' in window) {
      this.loopObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            track.classList.add('in-view');
          } else {
            track.classList.remove('in-view');
          }
        });
      }, { threshold: 0.1 });
      this.loopObserver.observe(track);
    }
  }
  ngOnDestroy(): void {
    this.loopObserver?.disconnect();
  }

  /**
   * Função de tracking para otimizar renderização da lista
   * @param index - Índice do item
   * @param psychologist - Dados da psicóloga
   * @returns ID único para tracking
   */
  trackByPsychologist(index: number, psychologist: Psychologist): string {
    return psychologist.id + '-' + index;
  }

  /** Currently selected psychologist for modal display */
  selectedPsychologist: Psychologist | null = null;
  /** Alterna o estado expandido/colapsado de um card */
  /** Opens modal with full psychologist details */
  openModal(psychologist: Psychologist): void {
    this.selectedPsychologist = psychologist;
    // Prevent background scroll
    document.body.classList.add('no-scroll');
  }
  /** Closes the modal */
  closeModal(): void {
    this.selectedPsychologist = null;
    document.body.classList.remove('no-scroll');
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
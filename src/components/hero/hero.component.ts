import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
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
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {
  /** Estado de visibilidade para animações */
  isVisible = false;

  @ViewChild('heroVideo') heroVideoRef?: ElementRef<HTMLVideoElement>;

  private io?: IntersectionObserver;

  constructor(public scrollService: ScrollService) {}

  ngOnInit(): void {
    // Inicia animação após um pequeno delay
    setTimeout(() => {
      this.isVisible = true;
    }, 100);
  }

  ngAfterViewInit(): void {
    const videoEl = this.heroVideoRef?.nativeElement;
    if (!videoEl) return;

    // Ensure muted + inline for autoplay permission when visible
    videoEl.muted = true;
    videoEl.playsInline = true as any;
    try { videoEl.pause(); } catch {}

    this.io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
          // In view: attempt to play
          const playPromise = videoEl.play();
          if (playPromise && typeof playPromise.then === 'function') {
            playPromise.catch(() => {/* ignore autoplay errors */});
          }
        } else {
          // Out of view: pause
          try { videoEl.pause(); } catch {}
        }
      }
    }, { threshold: [0, 0.4, 1] });

    this.io.observe(videoEl);
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
  }

  /**
   * Abre o modal de agendamento
   */
  openAppointmentModal(): void {
    const event = new CustomEvent('openAppointmentModal');
    document.dispatchEvent(event);
  }
}
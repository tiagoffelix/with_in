import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { ElementRef } from '@angular/core';

@Component({
    selector: 'app-testemunhos',
    standalone: true,
    imports: [CommonModule, NgIf, NgFor],
    templateUrl: './testemunhos.component.html',
    styleUrls: ['./testemunhos.component.scss']
})
export class TestemunhosComponent implements OnInit, AfterViewInit, OnDestroy {
  testimonials: number[] = [1, 2, 3, 4, 5, 6, 7];
  repeatedTestimonials: number[] = [];
  selectedTestimonial: number | null = null;

  private loopObserver?: IntersectionObserver;
  private onScrollResize = () => this.updateInView();

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.repeatedTestimonials = [...this.testimonials, ...this.testimonials];
  }

  ngAfterViewInit(): void {
    const track: HTMLElement | null = this.el.nativeElement.querySelector('.testemunhos .loop-track');
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

    window.addEventListener('scroll', this.onScrollResize, { passive: true });
    window.addEventListener('resize', this.onScrollResize, { passive: true });
    this.updateInView();
  }

  private updateInView(): void {
    const track: HTMLElement | null = this.el.nativeElement.querySelector('.testemunhos .loop-track');
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const visible = Math.max(0, Math.min(rect.bottom, vh) - Math.max(rect.top, 0));
    const ratio = visible / Math.min(vh, rect.height || 1);
    if (ratio >= 0.1) {
      track.classList.add('in-view');
    } else {
      track.classList.remove('in-view');
    }
  }

  ngOnDestroy(): void {
    this.loopObserver?.disconnect();
    window.removeEventListener('scroll', this.onScrollResize);
    window.removeEventListener('resize', this.onScrollResize);
  }

  openModal(id: number): void {
    this.selectedTestimonial = id;
    document.body.classList.add('no-scroll');
  }

  closeModal(): void {
    this.selectedTestimonial = null;
    document.body.classList.remove('no-scroll');
  }
}

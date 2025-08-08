import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { ElementRef } from '@angular/core';

// Use numeric IDs for testimonial images

@Component({
    selector: 'app-testemunhos',
    standalone: true,
    imports: [CommonModule, NgIf, NgFor],
    templateUrl: './testemunhos.component.html',
    styleUrls: ['./testemunhos.component.scss']
})
export class TestemunhosComponent implements OnInit, AfterViewInit, OnDestroy {
  // IDs correspond to testimonial images named 1.jpg through 7.jpg
  testimonials: number[] = [1, 2, 3, 4, 5, 6, 7];
  // Duplicated list for infinite loop scroll
  repeatedTestimonials: number[] = [];

  // Modal state for enlarged testimonial image
  selectedTestimonial: number | null = null;

  private loopObserver?: IntersectionObserver;

  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    // duplicate to create seamless looping track
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
  }

  ngOnDestroy(): void {
    this.loopObserver?.disconnect();
  }

  // Open modal with the clicked testimonial image
  openModal(id: number): void {
    this.selectedTestimonial = id;
    // Prevent background scroll and hide floating CTA
    document.body.classList.add('no-scroll');
  }

  // Close modal
  closeModal(): void {
    this.selectedTestimonial = null;
    document.body.classList.remove('no-scroll');
  }
}

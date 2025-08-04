import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  /**
   * Smoothly scrolls to a section by ID
   * @param sectionId - The ID of the target section
   * @param event - The click event to prevent default behavior
   */
  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();

    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 70; // Fixed header height
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }
}

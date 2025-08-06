import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Use numeric IDs for testimonial images

@Component({
  selector: 'app-testemunhos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testemunhos.component.html',
  styleUrls: ['./testemunhos.component.scss']
})
export class TestemunhosComponent implements OnInit {
  // IDs correspond to testimonial images named 1.jpg through 7.jpg
  testimonials: number[] = [1, 2, 3, 4, 5, 6, 7];
  constructor() {}
  ngOnInit(): void {}
}

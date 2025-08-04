import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from './scroll.service';

@NgModule({
  declarations: [
    // Add shared components, directives, and pipes here
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ScrollService
  ],
  exports: [
    // Export shared components, directives, and pipes here
  ]
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from '../../components/services/services.component';

@NgModule({
  imports: [CommonModule, ServicesComponent],
  exports: [ServicesComponent]
})
export class ServicesModule {}

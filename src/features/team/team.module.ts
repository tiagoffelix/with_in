import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from '../../components/team/team.component';

@NgModule({
  imports: [CommonModule, TeamComponent],
  exports: [TeamComponent]
})
export class TeamModule {}

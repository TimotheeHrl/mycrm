import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { TotalPipe } from './total.pipe';
import { StateDirective } from './state.directive';
import { TrueFalseStateDirective } from './true-false-state.directive';

@NgModule({
  declarations: [
    TotalPipe,
    StateDirective,
    TrueFalseStateDirective
  ],
  imports: [CommonModule],
  exports: [TemplatesModule, IconsModule, TotalPipe, StateDirective, TrueFalseStateDirective],
})
export class SharedModule {}

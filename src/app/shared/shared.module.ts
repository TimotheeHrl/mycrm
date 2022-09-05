import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { TotalPipe } from './total.pipe';
import { StateDirective } from './state.directive';

@NgModule({
  declarations: [
    TotalPipe,
    StateDirective
  ],
  imports: [CommonModule],
  exports: [TemplatesModule, IconsModule, TotalPipe, StateDirective],
})
export class SharedModule {}

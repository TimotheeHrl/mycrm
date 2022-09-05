import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { TotalPipe } from './total.pipe';

@NgModule({
  declarations: [
    TotalPipe
  ],
  imports: [CommonModule],
  exports: [TemplatesModule, IconsModule, TotalPipe],
})
export class SharedModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BtnComponent } from './components/btn/btn.component';
import { TemplateContainerComponent } from './components/template-container/template-container.component';
import { TemplateFullWidthComponent } from './components/template-full-width/template-full-width.component';
import { TableLightComponent } from './table-light/table-light.component';

@NgModule({
  declarations: [
    TemplateFullWidthComponent,
    TemplateContainerComponent,
    TableLightComponent,
    BtnComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    TemplateFullWidthComponent,
    TemplateContainerComponent,
    TableLightComponent,
    BtnComponent,
  ],
})
export class TemplatesModule {}

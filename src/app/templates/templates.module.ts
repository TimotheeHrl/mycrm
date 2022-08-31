import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateContainerComponent } from './template-container/template-container.component';
import { TemplateFullWidthComponent } from './template-full-width/template-full-width.component';



@NgModule({
  declarations: [
    TemplateContainerComponent,
    TemplateFullWidthComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplateContainerComponent,
    TemplateFullWidthComponent
  ]
})
export class TemplatesModule { }

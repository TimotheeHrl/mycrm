import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BtnAddComponent } from "./components/btn-add/btn-add.component";
import { BtnEditComponent } from "./components/btn-edit/btn-edit.component";
import { BtnComponent } from "./components/btn/btn.component";
import { TemplateContainerComponent } from "./components/template-container/template-container.component";
import { TemplateFullWidthComponent } from "./components/template-full-width/template-full-width.component";
import { TableLightComponent } from "./table-light/table-light.component";
@NgModule({
  declarations: [
    TemplateFullWidthComponent,
    TemplateContainerComponent,
    TableLightComponent,
    BtnComponent,
    BtnAddComponent,
    BtnEditComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    TemplateFullWidthComponent,
    TemplateContainerComponent,
    TableLightComponent,
    BtnComponent,
    BtnAddComponent,
    BtnEditComponent,
    ReactiveFormsModule,
  ],
})
export class TemplatesModule {}

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { DataSharingService } from "../DataSharingService";
import { UiModule } from "../ui/ui.module";
import { IconCloseComponent } from "./icon-close/icon-close.component";
import { IconDeleteComponent } from "./icon-delete/icon-delete.component";
import { IconEditComponent } from "./icon-edit/icon-edit.component";
import { IconNavComponent } from "./icon-nav/icon-nav.component";
@NgModule({
  providers: [DataSharingService],
  declarations: [
    IconCloseComponent,
    IconEditComponent,
    IconDeleteComponent,
    IconNavComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, UiModule],
  exports: [
    IconCloseComponent,
    IconEditComponent,
    IconDeleteComponent,
    IconNavComponent,
  ],
})
export class IconsModule {}

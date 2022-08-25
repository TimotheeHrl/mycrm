import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DataSharingService } from "../DataSharingService";
import { UiComponent } from "./ui.component";
@NgModule({
  providers: [DataSharingService],
  declarations: [UiComponent],
  imports: [CommonModule],
  exports: [UiComponent],
})
export class UiModule {}

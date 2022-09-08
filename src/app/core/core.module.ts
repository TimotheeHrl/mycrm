import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IconsModule } from "../icons/icons.module";
import { LoginModule } from "../login/login.module";
import { TemplatesModule } from "../templates/templates.module";
import { UiModule } from "../ui/ui.module";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { MessagesComponent } from "./components/messages/messages.component";
import { NavComponent } from "./components/nav/nav.component";
import { rxStompServiceFactory } from "./services/rx-stomp-service-factory";
import { RxStompService } from "./stomp/rx-stomp.service";
@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    FooterComponent,
    MessagesComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    LoginModule,
    IconsModule,
    TemplatesModule,
    UiModule,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    MessagesComponent,
  ],
  providers: [
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
    },
  ],
})
export class CoreModule {}

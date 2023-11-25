import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./main.component";
import { MainRoutingModule } from "./main-routing.module";
import { TopNavModule, PageSpinnerModule } from "@components";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MainMenuModule } from "./main-menu/main-menu.module";
import { ButtonModule, PageContainerModule } from "@components";
import { DiamondCounterModule } from "./diamond-counter/diamond-counter.module";
import { WelcomeDialogModule } from "./welcome-dialog/welcome-dialog.module";

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    FontAwesomeModule,
    TopNavModule,
    MainMenuModule,
    ButtonModule,
    PageContainerModule,
    DiamondCounterModule,
    PageSpinnerModule,
    WelcomeDialogModule,
  ],
})
export class MainModule {}

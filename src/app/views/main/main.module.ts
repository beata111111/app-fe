import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from "./main.component";
import {MainRoutingModule} from "./main-routing.module";
import {ContainerModule, MenuItemModule, TopNavModule, AchievementRibbonModule, PageSpinnerModule} from "@components";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MainMenuModule} from "./main-menu/main-menu.module";
import {ButtonModule, NavContainerModule} from "@components";
import {DiamondCounterModule} from "./diamond-counter/diamond-counter.module";
import {PagePopupComponent} from "../../components/page-popup/page-popup.component";
import {PagePopupModule} from "../../components/page-popup/page-popup.module";

@NgModule({
  declarations: [MainComponent],
  imports: [
    MainRoutingModule,
    CommonModule,
    ContainerModule,
    FontAwesomeModule,
    MenuItemModule,
    TopNavModule,
    AchievementRibbonModule,
    MainMenuModule,
    ButtonModule,
    NavContainerModule,
    DiamondCounterModule,
    PageSpinnerModule,
    PagePopupModule,
  ]
})
export class MainModule {}

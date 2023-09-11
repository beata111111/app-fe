import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from "./main.component";
import {MainRoutingModule} from "./main-routing.module";
import {ContainerModule} from "../../components/container/container.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MenuItemModule} from "../../components/menu-item/menu-item.module";
import {TopNavModule} from "../../components/top-nav/top-nav.module";
import { AchievementRibbonModule } from "../../components/achievement-ribbon/achievement-ribbon.module";

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
  ]
})
export class MainModule {}

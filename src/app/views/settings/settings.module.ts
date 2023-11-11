import { NgModule } from "@angular/core";
import { SettingsComponent } from "./settings.component";
import { SettingsRoutingModule } from "./settings-routing.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {
  TopNavModule,
  ButtonModule,
  MenuItemModule,
  NavContainerModule,
} from "@components";
import { TranslateModule } from "@ngx-translate/core";
import { DarkModeSettingsComponent } from "./sections/dark-mode-settings/dark-mode-settings.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [SettingsComponent, DarkModeSettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    FontAwesomeModule,
    TopNavModule,
    ButtonModule,
    MenuItemModule,
    TranslateModule,
    NavContainerModule,
  ],
  providers: [],
  exports: [],
})
export class SettingsModule {}

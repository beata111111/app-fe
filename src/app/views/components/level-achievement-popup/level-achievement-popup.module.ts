import {NgModule} from '@angular/core';
import {LevelAchievementPopupComponent} from "./level-achievement-popup.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {AchievementRibbonModule} from "../achievement-ribbon/achievement-ribbon.module";
import {CommonModule} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {PopupModule} from "../popup/popup.module";

@NgModule({
  declarations: [LevelAchievementPopupComponent],
  imports: [FontAwesomeModule, AchievementRibbonModule, CommonModule, TranslateModule, PopupModule],
  providers: [],
  exports: [LevelAchievementPopupComponent],
})
export class LevelAchievementPopupModule {
}

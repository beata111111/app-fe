import { NgModule } from "@angular/core";
import { AchievementRibbonComponent } from "./achievement-ribbon.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [AchievementRibbonComponent],
  imports: [FontAwesomeModule],
  providers: [],
  exports: [AchievementRibbonComponent],
})
export class AchievementRibbonModule {}

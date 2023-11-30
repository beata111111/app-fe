import { NgModule } from "@angular/core";
import { CategoryMenuComponent } from "./components/category-menu/category-menu.component";
import { LevelMenuComponent } from "./components/level-menu/level-menu.component";
import { MainMenuComponent } from "./main-menu.component";
import { CommonModule } from "@angular/common";
import { VariantComponent } from "./components/variant/variant.component";
import { TranslateModule } from "@ngx-translate/core";
import { LevelMenuPreviewComponent } from "./components/level-menu-preview/level-menu-preview.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ButtonModule, ShineAnimationModule } from "@components";
import { CategoryMiniaturesComponent } from "./components/category-miniatures/category-miniatures.component";

// prettier-ignore
@NgModule({
  declarations: [
    MainMenuComponent,
    CategoryMenuComponent,
    LevelMenuComponent,
    VariantComponent,
    LevelMenuPreviewComponent,
    CategoryMiniaturesComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FontAwesomeModule,
    ButtonModule,
    ShineAnimationModule,
  ],
  providers: [],
  exports: [MainMenuComponent, CategoryMenuComponent, CategoryMiniaturesComponent],
})
export class MainMenuModule {}

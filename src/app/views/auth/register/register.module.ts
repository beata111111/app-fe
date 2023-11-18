import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegisterComponent } from "./register.component";
import { TranslateModule } from "@ngx-translate/core";
import { ButtonModule } from "@components";
import { TwoSplitPageModule } from "../../../components/two-split-page/two-split-page.module";
import { ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    TranslateModule,
    ButtonModule,
    TwoSplitPageModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
})
export class RegisterModule {}

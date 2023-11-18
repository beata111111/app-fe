import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login.component";
import { TranslateModule } from "@ngx-translate/core";
import { ButtonModule } from "@components";
import { ReactiveFormsModule } from "@angular/forms";
import { TwoSplitPageModule } from "../../../components/two-split-page/two-split-page.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    TranslateModule,
    ButtonModule,
    TwoSplitPageModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
})
export class LoginModule {}

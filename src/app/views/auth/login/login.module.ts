import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login.component";
import { TranslateModule } from "@ngx-translate/core";
import { ButtonModule, PageSplitContainerModule } from "@components";
import { ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

// prettier-ignore
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    TranslateModule,
    ButtonModule,
    PageSplitContainerModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
})
export class LoginModule {}

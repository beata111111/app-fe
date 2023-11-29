import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegisterComponent } from "./register.component";
import { TranslateModule } from "@ngx-translate/core";
import { ButtonModule } from "@components";
import { PageSplitContainerModule } from "../../../components/page-split-container/page-split-container..module";
import { ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

// prettier-ignore
@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    TranslateModule,
    ButtonModule,
    PageSplitContainerModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
})
export class RegisterModule {}

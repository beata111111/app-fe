import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StyleguideColorsComponent } from "./styleguide-colors.component";

const routes: Routes = [
  {
    path: "",
    component: StyleguideColorsComponent,
  },
];

// prettier-ignore
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StyleguideColorsRoutingModule {}

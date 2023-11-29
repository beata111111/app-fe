import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StyleguideComponent } from "./styleguide.component";

const routes: Routes = [
  {
    path: "",
    component: StyleguideComponent,
  },
];

// prettier-ignore
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StyleguideRoutingModule {}

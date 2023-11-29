import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecordsComponent } from "./records.component";

const routes: Routes = [
  {
    path: "",
    component: RecordsComponent,
  },
];

// prettier-ignore
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordsRoutingModule {}

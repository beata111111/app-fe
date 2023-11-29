import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard, NoAuthGuard } from "@core";

const routes: Routes = [
  {
    path: "",
    redirectTo: "auth",
    pathMatch: "full",
  },
  {
    path: "auth",
    canActivate: [NoAuthGuard],

    loadChildren: () => import("./views/auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "main",
    canActivate: [AuthGuard],
    loadChildren: () => import("./views/main/main.module").then((m) => m.MainModule),
  },
  {
    path: "settings",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./views/settings/settings.module").then((m) => m.SettingsModule),
  },
  {
    path: "records",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./views/records/records.module").then((m) => m.RecordsModule),
  },
  {
    path: "challenge/:category_id/:level_id/:variant_id",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./views/challenge/challenge.module").then((m) => m.ChallengeModule),
  },
  {
    path: "styleguide",
    loadChildren: () =>
      import("./views/styleguide/styleguide.module").then((m) => m.StyleguideModule),
  },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

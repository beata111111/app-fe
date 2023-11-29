import { APP_INITIALIZER, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AuthInterceptor, AppRootTranslationModule, ThemesService } from "@core";
import { ServiceWorkerModule } from "@angular/service-worker";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

function initializeThemes(themesService: ThemesService) {
  return (): void => {
    themesService.initialSetupNightMode();
  };
}

// prettier-ignore
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRootTranslationModule,
    ServiceWorkerModule.register("my-service-worker.js", {
      enabled: true,
      // enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: "registerWhenStable:30000",
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-full-width",
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeThemes,
      multi: true,
      deps: [ThemesService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

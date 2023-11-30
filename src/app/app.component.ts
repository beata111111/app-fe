import {Component, ViewEncapsulation} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import {ThemesService} from "@core";
import {Observable} from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  isNightMode$: Observable<boolean>;
  isPictureBackground$: Observable<boolean>;

  constructor(
    private _translateService: TranslateService,
    private _themesService: ThemesService
  ) {
    this._setAppHeight();
    this._setUpLocale();

    this.isNightMode$ = this._themesService.isNightMode$;
    this.isPictureBackground$ = this._themesService.isPictureBackground$;
  }


  private _setAppHeight(): void {
    const documentHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty("--app-height", `${window.innerHeight}px`);
    };
    window.addEventListener("resize", documentHeight);
    window.addEventListener("orientationchange", documentHeight);
    documentHeight();
  }

  private _setUpLocale(): void {
    this._translateService.currentLang = "";
    this._translateService.use("de-DE");
  }
}

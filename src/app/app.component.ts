import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "languages-app-new";
  constructor(private translateService: TranslateService) {
    this.translateService.currentLang = "";
    this.translateService.use("de-DE");

    const documentHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty("--app-height", `${window.innerHeight}px`);
    };
    window.addEventListener("resize", documentHeight);
    window.addEventListener("orientationchange", documentHeight);
    documentHeight();
  }
}

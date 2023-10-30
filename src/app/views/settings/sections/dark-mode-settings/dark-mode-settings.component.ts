import {Observable} from "rxjs";
import {ThemesService} from "@core";
import {Component} from "@angular/core";

@Component({
  selector: 'app-dark-mode-settings',
  templateUrl: './dark-mode-settings.component.html',
  styleUrls: ['./dark-mode-settings.component.scss']
})
export class DarkModeSettingsComponent {
  isNightMode$: Observable<boolean>;

  constructor(private _themesService: ThemesService) {
    this.isNightMode$ = this._themesService.isNightMode$;
  }

  toggleNightMode() {
    this._themesService.toggleNightMode();
  }
}

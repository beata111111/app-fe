import { Component } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";
import {AuthService} from "@core";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  faChevronLeft = faChevronLeft;

  constructor(private _router: Router,
              private _authService: AuthService) {
  }

  logout(): void {
    this._authService.logout();
  }

  handleCloseSettings() {
    this._router.navigate(['..'])
  }
}

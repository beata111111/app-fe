import {Component} from '@angular/core';
import {AuthService} from "@auth";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {

  constructor(
              private _authService: AuthService,
  ) {}

  logout(): void {
    this._authService.logout();
  }
}

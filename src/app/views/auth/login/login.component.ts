import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "@core";
import {ToastrService} from "ngx-toastr";
import {catchError} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  focusName = false;
  focusPassword = false;
  newUser = false;

  @ViewChild("name") name!: ElementRef;
  @ViewChild("password") password!: ElementRef;

  constructor(
    private _authService: AuthService,
    private _toastService: ToastrService,
  ) {}

  ngOnInit(): void {}

  createUser(): void {
    const name = this.name.nativeElement.value;
    const password = this.password.nativeElement.value;
    if (name && password) {
      this._authService
        .createUser(name, password)
        .pipe(
          catchError((error) => {
            this._toastService.error(error.message);
            throw error;
          }),
        )
        .subscribe(() => {});
    }
  }

  logIn(): void {
    const name = this.name.nativeElement.value;
    const password = this.password.nativeElement.value;
    if (name && password) {
      this._authService
        .logIn(name, password)
        .pipe(
          catchError((error) => {
            this._toastService.error(error.message);
            throw error;
          }),
        )
        .subscribe(() => {});
    }
  }
}

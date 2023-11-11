import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "@core";
import {catchError} from "rxjs";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  focusName = false;
  focusPassword = false;
  newUser = false;

  @ViewChild('name') name!: ElementRef;
  @ViewChild('password') password!: ElementRef;

  constructor(private _authService: AuthService,
              private _toastService: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  createUser(): void {
    const name = this.name.nativeElement.value;
    const password = this.password.nativeElement.value;
    if (name && password) {
      this._authService.createUser(name, password).pipe(
        catchError((error) => {
          this._toastService.error(error.message);
          throw error;
        })
      ).subscribe(() => {});
    }
  }

  logIn(): void {
    const name = this.name.nativeElement.value;
    const password = this.password.nativeElement.value;
    if (name && password) {
      this._authService.logIn(name, password).pipe(
        catchError((error) => {
          this._toastService.error(error.message);
          throw error;
        })
      ).subscribe(() => {});
    }
  }
}

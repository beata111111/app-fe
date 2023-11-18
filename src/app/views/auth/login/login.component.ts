import { Component } from "@angular/core";
import { AuthService } from "@core";
import { ToastrService } from "ngx-toastr";
import { catchError, finalize } from "rxjs";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { faSnowman } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  faSnowman = faSnowman;
  focusName = false;
  focusPassword = false;
  isLoading = false;

  form: FormGroup;

  constructor(
    private _authService: AuthService,
    private _toastService: ToastrService,
    private _router: Router,
    private _formBuilder: FormBuilder,
  ) {
    this.form = this._formBuilder.group({
      name: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
  }

  logIn(): void {
    if (!this.form.valid) {
      return;
    }

    const name = this.form.controls["name"].value;
    const password = this.form.controls["password"].value;

    this.isLoading = true;
    this._authService
      .logIn(name, password)
      .pipe(
        catchError((error) => {
          this._toastService.error(error.message);
          throw error;
        }),
        finalize(() => {
          this.isLoading = false;
        }),
      )
      .subscribe();
  }

  redirectToRegistration(): void {
    this._router.navigate(["auth/register"]);
  }
}

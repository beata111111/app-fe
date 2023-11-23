import { Component } from "@angular/core";
import { filter, Observable } from "rxjs";
import { CategoryStatus, User } from "@model";
import { CategoryStatusService, UserService } from "@services";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent {
  faGear = faGear;

  categoryStatus$: Observable<CategoryStatus[]>;
  user$: Observable<User | null>;

  constructor(
    private _categoryStatusService: CategoryStatusService,
    private _userService: UserService,
    private _router: Router,
  ) {
    this.categoryStatus$ = this._categoryStatusService.categoryStatus$.pipe(
      filter((c) => !!c.length),
    );
    this.user$ = this._userService.user$;
  }

  navigateToSettings(): void {
    this._router.navigate(["/settings"]);
  }
}

import {Component} from '@angular/core';
import {AuthService} from "../../core/auth";
import {UserService} from "@services";
import {Observable, of} from "rxjs";
import {CategoryStatusService} from "../../services/category-status/category-status.service";
import {CategoryStatus} from "@model";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {

  public categoryStatus$: Observable<CategoryStatus[]> = of([]);

  constructor(
     private _authService: AuthService,
     private _categoryStatusService: CategoryStatusService,
  ) {
    this.categoryStatus$ = this._categoryStatusService.categoryStatus$;

    this.categoryStatus$.subscribe((a) => {
      console.log(a);
    })
  }

  logout(): void {
    this._authService.logout();
  }
}

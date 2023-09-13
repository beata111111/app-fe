import {Component} from '@angular/core';
import {Observable, of} from "rxjs";
import {CategoryStatus} from "@model";
import {AuthService} from "@core";
import {CategoryStatusService} from "@services";

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

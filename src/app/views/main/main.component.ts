import {Component} from '@angular/core';
import {Observable, of} from "rxjs";
import {CategoryStatus} from "@model";
import {AuthService} from "@core";
import {CategoryStatusService} from "@services";
import {faGear} from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  faGear = faGear;

  public categoryStatus$: Observable<CategoryStatus[]>;

  constructor(
     private _authService: AuthService,
     private _categoryStatusService: CategoryStatusService,
     private _router: Router,
  ) {
    this.categoryStatus$ = this._categoryStatusService.categoryStatus$;

    // this.categoryStatus$.subscribe((a) => {
    //   console.log(a);
    // })
  }

  navigateToSettings():void {
    this._router.navigate(['/settings'])
  }
}

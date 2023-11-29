import { Component, Input, OnDestroy } from "@angular/core";
import { CategoryStatus } from "@model";
import { MainMenuService } from "./main-menu.service";
import { CategoryMiniaturesService } from "./components/category-miniatures/category-miniatures.service";
import { filter, map, Observable, pairwise, Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-main-menu",
  templateUrl: "./main-menu.component.html",
  styleUrls: ["./main-menu.component.scss"],
})
export class MainMenuComponent implements OnDestroy {
  private _subscriptions = new Subscription();
  public notMinifiedCategories$: Observable<CategoryStatus[]>;

  @Input() set categoryStatus(c: any) {
    this._mainMenuService.setCategoryData(c);
    this._categoryMiniaturesService.setCategories(c);
  }

  constructor(
    private _mainMenuService: MainMenuService,
    private _categoryMiniaturesService: CategoryMiniaturesService,
    private _router: Router,
  ) {
    this.notMinifiedCategories$ = this._categoryMiniaturesService.notMinifiedCategories$;

    this._subscriptions.add(
      this._categoryMiniaturesService.notMinifiedCategories$
        .pipe(
          pairwise(),
          filter(([a, b]) => a.length !== b.length),
          map(([_, b]) => b),
        )
        .subscribe((categories) => {
          let expanded = null;

          if (categories.length === 1) {
            expanded = categories[0].category_id;
          }

          this._router.navigate(["/main"], {
            queryParams: { expanded },
          });
        }),
    );
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }
}

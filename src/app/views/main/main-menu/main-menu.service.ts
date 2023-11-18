import { Injectable } from "@angular/core";
import { BehaviorSubject, filter, map, pairwise, tap } from "rxjs";
import { CategoryStatus, VariantSignature } from "@model";
import { categoryToVariants, findNewlyCreatedVariant } from "@helpers";

@Injectable({ providedIn: "root" })
export class MainMenuService {
  newlyEnabledVariants$ = new BehaviorSubject<VariantSignature[]>([]);

  categoryData$ = new BehaviorSubject<CategoryStatus[]>([]);

  setCategoryData(categoryStatuses: CategoryStatus[]) {
    this.categoryData$.next(categoryStatuses);
  }

  constructor() {
    this.categoryData$
      .pipe(
        filter((c) => !!c.length),
        map((categories) => {
          return categoryToVariants(categories);
        }),
        pairwise(),
        tap(() => {
          this.newlyEnabledVariants$.next([]);
        }),
        tap(([a, b]) => {
          this.newlyEnabledVariants$.next(findNewlyCreatedVariant(a, b));
        }),
        tap(() => {
          setTimeout(() => {
            this.newlyEnabledVariants$.next([]);
          }, 500);
        }),
      )
      .subscribe();
  }
}

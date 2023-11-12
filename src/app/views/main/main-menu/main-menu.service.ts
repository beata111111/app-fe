import { Injectable } from "@angular/core";
import { BehaviorSubject, map, pairwise, Subject, tap } from "rxjs";
import { CategoryStatus, VariantSignature } from "@model";
import { categoryToVariants, findNewlyCreatedVariant } from "@helpers";

@Injectable({ providedIn: "root" })
export class MainMenuService {

  newlyEnabledVariants$ = new BehaviorSubject<VariantSignature[]>([]);

  categoryData$ = new Subject<CategoryStatus[]>();

  setCategoryData(categoryStatuses: CategoryStatus[]) {
    this.categoryData$.next(categoryStatuses);
  }

  constructor() {
    this.categoryData$.pipe(
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
      })
    ).subscribe()
  }

}

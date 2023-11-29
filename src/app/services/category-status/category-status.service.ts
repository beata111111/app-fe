import { Injectable } from "@angular/core";
import { BehaviorSubject, Subscription } from "rxjs";
import { CategoryStatusHttpService } from "./category-status-http.service";
import { CategoryStatus, CategoryUpdate, ChallengeResult, VariantStatus } from "@model";
import { CurrentUserService } from "@core";
import { UserService } from "../user/user.service";

@Injectable({ providedIn: "root" })
export class CategoryStatusService {
  private _userSubscription = new Subscription();
  private _categoryStatus$ = new BehaviorSubject<CategoryStatus[]>([]);
  categoryStatus$ = this._categoryStatus$.asObservable();

  constructor(
    private _categoryStatusHttpService: CategoryStatusHttpService,
    private _currentUserService: CurrentUserService,
    private _userService: UserService,
  ) {
    this._currentUserService.currentUser$.subscribe((user) => {
      if (user) {
        this._userSubscription = this._categoryStatusHttpService
          .loadCategoryStatus()
          .subscribe((data) => {
            this._categoryStatus$.next(data);
          });
      } else {
        this._categoryStatus$.next([]);
        this._userSubscription.unsubscribe();
      }
    });
  }

  submitChallengeResult(challengeResult: ChallengeResult): void {
    const { category_id, level_id, variant_id, result } = challengeResult;

    const previousVariantStatus = this._getVariant(category_id, level_id, variant_id);
    if (result < previousVariantStatus.result) {
      return;
    }

    this._categoryStatusHttpService
      .updateCategoryStatus(challengeResult)
      .subscribe((categoryUpdate: CategoryUpdate) => {
        const categories = this._categoryStatus$.value;
        const updated = categories.map((category) => {
          return category.category_id === category_id
            ? categoryUpdate.categoryUpdate
            : category;
        });
        this._userService.updateUserPoint(categoryUpdate.userPointsUpdate);
        this._categoryStatus$.next(updated);
      });
  }

  _getVariant(category_id: string, level_id: string, variant_id: string): VariantStatus {
    const category = this._categoryStatus$.value.find(
      (cat) => cat.category_id === category_id,
    );
    const level = category!.levels.find((lev) => lev.level_id === level_id);
    const variant = level!.variants.find((variant) => variant.variant_id === variant_id);
    return variant!;
  }
}

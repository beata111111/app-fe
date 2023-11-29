import { Component, HostBinding, OnDestroy } from "@angular/core";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { getCategoryIcon } from "@helpers";
import { CategoryMiniaturesService } from "./category-miniatures.service";
import { Subscription } from "rxjs";
import { DisplayCss } from "@model";

@Component({
  selector: "app-category-miniatures",
  templateUrl: "./category-miniatures.component.html",
  styleUrls: ["./category-miniatures.component.scss"],
})
export class CategoryMiniaturesComponent implements OnDestroy {
  minifiedCategoriesIds: string[] = [];
  private _subscription = new Subscription();

  @HostBinding("style.display") get getDisplay(): DisplayCss {
    return this.minifiedCategoriesIds.length ? DisplayCss.flex : DisplayCss.block;
  }

  getIcon(category_id: string): IconDefinition {
    return getCategoryIcon(category_id);
  }

  constructor(private _categoryMiniaturesService: CategoryMiniaturesService) {
    this._subscription.add(
      this._categoryMiniaturesService.minifiedCategoriesIds$.subscribe((ids) => {
        this.minifiedCategoriesIds = ids;
      }),
    );
  }

  removeFromMiniatures(category_id: string): void {
    this._categoryMiniaturesService.remove(category_id);
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}

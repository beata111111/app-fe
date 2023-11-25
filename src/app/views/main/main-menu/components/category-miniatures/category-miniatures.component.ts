import { Component } from '@angular/core';
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { getCategoryIcon } from "@helpers";
import { CategoryMiniaturesService } from "./category-miniatures.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-category-miniatures',
  templateUrl: './category-miniatures.component.html',
  styleUrls: ['./category-miniatures.component.scss']
})
export class CategoryMiniaturesComponent {
  minifiedCategoriesIds$: Observable<string[]>

  getIcon(category_id: string): IconDefinition {
    return getCategoryIcon(category_id);
  }

  constructor(
    private _categoryMiniaturesService: CategoryMiniaturesService
  ) {
    this.minifiedCategoriesIds$ = this._categoryMiniaturesService.minifiedCategoriesIds$;
  }

  removeFromMiniatures(category_id: string): void {
    this._categoryMiniaturesService.remove(category_id);
  }
}

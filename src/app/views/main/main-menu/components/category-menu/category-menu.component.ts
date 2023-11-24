import {
  Component,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { CategoryStatus } from "@model";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { getCategoryIcon } from "@helpers";
import { CategoryMiniaturesService } from "../category-miniatures/category-miniatures.service";

@Component({
  selector: "app-category-menu",
  templateUrl: "./category-menu.component.html",
  styleUrls: ["./category-menu.component.scss"],
})
export class CategoryMenuComponent implements OnInit, OnDestroy {
  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;
  minifiedCategories: string[] = [];

  @HostBinding('style.display') get getStyleDisplay(): string {
    return this.minifiedCategories.includes(this.category.category_id) ? 'none' : 'block';
  }

  @Input() category!: CategoryStatus;

  private _subscription = new Subscription();
  isExpanded = false;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _categoryMiniaturesService: CategoryMiniaturesService
  ) {
    this._subscription.add(
      this._categoryMiniaturesService.minifiedCategories$.subscribe(c => {
        this.minifiedCategories = c;
      })
    );
  }

  ngOnInit() {
    this._subscription.add(
      this._activatedRoute.queryParams.subscribe((queryParams) => {
        this.isExpanded = queryParams["expanded"] === this.category.category_id;
      }),
    );
  }

  handleClick(category_id: string): void {
    const currentUrl = this._router.url.split("?")[0];
    const expanded = this.isExpanded ? null : category_id;
    this._router.navigate([currentUrl], { queryParams: { expanded } });
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  @HostBinding("class.expanded") get isExp() {
    return this.isExpanded;
  }

  getCategoryIcon(): IconDefinition {
    return getCategoryIcon(this.category.category_id);
  }

  addToMinifiedCategories(category_id: string): void {
    this._categoryMiniaturesService.add(category_id);
  }
}

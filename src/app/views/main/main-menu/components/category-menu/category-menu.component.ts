import { Component, HostBinding, Input, OnDestroy, OnInit } from "@angular/core";
import { CategoryStatus } from "@model";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown, faChevronUp, faMinus } from "@fortawesome/free-solid-svg-icons";
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
  faMinus = faMinus;
  minifiedCategories: string[] = [];
  canMinimize = true;

  @HostBinding("class.expanded") get isExp(): boolean {
    return this.isExpanded || !this.canMinimize;
  }

  @Input() category!: CategoryStatus;

  private _subscription = new Subscription();
  isExpanded = false;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _categoryMiniaturesService: CategoryMiniaturesService,
  ) {
    this._subscription.add(
      this._categoryMiniaturesService.minifiedCategoriesIds$.subscribe((c) => {
        this.minifiedCategories = c;
      }),
    );

    this._subscription.add(
      this._categoryMiniaturesService.canMinimize$.subscribe((v) => {
        this.canMinimize = v;
      }),
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
    this._expandCategory(category_id);
  }

  private _expandCategory(category_id: string): void {
    const currentUrl = this._router.url.split("?")[0];
    const expanded = this.isExpanded ? null : category_id;
    this._router.navigate([currentUrl], { queryParams: { expanded } });
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  getCategoryIcon(): IconDefinition {
    return getCategoryIcon(this.category.category_id);
  }

  addToMinifiedCategories(event: Event, category_id: string): void {
    event.stopPropagation();
    this._categoryMiniaturesService.add(category_id);
  }
}

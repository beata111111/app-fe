import {Component, Host, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {CategoryStatus} from "@model";
import {faChevronUp, faChevronDown, faUmbrellaBeach, faTree, faHorse} from '@fortawesome/free-solid-svg-icons';
import * as solid from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss']
})
export class CategoryMenuComponent implements OnInit, OnDestroy {
  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;
  faUmbrellaBeach = faUmbrellaBeach;
  faHorse = faHorse;
  faTree = faTree;
  solid = solid

  @Input() category!: CategoryStatus;

  private _subscription = new Subscription();
  isExpanded = false;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this._subscription.add(
      this._activatedRoute.queryParams.subscribe(queryParams => {
        this.isExpanded = queryParams['expanded'] === this.category.category_id;
      })
    );
  }

  handleClick(category_id: string): void {
    const expanded = this.isExpanded ? null : category_id;
    this._router.navigate(['/main'], { queryParams: { expanded } });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  @HostBinding('class.expanded') get isExt() {
    return this.isExpanded;
  }
}

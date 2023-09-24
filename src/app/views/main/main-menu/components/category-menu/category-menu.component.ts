import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CategoryStatus, ChallengeResult} from "@model";
import {faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute, Router} from "@angular/router";
import {distinctUntilChanged, Subscription} from "rxjs";

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss']
})
export class CategoryMenuComponent implements OnInit, OnDestroy {
  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;

  @Input() category!: CategoryStatus;

  private _subscription = new Subscription();
  isExpanded = false;

  challengeResult: ChallengeResult | null = null;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this._subscription.add(
      this._activatedRoute.queryParams.subscribe(queryParams => {
        this.isExpanded = queryParams['expanded'] === this.category.category_id;

        this.challengeResult = this.isExpanded && queryParams['challengeResult']
          ? JSON.parse(queryParams['challengeResult'] || "{}")
          : null;
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
}

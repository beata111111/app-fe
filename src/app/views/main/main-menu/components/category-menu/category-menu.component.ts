import {Component, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {CategoryStatus} from "@model";
import * as solid from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss']
})
export class CategoryMenuComponent implements OnInit, OnDestroy {
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
    const currentUrl = this._router.url.split('?')[0];
    const expanded = this.isExpanded ? null : category_id;
    this._router.navigate([currentUrl], { queryParams: { expanded }});
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  @HostBinding('class.expanded') get isExp() {
    return this.isExpanded;
  }

  getCategoryIcon(): IconDefinition {
    switch(this.category.category_id) {
      case 'natu': return solid.faTree;
      case 'tour': return solid.faUmbrellaBeach;
      case 'anim': return solid.faCow;
      case 'home': return solid.faHouseChimney;
      case 'tran': return solid.faCarSide;
      case 'body': return solid.faHand;
      case 'time': return solid.faClock;
      case 'econ': return solid.faWallet;
      case 'foo1': return solid.faPizzaSlice;
      case 'foo2': return solid.faUtensils;
      case 'fash': return solid.faShirt;
      default: return solid.faQuestion;
    }
  }
}

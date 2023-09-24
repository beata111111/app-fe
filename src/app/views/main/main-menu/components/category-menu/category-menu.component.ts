import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CategoryStatus} from "@model";
import {faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss']
})
export class CategoryMenuComponent {
  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;

  @Input() category!: CategoryStatus;
  @Input() isExpanded = false;
  @Output() toggleExpand = new EventEmitter<string>();

  handleClick(category_id: string): void {
    this.toggleExpand.emit(category_id);
  }
}

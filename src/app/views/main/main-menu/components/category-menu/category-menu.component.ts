import {Component, Input} from '@angular/core';
import {CategoryStatus} from "@model";

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss']
})
export class CategoryMenuComponent {
  @Input() category!: CategoryStatus;
}

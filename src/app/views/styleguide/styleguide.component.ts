import { Component } from '@angular/core';
import {styleguideCategoryData} from "./styleguide-category-data";
import {CategoryStatus} from "@model";

@Component({
  selector: 'app-styleguide',
  templateUrl: './styleguide.component.html',
  styleUrls: ['./styleguide.component.scss']
})
export class StyleguideComponent {

  category: CategoryStatus = styleguideCategoryData;

}

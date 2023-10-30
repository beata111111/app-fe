import { Component } from '@angular/core';
import {CategoryStatus} from "@model";
import {styleguideCategoryData} from "../styleguide-category-data";

@Component({
  selector: 'app-styleguide-section',
  templateUrl: './styleguide-section.component.html',
  styleUrls: ['./styleguide-section.component.scss']
})
export class StyleguideSectionComponent {
  category: CategoryStatus = styleguideCategoryData;
}

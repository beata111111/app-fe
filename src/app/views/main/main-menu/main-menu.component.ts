import {Component, Input} from '@angular/core';
import {CategoryStatus} from "@model";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  @Input() categoryStatus: CategoryStatus[] = [];
}

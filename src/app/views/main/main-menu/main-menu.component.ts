import { Component, Input } from "@angular/core";
import { CategoryStatus } from "@model";
import { MainMenuService } from "./main-menu.service";

@Component({
  selector: "app-main-menu",
  templateUrl: "./main-menu.component.html",
  styleUrls: ["./main-menu.component.scss"],
})
export class MainMenuComponent {
  constructor(private _mainMenuService: MainMenuService) {}
  private _categoryStatus: CategoryStatus[] = [];
  @Input() set categoryStatus(c: any) {
    console.warn(c);
    this._mainMenuService.setCategoryData(c);
    this._categoryStatus = c;
  }
  get categoryStatus(): any {
    return this._categoryStatus;
  }
}

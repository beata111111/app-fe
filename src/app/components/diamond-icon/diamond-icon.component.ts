import { Component } from "@angular/core";
import { faGem } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: "app-diamond-icon",
  templateUrl: "./diamond-icon.component.html",
  styleUrls: ["./diamond-icon.component.scss"],
})
export class DiamondIconComponent {
  faGem = faGem;
}

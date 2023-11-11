import { Component, Input, TemplateRef } from "@angular/core";

@Component({
  selector: "app-nav-container",
  templateUrl: "./nav-container.component.html",
  styleUrls: ["./nav-container.component.scss"],
})
export class NavContainerComponent {
  @Input() navTemplate!: TemplateRef<any>;
  @Input() contentTemplate!: TemplateRef<any>;
}

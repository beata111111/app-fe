import { Component, HostBinding, Input, TemplateRef } from "@angular/core";

@Component({
  selector: "app-page-split-container",
  templateUrl: "./page-split-container.component.html",
  styleUrls: ["./page-split-container.component.scss"],
})
export class PageSplitContainerComponent {
  @Input() upper!: TemplateRef<unknown>;
  @Input() lower!: TemplateRef<unknown>;
  @Input() isLoading = false;

  @HostBinding("class.is-loading") get getIsLoading(): boolean {
    return this.isLoading;
  }
}

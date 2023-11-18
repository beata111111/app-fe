import { Component, HostBinding, Input, TemplateRef } from "@angular/core";

@Component({
  selector: "app-two-split-page",
  templateUrl: "./two-split-page.component.html",
  styleUrls: ["./two-split-page.component.scss"],
})
export class TwoSplitPageComponent {
  @Input() upper!: TemplateRef<unknown>;
  @Input() lower!: TemplateRef<unknown>;
  @Input() isLoading = false;

  @HostBinding("class.is-loading") get getIsLoading(): boolean {
    return this.isLoading;
  }
}

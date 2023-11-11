import {
  AfterContentInit,
  Component,
  ContentChild,
  EventEmitter,
  Output,
} from "@angular/core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { AbstractPopupDialogDirective } from "../popup-dialogs/abstract/abstract-popup-dialog.directive";
import { PopupDialogConfig } from "../popup-dialogs/popup.model";

@Component({
  selector: "app-page-popup",
  templateUrl: "./page-popup.component.html",
  styleUrls: ["./page-popup.component.scss"],
})
export class PagePopupComponent implements AfterContentInit {
  faXmark = faXmark;

  config: PopupDialogConfig = {};

  @Output() close = new EventEmitter<void>();

  @ContentChild("popupContent") popupContent!: AbstractPopupDialogDirective;

  handleClose(): void {
    this.close.emit();
  }

  ngAfterContentInit() {
    this.config = this.popupContent.config;

    this.popupContent.close.subscribe(() => {
      this.handleClose();
    });
  }

  back() {
    this.popupContent.back();
  }

  next() {
    this.popupContent.next();
  }
}

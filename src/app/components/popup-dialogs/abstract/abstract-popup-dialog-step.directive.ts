import { Directive, EventEmitter, Output } from "@angular/core";
import { PopupDialogConfig } from "../popup.model";

@Directive({ selector: "abstract-popup-dialog-step" })
export abstract class AbstractPopupDialogStepDirective {
  @Output() config = new EventEmitter<Partial<PopupDialogConfig>>();
}

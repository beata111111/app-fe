import {AfterContentInit, Component, ContentChild, EventEmitter, Output} from '@angular/core';
import {faGear, faXmark} from "@fortawesome/free-solid-svg-icons";
import {AbstractPopupDialogDirective} from "../popup-dialogs/abstract/abstract-popup-dialog.directive";

@Component({
  selector: 'app-page-popup',
  templateUrl: './page-popup.component.html',
  styleUrls: ['./page-popup.component.scss']
})
export class PagePopupComponent implements AfterContentInit {
  faXmark = faXmark

  config = {
    nextButtonText: '',
    backButtonText: ''
  };

  @Output() close = new EventEmitter<void>();

  @ContentChild('popupContent') popupContent!: AbstractPopupDialogDirective;

  handleClose(): void {
    this.close.emit();
  }

  protected readonly faGear = faGear;

  ngAfterContentInit() {
    this.config = this.popupContent.config;
  }

  back() {
    this.popupContent.back();
  }

  next() {
    this.popupContent.next();
  }
}

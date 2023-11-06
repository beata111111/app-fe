import {Component, EventEmitter, Output} from '@angular/core';
import {faGear, faXmark} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-page-popup',
  templateUrl: './page-popup.component.html',
  styleUrls: ['./page-popup.component.scss']
})
export class PagePopupComponent {
  faXmark = faXmark
  @Output() close = new EventEmitter<void>();

  handleClose(): void {
    this.close.emit();
  }

  protected readonly faGear = faGear;
}

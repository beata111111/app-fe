import {Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output} from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export enum PopupColor {
  theme = 'theme',
}

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  faXmark = faXmark

  @Input() color: PopupColor = PopupColor.theme;

  @Output() close = new EventEmitter<void>();

  @HostBinding('class.popup-color-theme') get a() {
    return this.color === PopupColor.theme;
  }

  @HostListener('click')
  handleClose() {
    this.close.emit();
  }
}

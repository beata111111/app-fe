import {AfterViewChecked, Component, ElementRef, EventEmitter, Inject, Input, Output, ViewChild} from '@angular/core';
import { PopupColor } from '../popup/popup.component';
import {ThemeSwitcherService} from "@services-tech";
import {DOCUMENT} from "@angular/common";
const confetti = require('canvas-confetti');

@Component({
  selector: 'app-level-achievement-popup',
  templateUrl: './level-achievement-popup.component.html',
  styleUrls: ['./level-achievement-popup.component.scss']
})
export class LevelAchievementPopupComponent implements AfterViewChecked {
  PopupColor = PopupColor;
  showPopup = true;

  private _showingConfetti = false;

  @Input() level!: number;
  @Input() categoryId!: string;
  @Output() close = new EventEmitter<void>();
  @ViewChild('canvasElement') canvas!: ElementRef;

  ngAfterViewChecked() {
    if (this.canvas && !this._showingConfetti) {
      this._showingConfetti = true;
      this._showConfetti();
    }
  }

  constructor(
    private _themeSwitcherService: ThemeSwitcherService,
    @Inject(DOCUMENT) private document: Document,
  ) {
  }

  handleClose() {
    this.close.emit();
  }

  private _showConfetti(): void {
    const canvasElement = this.canvas.nativeElement;
    canvasElement.confetti = canvasElement.confetti || confetti.create(canvasElement, { resize: true });
    const show = (withColor?: any) => {
      if (this._showingConfetti) {
        const config = this._getConfettiConfig(withColor);
        return canvasElement.confetti(config);
      }
    }

    show();
    setTimeout(show, 100);
    setTimeout(() => show(true), 1000);
    setTimeout(show, 2000);
    setTimeout(show, 4000);
    setTimeout(() => show(true), 5500);
    setTimeout(show, 6000);
    setTimeout(() => show(true),  7000);
    setTimeout(() => {
      this.handleClose();
    }, 10000);
  }

  private _getConfettiConfig(withColor: boolean): Record<string, unknown> {
    let isNightMode;
    this._themeSwitcherService.isNightMode$.subscribe(v => isNightMode = v).unsubscribe();

    const bodyElement = this.document.querySelector('body') as Element;
    const colorVar = isNightMode ? '--theme-color-18' : '--theme-color-4';
    const color = getComputedStyle(bodyElement).getPropertyValue(colorVar)?.trim() ?? '#ffffff';

    const defaultConfig = {
      spread: 70,
      origin: { y: 1.2 },
      decay: 0.94,
      colors: withColor ? [color] : null,
    };

    return isNightMode
      ? {
        particleCount: 500,
        ...defaultConfig,
      }
      : {
        particleCount: 150,
        shapes: ['circle'],
        scalar: 3,
        gravity: 0.5,
        ...defaultConfig
      };
    }
}

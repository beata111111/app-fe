import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {BehaviorSubject} from "rxjs";
import {ThemeObj} from "@model";

export enum NightMode {
  ON = 'on',
  OFF = 'off',
}

export enum Theme {
  THEME1 = 'theme-1',
  THEME2 = 'theme-2',
  THEME3 = 'theme-3',
  THEME4 = 'theme-4',
  THEME5 = 'theme-5',
}

@Injectable({ providedIn: "root" })
export class ThemeSwitcherService {
  NightMode = NightMode

  availableThemes: ThemeObj[] = [
    {
      id: Theme.THEME1,
      name: 'blue',
      color1: 'var(--theme-1-color-14)',
      color2: 'var(--theme-1-color-2)',
      color3: 'var(--theme-1-color-22)',
    },
    {
      id: Theme.THEME2,
      name: 'red',
      color1: 'var(--theme-2-color-14)',
      color2: 'var(--theme-2-color-2)',
      color3: 'var(--theme-2-color-22)',
    },
    {
      id: Theme.THEME3,
      name: 'green',
      color1: 'var(--theme-3-color-14)',
      color2: 'var(--theme-3-color-2)',
      color3: 'var(--theme-3-color-22)',
    },
    {
      id: Theme.THEME4,
      name: 'pink',
      color1: 'var(--theme-4-color-14)',
      color2: 'var(--theme-4-color-2)',
      color3: 'var(--theme-4-color-22)',
    },
    {
      id: Theme.THEME5,
      name: 'ginger',
      color1: 'var(--theme-5-color-14)',
      color2: 'var(--theme-5-color-2)',
      color3: 'var(--theme-5-color-22)',
    }
  ]
  private _currentTheme$ = new BehaviorSubject<ThemeObj>(this.availableThemes[0]);
  currentTheme$ = this._currentTheme$.asObservable();

  private _isNightMode$ = new BehaviorSubject<boolean>(false);
  isNightMode$ = this._isNightMode$.asObservable();

  constructor(@Inject(DOCUMENT) private document: Document) {
    this._initialSetupNightMode();
    this._initialSetupTheme();
  }


  // night mode
  private _initialSetupNightMode(): void {
    const isNightMode = localStorage.getItem('NIGHT_MODE');

    if (isNightMode && Object.values(NightMode).includes(isNightMode as NightMode)) {
      this.toggleNightMode(isNightMode as NightMode);
    }
  }

  toggleNightMode(nightMode?: NightMode): void {
    let newValue: NightMode;
    if (nightMode) {
      newValue = nightMode;
    } else {
      newValue = this._isNightMode$.value
        ? NightMode.OFF
        : NightMode.ON;
    }

    this.document.body.setAttribute('night-mode', newValue);
    this._isNightMode$.next( newValue === NightMode.ON);
    localStorage.setItem('NIGHT_MODE', newValue);
  }


  // theme
  private _initialSetupTheme(): void {
    const theme = localStorage.getItem(('THEME'));
    if (theme && Object.values(Theme).includes(theme as Theme)) {
      this.switchTheme(theme as Theme);
    }
  }

  switchTheme(theme: Theme): void {
    this.document.body.setAttribute('theme', theme);
    this._setCurrentTheme(theme);
  }

  private _setCurrentTheme(theme: Theme): void {
    const newTheme = theme
      ? this.availableThemes.find(t => t.id === theme)!
      : this.availableThemes[0];
    this._currentTheme$.next(newTheme);
    localStorage.setItem('THEME', newTheme.id);
  }
}

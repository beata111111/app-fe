import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { availableThemes, NightMode, PictureBackground, Theme, ThemeObj } from "./themes.model";

@Injectable({ providedIn: "root" })
export class ThemesService {
  availableThemes = availableThemes;

  private _currentTheme$ = new BehaviorSubject<ThemeObj>(this.availableThemes[0]);
  currentTheme$ = this._currentTheme$.asObservable();

  private _isNightMode$ = new BehaviorSubject<boolean>(false);
  isNightMode$ = this._isNightMode$.asObservable();

  private _isPictureBackground$ = new BehaviorSubject<boolean>(false);
  isPictureBackground$ = this._isPictureBackground$.asObservable();

  /*
   * Night Mode
   */
  initialSetupNightMode(): void {
    const localStorageValue = localStorage.getItem("NIGHT_MODE");
    const isNightMode = localStorageValue === NightMode.ON;
    this._setNightMode(isNightMode);
  }

  toggleNightMode(nightMode?: boolean): void {
    if (nightMode !== undefined) {
      this._setNightMode(nightMode);
    } else {
      this._setNightMode(!this._isNightMode$.value);
    }
  }

  private _setNightMode(nightMode: boolean) {
    const newValue = nightMode ? NightMode.ON : NightMode.OFF;
    this._isNightMode$.next(newValue === NightMode.ON);
    localStorage.setItem("NIGHT_MODE", newValue);
  }

  /*
   * Theme
   */
  private _initialSetupTheme(): void {
    const theme = localStorage.getItem("THEME");
    if (theme && Object.values(Theme).includes(theme as Theme)) {
      this.switchTheme(theme as Theme);
    }
  }

  switchTheme(theme: Theme): void {
    this._setCurrentTheme(theme);
  }

  private _setCurrentTheme(theme: Theme): void {
    const newTheme = theme
      ? this.availableThemes.find((t) => t.id === theme)!
      : this.availableThemes[0];
    this._currentTheme$.next(newTheme);
    localStorage.setItem("THEME", newTheme.id);
  }


  /*
   * Picture Background
   */
  initialSetupPictureBackground(): void {
    const localStorageValue = localStorage.getItem("PICTURE_BACKGROUND");
    const isPictureBackground = localStorageValue === PictureBackground.ON;
    this._setPictureBackground(isPictureBackground);
  }

  togglePictureBackground(pictureBackground?: boolean): void {
    if (pictureBackground !== undefined) {
      this._setPictureBackground(pictureBackground);
    } else {
      this._setPictureBackground(!this._isPictureBackground$.value);
    }
  }

  private _setPictureBackground(pictureBackground: boolean) {
    const newValue = pictureBackground ? PictureBackground.ON : PictureBackground.OFF;
    this._isPictureBackground$.next(newValue === PictureBackground.ON);
    localStorage.setItem("PICTURE_BACKGROUND", newValue);
  }
}

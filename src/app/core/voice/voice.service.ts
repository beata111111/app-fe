import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import { debounceTime, throttleTime } from 'rxjs/operators';

const DEBOUNCE_SPEAK = 300;
const THROTTLE_SPEAK = 300;

declare global {
  interface Window {
    responsiveVoice: {
      speak: (text: string, setting?: string, config?: any) => {};
    };
  }
}

@Injectable({
  providedIn: 'root',
})
export class VoiceService {
  private _isSoundActive$ = new BehaviorSubject<boolean>(false);
  isSoundActive$ = this._isSoundActive$.asObservable();

  debouncedSubject = new Subject<string>();
  throttledSubject = new Subject<string>();

  constructor() {
    this._checkStoredValue();

    this.debouncedSubject
      .pipe(debounceTime(DEBOUNCE_SPEAK))
      .subscribe((text) => {
        this.execute(text);
      });

    this.throttledSubject
      .pipe(throttleTime(THROTTLE_SPEAK))
      .subscribe((text) => {
        this.execute(text);
      });
  }

  speak(text: string): void {
    this.throttledSubject.next(text);
  }

  speakDebounced(text: string): void {
    this.debouncedSubject.next(text);
  }

  execute(text: string): void {
    if (!text) return;
    if (this._isSoundActive$.value) {
      window.responsiveVoice.speak(text, 'Polish Male');
    }
  }

  toggleSoundActive(): void {
    const newState = !this._isSoundActive$.value;
    localStorage.setItem('SOUND_ACTIVE', String(newState));
    this._isSoundActive$.next(newState);
  }

  private _checkStoredValue() {
    const isSoundActive = localStorage.getItem('SOUND_ACTIVE') === 'true';
    this._isSoundActive$.next(isSoundActive);
  }
}

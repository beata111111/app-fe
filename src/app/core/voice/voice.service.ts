import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

declare global {
  interface Window {
    responsiveVoice: {
      speak: (text: string, setting?: string, config?: any) => {};
      cancel: () => {}
      isPlaying: () => {}
    };
  }
}

@Injectable({
  providedIn: 'root',
})
export class VoiceService {
  private _isSoundActive$ = new BehaviorSubject<boolean>(false);
  isSoundActive$ = this._isSoundActive$.asObservable();

  constructor() {
    this._checkStoredValue();
  }

  speak(text: string): void {
    if (text && this._isSoundActive$.value) {
      window.responsiveVoice.speak(text, 'Polish Male', { onstart: this._onStart, onend: this._onEnd });
    }
  }

  _onStart(): void {
    return;
  }

  _onEnd(): void {
    return;
  }

  cancelSpeech(): void {
    if (!window.responsiveVoice.isPlaying()) {
      window.responsiveVoice.cancel();
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

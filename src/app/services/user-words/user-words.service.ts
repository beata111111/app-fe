import {Injectable} from "@angular/core";
import {iif, mergeMap, Observable, of, tap} from "rxjs";
import {UserWordsIndexDbService} from "./user-words.indexDb.service";
import {UserWordsHttpService} from "@services";
import {UserWordsBundle} from "@model";
import {CurrentUserService} from "@auth";

@Injectable({ providedIn: 'root' })
export class UserWordService {

  constructor(
    private _userWordsIndexDbService: UserWordsIndexDbService,
    private _userWordsHttpService: UserWordsHttpService,
    private _currentUserService: CurrentUserService,
  ) {
  }

  getState(): Observable<UserWordsBundle[]> {
    return this.getLocalData().pipe(
      mergeMap(v => iif(() => !!v.length, of(v), this.loadData()))
    );
  }

  getLocalData(): Observable<UserWordsBundle[]> {
    return this._userWordsIndexDbService.getUserWords();
  }

  setLocalData(words: UserWordsBundle[]) {
    this._userWordsIndexDbService.setUserWords(words);
  }

  updateLocalData(userWordsUpdate: UserWordsBundle): Observable<UserWordsBundle> {
    return this._userWordsIndexDbService.updateUserWords(userWordsUpdate);
  }

  loadData(categoryId?: string, level?: number): Observable<UserWordsBundle[]> {
    return this._loadUserWords(categoryId, level).pipe(
      tap(bundles => {
        this.setLocalData(bundles)
      })
    );
  }

  private _loadUserWords(categoryId?: string, level?: number): Observable<UserWordsBundle[]> {
    return this._userWordsHttpService.getWordsForUser(categoryId, level);
  }
}

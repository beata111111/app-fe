import {Injectable} from "@angular/core";
import {iif, map, mergeMap, Observable, of, tap} from "rxjs";
import {Word, WordDTO} from "@model";
import {WordsIndexDbService} from "./words.indexDb.service";
import {WordsHttpService} from "./words.http.service";

@Injectable({ providedIn: 'root' })
export class WordsService {

  constructor(
    private _wordsIndexDbService: WordsIndexDbService,
    private _wordsHttpService: WordsHttpService,
  ) {
  }

  getState(): Observable<Word[]> {
    return this.getLocalData().pipe(
      mergeMap(v => iif(() => !!v.length, of(v), this.loadData()))
    );
  }

  getLocalData() {
    return this._wordsIndexDbService.getWords();
  }

  setLocalData(words: Word[]) {
    this._wordsIndexDbService.setWords(words);
  }

  loadData(categoryId?: string, level?: number): Observable<Word[]> {
    return this._loadWords(categoryId, level).pipe(
      tap(words => {
        this.setLocalData(words)
      })
    );
  }

  saveData() {

  }

  ////

  private _loadWords(categoryId?: string, level?: number): Observable<Word[]> {
    return this._wordsHttpService.loadWords(categoryId, level).pipe(
      map(words => {
      return this._normalizeWords(words);
    }));
  }

  _normalizeWords(words: WordDTO[]): Word[] {
    return words.map((word) => {
      const isPlural = !!word.plG.match('PL');

      if (!isPlural) {
        return {
          ...word,
          isPlural,
        }
      } else {
        return {
          ...word,
          plG: word.plG.slice(3, 4),
          isPlural,
        }
      }
    });
  }
}



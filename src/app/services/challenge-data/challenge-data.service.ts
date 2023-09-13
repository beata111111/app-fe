import {Injectable} from '@angular/core';
import {Word, WordDTO} from "@model";
import {ChallengeDataHttpService} from "./challenge-data-http.service";
import {map, Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class ChallengeDataService {

  constructor(private _challengeDataHttpService: ChallengeDataHttpService) {
  }

  getChallengeData(categoryId: string, level: string): Observable<Word[]> {
    return this._challengeDataHttpService.loadWords(categoryId, level).pipe(
      map(words => this._normalizeWords(words))
    );
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

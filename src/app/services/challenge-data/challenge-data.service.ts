import { Injectable } from "@angular/core";
import { Word, WordDTO } from "@model";
import { map, Observable } from "rxjs";
import { ChallengeDataHttpService } from "./challenge-data-http.service";

@Injectable({ providedIn: "root" })
export class ChallengeDataService {
  constructor(private _challengeDataHttpService: ChallengeDataHttpService) {}

  getChallengeData(category_id: string, level_id: string): Observable<Word[]> {
    return this._challengeDataHttpService
      .loadWords(category_id, level_id)
      .pipe(map((words) => this._normalizeWords(words)));
  }

  _normalizeWords(words: WordDTO[]): Word[] {
    return words.map((word) => {
      const _isPlural = !!word.plG.match("PL");
      const plG = _isPlural ? word.plG.slice(3, 4) : word.plG; // 'PL_M' -> 'M'
      const _adjSpeakPL =
        word.adjPos === 0 ? `${word.adj} ${word.nounPL}` : `${word.nounPL} ${word.adj}`;

      return {
        ...word,
        _isPlural,
        plG,
        _adjSpeakPL,
      };
    });
  }
}

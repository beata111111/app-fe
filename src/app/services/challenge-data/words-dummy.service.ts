import {Injectable} from "@angular/core";
import {Word} from "@model";

@Injectable({ providedIn: 'root' })
export class WordsDummyService {
  //
  // words: Word[] = [];
  //
  // constructor(
  //   private _wordsStateService: WordsStateService,
  // ) {
  //   this._wordsStateService.wordsState$.subscribe((words) => {
  //     this.words = words;
  //   })
  // }
  //
  // getDummyWords(count: number, categoryId: string, excludedWordId: string): Word[] {
  //   const filteredWords = this.words.filter(word => {
  //     return word.categoryId === categoryId && word.wordId !== excludedWordId;
  //   });
  //
  //   return X.arrRandomMultiple(filteredWords, 3);
  // }
}

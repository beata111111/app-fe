import {Injectable} from '@angular/core';
import {ChallengeState, Word} from "@model";
import {BehaviorSubject, Subscription} from "rxjs";
import {arrRandomMultiple, shuffleArray} from "@helpers";
import {VoiceService, VoiceWorkerService} from "@core";

@Injectable()
export class ChallengeService {
  private _updateTimeout: any;
  private _timeoutValue!: number;
  private _speakableProperty!: string;
  private _lastSubmittedId = '';

  private _state$ = new BehaviorSubject<ChallengeState | null>(null);
  state$ = this._state$.asObservable();

  constructor(
      private _voiceService: VoiceService,
      private _voiceWorkerService: VoiceWorkerService) {
  }

  setChallengeData(data: Word[], timeoutValue: number, speakableProperty?: string) {
    this._state$.next(this._initializeServiceData(data));
    this._timeoutValue = timeoutValue;
    this._speakableProperty = speakableProperty || '';
    this._voiceWorkerService.prefetchWordsVoice(data);
  }

  handleAnswer(word_id: string): void {
    if (this._lastSubmittedId === word_id) {
      return;
    }
    this._lastSubmittedId = word_id;

    const currentState = this._state$.value as ChallengeState;
    this._state$.next(this._firstUpdate(currentState, word_id));

    if (this._speakableProperty) {
      // @ts-ignore
      this._voiceService.speak(currentState.currentWord[this._speakableProperty])
    }

    this._updateTimeout = setTimeout(() => {
      const currentState = this._state$.value as ChallengeState;
      this._state$.next(this._secondUpdate(currentState));
    }, this._timeoutValue);
  }

  nextWord() {
    clearTimeout(this._updateTimeout);
    const currentState = this._state$.value as ChallengeState;
    this._state$.next(this._secondUpdate(currentState));
  }

  private _firstUpdate(currentState: ChallengeState, word_id: string): ChallengeState {
    const update = {
      lastAnswerCorrect: currentState.currentWord.word_id === word_id,
      showAnswer: true,
    };
    return {
      ...currentState,
      ...update,
    }
  }

  private _secondUpdate(cs: ChallengeState): ChallengeState {
    const previousStepCount = cs.currentSequenceStep;
    const nextStepCount = cs.currentSequenceStep + 1;
    const correctAnswersCount = cs.lastAnswerCorrect ? cs.correctAnswersCount + 1 : cs.correctAnswersCount;
    const commonUpdate = {
      showAnswer: false,
      correctAnswersCount: correctAnswersCount,
      correctAnswersRatio: Math.ceil(correctAnswersCount / cs.wordSequence.length * 100),
    }

    const update = previousStepCount === cs.wordSequence.length - 1
    ? {
      showAnswer: true,
      challengeFinished: true,
      history: [],
      challengeProgress: 100,
    }
    : {
      currentSequenceStep: nextStepCount,
      history: [...cs.history, { ...cs.currentWord, answerCorrect: cs.lastAnswerCorrect}],
      currentWord: cs.wordSequence[nextStepCount],
      currentWordAnswers: this._generateAnswers(cs.wordSequence, cs.wordSequence[nextStepCount]),
      challengeProgress: previousStepCount / cs.wordSequence.length * 100
    }

    return {...cs, ...commonUpdate, ...update};
  }

  private _initializeServiceData(data: Word[]): ChallengeState {
    const wordSequence = shuffleArray(data);
    return {
      wordSequence,
      history: [],
      currentSequenceStep: 0,
      currentWord: wordSequence[0],
      currentWordAnswers: this._generateAnswers(data, wordSequence[0]),
      lastAnswerCorrect: false,
      showAnswer: false,
      challengeFinished: false,
      challengeProgress: 0,
      correctAnswersCount: 0,
      correctAnswersRatio: 0,
    };
  }

  private _generateAnswers(data: Word[], currentWord: Word): Word[] {
    return arrRandomMultiple(data, 4, currentWord);
    // return shuffleArray(arrRandomMultiple(data, 4, currentWord));
  }
}


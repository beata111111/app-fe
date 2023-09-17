import {Injectable} from '@angular/core';
import {Word} from "@model";
import {BehaviorSubject} from "rxjs";
import {arrRandomMultiple, shuffleArray} from "@helpers";
import {VoiceWorkerService} from "../../core/voice/voice-worker.service";

export interface ChallengeState {
  wordSequence: Word[];
  currentSequenceStep: number;

  currentWord: Word,
  currentWordAnswers: Word[],
  lastAnswerCorrect: boolean,
  showAnswer: boolean,

  challengeFinished: boolean,
  challengeProgress: number,
  correctAnswersCount: number,
  correctAnswersRatio: number,
}

@Injectable()
export class ChallengeService {
  private _updateTimeout: any;

  private _state$ = new BehaviorSubject<ChallengeState | null>(null);
  state$ = this._state$.asObservable();

  constructor(private _voiceWorkerService: VoiceWorkerService) {
  }

  setChallengeData(data: Word[]) {
    this._state$.next(this._initializeServiceData(data));
    this._voiceWorkerService.prefetchWordsVoice(data);
  }

  handleAnswer(word_id: string): void {
    const currentState = this._state$.value as ChallengeState;
    this._state$.next(this._firstUpdate(currentState, word_id));

    this._updateTimeout = setTimeout(() => {
      const currentState = this._state$.value as ChallengeState;
      this._state$.next(this._secondUpdate(currentState));
    }, 1000);
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
      challengeFinished: true,
      challengeProgress: 100,
    }
    : {
      currentSequenceStep: nextStepCount,
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
    return shuffleArray(arrRandomMultiple(data, 4, currentWord));
  }
}


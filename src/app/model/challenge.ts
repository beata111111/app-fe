import {Word} from "./word";

export interface WordHistory extends Word {
  answerCorrect: boolean,
}

export interface ChallengeState {
  wordSequence: Word[];
  history: WordHistory[];
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

export interface ChallengeResult {
  category_id: string;
  level_id: string;
  variant_id: string;
  result: number;
}

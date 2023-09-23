export interface WordDTO {
  word_id: string,
  category_id: string,
  level_id: number,
  nounPL: string,
  nounDE: string,
  plG: string,
  alt: string,
  adj: string,
  adjDE: string,
  adjPos: number,
}

export interface Word {
  word_id: string,
  category_id: string,
  level_id: number,
  nounPL: string,
  nounDE: string,
  plG: string,
  alt: string,
  adj: string,
  adjDE: string,
  adjPos: number,
  _isPlural: boolean,
  _adjSpeakPL: string,
}

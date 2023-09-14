export interface WordDTO {
  word_id: string,
  category_id: string,
  level_id: number,
  nounPL: string,
  nounDE: string,
  plG: string,
  alt: string,
}

export interface Word {
  word_id: string,
  category_id: string,
  level_id: number,
  nounPL: string,
  nounDE: string,
  plG: string,
  alt: string,
  isPlural: boolean,
}

export interface WordDTO {
  wordId: string,
  categoryId: string,
  level: number,
  nounPL: string,
  nounDE: string,
  plG: string,
  alt: string,
}

export interface Word {
  wordId: string,
  categoryId: string,
  level: number,
  nounPL: string,
  nounDE: string,
  plG: string,
  alt: string,
  isPlural: boolean,
}

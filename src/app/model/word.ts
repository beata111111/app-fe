export interface WordDTO {
  word_id: string;
  category_id: string;
  level_id: number;
  nounPL: string;
  nounDE: string;
  plG: string;
  alt: string;
  adj: string;
  adjDE: string;
  adjPos: number;
  variant_c_pl: string;
  variant_c_de: string;
  variant_d_pl: string;
  variant_d_de: string;
  variant_e_pl: string;
  variant_e_de: string;
}

export interface Word {
  word_id: string;
  category_id: string;
  level_id: number;
  nounPL: string;
  nounDE: string;
  plG: string;
  alt: string;
  adj: string;
  adjDE: string;
  adjPos: number;
  _isPlural: boolean;
  _adjSpeakPL: string;
  variant_c_pl: string;
  variant_c_de: string;
  variant_d_pl: string;
  variant_d_de: string;
  variant_e_pl: string;
  variant_e_de: string;

  answer?: string;
}

export interface WordAnswer {
  word_id: string;
  answer: string;
}

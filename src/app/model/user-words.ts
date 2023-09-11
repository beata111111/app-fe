export interface UserWordsItem {
  wordId: string,
  correctAnsweredTimes: number,
  mutationIndex: number,
}

export interface UserWordsBundle {
  categoryId: string,
  level: number,
  eagerness: number,
  words: UserWordsItem[]
}

// payloads
export interface UserWordsItemUpdatePayload extends UserWordsItem {
  level: number,
  categoryId: string,
}


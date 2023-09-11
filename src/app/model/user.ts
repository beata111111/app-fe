export interface UserCategoryStatus {
  categoryId: string,
  categoryName: string,
  meanCorrectAnswerCount: number,
  levelActivated: number,
  levelCompleted: number,
}

export interface User {
  id: string,
  currentStep: number,
  activeCategories: string[],
  categoriesStatus: UserCategoryStatus[]
}

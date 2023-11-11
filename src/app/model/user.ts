export interface User {
  id: string;
  points: number;
  previousPoints: number;
}

export type UserPointsUpdate = {
  previousPoints: number;
  points: number;
};

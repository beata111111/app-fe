export interface User {
  name: string;
  id: string;
  points: number;
  previousPoints: number;
  infoStatus: UserInfoStatus;
}

export type UserPointsUpdate = {
  previousPoints: number;
  points: number;
};

export type UserInfoStatus = {
  welcomeInfo: boolean;
};

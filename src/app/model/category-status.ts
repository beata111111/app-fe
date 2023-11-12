import { UserPointsUpdate } from "./user";

export type VariantStatus = {
  variant_id: string;
  enabled: boolean;
  result: number;
  previousResult: number;
};

export type LevelStatus = {
  level_id: string;
  enabled: boolean;
  variants: VariantStatus[];
};

export type CategoryStatus = {
  category_id: string;
  levels: LevelStatus[];
};

export type CategoryUpdate = {
  categoryUpdate: CategoryStatus;
  userPointsUpdate: UserPointsUpdate;
};

export type VariantSignature = {
  category_id: string,
  level_id: string,
  variant_id: string,
}

export type VariantFull = {
  category_id: string,
  level_id: string,
  variant_id: string,
  variant: VariantStatus,
  level: LevelStatus,
  category: CategoryStatus
}

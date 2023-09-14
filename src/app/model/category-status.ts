export type VariantStatus = {
  variant_id: string,
  enabled: boolean,
  result: number,
}

export type LevelStatus = {
  level_id: string,
  enabled: boolean,
  variants: VariantStatus[]
}

export type CategoryStatus = {
  category_id: string,
  levels: LevelStatus[]
}

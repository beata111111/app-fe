export type VariantStatus = {
  variant: string,
  enabled: boolean,
  status: number,
}

export type LevelStatus = {
  level: string,
  enabled: boolean,
  variants: VariantStatus[]
}

export type CategoryStatus = {
  category: string,
  levels: LevelStatus[]
}

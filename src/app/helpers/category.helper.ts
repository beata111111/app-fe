import {CategoryStatus, VariantFull, VariantSignature} from "@model";

export function categoryToVariants(categories: CategoryStatus[]) {
  const array: VariantFull[] = [];

  categories.forEach((category) => {
    category.levels.forEach((level) => {
      level.variants.forEach((variant) => {
        array.push({
          category_id: category.category_id,
          level_id: level.level_id,
          variant_id: variant.variant_id,
          variant: variant,
          level: level,
          category: category
        });
      });
    });
  });

  return array;
}

export function findNewlyCreatedVariant(aArr: VariantFull[], bArr: VariantFull[]) {
  const newlyEnabled: VariantSignature[] = [];

  aArr.forEach((a) => {
    const match = bArr.find((b) => {
      return b.category_id === a.category_id
        && b.level_id === a.level_id
        && b.variant_id === a.variant_id
        && (b.variant.enabled !== a.variant.enabled || (b.level.enabled !== a.level.enabled && a.variant.variant_id === 'a'))
    });

    if (match) {
      const { variant_id, level_id, category_id } = match;
      newlyEnabled.push({ variant_id, level_id, category_id });
    }
  });

  return newlyEnabled;
}

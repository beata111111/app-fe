import {
  CategoryStatus,
  VariantFull,
  VariantSignature,
  VariantStatus,
} from "@model";

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
          category: category,
        });
      });
    });
  });

  return array;
}

export function findNewlyCreatedVariant(
  aArr: VariantFull[],
  bArr: VariantFull[],
) {
  const newlyEnabled: VariantSignature[] = [];

  aArr.forEach((a) => {
    const match = bArr.find((b) => {
      return (
        b.category_id === a.category_id &&
        b.level_id === a.level_id &&
        b.variant_id === a.variant_id &&
        (b.variant.enabled !== a.variant.enabled ||
          (b.level.enabled !== a.level.enabled && a.variant.variant_id === "a"))
      );
    });

    if (match) {
      const { variant_id, level_id, category_id } = match;
      newlyEnabled.push({ variant_id, level_id, category_id });
    }
  });

  return newlyEnabled;
}

export function compareVariantSignatures(
  s1: VariantSignature,
  s2: VariantSignature,
): boolean {
  return (
    s1.category_id === s2.category_id &&
    s1.level_id === s2.level_id &&
    s1.variant_id === s2.variant_id
  );
}

export function createSignature(
  category_id: string,
  level_id: string,
  variant: VariantStatus,
): VariantSignature {
  return {
    category_id: category_id,
    level_id: level_id,
    variant_id: variant.variant_id,
  };
}

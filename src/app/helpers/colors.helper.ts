export function getStatusColor(result: number, enabled: boolean = true): string {
  let color = "var(--color-result-0)";
  if (!enabled) {
    color = "var(--color-result-none)";
  } else if (result === 100) {
    color = "var(--color-result-100)";
  } else if (result >= 80) {
    color = "var(--color-result-80)";
  } else if (result >= 60) {
    color = "var(--color-result-60)";
  } else if (result >= 40) {
    color = "var(--color-result-40)";
  } else if (result >= 20) {
    color = "var(--color-result-20)";
  }
  return color;
}

export function getStatusColor(enabled: boolean, result: number): string {
  let color = '#c8c8c8';
  if (!enabled) {
    color = '#f1f1f1';
  } else if (result === 100) {
    color = '#6fe594';
  } else if (result >= 80) {
    color = '#aee58f';
  } else if (result >= 60) {
    color = '#cfe397';
  } else if (result >= 40) {
    color = '#FACD84'
  } else if (result >= 20) {
    color = '#f6a678';
  }
  return color;
}

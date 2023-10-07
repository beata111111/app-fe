export function getStatusColor(enabled: boolean, result: number): string {
  let color = '#d8d8d8';
  if (!enabled) {
    color = 'white';
  } else if (result === 100) {
    color = '#6fe594';
  } else if (result >= 80) {
    color = '#aee58f';
  } else if (result >= 60) {
    color = '#cfe397';
  } else if (result >= 40) {
    color = '#FACD84';
  } else if (result >= 20) {
    color = '#f6a678';
  }
  return color;
}



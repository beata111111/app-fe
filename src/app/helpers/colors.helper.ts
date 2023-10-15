export function getStatusColor(result: number, enabled: boolean = true): string {
  let color = '#d8d8d8';
  if (!enabled) {
    color = 'white';
  } else if (result === 100) {
    color = '#6fe594';
  } else if (result >= 80) {
    color = '#bcff99';
  } else if (result >= 60) {
    color = '#ebffb2';
  } else if (result >= 40) {
    color = '#ffdda5';
  } else if (result >= 20) {
    color = '#ffbd9a';
  }
  return color;
}

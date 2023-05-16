export function calculateScore(points: number): number {
  switch (points) {
    case 0:
    case 1:
      return 2.5;
    case 2:
    case 3:
      return 2.0;
    case 4:
    case 5:
      return 1.5;
    case 6:
    case 7:
      return 1.0;
    case 8:
    case 9:
      return 0.5;
    default:
      return 0.25;
  }
}

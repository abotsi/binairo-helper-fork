import { checkRule1Horizontal, checkRule1Vertical } from './rule1'

export function computeNextMove(grid: number[]): number[] {
  return grid.map((cell, i) => {
    if (cell !== 2) {
      return cell
    }
    const rule1HorRes = checkRule1Horizontal({ grid, i })
    if (rule1HorRes !== 2) {
      return rule1HorRes
    }
    const rule1VerRes = checkRule1Vertical({ grid, i })
    if (rule1VerRes !== 2) {
      return rule1VerRes
    }

    return cell
  })
}

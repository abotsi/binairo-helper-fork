import { gridSizeState } from './state'

export function computeNextMove(grid: number[]): number[] {
  return grid.map((cell, i) => {
    if (cell !== 2) {
      return cell
    }

    const colNum = i % gridSizeState
    if (
      colNum < gridSizeState - 2 &&
      grid[i + 1] !== 2 &&
      grid[i + 1] === grid[i + 2]
    ) {
      return (grid[i + 1] + 1) % 2
    }
    if (colNum > 1 && grid[i - 1] !== 2 && grid[i - 1] === grid[i - 2]) {
      return (grid[i + 1] + 1) % 2
    }
    return cell
  })
}

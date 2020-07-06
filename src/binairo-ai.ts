import { gridSize } from './state'

export function computeNextMove(grid: number[]): number[] {
  return grid.map((cell, i) => {
    if (cell !== 2) {
      return cell
    }

    const colNum = i % gridSize
    if (
      colNum < gridSize - 2 &&
      grid[i + 1] !== 2 &&
      grid[i + 1] === grid[i + 2]
    ) {
      return (grid[i + 1] + 1) % 2
    }
    if (colNum > 1 && grid[i - 1] !== 2 && grid[i - 1] === grid[i - 2]) {
      return (grid[i + 1] + 1) % 2
    }
    const rowNum = Math.floor(i / gridSize)
    if (
      rowNum < gridSize - 2 &&
      grid[i + gridSize] !== 2 &&
      grid[i + 1 * gridSize] === grid[i + 2 * gridSize]
    ) {
      return (grid[i + 1] + 1) % 2
    }
    if (
      rowNum > 1 &&
      rowNum < gridSize - 1 &&
      grid[i - gridSize] !== 2 &&
      grid[i - 1 * gridSize] === grid[i - 2 * gridSize]
    ) {
      return (grid[i + gridSize] + 1) % 2
    }

    return cell
  })
}

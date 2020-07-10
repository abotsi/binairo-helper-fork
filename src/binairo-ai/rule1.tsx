import { gridSize } from '../state'

const testCellsEqual = (grid: number[], c1: number, c2: number) =>
  grid[c1] !== 2 && grid[c1] === grid[c2]

const toggleCell = (grid: number[], c: number) => (grid[c] + 1) % 2

export function checkRule1Horizontal(grid: number[], i: number) {
  const colNum = i % gridSize
  if (colNum < gridSize - 2 && testCellsEqual(grid, i + 1, i + 2)) {
    return toggleCell(grid, i + 1)
  }
  if (colNum > 1 && testCellsEqual(grid, i - 1, i - 2)) {
    return toggleCell(grid, i - 1)
  }
  if (
    colNum > 0 &&
    colNum < gridSize - 1 &&
    testCellsEqual(grid, i + 1, i - 1)
  ) {
    return toggleCell(grid, i + 1)
  }
  return 2
}

export function checkRule1Vertical(grid: number[], i: number) {
  const rowNum = Math.floor(i / gridSize)
  if (
    rowNum < gridSize - 2 &&
    testCellsEqual(grid, i + gridSize, i + 2 * gridSize)
  ) {
    return toggleCell(grid, i + gridSize)
  }
  if (rowNum > 1 && testCellsEqual(grid, i - gridSize, i - 2 * gridSize)) {
    return toggleCell(grid, i - gridSize)
  }
  if (
    rowNum > 0 &&
    rowNum < gridSize - 1 &&
    testCellsEqual(grid, i + gridSize, i - gridSize)
  ) {
    return toggleCell(grid, i + gridSize)
  }
  return 2
}

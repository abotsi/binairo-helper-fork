import { gridSize } from '../state'

interface checkGridParams {
  grid: number[]
  i: number
}

export function checkRule1Horizontal({ grid, i }: checkGridParams) {
  const colNum = i % gridSize
  if (
    colNum < gridSize - 2 &&
    grid[i + 1] !== 2 &&
    grid[i + 1] === grid[i + 2]
  ) {
    return (grid[i + 1] + 1) % 2
  }
  if (colNum > 1 && grid[i - 1] !== 2 && grid[i - 1] === grid[i - 2]) {
    return (grid[i - 1] + 1) % 2
  }
  if (
    colNum > 0 &&
    colNum < gridSize - 1 &&
    grid[i + 1] !== 2 &&
    grid[i + 1] === grid[i - 1]
  ) {
    return (grid[i + 1] + 1) % 2
  }
  return 2
}

export function checkRule1Vertical({ grid, i }: checkGridParams) {
  const rowNum = Math.floor(i / gridSize)
  if (
    rowNum < gridSize - 2 &&
    grid[i + gridSize] !== 2 &&
    grid[i + gridSize] === grid[i + 2 * gridSize]
  ) {
    return (grid[i + gridSize] + 1) % 2
  }
  if (
    rowNum > 1 &&
    grid[i - gridSize] !== 2 &&
    grid[i - gridSize] === grid[i - 2 * gridSize]
  ) {
    return (grid[i - gridSize] + 1) % 2
  }
  if (
    rowNum > 0 &&
    rowNum < gridSize - 1 &&
    grid[i + gridSize] !== 2 &&
    grid[i + gridSize] === grid[i - gridSize]
  ) {
    return (grid[i + gridSize] + 1) % 2
  }
  return 2
}

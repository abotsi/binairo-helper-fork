import { gridSizeState } from './state'

export function computeNextMove(grid: number[]): number[] {
  grid.forEach((cell, index) => {
    if (index === 0) {
      return
    }
    const col = index % gridSizeState
    // const leftCell = !(index % gridSizeState) && grid[index - 1]
    console.log(col)
  })
  return grid
}

import { atom, selectorFamily } from 'recoil'
import { cloneUpdateAt } from './utils'

const gridSize = 6
const initialGrid = new Array(gridSize * gridSize).fill(2)

const gridState = atom({
  key: 'gridState',
  default: initialGrid,
})

const cellState = selectorFamily<number, number>({
  key: 'cellState',
  get: (index: number) => ({ get }) => get(gridState)[index],
  set: (index: number) => ({ get, set }, newValue) => {
    const oldGrid = get(gridState)
    const newGrid = cloneUpdateAt(oldGrid, index, newValue)
    set(gridState, newGrid)
  },
})

export { gridSize, initialGrid, gridState, cellState }

import { atom, selectorFamily } from 'recoil'

const gridSizeState = 6
const initialGrid = new Array(gridSizeState * gridSizeState).fill(2)

const gridState = atom({
  key: 'gridState',
  default: initialGrid,
})

const cellState = selectorFamily<number, number>({
  key: 'cellState',
  get: (index: number) => ({ get }) => get(gridState)[index],
  set: (index: number) => ({ get, set }, newValue) => {
    const oldGrid = get(gridState)
    const newGrid = [
      ...oldGrid.slice(0, index),
      newValue,
      ...oldGrid.slice(index + 1),
    ]
    set(gridState, newGrid)
  },
})

export { gridSizeState, initialGrid, gridState, cellState }

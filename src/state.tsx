import { atom } from 'recoil'
const gridSizeState = 6

const gridState = atom({
  key: 'gridState',
  default: new Array(gridSizeState * gridSizeState).fill(null),
})

export { gridState }

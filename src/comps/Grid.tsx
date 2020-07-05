import * as React from 'react'
import GridItem from './GridItem'
import { initialGrid } from '../state'

export default function Grid() {
  return (
    <div className="Grid">
      {initialGrid.map((_, cell) => (
        <GridItem key={cell} index={cell} />
      ))}
    </div>
  )
}

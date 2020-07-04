import * as React from 'react'
import GridItem from './GridItem'
import { gridState } from './state'
import { useRecoilValue } from 'recoil'

export default function Grid() {
const gridValues = useRecoilValue(gridState)
  return (
    <div className="Grid">
      {gridValues.map((_, cell) => (
        <GridItem key={cell} index={cell} />
      ))}
    </div>
  )
}

import * as React from 'react'
import { useRecoilState } from 'recoil'
import Button from '@material-ui/core/Button'
import { computeNextMove } from '../binairo-ai'
import { gridState } from '../state'

export default function Toolbar() {
  const [grid, setGrid] = useRecoilState(gridState)
  return (
    <div id="toolbar">
      <h1>Binairo Helper</h1>
      <Button
        variant="contained"
        onClick={() => setGrid(computeNextMove(grid))}
      >
        Guess
      </Button>
    </div>
  )
}

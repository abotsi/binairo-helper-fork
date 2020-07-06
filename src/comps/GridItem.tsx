import * as React from 'react'
import Button from '@material-ui/core/Button'
import { useRecoilState } from 'recoil'
import { cellState } from '../state'

export default function({ index }: { index: number }) {
  const [value, setValue] = useRecoilState<number>(cellState(index))
  const displayLabel = ['O', 'I', ' ']

  return (
    <Button className="GridItem" onClick={() => setValue((value + 1) % 3)}>
      {displayLabel[value]}
    </Button>
  )
}

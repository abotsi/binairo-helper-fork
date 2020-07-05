import * as React from 'react'
import Button from '@material-ui/core/Button'
import { useRecoilState } from 'recoil'
import { cellState } from './state'

export default function({ index }: { index: number }) {
  const [value, setValue] = useRecoilState<number>(cellState(index))
  const displayLabel = ['O', 'I', ' ']

  return (
    <Button
      className="GridItem"
      onClick={() => {
        const newValue = [1, 2, 0][value]
        setValue(newValue)
      }}
    >
      {displayLabel[value]}
    </Button>
  )
}

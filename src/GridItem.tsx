import * as React from 'react'
import Button from '@material-ui/core/Button'
import { useRecoilState } from 'recoil'
import { cellState } from './state'

export default function({ index }) {
  const [value, setValue] = useRecoilState(cellState(index))
  const displayLabel = ['O', 'I', ' ']

  return (
    <Button
      className="GridItem"
      onClick={() => {
        switch (value) {
          case 0:
            return setValue(1)
          case 1:
            return setValue(2)
          default:
            return setValue(0)
        }
      }}
    >
      {displayLabel[value]}
    </Button>
  )
}

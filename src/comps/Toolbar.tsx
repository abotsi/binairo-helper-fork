import * as React from 'react'
import Button from '@material-ui/core/Button'

export default function Toolbar() {
  return (
    <div id="toolbar">
      <h1>Binairo Helper</h1>
      <Button
        variant="contained"
      >
        Guess
      </Button>
    </div>
  )
}

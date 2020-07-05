import * as React from 'react'
import './styles.css'
import Grid from './Grid'
import { RecoilRoot } from 'recoil'
import Button from '@material-ui/core/Button'

export default function App() {
  return (
    <RecoilRoot>
      <div id="App">
        <div id="toolbar">
          <h1>Binairo Helper</h1>
            <Button variant="contained">Guess</Button>
        </div>
        <Grid />
      </div>
    </RecoilRoot>
  )
}

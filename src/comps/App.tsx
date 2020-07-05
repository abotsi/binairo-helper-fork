import * as React from 'react'
import { RecoilRoot } from 'recoil'
import Grid from './Grid'
import Toolbar from './Toolbar'

export default function App() {
  return (
    <RecoilRoot>
      <div id="App">
        <Toolbar />
        <Grid />
      </div>
    </RecoilRoot>
  )
}

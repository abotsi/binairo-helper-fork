import * as React from 'react'
import './styles.css'
import Grid from './Grid'
import { RecoilRoot } from 'recoil'

export default function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>Hello Binairo</h1>
        <Grid />
      </div>
    </RecoilRoot>
  )
}

import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import {BackgroundChanger} from './components/BackgroundChanger' 
import { RecoilRoot, useRecoilValue } from 'recoil'
import { backgrounColorAtom } from './atoms/atoms'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div >
      <RecoilRoot>
        {/* <h1>Hello</h1> */}
        {/* <Card/> */}
        <BackgroundChanger/>
      </RecoilRoot>
    </div>
  )
}


export default App

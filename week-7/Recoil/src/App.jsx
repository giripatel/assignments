import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot } from 'recoil'
import Notification from './components/Notification.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RecoilRoot>
      <Notification/>
    </RecoilRoot>
  )
}

export default App

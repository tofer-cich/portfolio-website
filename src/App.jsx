import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='screen'>
      <div id="sidebar">hello</div>
      <div id='content'>Main content here...</div>
    </div>
  )
}

export default App

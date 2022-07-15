import { useState } from 'react'

import './App.css'
import { Header } from './components/Header'
import { Task } from './components/Task'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      
      <Task />
    </div>
  )
}

export default App

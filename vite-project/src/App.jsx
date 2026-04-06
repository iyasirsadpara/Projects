import { useState } from 'react'
import './App.css'
import Contact from './Componets/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <div className="main">
      <Contact />
    </div>

    </>
  )
}

export default App

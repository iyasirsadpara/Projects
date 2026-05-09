import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Doctors from './Components/Doctors' 
import Appointment from './Components/Appointment'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Doctors/>
    <Appointment/>
    <Contact/>
    <Footer/>

    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import './Styles/Delibook.css'
import Herosection from './Components/Herosection'
import Delibook from './Components/Delibook'
import Cards from './Components/Cards'
import Rooms from './Components/Rooms'
import Thirdsection from './Components/Thirdsection'
import Sectionfour from './Components/Sectionfour'
import Sectionfive from './Components/Sectionfive'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Herosection/> */}
      <Delibook/>
      <Cards/>
      <Rooms/>
      <Thirdsection/>
      <Sectionfour/>
      <Sectionfive/>
      <Footer/> 

    </>
  )
} 

export default App

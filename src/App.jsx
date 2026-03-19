import { useState } from 'react'
import './App.css'
import './Styles/Delibook.css'
import Navbar from './Components/Navbar'
import Herosection from './Components/Herosection'
import Accomodation from './Components/Accomodation'
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
      {/* <Accomodation/> */}
      <Delibook/>
      <Cards/>
      <Rooms/>
      <Thirdsection/>
      <Sectionfour/>
      <Sectionfive/>
      {/* <Footer/>  */}
      {/* <Navbar/> */}

    </>
  )
} 

export default App

import { useState, createContext } from 'react'
import './App.css'
import './Styles/Delibook.css'
import Delibook from './Components/Delibook'
import Cards from './Components/Cards'
import Rooms from './Components/Rooms'
import Thirdsection from './Components/Thirdsection'
import Sectionfour from './Components/Sectionfour'
import Sectionfive from './Components/Sectionfive'
import Footer from './Components/Footer'
import BookingForm from './Components/BookingForm'

// Create context for booking form
export const BookingContext = createContext()

function App() {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false)

  const openBookingForm = () => setIsBookingFormOpen(true)
  const closeBookingForm = () => setIsBookingFormOpen(false)

  return (
    <BookingContext.Provider value={{ openBookingForm, closeBookingForm }}>
      <>
        {/* <Herosection/> */}
        <Delibook/>
        <Cards/>
        <Rooms/>
        <Thirdsection/>
        <Sectionfour/>
        <Sectionfive/>
        <Footer/>
        
        <BookingForm isOpen={isBookingFormOpen} onClose={closeBookingForm} />
      </>
    </BookingContext.Provider>
  )
} 

export default App

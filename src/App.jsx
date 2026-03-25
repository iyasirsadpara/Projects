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
import Chatbox from './Components/Chatbox'

// Create context for booking form
export const BookingContext = createContext()

function App() {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false)
  const [isChatboxOpen, setIsChatboxOpen] = useState(false)

  const openBookingForm = () => setIsBookingFormOpen(true)
  const closeBookingForm = () => setIsBookingFormOpen(false)
  const openChatbox = () => setIsChatboxOpen(true)
  const closeChatbox = () => setIsChatboxOpen(false)

  return (
    <BookingContext.Provider value={{ openBookingForm, closeBookingForm, openChatbox, closeChatbox }}>
      <>
      
        <Delibook/>
        <Cards/>
        <Rooms/>
        <Thirdsection/>
        <Sectionfour/>
        <Sectionfive/>
        <Footer/>
        
        {isChatboxOpen && <Chatbox isOpen={isChatboxOpen} onClose={closeChatbox} />}
        
        <BookingForm isOpen={isBookingFormOpen} onClose={closeBookingForm} />
      </>
    </BookingContext.Provider>
  )
} 

export default App

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
import ChatApp from './Components/chatapp'
import ChatboxIcon from './Components/ChatboxIcon'


// Create context for booking form
export const BookingContext = createContext()

function App() {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false)
  const [isChatappOpen, setIsChatappOpen] = useState(false)

  const openBookingForm = () => setIsBookingFormOpen(true)
  const closeBookingForm = () => setIsBookingFormOpen(false)
  const openChatapp = () => setIsChatappOpen(true)
  const closeChatapp = () => setIsChatappOpen(false)

  return (
    <BookingContext.Provider value={{ openBookingForm, closeBookingForm }}>
      <>
      
        <Delibook/>
        <Cards/>
        <Rooms/>
        <Thirdsection/>
        <Sectionfour/>
        <Sectionfive/>
        <Footer/>
        
        {/* Floating Chat Button */}
        <div className="chatbox">
          <button onClick={openChatapp} title="Open Chat">
            <ChatboxIcon />
          </button>
        </div>
        
        {/* Chat Modal */}
        <ChatApp isOpen={isChatappOpen} onClose={closeChatapp} />
        
        <BookingForm isOpen={isBookingFormOpen} onClose={closeBookingForm} />
      </>
    </BookingContext.Provider>
  )
} 

export default App

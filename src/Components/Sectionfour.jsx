import React, { useContext } from 'react'
import '../Styles/Sectionfour.css'
import { BookingContext } from '../App'

const Sectionfour = () => {
  const { openBookingForm } = useContext(BookingContext)

  return (
    <div className='sectionfour'>
      <div className='section-four-content'>
        <div className='left-content'>
          <h1>Globally Acclaimed with National Awards for Exceptional Hotel Services.</h1>
          <p>DreamLand Believe that every stay in the foundation of memorable journeys.</p>
          <div className='images-grid'>
            <div className='thumb'><img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="hotel" /></div>
            <div className='thumb'><img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="hotel" /></div>
            <div className='thumb'><img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="hotel" /></div>
            <div className='thumb'><img src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="hotel" /></div>
            <div className='thumb'><img src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="hotel" /></div>
          </div>
        </div>
        <div className='right-card'>
          <div className='hotel-card'>
            <div className='card-hotel-image'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROF09ab1MsLxFHF-3cvTwl40uqyVXx34OX0Q&s" alt="Hotel" />
            </div>
            <div className='card-details'>
              <h3>DremLand Hotel - Prime, GilgitBaltistan</h3>
              <div className='card-stats'>
                <span>4 Guests</span>
                <span>2 Beds</span>
                <span>2 Baths</span>
              </div>
              <div className='card-price-section'>
                <div className='price-rating'>
                  <p className='price'>246/night</p>
                  <div className='rating-badge'>
                    <span>4.9</span>
                  </div>
                </div>
                <button className='book-btn' onClick={openBookingForm}>Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sectionfour

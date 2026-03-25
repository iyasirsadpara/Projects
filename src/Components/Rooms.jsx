import React, { useState, useContext } from 'react'
import '../Styles/Rooms.css'
import { BookingContext } from '../App'

const Rooms = () => {
  const [wishlist, setWishlist] = useState(false)
  const { openBookingForm, openChatbox } = useContext(BookingContext)

  const rooms = [
    {
      id: 1,
      title: "Hidden Quill Haven",
      location: "New York, USA",
      guests: 4,
      beds: 2,
      baths: 2,
      size: "1500 ft²",
      price: 246,
      rating: 4.9,
      image: "url('https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=400&fit=crop')"
    },
    {
      id: 2,
      title: "Sunset Paradise",
      location: "Malibu, USA",
      guests: 6,
      beds: 3,
      baths: 2,
      size: "2000 ft²",
      price: 350,
      rating: 4.8,
      image: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=400&fit=crop')"
    },
    {
      id: 3,
      title: "Mountain Glen Resort",
      location: "Colorado, USA",
      guests: 5,
      beds: 2,
      baths: 2,
      size: "1800 ft²",
      price: 199,
      rating: 4.7,
      image: "url('https://images.unsplash.com/photo-1618773928121-c37678de7e6b?w=500&h=400&fit=crop')"
    }
  ]

  const toggleWishlist = () => {
    setWishlist(!wishlist)
  }

  return (

    <div className='rooms-container'>
      <div className='card-divider'></div>
      <div className='rooms-header'>
        <h1>Featured Rooms</h1>
        <p>Discover our most popular accommodations</p>
      </div>

      <div className='rooms-grid'>
        {rooms.map((room) => (
          <div key={room.id} className='room-card'>
            <div
              className='room-image'
              style={{ backgroundImage: room.image }}
            >
              <button
                className={`wishlist-btn ${wishlist ? 'active' : ''}`}
                onClick={toggleWishlist}
              >
                ♡
              </button>
              <div className='room-rating'>
                <span className='star'></span>
                <span>{room.rating}</span>
              </div>
            </div>

            <div className='room-info'>
              <h2>{room.title}</h2>
              <p className='location'> {room.location}</p>

              <div className='room-details'>
                <div className='detail-item'>
                  <span className='icon'></span>
                  <span>{room.guests} Guests</span>
                </div>
                <div className='detail-item'>
                  <span className='icon'></span>
                  <span>{room.beds} Beds</span>
                </div>
                <div className='detail-item'>
                  <span className='icon'></span>
                  <span>{room.baths} Baths</span>
                </div>
                <div className='detail-item'>
                  <span className='icon'></span>
                  <span>{room.size}</span>
                </div>
              </div>

              <div className='room-footer'>
                <div className='price'>
                  <span className='amount'>{room.price}</span>
                  <span className='duration'>/night</span>
                </div>
                <button className='book-btn' onClick={openBookingForm}>Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="chatbox">
        <button onClick={openChatbox}>chat</button>
      </div>
    </div>

  )
}

export default Rooms

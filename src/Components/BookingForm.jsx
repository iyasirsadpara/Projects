import React, { useState } from 'react'
import '../Styles/BookingForm.css'

const BookingForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: 'standard'
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Booking submitted:', formData)
    alert(`Thank you for booking! We'll contact you soon at ${formData.email}`)
    setFormData({
      name: '',
      email: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      guests: 1,
      roomType: 'standard'
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className='booking-modal-overlay' onClick={onClose}>
      <div className='booking-modal-content' onClick={(e) => e.stopPropagation()}>
        <div className='booking-modal-header'>
          <h2>Book Your Room</h2>
          <button className='close-btn' onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit} className='booking-form'>
          <div className='form-group'>
            <label htmlFor='name'>Full Name *</label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Enter your full name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='email'>Email Address *</label>
            <input type='email'id='email'name='email'placeholder='Enter your email'value={formData.email}onChange={handleChange}required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='phone'>Phone Number *</label>
            <input
              type='tel'
              id='phone'
              name='phone'
              placeholder='Enter your phone number'
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor='checkIn'>Check-in Date *</label>
              <input
                type='date'
                id='checkIn'
                name='checkIn'
                value={formData.checkIn}
                onChange={handleChange}
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='checkOut'>Check-out Date *</label>
              <input
                type='date'
                id='checkOut'
                name='checkOut'
                value={formData.checkOut}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor='guests'>Number of Guests *</label>
              <input
                type='number'
                id='guests'
                name='guests'
                min='1'
                max='10'
                value={formData.guests}
                onChange={handleChange}
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='roomType'>Room Type *</label>
              <select
                id='roomType'
                name='roomType'
                value={formData.roomType}
                onChange={handleChange}
                required
              >
                <option value='standard'>Standard</option>
                <option value='deluxe'>Deluxe</option>
                <option value='suite'>Suite</option>
                <option value='penthouse'>Penthouse</option>
              </select>
            </div>
          </div>

          <div className='form-actions'>
            <button type='button' className='cancel-btn' onClick={onClose}>Cancel</button>
            <button type='submit' className='submit-btn'>Book Now</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BookingForm

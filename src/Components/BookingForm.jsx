import React, { useState } from 'react'
import '../Styles/BookingForm.css'

const BookingForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    roomType: 'standard'
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const formDataToSend = new FormData()
      
      // Add access key for Web3Forms
      formDataToSend.append('access_key', 'caa23daa-7d7c-4ba7-930e-c6376073c8ef')
      
      // Add form fields
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key])
      })

      // Send to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      })

      const result = await response.json()

      if (result.success) {
        alert(`Thank you for booking! We'll contact you ASAP. Confirmation email has been sent.`)
        setFormData({
          name: '',
          email: '',
          phone: '',
          checkIn: '',
          checkOut: '',
          guests: '',
          roomType: 'standard'
        })
        onClose()
      } else {
        alert('Error submitting form. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className='booking-modal-overlay' onClick={onClose}>
      <div className='booking-modal-content' onClick={(e) => e.stopPropagation()}>
        <div className='booking-modal-header'>
          <h2>Book Your Room</h2>
          <button className='close-btn' onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit} className='main-form'>
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
            <input 
              type='email'
              id='email'
              name='email'
              placeholder='Enter your email'
              value={formData.email}
              onChange={handleChange}
              required
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
              <label htmlFor='guests'>Totel Members*</label>
              <input 
                type='number' 
                id='guests' 
                name='guests' 
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
              </select>
            </div>
          </div>

          <div className='form-actions'>
            <button type='button' className='cancel-btn' onClick={onClose}>Cancel</button>
            <button type='submit' className='submit-btn' disabled={loading}> 
              {loading? 'Booking... ' : 'Book Now'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BookingForm

import React from 'react'
import '../Styles/Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-content'>
         
          <div className='footer-section'>
            <h3 className='footer-title'>DreamLand</h3>
            <p className='footer-desc'>Discover your perfect getaway with DreamLand. We provide exceptional hotel services and memorable experiences worldwide.</p> 
          </div>

          
          <div className='footer-section'>
            <h4 className='footer-subtitle'>Quick Links</h4>
            <ul className='footer-links'>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>About Us</a></li>
              <li><a href='#'>Hotels</a></li>
              <li><a href='#'>Rooms</a></li>
              <li><a href='#'>Contact</a></li>
            </ul>
          </div>

        
          <div className='footer-section'>
            <h4 className='footer-subtitle'>Services</h4>
            <ul className='footer-links'>
              <li><a href='#'>Book Hotel</a></li>
              <li><a href='#'>Corporate Packages</a></li>
              <li><a href='#'>Group Bookings</a></li>
              <li><a href='#'>Travel Insurance</a></li>
              <li><a href='#'>24/7 Support</a></li>
            </ul>
          </div>

         
          <div className='footer-section'>
            <h4 className='footer-subtitle'>Contact Info</h4>
            <ul className='footer-contact'>
              <li><strong>Email:</strong> info@dreamland.com</li>
              <li><strong>Phone:</strong> +923447606752</li>
              <li><strong>Address:</strong> 123 Hotel Street, Prime City</li>
              <li><strong>Hours:</strong> 24/7 Support Available</li>
            </ul>
          </div>
        </div>

        <div className='footer-bottom'>
          <div className='footer-divider'></div>
          <div className='footer-bottom-content'>
            <p>&copy; 2024 DreamLand Hotels. All rights reserved.</p>
            <div className='footer-legal'>
              <a href='#'>Priva cy Policy</a>
              <a href='#'>Terms & Conditions</a>
              <a href='#'>Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

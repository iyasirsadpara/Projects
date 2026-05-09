import '../Style/Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-content'>
         
          <div className='footer-section'>
            <h3 className='footer-title'>Iqbal Dental</h3>
            <p className='footer-desc'>Discover your perfect getaway with DreamLand. We provide exceptional hotel services and memorable experiences worldwide.</p>
            <div className='social-icons'>
              <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' title='Facebook'>F</a>
              <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' title='Twitter'>X</a>
              <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' title='Instagram'>I</a>
              <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' title='LinkedIn'>In</a>
            </div>
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
              <li><a href='#'>Root Canal</a></li>
              <li><a href='#'>Braces & Aligners</a></li>
              <li><a href='#'>Dental Implants</a></li>
              <li><a href='#'>Scaling & Polishing</a></li>
              <li><a href='#'>24/7 Support</a></li>
            </ul>
          </div>

         
          <div className='footer-section'>
            <h4 className='footer-subtitle'>Contact Info</h4>
            <ul className='footer-contact'>
              <li><strong>Email:</strong> info@iqbaldental.com</li>
              <li><strong>Phone:</strong> +923447606752</li>
              <li><strong>Address:</strong> 123 Hotel Street, Prime City</li>
              <li><strong>Hours:</strong> 24/7 Support Available</li>
            </ul>
          </div>
        </div>

        <div className='footer-bottom'>
          <div className='footer-divider'></div>
          <div className='footer-bottom-content'>
            <p>&copy; 2026 Iqbal Detal. All rights reserved.</p>
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

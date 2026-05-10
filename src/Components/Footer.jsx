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
              <li><strong>Address:</strong> Premium Smile Dental Care, 36 Moon Market Road, Gulshan-e-Ravi, Lahore</li>
              <li><strong>Hours:</strong> 24/7 Support Available</li>
            </ul>
          </div>

          <div className='footer-section footer-map-section'>
            <h4 className='footer-subtitle'>Our Location</h4>
            <div className='map'>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.9611711042407!2d74.28593!3d31.52040!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919096d0c8de0d5%3A0x3919096d0c8de0d5!2sPremium%20Smile%20Dental%20Care%2C%2036%20Moon%20Market%20Road%2C%20E%20Block%2C%20Gulshan-e-Ravi%2C%20Lahore%2C%20Punjab%2054000!5e0!3m2!1sen!2s!4v1715250000000"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Premium Smile Dental Care Location"
              ></iframe>
            </div>
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

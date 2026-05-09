import "../Style/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      
      <button className="contact-btn">Get in touch</button>

      <h1>Contact Us Today</h1>
      <p className="subtitle">
        Have questions or need to schedule an appointment? We're here to help.
        Reach out through any of these channels.
      </p>

      <div className="contact-grid">

        <div className="card phone">
          <div className="icon">📞</div>
          <h3>Phone</h3>
          <p className="highlight">+1 (555) 123-4567</p>
          <p>Call us for immediate assistance or appointment booking</p>
        </div>

        <div className="card email">
          <div className="icon">✉️</div>
          <h3>Email</h3>
          <p className="highlight">info@globaldentalclinic.com</p>
          <p>Send us your questions or concerns anytime</p>
        </div>

        <div className="card address">
          <div className="icon">📍</div>
          <h3>Address</h3>
          <p>123 Healthcare Avenue, Medical District, New York, NY 10001</p>
          <a href="#">Get Directions →</a>
        </div>

        <div className="card hours">
          <div className="icon">⏰</div>
          <h3>Working Hours</h3>
          <p>Monday - Friday: <span className="time">8:00 AM - 6:00 PM</span></p>
          <p>Saturday: <span className="time">10:00 AM - 4:00 PM</span></p>
          <p>Sunday: <span className="closed">Closed</span></p>
        </div>

      </div>

      <div className="social-box">
        <h3>Connect With Us</h3>
        <p>
          Follow us on social media for dental tips, updates, and special offers
        </p>

        <div className="social-icons">
          <span>f</span>
          <span>In</span>
          <span>▶</span>
        </div>
      </div>

    </div>
  );
};

export default Contact;
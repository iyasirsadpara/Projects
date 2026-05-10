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
          <p className="highlight">+92323 5710 575</p>
          <p>Call us for immediate assistance or appointment booking</p>
        </div>

        <div className="card email">
          <div className="icon">✉️</div>
          <h3>Email</h3>
          <p className="highlight">permiumdentalcare@gmail.com</p>
          <p>Send us your questions or concerns anytime</p>
        </div>

        <div className="card address">
          <div className="icon">📍</div>
          <h3>Address</h3>
          <p>Premium Smile Dental Care, 36 Moon Market Road، E Block Block E Gulshan-e-Ravi, Lahore, Punjab 54000</p>
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

    </div>
  );
};

export default Contact;
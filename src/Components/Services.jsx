import "../Style/Services.css";

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-header">
        <p className="about-us">Our Services</p>
        <h2 className="services-title">Comprehensive Dental Solutions</h2>
        <p className="services-subtitle">
          From routine checkups to advanced treatments, we offer a full range of dental services to keep your smile healthy and beautiful.
        </p>
      </div>

      <div className="services-container">
        <div className="service-card">
          <div className="service-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" fill="white"/>
            </svg>
          </div>
          <h3>Teeth Whitening</h3>
          <p>Professional whitening treatments for a brighter, confident smile</p>
          <a href="#" className="book-service">Book Service →</a>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-9h8v2h-8z" fill="white"/>
            </svg>
          </div>
          <h3>Root Canal</h3>
          <p>Pain-free root canal therapy using advanced techniques</p>
          <a href="#" className="book-service">Book Service →</a>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="white"/>
            </svg>
          </div>
          <h3>Braces & Aligners</h3>
          <p>Modern orthodontic solutions for perfectly aligned teeth</p>
          <a href="#" className="book-service">Book Service →</a>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2V17zm4 0h-2V7h2V17zm4 0h-2v-4h2V17z" fill="white"/>
            </svg>
          </div>
          <h3>Scaling & Polishing</h3>
          <p>Professional cleaning for healthy gums and fresh breath</p>
          <a href="#" className="book-service">Book Service →</a>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="white"/>
            </svg>
          </div>
          <h3>Dental Implants</h3>
          <p>Permanent tooth replacement with natural look and feel</p>
          <a href="#" className="book-service">Book Service →</a>
        </div>
      </div>

      <div className="consultation-cta">
        <h2>Not Sure Which Service You Need?</h2>
        <p>Book a consultation and our experts will guide you to the best treatment for your needs.</p>
        <button className="cta-button">Schedule Consultation →</button>
      </div>
    </section>
  );
}
import "../Style/Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="">
      <div className="hero-overlay">
        <div className="hero-content">

          {/* Top Badge */}
          <div className="hero-badge">
            ✨ Award-Winning Dental Care
          </div>

          {/* Heading */}
          <h1>
            Expert Dental Care <br />
            for a <span>Healthy Smile</span>
          </h1>

          {/* Paragraph */}
          <p>
            Modern equipment, experienced dentists, and caring service 
            your journey to a confident smile starts here.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <a href="#appointment" className="btn-primary">
              📅 Book Appointment
            </a>
            <a href="#contact" className="btn-outline">
              ☎  Call Now
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat">
              ⭐ <strong>4.9/5</strong>
              <span>Patient Rating</span>
            </div>
            <div className="stat">
              🏆 <strong>10,000+</strong>
              <span>Happy Patients</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
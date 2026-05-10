import "../Style/About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Left Content */}
        <div className="about-text">
          <div className="about-us">
            About Us
          </div>
          <h1>Welcome to Premium Smile
Dental Care</h1>
          <p>
            We are dedicated to providing exceptional dental care in a comfortable and welcoming environment. With over a decade of experience, our team combines advanced technology with personalized attention to ensure every patient leaves with a healthy, beautiful smile.
          </p>

          <div className="about-features">
            <div className="feature">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 10.26H24L17.45 15.57L20.54 23.83L12 18.52L3.46 23.83L6.55 15.57L0 10.26H8.91L12 2Z" fill="white"/>
                </svg>
              </div>
              <h2>5+ Years Experience</h2>
              <h4>Trusted dental care since 2021</h4>
            </div>

            <div className="feature">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12C11.21 12 13 10.21 13 8C13 5.79 11.21 4 9 4C6.79 4 5 5.79 5 8C5 10.21 6.79 12 9 12ZM15 13H3C1.34 13 0 14.34 0 16V20H18V16C18 14.34 16.66 13 15 13ZM15 4C13.34 4 12 5.34 12 7C12 8.66 13.34 10 15 10C16.66 10 18 8.66 18 7C18 5.34 16.66 4 15 4ZM18 13C17.71 13 17.38 13.02 17.07 13.04C17.68 14.08 18.20 14.44 18.20 15.84V18H24V16C24 14.34 22.66 13 21 13H18Z" fill="white"/>
                </svg>
              </div>
              <h2>Qualified Dentists</h2>
              <h4>Expert team of certified professionals</h4>
            </div>

            <div className="feature">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2H11V9H2V11H11V22H13V11H22V9H13V2Z" fill="white"/>
                </svg>
              </div>
              <h2>Modern Technology</h2>
              <h4>Latest equipment for best results</h4>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
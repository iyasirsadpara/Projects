import "../Style/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="logo-main">
            ID
        </div>
        <h2>PremiumSmile <span> Dentalnpm Care</span></h2>
      </div>

      <div className="nav-links">

      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#services">Appointment</a></li>
        <li><a href="#doctors">Doctors</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
        <a href="#appointment" className="navbar-btn"> ☎ Book Now </a>
      </div>
    </nav>
  );
}
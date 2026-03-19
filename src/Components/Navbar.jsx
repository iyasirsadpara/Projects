import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <h1>DreamLand Hotel</h1>
        <ul>
            <li>Home</li>
            <li>About Skardu</li>
            <li>Dining</li>
            <li>Gallery</li>
            <li>Contact</li>
        </ul>
        <div className='navbtn'> 

            <button className='btn'>Book Now</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

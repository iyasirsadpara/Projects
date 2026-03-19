import React from 'react'

const Delibook = () => {
    return (
        <div className='delibook'>
            <nav>
                <div className="logo">
                    <h1>DreamLand</h1>
                </div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
                <div className="booking">
                    <button>Register</button>
                    <button>Book Now</button>
                </div>
            </nav>
            <div className="herosection">
                <h3>123.8k + Happy Customers</h3>
                <h1>Welcom to DreamLand Hotel</h1>
                <h1>Stay in Elegant  Hotels</h1>
                <p>Expert smooth for a smooth  and hassle-free visa process</p>
            </div>
            <div className='booknow'>
                <div className='booknow-section'>
                    <h1>L</h1>
                    <div>
                        <p>Where to</p>
                        <p>Milian, italy</p>
                    </div>
                </div>
                <div className='booknow-section'>
                    <h1>L</h1>
                    <div>
                        <p>Date</p>
                        <p>June 15, 2023</p>
                    </div>
                </div>
                <div className='booknow-section'>
                    <h1>W</h1>
                    <div>
                        <p>Who</p>
                        <p>2 Adults, 1 Children</p>
                    </div>
                </div>
                <div className='booknow-section'>
                    <button>search</button>
                </div>

            </div>

        </div>
    )
}

export default Delibook

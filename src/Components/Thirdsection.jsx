import React from 'react'
import '../Styles/Thirdsection.css'

const Thirdsection = () => {
    return (
        <div className='thirdsection'>
            <div className='third-content'>

                <h1>What Make DreameLand Unique</h1>
                <p>Dreamland believes that every stay is the foundation of memorable journeys, offring comfort, connection, and a place to truly belong.</p>

            </div>
            <div className='third-cards'>
                <div className="card-data">

                    <div className='card-info'>
                        <h1>Quality & Comfort First</h1>
                        <p>We choose properties know for their exceptional amenities, customer service give a perfect stay.</p>
                    </div>

                    <div className='card-info'>
                        <h1>Best Price Guarntee</h1>
                        <p>Ensure compitative pricing across all our properties, so you can choose best deal for your next trip.</p>
                    </div>

                    <div className='card-info'>
                        <h1>Secure transactions</h1>
                        <p>We ensure secure and seamless booking processes for all our guests.</p>
                        </div>
                     <div className='card-info'>
                        <h1>Hassle-Free Refunds</h1>
                        <p>We understand that plans can change, so we offer hassle-free refunds for cancellations made within our specified policies.</p>
                    </div>

                </div>
                <div className="card-images">
                    {/* <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" /> */}
                    <div className='rating'>
                         * * 4.9 Avg Rating
                    </div>
                    <div className='img'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROF09ab1MsLxFHF-3cvTwl40uqyVXx34OX0Q&s" alt="thisis " />
                    </div>
                    <div className='refrence'>
                        <div className="img1"><img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-nature-scenery-free-image.jpeg?w=2210&quality=70" alt="this is one" /></div>
                        <div className="img1"><img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-nature-scenery-free-image.jpeg?w=2210&quality=70" alt="this is one" /></div>
                        <div className="img1"><img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-nature-scenery-free-image.jpeg?w=2210&quality=70" alt="this is one" /></div>
                       
                        120k+ Bookings
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Thirdsection

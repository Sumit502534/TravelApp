import React from 'react'
import "../style/TripStyle.css"
import TripData from './TripData'
import Trip1 from "../images/5.jpg"
import Trip2 from "../images/6.jpg"
import Trip3 from "../images/7.jpg"

const Trip = () => {
  return (
    <div className='trip'>
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using Google Maps</p>
      <div className="trip-card">
        <TripData
            img={Trip1}
            heading = "Angelfall Trip"
            text = "Angel Falls is the tallest waterfall in the world. It fell 3,212 feet (979 m) but recently dropped to 3,196 feet (974 m) mountain called Auyantepui. It is in Venezuela. The falls drop so far, the water turns into mist when it reaches the bottom."
        />
        <TripData
            img={Trip2}
            heading = "Lovely Nature Trip"
            text = "According to The Merriam-Webster Dictionary, nature is “a creative and controlling force in the universe,” “the external world in its entirety” or “humankind’s original condition.” The New Oxford American Dictionary describes nature as “the phenomena of the physical world collectively.”"
        />
        <TripData
            img={Trip3}
            heading = "Sea Trip"
            text = "In general, a sea is defined as a portion of the ocean that is partly surrounded by land. Given that definition, there are about 50 seas around the world. But that number includes water bodies not always thought of as seas, such as the Gulf of Mexico and the Hudson Bay."
        />
      </div>
    </div>
  )
}

export default Trip

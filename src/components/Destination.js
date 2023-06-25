import React from 'react'
import "../style/DestinationStyle.css"
import DestinationData from './DestinationData'
import fimage from "../images/1.jpg"
import simage from "../images/2.jpg"
import timage from "../images/3.jpg"
import fourimage from "../images/4.jpg"

const Destination = () => {
  return (
    <div>
      <div className="destination">
        <h1>Popular Destinations</h1>
        <p>Tours give you the oppurtunity to see a lot, within a time frame</p>
        <DestinationData className = "first-des"
          heading = "Taal Volcano, Batangas"
          text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima repudiandae blanditiis minus fugit delectus sapiente in quos ipsam veniam quam iste fuga explicabo magni accusamus, ipsa adipisci corporis quidem exercitationem rem dolorem nihil natus? Eius suscipit, modi ipsum nobis est nam iure soluta temporibus."
          image1 = {fimage} 
          image2 = {simage}
        />
        <DestinationData className = "first-des-reverse"
          heading = "Mt.Daguldul, Batangas"
          text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima repudiandae blanditiis minus fugit delectus sapiente in quos ipsam veniam quam iste fuga explicabo magni accusamus, ipsa adipisci corporis quidem exercitationem rem dolorem nihil natus? Eius suscipit, modi ipsum nobis est nam iure soluta temporibus."
          image1 = {timage} 
          image2 = {fourimage}
        />
      </div>
    </div>
  )
}

export default Destination

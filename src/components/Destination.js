import React from 'react'
import "../style/DestinationStyle.css"
import fimage from "../images/1.jpg"
import simage from "../images/2.jpg"


const Destination = () => {
  return (
    <div>
      <div className="destination">
        <h1>Popular Destinations</h1>
        <p>Tours give you the oppurtunity to see a lot, within a time frame</p>
        <div className="first-des">
            <div className="des-text">
                <h2>Taal Volcano, Batangas</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima repudiandae blanditiis minus fugit delectus sapiente in quos ipsam veniam quam iste fuga explicabo magni accusamus, ipsa adipisci corporis quidem exercitationem rem dolorem nihil natus? Eius suscipit, modi ipsum nobis est nam iure soluta temporibus.</p>
            </div>
            <div className="cimage">
                <img src={fimage} alt="fpic" />
                <img src={simage} alt="spic" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Destination

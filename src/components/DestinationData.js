import React from 'react'
import "../style/DestinationStyle.css"


const DestinationData = (props) => {
  return (
    <div>
      <div className={props.className}>
            <div className="des-text">
                <h2>{props.heading}</h2>
                <p>{props.text}</p>
            </div>
            <div className="cimage">
                <img src={props.image1} alt="fpic" />
                <img src={props.image2} alt="spic" />
            </div>
        </div>
    </div>
  )
}

export default DestinationData

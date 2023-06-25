import React from 'react'
import "../style/HeroStyle.css"

const Hero = (props) => {
  return (
    <div>
      <div className={props.cName}>
        <img src= {props.heroImg} alt="HeroImg" />
        <div className='hero-text'>
            <h1>{props.tittle}</h1>
            <p>{props.text}</p>
            <a href={props.url} className={props.btnClass}>
              {props.buttonText}
            </a>
        </div>
      </div>
    </div>
  )
}

export default Hero

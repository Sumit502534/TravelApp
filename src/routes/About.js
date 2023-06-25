import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Aboutimage from "../images/about.jpg"

const About = () => {
  return (
    <div>
      <Navbar/>
      <Hero
      cName="hero-about"heroImg={Aboutimage}tittle="About" btnClass="hide"
      />
    </div>
  )
}

export default About

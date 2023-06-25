import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Aboutimage from "../images/about.jpg"
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Hero
      cName="hero-about"heroImg={Aboutimage}tittle="About" btnClass="hide"
      />
      <AboutUs/>
      <Footer/>
    </div>
    
  )
}

export default About

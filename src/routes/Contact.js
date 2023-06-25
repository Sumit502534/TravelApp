import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Contactimage from "../images/contact.jpg"

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Hero
      cName="hero-about"heroImg={Contactimage}tittle="Contact" btnClass="hide"
      />
    </div>
  )
}

export default Contact

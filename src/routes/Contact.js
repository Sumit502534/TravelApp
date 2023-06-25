import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Contactimage from "../images/contact.jpg"
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Hero
      cName="hero-about"heroImg={Contactimage}tittle="Contact" btnClass="hide"
      />
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact

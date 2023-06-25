import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Serviceimage from "../images/service.jpg"
import Footer from '../components/Footer'
import Trip from '../components/Trip'

const Service = () => {
  return (
    <div>
      <Navbar/>
      <Hero
      cName="hero-about"heroImg={Serviceimage} tittle="Service" btnClass="hide"
      />
      <Trip/>
      <Footer/>
    </div>
  )
}

export default Service

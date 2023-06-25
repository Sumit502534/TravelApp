import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Serviceimage from "../images/service.jpg"

const Service = () => {
  return (
    <div>
      <Navbar/>
      <Hero
      cName="hero-about"heroImg={Serviceimage}tittle="Service" btnClass="hide"
      />
    </div>
  )
}

export default Service

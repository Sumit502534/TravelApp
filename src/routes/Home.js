import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import fimage from "../images/homefront.jpg"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero
      cName="hero"heroImg={fimage}tittle="Your Journey Your Story" text="Chhose Your Favourite Destination" buttonText= "Travel Plan" url="/" btnClass="show"
      />
    </div>
  )
}

export default Home

import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import fimage from "../images/home.jpg"
import Destination from '../components/Destination'
import Trip from '../components/Trip'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero
      cName="hero"heroImg={fimage}tittle="Your Journey Your Story" text="Chhose Your Favourite Destination" buttonText= "Travel Plan" url="/" btnClass="show"
      />
      <Destination/>
      <Trip/>
    </div>
  )
}

export default Home

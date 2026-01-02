import React from 'react'
import './Home.css'
import Navbar from '../NavbarSection/Navbar'
import coffee from "/src/assets/hero_image.jpg"

const Home = () => {
  return (
    <div className="relative">
      
      {/* Navbar */}
      <div className="absolute top-5 left-0 right-0 z-30 flex justify-center">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        
        {/* Background Image */}
        <img
          src={coffee}
          alt="coffee-background"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl px-6 md:px-12 lg:px-20 space-y-6">

            <h1 className="hero-headline text-white text-4xl md:text-6xl lg:text-[5rem] font-black leading-tight">
              FROM FARM TO CUP
            </h1>

            <p className="text-white font-light text-lg md:text-2xl max-w-2xl">
              Discover specialty coffee beans, ethically sourced and roasted fresh in Nairobi.
              Delivered to your door within 48 hours.
            </p>

            <button className="inline-block bg-amber-300 px-6 py-3 text-lg font-semibold text-gray-800 rounded hover:bg-amber-400 transition">
              ORDER NOW
            </button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Home

import React from 'react'
import './Home.css'
import Navbar from '../NavbarSection/Navbar'
import SeedThree from './SeedThree'
import ProductShowCase from './ProductShowCase'

const Home = () => {
  return (
    <div className="relative min-h-dvh overflow-visible">

      {/* Navbar */}
      <div className="absolute top-5 left-0 right-0 z-30 flex justify-center">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="flex flex-col justify-center space-y-5 md:space-y-12 lg:space-y-16">

        <div className="flex items-center justify-center mt-24 text-center">
          {/* Heading */}
          <h1 className="text-amber-950 text-5xl md:text-[7rem] lg:text-[11rem] font-black text-center leading-tight">
            FARM TO CUP
          </h1>
        </div>

        {/* SeedThree component */}
        <div className="flex items-center justify-center absolute top-16 md:top-24 left-0 right-0 z-30">
          <SeedThree />
        </div>

        {/* Subheading */}
        <div className="px-3 md:px-4 lg:px-10 items-start absolute z-50 bottom-16 md:mt-5 lg:bottom-3">
          <p className="text-my-custom-warm max-w-3/4 md:max-w-2/3 lg:max-w-1/2 md:text-xl">
            Discover specialty coffee beans, ethically sourced and roasted fresh in Nairobi. Delivered to your door within 48 hours.
          </p>
        </div>

        {/* Buy Button */}
        <div className="px-3 md:px-4 lg:px-10 absolute bottom-8 mt-10 md:mt-5 lg:bottom-2">
          <button
            type="submit"
            className="bg-amber-300 px-4 py-2 md:px-6 md:py-4 lg:px-6 lg:py-3 rounded font-black text-amber-950"
          >
            Order Now
          </button>
        </div>

      </div>
    </div>
  )
}

export default Home

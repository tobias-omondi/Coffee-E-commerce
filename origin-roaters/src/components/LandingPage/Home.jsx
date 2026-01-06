import React from 'react'
import './Home.css'
import Navbar from '../NavbarSection/Navbar'
import SeedThree from './SeedThree'

const Home = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      
      {/* Navbar */}
      <div className="absolute top-5 left-0 right-0 z-30 flex justify-center">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="flex flex-col  justify-center space-y-5 md:space-y-12 lg:space-y-16">
        <div className='flex items-center justify-center mt-28 text-center'>
          {/* heading  */}
          <h1 className='text-my-custom-warm text-6xl md:text-[8rem] lg:text-[11rem] font-black text-center leading-tight'>
            FARM TO CUP
          </h1>
        </div>

        {/* subheading */}
        <div className='px-3 md:px-4 lg:px-10  items-start'>
          <p className='text-my-custom-warm lg:max-w-xl md:text-xl'>Discover specialty coffee beans, ethically sourced and roasted fresh in Nairobi. Delivered to your door within 48 hours.</p>
        </div>

        {/* buy button */}
        <div className='px-3 md:px-4 lg:px-10'>
          <button type='submit' className='bg-amber-300 px-4 py-2 md:px-6 md:py-4 lg:px-8 lg:px-6 rounded'>Order Now</button>
        </div>

        {/* seed theed componets */}
        <div className='flex items-center justify-center absolute top-0 left-0 right-0 md:w-full w-[200] z-30'>
          <SeedThree />
        </div>
      </div>
    </div>
  )
}

export default Home

import React from 'react'
import './Home.css'
import Navbar from '../NavbarSection/Navbar'

const Home = () => {
  return (
    <div className="relative">
      
      {/* Navbar */}
      <div className="absolute top-5 left-0 right-0 z-30 flex justify-center">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        
        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-screen space-y-3 ">

            <h1 className=" text-white text-4xl md:text-6xl lg:text-[10rem] font-black text-center">
              FROM FARM TO CUP
            </h1>

            <div className='px-10 space-x-2'>
            <p className="text-white font-light md:text-xl max-w-xl">
              Discover specialty coffee beans, ethically sourced and roasted fresh in Nairobi.
              Delivered to your door within 48 hours.
            </p>

            <button className="inline-block bg-amber-300 px-3 py-3 text font-semibold text-gray-800 rounded hover:bg-amber-400 transition mt-5">
              ORDER NOW
            </button>

            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Home

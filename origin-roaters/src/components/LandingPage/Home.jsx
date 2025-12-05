import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="relative min-h-[80vh] md:h-screen overflow-hidden">
      {/* Video */}
      <video
        src="https://res.cloudinary.com/djyfoquip/video/upload/4819599-uhd_4096_2160_25fps_gfqvdt.mp4"
        className="absolute top-0 left-0 object-cover home-video h-full w-full brightness-50"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay content */}
      <div className="absolute bottom-0 md:bottom-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-my-custom-warm text-5xl lg:text-[9rem] font-bold text-center">
          FROM FARM
        </h1>
        <h1 className='text-my-custom-warm text-5xl md:text-[7rem] font-bold text-center'>
          TO CUP
        </h1>
        <p className='text-center text-my-custom-warm font-medium md:text-2xl px-5'>Discover specialty coffee beans, ethically sourced  and roasted fresh in Nairobi. Delivered to your door  within 48 hours.</p>
      </div>
    </div>
  )
}

export default Home

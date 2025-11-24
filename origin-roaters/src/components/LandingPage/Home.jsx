import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video */}
      <video
        src="https://res.cloudinary.com/djyfoquip/video/upload/5991949-hd_1920_1080_30fps_vrbhmi.mp4"
        className="absolute top-0 left-0 object-cover home-video"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay content */}
      <div className="absolute bottom-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-white text-[9rem] font-bold text-center">
          FROM FARM
        </h1>
        <h1 className='text-white text-[9rem] font-bold text-center'>
          TO CUP
        </h1>
        <p className='text-center text-my-custom-warm'>Discover specialty coffee beans, ethically sourced  and roasted fresh in Nairobi. Delivered to your door  within 48 hours.</p>
      </div>
    </div>
  )
}

export default Home

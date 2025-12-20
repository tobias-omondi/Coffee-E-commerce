import React from 'react'
import './Home.css'
import Navbar from '../NavbarSection/Navbar'
import coffee from "/src/assets/cafe-7441434_1280.png"

const Home = () => {
  return (
    <div className='relative'>
      <div className="absolute top-5 left-0 right-0 z-30 flex justify-center">
        <Navbar />
      </div>
    <div className="relative min-h-[90vh] md:h-screen overflow-hidden">
      {/* Video */}
      <video
        src="https://res.cloudinary.com/djyfoquip/video/upload/4821909-uhd_4096_2160_25fps_djpljv.mp4"
        className="absolute top-0 left-0 object-cover home-video h-full w-full backdrop-brightness-50"
        autoPlay
        muted
        loop
        playsInline
        preload='none'
      />

      {/* <img src={coffee} alt='coffee-background' className="absolute top-0 left-0 object-cover inset-0 h-screen w-full backdrop-brightness-50"/> */}

      {/* Overlay content: pinned to bottom-right and responsive */}
      <div className="absolute inset-0 w-full h-full flex items-end justify-end p-4 md:p-8 lg:p-12">
        <h1 className="hero-headline text-my-custom-warm text-3xl md:text-6xl lg:text-[5rem] font-black text-right leading-tight max-w-5xl">
          FROM FARM TO CUP
        </h1>
        {/* <h1 className='text-my-custom-warm text-5xl md:text-[7rem] font-medium text-center'>
       
        </h1> */}
        {/* <p className='text-center text-my-custom-warm font-light md:text-2xl px-5 lg:w-2/3'>Discover specialty coffee beans, ethically sourced  and roasted fresh in Nairobi. Delivered to your door  within 48 hours.</p> */}
      </div>
    </div>
    </div>
  )
}

export default Home

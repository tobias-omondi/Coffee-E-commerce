import React from 'react'

// import images here
import SalesImage1 from "/src/assets/package-coffee.jpg";
import SalesImage2 from "/src/assets/coffee-beans-bag.avif";
import SalesImage3 from "/src/assets/coffee-machine.avif";

import './Home.css'

const saleShopping = [
  {
    id: 1,
    image: SalesImage1,
    title: "Velvet Roast Signature Coffee Pack",
    description: "Smooth,rich and crafted for premium everyday brews.",
    price: "Ksh 1200 (20% OFF)",
  },

  {
    id: 2,
    image: SalesImage2,
    title: "Ember Gold whole bean",
    description: "Bold aromantic for clean, high end coffee experience.",
    price: "ksh 3000",
  },

  {
    id: 3,
    image: SalesImage3,
    title: "Noir Brew Coffee maker",
    description: "Sleek, Powerful and built to deliver barista level coffee at home.",
    price: "ksh 10,000",
  },
]

const ShowSell = () => {
  return (
    <div className='h-screen'>
      <div className='flex flex-row justify-evenly items-center text-center'>
        {saleShopping.map((item) => (
          <div key={item.id} className='salesImage_container' > 
          <img src ={item.image} alt = "sale item" />
          <h2>{item.title}</h2>
          <p> {item.description }</p>
          <h5>{item.price}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShowSell

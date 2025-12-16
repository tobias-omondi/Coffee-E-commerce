import React from 'react'

// import images here
import SalesImage1 from "/src/assets/package_cofe.avif";
import SalesImage2 from "/src/assets/coffee-bag.avif";
import SalesImage3 from "/src/assets/coffee machine.avif";


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
      <div className='flex flex-col md:flex-row justify-evenly items-center text-center'>
        {saleShopping.map((item) => (
          <div key={item.id} className='flex flex-col items-center gap-3 md:gap-6 w-3/4 ' > 
          <img src ={item.image} alt = "sale item" className='w-full md:w-[400px] object-cover h-[350px] md:h-[400px] rounded-xl' />
          <h2 className='text-my-custom-warm font-bold text-2xl'>{item.title}</h2>
          <p className='text-gray-900'> {item.description }</p>
          <h5 className='text-gray-900 italic font-medium text-xl'>{item.price}</h5>
          </div>
        ))}
      </div>
  )
}

export default ShowSell

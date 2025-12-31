import React from 'react'

// import images here
import SalesImage1 from "/src/assets/coffeeseeds.webp";
import SalesImage2 from "/src/assets/coffee_seeds.jpg";
import SalesImage3 from "/src/assets/coffeebrand_cup.webp";


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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start justify-items-center">
      {saleShopping.map((item) => (
        <article
          key={item.id}
          className="bg-white/5 rounded shadow-sm flex flex-col overflow-hidden w-[350px] h-[700px] md:w-[420px] md:h-[500px]"
        >
          <div className="w-full h-screen overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full md:h-full object-cover" loading="lazy" />
          </div>

          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-my-custom-warm font-bold text-lg">{item.title}</h2>
              <p className="text-gray-300 mt-2 text-sm">{item.description}</p>
            </div>

            <div className="mt-4">
              <h5 className="text-amber-300 italic font-medium text-lg">{item.price}</h5>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default ShowSell

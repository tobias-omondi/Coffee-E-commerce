import React from 'react'
import './Home.css'

// testimonials data

import testimonialsimg1 from "/src/assets/lady.jpeg"
import testimonialsimg2 from "/src/assets/gentleman.jpeg"
import testimonialsimg3 from "/src/assets/gentleman2.jpeg"
import Footer from '../FooterPage/Footer'

const testimonialsData = [
  {
    image: testimonialsimg1,
    name: "Jane Doe",
    feedback: "Amazing coffee! The freshness and flavor are unmatched. Highly recommeded! ",
  },
  {
    image: testimonialsimg2,
    name: "Morgan Mutua",
    feedback: "Love the Taste and Aroma of the coffee. It has become a staple in my daily routine.",
  },
  {
    image: testimonialsimg3,
    name: "Tobias Ogola",
    feedback: "Well packed and delivered on time. The coffee exceeded my expextations!. It also has a great story behind it.",
  },
]

const Testimonials = () => {
  return (
    <div className='h-screen'>
      <div className='testimonials-heading'>
        <h1>What Other's Say</h1>
      </div>

      {/* mapping the testimonials data */}
      <div className=' flex flex-row justify-center items-center gap-10 '>
        {testimonialsData.map (( testimonials, items) => {
          return (
            <div key={items} className='testimonials-container'>
              <div className='testimonials-card'>
                <img src={testimonials.image} alt='testimonals image' />
                <h2>{testimonials.name}</h2>
                <p>{testimonials.feedback}</p>
            </div>
            </div>
          )
        })}
      </div>

      <Footer />
    </div>
  )
}

export default Testimonials;

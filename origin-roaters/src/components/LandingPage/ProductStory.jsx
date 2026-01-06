import React from 'react'
import './Home.css'
import coffeefarm from '/src/assets/seedlings.jpg'

const ProductStory = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center  md:px-10 h-screen'>
      <div>
        <h1 className='text-2xl md:text-4xl text-my-custom-warm font-bold text-start px-4 mt-20'>EVERY BEAN HAS A STORY</h1>
        <p className='w-full md:w-3/4 text-gray-900 md:text-xl font-light md:mt-5 px-2'>Our coffee journey begins 1,700 meters above sea level in the 
           fertile highlands of East Africa. Each bean is handpicked by 
           smallholder farmers who have perfected their craft over 
           generations. From soil to cup, we honor their dedication by 
           roasting in small batches and delivering within 48 hoursensuring
           you taste the coffee exactly as it was meant to be.</p>
      </div>

       <div>
        <img src={coffeefarm} alt='coffeefarm' className='w-[300px] object-cover'/>
      </div>
    </div>
  )
}

export default ProductStory

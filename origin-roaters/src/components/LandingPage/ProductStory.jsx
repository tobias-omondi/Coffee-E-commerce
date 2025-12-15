import React from 'react'
import './Home.css'
import CoffeePackage3d from '../threedPackage/CoffeePackage3d'

const ProductStory = () => {
  return (
    <div className='flex flex-row justify-center items-center h-screen px-20'>
      <div>
        <h1 className='text-3xl text-gray-900 font-bold'>EVERY BEAN HAS A STORY</h1>
        <p className='w-2/3 text-gray-700'>Our coffee journey begins 1,700 meters above sea level in the 
           fertile highlands of East Africa. Each bean is handpicked by 
           smallholder farmers who have perfected their craft over 
           generations. From soil to cup, we honor their dedication by 
           roasting in small batches and delivering within 48 hoursensuring
           you taste the coffee exactly as it was meant to be.</p>
      </div>

      {/*  */}
      <div>
        <CoffeePackage3d />
      </div>
    </div>
  )
}

export default ProductStory

import React from 'react'
import CoffeePackage3d from '../threedPackage/CoffeePackage3d.jsx';

import Footer from '../FooterPage/Footer';

const PageStory = () => {
  return (
    <>
    <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:px-5 py-10 md:m-10 px-3'>

      <div><CoffeePackage3d /></div>

     
      
      {/* Added space-y-6 to create uniform vertical spacing between the heading and paragraphs */}
      <div className='w-full flex flex-col space-y-6'>

        {/* heading pargh */}
        <h1 className='text-gray-900 text-xl md:text-4xl font-black text-start  w-full md:w-full md:ml-auto space-x-5'>
          FROM OUR ROASTERY TO YOUR MORNING RITUAL IN THREE EASY STEPS
        </h1>

        <p className='w-full text-start md:w-full text-gray-700 md:ml-auto'>
          Explore our collection of specialty beans from across 
          East Africa. Filter by origin, roast level, or flavor 
          profile to find your perfect match.
        </p> 

        <p className='w-full text-start md:w-full text-gray-700  md:ml-auto'>
          Your order triggers a fresh roast in our Nairobi 
          roastery. We roast in small batches to ensure peak 
          flavor and quality.
        </p>

        <p className='w-full text-start md:w-full text-gray-700 md:ml-auto'>
          Your coffee is packaged and delivered within 48 hours. 
          No warehouses. No sitting on shelves. Just fresh coffee, 
          straight to your door.
        </p>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default PageStory;

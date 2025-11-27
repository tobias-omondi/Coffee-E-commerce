import React from 'react'
import './Home.css'

const PageStory = () => {
  return (
    <div className='flex flex-row justify-center items-center h-screen'>
      <div>

        {/* heading pargh */}
        <h1 >From our roastery to your morning ritual in three easy steps</h1>


        <p className='product-story-pargh'>Explore our collection of specialty beans from across 
         East Africa. Filter by origin, roast level, or flavor 
         profile to find your perfect match.
        </p> <br/>

         <p className='product-story-pargh'>Your order triggers a fresh roast in our Nairobi 
            roastery. We roast in small batches to ensure peak 
            flavor and quality.
         </p> <br/>

         <p className='product-story-pargh'>Your coffee is packaged and delivered within 48 hours. 
            No warehouses. No sitting on shelves. Just fresh coffee, 
            straight to your door.
        </p>
      </div>

      {/*  */}
    </div>
  )
}

export default PageStory;

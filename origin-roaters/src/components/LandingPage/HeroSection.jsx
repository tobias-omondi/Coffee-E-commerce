import React from 'react'
import Home from './Home'
import ProductShowCase from './ProductShowCase'
import ProductStory from './ProductStory'
import ShowSell from './ShowSell'
import PageStory from './PageStory'
import Testimonials from './Testimonials'

const HeroSection = () => {
  return (
    <div>

      {/* hero section */}
      <div>
        <Home />
      </div>

      {/* Product showcase */}

      <div>
        <ProductShowCase />
      </div>

      {/* product story */}

      <div>
        <ProductStory />
      </div>

      {/* sales story */}

      <div>
        <ShowSell />
      </div>

     <div>
        <PageStory />
      </div>
      {/* testimonials */}
      {/* <div>
        <Testimonials />
      </div> */}
    </div>
  )
}

export default HeroSection

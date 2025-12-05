import React from 'react'
import './Home.css'

// import images here
import coffeeimage1 from '/src/assets/coffee-563800_1280.avif'
import coffeeimage2 from '/src/assets/coffee-3759024_1280.avif'

const coffeeProducts = [
  {
    id: 1,
    image: coffeeimage1,
    name: "1package",
    price: "Ksh 1000",
  },
  {
    id: 2,
    description: "Single-origin coffees from Kenya, Ethiopia, and beyond. Roasted fresh, delivered fast.",
  },
  {
    id: 3,
    image: coffeeimage2,
    name: "Coffee Machine",
    price: "Ksh 25000",
  },
]

const ProductShowCase = () => {
  return (
    <div>
      <div className='product-heading'> 
        <h1 className='text-3xl md:text-5xl font-bold'>TASTE THE ORIGIN</h1>
      </div>

      <div className='product-container flex flex-col md:flex-row'>
        {coffeeProducts.map((product) => (
          <div key={product.id} className='product-card'>
            
            {/* only show image if it exists */}
            {product.image && (
              <img src={product.image} alt="coffee product" className='product-image rounded md:h-auto'/>
            )}

            <div className='flex flex-row justify-between w-full '> 
            {/* only show name if it exists */}
            {product.name && <h4 className='text-2xl'>{product.name}</h4>}

            {/* only show price if it exists */}
            {product.price && <p className='text-my-custom-orange-light text-2xl'>{product.price}</p>}

            </div>

            {/* description for the text-only card */}
            {product.description && <p className='text-center text-xl'>{product.description}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductShowCase

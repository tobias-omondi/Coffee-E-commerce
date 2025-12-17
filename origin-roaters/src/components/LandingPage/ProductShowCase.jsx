// import images here
import coffeeimage1 from '/src/assets/farmer_coffee.webp'
import coffeeimage2 from '/src/assets/coffee_beans.webp'

const coffeeProducts = [
  {
    id: 1,
    image: coffeeimage1,
    name: "Coffee farm",
    price: "......",
  },
  {
    id: 2,
    description: "Single-origin coffees from Kenya, Ethiopia, and beyond. Roasted fresh, delivered fast.",
  },
  {
    id: 3,
    image: coffeeimage2,
    name: "Ripe Coffee",
    price: "Ksh 25000",
  },
]

const ProductShowCase = () => {
  return (
      <div className='mt-10 overflow-hidden'> 
        <h1 className='text-2xl md:text-4xl font-bold text-my-custom-warm px-4'>TASTE THE ORIGIN</h1>
        
      <div className='flex flex-col md:flex-row justify-center items-center mt-10 md:px-10 px-5 gap-10'>
        {coffeeProducts.map((product) => (
          <div key={product.id} className='md:w-full gap-10'>
            
            {/* only show image if it exists */}
            {product.image && (
              <img src={product.image} alt="coffee product" className='rounded h-[400px] w-[700px] object-cover'/>
            )}

            <div className='flex flex-row justify-between w-full '> 
            {/* only show name if it exists */}
            {product.name && <h4 className='text-xl italic font-bold text-amber-300'>{product.name}</h4>}

            {/* only show price if it exists */}
            {product.price && <p className='text-gray-900 text italic'>{product.price}</p>}

            </div>

            {/* description for the text-only card */}
            {product.description && <p className='text-center text-xl text-my-custom-warm font-light'>{product.description}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductShowCase

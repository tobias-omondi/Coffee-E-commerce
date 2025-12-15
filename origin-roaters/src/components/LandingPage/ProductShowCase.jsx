// import images here
import coffeeimage1 from '/src/assets/coffee-563800_1280.avif'
import coffeeimage2 from '/src/assets/coffee-3759024_1280.avif'

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
      <div className='m-10 overflow-hidden'> 
        <h1 className='text-3xl md:text-5xl font-bold text-my-custom-warm'>TASTE THE ORIGIN</h1>
        
      <div className='flex flex-col md:flex-row justify-center items-center mt-10'>
        {coffeeProducts.map((product) => (
          <div key={product.id} className='w-full'>
            
            {/* only show image if it exists */}
            {product.image && (
              <img src={product.image} alt="coffee product" className='rounded h-[450px] w-[700px] object-cover'/>
            )}

            <div className='flex flex-row justify-between w-full '> 
            {/* only show name if it exists */}
            {product.name && <h4 className='text-xl italic font-bold text-my-custom-warm'>{product.name}</h4>}

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

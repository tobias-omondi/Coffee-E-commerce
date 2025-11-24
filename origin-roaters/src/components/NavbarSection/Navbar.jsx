import React from 'react'
import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar-background flex flex-row justify-between items-center p-4'>
        <h1 className='heading-text text-3xl logo'>Origin <span className='span-logo'> Roasters </span> </h1>
    
      {/* Nav links */}

      <div className=''>
        <ul className='text-my-custom-warm flex flex-row gap-12 px-5 font-extrabold'>
          <li> <Link to="/"> HOME</Link> </li>
          <li> <Link to = "/about">ABOUT</Link> </li>
          <li> <Link to = "/product" >PRODUCT</Link> </li>
          <li> <Link to = "/subscription">SUBSCRIPTION</Link> </li>
          <li> 
            <Link to='cart'>
             <ShoppingCart /> 
            </Link>
            </li>
          <li> <Link to="/contact">CONTACT</Link> </li>
        </ul>
      </div>

      </nav>
    </div>
  )
}

export default Navbar

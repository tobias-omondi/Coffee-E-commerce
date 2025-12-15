import React, { useState } from 'react'
import { ShoppingCart, Equal, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const NavLinks = ({ onClick } = {}) => (
    <>
      <li> <Link to="/" onClick={onClick}>HOME</Link> </li>
      <li> <Link to="/about" onClick={onClick}>ABOUT</Link> </li>
      <li> <Link to="/product" onClick={onClick}>PRODUCT</Link> </li>
      <li> <Link to="/subscription" onClick={onClick}>SUBSCRIPTION</Link> </li>
      <li>
        <Link to="cart" onClick={onClick} aria-label="Cart">
          <ShoppingCart />
        </Link>
      </li>
      <li> <Link to="/contact" onClick={onClick}>CONTACT</Link> </li>
    </>
  )

  return (
    <nav className='w-full md:w-3/4 navbar-background flex items-center justify-between rounded-3xl mx-auto px-3 py-3 relative'>
      <h1> <span className='span-logo'> Roasters </span> </h1>

      {/* Desktop links */}
      <ul className='hidden md:flex text-my-custom-warm flex-row gap-5 px-5 font-normal items-center'>
        <NavLinks />
      </ul>

      {/* Mobile actions: cart + menu button */}
      <div className='flex items-center gap-3 md:hidden'>
        {/* <Link to='cart' className='text-my-custom-warm'>
          <ShoppingCart />
        </Link> */}
        <button
          aria-label='Toggle menu'
          onClick={() => setOpen(prev => !prev)}
          className='p-2 rounded-md'
        >
          {open ? <X size={25}/> : <Equal size={25} />}
        </button>
      </div>

      {/* Mobile dropdown/menu */}
      {open && (
        <div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-11/12 sm:w-96 bg-green-950 rounded-xl shadow-md py-4 z-50 md:hidden'>
          <ul className='flex flex-col gap-3 text-center text-my-custom-warm font-medium mx-auto'>
            <NavLinks onClick={() => setOpen(false)} />
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar

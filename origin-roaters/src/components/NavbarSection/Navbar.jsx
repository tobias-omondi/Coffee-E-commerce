import React, { useState } from 'react'
import { Equal, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  const [open, setOpen] = useState(false)

  const NavLinks = ({ onClick } = {}) => (
    <>
      {/* <li> <Link to="/" onClick={onClick}>HOME</Link> </li> */}
      <li> <Link to="/product" onClick={onClick}>PRODUCT</Link> </li>
      <li> <Link to="/about" onClick={onClick}>ABOUT</Link> </li>
      {/* <li> <Link to="/subscription" onClick={onClick}>SUBSCRIPTION</Link> </li> */}
      <li>
        <Link to="/login" onClick={onClick} aria-label='User_account'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
          <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
        </svg>
   </Link>
      </li>
      <li>
        <Link to="cart" onClick={onClick} aria-label="Cart">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
             <path fillRule="evenodd" d="M6 5v1H4.667a1.75 1.75 0 0 0-1.743 1.598l-.826 9.5A1.75 1.75 0 0 0 3.84 19H16.16a1.75 1.75 0 0 0 1.743-1.902l-.826-9.5A1.75 1.75 0 0 0 15.333 6H14V5a4 4 0 0 0-8 0Zm4-2.5A2.5 2.5 0 0 0 7.5 5v1h5V5A2.5 2.5 0 0 0 10 2.5ZM7.5 10a2.5 2.5 0 0 0 5 0V8.75a.75.75 0 0 1 1.5 0V10a4 4 0 0 1-8 0V8.75a.75.75 0 0 1 1.5 0V10Z" clipRule="evenodd" />
          </svg>
        </Link>
      </li>
    </>
  )

  return (
    <nav className='w-4/5 md:w-3/4 navbar-background flex items-center justify-between rounded-3xl mx-auto px-3 py-3 relative'>
      <Link to= "/" aria-label='Home' >
        <h1> <span className='span-logo text-amber-300'> RS </span> </h1>
      </Link>
      {/* Desktop links */}
      <ul className='hidden md:flex text-my-custom-warm font-black flex-row gap-5 px-5 items-center'>
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

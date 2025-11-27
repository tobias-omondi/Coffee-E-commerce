import React from 'react'

// importing css
import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer-container'>

      <div className='footer-content'>
      <div className='logo-footer'>
        <h2>ORIGIN ROASTERS</h2>
        <p>Origin Roasters — crafted at the source, roasted with intention, brewed for people who care about flavor and story</p>

        <div className='form-subscription'>
          {/* form subscription */}
          <form>
            <label htmlFor='email'> Subscribe to our news latter</label>
            <input type='email' id='email' name='email' placeholder='Enter Your Email' />
            <button type='submit'>Subscribe</button>
          </form>
        </div>
      </div>

      {/* social media links */}
      <div className='footer-links mt-auto'>
        <h1>SOCIALS</h1>
        <h6>INSTAGRAM</h6>
        <h6>X</h6>
        <h6>FACEBOOK</h6>
        <h6>BEHANCE</h6>

       {/* QUICK LINKD */}
        <h1>SOCIALS</h1>
        <h6>PRODUCT</h6>
        <h6>ABOUT US</h6>
      </div>
      </div>

      {/* last words for footer*/}

      <div className='footer-last-words'>
        <p>©ORIGIN ROASTERS {new Date().getFullYear()}</p>
        <div>
          <p>Privacy Policy</p>
        </div>
        <div>
          <p>developed by Tobias Ogola</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

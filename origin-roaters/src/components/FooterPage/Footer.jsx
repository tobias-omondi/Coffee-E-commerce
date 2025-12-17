import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 md:p-10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-amber-300">ORIGIN ROASTERS</h2>
            <p className="text-gray-300">Origin Roasters — crafted at the source, roasted with intention, brewed for people who care about flavor and story.</p>

            <form className="mt-4 flex max-w-md" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="email" className="sr-only">Subscribe to our newsletter</label>
              <input id="email" name="email" type="email" placeholder="Enter your email" className="flex-1 px-3 py-2 rounded-l-md focus:outline-none text-black" />
              <button type="submit" className="bg-amber-300 text-black px-4 py-2 rounded-r-md font-medium">Subscribe</button>
            </form>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Socials</h3>
            <ul className="space-y-1 text-gray-300">
              <li>Instagram</li>
              <li>X</li>
              <li>Facebook</li>
              <li>Behance</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-1 text-gray-300">
              <li>Product</li>
              <li>About Us</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-my-custom-green-light flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© ORIGIN ROASTERS {new Date().getFullYear()}</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-amber-300">Privacy Policy</a>
            <span>developed by Tobias</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
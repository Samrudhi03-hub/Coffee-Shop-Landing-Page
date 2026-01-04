import React, { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='bg-[#F3E8D6] fixed top-0 left-0 w-full z-10'>
      
      {/* MAIN NAVBAR */}
      <div
        className='flex lg:justify-around xl:justify-between items-center
        px-4 sm:px-4 lg:px-10 xl:px-30
        py-2'
      >
        {/* LOGO */}
        <div>
          <h2 className='text-[#b8803b] font-bold uppercase xl:text-2xl sm:text-lg tracking-wider'>
            SARONE
          </h2>
          <h4 className='text-[#cba574] font-semibold uppercase tracking-widest sm:text-sm'>
            Freshly Brewed
          </h4>
        </div>

        {/* DESKTOP LINKS (UNCHANGED) */}
        <div className='hidden sm:block'>
          <a className='xl:text-xl sm:text-sm font-medium mr-6' href="#home">Home</a>
          <a className='xl:text-xl sm:text-sm font-medium mr-6' href="#menu">Menu</a>
          <a className='xl:text-xl sm:text-sm font-medium mr-6' href="#story">Our Story</a>
          <a className='xl:text-xl sm:text-sm font-medium mr-6' href="#location">Locations</a>
          <a className='xl:text-xl sm:text-sm font-medium mr-6' href="#contact">Contact</a>
          <a className='xl:text-xl sm:text-sm font-medium mr-6' href="#menu">Order Now</a>
        </div>

        {/* HAMBURGER ICON (MOBILE ONLY) */}
        <div className='sm:hidden'>
          <button
            onClick={() => setOpen(!open)}
            className='text-2xl font-bold px-60'
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className='sm:hidden flex flex-col gap-4 px-4 pb-4 bg-[#F3E8D6]'>
          <a onClick={() => setOpen(false)} href="#home">Home</a>
          <a onClick={() => setOpen(false)} href="#menu">Menu</a>
          <a onClick={() => setOpen(false)} href="#story">Our Story</a>
          <a onClick={() => setOpen(false)} href="#location">Locations</a>
          <a onClick={() => setOpen(false)} href="#contact">Contact</a>
          <a onClick={() => setOpen(false)} href="#menu">Order Now</a>
        </div>
      )}
    </div>
  )
}

export default Navbar

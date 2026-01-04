import React from 'react'

const Navbar = () => {
  return (
    <div className='flex lg:justify-around xl:justify-between xl:px-30 items-center lg:px-10 px-40 sm:px-4 sm:gap-3 py-2 bg-[#F3E8D6] fixed top-0 left-0 w-full z-10'>
        <div>
            <h2 className='text-[#b8803b] font-bold uppercase xl:text-2xl sm:text-lg tracking-wider'>SARONE</h2>
            <h4 className='text-[#cba574] font-semibold uppercase tracking-widest sm:text-sm'>Freshly Brewed</h4>
        </div>
        <div>
            <a className='xl:text-xl sm:text-sm font-medium mr-6' href="#home">Home</a>
            <a className='xl:text-xl sm:text-sm font-medium mr-6' href="#menu">Menu</a>
            <a className='xl:text-xl sm:text-sm font-medium mr-6' href="#story">Our Story</a>
            <a className='xl:text-xl sm:text-sm font-medium mr-6' href="#location">Locations</a>
            <a className='xl:text-xl sm:text-sm font-medium mr-6' href="#contact">Contact</a>
            <a className='xl:text-xl sm:text-sm font-medium mr-6' href="#menu">Order Now</a>
        </div>
        
    </div>
  )
}

export default Navbar
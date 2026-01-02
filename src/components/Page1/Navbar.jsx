import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around items-center px-10 py-2 bg-[#F3E8D6] fixed top-0 left-0 w-full z-10'>
        <div>
            <h2 className='text-[#b8803b] font-bold uppercase text-2xl tracking-wider'>SARONE</h2>
            <h4 className='text-[#cba574] font-semibold uppercase tracking-widest'>Freshly Brewed</h4>
        </div>
        <div>
            <a className='text-xl font-medium mr-6' href="#home">Home</a>
            <a className='text-xl font-medium mr-6' href="#menu">Menu</a>
            <a className='text-xl font-medium mr-6' href="#story">Our Story</a>
            <a className='text-xl font-medium mr-6' href="#location">Locations</a>
            <a className='text-xl font-medium mr-6' href="#contact">Contact</a>
            <a className='text-xl font-medium mr-6' href="#menu">Order Now</a>
        </div>
        
    </div>
  )
}

export default Navbar
import {Instagram, MapPin, Phone}  from 'lucide-react'
import React from 'react'

const Page4 = () => {
  return (
    <div id='contact' className='h-72 lg:h-40 xl:h-40 sm:h-40 w-full py-6 flex flex-col justify-between bg-amber-950 text-white gap-2'>
        <div className='flex flex-col sm:flex-row gap-6 justify-around px-4'>
            <div>
            <h3 className='font-bold text-xs lg:text-[16px]'>Follow Us</h3>
            <a 
            href='#'
            className='text-xs lg:text-sm xl:text-sm sm:text-sm font-semibold'>sarone@coffee</a>
        </div>
        <div>
            <h3 className='flex items-center font-bold gap-1 text-xs lg:text-[16px]'><Instagram size={14} /> Instagram</h3>
            <a 
            className='text-xs lg:text-sm xl:text-sm sm:text-sm font-semibold cursor-pointer'>sarone.coffee</a>
        </div>
        <div>
            <h3 className='flex items-center font-bold gap-1 text-xs lg:text-[16px]'><MapPin size={14} /> Visit Us</h3>
            <h4 className='text-xs lg:text-sm xl:text-sm sm:text-sm font-semibold'>45 Bean Avenue, City Center</h4>
        </div>
        <div>
            <h3 className='flex items-center font-bold gap-1 text-xs lg:text-[16px]'><Phone size={14} /> Call Us</h3>
            <h4 className='text-xs lg:text-sm xl:text-sm sm:text-sm font-semibold'>+91 98765 43210</h4>
        </div>
        </div>

        <div>
            <h3 className='text-center pb-3 font-semibold'>© 2026 Sarone Coffee</h3>
        </div>
        
    </div>
  )
}

export default Page4
import {Instagram, MapPin, Phone}  from 'lucide-react'
import React from 'react'

const Page4 = () => {
  return (
    <div id='contact' className=' h-40 w-full py-6 flex flex-col justify-between bg-amber-950 text-white'>
        <div className='flex justify-around'>
            <div>
            <h3 className='font-bold'>Follow Us</h3>
            <a 
            href='#'
            className='text-sm font-semibold'>sarone@coffee</a>
        </div>
        <div>
            <h3 className='flex items-center font-bold gap-1'><Instagram size={14} /> Instagram</h3>
            <a 
            className='text-sm font-semibold cursor-pointer'>sarone.coffee</a>
        </div>
        <div>
            <h3 className='flex items-center font-bold gap-1'><MapPin size={14} /> Visit Us</h3>
            <h4 className='text-sm font-semibold'>45 Bean Avenue, City Center</h4>
        </div>
        <div>
            <h3 className='flex items-center font-bold gap-1'><Phone size={14} /> Call Us</h3>
            <h4 className='text-sm font-semibold'>+91 98765 43210</h4>
        </div>
        </div>

        <div>
            <h3 className='text-center pb-3 font-semibold'>© 2026 Sarone Coffee</h3>
        </div>
        
    </div>
  )
}

export default Page4
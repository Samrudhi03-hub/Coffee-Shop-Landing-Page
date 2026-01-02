import { Coffee, MapPin } from 'lucide-react'
import React from 'react'

const Page3 = () => {
  return (
    <div id='location' className='flex justify-between bg-[#AD8E74] pl-30 h-60'>
        <div className='py-10  mr-40 flex flex-col justify-between'>
            <h2 className='text-white text-3xl tracking-wide font-semibold'>Morning Happy Hours</h2>
            <p className='text-orange-100 py-3 text-sm'>Start your day with freshly brewed coffee, warm aromas, and a calm café vibe. Enjoy special morning blends crafted to energize your mornings and slow down your rush.</p>
            <div className='flex justify-between text-white text-xs '>
                <a className='flex gap-1 text-orange-100 items-center' href="#menu"><Coffee color='white' size={14} />Explore Morning Menu</a>
                <a className='flex gap-1 text-orange-100 items-center' href="#home"><MapPin color='white' size={14} />Visit Our Café</a>
            </div>
        </div>
        <div className='h-full pl-10 w-250 object-cover'>
            <img className='h-full' src="./coffee3n.png" alt="" />
        </div>
    </div>
  )
}

export default Page3
import React from 'react'

const HeroContent = () => {
    const orderFunc = () => {
        alert('Coffee is on the way!')
    }
  return (
    <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-around px-40 lg:px-30 py-20'>
            <div>
                <h2 className='text-white text-4xl font-bold tracking-wider leading-snug mb-2'>Savor the <br />Perfect Brew!</h2>
                <p className='text-[#F3E8D6] text-xs font-medium'>Where Every Cup Tells a Story
                    <br />Freshly brewed coffee made just for you.</p>
            </div>
            <div>
                <button className='bg-[#cf9e7b] text-[#F3E8D6] px-6 py-4 rounded-full text-xs mb-4 xl:mb-8 cursor-pointer' onClick={orderFunc}>Order Your Brew</button>
            </div>
            
        </div>
  )
}

export default HeroContent
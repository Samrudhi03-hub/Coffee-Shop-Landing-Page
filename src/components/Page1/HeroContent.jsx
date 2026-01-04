import React from 'react'

const HeroContent = () => {
    const orderFunc = () => {
        alert('Coffee is on the way!')
    }
  return (
    <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-around px-40 sm:px-4 lg:px-30 lg:py-20 xl:py-20 sm:py-30'>
            <div className=''>
                <h2 className='text-white xl:text-4xl lg:text-4xl sm:text-2xl font-bold tracking-wider leading-snug mb-2'>Savor the <br />Perfect Brew!</h2>
                <p className='text-[#F3E8D6] xl:text-xs lg:text-xs sm:text-[9px] font-medium'>Where Every Cup Tells a Story
                    <br />Freshly brewed coffee made just for you.</p>
            </div>
            <div>
                <button className='bg-[#cf9e7b] text-[#F3E8D6] lg:px-6 lg:py-4 xl:px-6 xl:py-4 rounded-full lg:text-xs xl:text-xs lg:mb-4 xl:mb-8 sm:mb-32 sm:text-[10px] sm:px-4 sm:py-3 cursor-pointer' onClick={orderFunc}>Order Your Brew</button>
            </div>
            
        </div>
  )
}

export default HeroContent
import React from 'react'

const HeroContent = () => {
    const orderFunc = () => {
        alert('Coffee is on the way!')
    }
  return (
    <div className='absolute inset-0 flex flex-col justify-center pt-50 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 gap-10'>
            <div>
                <h2 className='text-white text-2xl xl:text-4xl lg:text-4xl sm:text-2xl font-bold tracking-wider leading-snug mb-2'>Savor the <br />Perfect Brew!</h2>
                <p className='text-[#f2e7e7] mb-8 lg:text-[#F3E8D6] sm:text-[#F3E8D6] xl:text-[#F3E8D6] text-[10px] xl:text-xs lg:text-xs sm:text-[9px] font-bold lg:font-medium sm:font-medium xl:font-medium'>Where Every Cup Tells a Story
                    <br />Freshly brewed coffee made just for you.</p>
            </div>
            <div>
                <button className='bg-[#cf9e7b] text-[#F3E8D6] text-[10px] px-4 py-3 lg:px-6 lg:py-4 xl:px-6 xl:py-4 rounded-full lg:text-xs xl:text-xs lg:mb-4 mt-10 xl:mb-8 sm:mb-32 sm:text-[10px] sm:px-4 sm:py-3 cursor-pointer' onClick={orderFunc}>Order Your Brew</button>
            </div>
            
        </div>
  )
}

export default HeroContent
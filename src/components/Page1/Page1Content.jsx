import React from 'react'
import HeroContent from './HeroContent'

const Page1Content = () => {
  return (
    <div className='h-full w-full relative'>
        <img className='h-full w-full object-cover' src="/hero-img.png" alt="" />
        <HeroContent />
    </div>
  )
}

export default Page1Content
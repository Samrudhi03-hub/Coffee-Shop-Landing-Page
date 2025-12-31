import React from 'react'

const Page2Cards = (props) => {
  return (
    <div className='w-60 h-full bg-[#FBF5EB] rounded-xl overflow-hidden'>
            <img className='h-1/2 w-full object-cover' src='./cards/card1.png' alt="" />
            <div className='px-3 pt-4'>
              <h3 className='text-2xl font-bold tracking-wide'>{props.title}</h3>
              <p className='text-sm text-justify tracking-tighter py-3'>{props.desc}</p>
              <button className='bg-amber-950 text-white p-2 rounded-full text-sm w-full'>Explore More</button>
            </div>
          </div>
  )
}

export default Page2Cards
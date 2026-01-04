import React from 'react'
import Page2Story from './Page2Story'
import Page2Cards from './Page2Cards'

const Page2 = (props) => {
  return (
    <div className='h-full w-full bg-[#F3E8D6] px-4 xl:px-30 lg:px-30 sm:px-4'>
        <Page2Story />

        {/* page 2 cards */}
        <div className='pt-16 pb-16 lg:pt-20 xl:pt-20 lg:pb-20 xl:pb-20 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-4 sm:grid-cols-2 xl:pr-20 lg:gap-30 sm:gap-10'>
          {/* card1 */}
          {props.cards.map((elem, idx) => {
            return <Page2Cards key={idx} img={elem.img} title={elem.title} desc={elem.desc}/>
          })}


        </div>
    </div>
  )
}

export default Page2
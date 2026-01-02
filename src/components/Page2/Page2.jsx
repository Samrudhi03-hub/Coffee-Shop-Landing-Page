import React from 'react'
import Page2Story from './Page2Story'
import Page2Cards from './Page2Cards'

const Page2 = (props) => {
  return (
    <div className='h-full w-full bg-[#F3E8D6] px-30'>
        <Page2Story />

        {/* page 2 cards */}
        <div className='pt-20 pb-20 grid grid-cols-4 gap-5'>
          {/* card1 */}
          {props.cards.map((elem, idx) => {
            return <Page2Cards key={idx} img={elem.img} title={elem.title} desc={elem.desc}/>
          })}


        </div>
    </div>
  )
}

export default Page2
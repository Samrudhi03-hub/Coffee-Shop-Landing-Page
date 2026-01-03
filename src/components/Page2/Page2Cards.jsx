import React from 'react'

const Page2Cards = (props) => {
  const handleExplore = () => {
    alert("☕ Full menu details coming soon. Stay tuned!");
  };
  return (
    <div id='menu' className='w-60 lg:w-80 xl:w-70 h-full bg-[#FBF5EB] rounded-xl overflow-hidden'>
            <img className='h-1/2 w-full object-cover' src={props.img} alt="" />
            <div className='px-3 pt-4'>
              <h3 className='text-2xl font-bold tracking-wide'>{props.title}</h3>
              <p className='text-sm text-justify tracking-tighter py-3'>{props.desc}</p>
              <button 
              onClick={handleExplore}
              className='bg-amber-950 text-white p-2 rounded-full text-sm w-full cursor-pointer lg:mt-10 lg:p-4 xl:mb-15'>Explore More</button>
            </div>
    </div>
  )
}

export default Page2Cards
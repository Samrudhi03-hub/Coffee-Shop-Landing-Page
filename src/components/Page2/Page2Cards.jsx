import React from 'react'

const Page2Cards = (props) => {
  const handleExplore = () => {
    alert("☕ Full menu details coming soon. Stay tuned!");
  };
  return (
    <div id='menu' className='w-full max-w-sm mx-auto lg:w-80 xl:w-70 sm:w-70 h-120 lg:h-full sm:h-full xl:h-full bg-[#FBF5EB] rounded-xl overflow-hidden'>
            <img className='h-1/2 w-full object-cover' src={props.img} alt="" />
            <div className='px-3 pt-4'>
              <h3 className='text-xl lg:text-2xl xl:text-2xl sm:text-2xl font-bold tracking-wide'>{props.title}</h3>
              <p className='text-sm text-justify tracking-tighter py-2 lg:py-3 xl:py-3 sm:py-3'>{props.desc}</p>
              <button 
              onClick={handleExplore}
              className='bg-amber-950 text-white p-2 rounded-full text-sm w-full cursor-pointer mt-10 lg:mt-10 lg:p-4 xl:mb-15'>Explore More</button>
            </div>
    </div>
  )
}

export default Page2Cards
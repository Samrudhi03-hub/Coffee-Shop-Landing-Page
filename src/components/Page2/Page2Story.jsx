import React from 'react'

const Page2Story = () => {

  const readStory = () => {
    alert('☕ Our full story is coming soon. Stay tuned!');
  }

  return (
    <div id='story' className='flex justify-between'>
            <div className='pt-7 pr-12'>
                <h3 className='uppercase text-[#3B2F2F] font-bold tracking-wide '>Featured</h3>
                <h2 className='text-4xl font-extrabold text-[#4d3423] pt-1 '>Why Choose Us?</h2>
                <p className='text-[#674229] text-sm pt-6 text-justify '>At Sarone, every cup tells a story of craftsmanship and care. We source high-quality beans, roast them to perfection, and brew with precision to deliver a smooth, flavorful experience in every sip. Our warm ambiance and thoughtfully crafted coffee make Sarone the perfect place to pause, relax, and savor the moment.</p>
                <button 
                onClick={readStory}
                className='bg-[#3e2616] text-[#F3E8D6] text-sm mt-4 px-4 py-2 rounded-full cursor-pointer'>Read Our Story</button>
            </div>
            <img className='h-100 w-400 object-cover rounded-b-xl' src="/page2coffee.png" alt="" />
        </div>
  )
}

export default Page2Story
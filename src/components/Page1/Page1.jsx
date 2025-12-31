import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'

const Page1 = () => {
  return (
    <div id='page1' className='h-screen w-full overflow-y-hidden'>
        <Navbar />
        <Page1Content />
    </div>
  )
}

export default Page1
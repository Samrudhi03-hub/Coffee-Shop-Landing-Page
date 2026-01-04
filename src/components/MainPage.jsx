import React from 'react'
import Page1 from './Page1/Page1'
import Page2 from './Page2/Page2'
import Page3 from './Page3/Page3'
import Page4 from './Page4/Page4'
import Space from './Space'

const MainPage = (props) => {
  return (
    <div className="overflow-x-hidden">
        <Page1 />
        <Page2 cards={props.cards} />
        <Page3 />
        <Space />
        <Page4 />
    </div>
  )
}

export default MainPage
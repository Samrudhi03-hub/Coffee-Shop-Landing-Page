import React from 'react'
import Page1 from './Page1/Page1'
import Page2 from './Page2/Page2'

const MainPage = (props) => {
  return (
    <div>
        <Page1 />
        <Page2 cards={props.cards} />
    </div>
  )
}

export default MainPage
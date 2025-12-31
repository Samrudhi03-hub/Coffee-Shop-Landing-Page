import React from 'react'
import MainPage from './components/MainPage'

const App = () => {

  const card = [
    {
      img: './cards/card1.png',
      title: 'Espresso',
      desc: 'A bold and intense shot crafted from finely ground beans, delivering rich crema and deep flavors in every sip.Perfect for true coffee lovers'
    },
    {
      img: './cards/card2n.png',
      title: 'Latte',
      desc: 'A smooth blend of rich espresso and steamed milk, finished with delicate latte art. Creamy, comforting, and ideal for a relaxed coffee moment.'
    },
    {
      img: './cards/card3.png',
      title: 'Cold Brew',
      desc: 'Slow-steeped for hours to extract a naturally smooth and refreshing taste. Lightly sweet, low in acidity, and perfect for warm days.'
    },
    {
      img: './cards/card4.png',
      title: 'Coffee',
      desc: 'A classic, well-balanced cup brewed to highlight aroma and flavor. Simple, satisfying, and made for everyday coffee lovers.'
    }
  ]

  return (
    <div>
      <MainPage cards={card}/>
    </div>
  )
}

export default App
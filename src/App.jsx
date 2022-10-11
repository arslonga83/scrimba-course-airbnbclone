import Nav from './Components/Nav'
import Hero from './Components/Hero'
import Card from './Components/Card'
import data from './data.js'
import './App.css'

function App() {
  const cardsArray = data.map((card) => {
    return <Card 
       img={card.coverImg}
       rating={card.stats.rating}
       reviewCount={card.stats.reviewCount}
       location={card.location}
       title={card.title}
       price={card.price}
    />
  })
 
  return (
    <div>
      <Nav />
      <Hero />
      {cardsArray}
    </div>
  )
}

export default App

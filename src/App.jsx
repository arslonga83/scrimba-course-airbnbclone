import Nav from './Components/Nav'
import Hero from './Components/Hero'
import Card from './Components/Card'
import data from './data.js'
import './App.css'

function App() {
  const cardsArray = data.map((card) => {
    return <Card 
       key={card.id}
       img={card.coverImg}
       rating={card.stats.rating}
       reviewCount={card.stats.reviewCount}
       location={card.location}
       title={card.title}
       price={card.price}
       openSpots={card.openSpots}
    />
  })
 
  return (
    <div>
      <Nav />
      <Hero />
      <section className='cards'>
        {cardsArray}
      </section>
    </div>
  )
}

export default App

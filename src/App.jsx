import Nav from './Components/Nav'
import Hero from './Components/Hero'
import Card from './Components/Card'
import data from './data.js'
import './App.css'

function App() {
  const cardsArray = data.map((card) => {
    return <Card 
       key={card.id}
       card={card}
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

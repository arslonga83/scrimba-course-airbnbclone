import collage from '../assets/photos.jpg'

function Hero() {
  return (
    <div className='hero'>
      <img src={collage} className='collage'></img>
      <h1 className='hero-title'>Online Experiences</h1>
      <p className='hero-p'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </div>
  )
}

export default Hero
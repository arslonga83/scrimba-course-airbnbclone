import image from '../assets/image 12.png'
import star from '../assets/Star 1.png'

function Card() {
  return (
    <div className='card'>
      <img src={image} />
      <div className='stats'>
        <img src={star} />
        <p>5.0 (6) USA</p>
      </div>
      <p>Life lessons with Katie Zaferes
</p>
      <p>From $136 / person
</p>
    </div>
  )
}

export default Card
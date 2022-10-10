import image from '../assets/image 12.png'
import star from '../assets/Star 1.png'

function Card() {
  return (
    <div className='card'>
      <img src={image} />
      <div className='stats'>
        <img src={star} />
        <p>5.0 <span className='grey'>(6) USA</span></p>
      </div>
      <p>Life lessons with Katie Zaferes
</p>
      <p><span className='bold'>From $136 </span>/ person
</p>
    </div>
  )
}

export default Card
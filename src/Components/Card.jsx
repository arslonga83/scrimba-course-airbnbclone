import star from '../assets/Star 1.png'

function Card({img, rating, reviewCount, country, title, price}) {
  
  return (
    <div className='card'>
      <img src={`/src/assets/${img}`} />
      <div className='stats'>
        <img src={star} />
        <span>{rating}</span>
        <span className='grey'>({reviewCount}) • </span>
        <span className='grey'>{country}</span>
      </div>
      <p>{title}
</p>
      <p><span className='bold'>From ${price} </span>/ person
</p>
    </div>
  )
}

export default Card
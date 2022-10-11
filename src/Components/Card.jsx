import star from '../assets/Star 1.png'

function Card({img, rating, reviewCount, location, title, price, openSpots}) {
  let badgeText
  if (openSpots === 0) {
    badgeText = 'SOLD OUT'
  } else if (location === 'Online') {
    badgeText = 'Online'
  }

  return (
    <div className='card'>
      {badgeText && <div className='card-badge'>{badgeText}</div>}
      <img src={`/src/assets/${img}`} className='pic'/>
      <div className='stats'>
        <img src={star} />
        <span>{rating}</span>
        <span className='grey'>({reviewCount}) • </span>
        <span className='grey'>{location}</span>
      </div>
      <p>{title}
</p>
      <p><span className='bold'>From ${price} </span>/ person
</p>
    </div>
  )
}

export default Card
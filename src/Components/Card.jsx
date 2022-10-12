import star from '../assets/Star 1.png'

function Card({card}) {
  let badgeText
  if (card.openSpots === 0) {
    badgeText = 'SOLD OUT'
  } else if (card.location === 'Online') {
    badgeText = 'Online'
  }

  return (
    <div className='card'>
      {badgeText && <div className='card-badge'>{badgeText}</div>}
      <img src={`/src/assets/${card.coverImg}`} className='pic'/>
      <div className='stats'>
        <img src={star} />
        <span>{card.stats.rating}</span>
        <span className='grey'>({card.stats.reviewCount}) • </span>
        <span className='grey'>{card.location}</span>
      </div>
      <p>{card.title}
</p>
      <p><span className='bold'>From ${card.price} </span>/ person
</p>
    </div>
  )
}

export default Card
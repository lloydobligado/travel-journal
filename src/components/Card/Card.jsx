import React from 'react'
import './Card.scss'

const Card = ({location}) => {
    console.log(location)
  return (
    <div className="card">
        <img src={location.img} alt="" className="card__image" />
        <div className="card__description">
            <div className="card__description__header">
                <div className="card__description__header__location">
                    <img src={location.pin} alt="Pin" className="card__description__header__location__pin"/>
                    <p className="card__description__header__location__txt">{location.country}</p>
                </div>
                <a href={location.link} target="_blank" className="card__description__header__link">View on Google Maps</a>
            </div>
            <h1 className="card__description__title">{location.destination}</h1>
            <p className="card__description__date">{location.date.from} - {location.date.to}</p>
            <p className="card__description__dsc">{location.description}</p>
        </div>
    </div>
  )
}

export default Card
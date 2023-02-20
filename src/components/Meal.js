import React from 'react'
import { Link } from 'react-router-dom'

const Meal = ({id, name, image, category, country}) => {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{country}</h4>
        <p>{category}</p>
        <Link to={`/meal/${id}`} className='btn btn-primary btn-details'>
          details
        </Link>
      </div>
    </article>
  )
}

export default Meal

import React from 'react'
import Meal from './Meal'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const MealList = () => {
  const {meals, loading} = useGlobalContext();
  //console.log(meals)

  if (loading) {
    return <Loading />
  }

  if (meals.length < 1) {
    return (
      <h2 className='section-title'>
        no meals matched your search criteria
      </h2>
    );
  }

  return (
    <section className='section'>
      <h2 className='section-title'>Meals</h2>
      <div className='cocktails-center'>
        {meals.map((item) => {
          return <Meal key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default MealList

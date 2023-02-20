import React from 'react'
import MealList from '../components/MealList'
import SearchForm from '../components/SearchForm'

const Home = () => {
  return (
    <main>
      <SearchForm />
      <MealList />
    </main>
  )
}

export default Home

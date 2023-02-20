import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext()
  const searchValue =React.useRef('');

  React.useEffect(() => {   // without using import
    searchValue.current.focus()
  }, [])

  const searchMeal = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite meal</label>
          <input type='text' id='name' ref={searchValue} onChange={searchMeal}></input>
        </div>
      </form>
    </section>
  )
}

export default SearchForm

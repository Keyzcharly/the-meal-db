import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='

const SingleMeal = () => {
  const {id} = useParams();
  const [loading, setLoading] = React.useState(false);
  const [meal, setMeal] = React.useState(null);

  React.useEffect(() => {
    setLoading(true)
    async function getMeal() {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json();
        if (data.meals) {
          const {strMeal: name, strMealThumb: image, strCategory: category, strArea: country, strYoutube: youtube, strInstructions: instructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5} = data.meals[0]

          const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5]

          const newMeal = {name, image, category, country, youtube, instructions, ingredients}

          setMeal(newMeal)
        } else {
          setMeal(null)
        }
        setLoading(false)
        console.log(data);
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getMeal()
  }, [id])

  if (loading) {
    return <Loading />
  }

  if (!meal) {
    return <h2 className='section-title'>no meal to display</h2>
  }

  const {name, image, category, country, youtube,  instructions, ingredients} = meal;
  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>back home</Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={image} alt={name}/>
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name : </span>
            {name}
          </p>
          <p>
            <span className='drink-data'>category : </span>
            {category}
          </p>
          <p>
            <span className='drink-data'>country : </span>
            {country}
          </p>
          <p>
            <span className='drink-data underline'>youtube : </span>
            <a href={youtube}> click to watch video</a>
          </p>
          <p>
            <span className='drink-data'>ingredients : </span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null
            })}
          </p>
          <p>
            <span className='drink-data'>instructions : </span>
            {instructions}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleMeal

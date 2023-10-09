import React from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '../../hooks/useActions';

function RecipeItem({recipe}) {
  const { favorites } = useSelector(state => state);
  const {toggleFavorites} = useActions();
  const isExists = favorites.some(r => r._id === recipe._id);

  return (
    <div className='my-5 bg-zinc-700 p-3 rounded-lg'>
      <img src={recipe.image} alt={recipe.name} className='w-24 rounded-lg' />
      <h2 className='mb-1'>{recipe.name}</h2>
      <button 
      onClick={() => toggleFavorites(recipe)}
      className='bg-lime-600 rounded-lg p-1 hover:bg-yellow-600 transition-colors ease-in-out duration-300'
      >{isExists ? 'Remove from' : 'Add to'} favorites</button>
    </div>
  )
}

export default RecipeItem

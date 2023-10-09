import React, { useState } from 'react';
import { useCreateRecipeMutation } from '../../store/api/recipe.api';

const defaultValue = {
  name: '',
  image: ''
}

export default function CreateRecipe() {
  const [recipe, setRecipe] = useState(defaultValue)

  const [createRecipe] = useCreateRecipeMutation()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (recipe.name && recipe.image) {
      createRecipe(recipe).then(() => setRecipe(defaultValue))
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Create new recipe:</p>
        <label>
          <input 
            type="text" 
            placeholder='Name' 
            value={recipe.name} 
            onChange={e => setRecipe({...recipe, name: e.target.value})} 
            className='block mb-2 rounded-lg p-1 text-black'
          />
        </label>
        <label>
          <input 
            type="text" 
            placeholder='Image' 
            value={recipe.image} 
            onChange={e => setRecipe({...recipe, image: e.target.value})} 
            className='block mb-2 rounded-lg p-1 text-black'
          />
        </label>
        <button 
          type='submit'
          className='bg-lime-600 rounded-lg p-1 focus:bg-red-400 transition-colors ease-in-out duration-300 block'
        >Create</button>
      </form>
    </div>
  )
}

import React from 'react'
import {BsFillBookmarkHeartFill} from 'react-icons/bs';
import { useFavorites } from '../../hooks/useFavorites';

export default function Header() {
  const { favorites } = useFavorites();

  return (
    <header className='text-xl flex justify-end relative'>
      <BsFillBookmarkHeartFill />
      <span className='text-sm bg-teal-700 rounded-sm w-3 h-3 flex items-center justify-center absolute top-3 right-3'>{favorites.length}</span>
    </header>
  ) 
}



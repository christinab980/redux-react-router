import React from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedBreeds } from '../features/selectedBreedsSlice';

const Favorites = () => {
  const data = useSelector(selectSelectedBreeds)

  const selectedBreeds = data && data.map(breed => {
    return (
    <li 
    data-breed={breed} 
    key={breed} 
    >
      {breed}
    </li>
  )  
}) 

  return (
    <>
      <h1>Favorites</h1>
      <ul className="breeds">{selectedBreeds}</ul>
    </>
  )
};

export default Favorites;

import React, { useState }from 'react';
import { useSelector } from 'react-redux';
import { selectBreeds } from '../features/breedsSlice';


const Breeds = () => {
  const [selectedBreeds, setSelectedBreeds] =useState([]);

  const data = useSelector(selectBreeds)

  const handleClick = e => {
    const value = e.target.dataset.breed;
    if (selectedBreeds.indexOf(value) > -1 ) {
      const _selectedBreeds = selectedBreeds.filter(breed => breed !==value)
      setSelectedBreeds(_selectedBreeds);
    } else {
      const  _selectedBreeds = [...selectedBreeds, value]; //spread syntax
      setSelectedBreeds(_selectedBreeds);
    }
  }

  const breeds = data && data.map(breed => {
    return <li data-breed={breed} key={breed} onClick={(handleClick)}>{breed}</li>
  }) 

  return (
    <>
    <h1>Breeds</h1>
    <ui>{breeds}</ui>
    
    </>
  )
};

export default Breeds;

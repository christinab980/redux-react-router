import React, { useEffect, useState } from 'react';

const Quiz = () => {
  const [options, setOptions] = useState([])
  const [answer, setAnswer] = useState([]);

  useEffect(() => {

  const fetchData = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random/4')
    const data = await response.json()
    setOptions(data.message) 
  }
    fetchData()
  
}, []);

  const images = options.map((option) => {
        return (
        <div key={option}> 
        <img src={option} alt="dog img"/>
        </div>
        )
  })

  

  return (
    <>
    <h1>Quiz</h1>

    <div className='dog-imgs'> {images} </div>
    </>
  )
}


export default Quiz;

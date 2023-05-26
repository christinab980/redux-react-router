import React, { useEffect, useState } from 'react';

const Quiz = () => {
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState([]);
  // const [breeds, setBreeds] = useState([]);
  const [randomBreed, setRandomBreed] = useState("");
  const [feedback, setFeedback] = useState("");

  let breeds = []


  useEffect(() => {

  const fetchData = async () => {
    const fetchUrl = 'https://dog.ceo/api/breeds/image/random/4'
    const response = await fetch(fetchUrl);
    const data = await response.json()
    return data.message;
  }

  fetchData().then(data => {
    setOptions(data);
    const breeds = data.map((option) => {
      const breed = option.split("/")[4];
      return breed
    })
    const number = Math.floor(Math.random() * breeds.length)
    setRandomBreed(breeds[number])
  })
}, []);

  const handleClick = (e) => {
    const breed = e.target.getAttribute('data-breed')
    const correctMessage = "Yay! That was CORRECT"
    const wrongMessage = "Bummer! Wrong Answer"
    if(randomBreed === breed) {
      setFeedback(correctMessage)
    } else setFeedback(wrongMessage)
  }

  const images = options.map((option) => {
    return (
    <div key={option}> 
    <img onClick={handleClick} src={option} data-breed={option.split("/")[4]} alt="dog img"/>
    </div>
    )
  })
 
  return (
    <>
    <h1>Quiz</h1>
    <div className='question'> Which image is {randomBreed} breed? </div>
    <div className='dog-imgs'> {images} </div>
    <div className='feedback'> {feedback} </div>
    </>
  )
}


export default Quiz;

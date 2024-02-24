import React from 'react'
import random from '../utils/phrases.json'
import getPhrasesRamon from '../utils/getPhrasesRamon'
import getImageRandom from '../utils/getImageRandom'
import arrayImg from '../utils/arrayImages.json'
import '../style/btnPhrase.css'

const BtnPhrase = ({setButtonPressed, setimageSelected}) => {
   
    const handleClick=()=>{
      const palabra = getPhrasesRamon(random)
      setButtonPressed(palabra)
      setimageSelected(getImageRandom(arrayImg))
    }

  return (
    <div className='btnPhrase'>
        <button onClick={handleClick}>Obtener otra frase</button>
    </div>
  )
}

export default BtnPhrase
import { useState } from 'react'
import random from './utils/phrases.json'
import './style/App.css'
import getPhrasesRamon from './utils/getPhrasesRamon'
import PhraseCard from './components/PhraseCard'
import BtnPhrase from './components/BtnPhrase'
import Footer from './components/Footer'

function App() {
  
  const initialValue= getPhrasesRamon(random)

  const [phraseRandom, setPhrase] = useState(initialValue) 
  const [imageSelected, setimageSelected] = useState(1)
  
  const objectStyle = {
          backgroundImage: `url("img${imageSelected}.jpg")`
  }

  return (
    <>
      <div className='app' style={objectStyle}>
        <h1>Galleta de la Fortuna</h1>
        <PhraseCard phraseRandom={phraseRandom}  />
        <BtnPhrase setButtonPressed={setPhrase} setimageSelected={setimageSelected}/>
        <Footer setAuthor={} />
      </div>
     
    </>
  )
}

export default App

import '../style/phraseCard.css'
const PhraseCard = ({phraseRandom}) => {

  const { phrase } = phraseRandom;
 
  return (
        <div className='phraseCard'>
          <article>
          <p>{phrase}</p>
          </article>
         
        </div>
  )
}

export default PhraseCard
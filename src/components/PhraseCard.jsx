import '../style/phraseCard.css'
const PhraseCard = ({phraseRandom}) => {

  const { phrase, author } = phraseRandom;
 
  return (
        <div className='phraseCard'>
          <article>
          <p>{phrase}</p>
          </article>
          <footer>
            <p>{author}</p>
          </footer>
        </div>
  )
}

export default PhraseCard
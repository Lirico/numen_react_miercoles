




const Quote = ({quote}) => {

    const {text, author} = quote


  return (
    <>
        <blockquote cite='https://api.breakingbadquotes.xyz/v1/quotes'>
            {text}
            <h3>{author}</h3>
        </blockquote>
    </>
  )
}

export default Quote

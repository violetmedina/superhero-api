import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'

const MovieDetails = ({info}) => {
  const [details, setDetails] = useState("")
  const [movie, setMovie] = useState(info)

  useEffect(() => {

    const movieData = async () => {
    let response = await fetch(
      `http://www.omdbapi.com/?i=${info[0].imdbID}&apikey=cc35598`
      )
      let data = await response.json();

  setDetails(data)
}
movieData();
}, [info])



  return (
    //data "Title":"Superman Returns","Year":"2006","imdbID":"tt0348150","Type":"movie","Poster":
    <>
    <br /><br /><br />
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={details.Poster} />
      <Card.Body>
          <Card.Title><h2>{details.Title}</h2></Card.Title>

          <div>
            <ul>
                <li>   Released:  {details.Released}</li>
                <li>   Rated:  {details.Rated}</li>
                <li>   Director:  {details.Director}</li>
                <li>   Plot:  {details.Plot}</li>
                <li>   Type: {details.Type}</li>
            </ul>
          </div>

      </Card.Body>
      </Card>
    </>
  )
}

export default MovieDetails

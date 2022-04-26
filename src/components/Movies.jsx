import React, {useState, useEffect} from 'react'
import MovieDetails from './MovieDetails'
import "./css/Movie.css"


const Movies = () => {
    //year, rated, released, director
    const [movies, setMovies] = useState([]) //hold the articles from API
    const [filteredMov, setFilteredMov] = useState(null)
    const [imdbID, setImdbID] = useState(null)

    useEffect( ()=>{

    const heroData = async () => {
          let response = await fetch(
            'https://www.omdbapi.com/?s=superman&page=100&plot=full&apikey=cc35598'
            )
          let data = await response.json();

          setMovies(data.Search)
      }

    heroData()

  }, [])

  const handleChange = (e, imdbID) => {
    e.preventDefault();

    filterMovie(imdbID);
  }

  const filterMovie = (imdbID) => {
    let filteredMovie = movies.filter(movie => {
      return movie.imdbID == imdbID})

    setFilteredMov(filteredMovie);
  }


    return (
    <>

    <div id='movie'>
        {movies.map((movie, index) =>{
            return (
                    <div id="movie" key={index}>
                      <div id='title'>
                        <img src={movie.Poster} alt="" height="200px"/>
                        <div><a href='#' onClick={(e)=>handleChange(e, movie.imdbID)}>{movie.Title}</a></div>
                      </div>
                    </div>
                  )})}
            {filteredMov == null? "" : <MovieDetails info={filteredMov}/> }
    </div>
    </>
  )
}

export default Movies

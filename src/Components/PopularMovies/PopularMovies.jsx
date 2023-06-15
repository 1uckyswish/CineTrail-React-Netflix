import {useState, useEffect} from 'react'
import MovieCard from '../MovieCard/MovieCard';
import axios from 'axios';

function PopularMovies({baseUrl, apiKey}) {
     const [popularMovies, setPopularMovies] = useState([]);

  useEffect(
    ()=>{
      axios.get(`${baseUrl}popular?api_key=${apiKey}`)
      .then(result=>{
        console.log(result?.data?.results)
        setPopularMovies(result?.data?.results)
      })
       .catch((error)=> console.log(error))
    },[]);
  return (
     <div className="popular-container">
          <h3 className='popular-title'>Popular Movies</h3>
          <div className="popular-cards-wrapper">
            {
              popularMovies.map(movie=> <MovieCard  key={movie?.id} movie={movie} width="200px" height="300px" radius="20px" cardStyle="popular-card"/>)
            }
          </div>
     </div>
  )
}

export default PopularMovies

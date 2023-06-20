import {useEffect, useState} from 'react'
import MovieCard from '../MovieCard/MovieCard'
import axios from 'axios';

function TopRatedMovies({baseUrl, apiKey}) {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(
    ()=>{
       axios.get(`${baseUrl}top_rated?api_key=${apiKey}&language=en-US&page=1`)
      .then(result=>{
        console.log(result?.data?.results)
        setTopRatedMovies(result?.data?.results.slice(0,10))
      })
       .catch((error)=> console.log(error))
    },[])

  return (
    <div className="top-rated-container">
      <h3>Top Rated Movies</h3>
      <div className="top-rated-cards-wrapper">
         {topRatedMovies.map((movie)=>{
        return (
            <MovieCard
            key={movie?.id}
            movie={movie}
            width="200px"
            height="100px"
            radius="8px"
            cardStyle="top-rated-card"
            imgUrl={movie?.backdrop_path}
            movieId={movie?.id}
            />
         )
      })}
      </div>
    </div>
  )
}

export default TopRatedMovies
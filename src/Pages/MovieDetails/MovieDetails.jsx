import {useEffect, useState} from 'react'
import "./MovieDetails.css"
import { useParams } from 'react-router-dom'
import axios from 'axios';
//https://api.themoviedb.org/3/movie/movie_id?language=en-US



function MovieDetails({apiKey, baseUrl}) {
  const { movieId } = useParams();
  const [movie, setMovie] = useState("");



  useEffect(
    ()=>{
       axios.get(`${baseUrl}${movieId}?api_key=${apiKey}&language=en-US&page=1`)
      .then(result=>{
        console.log(result.data);
        setMovie(result.data);
      })
       .catch((error)=> console.log(error))
    },[])
  return (
    <div>
      <h1>{movie.title}</h1>
    </div>
  )
}

export default MovieDetails

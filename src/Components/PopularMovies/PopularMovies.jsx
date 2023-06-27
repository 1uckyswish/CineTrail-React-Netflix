import {useState, useEffect} from 'react'
import MovieCard from '../MovieCard/MovieCard';
import axios from 'axios';

function PopularMovies({baseUrl, apiKey}) {
     const [popularMovies, setPopularMovies] = useState([]);
     const [currentPage, setCurrentPage] = useState(1);
     const pageNumbers = [1,2,3,4,5,6,7,8,9,10];

  useEffect(
    ()=>{
      axios.get(`${baseUrl}popular?api_key=${apiKey}&language=en-US&page=${currentPage}`)
      .then(result=>{
        console.log("lol",result?.data?.results)
        setPopularMovies(result?.data?.results)
      })
       .catch((error)=> console.log(error))
    },[currentPage]);
  return (
     <div className="popular-container">
          <h3 className='popular-title'>Popular Movies</h3>
          <div className="popular-cards-wrapper">
            {
              popularMovies.map((movie)=> (
                <MovieCard
                  key={movie?.id}
                  movie={movie}
                  width="200px"
                  height="300px"
                  radius="16px"
                  cardStyle="popular-card"
                  imgUrl={movie?.poster_path}
                  movieId={movie?.id}/>
                ))
            }
          </div>
          <div className="page-numbers">
            {
              pageNumbers.map((num)=><p className='page-numbers' key={num} onClick={()=> setCurrentPage(num)}>{num}</p>)
            }
          </div>
     </div>
  )
}

export default PopularMovies

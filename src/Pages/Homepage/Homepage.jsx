import "./Homepage.css"
import Slider from '../../Components/Slider/Slider'
import "/src/Components/MovieCard/MovieCard.css"
import PopularMovies from "../../Components/PopularMovies/PopularMovies"
import TopRatedMovies from "../../Components/TopRatedMovies/TopRatedMovies"

function Homepage({apiKey, baseUrl}) {
  return (
    <div className='homepage-container'>
      <Slider apiKey={apiKey} baseUrl={baseUrl} />
      <div className="movies-wrapper">
       <PopularMovies apiKey={apiKey} baseUrl={baseUrl}/>
       <TopRatedMovies />
      </div>
    </div>
  )
}

export default Homepage

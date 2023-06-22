import {useState} from 'react'
import { Link } from 'react-router-dom'
import noImage from "/src/assets/NoPhotoAvailable.png"

function SearchResults({movie, setQuery}) {
    const [imageError, setImageError] = useState(false);
    const imgBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <Link to={`/MovieDetails/${movie?.id}`} className="search-results-item" onClick={()=>{setQuery("");}}>
        <img
        className='result-img'
        alt=""
        src={imageError ? noImage : `${imgBaseUrl}${movie.backdrop_path}`}
        onError={()=>{setImageError(true)}}
        />
    </Link>
  )
}

export default SearchResults






// import {useState} from 'react';
// import { useNavigate } from 'react-router-dom';
// import noImage from "/src/assets/avatar-error.png";
// import "./SearchResults.css";


// function SearchResults({movie, setQuery}) {
//     const navigate = useNavigate();
//     const [imageError, setImageError] = useState(false);

//     const handleNavigation = ()=>{
//         setQuery('')
//         navigate(`/MovieDetails/${movieId}`);
//     };

//   return (
//     <div className='search-results-item' onClick={handleNavigation}>
//         <img className='result-img' src={imageError? noImage : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
//         onError={()=> setImageError(true)}/>
//         <p>{movie.title}</p>
//     </div>
//   )
// }

// export default SearchResults

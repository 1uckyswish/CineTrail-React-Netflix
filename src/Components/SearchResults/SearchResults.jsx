import React,{useState} from 'react'
import { useNavigate} from "react-router-dom";
import noImage from '../../assets/no-image.svg.png'

function SearchResults({movie,setQuery}) {
    const navigate = useNavigate();
    const [imageError, setImageError] = useState(false);


    const handleNavigation=()=>{ 
      setQuery('')
      navigate(`/moviedetails/${movie.id}`)
       window.location.reload(); // Auto-refresh the page
    }
  return (
    <div className="search-results-item" onClick={handleNavigation} >
        <p>{movie.title}</p> 
        <img className="result-img" src={imageError ? 'https://media.istockphoto.com/id/1317594987/vector/no-photographing-prohibition-symbol-sign-photograph-amd-camera-prohibit-icon-logo-vector.jpg?s=612x612&w=0&k=20&c=28EEfqEEiIsTZe2eJ-Dm7NWd9ppOzkuoe_Rp9ZHjtyY=' :`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} 
           onError={() => setImageError(true)} alt=""/>
    </div>
  )
}

export default SearchResults
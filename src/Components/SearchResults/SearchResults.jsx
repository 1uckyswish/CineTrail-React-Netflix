import { useState } from 'react';
import noImage from "/src/assets/NoPhotoAvailable.png";
import { useNavigate } from 'react-router-dom';

function SearchResults({ movie, setQuery }) {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);
  const imgBaseUrl = "https://image.tmdb.org/t/p/w500";

  const handleNavigation = () => {
    setQuery('');
    navigate(`/MovieDetails/${movie?.id}`);
    window.location.reload(); // Reload the page
  };

  return (
    <div className="search-results-item" onClick={handleNavigation}>
      <img
        className='result-img'
        alt=""
        src={imageError ? noImage : `${imgBaseUrl}${movie.backdrop_path}`}
        onError={() => { setImageError(true) }}
      />
      <p>{movie?.title}</p>
    </div>
  );
}

export default SearchResults;

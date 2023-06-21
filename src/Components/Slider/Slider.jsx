import { useEffect, useState } from 'react';
import './Slider.css';
import axios from 'axios';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import StarRatings from 'react-star-ratings';
import Genres from '../Genres/Genres';

function Slider({ apiKey, baseUrl }) {
  const [upcomingMovies, setUpComingMovies] = useState([]);
  const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`${baseUrl}upcoming?api_key=${apiKey}`)
      .then((result) => {
        setUpComingMovies(result.data.results);
        // console.log(result.data.results);
      })
      .catch((error) => console.log('error message', error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % upcomingMovies.length);
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, [upcomingMovies]);

  const sliderStyle = {
    backgroundImage: `url("${imageBaseUrl}${upcomingMovies[index]?.backdrop_path}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '60vh',
    position: 'relative',
    zIndex: "0",
    transition: 'background-image 0.1s ease-in-out', // Added CSS transition
  };

  const handleRight = () => {
    setIndex((prevIndex) => (prevIndex + 1) % upcomingMovies.length);
  };

  const handleLeft = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? upcomingMovies.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='slider-container' style={sliderStyle}>
      <div className='slider-overlay'>
        <MdKeyboardArrowLeft className='left-arrow' onClick={handleLeft} />
        <MdKeyboardArrowRight className='right-arrow' onClick={handleRight} />
        <div className='slider-info'>
          <h1>{upcomingMovies[index]?.title}</h1>
          <p>{upcomingMovies[index]?.overview.slice(0,100)}...</p>
          <p>Release Date: {upcomingMovies[index]?.release_date}</p>
          <Genres movieGenres={upcomingMovies[index]?.genre_ids} apiKey={apiKey}/>
          {upcomingMovies[index] && (
            <StarRatings
              rating={upcomingMovies[index]?.vote_average / 2}
              starRatedColor={'#FDCC0D'}
              starDimension='15px'
              starSpacing='1px'
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Slider;

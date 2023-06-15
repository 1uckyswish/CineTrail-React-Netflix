import {useEffect, useState} from 'react';
import "./Slider.css";
import axios from 'axios';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import StarRatings from 'react-star-ratings';

function Slider({apiKey, baseUrl}) {
    const [upcomingMovies, setUpComingMovies] = useState([]);
    const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;
    const [index, setIndex] = useState(0);

    useEffect(
        ()=>{
            axios.get(`${baseUrl}upcoming?api_key=${apiKey}`)
            .then((result) =>{
                setUpComingMovies(result.data.results)
            })
            .catch((error)=> console.log("error message", error))
        },[]);

   const sliderStyle = {
        backgroundImage: `url("${imageBaseUrl}${upcomingMovies[index]?.backdrop_path}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '60vh',
        position: 'relative'
    };

    const handleRight = ()=>{
          if(index === upcomingMovies.length - 1){
            setIndex(0);
            return; //use to break out the loop
        }
        setIndex(prevState => prevState + 1);
    };

    const handleLeft = ()=>{
        if(index === 0){
            setIndex(upcomingMovies.length - 1);
            return; //use to break out the loop
        }
        setIndex(prevState=> prevState - 1);
    };
     //* if true then render the JSX else show nothing line 56
  return (
    <div className='slider-container' style={sliderStyle}>
        <div className="slider-overlay">
            <MdKeyboardArrowLeft className='left-arrow' onClick={handleLeft}/>
            <MdKeyboardArrowRight className='right-arrow' onClick={handleRight}/>
            <div className="slider-info">
                <h1>{upcomingMovies[index]?.title}</h1>
                <p>{upcomingMovies[index]?.overview}</p>
                <p>Release Date: {upcomingMovies[index]?.release_date}</p>
                {upcomingMovies[index] &&
               <StarRatings
                rating={upcomingMovies[index]?.vote_average / 2}
                 starRatedColor={"#FDCC0D"}
                 starDimension="15px"
                 starSpacing='1px'/>
                 }
            </div>
        </div>
    </div>
  )
};

export default Slider

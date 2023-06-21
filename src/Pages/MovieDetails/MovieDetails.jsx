import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import "./MovieDetails.css"
import axios from 'axios';
import ReactPlayer from 'react-player/youtube'
import Review from '../../Components/Review/Review';



function MovieDetails({apiKey, baseUrl, imgBaseUrl}) {
  const { movieId } = useParams();
  const [movie, setMovie] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [reviews, setReviews] = useState([]);



  useEffect(
    ()=>{
       axios.get(`${baseUrl}${movieId}?api_key=${apiKey}&language=en-US&page=1`)
      .then(result=>{
        setMovie(result?.data);
      })
       .catch((error)=> console.log(error))
       //* fetch the data from api to get movie videos
      axios.get(`${baseUrl}${movieId}/videos?api_key=${apiKey}&language=en-US&page=1`)
      .then(result=>{
        const trailerLinks = result.data.results.filter((item)=> item?.site === "YouTube" && item?.type === "Trailer");
       setVideoLink(trailerLinks[0]?.key);
      })
       .catch((error)=> console.log(error))
      //* fetch the data from api to get reviews
       axios.get(`${baseUrl}${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`)
      .then(result=>{
        console.log(result.data.results)
        setReviews(result.data.results)
      })
       .catch((error)=> console.log(error))
    },[]);



  return (
    <div className="movie-details-container">
      <div className="trailer-container">
        <ReactPlayer 
        className="trailer-player"
         url={`https://www.youtube.com/watch?v=${videoLink}`}
         width="100%"
         height="100%"
         />
      </div>
        <div className="details-container">
          <div className="title-container">
            <h1>{movie?.title}</h1>
          </div>
          <div className="info-container">
            <img
            src={`${imgBaseUrl}/${movie?.poster_path}`}
            alt="Movie Poster"
            className='details-poster'
            />
            <div className='movie-info'>
              <h2>{movie?.tagline}</h2>
              <h4>{movie?.overview}</h4>
              <h4>
                Status: <span>{movie?.status}</span>
              </h4>
              <h4>
                RunTime: <span>{movie?.runtime}</span>
              </h4>
              <h4>
                Budget: $<span>{movie?.budget}</span>
              </h4>
            </div>
          </div>
          <div className="review-container">
            {
              reviews.map((review)=>{
               return <Review key={review.id} review={review} imgBaseUrl={imgBaseUrl}>{review.content}</Review>
              })
            }
          </div>
        </div>
    </div>
  )
}

export default MovieDetails

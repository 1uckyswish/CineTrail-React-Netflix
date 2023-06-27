import "./MovieCard.css";
import { Link } from "react-router-dom";

function MovieCard({ movie, width, height, radius, cardStyle, imgUrl, movieId}) {
  const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;
  const imageStyle={
    backgroundImage: `url(${imageBaseUrl}${imgUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width,
    height,
    position: "relative",
    alignItems: "center",
    borderRadius: radius,
    boxShadow: cardStyle === "popular-card" ? "0px 0px 10px 0px rgba(118, 118, 118, 0.75)" : null,
  }
  return (
    <Link to={`/MovieDetails/${movieId}`} className={cardStyle}>
      <div style={imageStyle}>
        <div className="movie-info-top">stars</div>
        <div className="movie-info-bottom">
          <p>{movie?.title}</p>
          <p>Rating: instars</p>
        </div>
      </div>
        {
          cardStyle === "top-rated-card"?
          <p>{movie?.title}</p>
          :
          null
        }
    </Link>
  )
}

export default MovieCard

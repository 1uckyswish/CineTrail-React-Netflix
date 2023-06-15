
function MovieCard({ movie, width, height, radius, cardStyle }) {
  const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;
  const imageStyle={
    backgroundImage: `url(${imageBaseUrl}${movie.poster_path})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width,
    height,
    position: "relative",
    borderRadius: radius,
    boxShadow: cardStyle === "popular-card" ? "0px 0px 10px opx rgb(118, 118, 118, 0.75)" : null,
  }
  return (
    <div className={cardStyle}>
      <div style={imageStyle}></div>
    </div>
  )
}

export default MovieCard

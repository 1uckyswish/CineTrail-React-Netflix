import { useState, useEffect } from 'react';
import "./Genres.css";
import axios from 'axios';

function Genres({ movieGenres, component, apiKey}) {
    const [allGenres, setAllGenres] = useState([]);


    useEffect(
        ()=>{
            axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
            .then((res)=>{
                console.log(res.data.genres)
                setAllGenres(res.data.genres);
            })
            .catch(error => console.log(error))
        },[]);


  return (
    <div className="genre-container">
      <p>Genres: &nbsp;</p>
      {
      component === "details" ? (movieGenres?.map((genre, index) => {
        return (
            <p key={genre?.id}>
              {index === movieGenres.length - 1 ? `${genre.name}` : `${genre.name},`}
              &nbsp;
            </p>);})
                )
       :
        movieGenres?.map((id,index)=>{
            for(let i = 0; i< allGenres.length; i++){
                if(allGenres[i].id === id){
                    return (
                        <p key={id}> &nbsp; 
                            {
                             index === movieGenres.length - 1?
                             `${allGenres[i].name}`
                             :
                             `${allGenres[i].name},` 
                            }
                          &nbsp; 
                        </p>
                    )
                }
            }
        })





        }
    </div>
  );
}

export default Genres;

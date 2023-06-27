import {useContext, useState, useEffect}from 'react'
import {ThemeContext} from '../../context/ThemeContext';
import {Link} from 'react-router-dom'
import './header.css';
import { MdOutlineDarkMode,MdOutlineLightMode } from "react-icons/md";
import axios from 'axios';
import SearchResults from '../SearchResults/SearchResults';

function Header({apiKey}) {
    const {darkMode, setDarkMode} = useContext(ThemeContext)
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

  //function to handle the dark/light mode
    const handleTheme =() => {
      const newDarkMode = !darkMode;
      setDarkMode(newDarkMode);
      localStorage.setItem('darkMode', newDarkMode);
  }

  const handleChange = (e)=>{
   setQuery(e.target.value);
   axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=en-US&page=1&include_adult=false`)
   .then(result => setSearchResults(result.data.results))
   .catch(error=> console.log(error));
  };

  return (
    //if true header appears in dark mode else header light mode
    <div className={
      darkMode?
      "header-container"
      :
      "header-container header-light"
      }>
      <Link className="logo" to="/">CineTrail</Link>
      <div className="search-container">
        <input
        type="text"
        className={query ? "search-input input-action" : "search-input"}
        placeholder="Search movies..."
        onChange={handleChange}
        />
        {
          query !== "" ?
          <div className='search-results-container'>
            {
              searchResults.map((movie) =>{
                return <SearchResults key={movie?.id} movie={movie} setQuery={setQuery}/>;
              })
            }
          </div> 
          :
          ""
        }
      </div>



      <div className="header-buttons-container">
        <div className="theme-button-container">
             {
                darkMode?
                 <div className="theme-buttons">
                    <MdOutlineLightMode onClick={handleTheme} className="theme-icon "/>
                    <MdOutlineDarkMode className="theme-icon theme-icon-active"/>
                </div>
                : <div className="theme-buttons">
                    <MdOutlineLightMode className="theme-icon theme-icon-active"/>
                    <MdOutlineDarkMode onClick={handleTheme} className="theme-icon"/>
                </div>
             }
         </div>
        <div>
            <button className="create-account-btn">Create an account</button>
        </div>
      </div>
    </div>
  )
}



export default Header
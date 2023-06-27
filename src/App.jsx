import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dna } from  'react-loader-spinner'
import './App.css'
import Header from './Components/Header/Header'
import Homepage from './Pages/Homepage/Homepage'
import Footer from './Components/Footer/Footer'
import ThemeContextProvider from './context/ThemeContext'
import MovieDetails from './Pages/MovieDetails/MovieDetails'
import SignUp from './Pages/SignUp/SignUp'

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const imgBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 900);
  }, []);

  return (
    <>
   {
    loading ?
  <div className="loader">
  <Dna  height="300"
  width="200"/>
</div>

  :
  <>
    <BrowserRouter>
      <ThemeContextProvider>
        <Header apiKey={apiKey} baseUrl={baseUrl} />
          <Routes>
            <Route path="/" element={<Homepage apiKey={apiKey} baseUrl={baseUrl} />}/>
            <Route path='/MovieDetails/:movieId' element={<MovieDetails apiKey={apiKey} baseUrl={baseUrl} imgBaseUrl={imgBaseUrl}/>} />
            <Route path='/SignUp' element={<SignUp/>}/>
          </Routes>
          <Footer />
      </ThemeContextProvider>
    </BrowserRouter>
  </>
   }
    </>
  )
}

export default App

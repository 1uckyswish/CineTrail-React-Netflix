import './App.css'
import Header from './Components/Header/Header'
import Homepage from './Pages/Homepage/Homepage'
import Footer from './Components/Footer/Footer'
import { Dna } from  'react-loader-spinner'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ThemeContextProvider from './context/ThemeContext'

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
      <Header />
      <Routes>
        <Route path="/" element={<Homepage apiKey={apiKey} baseUrl={baseUrl} />}/>

      
      </Routes>
      </ThemeContextProvider>
      </BrowserRouter>
  </>
   }
    </>
  )
}

export default App

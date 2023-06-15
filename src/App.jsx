import './App.css'
import Header from './Components/Header/Header'
import Homepage from './Pages/Homepage/Homepage'
import Footer from './Components/Footer/Footer'

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;


  return (
    <>
    <Header />
    <Homepage apiKey={apiKey} baseUrl={baseUrl}/>
    <Footer />
    </>
  )
}

export default App

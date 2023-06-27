import {useContext} from 'react'
import "./Footer.css"
import { ThemeContext } from '../../context/ThemeContext'

function Footer() {
  const {darkMode, setDarkMode} = useContext(ThemeContext)
  return (
    <div className='footer-container'>
      <button onClick={()=>setDarkMode(!darkMode)}>Toggle</button>
    </div>
  )
}

export default Footer

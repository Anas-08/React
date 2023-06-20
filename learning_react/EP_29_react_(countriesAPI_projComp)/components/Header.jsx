import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"


export default function() {
 
  const [isDark, setIsDark] = useContext(ThemeContext)
  return (
    <header className={`header-container ${isDark ? 'dark' : ''}`}>
    <div className="header-content">
        <h2 className="title">
            <a href="/">Where in the world?</a>
        </h2>
        <p className="theme" onClick={()=>{
          // document.body.classList.toggle('dark') 
          setIsDark(!isDark)
          localStorage.setItem('isDarkMode', !isDark)
          }}>
          
            <i className={`fa-sharp fa-solid fa-${isDark ? 'sun' : 'moon'}`} />
            &nbsp;&nbsp; {isDark ? 'Light' : 'Dark'} mode
        </p>
    </div>
</header>
  )
}

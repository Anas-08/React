

export default function({theme}) {
  const [isDark, setIsDark] = theme
  // console.log(JSON.parse(localStorage.getItem('isDarkMode')))

  // if(isDark){
  //   document.body.classList.add('dark') 
  // }else{
  //   document.body.classList.remove('dark') 
  // }
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

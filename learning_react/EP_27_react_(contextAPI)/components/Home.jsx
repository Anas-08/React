import { useContext, useState } from "react";

import Search from "./Search";
import Filter from "./Filter";
import CountryLIst from "./CountryLIst";

import { ThemeContext } from "../contexts/ThemeContext";

export default function Home() {
    const [query, setQuery] = useState('');
   
    
    const [isDark] = useContext(ThemeContext)
    console.log(isDark)
    
  return (
    <>
     <main className={`${isDark ? 'dark' : ''}`}>
        <div className="search-filter-container">
            <Search setQuery={setQuery}/>
            <Filter/>
        </div>

        {
         query === 'unmount' ? '' : <CountryLIst query={query}/>
        }
      </main>
      
    </>
  )
}

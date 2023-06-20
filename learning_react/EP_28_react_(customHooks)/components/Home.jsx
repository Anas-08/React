import { useContext, useEffect, useState } from "react";

import Search from "./Search";
import Filter from "./Filter";
import CountryLIst from "./CountryLIst";

import { ThemeContext } from "../contexts/ThemeContext";
import {useWindowSize} from '../Hooks/useWindowSize'

export default function Home() {
    const [query, setQuery] = useState('');
   
    
    const [isDark] = useContext(ThemeContext)
    // console.log(isDark)

    const windowSize = useWindowSize()
    
  return (
    <>
     <main className={`${isDark ? 'dark' : ''}`}>
        <div className="search-filter-container">
            <Search setQuery={setQuery}/>
            <Filter/>
        </div>
        <h1 style={{textAlign:"center"}}>{windowSize.width} X {windowSize.height}</h1>


        {
         query === 'unmount' ? '' : <CountryLIst query={query}/>
        }
      </main>
      
    </>
  )
}

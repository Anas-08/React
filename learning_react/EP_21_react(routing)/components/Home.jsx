import { useState } from "react";
// import Header from "./Header";
import Search from "./Search";
import Filter from "./Filter";
import CountryLIst from "./CountryLIst";


export default function Home() {
    const [query, setQuery] = useState('');
  return (
    
    <main>
    <div className="search-filter-container">
        <Search setQuery={setQuery}/>
        <Filter/>
    </div>

    {
     query === 'unmount' ? '' : <CountryLIst query={query}/>
    }
  </main>
  )
}

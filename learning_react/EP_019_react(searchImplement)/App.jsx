import Header from "./components/Header";

import { useState } from "react";
import Search from "./components/Search";
import Filter from "./components/Filter";
import CountryLIst from "./components/CountryLIst";
import './App.css'

export default function App() {
    const [query, setQuery] = useState('');

  return (
    <>

      <Header/>

      <main>
        <div className="search-filter-container">
            <Search setQuery={setQuery}/>
            <Filter/>
        </div>
        <CountryLIst query={query}/>
      </main>





    </>
  )
}


import Header from "./components/Header";

import { Outlet } from "react-router-dom";


export default function App() {
    // const [query, setQuery] = useState('');

  return (
    <>

      <Header/>
    <Outlet/>


      {/* <main>
        <div className="search-filter-container">
            <Search setQuery={setQuery}/>
            <Filter/>
        </div>

        {
         query === 'unmount' ? '' : <CountryLIst query={query}/>
        }
      </main> */}

    </>
  )
}

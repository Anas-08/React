import Header from "./components/Header"

// import css 
import './App.css'
import Search from "./components/Search"
import SelectMenu from "./components/SelectMenu"
import CountryCard from "./components/CountryCard"
import CountryList from "./components/CountryList"


const App = () => {
    return (
        <>
            <Header />

            <main>
                <div className="search-filter-container">
                    <Search />
                    <SelectMenu />
                </div>

                <CountryList/>


            </main>
        </>
    )
}

export default App

// import { useState } from "react";
import countriesData from "../countriesData"
import CountryCard from "./CountryCard"

export default function CountryLIst({query}) {
   

    // const [query, setQuery] = useState('');
    // const filterCountry = countriesData.filter((country)=> country.name.common.toLowerCase().includes('india'))

    // console.log(filterCountry);
    
  return (
    <>

   <div className="country-container">
    {
        countriesData.filter((country)=> country.name.common.toLowerCase().includes(query)).map((country)=>{
            // console.log(country);

            return <CountryCard
             key={country.name.common}
             name={country.name.common}
             flag={country.flags.svg}
             population={country.population.toLocaleString('en-IN')}
             region={country.region}
             capital={country.capital?.[0]}/>
        })
    }
   </div>
    </>
  )
}

import { useEffect, useState } from "react"
import CountryCard from "./CountryCard"
import CountryListLoadingEffect from "./CountryListLoadingEffect"


export default function CountryLIst({ query }) {
  let [countriesData, setCountriesData] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data)
      })

      return ()=>{
        // console.log("Unmounting")
      }    
  }, [])

  // usestate is use to create state and useeffect is used to monitor the state

  if(!countriesData.length){
    return (<CountryListLoadingEffect/>)
  }

  return (
    <>
      <div className="country-container">
        {
          countriesData.filter((country) => country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)).map((country) => {
            // console.log(country);

            return <CountryCard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population.toLocaleString('en-IN')}
              region={country.region}
              capital={country.capital?.[0]}
              data={country} />

          })
        }
      </div>      
    </>
  )
}

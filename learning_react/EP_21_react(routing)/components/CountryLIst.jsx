// import { useState } from "react";
// import countriesData from "../countriesData"
import { useEffect, useState } from "react"
import CountryCard from "./CountryCard"


export default function CountryLIst({ query }) {

  let [countriesData, setCountriesData] = useState([])


  useEffect(() => {
    // console.log("Hiii")
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data)
      })

      return ()=>{
        console.log("Unmounting")
      }  
  }, [])

  // usestate is use to create state and useeffect is used to monitor the state

  
  return (
    <>

      <div className="country-container">
        {
          countriesData.filter((country) => country.name.common.toLowerCase().includes(query)).map((country) => {
            // console.log(country);

            return <CountryCard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population.toLocaleString('en-IN')}
              region={country.region}
              capital={country.capital?.[0]} />
          })
        }
      </div>
    </>
  )
}

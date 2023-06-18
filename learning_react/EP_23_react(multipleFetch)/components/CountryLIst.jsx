// import { useState } from "react";
// import countriesData from "../countriesData"
import { useEffect, useState } from "react"
import CountryCard from "./CountryCard"


export default function CountryLIst({ query }) {


  // const [query, setQuery] = useState('');
  // const filterCountry = countriesData.filter((country)=> country.name.common.toLowerCase().includes('india'))

  // console.log(filterCountry);
  let [countriesData, setCountriesData] = useState([])
  // const [count,setCount] = useState(0)

  // useEffect(()=>{
  //   console.log("Hello")
  // },[count])

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

  // if(countriesData.length === 0){

  //   fetch('https://restcountries.com/v3.1/all')
  //   .then((res)=> res.json())
  //   .then((data) =>{
  //     // countriesData = data
  //       setCountriesData(data)

  //   })
  // }
  return (
    <>
{/* <h1>{`Count will Increase ${count}` }</h1>
      <button onClick={() => setCount(count + 1)}>Remove all cards</button> */}

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

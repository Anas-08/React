
import React from 'react'
import countriesData from '../countriesData'
import CountryCard from './CountryCard';

export default function CountryList() {
    return (
        <div className='country-container'>
            {
              countriesData.map((country)=>{
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
    )
}

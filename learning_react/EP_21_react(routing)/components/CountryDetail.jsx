import React, { useEffect, useState } from 'react'
import './CountryDetail.css'

export default function CountryDetail() {
    const getData = new URLSearchParams(location.search).get('name');
    console.log(getData);

    const [countryData, setCountryData] = useState({})

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/name/${getData}?fullText=true`)
        .then(res => res.json())
        .then(([data])=>{
            console.log(data)
            setCountryData({
                flag:data.flags.svg,
                name: data.name.common,
                nativeName:Object.values(data.name.nativeName)[0].common,
                population:data.population.toLocaleString('en-IN'),
                region:data.region,
                subRegion:data.subregion,
                capital:data.capital?.[0],
                tld:data.tld,
                currency:Object.values(data.currencies
                    ).map((c)=>c.name).join(', '),
                language:Object.values(data.languages).join(', '),


            })
        })
    },[])

  return (
   countryData && (

   
   <main>
   <div className="country-detail-container">
     <a href="#" className="back-button" >
       <i className="fa-solid fa-arrow-left" /> Back
     </a>
     <div className="country-details">
       <img src={countryData.flag} alt={`${countryData.name} flag`} />
       <div className="details-text">
         <h2>{countryData.name}</h2>
         <div className="details">
           <div className="detail-left">
             <p>
               <b>Native Name: { countryData.nativeName}</b>
               <span className="native-name" />
             </p>
             <p>
               <b>Population: { countryData.population}</b>
               <span className="population" />
             </p>
             <p>
               <b>Region: { countryData.region}</b>
               <span className="region" />
             </p>
             <p>
               <b>Sub Region:{ countryData.subRegion} </b>
               <span className="sub-region" />
             </p>
             <p>
               <b>Capital:{ countryData.capital} </b>
               <span className="capital" />
             </p>
           </div>
           <div className="detail-right">
             <p>
               <b>Top Level Domain:{ countryData.tld} </b>
               <span className="domain" />
             </p>
             <p>
               <b>Currencies:{ countryData.currency} </b>
               <span className="currency" />
             </p>
             <p>
               <b>Languages:{ countryData.language} </b>
               <span className="language" />
             </p>
           </div>
         </div>
         <div className="border-country">
           <b>Border Countries: </b> &nbsp;
         </div>
       </div>
     </div>
   </div>
 </main>)
  
  )
}

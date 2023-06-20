
import { useContext, useEffect, useState } from 'react';
import './CountryDetails.css'
import { Link, useLocation, useParams } from 'react-router-dom';
import CountryDetailsLoadingEffect from './CountryDetailsLoadingEffect';
import { ThemeContext } from "../contexts/ThemeContext";
import { useWindowSize } from '../Hooks/useWindowSize';

export default function CountryDetails() {
  
    const params = useParams() // console.log(params)

    // getting country name
    const getData = params.countryy // console.log(getData);

    const {state} = useLocation() // console.log(state)
    

    const [countryData,setCountryData] = useState(null);
    const [notFound,setNotFound] = useState(false)
    // const [isDark] = useOutletContext()
    const [isDark] = useContext(ThemeContext)

    const windowSize = useWindowSize()

    function updateCountryData(data){
      setCountryData({
        img:data.flags.svg,
        name:data.name.common,
        nativeName: Object.values(data.name.nativeName)[0].common,
        population: data.population.toLocaleString('hi-IN'),
        region: data.region,
        subRegion:data.subregion,
        capital:data.capital?.[0],
        tld: data.tld.join(', '),
        currency:Object.values(data.currencies).map((currency) => currency.name).join(', '),
        language: Object.values(data.languages).join(', '),
        borders:[]
    })

    if(!data.borders){
      data.borders=[]
    }
    
    Promise.all(data.borders.map((border)=>{
      return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
      .then((res)=> res.json())
      .then(([borderName])=> borderName.name.common)
    }))
    .then((borders)=>{
      setTimeout(()=> setCountryData((prevState) => ({...prevState, borders})))
    })

    }

    
    
    useEffect(()=>{
      if(state){
        updateCountryData(state)
        return
      }
      
        fetch(`https://restcountries.com/v3.1/name/${getData}?fullText=true`)
        .then((res)=> res.json())
        .then(([data])=>{
            updateCountryData(data)            
        })
        .catch(err => {
          setNotFound(true)
        })
    },[getData])

    if(notFound){
      return <h1>country not found</h1>

    }
    
  return ( 
   countryData === null ? <CountryDetailsLoadingEffect/> : 
   (
    <>
   <main className={`${isDark ? 'dark' : ''}`}>
    <h1 style={{textAlign:"center"}}>{windowSize.width} X {windowSize.height}</h1>
   <div className="country-detail-container">
     <a href="#" className="back-button" onClick={()=>{history.back()}}>
       <i className="fa-solid fa-arrow-left" /> Back
     </a>
     <div className="country-details">
       <img src={countryData.img} alt={countryData.name} />
       <div className="details-text">
         <h2>{countryData.name}</h2>
         <div className="details">
           <div className="detail-left">
             <p>
               <b>Native Name: {countryData.nativeName} </b>
               <span className="native-name" />
             </p>
             <p>
               <b>Population: {countryData.population} </b>
               <span className="population" />
             </p>
             <p>
               <b>Region: {countryData.region}</b>
               <span className="region" />
             </p>
             <p>
               <b>Sub Region: {countryData.subRegion}</b>
               <span className="sub-region" />
             </p>
             <p>
               <b>Capital: {countryData.capital}</b>
               <span className="capital" />
             </p>
           </div>
           <div className="detail-right">
             <p>
               <b>Top Level Domain: {countryData.tld} </b>
               <span className="domain" />
             </p>
             <p>
               <b>Currencies: {countryData.currency}</b>
               <span className="currency" />
             </p>
             <p>
               <b>Languages:{countryData.language} </b>
               <span className="language" />
             </p>
           </div>
         </div>
      {countryData.borders.length !==0 && <div className="border-country">
        <b>Border Countries: </b> &nbsp;
        {
        countryData.borders.map((border) => <Link key={border} to={`/${border}`}> {border} </Link>)
        }
      </div>}
       </div>
     </div>
   </div>
     </main>
     </>)    
  )

}

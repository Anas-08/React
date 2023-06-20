import React from 'react'
import './CountryListLoadingEffect.css'

export default function CountryListLoadingEffect() {
   
  return (
    <>
        <div className="country-container">
          {
             Array.from({length:10}).map((element,index)=>{
                return <div key={index} className="country-card shimmer-card"></div>
            })
          }
        </div>
    </>
  )
}

import React from 'react'
import './CountryListLoadingEffect.css'

export default function CountryListLoadingEffect() {
   
  return (
    <>
        <div className="country-container">
          {
             Array.from({length:10}).map((element,index)=>{
                return <div key={index} className="country-card shimmer-card">
                  <div className="flag-container"></div>
                  <div className="card-text">
                    <div className="card-text"></div>
                    <h3 className="card-title"></h3>
                    <p></p>
                    <p></p>
                    <p></p>
                  </div>
                </div>
            })
          }
        </div>
    </>
  )
}

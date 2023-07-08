import React from 'react'

export default function ({label, name, id, value, onChange, defaultOption, options, errors}) {
  return (
          <div className="input-container">
        <label htmlFor={id}>{label}</label>
        <select className='category' id={id} name={name} value={value}
         onChange={onChange} >

             {
                defaultOption && ( <option hidden value="">{defaultOption}</option>)
             } 
              {
                options.map((option, i)=>   <option key={i} value={option} >{option}</option>)
              }
              {/* <option value="Grocery">Grocery</option>
              <option value="Clothes">Clothes</option>
              <option value="Bills">Bills</option>
              <option value="Education">Education</option>
              <option value="Medicine">Medicine</option> */}
            </select>
        <p className='errors'>{errors}</p>
      </div>
 
  )
}

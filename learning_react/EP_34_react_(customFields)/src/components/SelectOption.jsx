import React from 'react'

export default function SelectOption({id, label, name, value, onChange, error, defaultOption, options}) {
  return (
    <div className="input-container">
    <label htmlFor="category">{label}</label>
    <select id={id} name={name} value={value} onChange={onChange}>
      {
        defaultOption && (
            <option hidden value="">
                {defaultOption}
            </option>
        )
      }
      {/* <option value="Grocery">Grocery</option>
      <option value="Clothes">Clothes</option>
      <option value="Bills">Bills</option>
      <option value="Education">Education</option>
      <option value="Medicine">Medicine</option> */}
      {options.map((option, i)=> <option key={i} value={option} >{option}</option>)}
    </select>
    <p className='error'>{error}</p>
  </div>
  )
}

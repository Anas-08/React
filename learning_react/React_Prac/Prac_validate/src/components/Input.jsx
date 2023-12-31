import React from 'react'

export default function Input({label, name, id, value, onChange, errors}) {
  return (
    <div className="input-container">
        <label htmlFor={id}>{label}</label>
        <input id={id} name={name} value={value}
        onChange={onChange}/>
        <p className='errors'>{errors}</p>
      </div>
  )
}

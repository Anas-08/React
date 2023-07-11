import { NavLink } from 'react-router-dom'
import viteLogo from '/vite.svg'
import React from 'react'

export default function 
 () {
  return (

    <header className='flex justify-between items-center px-4 py-4 shadow-md  md:px-10'>
        <img src={viteLogo} alt="logo" />

        <ul className='flex gap-5 md:text-lg'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

    </header>
  )
}

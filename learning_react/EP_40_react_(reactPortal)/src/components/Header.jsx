import { NavLink } from 'react-router-dom'
import viteLogo from '/vite.svg'
import React, { useState } from 'react'
import PopUp from './PopUp'

export default function () {
   const [isOpen, setIsOpen] = useState(false)
  
  return (

    <header className='flex justify-between items-center px-4 py-4 shadow-md  md:px-10'>
        <img src={viteLogo} alt="logo" />

        <ul className='flex gap-5 md:text-lg'>
            <li><NavLink 
            className={({isActive})=> isActive ? 'text-blue-600 transition-all duration-500' : '' } 
            to="/">Home</NavLink></li>
            <li><NavLink 
             className={({isActive})=> isActive ? 'text-blue-600 transition-all duration-500' : '' } 
            to="/about">About</NavLink></li>
            <li><NavLink
             className={({isActive})=> isActive ? 'text-blue-600 transition-all duration-500' : '' } 
             to="/contact">Contact</NavLink></li>
             <li>
               <button onClick={() => setIsOpen(true)}>Sign In</button>
               <PopUp isOpen={isOpen} setIsOpen={setIsOpen}/>
             </li>
        </ul>

    </header>
  )
}

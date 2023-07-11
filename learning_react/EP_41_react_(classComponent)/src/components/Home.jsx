import React, { useState } from 'react'
import Counter from './Counter'
import OldCounter from './OldCounter'

export default function Home() {

 
  return (
    <>
    <h1 className='text-slate-800 text-2xl text-center mt-5'>Welcome to Home Page</h1>
    
    <Counter/>
    <hr className='my-6' />
    <OldCounter name={'OldCounter'}/>
    
    </>
  )
}

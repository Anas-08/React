import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
  return (
    <>
     <div className='px-8 bg-slate-700 max-w-xs h-48 mx-auto text-center rounded-lg mt-10 flex items-center justify-center flex-col gap-5'>
    <h1 className='text-white'>New Counter (Function Component)</h1>
      <h2 className='text-white text-2xl'>{count}</h2>
      <button className='bg-blue-500 text-lg mx-4 px-4 py-2 rounded-lg' onClick={() => setCount( count + 1)}>Increase Count</button>
    </div>
    </>
  )
}

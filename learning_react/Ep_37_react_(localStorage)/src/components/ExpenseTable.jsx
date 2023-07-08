import React, { useState } from 'react'
import { useFilter } from '../hooks/useFilter'
import ContextMenu from './ContextMenu'

export default function ExpenseTable({expenses, setExpense, setExpenses, setEditingRowId}) {
  // console.log(expenses)

  const [category, setCategory] = useState('')
  const [menuPosition, setMenuPosition] = useState({})
  const [rowId, setRowId] = useState('')
  const [sortCallback, setSortCallback] = useState(()=>() =>{})
  // console.log(sortCallback)
  
  

  const [result, setQuery] = useFilter(expenses, (data)=> data.category)
  // console.log(result)
  const total = result.reduce((previous, current) => previous + parseInt(current.amount), 0)

  // setEditingRowId(rowId)
  
  // console.log('Rendering')

  return (
   <> 
   <ContextMenu menuPosition={menuPosition} expenses={expenses} setExpense={setExpense} setMenuPosition={setMenuPosition} setExpenses={setExpenses} rowId={rowId} setEditingRowId={setEditingRowId} />
    <table className="expense-table" onClick={() => {
       if(menuPosition.left){
        setMenuPosition({})

       }
    }
   
     }>
      <thead>
        <tr>
          {/* <th>Title</th> */}
          <th className="amount-column">
            <div>
              <span>Title</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                viewBox="0 0 384 512"
                className="arrow up-arrow"
                onClick={(e)=>{

                  e.stopPropagation()
                  // setExpenses((prevState)=> [...prevState.sort((a, b) => a.amount - b.amount )])
                  setSortCallback(()=> (a, b) => a.title.localeCompare(b.title) )
                }
                }
              >
                <title>Ascending</title>
                <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                viewBox="0 0 384 512"
                className="arrow down-arrow"
                onClick={(e)=>{
                  e.stopPropagation()
                  // setExpenses((prevState)=> [...prevState.sort((a, b) => b.amount - a.amount )])
                  // setSortCallback(()=> (a, b) => b.amount - a.amount )
                  setSortCallback(()=> (a, b) => b.title.localeCompare(a.title) )
                }
                }>
                <title>Descending</title>
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </div>
          </th>
          <th>
            <select onChange={(e) => setQuery(e.target.value.toLowerCase())}>
              <option value="">All</option>
              <option value="grocery">Grocery</option>
              <option value="clothes">Clothes</option>
              <option value="bills">Bills</option>
              <option value="education">Education</option>
              <option value="medicine">Medicine</option>
            </select>
          </th>
          <th className="amount-column">
            <div>
              <span>Amount</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                viewBox="0 0 384 512"
                className="arrow up-arrow"
                onClick={(e)=>{

                  e.stopPropagation()
                  // setExpenses((prevState)=> [...prevState.sort((a, b) => a.amount - b.amount )])
                  setSortCallback(()=> (a, b) => a.amount - b.amount )
                }
                }
              >
                <title>Ascending</title>
                <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                viewBox="0 0 384 512"
                className="arrow down-arrow"
                onClick={(e)=>{
                  e.stopPropagation()
                  // setExpenses((prevState)=> [...prevState.sort((a, b) => b.amount - a.amount )])
                  setSortCallback(()=> (a, b) => b.amount - a.amount )
                }
                }>
                <title>Descending</title>
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
       {
        result.sort(sortCallback).map(( {id, title, category, amount} )=>{
          
          return  <tr key={id} onContextMenu={(e) => { 
            e.preventDefault()
            // console.log(e.clientX, e.clientY)
            setMenuPosition({left:e.clientX + 4, top:e.clientY + 4})
            setRowId(id)

           }}>
          <td>{title}</td>
          <td>{category}</td>
          <td>₹{amount}</td>
        </tr>
        })
       }
       <tr>
          <th>Total</th>
          <th className='sort' onClick={(e)=>  setSortCallback(()=> () => {} )}>Clear Sort</th>
          <th>₹{total}</th>
        </tr>
       
      </tbody>
    </table>
   </>
  )
}

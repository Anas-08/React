import React, { useState } from 'react'

export default function ExpenseForm({setExpenses}) {

  const [expense, setExpense] = useState({
    title:'',
    category:'',
    amount:'',
  })
  
  const submitHandle = (e)=>{
    e.preventDefault()
    // console.log(expense)

    setExpenses((prevState)=>[...prevState,{...expense, id:crypto.randomUUID()}])
    setExpense({
      title:'',
      category:'',
      amount:'',
    })
  }
  
  return (
    <>
    <form className="expense-form" onSubmit={submitHandle}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input id="title" name='title' value={expense.title}
        onChange={(e)=> setExpense((prevState)=> ({...prevState,title:e.target.value}) )}/>
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        {/* <input id="category" /> */}
        <select className='category' name='category' value={expense.category}
         onChange={(e)=> setExpense((prevState)=> ({...prevState,category:e.target.value}) )} >
              <option hidden value="">Select Category</option>
              <option value="Grocery">Grocery</option>
              <option value="Clothes">Clothes</option>
              <option value="Bills">Bills</option>
              <option value="Education">Education</option>
              <option value="Medicine">Medicine</option>
            </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input id="amount" name='amount' value={expense.amount} 
         onChange={(e)=> setExpense((prevState)=> ({...prevState,amount:e.target.value}) )} />
      </div>
      <button className="add-btn">Add</button>
    </form>
    </>
  )

}

import React, { useState } from 'react'

export default function ExpenseForm({setExpenses}) {

 
  const [expense, setsExpense] = useState({
    title:'',
    category:'',
    amount:'',
  })

    const handleSubmit = (e) =>{
       e.preventDefault()
      //  const newExpense = {...getFormData(e.target), id:crypto.randomUUID()}
      //  setExpenses((prevState) => [...prevState,newExpense])
      //  e.target.reset()
      // const expense = {title, category, amount, id: crypto.randomUUID()}
      // setExpenses((prevState)=>[...prevState,expense])
      // console.log({title,category,amount})
      // e.target.reset()
      console.log(expense)
      // setsExpense()

      const newData = {...expense,id: crypto.randomUUID()}
      setExpenses((prevState)=>[...prevState,newData])
      // console.log(expense)
      setsExpense({
        title:'',
        category:'',
        amount:'',
      })
    }

   
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
    <div className="input-container">
      <label htmlFor="title">Title</label>
      <input id="title" name="title" value={expense.title} onChange={(e)=> setsExpense((prevState)=>({...prevState,title:e.target.value}))}/>
    </div>
    <div className="input-container">
      <label htmlFor="category">Category</label>
      <select id="category" name="category" value={expense.category} onChange={(e)=> setsExpense((prevState)=>({...prevState,category:e.target.value}))}>
        <option hidden value="">
          All
        </option>
        <option value="Grocery">Grocery</option>
        <option value="Clothes">Clothes</option>
        <option value="Bills">Bills</option>
        <option value="Education">Education</option>
        <option value="Medicine">Medicine</option>
      </select>
    </div>
    <div className="input-container">
      <label htmlFor="amount">Amount</label>
      <input id="amount" name="amount" value={expense.amount} onChange={(e)=> setsExpense((prevState)=>({...prevState,amount:e.target.value}))} />
    </div>
    <button className="add-btn">Add</button>
  </form>
  
  )
}

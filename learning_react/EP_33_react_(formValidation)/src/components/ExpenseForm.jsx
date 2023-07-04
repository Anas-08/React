import React, { useState } from 'react'

export default function ExpenseForm({setExpenses}) {

  const [expense, setsExpense] = useState({
    title:'',
    category:'',
    amount:'',
  })

  const [errors, setErrors] = useState({})

  const validate = (formData) =>{
    // console.log(formData)
    const errorData = {}

    if(!formData.title){
      errorData.title = "Title is required"
    }
    if(!formData.category){
      errorData.category = "Please select a category"
    }
    if(!formData.amount){
      errorData.amount = "Amount is required"
    }

    setErrors(errorData)
    return errorData

  }

    const handleSubmit = (e) =>{
       e.preventDefault()

      const validateResult = validate(expense)
      // console.log(Object.keys(validateResult))

      if(Object.keys(validateResult).length) return

      const newData = {...expense,id: crypto.randomUUID()}
      setExpenses((prevState)=>[...prevState,newData])
      // console.log(expense)
      setsExpense({
        title:'',
        category:'',
        amount:'',
      })
    }
   

    const handleChange = (e)=>{
      const {name, value} = e.target
      // console.log(e.target)
       setsExpense((prevState)=>({
          ...prevState,
          [name] : value,
        }
      ))
      setErrors({})
    }
   
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
    <div className="input-container">
      <label htmlFor="title">Title</label>
      <input id="title" name="title" value={expense.title} onChange={handleChange}/>
      <p className='error'>{errors.title}</p>
    </div>
    <div className="input-container">
      <label htmlFor="category">Category</label>
      <select id="category" name="category" value={expense.category} onChange={handleChange}>
        <option hidden value="">
          All
        </option>
        <option value="Grocery">Grocery</option>
        <option value="Clothes">Clothes</option>
        <option value="Bills">Bills</option>
        <option value="Education">Education</option>
        <option value="Medicine">Medicine</option>
      </select>
      <p className='error'>{errors.category}</p>
    </div>
    <div className="input-container">
      <label htmlFor="amount">Amount</label>
      <input id="amount" name="amount" value={expense.amount} onChange={handleChange} />
      <p className='error'>{errors.amount}</p>
    </div>
    <button className="add-btn">Add</button>
  </form>
  
  )
}

import React, { useState } from 'react'
import Input from './Input'
import SelectOption from './SelectOption'

export default function ExpenseForm({setExpenses}) {

  const [expense, setsExpense] = useState({
    title:'',
    category:'',
    amount:'',
  })

  const [errors, setErrors] = useState({})

  const vlaidateConfig = {
    title:[{required:true, message:'Please enter title'}, {minLength:5, message:'Atleast 5 character required'}],
    category:[{required:true, message:'Please select category'}],
    amount:[{required:true, message:'Please enter amount'}],
  }
  
  const validate = (formData) =>{
    // console.log(formData)
    const errorData = {}

    Object.entries(formData).forEach(([key, value])=>{
      // console.log(key, value)
      // console.log(key)
      // console.log(vlaidateConfig[key])
      vlaidateConfig[key].some((rule)=>{
        console.log(rule)
        if(rule.required && !value){
          errorData[key] = rule.message
          return true
        }
        if(rule.minLength && value.length < 5 ){
          errorData[key] = rule.message
          return true
        }
      })
    })

    // console.log(Object.entries(formData))

    

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
    {/* <div className="input-container">
      <label htmlFor="title">Title</label>
      <input id="title" name="title" value={expense.title} onChange={handleChange}/>
      <p className='error'>{errors.title}</p>
    </div> */}
    <Input id="title" label="Title" name="title" value={expense.title} onChange={handleChange} error={errors.title}/>

    {/* <div className="input-container">
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
    </div> */}
    <SelectOption  id="category" label="Category" name="category" value={expense.category} onChange={handleChange} error={errors.category} defaultOption="Select Category" options={['Grocery', 'Clothes', 'Bills', 'Education', 'Medicine', ]}/>
    {/* <div className="input-container">
      <label htmlFor="amount">Amount</label>
      <input id="amount" name="amount" value={expense.amount} onChange={handleChange} />
      <p className='error'>{errors.amount}</p>
    </div> */}
    <Input id="amount" label="Amount" name="amount" value={expense.amount} onChange={handleChange} error={errors.amount}/>
    {/* <Input id="email" label="email" name="email" value={expense.email} onChange={handleChange} error={errors.email}/>
    <Input id="password" label="password" name="password" value={expense.password} onChange={handleChange} error={errors.password}/> */}
    <button className="add-btn">Add</button>
  </form>
  
  )
}

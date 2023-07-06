import React, { useState } from 'react'
import Input from './Input'
import Select from './Select'

export default function ExpenseForm({expense, setExpense, setExpenses, editingRowId, setEditingRowId}) {

  const [errors,setErrors] = useState({})

  const validateConfig = {
    title:[{required: true, message: 'Please enter Title'}, {minLength:5, message: 'Title should have at least 5 characters'}],
    category:[{required: true, message: 'Please select Category'}],
    amount:[{required: true, message: 'Please enter Amount'}, {isNum: true, message:'Please enter a valid number'}],
    amount:[{required: true, message: 'Please enter Amount'}, {pattern: /^[1-9]\d*(\.\d+)?$/, message: 'Please enter a valid number'}, {isNum: true, message:'Please enter a valid number'}],
  }

  const validate = (fromData) =>{
   
    const errorsData = {}

    Object.entries(fromData).forEach(([key, value])=>{
   
      validateConfig[key].some((rule)=>{
        // console.log(rule)
        if(rule.required && !value){
          errorsData[key] = rule.message
          return true
        }

        if(rule.minLength && value.length < 4){
          errorsData[key] = rule.message
          return true
        }

        if(rule.pattern && !rule.pattern.test(value)){
          errorsData[key] = rule.message
          return true
        }

        // if(rule.isNum && isNaN(value)){
        //   errorsData[key] = rule.message
        //   return true
        // }    

      })

    })

    setErrors(errorsData)
    return errorsData
  }
  
  const submitHandle = (e)=>{
    e.preventDefault()
  
    const validateResult = validate(expense)
 
    if(Object.keys(validateResult).length) return

    if(editingRowId){
       setExpenses((prevState)=>
        prevState.map((prevExpense)=>{
          if(prevExpense.id === editingRowId){
            return {...expense, id:editingRowId}
          }
          return prevExpense
        })
       )
       setExpense({
        title:'',
        category:'',
        amount:'',
      })
       setEditingRowId('')
       return
    }

    setExpenses((prevState)=>[...prevState,{...expense, id:crypto.randomUUID()}])
    setExpense({
      title:'',
      category:'',
      amount:'',
    })
  }

  const handleChange = (e)=>{
    const {name,value} = e.target
    setExpense((prevState)=>
    ({...prevState,[name]:value}) )
    setErrors({})
  }
   

  
  return (
    <>
    <form className="expense-form" onSubmit={submitHandle}>
 
      <Input label='Title' name='title' id='title' value={expense.title} onChange={handleChange} errors={errors.title} />

      <Select label='Category' name='category' id='category' value={expense.category} onChange={handleChange} options={['Grocery', 'Clothes', 'Bills', 'Education','Medicine']} defaultOption='Select Category' errors={errors.category}/>
      
      <Input label='Amount' name='amount' id='amount' value={expense.amount} onChange={handleChange} errors={errors.amount} />
     
      <button className="add-btn">{editingRowId ? 'Save' : 'Add'}</button>
    </form>
    </>
  )

}

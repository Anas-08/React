import { useState } from 'react'

import ExpenseForm from '../src/components/ExpenseForm'
import ExpenseTable from '../src/components/ExpenseTable'
import expenseData from './expenseData'

import './App.css'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  const [expense, setExpense] = useLocalStorage('expense', {
    title:'',
    category:'',
    amount:'',
  })

  const [expenses, setExpenses] = useLocalStorage('expenses', expenseData)
  const [editingRowId, setEditingRowId] =  useLocalStorage('editingRowId', '')

  // const [localData, setLocalData] = useLocalStorage('myNum',[ 1, 2, 3])
  // console.log(localData )



  return (
    <>
      <main>
       <h1>Track Your Expense</h1>
       {/* <h2>{localD/ata.join(', ')}</h2> */}
       <div className="expense-tracker">
   
        <ExpenseForm setExpenses={setExpenses} expense={expense} setExpense={setExpense} editingRowId={editingRowId} setEditingRowId={setEditingRowId}/>
        <ExpenseTable expenses={expenses} setExpenses={setExpenses} setExpense={setExpense} setEditingRowId={setEditingRowId}/>

      </div>
      </main>
    </>
  )
}

export default App

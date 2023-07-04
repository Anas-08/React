import { useState } from 'react'
import './App.css'
import ExpenseForm from './component/ExpenseForm'
import ExpenseTable from './component/ExpenseTable'
import expenseData from './expenseData'

function App() {
  const [expenses,setExpenses] = useState(expenseData)
  return (
    <>
      <main>
      <h1>Track Your Expense</h1>
        <div className="expense-tracker">
            
          <ExpenseForm setExpenses={setExpenses}/>
          <ExpenseTable expense={expenses}/>
          
        </div>
      </main>
    </>
  )
}
export default App

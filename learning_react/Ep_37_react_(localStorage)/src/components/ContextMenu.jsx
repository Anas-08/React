import React from 'react'

export default function ContextMenu({menuPosition, setMenuPosition, setExpense, expenses, setExpenses, rowId, setEditingRowId}) {
  if(!menuPosition.left) return
  return (
    <div className="context-menu" style={menuPosition}>
    <div onClick={(e)=>{
      setEditingRowId(rowId)
      // console.log("Edit")

      const {title, category, amount} = expenses.find((expense)=> expense.id === rowId)
      // console.log(foundExp)

      setExpense({title, category, amount})
      setEditingRowId(rowId)
      setMenuPosition({})
    }}>Edit</div>

    <div onClick={(e)=>{
      // console.log("Delete")
      setExpenses((prevState)=> prevState.filter((expense)=> expense.id !== rowId))
      setMenuPosition({})
    }}>Delete</div>
  </div>
  )
}

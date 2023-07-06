import React from 'react'

export default function ContextMenu({menuPosition, setMenuPosition, setExpenses, rowId}) {
  if(!menuPosition.left) return
  return (
    <div className="context-menu" style={menuPosition}>
    <div onClick={(e)=>{
      console.log("Edit")
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

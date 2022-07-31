import React, { useState } from 'react'

const AddTodo = ({handleClick}) => {
    const [text , setText] = useState("")
    const handleClear=()=>{
        setText("")
    }
  return (
    <div>
        <input onChange={(e)=>setText(e.target.value)} placeholder='write somethihng'
         value={text} ></input>
        <button onClick={()=>handleClick(text, handleClear)}>Submit</button>
        <button onClick={handleClear}>Clear</button>


    </div>
  )
}

export default AddTodo
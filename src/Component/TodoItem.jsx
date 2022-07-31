import React from 'react'

const TodoItem = ({title, status,id, handleToggle, handleDelete}) => {
  return (
    <div style={{width:"40%", display:"flex", borderRadius:"50px", justifyContent:"space-around", height:"100px", margin:"auto", border:"1px solid red"}}>
        <h1>{title}</h1>
        <p>{status?"Done":"Not Done"}</p>
        <button onClick={()=>handleToggle(id)} style={{padding:'1px',margin:"12px", height:"50px"}}>Toggle</button>
        <button onClick={()=>handleDelete(id)} style={{padding:'1px',margin:"12px", height:"50px"}}>Delete</button>
    
    </div>
  )
}

export default TodoItem
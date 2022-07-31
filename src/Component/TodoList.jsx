import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({word, handleToggle, handleDelete}) => {
  return (
    <div>
        {word.map((e)=>(
            <TodoItem  handleDelete={handleDelete} key={e.id} id={e.id} title={e.title} status={e.status} handleToggle={handleToggle}></TodoItem>
        ))}
    </div>
  )
}

export default TodoList
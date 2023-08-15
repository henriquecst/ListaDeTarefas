import React from 'react'

const todo = ({ todo, removeTodo, completaTodo }) => {
  return (
    <div className='todo' style={{textDecoration:todo.isCompleted ? "line-through" : ""}}>
          <div className='content'>
             <p>{todo.text}</p>
             <p className='categoria'>({todo.categoria})</p>
          </div>
          <div> 
             <button className='complete' onClick={() => completaTodo(todo.id)}>Completar</button>
             <button className='remove' onClick={() => removeTodo(todo.id)}> x </button>
          </div>
    </div>
  )
}

export default todo
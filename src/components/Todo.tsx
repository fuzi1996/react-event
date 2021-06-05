import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

const Todo = () => {
  return (
    <div className="todo">
      <TodoInput></TodoInput>
      <TodoList></TodoList>
    </div>
  )
}

export default Todo
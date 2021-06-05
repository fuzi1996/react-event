import React from 'react'
import TodoItem from './TodoItem'

const style = {
  marginTop: '20px'
}

const TodoList = () => {
  return (
    <div className="todo-list" style={style}>
      <TodoItem></TodoItem>
    </div>
  )
}

export default TodoList
import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import Provider from '../store'

const Todo = () => {
  return (
    <Provider>
      <div className="todo">
        <TodoInput></TodoInput>
        <TodoList></TodoList>
      </div>
    </Provider>
  )
}

export default Todo
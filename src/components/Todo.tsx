import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import {Provider} from 'react-redux'
import store from '../store'

const Todo = () => {
  return (
    <Provider store={store}>
      <div className="todo">
        <TodoInput></TodoInput>
        <TodoList></TodoList>
      </div>
    </Provider>
  )
}

export default Todo
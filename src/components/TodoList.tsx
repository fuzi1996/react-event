import React,{useContext} from 'react'
import TodoItem from './TodoItem'
import {TodoContext} from './Provider'
import {StateProps} from '../store/reducer'

const style = {
  marginTop: '20px'
}

const TodoList = () => {

  const {state} = useContext(TodoContext)

  const listItems = state.map((todo:StateProps)=>{
    return (
      <TodoItem key={todo.id} todo={todo}></TodoItem>
    )
  })

  return (
    <div className="todo-list" style={style}>
      {listItems}
    </div>
  )
}

export default TodoList
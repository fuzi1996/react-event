import React,{useContext} from 'react'
import TodoItem from './TodoItem'
import {TodoContext,StateProps} from './Provider'

const style = {
  marginTop: '20px'
}

const TodoList = () => {

  const {todoList} = useContext(TodoContext)

  const listItems = todoList.map((todo:StateProps)=>{
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
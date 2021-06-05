import React,{useContext} from 'react'
import {StateProps,TodoContext} from './Provider'

const style = {
  marginTop: '5px',
  padding: '5px 0',
  boxShadow:'0 0 3px #eee'
}

interface TodoItemProps {
  todo:StateProps;
}

const TodoItem = ({todo}:TodoItemProps) => {
  const {changeTodo} = useContext(TodoContext)

  const changeHandler = () => {
    changeTodo(todo.id)
  }

  const spanstyle = {
    textDecoration: todo.isFinished ? 'line-through':'none'
  }

  return (
    <div className="todo-item" style={style}>
      <input type="checkbox" checked={todo.isFinished} onChange={changeHandler}></input>
      <span style={spanstyle}>{todo.text}</span>
    </div>
  )
}

export default TodoItem
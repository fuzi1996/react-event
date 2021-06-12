import React from 'react'
import { useStore } from '../store'
import {StateProps} from '../store/TodoStore'
import {observer} from 'mobx-react'

const style = {
  marginTop: '5px',
  padding: '5px 0',
  boxShadow:'0 0 3px #eee'
}

interface TodoItemProps {
  todo:StateProps;
}

const TodoItem = ({todo}:TodoItemProps) => {
  const store = useStore()

  const changeHandler = () => {
    store.changeAction(todo.id)
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

export default observer(TodoItem)
import React from 'react'
import { useStore } from '../store'
import { StateProps } from '../store/TodoStore'
import TodoItem from './TodoItem'
import {observer} from 'mobx-react'

const style = {
  marginTop: '20px'
}

const TodoList = () => {

  const store = useStore()

  const listItems = store.todoList.map((todo:StateProps)=>{
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

export default observer(TodoList)
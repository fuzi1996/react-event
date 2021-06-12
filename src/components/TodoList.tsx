import React from 'react'
import TodoItem from './TodoItem'
import {StateProps,RootState} from '../store/reducer'
import {useSelector} from 'react-redux'

const style = {
  marginTop: '20px'
}

const TodoList = () => {

  const state = useSelector((state: RootState) => state);

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
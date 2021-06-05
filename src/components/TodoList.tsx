import React from 'react'
import TodoItem from './TodoItem'
import { StateProps } from './Todo'

const style = {
  marginTop: '20px'
}

interface TodoListProps {
  todoList: StateProps[];
  changeTodo: (id:number) => void;
}

const TodoList = ({todoList,changeTodo}:TodoListProps) => {

  const listItems = todoList.map((todo:StateProps)=>{
    return (
      <TodoItem key={todo.id} todo={todo} changeTodo={changeTodo}></TodoItem>
    )
  })

  return (
    <div className="todo-list" style={style}>
      {listItems}
    </div>
  )
}

export default TodoList
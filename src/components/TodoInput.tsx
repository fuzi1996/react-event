import React,{useState,useContext} from 'react'
import {TodoContext} from './Provider'

const TodoInput = () => {

  const {addTodo} = useContext(TodoContext)

  const [text,setText] = useState<string>("")

  const changeTextHandler = (e:React.ChangeEvent) => {
    setText((e.target as HTMLInputElement).value)
  }

  const addTodoHandler = () => {
    addTodo({
      id: new Date().getTime(),
      text: text,
      isFinished: false
    })
    setText("")
  }

  return (
    <div className="todo-input">
      <input type="text" placeholder="请输入待办事项" onChange={changeTextHandler} value={text}/>
      <button onClick={addTodoHandler}>添加</button>
    </div>
  )
}

export default TodoInput
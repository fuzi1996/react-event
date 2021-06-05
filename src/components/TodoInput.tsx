import React,{useState} from 'react'
import {StateProps} from './Todo'

interface TodoInputProps {
  addTodo: (todo: StateProps) => void;
}

const TodoInput = ({addTodo}:TodoInputProps) => {

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
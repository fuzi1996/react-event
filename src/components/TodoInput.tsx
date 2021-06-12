import React,{useRef, useEffect} from 'react'
import {useStore} from '../store/index'

const TodoInput = () => {

  const inputRef = useRef<HTMLInputElement>(null)

  const store = useStore()

  // 相当于componentDidMount,componentDidUpdate,componentWillUnmount
  useEffect(() => {
    inputRef.current!.focus()
  },[])

  const addTodoHandler = () => {
    const value = inputRef.current!.value

    store.addAction({
      id: new Date().getTime(),
      text: value,
      isFinished: false
    })

    inputRef.current!.value = ''
    
    inputRef.current!.focus()
  }

  return (
    <div className="todo-input">
      <input type="text" placeholder="请输入待办事项" ref={inputRef} />
      <button onClick={addTodoHandler}>添加</button>
    </div>
  )
}

export default TodoInput
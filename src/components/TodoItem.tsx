import React from 'react'

const style = {
  marginTop: '5px',
  padding: '5px 0',
  boxShadow:'0 0 3px #eee'
}

const TodoItem = () => {
  return (
    <div className="todo-item" style={style}></div>
  )
}

export default TodoItem
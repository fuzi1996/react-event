import React,{useState,createContext} from 'react'

export interface ITodoContext {
  todoList: StateProps[];
  changeTodo: (id:number) => void;
  addTodo: (todo: StateProps) => void;
}

//const TodoContext = createContext<ITodoContext|null>(null)
export const TodoContext = createContext({} as ITodoContext)

export interface StateProps {
  id: number;
  text: string;
  isFinished: boolean;
}

const Provider = (props:React.PropsWithChildren<{}>) => {

  const [todoList,setTodoList] = useState<StateProps[]>([]);

  const changeTodo = (id:number) => {
    const newTodoList = todoList.map(item => {
      if(item.id === id){
        return Object.assign({},item,{
          isFinished: !item.isFinished
        })
      }
      return item;
    })
    setTodoList(newTodoList)
  }

  const addTodo = (todo: StateProps) => {
    setTodoList([...todoList,todo])
  }

  return (
    <TodoContext.Provider value={
      {
        todoList,
        changeTodo,
        addTodo
      }
    }>
      {props.children}
    </TodoContext.Provider>
  )
}

export default Provider
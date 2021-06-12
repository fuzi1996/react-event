import React,{createContext,useContext} from 'react'
import todoStore from './TodoStore'

export const TodoContext = createContext<typeof todoStore>(todoStore);

// 自定义hook
export const useStore = () => {
  const store = useContext(TodoContext);
  if(!store) throw Error('no store')
  return store
}

const Provider: React.FC = ({children}) => {
  return <TodoContext.Provider value={todoStore}>
    {children}
  </TodoContext.Provider>
}

export default Provider
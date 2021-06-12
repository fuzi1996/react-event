import React,{useReducer,createContext} from 'react'
import reducer,{StateProps,ActionProps} from '../store/reducer'

export interface ITodoContext {
  state: StateProps[];
  dispatch: React.Dispatch<ActionProps>;
}

export const TodoContext = createContext({} as ITodoContext)

const Provider = (props:React.PropsWithChildren<{}>) => {
  const initState:StateProps[] = []
  const [state,dispatch] = useReducer(reducer,initState)


  return (
    <TodoContext.Provider value={
      {
        state,
        dispatch
      }
    }>
      {props.children}
    </TodoContext.Provider>
  )
}

export default Provider
import {makeAutoObservable} from 'mobx'

export interface StateProps {
  id: number;
  text: string;
  isFinished: boolean;
}

class TodoStore {
  todoList: StateProps[] = [];

  //import {makeObservable,observable,action} from 'mobx'
  // makeObservable(this,{
  //   todoList: observable,
  //   addAction: action,
  //   changeAction: action
  // })
  constructor(){
    makeAutoObservable(this)
  }

  addAction(todo: StateProps){
    this.todoList.push(todo)
  }

  changeAction (id: number) {
    this.todoList = this.todoList.map(item => {
      if(item.id === id){
        return Object.assign({},item,{isFinished:!item.isFinished})
      }else{
        return item
      }
    })
  }
}

export default new TodoStore()
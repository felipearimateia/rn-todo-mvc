
import { observable, action, computed } from 'mobx'
import store from '../../stores'

class TodoController {

  @computed
  get items() {
    return store.todos.items
  }

}


export default new TodoController()

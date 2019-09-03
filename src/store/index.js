
import Vue from 'vue'

const INITIAL_DATA = {
    todos: [
        {
          _id: '1',
          title: 'Walk the dog',
          description: 'Go to the forest near the Zoo'
        },
        {
          _id: '2',
          title: 'Buy a bread',
          description: 'Whole grain bread would be good'
        },
        {
          _id: '3',
          title: 'Learn Programming',
          description: 'Preferable Tomorrow!'
        }
    ]
}
const store = {
    state : {
        todos: []
    },
    actions: {
        initStore(state){
            const todos = localStorage.getItem('app-todos')
            if(!todos) {
                Vue.set(state, 'todos', INITIAL_DATA.todos)
            }else{
                Vue.set(state, 'todos', JSON.parse(todos))
            }

            return state.todos
        },
        createTodo(state, todo) {
            todo._id = Math.random().toString(36).substr(2, 7)
            state.todos.push(todo)

            return state.todos
        },
        updateTodo(state, todoToUpdate){
            const index = state.todos.findIndex((todo) => {
                return todo._id === todoToUpdate._id
            })
               
            Vue.set(state.todos, index, todoToUpdate)
            return state.todos
        },
        deleteTodo(state, todoToDelete){
            const index = state.todos.findIndex((todo) => {
                return todo._id === todoToDelete._id
            })
            state.todos.splice(index, 1)
            return state.todos
        }
    }
}

function persistData(value){
    const stringifyValue = JSON.stringify(value)
    localStorage.setItem('app-todos', stringifyValue)
}


store.dispatch = function(action, payload) {
    if(!this.actions[action]) {
        throw new Error(`Action ${action} is not define in the store `)
    } 

    const result = this.actions[action](this.state, payload)

    if(!result) return

    persistData(result)
    return result
}







export default store
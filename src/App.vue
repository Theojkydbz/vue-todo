<template>
  <div id="app">
    <div class="todo-wrapper">
      <div class="todo-container">
        <TodoList :todos="todos" />
        <div class="todo-create-btn-container">
          <TodoCreate @formSubmitted="createTodo"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import TodoCreate from '@/components/TodoCreate'

import store from '@/store'

export default {
  name: 'app',
  components: {
    TodoList,
    TodoCreate
  },
  data(){
    return {
      todos: store.state.todos
    }
  },
  methods:{
    createTodo(todo) {
      store.dispatch('createTodo', todo)
    }
  },
  created(){ //this code is run automaticly by vue
    // playground()
    this.todos = store.dispatch('initStore')
  },
}
</script>

<style lang="scss">

$color-red: red;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.app-error{
  color: #ff5d5d;
}

.app-form {
  .label{
    display: block;
    font-size: 18px;
    font-weight: bold;
  }
  .form{
    &-input{
      padding: 10px;
      font-size: 17px;
    }
    &-control {
      margin-bottom: 10px;
    }
  }
}

.app{
  &-button{
    padding: 10px;

    border-radius: 5px;
    background-color: #5cac5a;
    color: white;
    font-size: 20px;
    font-weight: bold;
    border: none;
    font-size: 15px;

    &.is-primary{
      background-color: #5cac5a;
      &:hover{
          background-color: #50974e;
          cursor: pointer;
      }
    }
    &.is-warning{
      background-color: #86ad58;
      margin: 0px 5px 0px 0px;
      &:hover{
          background-color: #54742f;
      }
    }
    &.is-danger{
      background-color: #8d8d8d;
      &:hover{
          background-color: #535353;
      }
    }


    &:hover{
      background-color: #50974e;
      cursor: pointer;
    }
  }
}






.todo {
  &-wrapper{
      /* flexible styling */
    display: flex;

    /* it defines alignment along the main axis */
    justify-content: center;

    /* flex-direction: column; */
    width: 100%;
    /* height: 2000px */
  }

  &-container{
    display: flex;
    flex-direction: column;
    width: 400px;
    min-height: 205px;

    background-color: #ededed;
    border-radius: 10px;
  }

  &-create{
    &-btn{
      &-container{
        margin: 10px;

      }
    }
  }

}

</style>

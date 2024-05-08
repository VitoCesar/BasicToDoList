import React from "react";
import TodoCreator from './containers/TodoCreator/TodoCreator'
import TodoList from './containers/TodoList/TodoList'

function TodoApp(){
  return (
    //fragment
    <>
      <TodoCreator />
      <TodoList />
      <footer>TodoFilter</footer>
    </>
  )
}

export default TodoApp
import React from "react";
import TodoCreator from './containers/TodoCreator/TodoCreator'

function TodoApp(){
  return (
    //fragment
    <>
      <TodoCreator />
      <main>TodoList</main>
      <footer>TodoFilter</footer>
    </>
  )
}

export default TodoApp
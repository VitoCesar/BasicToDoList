import React, { useContext, useCallback, useState } from "react";
import TodosContext from '../../../../state/todo/Context'
import TodoItem from './components/TodoItem/TodoItem'
import TodoModal from './components/TodoModal/TodoModal'
import * as todosActions from '../../../../state/todo/actions'
import styles from './TodoList.module.css'

function TodoList(){
  //destructing
  const { todos, dispatchToTodos } = useContext(TodosContext)
  const handleUpdate = useCallback((id, title) => {
    dispatchToTodos(todosActions.toggleTodoTitle(id, title))
  }, [dispatchToTodos])
  const handleDelete = useCallback((id) => {
    dispatchToTodos(todosActions.removeTodo(id))
  }, [dispatchToTodos])
  const handleStatus = useCallback((id, completed) => {
    dispatchToTodos(todosActions.toggleTodoStatus(id, completed))
  }, [dispatchToTodos])
  const [currentId, setCurrentId] = useState(null)
  
  const handleModalOpen = useCallback((id) => {
    setCurrentId(id)
  }, [])
  const handleModalClose = useCallback(() => {
    setCurrentId(null)
  }, [])
  const getTitle = useCallback((id) => {
    const currentTodo = todos.find((todo) => {
      return todo.id === id
    })
    return currentTodo.title
  }, [todos])
  return (
    <div className={styles.container}>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem 
              key={todo.id} 
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onModalOpen={handleModalOpen}
              onStatus={handleStatus}
              //funçao callback nao pode ta executada
              onDelete={handleDelete}
            />
          )
        })}
      </ul>
      {currentId && (
        <TodoModal 
          id={currentId}
          onModalClose={handleModalClose} 
          onTitleUpdate={handleUpdate}
          findTitle={getTitle}
          />
      )}
    </div>
  )
}

export default TodoList
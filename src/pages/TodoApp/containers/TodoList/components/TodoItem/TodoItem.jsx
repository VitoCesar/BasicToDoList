import React, { useState, useCallback, useEffect } from "react"
import styles from './TodoItem.module.css';

function TodoItem({id, title, completed, onModalOpen, onStatus, onDelete}){
  const [isChecked, setIsChecked] = useState(completed)
  const handleChange = useCallback((e) => {
    setIsChecked(e.target.checked)
  }, [])
  useEffect(() => {
    onStatus(id, isChecked)
  }, [onStatus, id, isChecked])
  const handleModalOpen = useCallback(() => {
    onModalOpen(id)
  }, [onModalOpen, id])
  const handleDelete = useCallback(() =>{
    onDelete(id)
  }, [onDelete, id])
  return (
    <li className={styles.item}>
      <span className={completed ? styles.completed : null}>{title}</span>
      <div className={styles.controlButtons}>
        <button onClick={handleModalOpen}>Editar Tarefa</button>
        <input type="checkbox" checked={isChecked} onChange={handleChange}/>
        <button className={styles.delete} onClick={handleDelete}>Apagar</button>
      </div>
    </li>
  )
}

export default TodoItem
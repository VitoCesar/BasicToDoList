import React, { useState, useCallback, useEffect } from "react"

function TodoItem({id, title, completed, onModalOpen, onStatus, onDelete}){
  const [isChecked, setIsChecked] = useState(completed)
  const handleChange = useCallback((e) => {
    setIsChecked(e.target.checked)
  }, [])
  useEffect(() => {
    onStatus(id, isChecked)
  }, [onStatus, id, isChecked])
  const handleTitleUpdate = useCallback(() => {
    onModalOpen(id)
  }, [onModalOpen, id])
  const handleDelete = useCallback(() =>{
    onDelete(id)
  }, [onDelete, id])
  return (
    <li>
      <span>{title}</span>
      <button onClick={handleTitleUpdate}>Editar Tarefa</button>
      <input type="checkbox" value={isChecked} onChange={handleChange}/>
      <button onClick={handleDelete}>Apagar</button>
    </li>
  )
}

export default TodoItem
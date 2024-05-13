import React from "react";
import styles from './TodoSelect.module.css'

function TodoSelect({ value, onOption, options }){
  return (
    <select 
      className={styles.select}
      value={value} 
      onChange={onOption}
    >
      {options.map((option) => {
        return (
          <option 
            key={option.value} 
            value={option.value}
          >
            {option.title}
          </option>
        )    
      })}
    </select>
  )
}

export default TodoSelect
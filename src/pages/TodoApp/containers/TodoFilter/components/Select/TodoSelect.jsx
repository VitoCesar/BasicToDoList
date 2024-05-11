import React from "react";

function TodoSelect({ value, onOption, options }){
  return (
    <select value={value} onChange={onOption}>
      {options.map((option) => {
        return <option key={option.value} value={option.value}>{option.title}</option>
      })}
    </select>
  )
}

export default TodoSelect
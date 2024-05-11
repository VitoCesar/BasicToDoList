import React, { useContext, useCallback, useState, useEffect } from "react";
import TodoSelect from "./components/Select/TodoSelect";
import FilterContext from '../../../../state/filter/Context'
import * as filterActions from "../../../../state/filter/actions"
import styles from './TodoFilter.module.css'

function TodoFilter(){
  const { filter, dispatchToFilter } = useContext(FilterContext)
  const [ selectValue, setSelectValue ] = useState(filter)
  const handleOption = useCallback((e) => {
    setSelectValue(e.target.value)
  }, [setSelectValue])
  const updateFilter = useCallback((filter) => {
    dispatchToFilter(filterActions.toggleFilter(filter))
  }, [dispatchToFilter])
  useEffect(() => {
    updateFilter(selectValue)
  }, [updateFilter, selectValue])
  return(
    <div className={styles.container}>
      <TodoSelect 
        value={selectValue} 
        onOption={handleOption}
        options={[
          { value: 'all', title: 'Todas as tarefas' },
          { value: 'active', title: 'Tarefas não concluídas' },
          { value: 'completed', title: 'Tarefas concluídas' }
        ]}
      />
    </div>
  )
}

export default TodoFilter
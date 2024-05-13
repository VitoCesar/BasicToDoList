import React, { useContext, useEffect, useRef } from "react";
import { useFormik } from "formik";
import TodosContext from '../../../../state/todo/Context'
import * as todosActions from "../../../../state/todo/actions"
import * as yup from 'yup'
import styles from './TodoCreator.module.css'

function TodoCreator(){
  //destruct
  const { dispatchToTodos } = useContext(TodosContext)
  const { getFieldProps, errors, handleSubmit} = useFormik({
    initialValues: {
      title: ''
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: yup.object({
      title: yup.string().required('Campo não pode ficar em branco')
    }),
    //nao é necessario event.preventeDefault ao utilizar formik
    onSubmit: (values, formikBag) => {
      dispatchToTodos(todosActions.addTodo(values.title))
      formikBag.setFieldValue('title', '', false)
    }
  })
  const inputTitle = useRef(null)
  useEffect(() => {
    inputTitle.current.focus()
  }, [])
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input 
        className={styles.input}
        type="text" 
        placeholder="Nova Tarefa"
        autoComplete="off"
        ref={inputTitle}
        {...getFieldProps('title')}
        />
        {errors.title ? (
          <small className={styles.error}>{errors.title}</small>
        ): null}
        <button 
          className={styles.submit}
          type="submit"
        >
          Adicionar
        </button>
    </form>
  )
}

export default TodoCreator
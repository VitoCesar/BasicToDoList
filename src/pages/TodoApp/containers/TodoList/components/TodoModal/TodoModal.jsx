import React from "react";
import { useFormik } from "formik";
import * as yup from 'yup'
import styles from './TodoModal.module.css'

function TodoModal({ id, onModalClose, onTitleUpdate, findTitle }){
  const { getFieldProps, touched, errors, isValid, handleSubmit} = useFormik({
    initialValues: {
      title: findTitle(id)
    },
    validationSchema: yup.object({
      title: yup.string().required('Campo não pode ficar em branco')
    }),
    //nao é necessario event.preventeDefault ao utilizar formik
    onSubmit: (values, formikBag) => {
      onTitleUpdate(id, values.title)
      formikBag.setFieldValue('title', '', false)
      onModalClose()
    }
  })
  return (
    <>
      <div className={styles.backdrop} />
      <div className={styles.containerModal}>
        <form onSubmit={handleSubmit}>
        <button className={styles.buttonClose} onClick={onModalClose}>X</button>
          <input 
            className={styles.input}
            type="text" 
            placeholder="Nova Tarefa"
            autoComplete="off"
            {...getFieldProps('title')}
            />
            {touched.title && errors.title ? (
              <small className={styles.error}>{errors.title}</small>
            ): null}
            <button
              className={styles.submit}
              type="submit" 
              disabled={!isValid}
            >
              Editar
            </button>
        </form>
      </div>
    </>
  )
}

export default TodoModal
import React from "react";
import { useFormik } from "formik";
import * as yup from 'yup'

function TodoModal({ id, onModalClose, onTitleUpdate }){
  const { getFieldProps, touched, errors, isValid, handleSubmit} = useFormik({
    initialValues: {
      title: ''
    },
    validationSchema: yup.object({
      title: yup.string().required('Campo não pode ficar em branco')
    }),
    //nao é necessario event.preventeDefault ao utilizar formik
    onSubmit: (values, formikBag) => {
      onTitleUpdate(id, values.title)
      formikBag.setFieldValue('title', '', false)
    }
  })
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nova Tarefa"
          autoComplete="off"
          {...getFieldProps('title')}
          />
          {touched.title && errors.title ? (
            <small>{errors.title}</small>
          ): null}
          <button
            type="submit" 
            disabled={!isValid}
          >
            Editar
          </button>
      </form>
      <button onClick={onModalClose}>X</button>
    </div>
  )
}

export default TodoModal
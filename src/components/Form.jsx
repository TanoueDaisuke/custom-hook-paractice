import React from 'react'

import useField from '../hooks/useField'

const Form = () => {
  const nameField = useField('name')
  const dateField = useField('date')
  const numberField = useField('number')

  return (
    <>
      <h2>Form App</h2>
      <form>
        name: 
        <input { ...nameField } /> 
        <br/> 
        birthdate:
        <input { ...dateField }/>
        <br /> 
        height:
        <input { ...numberField }/>
      </form>
      <div>
        {nameField.value} {dateField.value} {numberField.value} 
      </div>
    </>
  )
}

export default Form
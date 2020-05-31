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
        <input
          type={nameField.type}
          value={nameField.value}
          onChange={nameField.onChange} 
        /> 
        <br/> 
        birthdate:
        <input
          type={dateField.type}
          value={dateField.value}
          onChange={dateField.onChange} 
        />
        <br /> 
        height:
        <input
          type={numberField.type}
          value={numberField.value}
          onChange={numberField.onChange} 
        />
      </form>
      <div>
        {nameField.value} {dateField.value} {numberField.value} 
      </div>
    </>
  )
}

export default Form
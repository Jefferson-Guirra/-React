import React from 'react'

const Select = ({options,value,setValue,...props}) => {
  return (
    <select value={value} {...props} onChange ={({target})=>setValue(target.value)}>
      <option disabled value=''>Selecione</option>
     {options.map(option=><option key={option} value={option}>{option}</option>)}
    </select>
  )
}

export default Select
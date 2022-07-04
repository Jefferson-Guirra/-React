import React from 'react'

const Input = ({id,label,setValue,nome,...props}) => {
  function handleChange({target}){
    setValue(target.value)
  }
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input 
      
        id={id} 
        value={nome} 
        onChange ={handleChange}
        {...props}
      />

      
    </p> 
  )
}

export default Input
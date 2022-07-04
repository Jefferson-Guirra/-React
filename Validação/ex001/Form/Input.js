import React from 'react'

const Input = ({id,label,setValue,onChange,nome,...props}) => {
 
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input 
      
        id={id} 
        value={nome} 
        onChange ={onChange}
        {...props}
      />

      
    </p> 
  )
}

export default Input
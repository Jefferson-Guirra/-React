import React from 'react'

const Input = ({id,label,setValue,onChange,value,type,onBlur,placeholder,error}) => {
 
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input 
      
        id={id} 
        onChange ={onChange}
        placeholder={placeholder}
        onBlur ={onBlur}
        type={type}
        value={value}
      />
      {error && <p>{error}</p>}

      
    </> 
  )
}

export default Input
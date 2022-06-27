import React from 'react'

const Input = ({label,id,...args}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type='text' {...args}/>
    </>
  )
}

export default Input
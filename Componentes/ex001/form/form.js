import React from 'react'
import Button from './button'
import Input from './input'


export const Form = () => {
  return (
    <div>
      <form>
      <p>
        <label>Nome</label>
        <Input />
      </p>
      <p>
        <label>Idade</label>
        <Input />
      </p>
      <Button />
      </form>
      
    </div>
  )
}

export default Form

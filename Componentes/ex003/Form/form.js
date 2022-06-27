import React from 'react'
import Input from './input'

const Form = () => {
  return (
    <form>
      
      <Input label= 'Nome' id='nome' />
      <Input label= 'Password' id='password' type ='password'/>

    </form>
  )
}

export default Form
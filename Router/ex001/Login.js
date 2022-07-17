import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigation = useNavigate()
  function handleClick(){
      navigation('/sobre')
  }
  return (
    <div>
      <h1>Este é o login</h1>
      <button onClick={handleClick}>Enviar</button>

    </div>
  )
}

export default Login
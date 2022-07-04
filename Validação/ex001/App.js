import React from 'react'
import Input from './Form/Input'

const App = ()=>{
  const [cep,setCep] = React.useState('')
  const [error,setError] = React.useState(null)

  function validateCep(value){
    if(value.lenght === 0) {
      setError('preencha este campo')
      return false
    }
    else if(!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um CEP válido')
      return false
    }
    else {
      setError(null)
      return true
    
    }

  }


  function handleBlur({target}){
    validateCep(target.value)

  }

  function handleChange({target}){
    if(error) validateCep(target.value)
    setCep(target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    if(validateCep(cep)) console.log('enviou')
    else console.log('não enviou')
  }

  return (
    <form  onSubmit={handleSubmit}>
      <Input 
      type='text' 
      label='CEP' 
      id='Cep' 
      value={cep} 
      setValue ={setCep} 
      placeholder ='00000-000'
      onBlur={handleBlur}
      onChange ={handleChange}
      />
      
      {error && <p>{error}</p>}
      <button>Enviar</button>

    </form>
  )
}
export default App

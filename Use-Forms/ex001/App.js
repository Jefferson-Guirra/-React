import React from 'react'
import Input from './Form/Input'
import useForms from './Hooks/useForms'

const App = ()=>{
  const cep = useForms('cep')
  const email = useForms('email')
  const nome = useForms('')
 
  function handleSubmit(event){
    event.preventDefault()
    if(cep.validate()) console.log('enviou')
    else console.log('não enviou')
  }

  return (
    <form  onSubmit={handleSubmit}>

      <Input 
        type='text' 
        label='Nome' 
        id='email' 
        {...nome}

       

      />
      <Input 
      type='text' 
      label='CEP' 
      id='Cep' 
      {...cep}

      placeholder ='00000-000'

      />


      <Input 
        type='email' 
        label='Email' 
        id='email' 
        {...email}

       

      />


      <button>Enviar</button>

    </form>
  )
}
export default App

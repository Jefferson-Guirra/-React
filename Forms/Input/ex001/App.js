import React from 'react'

const App = () => {
  const [nome,setNome] = React.useState('')
  const [email,setEmail] = React.useState('')
  function handleSubmit(event){
    event.preventDefault()
    console.log(event)
  }
 return (
  <form onSubmit={handleSubmit}>
    <label htmlFor='nome'>Nome</label>
    <input 
    id='nome'
    name='nome'
    value={nome}
    onChange={({target})=>setNome(target.value)}
    
    
    
    
    
    type="text"/>

    <label htmlFor='email'>Email</label>
    <input type='email' name ='name' id='email' value={email} onChange={({target})=>setEmail(target.value)} />
    <button>Enviar</button>
  </form>
 )
};

export default App

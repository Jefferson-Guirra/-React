import React from 'react'

const App = () => {
  const [form,setForm] = React.useState(()=>{
    return {
      id:'',
      nome:''
    }
  })

  function handleSubmit(event){
    event.preventDefault()
    console.log(event)
  }

  function handleChange({target}){
    const {id,value}= target
    setForm({...form,[id]:value})
    
  }

 return (
  <form onSubmit={handleSubmit}>
    <label htmlFor='nome'>Nome</label>
    <input 
    id='nome'
    name='nome'
    value={form.nome}
    onChange={handleChange}
    
    
    
    
    
    type="text"/>

    <label htmlFor='email'>Email</label>
    <input type='email' name ='name' id='email' value={form.email} onChange={handleChange} />
    <button>Enviar</button>
  </form>
 )
};

export default App

import React from 'react'

const formContent = [
  {
    id: 'nome',
    type: 'text',
    label: 'Nome'
  },

  {
    id: 'email',
    type: 'email',
    label: 'Email'
  },

  {
    id: 'senha',
    type: 'password',
    label: 'Senha'
  },
  {
    id: 'cep',
    type: 'text',
    label: 'Cep'
  },
  {
    id: 'rua',
    type: 'text',
    label: 'Rua'
  },
  {
    id: 'numero',
    type: 'text',
    label: 'Número'
  },
  {
    id: 'bairro',
    type: 'text',
    label: 'bairro'
  },
  {
    id: 'cidade',
    type: 'text',
    label: 'Cidade'
  },
  {
    id: 'estado',
    type: 'text',
    label: 'Estado'
  },

]

const formFormat = formContent.reduce((acc,campo)=>{
  console.log(acc)
  return {
    ...acc,
    [campo.id]:''
  }
  
},{})

const App = () => {
  const [form, setForm] = React.useState(
    formContent.reduce((acc,campo)=>{
      
      return {
        ...acc,
        [campo.id]:''
      }
      
    },{})
    
      
      
      
      
      
      
      
      /* Tambem Poderia ser Feito Assim
      nome: '',
      email: '',
      senha: '',
      cep: '',
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: ''*/
    
  )

  const [response,setResponse] = React.useState(null)

  function handleChange({ target }) {
    const { id, value } = target
    setForm({ ...form, [id]: value })
  }
  function handleSubmit(event){
    event.preventDefault()
    fetch('https://ranekapi.origamid.dev/json/api/usuario',{
      method: 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify(form)
    }).then(response=>setResponse(response))
  }

  return (
    <form onSubmit={handleSubmit}>
      {formContent.map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input
            type={type}
            id={id}
            name={id}
            onChange={handleChange}
            value={form[id]}
          />
        </div>
      ))}
      {response && response.ok && <p>Cadastro Finalizado</p>}
      <button>Enviar</button>
    </form>
  )
}

export default App

import React from 'react'
import Checkbox from './Form/Checkbox'
import Input from './Form/Input'
import Radio from './Form/Radio'
import Select from './Form/Select'

const App = ()=>{
  const [nome,setNome] = React.useState('')
  const [email,setEmail] = React.useState('')
  const [produto,setProdutos] = React.useState('')
  const [cores,setCores] = React.useState('')
  const [times,setTimes] = React.useState([])
  const [termos,setTermos] = React.useState([])
  




  return (
    <form  >
      <h2>Termos</h2>
      <Checkbox options={['Li e Aceito os Termos']} valor ={termos} setValue={setTermos} />

      <h2>Melhores Times</h2>
       <Checkbox valor ={times} setValue={setTimes} options={['flamengo','bahia','Ponte Preta']} />
      <h2>Cores</h2>
      <Radio   value={cores} setValue={setCores} options={['Azul','Amarelo','Vermelho']} />
      <Select value={produto} setValue={setProdutos} options={['Notebook','Tablet','Smartphone']}/>
      <Input id='nome' label='Nome' type='text' value ={nome} setValue={setNome} required/>
      <Input id='email' label='Email' type='email' value={email} setValue ={setEmail} required />
      
      <p>{nome}</p>
      <p>{email}</p>
      <p>{produto}</p>
      <p>{cores}</p>
      <button>enviar</button>

    </form>
  )
}
export default App

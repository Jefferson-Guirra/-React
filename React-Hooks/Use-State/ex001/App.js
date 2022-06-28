import React from 'react'

const App = () => {
  const [ativo,setAtivo] = React.useState(true)
  const [dados,setDados] = React.useState({nome:'andre',idade:'27'})
  
  function handleClick(){
    setAtivo(!ativo)
    setDados({...dados,faculdade:'sim'})
  }
  
  return (
    <>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo?'ativo':'inativo'}</button>
    </>
  )
}

export default App

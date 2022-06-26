/*----------------------- RESOLUÇÃO DO PRIMEIRO EXERCÍCIO------------------*/

import React from 'react'
const titulo = <h1> Esse é o titulo</h1>
function App() {
  const nome = 'Jefferson'
  const ativo = false
  const styleH1 ={
    color:'tomato',
    fontSize:'2rem'
  }
  function nomeMostrar(terceiroNome){
    return `Guirra ${terceiroNome}`
  }
  const roupa ={
    marca: 'adidas',
    preço: 350
  }
  return (
    <>
      <p>{false?'Jeniffer Guirra' : 'Mirela Tamires'}</p>
      {titulo}
      <h1 style={styleH1}>Titulo estilizado</h1>
      <p className={ ativo ?'ativo':'inativo'}>{nome} {nomeMostrar('de Freitas')}</p>
      <p>{new Date().getHours()} {new Date().getMinutes()}</p>
      <p>{roupa.marca}- {roupa.preço}</p>

    </>
  )
}

export default App
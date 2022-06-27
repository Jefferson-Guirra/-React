/*-----------------------RESPOSTA DO SEGUNDO EXERCÍCIO------------------*/
import React from 'react'
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' }
  ],
  ativa: true
}

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' }
  ],
  ativa: false
}

const App = () => {
  const dados = luana
  const situacao = dados.ativa
  const precoFormatado = dados.compras
    .map(item => Number(item.preco.replace('R$ ', '')))
    .reduce((acc, valor) => acc + valor)

  return (
    <>
      <p>Nome:{dados.cliente}</p>
      <p>Idade:{dados.idade}</p>
      <div>
        Situação:{' '}
        <span style={{ color: situacao ? 'green' : 'red' }}>
          {situacao ? 'Ativa' : 'Inativa'}
        </span>
      </div>
      <p>Total gasto: {precoFormatado}</p>
      <p>{precoFormatado > 10000 && 'Você está gastando muito'}</p>
    </>
  )
}

export default App
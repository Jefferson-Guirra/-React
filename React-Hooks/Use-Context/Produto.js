import React from 'react'
import { GlobalContext } from './GlobalContext'


const Produto = () => {
  const dados = React.useContext(GlobalContext)

  
  return (
    <button onClick={()=>dados.adicionarUm()}>{dados.contador}</button>
  )
}

export default Produto
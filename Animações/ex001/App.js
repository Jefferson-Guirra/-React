import React from 'react'
import './App.css'
import Produto from './Produto';





const App = () => {
  const [ativo,setAtivar] = React.useState(false)
  return (
    <>
      <button onClick={()=>setAtivar(!ativo)}>Ativar</button>
      {ativo && <Produto />}
    </>
    
  )
};

export default App

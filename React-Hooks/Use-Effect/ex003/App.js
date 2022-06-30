import React from 'react'
import Produto from './Produto'

const App = () => {
  const [dados,setDados] = React.useState(null)

  React.useState(()=>{
    const produtoLocal = window.localStorage.getItem('produto')
    if(produtoLocal !== null) setDados(produtoLocal)
  },[])

  React.useEffect(()=>{
    if(dados!==null){
      window.localStorage.setItem('produto',dados)
    }
  },[dados])

 function activeDados(event){
  setDados(event.target.innerText)
  

  }


  
  return (
    <>
    {<h1>Preferências: {dados}</h1>}
    <button style={{margin:'0.5rem'}} onClick={activeDados}>tablet</button>
    <button  style={{margin:'0.5rem'}} onClick={activeDados}>notebook</button>
    <Produto dados={dados} />
      
    </>
  )
}

export default App

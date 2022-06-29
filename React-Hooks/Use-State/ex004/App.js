import React from 'react'
import Produto from './Produto'

const App = () => {
  const [dados,setDados] = React.useState(null)
  const [loading,setLoading] = React.useState(null)
  async function handleClick(event){
    setLoading(true)
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
    const json = await response.json()
    setLoading(null)
    setDados(json)
   

  }


  return (
    <>
     <button style={{margin:'0.5rem'}} onClick={handleClick}>smartphone</button>
     <button style={{margin:'0.5rem'}} onClick={handleClick}>notebook</button>
     <button style={{margin:'0.5rem'}} onClick={handleClick}>tablet</button>
     {loading && <p>Carregando...</p>}
     {!loading && dados && <Produto  dados ={dados}/>}
    </>
  )
}

export default App

import React from 'react'

const App = () => {
  const [contar, setContar] = React.useState(0)
  const [dados,setDados] = React.useState(null)

  React.useEffect(()=>{
    fetch('https://ranekapi.origamid.dev/json/api/produto/tablet').then(r=>r.json())
    .then(body=>setDados(body))
  }, [])
  


  React.useEffect(() => {
    document.title = 'total ' + contar
  }, [contar])

  return (
    <>
      {dados && <div>
        <p>{dados.nome}</p>
        <p>Preço: R$ {dados.preco *contar}</p>
      
      </div>}
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </>
  )
}

export default App

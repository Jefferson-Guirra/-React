import React from 'react'

const Produto = ({dados}) => {
const [produtos,setProdutos] = React.useState(null)
  React.useEffect(()=>{
    if(dados!==null){
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${dados}`).then(r=>r.json())
      .then(body=>setProdutos(body))
    
    }
  },[dados])

  if (produtos===null) return null
    return (
    <>
      <h1>{produtos.nome}</h1>
      <p>R$ {produtos.preco}</p>
    </>
  )

}

export default Produto
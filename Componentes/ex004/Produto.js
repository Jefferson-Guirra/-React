import React from 'react'

const Produto = ({produto}) => {
  return (
    <div style={{border:'1px solid black',padding:'10px',marginBottom:'20px'}}>
      <p>{produto.nome}</p>
      <ul>
        {produto.propriedades.map((prop)=>{
          return <li key={prop}>{prop}</li>
        })}
      </ul>
    </div>
  )
}

export default Produto
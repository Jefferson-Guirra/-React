import React from 'react'
import { NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom'
import ProdutoAvaliação from './ProdutoAvaliação'
import ProdutoCustomizado from './ProdutoCustomizado'
import ProdutoDescricao from './ProdutoDescricao'

const Produto = () => {
  const navigation = useParams()
  const location = useLocation()
  const search = new URLSearchParams(location.search)
  console.log(search.get('q'))
  
  
  return (
    <div>
      <h1>Produto:{navigation.id}</h1>
      <nav>
        <NavLink to='' activeStyle={{color:'tomato'}} end>Descrição</NavLink>{' '}
        <NavLink to ='avaliacao' activeStyle={{color:'tomato'}} >Avalição</NavLink>{' '}
        <NavLink to ='customizado' activeStyle={{color:'tomato'}}>Customizado</NavLink>
      </nav>
      <Routes>
        <Route path='' element={<ProdutoDescricao/>}/>
        <Route path='avaliacao' element={<ProdutoAvaliação/>}/>
        <Route path='customizado' element={<ProdutoCustomizado />}/>
      </Routes>
    </div>
  )
}

export default Produto
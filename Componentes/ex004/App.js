import React from 'react'
import Home from './Home'
import Header from './Header'
import Produtos from './Produtos'
const App = () => {
  const { pathname } = window.location
  let Pagina
  if (pathname === '/produtos') {
    Pagina = Produtos
  }
  else{
    Pagina = Home
  }

  return (
    <section>
      <Header />
      <Pagina />
    </section>
  )
}

export default App

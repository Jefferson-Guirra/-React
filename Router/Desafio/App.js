import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contato from './Contato'
import Header from './Header'
import Home from './Home'
import './App.css'
import Footer from './Footer'
import Produto from './Produto'


function App() {
 const [dados,setdados] = React.useState(null)
  

 React.useState(()=>{
  async function fetchProduto(){
    const response = await fetch('https://ranekapi.origamid.dev/json/api/produto')
    const json = await response.json()
    setdados(json)
  }
  fetchProduto()
 },[])

 
 
  
  
  return (
    <div className='App'>
          <BrowserRouter>
        <Header />
        <div className='content'>
        <Routes>
          <Route path='/' element={<Home dados ={dados} />}/>
          <Route path='contato' element={<Contato />}/>
          <Route path='produto/:id' element={<Produto />}/>
        </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

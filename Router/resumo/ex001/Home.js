import React from 'react'
import { Link } from 'react-router-dom'
import Head from './Head'

const Home = () => {
  return (
    <div>
      <Head tittle ='Home' description ='esta é a descrição da home'/>
      <h1>Esta é a Home</h1>
      <Link to='produto/smartphone'>Smartphone</Link>{' '}
      <Link to='produto/notebook'>Notebook</Link>
    </div>
  )
}

export default Home
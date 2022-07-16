import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Esta é a Home</h1>
      <Link to='produto/smartphone'>Smartphone</Link>{' '}
      <Link to='produto/notebook'>Notebook</Link>
    </div>
  )
}

export default Home
import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Produto = () => {
  const navigation = useParams()
  const location = useLocation()
  const search = new URLSearchParams(location.search)
  console.log(search.get('q'))
  
  
  return (
    <div>
      <h1>Produto:{navigation.id}</h1>
    </div>
  )
}

export default Produto
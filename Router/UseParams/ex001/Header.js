import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  React.useEffect(()=>{
    console.log('a rota mudou')
  },[location])
  return (
    <nav>
      <NavLink to ='/' end activeStyle={{color:'tomato'}} >Home</NavLink> | 
      {' '}
      <NavLink to ='sobre' activeStyle={{color:'tomato'}} >Sobre</NavLink> |
      {' '}
      <NavLink to ='login' activeStyle={{color:'tomato'}} >login</NavLink>
    </nav>
  )
}

export default Header
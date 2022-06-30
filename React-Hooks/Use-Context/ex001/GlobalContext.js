import React from 'react'

export const GlobalContext = React.createContext()


export const GlobalStorage = ({children})=>{
  const [contador,setContador] = React.useState(0)
  function adicionarUm(){
    setContador((num)=>num+1)
  }

  function adicionarDois(){
    setContador((num)=>num+2)
  }
  return <GlobalContext.Provider value={{contador,adicionarUm,adicionarDois}}>{children}</GlobalContext.Provider>
}
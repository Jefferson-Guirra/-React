import React from 'react'

export const GlobalContext = React.createContext()

export const GlobalStorage = ({ children }) => {

  


  const [contar,setContar] = React.useState(0)

  const [ref,setRef] = React.useState(['p1'])
  function contador(){
    setContar((num)=> num+1)
  }

  return <GlobalContext.Provider value={{contador,setContar,contar,setRef,ref }}>
      {children}
    </GlobalContext.Provider>
  
}

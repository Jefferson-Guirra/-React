import React from 'react'



const App = () => {
  const [carrinho,setCarrinho] = React.useState(0)

  const handleClick = React.useCallback(()=>setCarrinho((contar)=>contar + 1),[])
 


  
  


  return (
    <>
      <button onClick={handleClick}>total {carrinho}</button>
    </>
  )

}

export default App

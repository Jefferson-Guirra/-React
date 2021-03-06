import React from 'react'


const App = () => {
  const [carrinho,setCarrinho] = React.useState(0)
  const [notificacao,setNotificacao] = React.useState(null)
  const timeoutRef = React.useRef()
  
  function handleClick(){
    setCarrinho(carrinho+1)
    setNotificacao('Item adicionado ao carrinho')

    clearInterval(timeoutRef.current)
    timeoutRef.current =setTimeout(()=>{
      setNotificacao(null)
    },2000)
    
    
  }

  return (
    <>
      {notificacao&& <p>{notificacao}</p>}
      <button onClick={handleClick}>Total Carrinho {carrinho}</button>
    </>
  )

}

export default App

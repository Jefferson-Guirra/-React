import React from 'react'

function slowAction(){
  let i
  for (let c = 0;c<100000000;c++){
    i = c + c/10
  }
  return i
}

const App = () => {
  const [carrinho,setCarrinho] = React.useState(0)

  const t1 = performance.now()
  const valor = React.useMemo(()=> slowAction(),[])
  console.log(performance.now() -t1)
 
  function handleClick(){
    setCarrinho(carrinho+1)
  }

  
  


  return (
    <>
      <button onClick={handleClick}>total {carrinho}</button>
    </>
  )

}

export default App

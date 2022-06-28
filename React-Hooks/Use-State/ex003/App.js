import React from 'react'



const App = () => {
  const [contar,setContador] = React.useState(1)
  const [item,setItems] = React.useState(['item1'])
  function handleContar(){
    setContador((num)=>num + 1)
    setItems([...item,'item'+(contar+1)])

  }
  

  return (
    <>
      {item.map(item=><li key={item}>{item}</li>)}
      <button onClick={handleContar}>{contar}</button>
      
    </>
  )
}

export default App

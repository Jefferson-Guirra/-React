import React from 'react'


const App = () => {
  const [comentarios,setComentarios] = React.useState(['item1','item2'])
  const [input,setInput] = React.useState('')
  const inputElement = React.useRef()
  function handleClick(){
    setComentarios([...comentarios,input])
    setInput('')
    inputElement.current.focus()
  }
  return (
    <div>
      <ul>
        {comentarios.map(item=><li key={item}>{item}</li>)}
      </ul>
      <input  ref={inputElement} type='text' value={input} onChange ={(event)=> setInput(event.target.value)}/>
      <button onClick={handleClick}>enviar</button>

    </div>
  )
}

export default App

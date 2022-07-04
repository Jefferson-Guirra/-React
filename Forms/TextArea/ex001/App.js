import React from 'react'

const App = ()=>{
  const [dados,setDados] = React.useState('')


  return(
    <>

      <textarea onChange={({target})=>setDados(target.value)} value={dados} />
      <p> {dados}</p>
    </>

  )
}
export default App

import React from 'react'

const App = ()=>{
  const [cores,setCor] = React.useState([])

  function handleChange({target}){
    if(target.checked)setCor([...cores,target.value])
    else{
      setCor(cores.filter((cor)=>{
        return cor !==target.value
      }))
    }
    
  }
  return (
    <form>
  
    <label>
      <input  value='azul' type='checkbox' onChange={handleChange}/>
      Azul
    </label>

    <label>
      <input  value='vermelho' type='checkbox' onChange={handleChange} />
      Vermelho
    </label>

    </form>
  )
      

}
export default App

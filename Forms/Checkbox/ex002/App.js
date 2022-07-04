import React from 'react'

const App = ()=>{
 const [cores,setCor] = React.useState([])
 const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

  function handleChange({target}){
    if(target.checked) setCor([...cores,target.value])
    else{
      setCor(cores.filter((cor)=>{
        return cor !== target.value
      }))
    }
  }
  function handleCor(cor){
    return cores.includes(cor)
  }


  return (

    <form>

      {coresArray.map(cores=>
      
        <label key={cores}>

          <input value={cores}  type='checkbox' checked={handleCor(cores)} onChange={handleChange}/>

          {cores}
        </label>)}

    </form>

  )
}
export default App

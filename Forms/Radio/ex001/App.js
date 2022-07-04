import React from 'react'

const App = ()=>{
  const [produto,setProduto] = React.useState('')
  function handleChange({target}){
    setProduto(target.value)
  }

  return(
    <form>
      {produto}
      <label>

        <input type='radio'  name='produto' value='smartphone' onChange={handleChange}/>

        Smartphone
      </label>

      <label>

        <input type='radio'  name='produto' value='notebook'onChange={handleChange}/>

        Notebook
      </label>

      
    </form>

  )
}
export default App

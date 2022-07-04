import React from 'react'
import useContent from '../useContent'
import { GlobalContext } from '../localStorage/GlobalContext'

const Pergunta4 = () => {
  const dados = useContent()
  const {pergunta,id,options,resposta} = dados[3]
  const [value,setValue] = React.useState('')
  const [error,setError] = React.useState(null)
  

  const {contador,ref,setRef} = React.useContext(GlobalContext)
  
  
  function handleChange({target}){
      setValue(target.value)
      localStorage['id'] = id
      setError(null)
  }

  function handleClick({target}){
    if(!value) setError('Escolha uma das alternativas')
    
    
    if(value){
      ref.length = 0
      setValue('')
      setRef([])
    }

    if(resposta===value)contador()
    
    
  }
  if(ref.includes(id)){
  return (
    <fieldset style={{padding:'2rem', borderRadius:'4px'}}>
      <legend style={{fontWeight:'bold'}}>{pergunta}</legend>
        {options.map(option=><label htmlFor={id} key={option} style={{fontFamily:'monospace', marginBottom:'1.5rem'}}>
            
            
            
            <input  
              type='radio' 
              value={option} 
              checked = { value === option }  
              onChange ={handleChange}/>
            {option}
          </label>)}
        {error && <p style={{color:'red',fontWeight:'bold'}}>{error}</p>}
        <button style={{position:'absolute',marginTop:'2.5rem', marginLeft:'-2rem'}} onClick={handleClick}>Próxima</button>

        
    </fieldset>
  )
        }else return null
}

export default Pergunta4
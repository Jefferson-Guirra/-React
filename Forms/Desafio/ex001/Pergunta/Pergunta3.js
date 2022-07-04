import React from 'react'
import useContent from '../useContent'
import { GlobalContext } from '../localStorage/GlobalContext'

const Pergunta3 = () => {
  const dados = useContent()
  const {pergunta,id,options,resposta} = dados[2]
  const [value,setValue] = React.useState('')
  const {contador,ref,setRef} = React.useContext(GlobalContext)
  const [error,setError] = React.useState(null)
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
      
      setRef([dados[3].id])
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

export default Pergunta3
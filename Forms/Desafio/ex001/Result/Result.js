import React from 'react'
import { GlobalContext } from '../localStorage/GlobalContext'

const Result = () => {
  const {ref,setRef,contar,setContar} = React.useContext(GlobalContext)

  function handleClear(){
      setContar(0)
      setRef([...ref,'p1'])
  }

    if(ref.length === 0){
      return (
      <div>
        <p>Você acertou {contar} de  4</p>
        
        <button onClick={handleClear}>Refazer</button>
      </div>
    )
      }
    else return null

}

export default Result
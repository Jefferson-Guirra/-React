import React from 'react'
function reducer(state,action){
  switch (action.type){
    case 'remove':
      /*const indice = state.indexOf(action.value)
      return indice !==-1 ? state.splice(indice,1) : state*/
      return state.filter(item=> item !==action.value)
    case 'adicionar':
      return [...state,action.value]
    default:
      throw new Error()
  }
}
const Exemplo = () => {
  const [state,dispatch] = React.useReducer(reducer,['banana','uva'])
  return (
    <>
    
    <button onClick={()=>dispatch({type:'remove',value:'banana'})}>Remover banana</button>
    <button onClick={()=>dispatch({type:'adicionar',value:'laranja'})}>Adicionar</button>
    <p>{state}</p>
    
    </>
   
  )
}

export default Exemplo
/*-------------------PRATICANDO EVENTOS-----------------------------*/
import React from 'react'
const App= ()=>{

  function handleClick(event){
    console.log(`comprou: ${event.target.innerText}`)
    console.log(event)
  }
  function handleScroll(event){
    console.log(event)
  }
  window.addEventListener('scroll',handleScroll)
  return (
    <div style={{height:'2000px'}}>
      <button onClick={handleClick}>Camisa</button>
      <button onMouseOut={handleClick}>Calça</button>
      <button onMouseMove={handleClick}>Bone</button>
      <button onMouseLeave={handleClick}>Sapato</button>
    </div>    
  )

}



export default App
import React from 'react'

const Produto = () => {
  React.useEffect(()=>{
    function handleScroll(){
      console.log('ola')
    }
    window.addEventListener('scroll',handleScroll)
    return ()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[])

  return (
    <div style={{height:'200vh'}}>Produto</div>
  )
}

export default Produto
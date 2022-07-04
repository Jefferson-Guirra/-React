import React from 'react'
import {ReactComponent as Dog} from './Assets/dogs.svg'
import DogSvg from './DogSvg'
const Img = () => {
  const [olho,setOlho] = React.useState(3)

  function handleOlho(){
      for (let c =0;c<5;c++){
        setTimeout(()=>{
            setOlho(c)
        },100 * c)
      }
  }
  return (
    <>
    
    <p onClick={handleOlho} className='dog' ></p>
    
    <DogSvg olho = {olho} />
    
    </>
    
  )
}

export default Img
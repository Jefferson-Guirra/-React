import React from 'react'

const Radio = ({options,value,setValue,...props}) => {
  function handleChange({target}){
      setValue(target.value)
  }
  return (
    <>
      {options.map(option=><label key={option}>

        <input 
          value={option} 
          checked = {value===option} 
          type='radio' 
          onChange={handleChange} 
          {...props}
        />
        {option}
      </label>)}
    
    </>
  )
}

export default Radio
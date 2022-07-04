import React from 'react'

const Checkbox = ({options,setValue,valor}) => {

function handleChange({target}){
  if(valor && target.checked) setValue([...valor,target.value])
  else{
    setValue(valor.filter(v=> v!== target.value))
  }
}

return (
  <>
    {options.map(option=><label key={option}>


      <input type='checkbox' value={option} checked={valor.includes(option)} onChange={handleChange}/>


      {option}
    </label>)}
  
  </>
)



}

export default Checkbox
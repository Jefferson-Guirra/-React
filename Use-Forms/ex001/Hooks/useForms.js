import React from "react"
const types = {
  cep:{
    regex:/^\d{5}-?\d{3}$/,
    message:' Cep inválido'
  },
  email:{
    regex:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message:'Email inválido'
  }

}


const useForms = (type)=>{
  const [value,setValue] = React.useState('')
  const [error,setError] = React.useState(null)

  function validate(valor){
    if(valor.length ===0) {
      setError('Preencha o campo')
      return false
    
    }
      
    else if( types[type] &&  !types[type].regex.test(valor)){
      setError(types[type].message)
      return false
      
    }else{
      setError(null)
      return true
    }
  }

  function onChange({target}){
    setValue(target.value)
    if(error){
      validate(target.value)
      
    }
  }


  return {
    value,
    setValue,
    error,
    onChange,
    onBlur:()=> validate(value),
    validate: ()=>validate(value)
  }
}



export default useForms
import React from "react";
const set = new Set()

const useFetch = ()=>{
  const [dados,setDados] = React.useState(null)
  const [loading,setLoading] = React.useState(null)
  const [error,setError] = React.useState(null)

 
  const request = React.useCallback(async (url,options)=>{
    let response
    let json
    try{
      setError(null)
      setLoading(true)
      response = await fetch(url)
      json = await response.json()
      setLoading(false)
    } catch (erro){
      json = null
      setError('Error no fetch')
    } finally{
      setDados(json)
      setLoading(false)
      return {response,json}
    }
  
   
  },[])
  set.add(request)
  console.log(set)
  

  return {dados,request,loading,error}
}

export default useFetch
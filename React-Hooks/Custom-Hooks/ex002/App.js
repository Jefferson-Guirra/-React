import useLocalStorage from './useLocalStorage';
import useFetch from './useFetch';
import React from 'react';

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');
  const {dados,request,loading,error} = useFetch()

  React.useEffect(()=>{
    async function fetchData(){
     const {response,json} = await request('https://ranekapi.origamid.dev/json/api/produto')
     
    }
    fetchData()   
  },[request])
  
  
  

  function handleClick({ target }) {
    setProduto(target.innerText);
  }
  if(error) return <p>{error}</p>
  if (loading) return <p>Carregando...</p>
  if(dados)
    return (
      <div>
        <p>Preferido: {produto}</p>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>
        {dados.map((produto)=><div key={produto.id}>{produto.nome}</div>)}
      </div>
    );
  else return null
};

export default App

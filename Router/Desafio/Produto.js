import React from 'react'
import {useParams} from 'react-router-dom'
import Head from './Head'
import Load from './Load'
import styles from './Styled/Produto.module.css'
  
const Produto = () => {
  const [produto,setProduto] = React.useState(null)
  const [error,setError] = React.useState(false)
  const [loading,setLoading] = React.useState(null)
  const {id} = useParams()
  React.useEffect((url)=>{
    async function fetcP(){
      try{
        setLoading(true)
        const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
        const json = await response.json()
        setProduto(json)
        setLoading(false)
      }catch(erro){
        setError('Ocorreu um erro')
        
      }finally{
        setLoading(false)

      }

    }
    fetcP()
  },[id])
  console.log(produto)

  console.log(produto)
  if (loading) return <Load />
  if(produto==null) return null
  if(error) return <p>{error}</p>
  
  return (
    <section className={styles.produto + ' animaLeft'}>
      <Head title = {produto.nome}/>
      <div>
      {produto.fotos.map(foto=><img key={foto.src} src={foto.src} alt={foto.titulo}/>)}
      </div>

      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
        
      </div>
    </section>
  )
}

export default Produto
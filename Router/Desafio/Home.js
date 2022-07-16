import React from 'react'
import styles from './Styled/Home.module.css'
import { Link } from 'react-router-dom'



const Home = ({ dados }) => {
  document.title = 'TechTudo'
  if (dados) {
    return (
      <>
        <section className={styles.produto + ' animaLeft'}>
          {dados.map(({nome,id,fotos})=>(
            
            <Link to={`produto/${nome}`} key={id}>
                <img src={fotos[0].src} alt ={fotos[0].titulo}/>
                <h1 className={styles.nome}>{nome}</h1>
            </Link> 
              
            
            
          ))}
        </section>
      </>
    )
  }
}

export default Home

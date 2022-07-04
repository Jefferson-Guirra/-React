import React from 'react'
import styles from './Produto.module.css'
const Produto = () => {
  
  return (
    <div>
     <h1 className={styles.titulo}>Titulo</h1>
     <p className={styles.text}>Preço:2000</p>
     <button className={styles.btn}>Enviar</button>
    </div>
  )
}

export default Produto

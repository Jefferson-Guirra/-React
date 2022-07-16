import React from 'react'
import Head from './Head'
import styles from './Styled/Contato.module.css'
import foto from './img/contato.jpg'

const Contato = () => {
  return (
      <section className={styles.contato + ' animaLeft'}>
      <Head title ='contato'/>
      <img src={foto} alt='maquina de escrever'/>
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
            <li>jefferson@hotmail.com</li>
            <li>(74)99144-8831</li>
            <li>Campo Formoso-ba</li>
          </ul>
      
      </div>
      
      
      
    </section>
  )
}

export default Contato
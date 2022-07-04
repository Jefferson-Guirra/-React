import React from 'react'
import Pergunta1 from './Pergunta/Pergunta1'
import Pergunta2 from './Pergunta/Pergunta2'
import Pergunta3 from './Pergunta/Pergunta3'
import { GlobalStorage } from './localStorage/GlobalContext'
import Result from './Result/Result'
import Pergunta4 from './Pergunta/Pergunta4'

const App = () => {
  return (
    <>
      <GlobalStorage>
        <Pergunta1 />
        <Pergunta2 />
        <Pergunta3 />
        <Pergunta4 />
        <Result />
      </GlobalStorage>
    </>
  )
}
export default App

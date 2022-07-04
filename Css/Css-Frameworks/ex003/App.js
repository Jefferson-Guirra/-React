import React from 'react'
import Button from './Componentes/Button'
import Produto from './Componentes/Produto'


const App = () => {
  return (
    <div className='card bg-dark m-5 text-white' style={{maxWidth:'18rem'}}>
      <div className='card-header'>Notebook</div>
      <div className='card-body'>
        <h5 className='card-title'>R$ 2500</h5>
        <p className='card-text'>Este é um notebook de 4gb de RAM com 1TB  de armazenamento com um processador intel i7 com placa de vídeo integrada</p>
      </div>
    </div>
  );
};

export default App

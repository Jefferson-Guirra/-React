import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'



const App = () => {
  return (
    <>
      <Card bg='dark' text='white' className='m-5' style={{maxWidth:'18rem'}}>
        <Card.Header>Notebook</Card.Header>
        <Card.Body>
          <Card.Title>R$ 2500</Card.Title>
          <Card.Text>Notebook com 8gb de RAM 1TB de armazenamento e placa de vídeo integrada.</Card.Text>
        </Card.Body>
      </Card>
      <Button className='bg-dark' text='white'>Clique</Button>
    </>
    
  )
};

export default App

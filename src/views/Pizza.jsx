import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const Pizza = () => {
    const [cartaPizza, setCartaPizza] = useState ([])
    const { id } = useParams()
    
        const getCartaPizza = async () => {
          try {
          const response = await fetch (`http://localhost:5000/api/pizzas/${id}`)
          const data = await response.json()
          setCartaPizza([data])
            
          } catch (error) {
            console.error(error)
          }
      }
    
      useEffect(()=> {
        setUser(JSON.parse(localStorage.getItem("user")) || null)
        getCartaPizza()},[id]
      )
      console.log(cartaPizza)
    

  return (
    
    <div className='cards container d-flex justify-content-space-around flex-wrap mt-4'>
        {cartaPizza.map((item) => (
            <div key={item.id}>
      <Card style={{ width: '20rem' }} className='mx-3'>
      <Card.Img variant="top" src={item.img}/>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          <strong>${item.price}</strong>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><strong>Ingredientes</strong> 
          <p>{item.ingredients.join(' , ')}</p></ListGroup.Item>
        <ListGroup.Item className='text-center'>{item.desc}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button variant="danger">Agregar pizza 🍕</Button>
      </Card.Body>
    </Card>
    </div>
    ))}
    </div>
   
  )
}

export default Pizza

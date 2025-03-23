import React from 'react'
import { useState } from 'react'
import { pizzaCart } from '../../../apoyo_hito_3/pizzas'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/esm/CardImg';
import CardBody from 'react-bootstrap/esm/CardBody';

const Carts = () => {
    const [cart, setCart] = useState(pizzaCart);

    return (
    <>
      <Container>
       
            <h2>Detalles del pedido</h2>
            {cart.map((carta) => (
            <Card key={carta.id}>
            <Row xs={1} md={3}>
                <Col>
                <Card.Img
                src={carta.img}
                alt={carta.name}
                />
                </Col>

                <Col>
                <Card.Body>
                <Card.Title>{carta.name}</Card.Title>
                </Card.Body>
                </Col>

                <Col>
                <Card.Text className='text-center my-3'>
                <strong>$ {carta.price.toLocaleString()}</strong></Card.Text>
                </Col>

                <Col>
                <button className=''>+</button>
                </Col>
            </Row>
             
            </Card>
            ))}
    
       
      </Container>
    </>
  )
}

export default Carts

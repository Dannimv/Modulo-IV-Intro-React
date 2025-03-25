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
    const [total, setTotal] = useState(0)
    let agregarPizza = (id, precio) => {
        setCart (cart.map((pizza) => {
            if (pizza.id === id) {
                return {...pizza, 
                    cantidadPizza: (pizza.cantidadPizza ?? 0) + 1,
                    total: precio * ((pizza.cantidadPizza ?? 0) + 1)}
            }
            sumarTotal()
            return pizza;
        }))
    }


    let eliminarPizza = (id, precio) => {
        setCart (cart.map((pizza) => {
            if (pizza.id === id) {
                return {...pizza, 
                    cantidadPizza: (pizza.cantidadPizza ?? 0) - 1,
                    total: precio * ((pizza.cantidadPizza ?? 0) - 1)}
            }
            sumarTotal()
            return pizza;
        }));
    }

    const sumarTotal = () => {
        return cart.reduce((acc, el) => {
            return acc + el.total;
        }, 0)
        
        console.log(total)
    }

    const handleChange = (e) => {
        e.preventDefault
        setCart(e.target.value)
    }

    return (
    <>
      <Container>

            <h2>Detalles del pedido</h2>
            {cart.map((carta) => (
            <Card key={carta.id}>
                <Container>
            <Row>
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

                <Col className='my-5'>
                <Row>
                <div className='d-flex'>
                <Button variant="primary" size="lg" onClick={() => agregarPizza(carta.id, carta.price)}>+</Button>
                <input className='text-center' type="number" value={carta.cantidadPizza??0} onChange={handleChange} />
                <Button variant="danger" size="lg" onClick={() => eliminarPizza(carta.id, carta.price)}>-</Button>
                </div>

                </Row>

                </Col>
               
                <Col>
                <span> Subtotal $ {carta.total ?? 0} </span>

                </Col>

            </Row>

            <Row>
            </Row>
            </Container>
            </Card>
            ))}

            <h3 className='my-3 text-center'>Total${cart.reduce((acc, el) => acc + (el.total || 0), 0)}</h3>
      </Container>
    </>
  )
}

export default Carts

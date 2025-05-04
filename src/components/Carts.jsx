import React, { useContext, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../context/CartContext';
import axios from 'axios';
import Swal from 'sweetalert2'

const Carts = () => {
    const {cart, setCart, agregarPizza, eliminarPizza, sumarTotal, token, setToken} = useContext(CartContext)
    
    const eliminarPizzaCarrito = (id) => {
        const itemEliminado = cart.find(item => item.id === id);
        if (itemEliminado && itemEliminado.cantidadPizza > 1) {
            eliminarPizza(id);
        } else if (itemEliminado && itemEliminado.cantidadPizza <=1) {
            const itemAgregado = cart.filter(item => item.id !== id);
            setCart(itemAgregado)
        }
    }

    const handleChange = (e) => {
        e.preventDefault
        setCart(e.target.value)
    }

    const handlePay = (e) => {
        e.preventDefault()
        if (token) {
            Swal.fire({
                title: "Compra realiza con éxito! 🍕",
                icon: "success",
                draggable: true
              }); 
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Debes iniciar sesión para pagar"
              } );
        }
    }

  

   
    const sendCart = async (checkouts) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/checkouts', { 
        cart: Carts, }
      , { headers: {
        Authorization: `Bearer token_jwt`,
      }, 
      body: JSON.stringify({
        cart: Carts
      })})
    
    } catch (error) {
      console.error(error)
    }} 
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
                <Button variant="primary" size="lg" onClick={() => eliminarPizzaCarrito(carta.id, carta.price)}>-</Button>
                <input className='text-center' type="number" value={carta.cantidadPizza??0} onChange={handleChange} />
                <Button variant="danger" size="lg" onClick={() => agregarPizza(carta.id, carta.price)}>+</Button>
                </div>

                </Row>

                </Col>
               

            </Row>

            <Row>
            </Row>
            </Container>
            </Card>
            ))}

            <h3 className='my-3 text-center'>Total${sumarTotal()}</h3>
            <div className='d-flex justify-content-end'>
            <Button variant="success" size="lg" onClick={handlePay}>Pagar 💸</Button>
            </div>
      </Container> 
    
    </> 
    
  ) 
}

export default Carts

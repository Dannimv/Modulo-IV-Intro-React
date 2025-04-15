import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { useState, useEffect } from 'react';

const CardPizza = () => {
  const {cart, setCart} = useContext(CartContext);
  const [cartaPizza, setCartaPizza] = useState([]);

  const getCartaPizza = async () => {
      const response = await fetch('http://localhost:5000/api/pizzas');
      const data = await response.json();
      setCartaPizza(data);
  };

  useEffect(() => {
      getCartaPizza();
  }, []);

  const agregarItem = (itemId) => {
    let findItem = cart.find((item) => item.id === itemId);

  if (findItem) {
      const itemAgregado = cart.map ((item) => 
        item.id === itemId ? { ...item, cantidadPizza: item.cantidadPizza + 1} : item
    );
    setCart(itemAgregado);
  } else {
    const newItem = cartaPizza.find((item) => item.id === itemId);
          if (newItem) {
              setCart([...cart, { ...newItem, cantidadPizza: 1 }]);
          }
      }
    };
  
  return (
  <div className='container-fluid d-flex justify-content-center gap-5 flex-wrap mt-5 mx-4'>
            {cartaPizza.map((item, index) => (
                <div className='card' key={index}>
    <Card style={{ width: '22rem' }} >
    <Card.Img variant="top" src={item.img} alt='foto-pizza' />
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted fs-5 text-center">Ingredientes</Card.Subtitle>
      <Card.Text className='text-center'>
        <ul className='list-unstyled'>
          {item.ingredients.map((ingredient) => (
          <li key={ingredient}>🍕{ingredient}</li>
          ))}
        </ul>
      </Card.Text> 
      <Card.Text className='text-center'>
      <strong>Precio: ${item.price.toLocaleString()}</strong></Card.Text>
      <div className='d-flex justify-content-between'>
      <Button variant="primary">Ver mas 👀</Button>
      <Button variant="primary" className='cesta' onClick={() => agregarItem(item.id)}>Añadir 🛒</Button>
      </div>
    </Card.Body>
  </Card>
     </div>
          ))}
      </div>
 );
};

export default CardPizza;
      
                  
                  
                  
                 
 
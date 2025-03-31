import Header from '../components/Header'
import CardPizza from '../components/CardPizza';
// import { pizzas } from '../../pizzas'; // HITO 3
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import Pizza from '../components/Pizza';

export default function Home() {
    
  // const array = (pizzas) // HITO 3
  const [cartaPizza, setCartaPizza] = useState ([])
 
    const getCartaPizza = async () => {
      try {
        const response = await fetch ('http://localhost:5000/api/pizzas')
        const data = await response.json()
        setCartaPizza([...data])
      } catch (error) {
        console.error(error)
      }
  }

  useEffect(()=> {
    getCartaPizza()},[]
  )

  return (
    <div>
    <Header/>
    <div className='cards container d-flex justify-content-center flex-wrap mt-4'>
    <Row xs={1} md={3}>
    {cartaPizza.map((item) => (
    <Col key={item.id}> 
    
    <CardPizza 
    name={item.name}
    price={item.price}
    ingredients={item.ingredients}
    img={item.img}
    />
    </Col>
    ))}
    </Row>
    </div>
    </div>
  );
};

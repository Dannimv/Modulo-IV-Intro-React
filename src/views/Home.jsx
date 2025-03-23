import Header from '../components/Header'
import CardPizza from '../components/CardPizza';
import { pizzas } from '../../../apoyo_hito_3/pizzas';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Home() {
    
  const array = (pizzas)
    
  return (
    <div>
    <Header/>
    <div className='cards container d-flex justify-content-center flex-wrap mt-4'>
    <Row xs={1} md={3}>
    {pizzas.map((pizza) => (
    <Col key={pizza.id}> 
    
    <CardPizza 
    name={pizza.name}
    price={pizza.price}
    ingredients={pizza.ingredients}
    img={pizza.img}
    />
    </Col>
    ))}
    </Row>
    </div>
    </div>
  );
};

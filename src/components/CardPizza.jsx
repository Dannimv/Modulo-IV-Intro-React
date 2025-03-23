import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <Card style={{ width: "18rem" }} className='m-4'>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted fs-5 text-center">Ingredientes:</Card.Subtitle>
        <Card.Text className='text-center'>
              {ingredients.map((ingrediente, i) =>
              <li key={i} className='list-unstyled'>🍕{ingrediente}</li>)}
        </Card.Text>
        <Card.Text className='text-center'>
            <strong>Precio: ${price.toLocaleString()}</strong></Card.Text>
            <div className='d-flex justify-content-between'>
        <Button variant="outline-dark" className='me-3'>Ver más👀</Button>
        <Button variant="dark">Añadir🛒</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CardPizza
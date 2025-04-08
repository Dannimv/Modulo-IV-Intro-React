import { Container } from "react-bootstrap";
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import error from '../image/error.jpg'
import { Link } from "react-router";


const NotFound = () => {
    const [show, setShow] = useState(true);

  if (show) {
  return (
    <Container className="d-flex align-items-center justify-content-center flex-column flex-lg-row">
  
    <h4 className='text-danger'>
      Oops...La ruta que intentas consultar no existe :/
    </h4>
    <h5>
        <Link to='/' className="h4 text-success ms-1 ms-lg-2"><strong>Volver</strong></Link>
    </h5>
    <Image src={error} width='500px' className="d-flex justify-content-center aling-item-center" roundedCircle />
  

  </Container>
);
}
return <Button onClick={() => setShow(true)}>Show Alert</Button>;
};
export default NotFound;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/NavBar';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const NavBar = () => {
    const total = 25000;
    const token = false;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Pizzeria Mamma Mia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">🍕Home</Nav.Link>
            {token ? (
            <>
            <Nav.Link eventKey='profile' href="#link">🔓Profile</Nav.Link>
            <Nav.Link eventKey='logout' href="#link">🔒Logout</Nav.Link>
            </>
            ) : (
            <>
            <Nav.Link eventKey='login' href="#Login" onClick={handleShow}>🔐Login</Nav.Link>
            <Nav.Link eventKey='register' href="#Register" >🔐Register</Nav.Link>
            </>
            )}
            </Nav>
            <Nav className='ml-auto'>
                <Nav.Link eventKey='total' href="#link">🛒Total: ${total.toLocaleString()}</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title>Login</Modal.Title>
</Modal.Header>
<Modal.Body>
  <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Email address</Form.Label>
      <Form.Control
        type="email"
        placeholder="name@example.com"
        autoFocus
      />
    </Form.Group>
    <Form.Group
      className="mb-3"
      controlId="exampleForm.ControlTextarea1"
    >
      <Form.Label>Example textarea</Form.Label>
      <Form.Control as="textarea" rows={3} />
    </Form.Group>
  </Form>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button variant="primary" onClick={handleClose}>
    Save Changes
  </Button>
</Modal.Footer>
</Modal>

</>
  );
};

export default NavBar
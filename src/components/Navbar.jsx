import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/NavBar';

const NavBar = () => {
    const total = 25000;
    const token = false;

  return (
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
            <Nav.Link eventKey='login' href="#Login" to='/Login' >🔐Login</Nav.Link>
            <Nav.Link eventKey='register' href="#Register" to='/Register'>🔐Register</Nav.Link>
            </>
            )}
            </Nav>
            <Nav className='ml-auto'>
                <Nav.Link eventKey='total' href="#link">🛒Total: ${total.toLocaleString()}</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar
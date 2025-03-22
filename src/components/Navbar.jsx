import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/NavBar';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Login from './Login';
import LoginModal from './LoginModal';

const NavBar = () => {
    const total = 25000;
    const token = false;

    const [show, setShow] = useState(false);
    const [email, setEmail] = useState ('')
        const [contraseña, setContraseña] = useState ('')
        const [confirmarContraseña, setConfirmarContraseña] = useState ('')
        const [error, setError] = useState (false)
        const [smShow, setSmShow] = useState(false);
        const [emailRegister, setEmailRegister] = useState ('')
        const [passwordRegister, setPasswordRegister] = useState ('')
        const [errorRegister, setErrorRegister] = useState (false)
        const [showRegister, setShowRegister] = useState(false);
        const [smShowRegister, setSmShowRegister] = useState(false);
    
    // Funciones Login
        const handleSubmit = (e) => {
            e.preventDefault();
            if(email === ''){
                setError(true)
                return
            }
    
            if(contraseña === '' || contraseña.length < 6){
                setError(true)
                return
            }
    
            if(confirmarContraseña === '' || (confirmarContraseña !== contraseña)){
                setError(true)
                return
            }
  
            console.log(confirmarContraseña)
            console.log(contraseña)
  
            setError(false)
            setEmail('')
            setContraseña('')
            setConfirmarContraseña('')
            setShow(false)
            setSmShow(true)
            console.log('Formulario enviado')
        
        }
     
        const handleChangeEmail = (e) => {
            setEmail(e.target.value)
        }
    
        const handleChangeContraseña = (e) => {
            setContraseña(e.target.value)
        }
    
        const handleChangeConfirmarContraseña = (e) => {
            setConfirmarContraseña(e.target.value)
        }

    const handleClose = () => {
      setShow(false);
    };

    const handleShow = () => setShow(true);

    // Funciones Register

    const handleShowRegister = () => setShowRegister(true);
    
            const handleSubmitRegister = (e) => {
                e.preventDefault();
                if(emailRegister === ''){
                  setErrorRegister(true)
                    return
                }
        
                if(passwordRegister === '' || passwordRegister.length < 6){
                    setErrorRegister(true)
                    return
                }
      
                setErrorRegister(false)
                setEmailRegister('')
                setPasswordRegister('')
                setShowRegister(false)
                setSmShowRegister(true)
                console.log('Formulario enviado')
            
            }
         
            const handleChangeEmailRegister = (e) => {
                setEmailRegister(e.target.value)
            }
        
            const handleChangePasswordRegister = (e) => {
                setPasswordRegister(e.target.value)
            }
    
        const handleCloseRegister = () => {
          setShowRegister(false);
        };

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
            <Nav.Link eventKey='register' href="#Register" onClick={handleShowRegister} >🔐Register</Nav.Link>
            </>
            )}
            </Nav>
            <Nav className='ml-auto'>
                <Nav.Link eventKey='total' href="#link">🛒Total: ${total.toLocaleString()}</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    <Login/>
    <LoginModal/>

{/* COMPONENTE LOGIN */}
<Modal show={show} onHide={handleClose}>
<form action="submit" onSubmit={handleSubmit}>
<Modal.Header closeButton>
  <Modal.Title>Login 🔐</Modal.Title>
</Modal.Header>
<Modal.Body>
  
        {error ? <p className='text-danger'>Todos los campos son obligarotios (no pueden estar vacíos)</p> : null }

        <Form.Group className="mb-3" controlId="formBasicEmailLogin">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" 
        placeholder="nombre.apellido@ejemplo.com"
        value={email}
        onChange={(e) => handleChangeEmail (e)} />
        <Form.Text className="text-muted">
          Nunca compartiremos su email con nadie.
        </Form.Text>
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" 
        placeholder="Ingrese su contraseña"
        value={contraseña}
        onChange={(e) => handleChangeContraseña (e)} />
      </Form.Group>
      {contraseña && contraseña.length < 6 ? <p className='text-danger'>La contraseña debe tener al menos 6 caracteres</p> : null }
   
       <Form.Group className="mb-3" controlId="BasicPassword">
        <Form.Label>Confirme su contraseña</Form.Label>
        <Form.Control type="password" 
        placeholder="Ingrese su contraseña"
        value={confirmarContraseña}
        onChange={(e) => handleChangeConfirmarContraseña (e)} />
      </Form.Group>
      {contraseña !== confirmarContraseña ? <p className='text-danger'>Las contraseñas no coinciden, intente nuevamente</p> : null  }
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button variant="primary" type='submit'>
    Enviar
  </Button>
</Modal.Footer>
      </form>
</Modal>

<div>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Bienvenido
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Pizzeria Mamma Mia 🍕</Modal.Body>
      </Modal>
</div>

{/* // Componente Register */}

<div>
      <Modal show={showRegister} onHide={handleCloseRegister}>
<form action="submit" onSubmit={handleSubmitRegister}>
<Modal.Header closeButton>
  <Modal.Title>Registro 🔐</Modal.Title>
</Modal.Header>
<Modal.Body>
       
        {error ? <p className='text-danger'>Todos los campos son obligarotios (no pueden estar vacíos)</p> : null }

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" 
        placeholder="nombre.apellido@ejemplo.com"
        value={emailRegister}
        onChange={(e) => handleChangeEmailRegister (e)} />
        <Form.Text className="text-muted">
          Nunca compartiremos su email con nadie.
        </Form.Text>
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicPasswordRegister">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" 
        placeholder="Ingrese su contraseña"
        value={passwordRegister}
        onChange={(e) => handleChangePasswordRegister (e)} />
      </Form.Group>
      {passwordRegister && passwordRegister.length < 6 ? <p className='text-danger'>La contraseña debe tener al menos 6 caracteres</p> : null }
  
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleCloseRegister}>
    Close
  </Button>
  <Button variant="primary" type='submit'>
    Enviar
  </Button>
</Modal.Footer>
      </form>
</Modal>

<div>
      <Modal
        size="sm"
        show={smShowRegister}
        onHide={() => setSmShowRegister(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Registro Exitoso
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Pizzeria Mamma Mia 🍕</Modal.Body>
      </Modal>
</div>
</div>

</>
  );
};

export default NavBar
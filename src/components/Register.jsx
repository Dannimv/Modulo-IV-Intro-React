// Profesor Diego, hice este componente en el Navbar para poder abrirlo como una alerta con un modal de bootstrap

import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {
  const [emailRegister, setEmailRegister] = useState ('')
  const [passwordRegister, setPasswordRegister] = useState ('')
  const [errorRegister, setErrorRegister] = useState (false)
  const [showRegister, setShowRegister] = useState(false);
  const [smShowRegister, setSmShowRegister] = useState(false);

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
            Bienvenido
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Pizzeria Mamma Mia 🍕</Modal.Body>
      </Modal>
</div>
    </div>
  )
}

export default Register

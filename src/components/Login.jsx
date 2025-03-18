// Profesor Diego, hice este componente en el Navbar para poder abrirlo como una alerta con un modal de bootstrap

import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {


        const [show, setShow] = useState(false);
        const [email, setEmail] = useState ('')
            const [contraseña, setContraseña] = useState ('')
            const [confirmarContraseña, setConfirmarContraseña] = useState ('')
            const [error, setError] = useState (false)
            const [smShow, setSmShow] = useState(false);

            const handleShow = () => setShow(true);
        
        
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
       
    

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
<form action="submit" onSubmit={handleSubmit}>
<Modal.Header closeButton>
  <Modal.Title>Login</Modal.Title>
</Modal.Header>
<Modal.Body>
        <label htmlFor="login" className='d-flex my-3 display-3'><strong>Login 🔐</strong></label>
       
        {error ? <p className='text-danger'>Todos los campos son obligarotios (no pueden estar vacíos)</p> : null }

        <Form.Group className="mb-3" controlId="formBasicEmail">
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
    </div>
  )
}

export default Login

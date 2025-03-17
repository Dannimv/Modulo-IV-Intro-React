import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    const [email, setEmail] = useState ('')
    const [contraseña, setContraseña] = useState ('')
    const [confirmarContraseña, setConfirmarContraseña] = useState ('')
    const [error, setError] = useState (false)


    const handleSubmit = (e) => {
        e.preventDefault();
        if(email === ''){
            setError(true)
            return
        }

        if(contraseña === ''){
            setError(true)
            return
        }

        if(confirmarContraseña === ''){
            setError(true)
            return
        }
     
        setError(false)
        setEmail('')
        setContraseña('')
        setConfirmarContraseña('')
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
  
    return (
        <>
      <form action="submit" onSubmit={handleSubmit}>
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
      {contraseña.length < 6 ? <p className='text-danger'>La contraseña debe tener al menos 6 caracteres</p> : null }
   
       <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirme su contraseña</Form.Label>
        <Form.Control type="password" 
        placeholder="Ingrese su contraseña"
        value={confirmarContraseña}
        onChange={(e) => handleChangeConfirmarContraseña (e)} />
      </Form.Group>
      {contraseña !== confirmarContraseña ? <p className='text-danger'>Las contraseñas no coinciden, intente nuevamente</p> : null  }
     
      <Button variant="primary" type="submit">
        Enviar
      </Button>

      

      
      </form>
    </>
  )
};

export default Login;

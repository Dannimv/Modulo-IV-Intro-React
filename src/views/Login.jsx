import React, { useContext, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from 'react-router';
import { CartContext } from '../context/CartContext';


const Login = () => {
  const {setUser, setToken} = useContext(CartContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarPassword, setConfirmarPassword] = useState("");
  const [error, setError] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const navegar = useNavigate()
  
    const handleSubmitLogin = async (e) => {
      e.preventDefault();

      if (email === "") {
        setError(true);
        return;
      }
  
      if (password === "" || password.length < 6) {
        setError(true);
        return;
      }
  
      if (confirmarPassword === "" || confirmarPassword !== password) {
        setError(true);
        return;
      }
      
      setError(false);
      setEmail("");
      setPassword("");
      setConfirmarPassword(""); 
      
    
      const res = await fetch("http://localhost:5000/api/auth/login", 
        {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ email, password }),
        });
        
        const data = await res.json();
        alert(data?.error || " Inicio de sesion exitoso 🦄");
        localStorage.setItem("token", data.token);

        setUser({ email });
        setToken(data.token);
        localStorage.setItem("user", JSON.stringify({ email }));
        localStorage.setItem("token", data.token);
      
      console.log("Formulario enviado");
    };
   
    
  
    const handleChangeEmailLogin = (e) => {
      setEmail(e.target.value);
    };
  
    const handleChangeContraseñaLogin = (e) => {
      setPassword(e.target.value);
    };
  
    const handleChangeConfirmarContraseñaLogin = (e) => {
      setConfirmarPassword(e.target.value);
    };

    const handleCloseLogin = () => {
      setShowLogin(false);
    };

   
    const handleShowLogin = () => setShowLogin(true);
  
    return (
        <>
       {error ? (
              <p className="text-danger">
                Todos los campos son obligarotios (no pueden estar vacíos)
              </p>
            ) : null}
            <form action="submit" onSubmit={handleSubmitLogin}>
            <Form.Group className="mb-3" controlId="EMail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="nombre.apellido@ejemplo.com"
                value={email}
                onChange={(e) => handleChangeEmailLogin(e)}
              />
              <Form.Text className="text-muted">
                Nunca compartiremos su email con nadie.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="Contraseña">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={(e) => handleChangeContraseñaLogin(e)}
              />
            </Form.Group>
            {password && password.length < 6 ? (
              <p className="text-danger">
                La contraseña debe tener al menos 6 caracteres
              </p>
            ) : null}

            <Form.Group className="mb-3" controlId="ContraseñaConfirmada">
              <Form.Label>Confirme su contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                value={confirmarPassword}
                onChange={(e) => handleChangeConfirmarContraseñaLogin(e)}
              />
            </Form.Group>
            {password !== confirmarPassword ? (
              <p className="text-danger">
                Las contraseñas no coinciden, intente nuevamente
              </p>
            ) : null}
        <Button variant="primary" type="submit" onClick={handleShowLogin}>
       Ingresar
       </Button>
       <Modal show={showLogin} onHide={handleCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title> Bienvenido</Modal.Title>
        </Modal.Header>
        <Modal.Body>Pizzeria Mamma Mia 🍕</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLogin}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </form>
        
        </>
    )
}

export default Login
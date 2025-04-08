import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";


const Login = () => {
  const [emailLogin, setEmailLogin] = useState("");
  const [contraseñaLogin, setContraseñaLogin] = useState("");
  const [confirmarContraseñaLogin, setConfirmarContraseñaLogin] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  
    const handleSubmitLogin = (e) => {
      e.preventDefault();
      if (emailLogin === "") {
        setErrorLogin(true);
        return;
      }
  
      if (contraseñaLogin === "" || contraseñaLogin.length < 6) {
        setErrorLogin(true);
        return;
      }
  
      if (confirmarContraseñaLogin === "" || confirmarContraseñaLogin!== contraseñaLogin) {
        setErrorLogin(true);
        return;
      }
  
      console.log(confirmarContraseñaLogin);
      console.log(contraseñaLogin);
  
      setErrorLogin(false);
      setEmailLogin("");
      setContraseñaLogin("");
      setConfirmarContraseñaLogin("");
      console.log("Formulario enviado");
    };
  
    const handleChangeEmailLogin = (e) => {
      setEmailLogin(e.target.value);
    };
  
    const handleChangeContraseñaLogin = (e) => {
      setContraseñaLogin(e.target.value);
    };
  
    const handleChangeConfirmarContraseñaLogin = (e) => {
      setConfirmarContraseñaLogin(e.target.value);
    };

    const handleCloseLogin = () => {
      setShowLogin(false);
    };

   
    const handleShowLogin = () => setShowLogin(true);
  
    return (
        <>
       {errorLogin ? (
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
                value={emailLogin}
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
                value={contraseñaLogin}
                onChange={(e) => handleChangeContraseñaLogin(e)}
              />
            </Form.Group>
            {contraseñaLogin && contraseñaLogin.length < 6 ? (
              <p className="text-danger">
                La contraseña debe tener al menos 6 caracteres
              </p>
            ) : null}

            <Form.Group className="mb-3" controlId="ContraseñaConfirmada">
              <Form.Label>Confirme su contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                value={confirmarContraseñaLogin}
                onChange={(e) => handleChangeConfirmarContraseñaLogin(e)}
              />
            </Form.Group>
            {contraseñaLogin !== confirmarContraseñaLogin ? (
              <p className="text-danger">
                Las contraseñas no coinciden, intente nuevamente
              </p>
            ) : null}
        <Button variant="primary" type="submit" onClick={handleShowLogin}>
        Enviar
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
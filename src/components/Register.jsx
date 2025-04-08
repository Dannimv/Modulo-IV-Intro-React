import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";


const Register = () => {
  const [emailRegisterr, setEmailRegisterr] = useState("");
  const [passwordRegisterr, setPasswordRegisterr] = useState("");
  const [errorRegisterr, setErrorRegisterr] = useState(false);
   const [showRegisterr, setShowRegisterr] = useState(false);
 

  const handleSubmitRegisterr = (e) => {
    e.preventDefault();
    if (emailRegisterr === "") {
      setErrorRegisterr(true);
      return;
    }

    if (passwordRegisterr === "" || passwordRegisterr.length < 6) {
      setErrorRegisterr(true);
      return;
    }

    setErrorRegisterr(false);
    setEmailRegisterr("");
    setPasswordRegisterr("");
    console.log("Formulario enviado");
  };

  const handleChangeEmailRegisterr = (e) => {
    setEmailRegisterr(e.target.value);
  };

  const handleChangeContraseñaRegisterr = (e) => {
    setPasswordRegisterr(e.target.value);
  };

  const handleCloseRegisterr = () => {
    setShowRegisterr(false);
  };

 
  const handleShowRegisterr = () => setShowRegisterr(true);


  return (
    <div>
      {errorRegisterr ? (
              <p className="text-danger">
                Todos los campos son obligarotios (no pueden estar vacíos)
              </p>
            ) : null}
            <form action="submit" onSubmit={handleSubmitRegisterr}>
            <Form.Group className="mb-3" controlId="FormMail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="nombre.apellido@ejemplo.com"
                value={emailRegisterr}
                onChange={(e) => handleChangeEmailRegisterr(e)}
              />
              <Form.Text className="text-muted">
                Nunca compartiremos su email con nadie.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="FormContraseña">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                value={passwordRegisterr}
                onChange={(e) => handleChangeContraseñaRegisterr(e)}
              />
            </Form.Group>
            {passwordRegisterr && passwordRegisterr.length < 6 ? (
              <p className="text-danger">
                La contraseña debe tener al menos 6 caracteres
              </p>
            ) : null}

        <Button variant="primary" type="submit" onClick={handleShowRegisterr}>
        Enviar
       </Button>
       <Modal show={showRegisterr} onHide={handleCloseRegisterr}>
        <Modal.Header closeButton>
          <Modal.Title> Registro exitoso </Modal.Title>
        </Modal.Header>
        <Modal.Body> Pizzeria Mamma Mia  🍕</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseRegisterr}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </form>
        
    </div>
  );
};

export default Register;

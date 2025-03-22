// Profesor Diego, hice este componente en el Navbar para poder abrirlo como una alerta con un modal de bootstrap

import React from "react";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import LoginModal from "./LoginModal";

const Login = ({ show, handleClose }) => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const [error, setError] = useState(false);
  const [smShow, setSmShow] = useState(false);
  // const [show, setShow] = useState(false);
  // const handleShow = () => setShow(true);
  // const handleClose = () => {
  //   setShow(false);
  // Validacion de formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      setError(true);
      return;
    }

    if (contraseña === "" || contraseña.length < 6) {
      setError(true);
      return;
    }

    if (confirmarContraseña === "" || confirmarContraseña !== contraseña) {
      setError(true);
      return;
    }

    setError(false);
    setEmail("");
    setContraseña("");
    setConfirmarContraseña("");
    handleClose(); // Cierra el modal al enviar
    setSmShow(true);
    // setShow(false)
    console.log("Formulario enviado");
  };

  return (
    <div>
      {/* Modal Login */}
      <LoginModal
        show={show}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        email={email}
        contraseña={contraseña}
        confirmarContraseña={confirmarContraseña}
        handleChangeEmail={(e) => {
          setEmail(e.target.value);
        }}
        handleChangeContraseña={(e) => {
          setContraseña(e.target.value);
        }}
        handleChangeConfirmarContraseña={(e) => {
          setConfirmarContraseña(e.target.value);
        }}
        error={error}
      />

      {/* Modal Bienvenida */}
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
  );
};

export default Login;

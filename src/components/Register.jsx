import React from "react";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import RegisterModal from "./RegisterModal";

const Register = ({ showRegister, handleCloseRegister }) => {
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [errorRegister, setErrorRegister] = useState(false);
  const [smShowRegister, setSmShowRegister] = useState(false);

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    if (emailRegister === "") {
      setErrorRegister(true);
      return;
    }

    if (passwordRegister === "" || passwordRegister.length < 6) {
      setErrorRegister(true);
      return;
    }

    setErrorRegister(false);
    setEmailRegister("");
    setPasswordRegister("");
    handleCloseRegister(); // Cierra el modal
    setSmShowRegister(true);
    showRegister();
    console.log("Formulario enviado");
  };

  return (
    <div>
      <RegisterModal
        showRegister={showRegister}
        handleCloseRegister={handleCloseRegister}
        handleSubmitRegister={handleSubmitRegister}
        emailRegister={emailRegister}
        passwordRegister={passwordRegister}
        handleChangeEmailRegister={(e) => setEmailRegister(e.target.value)}
        handleChangePasswordRegister={(e) =>
          setPasswordRegister(e.target.value)
        }
        errorRegister={errorRegister}
      />

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
  );
};

export default Register;

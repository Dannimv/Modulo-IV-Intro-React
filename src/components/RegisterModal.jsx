import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const RegisterModal = ({
  showRegister,
  handleCloseRegister,
  handleSubmitRegister,
  emailRegister,
  passwordRegister,
  handleChangeEmailRegister,
  handleChangePasswordRegister,
  errorRegister,
}) => {
  return (
    <div>
      <Modal show={showRegister} onHide={handleCloseRegister}>
        <form action="submit" onSubmit={handleSubmitRegister}>
          <Modal.Header closeButton>
            <Modal.Title>Registro 🔐</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {errorRegister ? (
              <p className="text-danger">
                Todos los campos son obligarotios (no pueden estar vacíos)
              </p>
            ) : null}

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="nombre.apellido@ejemplo.com"
                value={emailRegister}
                onChange={(e) => handleChangeEmailRegister(e)}
              />
              <Form.Text className="text-muted">
                Nunca compartiremos su email con nadie.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPasswordRegister">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                value={passwordRegister}
                onChange={(e) => handleChangePasswordRegister(e)}
              />
            </Form.Group>
            {passwordRegister && passwordRegister.length < 6 ? (
              <p className="text-danger">
                La contraseña debe tener al menos 6 caracteres
              </p>
            ) : null}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseRegister}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default RegisterModal;

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LoginModal = ({
  show,
  handleClose,
  handleSubmit,
  email,
  contraseña,
  confirmarContraseña,
  handleChangeEmail,
  handleChangeContraseña,
  handleChangeConfirmarContraseña,
  error,
}) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <form action="submit" onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Login 🔐</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {error ? (
              <p className="text-danger">
                Todos los campos son obligarotios (no pueden estar vacíos)
              </p>
            ) : null}

            <Form.Group className="mb-3" controlId="formBasicEmailLogin">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="nombre.apellido@ejemplo.com"
                value={email}
                onChange={handleChangeEmail}
              />
              <Form.Text className="text-muted">
                Nunca compartiremos su email con nadie.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                value={contraseña}
                onChange={handleChangeContraseña}
              />
            </Form.Group>
            {contraseña && contraseña.length < 6 ? (
              <p className="text-danger">
                La contraseña debe tener al menos 6 caracteres
              </p>
            ) : null}

            <Form.Group className="mb-3" controlId="BasicPassword">
              <Form.Label>Confirme su contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                value={confirmarContraseña}
                onChange={handleChangeConfirmarContraseña}
              />
            </Form.Group>
            {contraseña !== confirmarContraseña ? (
              <p className="text-danger">
                Las contraseñas no coinciden, intente nuevamente
              </p>
            ) : null}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
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

export default LoginModal;

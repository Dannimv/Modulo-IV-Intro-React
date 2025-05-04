import React, { useContext, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router';


const Register = () => {
  const {setUser, setToken} = useContext(CartContext)
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(false);
  const [showRegisterr, setShowRegisterr] = useState(false);
  const navegar = useNavigate();
   
 

  const handleSubmitRegisterr = async (e) => {
    e.preventDefault();
    if (email === "") {
      setErrorRegisterr(true);
      return;
    }

    if (password === "" || password.length < 6) {
      setErrorRegisterr(true);
      return;
    }
    if (password2 === "" || password2.length < 6) {
      setErrorRegisterr(true);
      return;
    }

    if (password !== password2) {
      setErrorRegisterr(true);
      return;
    }
    else {
      setUser({
        username: email,
        password: password
      })
    
    }

    const res = await fetch("http://localhost:5000/api/auth/register", 
      {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ username: email, password }),
      });
      
      const data = await res.json();
      alert(data?.error || " Registro exitoso 🦄");
      localStorage.setItem("token", data.token);

    

    const newUser = { username, email};

    
    setUser(newUser);
    setToken(true);
    localStorage.setItem('user', JSON.stringify(newUser));

    navegar("/");

    setError(false);
    setEmail("");
    setPassword("");
    console.log("Formulario enviado");
  };

  const handleChangeEmailRegisterr = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeContraseñaRegisterr = (e) => {
    setPassword(e.target.value);
  };

  const handleChangePassword2 = (e) => {
    setPassword2(e.target.value);
  };

  const handleCloseRegisterr = () => {
    setShowRegisterr(false);
  };

 
  const handleShowRegisterr = () => setShowRegisterr(true);


  return (
    <div>
      {error ? (
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
                value={email}
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
                value={password}
                onChange={(e) => handleChangeContraseñaRegisterr(e)}
              />
            </Form.Group>
            {password && password.length < 6 ? (
              <p className="text-danger">
                La contraseña debe tener al menos 6 caracteres
              </p>
            ) : null}
            <Form.Group className="mb-3" controlId="FormContraseña2">
              <Form.Label>Repita la contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                value={password2}
                onChange={(e) => handleChangePassword2(e)}
              />
            </Form.Group>
            {password2 && password2.length < 6 ? (
              <p className="text-danger">
                La contraseña debe tener al menos 6 caracteres
              </p>
            ) : null}

        <Button variant="primary" type="submit" onClick={handleShowRegisterr}>
        Registrarse
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

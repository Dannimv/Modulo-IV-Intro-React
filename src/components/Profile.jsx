import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router";
import axios from "axios";
import { Button } from "react-bootstrap";

export default function Profile() {

  const { user, setUser, setToken, token } = useContext(CartContext);
  console.log(user)
  const navegar = useNavigate();

  const handleLogOut = () => {
    setUser(null);
    localStorage.removeItem('user')
    setToken(false);
    localStorage.removeItem('token')
    navegar('/login')
  }

  useEffect (() => {
    const axiosUser = async () => {
      const token = localStorage.getItem('token')
      if (token) {
        try {
          const res = await axios.get('http://localhost:5000/api/auth/me',{
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          console.log(res.data)
          setUser(res.data)
        } catch (error) {
          
        }
      }
    }
    axiosUser()
  },[])

  return ( 
  <div className="container d-flex justify-content-center align-items-center">
    { user 
      ? (
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="card profile-card w-100">
          <div className="card-body text-center">
            <img
              src="https://randomuser.me/api/portraits/women/8.jpg"
              alt="User Profile"
              className="rounded-circle profile-img mb-3"
            />
            <h3 className="card-title mb-2">{user.email}</h3>
            <p className="card-text text-muted mb-3">Desarrollador web</p>
            <div className="social-icons mb-4">
              <a href="#" className="me-2">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
          <Button className="" onClick={() => { handleLogOut() }}>Cerrar sesion</Button>
        </div>
      </div>
    
  ) : (

  <div className="alert alert-info text-center">
  <p><strong> Inicia sesion para ver tu perfil </strong></p>
  </div>
  )}
  </div>
  );
 
}

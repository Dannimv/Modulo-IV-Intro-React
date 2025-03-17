import React from "react";
import Login from "./Login";
import Register from "./Register";

const Footer = () => {
    return (
      <>
      <footer className="footer text-center text-white bg-dark p-3 mt-5">
        <p>© 2021 - Pizzería Mamma Mía! - Todos los derechos reservados</p>
      </footer> 
      <Login/>
      <Register/>
      </>
    )
  }
  
  export default Footer
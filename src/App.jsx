import "./App.css";
import Home from "./views/Home";
import Footer from "./components/Footer";
import Carts from "./components/Carts";
import Pizza from "./components/Pizza";
import { Navigate, Route, Routes } from "react-router";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./views/NotFound";
import Profile from "./components/Profile";
import BarraNav from "./components/BarraNav";
import { useContext } from "react";
import GlobalProvider, { CartContext } from "./context/CartContext";

function App() {
  const {token} = useContext(CartContext)
  return (
    <>
          <BarraNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={token? <Navigate to={"/"} /> : <Login />} />
            <Route path="/register" element={token? <Navigate to={"/"} /> : <Register />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/carts" element={<Carts />} />
            <Route path="/profile" element={token?  <Profile /> : <Navigate to={"/login"} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
    </>
  );
}

export default App;


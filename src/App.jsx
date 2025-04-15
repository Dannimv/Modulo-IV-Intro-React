import "./App.css";
import Home from "./views/Home";
import Navbar from "./components/BarraNav";
import Footer from "./components/Footer";
import Carts from "./components/Carts";
import Pizza from "./components/Pizza";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./views/NotFound";
import Profile from "./components/Profile";
import GlobalProvider from "./context/CartContext";
import BarraNav from "./components/BarraNav";
function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <BarraNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/pizza/p001" element={<Pizza />} />
            <Route path="/carts" element={<Carts />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="404" element={<NotFound />} />
          </Routes>
          <Footer />
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

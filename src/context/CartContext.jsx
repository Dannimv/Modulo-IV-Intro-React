import { createContext } from "react";
import { useState, useEffect } from "react";
import { pizzas } from '../../pizzas'

export const CartContext = createContext()

const GlobalProvider = ({children}) => {

        const [cart, setCart] = useState([]);
        const [total, setTotal] = useState(0)
        const [token, setToken] = useState(true)
        const [user, setUser] = useState(null)
   
         
          let agregarPizza = (id, precio) => {
            setCart (cart.map((pizza) => {
                if (pizza.id === id) {
                    return {...pizza, 
                        cantidadPizza: (pizza.cantidadPizza ?? 0) + 1,
                        total: precio * ((pizza.cantidadPizza ?? 0) + 1)}
                }
                sumarTotal()
                return pizza;
            }))
        }

        let eliminarPizza = (id, precio) => {
          setCart (cart.map((pizza) => {
              if (pizza.id === id) {
                  return {...pizza, 
                      cantidadPizza: (pizza.cantidadPizza ?? 0) - 1,
                      total: precio * ((pizza.cantidadPizza ?? 0) - 1)}
              }
              sumarTotal()
              return pizza;
          }));
      }

          const sumarTotal = () => {
            return cart.reduce((acc, el) => {
            return (acc + (el.price * (el.cantidadPizza || 0)))}, 0)
            
        };

        useEffect(() => {
            const usuario = localStorage.getItem("user");
            if (usuario) {
              setUser(JSON.parse(usuario));
              setToken(true);
            } else {
              setUser(null);
              setToken(false);
            }
          }, []);

    
        return (
            <CartContext.Provider
            value={{
                cart,
                setCart,
                total,
                setTotal,
                agregarPizza,
                eliminarPizza,
                sumarTotal,
                token,
                setToken,
                user,
                setUser
            }} >
                {children}
            </CartContext.Provider>
        )
}
export default GlobalProvider

 
   
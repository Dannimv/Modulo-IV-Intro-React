import { createContext } from "react";
import { useState, useEffect } from "react";
import { pizzaCart } from '../../pizzas'

export const CartContext = createContext()

const GlobalProvider = ({children}) => {

        const [cart, setCart] = useState(pizzaCart);
        const [total, setTotal] = useState(0)
         
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
                
            console.log(total)
        };

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
            }} >
                {children}
            </CartContext.Provider>
        )
}
export default GlobalProvider

 
   
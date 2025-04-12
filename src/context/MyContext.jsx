import { createContext } from "react";
import { useState, useEffect } from "react";

export const MyContext = createContext()

const GlobalProvider = ({children}) => {

        const [cartaPizza, setCartaPizza] = useState ([])
         
            const getCartaPizza = async () => {
              try {
                const response = await fetch ('http://localhost:5000/api/pizzas')
                const data = await response.json()
                setCartaPizza([...data])
              } catch (error) {
                console.error(error)
              }
          }
        
          useEffect(()=> {
            getCartaPizza()},[]
          )
        return (
            <MyContext.Provider
            value={{
                cartaPizza,
                getCartaPizza,
            }} >
                {children}
            </MyContext.Provider>
        )
}
export default GlobalProvider

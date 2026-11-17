import { createContext, useState } from "react";

// setup our blank store---
export const MyStore = createContext()

// make a provider of our store who takes handle data and serves to our customer
export const ContextProvider = ({children}) =>{

    const [centralvalue, setCentralvalue] = useState("Main Context se ho")
    const [cartItems, setCartItems] = useState([])

    return <MyStore.Provider value={{centralvalue, cartItems, setCartItems}}>
        {children}
    </MyStore.Provider>
}
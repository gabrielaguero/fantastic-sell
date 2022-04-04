import React, { useState } from "react";
import { CartContext } from "../components/CartContext";

export const CustomContext = () =>{
    const [productos, setProductos] = useState([]);

    const addItem = (newItem, quantity) => {
        setProductos([...productos, {item:newItem, quantity:quantity}]);
    }
    const removeItem = (itemId) =>{
        let result = productos.filter((e) => e.itemId !== itemId);
        setProductos(result);
    }
    const clear = () => {
        setProductos([]);
    } 
    

    const isInCart = (id) =>{
        return productos.some((e) => e.id === id );
    }


    return(
        <CartContext.Provider value={{productos, addItem, removeItem, clear, isInCart}}>
            <div></div>
        </CartContext.Provider>
    )
}
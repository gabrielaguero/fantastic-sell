import React, { useState } from "react";
import { CartContext } from "../components/CartContext";

export const CustomContext = () =>{
    const [productos, setProductos] = useState([]);

    const addItem = (newItem, quantity) => {
        setProductos([...productos, {item:newItem, quantity:quantity}]);
    }
    const removeItem = (itemId) =>{
        itemId > 0 && setProductos(productos - 1);
    }
    const clear = () => {
        productos.lenght = 0;
    } 
    clear();

    const isInCart = (id) =>{
        return id === undefined ? undefined : addItem !== undefined
    }


    return(
        <CartContext.Provider value={{productos, addItem, removeItem, clear, isInCart}}>
            <div></div>
        </CartContext.Provider>
    )
}
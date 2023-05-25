import React from "react";
import { CartContext } from "../Context/CartContext";

const useCart=()=>{
    const context=React.useContext(CartContext)
    // revisamos el alcance del contexto 
    if(context===undefined){
        throw new Error('useCart must be used within a cartProvider')
    }
    return context;
}
export {useCart}
import React from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";
import { json } from "react-router-dom";

export const CartContext = React.createContext();


export function CartProvider({ children }) {

    // const [cart,setCart]=React.useState([])

    // const [cart, setCart] = React.useState(initialValue)

    const [cart, setCart] = useLocalStorage('TEST_V2', [])


    const addToCart = (product) => {
        // console.log(product);

        // // buscamos si el producto esta en el carrito 
        const productInCartIndex = cart.findIndex(item => item.id === product.id);
        // // contador para cantidad de producto 
        if (productInCartIndex >= 0) {
            // structuredClone clonamos el array base 
            // nota structuredClone solo usarlo en objetos arrays pequeños por el rendimiento 
            const newCart = structuredClone(cart)
            // entramos a la poscision donde se encuentra el producto 
            newCart[productInCartIndex].quantity += 1;
            console.log(newCart, 'newcart');
            return setCart(newCart);
        }

        // si el producto no esta en el carrito 
        // tomamos lo que ya tenia y se lo agregamos con la cantidad de 1

        ////////////////////////////////
        // setCart(prevState =>([
        //     ...prevState,
        //     {
        //         ...product,
        //         // quantity: 1
        //     }
        // ]))
        setCart([
            ...cart,
            {
                ...product
            }
        ])




    }


    const clearCart = () => {
        setCart([]);
    }

    const removeFromCart = (product) => {
        // setCart(prevState => [...prevState.filter(item => item.id !== product.id)])
        setCart([...cart.filter(item => item.id !== product.id)])

    }


    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            removeFromCart,

        }}
        >
            {children}
        </CartContext.Provider>
    )
}



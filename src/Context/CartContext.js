import React from "react";

export const CartContext = React.createContext();

export function CartProvider({ children }) {

    const [cart, setCart] = React.useState([])

    const addToCart = (product) => {
        console.log(product);
        // setCart();
        // buscamos si el producto esta en el carrito 
        const productInCartIndex = cart.findIndex(item => item.id === product.id);
        // contador para cantidad de producto 
        if (productInCartIndex >= 0) {
            // structuredClone clonamos el array base 
            // nota structuredClone solo usarlo en objetos arrays pequeños por el rendimiento 
            const newCart = structuredClone(cart)
            // entramos a la poscision donde se encuentra el producto 
            newCart[productInCartIndex].quantity += 1;
            return setCart(newCart);
        }
        // si el producto no esta en el carrito 
        // tomamos lo que ya tenia y se lo agregamos con la cantidad de 1
        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}

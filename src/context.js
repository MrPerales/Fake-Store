import React, { createContext } from "react";

// 1.- creamos el contexto 
// Este es el que tenemos que consumir  
const Context = createContext();

// 2.- Creamos el Provider para porveer el contexto 
// este es el que nos provee acceso al acontexto 
// encerramos en este compoenente los componentes que quieres que pasen los states
function ContextProvider({ children }) {

    // get details
    const [productDetails, setProductDetails] = React.useState({})
    //open List Car
    const [openCar, setOpenCar] = React.useState(false);
    //open MenuAccount 
    const [menuAccount, setMenuAccount] = React.useState(false)



    return (
        <Context.Provider
            value={{
                openCar,
                setOpenCar,
                menuAccount,
                setMenuAccount,
                productDetails,
                setProductDetails
            }}


        >
            {children}
        </Context.Provider>
    );
}
export { Context, ContextProvider }
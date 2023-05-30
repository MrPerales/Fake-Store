import React, { useState } from "react";

function useLocalStorage(key, initialValue) {

    const [storedValue, setStoredValue] = React.useState(() => {

        if (typeof window === "undefined") {
            return initialValue;
          }
        try {
            // intentamos recuperar del localstorage el elemento que tenemos en la key
            const item = window.localStorage.getItem(key);
            // console.log('localStorage');
            // parseamos el contenido para poderlo recuperarlo
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error,'error');
            return initialValue
        }
    });

    const setValue = value => {
        try {
            setStoredValue(value);
            window.localStorage.setItem( key , JSON.stringify(value))
          
            console.log(value,'setValue');

        } catch (error) {
            console.log(error);
        }
    }

    return [storedValue, setValue];

}


export { useLocalStorage }
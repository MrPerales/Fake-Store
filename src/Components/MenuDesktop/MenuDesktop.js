import React from "react";
import './MenuDesktop.css'
import { NavLink } from "react-router-dom";



function MenuDesktop() {

    return (
        <>
            <div className="menu">
                <ul className="menu__ul">

                    {options.map((option) => (
                        <li key={option.text}>
                            <NavLink
                                to={option.to}
                            >
                                {option.text}
                            </NavLink>

                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

const options = []
options.push({
    to: '/my-orders',
    text: 'My orders',
    private: false,
});
options.push({
    to: '/my-account',
    text: 'My account',
    private: false,
});
options.push({
    to: '/login',
    text: 'Sing out',
    private: false,
});


export { MenuDesktop }
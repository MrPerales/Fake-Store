import React from "react";
import './Menu.css'
import { NavLink } from "react-router-dom";
function Menu() {
    return (

        <header>
            <nav className="navbar">

                <img src="https://cdn-icons-png.flaticon.com/512/6364/6364542.png" alt="bars" className="figure-logo burgerMenu" />

                <div className="nav-left">

                    <img src="https://www.pngkey.com/png/detail/66-661551_white-blank-shield-logo-school-logo-template-free.png" alt="logo" className="logo" />

                    <ul className="nav-links">
                        {/* with Navlink */}
                        {routes.map(route => (
                            <li key={route.text}>
                                <NavLink
                                    style={({ isActive }) => ({
                                        color: isActive ? '#ACD9B2' : '#c7c7c7',
                                    })}
                                    to={route.to}
                                >
                                    {route.text}
                                </NavLink>
                            </li>


                        ))}
                    </ul>
                </div>
                <div className="nav-right">
                    <ul>
                        <li className="navbar-Email">Example@example.com</li>
                        <li className="navbar-carrito-icon" >
                            <img src="https://icons.veryicon.com/png/o/transport/vehicle-management-icon-library/add-vehicles.png" alt="icon-add-car" className="icon-car" />

                        </li>

                    </ul>

                </div>


            </nav>
        </header>

    );
}
//////// Array Routes//////
const routes = [];
routes.push({
    to: '/',
    text: 'home',
    private: false,
});
routes.push({
    to: '/clothes',
    text: 'clothes',
    private: false,
});
routes.push({
    to: '/electronics',
    text: 'electronics',
    private: false,
});
routes.push({
    to: '/furniture',
    text: 'furniture',
    private: false,
});
routes.push({
    to: '/toys',
    text: 'toys',
    private: false,
});
routes.push({
    to: '/others',
    text: 'others',
    private: false,
});






export { Menu };
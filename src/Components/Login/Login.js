import React from "react";
import './login.css'
function Login() {
    return (
        <>
            <div className="login">
                <div className="form-container">
                    <img
                        src="https://www.pngkey.com/png/detail/66-661551_white-blank-shield-logo-school-logo-template-free.png"
                        alt="logo"
                        className="logo-login"
                    />

                    <form action="#" className="form">
                        <label for="email" className="label">Email address</label>
                        <input type="email" id="email" placeholder="example@example.com" className="input input-email" />

                        <label for="password" className="label">Password</label>
                        <input type="password" id="password" placeholder="*********" className="input input-password" />

                        <input type="submit" value="Login" className="primary-button login-button" />
                        <a href="#" className="link">Forgot my password</a>
                        <input type="submit" className="submit" value="Sign up" />

                    </form>



                </div>
            </div>


        </>
    )
}
export { Login };
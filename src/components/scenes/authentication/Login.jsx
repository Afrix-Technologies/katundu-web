import React from "react";
import { Link } from "react-router-dom";

import AppBar from './../../global/AppBar';

import "./styles/auth.css";

const Login = () => {
    return (
        <>
            <AppBar />
            <main className="auth">
                <form>
                    <h2>Login</h2>
                    <div className="inputs">
                        <input type="email" placeholder="Email (Eg: example.email.com)" />
                        <input type="password" placeholder="Password (Eg: ********)" />
                        <button>Login</button>
                        <Link to="/forgot-password">Forgot password</Link>
                        <hr />
                        <Link to="/sign-up">Not yet a user? <b>sign up</b></Link>
                    </div>
                </form>
            </main>
        </>
    );
}

export default Login;
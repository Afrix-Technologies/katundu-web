import React from "react";
import { Link } from "react-router-dom";
import AppBar from './../../global/AppBar';

import "./styles/auth.css";

const SignUp = () => {
    return (
        <>
            <AppBar />
            <main className="auth">
                <form>
                    <h2>Sign Up</h2>
                    <div className="inputs">
                        <input type="text" placeholder="First Name (Eg: John)" />
                        <input type="text" placeholder="Last Name (Eg: Doe)" />
                        <input type="email" placeholder="Email (Eg: example.email.com)" />
                        <input type="password" placeholder="Password (Eg: ********)" />
                        <input type="password" placeholder="Confirm Password (Eg: ********)" />
                        <button>Sign Up</button>
                        <hr />
                        <Link to="/login">Already A user? login <b>instead</b></Link>
                    </div>
                </form>
            </main>
        </>
    );
}

export default SignUp;
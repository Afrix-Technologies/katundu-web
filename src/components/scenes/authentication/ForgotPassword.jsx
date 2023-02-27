import React from "react";

import AppBar from '../../global/AppBar';

import "./styles/auth.css";

const ForgotPassword = () => {
    return (
        <>
            <AppBar />
            <main className="auth">
                <form>
                    <h2>Forgot Password</h2>
                    <div className="inputs">
                        <input type="email" placeholder="Email (Eg: example.email.com)" />
                        <button>Submit</button>
                    </div>
                </form>
            </main>
        </>
    );
}

export default ForgotPassword;
import React from "react";

import AppBar from '../../global/AppBar';

import "./styles/auth.css";

const ResetPassword = () => {
    return (
        <>
            <AppBar />
            <main className="auth">
                <form>
                    <h2>Pasword Reset</h2>
                    <div className="inputs">
                        <input type="password" placeholder="Password (Eg: ********)" />
                        <input type="password" placeholder="Confirm Password (Eg: ********)" />
                        <button>Reset Password</button>
                    </div>
                </form>
            </main>
        </>
    );
}

export default ResetPassword;
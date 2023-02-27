import React from "react";

import { useState } from "react";

import { Link } from "react-router-dom";

import "./styles/app-bar.css";

const AppBar = () => {
    
    const [menuBtn, setMenuBtn] = useState (true);
    // const [ActivePage, setActivePage] = useState ('home');
    const mobileMenu = () => {
        if (!menuBtn) {
            setMenuBtn (true)
        }else {
            setMenuBtn (false)
        }
    }
    
    // const handleActivePage = () => {
    //     const anchor = window.location.href.split("/");
    //     setActivePage(anchor[anchor.length - 1]);
    // }
    
    return (
        <>
            <div className="appBar active">
                <div className="logo">
                    <Link to="/"><h1>Katundu.</h1></Link>
                </div>
                <div onClick={mobileMenu} className="mobile ">
                    <span></span> 
                    <span></span> 
                    <span></span> 
                </div>
                <nav className={menuBtn ? "active" : ""}>
                    <div className="menu-nav-bar">
                        <Link onClick={menuBtn && mobileMenu} to="/shippers">Shippers</Link>
                        <Link onClick={menuBtn && mobileMenu} to="/carries">Carriers</Link>
                        <Link onClick={menuBtn && mobileMenu} to="/features">Features</Link>
                        <Link onClick={menuBtn && mobileMenu} to="/about">About Us</Link>
                    </div>

                    <div className="btns">
                        <Link onClick={menuBtn && mobileMenu} to="/sign-up">Sign Up</Link>
                        <Link onClick={menuBtn && mobileMenu} to="/login">Login</Link>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default AppBar;
import React from "react";

import { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import "./styles/aNavLinkpp-bar.css";

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
    
    
    return (
        <>
            <div className="appBar active">
                <div className="logo">
                    <Link to="/"><h1>Katundu.</h1></Link>
                </div>
                <div onClick={mobileMenu} className="mobile">
                    <span></span> 
                    <span></span> 
                    <span></span> 
                </div>
                <nav className={menuBtn ? "active" : ""}>
                    <div className="menu-nav-bar">
                        <NavLink activeClassName="active" onClick={menuBtn && mobileMenu} to="/shippers">Shippers</NavLink>
                        <NavLink activeClassName="active" onClick={menuBtn && mobileMenu} to="/carries">Carriers</NavLink>
                        <NavLink activeClassName="active" onClick={menuBtn && mobileMenu} to="/features">Features</NavLink>
                        <NavLink activeClassName="active" onClick={menuBtn && mobileMenu} to="/about">About Us</NavLink>
                    </div>

                    <div className="btns">
                        <NavLink onClick={menuBtn && mobileMenu} to="/sign-up">Sign Up</NavLink>
                        <NavLink onClick={menuBtn && mobileMenu} to="/login">Login</NavLink>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default AppBar;
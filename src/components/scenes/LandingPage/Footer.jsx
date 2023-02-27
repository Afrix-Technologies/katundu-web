import React from "react";

import "./styles/footer.css";

const Footer = () => {
    return (
        <footer className="bg-1">
            &copy; {new Date().getFullYear()} All Rights Reserved, &nbsp; <b> Kutundu</b>
        </footer>
    );
}

export default Footer;
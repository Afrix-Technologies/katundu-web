import React from "react";

import TcImg from "./../../../assets/images/cargo.png";

import "./styles/about.css";

const BookUs = () => {
    return (
        <div className="aboutSection bg-2">
            <div className="info-about-section">
                <h2>Immediate Booking</h2>
                    
                <p>
                    Without the waste of your time, prepare and bookloads.
                    Katundu reduces your for emailing and calling associated with finding
                    and booking a load. Get your cargo on the move with just a few clicks.

                </p>
                <div class="why-us">
                    <a href="/" class="btn">Ship Cargo With Us</a>
                </div>
            </div>
            <div className="img">
                <img src={TcImg} alt="Taking cargo transportation and logistics in a new direction with an advanced platform for both shippers and carriers." />
            </div>
        </div>
    );
}

export default BookUs;
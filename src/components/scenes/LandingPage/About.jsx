import React from "react";

import TcImg from "./../../../assets/images/cargo.png";

import "./styles/about.css";

const About = () => {
    return (
        <div className="aboutSection bg-2">
            <div className="info-about-section">
                <h2>Mission</h2>
                <p>
                    By embracing digital transformation and technological 
                    advancements, a cutting-edge Katundu enables long-term 
                    growth, efficiency, and productivity.
                </p>
                <h2>Vision</h2>
                <p>
                    Being at the forefront of the cargo transportation and 
                    logistics through creativity, dependability, sustainability, 
                    and cutting-edge technology.
                </p>
            </div>
            <div className="img">
                <img src={TcImg} alt="Taking cargo transportation and logistics in a new direction with an advanced platform for both shippers and carriers." />
            </div>
        </div>
    );
}

export default About;
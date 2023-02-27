import React from "react";

import "./styles/hero.css";

import videoBG from "./../../../assets/videos/Logistics.mp4";

const HeroSection = () => {
    return (
        <div className="main">
            <video src={videoBG} autoPlay loop muted></video>
            <div className="content">
                <div className="content-info">
                    
                    <h2>Move anything of any weight to any where with us</h2>
                    <p> Taking cargo transportation and logistics in a new direction with an advanced platform for both shippers and carriers.</p>
                    
                    <div class="hero-btns">
                        <a href="/">Book Now</a>
                        <a href="/">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default HeroSection;
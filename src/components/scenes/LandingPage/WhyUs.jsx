import React from "react";

import "./styles/whyus.css";

const WhyUs = () => {
    return (
        <div className="why-us-section bg-1">
            <h2>Why Katundu</h2>
            <div class="card-container">
                <div class="card">
                    Opmises cargo transportation and logistics
                </div>
                <div class="card">
                    Impoves the efficiency of delivery services
                </div>
                <div class="card">
                    Reduces logistics costs
                </div>
            </div>

            <div class="card-container">
                <div class="card">
                    Opmises delivery routes
                </div>
                <div className="card space"></div>
                <div class="card">
                    Ensures effective infrastructure ustilisation
                </div>
            </div>
            <div class="learn-more">
                <a href="/" class="btn">learn more</a>
            </div>
        </div>
    );
}

export default WhyUs;
import React from "react";
import HeroSection from "./HeroSection";
import About from "./About";
import BookUs from "./BookUs";
import WhyUs from "./WhyUs";
import Footer from "./Footer";



const LandingPage = () => {
    return (
        <>
            <HeroSection />
            <About />
            <WhyUs />
            <BookUs />
            <Footer />
        </>
    );
};

export default LandingPage;
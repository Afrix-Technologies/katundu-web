import SectionSideBySide from "../../global/SectionSideBySide";
import FirstInfo from "./FirstInfo";
import HeroSection from "./HeroSection";
import "./styles/carriers.css";

import img from "./../../../assets/images/carrier2.jpg";
import img2 from "./../../../assets/images/carrier1.jpg";
import img3 from "./../../../assets/images/trucks.jpg";


import Footer from "../LandingPage/Footer";

const Carriers = () => {
    const points = [
        {
            key: 1,
            point: "Find bid on, and win loads-24/7"
        },
        {
            key: 2,
            point: "Get paid faster and quickly with Katundu easyPay"
        },
        {
            key: 3,
            point: "Request hassel free detention or lumper codes with a single tap"
        },
        {
            key: 4,
            point: "Bundle your head hauls and backhauls to reduce empty kilometers"
        },
        {
            key: 5,
            point: "Save up to 50% per truck, per year with truck savings"
        }
    ];

    const points2 = [
        {
            key: 1,
            point: "Find and manage your work right from your phone or computer"
        },
        {
            key: 2,
            point: "See shippers and facility names, addresses and ratings on loads"
        },
        {
            key: 3,
            point: "Send BOLs through the app and streamline bookkeeping"
        },
        {
            key: 4,
            point: "Track your fleet's locations and and arrivel times with GPS"
        },
        {
            key: 5,
            point: "Get automatic alerts when loads are available on your prefferred lenes"
        }
    ]

    const points3 = [
        {
            key: 1,
            point: "Get free access to ten of thousands of loads"
        },
        {
            key: 2,
            point: "Haul power only loads using just your tractor - we'll supply trailers"
        },
        {
            key: 3,
            point: "Secure dedicated freight contracts"
        },
        {
            key: 4,
            point: "Book it all through the Katundu App and overcome the pitfalls of phone negotiations linke hagging, language barriers, and cultural biasses"
        },
    ]
    return (
        <>
            <HeroSection />
            <FirstInfo />
            <div className="bg-2">
                <SectionSideBySide 
                    title="make more money" 
                    fdRR="row-reverse"
                    img={img}
                    para="
                        Our digital freight network gives your the best oppunitunity to maximize your earnings 
                    "
                    btn="Sign Up"
                    link="/sign-up"
                    points={points}
                />
            </div>
            <div className="bg-1">
                <SectionSideBySide 
                    title="Haul without haseel" 
                    fdRR="row"
                    img={img2}
                    para="
                        With everything done easily through our app, you'll spend less time on chasing freights and more on what matters 
                    "
                    btn="Get the Free App"
                    link="/sign-up"
                    points={points2}
                />
            </div>
            <div className="bg-2">
                <SectionSideBySide 
                    title="loads for all" 
                    fdRR="row-reverse"
                    img={img3}
                    para="
                        Carriers of all Sizes can sign up and Book their first loads in just minuets
                    "
                    btn="Find Loads"
                    link="/sign-up"
                    points={points3}
                />
            </div>
            <Footer />
        </>
    );
}

export default Carriers;
import Footer from "../LandingPage/Footer";
import FirstInfo from "./FirstInfo";
import HeroSection from "./HeroSection";
import SectionSideBySide from "../../global/SectionSideBySide";

import img from "./../../../assets/images/cargo.png";

const Shippers = () => {
    const points = [
        {
            key: 1,
            point: "Automatic vetting before every load.  Every driver in our network is vetted for their operating authority, insurance status, safety, and performance before every load."
        },
        {
            key: 2,
            point: "Real-time performance monitoring. Our tech monitors shipments and proactively flags issues like a delayed ETA or stopped truck to our 24/7 operations team for fast resolution."
        },
        {
            key: 3,
            point: "Quality capacity on demand. When we detect an increase in volume on any lane nationwide, our tech instantly alerts our carrier network to boost capacity by up to 40%. The result: More flexibility, faster coverage, and more competitive rates."
        }
    ];

    const points2 = [
        {
            key: 1,
            point: "1,500+ data points on every load. Our 94% carrier app compliance delivers meaningful data and on-demand insights that align transportation teams and improve performance."
        },
        {
            key: 2,
            point: "Real-time shipment tracking. Map trucks and drop trailers in real time, with GPS location updates every five minutes. Shareable links keep stakeholders in the know."
        },
        {
            key: 3,
            point: "Facility insights dashboards. Get on-demand access to 40+ key metrics like on-time performance, accessorial spend, dwell time, facility reviews, and more that improve the facility experience and help you become a shipper of choice."
        }
    ]

    const points3 = [
        {
            key: 1,
            point: "4000+ trucks compete for your loads. Our app instantly offers your loads to thousands of qualified drivers. Drivers bid and compete to win your freight, resulting in market-competitive rates."
        },
        {
            key: 2,
            point: "The most efficient match, in minutes. We use machine learning to find you the best truck by proximity, price, OTP likelihood, and more. Should issues arise, our tech can quickly find another truck."
        },
        {
            key: 3,
            point: "Automated reloads for smarter asset utilization. Our tech identifies opportunities to combine multiple loads into batches, reducing carbon emissions by 45% and driver fall-offs by 11%."
        },
    ]
    // &lt;b&gt; &lt;/b&gt;
    return (
        <>
            <HeroSection />
            <FirstInfo />

            <div className="bg-2">
                <SectionSideBySide 
                    title="More reliable capacity" 
                    fdRR="row-reverse"
                    img={img}
                    para="
                        Our network has seen 11% fewer crashes compared to the industry, and 99.98% of our loads get delivered without a cargo claim. 
                    "
                    btn="Sign Up"
                    link="/sign-up"
                    points={points}
                />
            </div>
            <div className="bg-1">
                <SectionSideBySide 
                    title="Hi-Fi Visisblity" 
                    fdRR="row"
                    img={img}
                    para="
                        A new class of visibility and transparency that shippers tell us they have never seen before — not from any other transportation provider in their routing guide.
                    "
                    btn="Get the Free App"
                    link="/sign-up"
                    points={points2}
                />
            </div>
            <div className="bg-2">
                <SectionSideBySide 
                    title="Tech that drives efficiency" 
                    fdRR="row-reverse"
                    img={img}
                    para="
                        Tendering, pricing, and matching happens in minutes, identifying the best, most efficient truck to move every shipment. The result? Better service, lower costs, and reduced empty miles.
                    "
                    btn="Find Carriers"
                    link="/sign-up"
                    points={points3}
                />
            </div>

            <Footer />
        </>
    );
}

export default Shippers;
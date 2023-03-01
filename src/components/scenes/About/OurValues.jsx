import SectionSideBySide from "../../global/SectionSideBySide"

import img from "./../../../assets/images/teamValue.jpg"
import img2 from "./../../../assets/images/carrier1.jpg"
import img3 from "./../../../assets/images/trucks.jpg"
import img4 from "./../../../assets/images/team.jpg"

const OurValues = () => {
    return (
        <>
            <div className="bg-1 container">
                <SectionSideBySide
                    title="
                        Our Values
                    "
                    para="
                        Katundu is the Regions leading DIDGITAL FREIGHT NETWORK. We move millions of truckloads around the Region through our connected network of carriers. saving money for shippers, increasing earning for drivers and eliminating carborn waste emissions of our planet.
                    "
                    link="/readmore/ourvalues"

                    img={img3}

                    fdRR="row-reverse"
                />
            </div>
            <div className="bg-2 container">
                <SectionSideBySide 
                    title="
                        We are defined by Our Values
                    "
                    para="
                        Katundu is the Regions leading DIDGITAL FREIGHT NETWORK. We move millions of truckloads around the Region through our connected network of carriers. saving money for shippers, increasing earning for drivers and eliminating carborn waste emissions of our planet.
                    "
                    link="/readmore/ourvalues"

                    img={img2}

                    fdRR="row"
                />
            </div>
            <div className="bg-1 container">
                <SectionSideBySide 
                    title="
                        Join our team in moving freight to the future
                    "
                    para="
                        Katundu is the Regions leading DIDGITAL FREIGHT NETWORK. We move millions of truckloads around the Region through our connected network of carriers. saving money for shippers, increasing earning for drivers and eliminating carborn waste emissions of our planet.
                    "
                    link="/readmore/ourvalues"

                    img={img}

                    fdRR="row-reverse"
                />
            </div>
            <div className="bg-2 container">
                <SectionSideBySide 
                    title="
                        leadership
                    "
                    para="
                        Katundu is the Regions leading DIDGITAL FREIGHT NETWORK. We move millions of truckloads around the Region through our connected network of carriers. saving money for shippers, increasing earning for drivers and eliminating carborn waste emissions of our planet.
                    "
                    link="/readmore/ourvalues"

                    img={img4}

                    fdRR="row"
                />
            </div>
        </>
    );
}

export default OurValues;
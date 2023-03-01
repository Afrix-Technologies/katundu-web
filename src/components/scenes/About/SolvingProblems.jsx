import ImageCard from "../../global/ImageCard";
import SceneIntro from "../../global/SceneIntro";
import img1 from "./../../../assets/images/cargo.png";
import img2 from "./../../../assets/images/carrier1.jpg";
import img3 from "./../../../assets/images/shippers.jpg";

const SolvingProblems = () => {
    const cardData = [
        {
            key: 1,
            title: "For Shippers",
            anchor: "/readmore/forshippers",
            img: img3,
            para: "By automationg the matching, pricing and scheduling of trucks, we segnifically reduce shippers costs plus, with the unique approch to carrier companies, we get each load deliverd safely and on time.",
        },
        {
            key: 2,
            title: "For Carries",
            anchor: "/readmore/forcarriers",
            img: img2,
            para: "Katundu helpscarriers of all sizes earn more the less hassle. our app makes it easy for carriers to find, bid on. and haul loads that keep their trucks full and earning on the lanes they like to run."
        },
        {
            key: 3,
            title: "For the Planet",
            anchor: "/readmore/fortheplanet",
            img: img1,
            para: "Shipper and Carriers leverage our technology and data to reduce empty Kilometers and lower carbon emissions. together we're creating a more sustainable and responsible supply chain and saving the planet on the way."
        }
    ];
    return (
        <div className="bg-2 container">
            <SceneIntro 
                title="Solving the Fundamental  problems of frieght"
                para="
                    Katundu is the Regions leading DIDGITAL FREIGHT NETWORK. We move millions of truckloads around the Region through our connected network of carriers. saving money for shippers, increasing earning for drivers and eliminating carborn waste emissions of our planet.
                "
            />
            <ImageCard numberCardsAndInfo={cardData} />
        </div> 
    );
}

export default SolvingProblems;
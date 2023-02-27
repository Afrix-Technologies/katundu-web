// import Cards from "../../global/Cards";
import ImageCard from "../../global/ImageCard";
import SceneIntro from "../../global/SceneIntro";

const FirstInfo = () => {
    const cardData = [
        {   
            key: 1,
            title: "Book Now",
            para: "Instantly Book Carriers of Loads and get your load deliverd on TIme."
        },
        {
            key: 2,
            title: "Live Tracking",
            para: "We are Data driven and GPS location trucking Technology company to truck your load."
        },
        {
            key: 3,
            title: "Load Board",
            para: "See all deliverd and all loads in transite for transparency and truck loads"
        },
        {
            key: 3,
            title: "Katundu wallet",
            para: "Makes it easier and faster for you do transactions on katundu "
        }
    ];
    return (
        <div className="bg-2 container"style={{justifyContent: "flex-start"}}>
            <SceneIntro title="
                    Katundu features are well  tailored
                " 
                para="
                    These Features are tailored to inhance and make easy the connection between the carriers and shippers. There is a feature for everyone
                " 
            /> 
            <ImageCard numberCardsAndInfo={cardData} />
        </div>


    );
}

export default FirstInfo;
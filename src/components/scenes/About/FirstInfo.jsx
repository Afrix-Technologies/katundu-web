import Cards from "../../global/Cards";
import SceneIntro from "../../global/SceneIntro";

const FirstInfo = () => {
    const cardData = [
        {   
            key: 1,
            title: "80%",
            para: "Of every dollar moving freight spent on trucking"
        },
        {
            key: 2,
            title: "$800B",
            para: "Is spent annually on trucking services"
        },
        {
            key: 3,
            title: "35%",
            para: "Of all Kilometers driven are empty Kilometers leading to waste"
        },
        {
            key: 4,
            title: "87M",
            para: "Metric tons of CO2 equivalent emissions result from empty Kilometers"
        }
    ];
    return (
        <div className="bg-1 container">
            <SceneIntro title="
                    in 2023, Katundu started a movement towards efficient frieght
                " 
                para="
                    We build technology to find smarter ways to conntect shippers with carriers while solving some of the toughest problems that result in waste in the freight  industry.
                " 
            /> 
            <SceneIntro title="
                Trucking is one of the largest industries in the SADC Region 
            " 
            para="

                " 
            /> 

            <Cards numberCardsAndInfo={cardData} />
        </div>

    );
}

export default FirstInfo;
// import Cards from "../../global/Cards";
import ImageCard from "../../global/ImageCard";
import SceneIntro from "../../global/SceneIntro";

const FirstInfo = () => {
    const cardData = [
        {   
            key: 1,
            title: "increase earnings",
            para: "Drive your trucking business into the future by keeping trucks full on the lenes you like to run"
        },
        {
            key: 2,
            title: "Reduce Hassle",
            para: "Work smart make your job easier and cut operational costs and boost your profit."
        },
        {
            key: 3,
            title: "See all the loads",
            para: "have equal access and opptunities to the largerst frieghts from the regions best shippers"
        }
    ];
    return (
        <div className="bg-1 container">
            <SceneIntro title="
                    Katundu carriers are efficient on delivery
                " 
                para="
                    With our smart technology our Carriers always deliever on time. Our Staffs are dedicated in reducing empty Kilometers for our Carriers, the reduction of empty kilometers greatly reduces cost and saves our planet. 
                " 
            /> 
            <SceneIntro title="
                Why Carriers Choose Katundu in the SADC Region 
            " 
            para="

                " 
            /> 

            <ImageCard numberCardsAndInfo={cardData} />
        </div>

    );
}

export default FirstInfo;
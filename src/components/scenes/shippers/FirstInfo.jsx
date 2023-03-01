import ImageCard from "../../global/ImageCard";
import SceneIntro from "../../global/SceneIntro";

import img1 from "./../../../assets/images/shippers.jpg";
import img2 from "./../../../assets/images/truck.jpg";
import img3 from "./../../../assets/images/cargo.png";

const FirstInfo = () => {
    const cardData = [
        {
            key: 1,
            title: "Drop capacity",
            anchor: "/readmore/dropcapacity",
            img: img1,
            para: "Supplement your own fleet with hundreds of thousands of on-demand tractors.",
        },
        {
            key: 2,
            title: "Dedicated capacity",
            anchor: "/readmore/dedicatedcapacity",
            img: img2,
            para: "The predictable pricing and consistent service you expect. Now with the speed and flexibility you’ve always wanted."
        },
        {
            key: 3,
            title: "Primary",
            anchor: "/readmore/primary",
            img: img3,
            para: "Guaranteed savings with Guaranteed Primary. Save money in soft markets and get 100% tender acceptance in tight markets."
        }
    ];
    return (
        <div className="bg-2 container">
            <SceneIntro 
                title="Innovation across your routing"
                para="
                    Secure full truckload capacity across live and drop-and-hook through our regionwide network of 20,000 dry van and reefer trucks, 
                    our own fleet of drop trailers, and the industry’s largest power-only network.

                    Katundu is data and technology to help Fortune shippers find the most efficient truck for every load."
            />
            <ImageCard numberCardsAndInfo={cardData} />
        </div> 
    );
}

export default FirstInfo;
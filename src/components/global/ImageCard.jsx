import { Link } from "react-router-dom";

import "./styles/image-card.css";
import forwardArrow from "./../../assets/images//icons/arrow-f.png";

const ImageCard = (props) => {
    const CardElement = props.numberCardsAndInfo.map (cardItem => {
        return (
            <div className="card" index={cardItem.key}>
                {
                    (cardItem.img) && <div className="img"><img src={cardItem.img} alt={cardItem.title} /></div>
                }
                
                <h2>{cardItem.title}</h2>
                <div className="info">
                    <p>
                        {cardItem.para}
                    </p>
                    
                    {
                        (cardItem.anchor) ? <Link to={cardItem.anchor}><img style={{width: "50%"}} src={forwardArrow} alt="Icon"/></Link> : <div className="a"></div>
                    }
                </div>
            </div>
        );
    });
    return (
        <div className="img-card-holder ">
            { CardElement }
        </div>
    );

}

export default ImageCard;
import { Link } from "react-router-dom";

import "./styles/image-card.css";

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
                        (cardItem.anchor) ? <Link to={cardItem.anchor}>Read More</Link> : <div className="a"></div>
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
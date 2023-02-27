import "./styles/cards.css";

const Cards = (props) => {
    const CardElement = props.numberCardsAndInfo.map (cardItem => {
        return (
            <div className="card" index={cardItem.key}>
                <h2>{cardItem.title}</h2>
                <p>
                    {cardItem.para}
                </p>
            </div>
        );
    });
    return (
        <div className="cards-h">

            { CardElement }

        </div>
    );
}

export default Cards;